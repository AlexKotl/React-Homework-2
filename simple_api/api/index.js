var router = require('express').Router();
var mocks = require('./mock');
var assign = require('object-assign');

router.get('/article', function (req, res, next) {
    var articles = mocks.articles.map(function (article) {
            return assign({}, article, {
                text: undefined
            })
        }),
        limit = Number(req.query.limit) || articles.length,
        offset = Number(req.query.offset) || 0;

    res.json(articles.slice(offset, limit + offset))
});

router.get('/article/:id', function (req, res, next) {
    var article = mocks.articles.filter(function (article) {
        return article.id == req.params.id
    })[0];

    if (article)
        return res.json(article);

    res.status(404).json({error: "not found"});
});

router.post('/article', function (req, res, next) {
    var body = req.body;
    var article = {
            id: Date.now().toString(),
            name: body.name,
            title: body.title,
            text: body.text,
            comments: []
        };

    mocks.articles.push(article);
    res.json(article)
});

router.get('/comment', function (req, res, next) {
    var aid = req.query.article;

    if (aid) {
        var article = mocks.articles.find(function(article) {
                return article.id == aid;
            });

        return res.json((article.comments || []).map(function(id) {
                    return mocks.comments.find(function(comment) {
                        return comment.id == id;
                    });
                }));
    }

    var limit = Number(req.query.limit) || mocks.comments.length,
        offset = Number(req.query.offset) || 0;

    res.json({
        total: mocks.comments.length,
        records: mocks.comments.slice(offset, limit + offset)
    });
});

router.post('/comment', function (req, res, next) {
    var comment = {
        id : Date.now().toString(),
        name: req.body.name,
        date: new Date(),
        text : req.body.text
    };

    mocks.comments.push(comment);
    mocks.articles.find(function(article) {
        return article.id === req.body.article;
    }).comments.push(comment.id);

    res.json(comment);
});

module.exports = router;
