import React from 'react';

/**
 * ArticlePage
 */
class ArticlePage extends React.Component {
    render () {
        console.log('ArticlePage', this.props);

        return (
            <div className='article-page'>
                <h2>This is article page</h2>
            </div>
        );
    }
}

export default ArticlePage;
