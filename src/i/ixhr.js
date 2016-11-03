import React from 'react';
import { createPortal } from 'portals';

class ixhr {
    static send (options, thenHandler, catchHandler) {
        var {
            method: method = 'GET',
            url: url = '/',
            headers: headers = {},
            params: params = '',
            pathKeys: pathKeys = '',
            body: body = ''
            } = options;

        url = options.url;

        if (!headers['Content-Type']) {
            headers['Content-Type'] = 'application/json';
        }

        if (pathKeys !== '') {
            url = this.createURL(url, pathKeys);
        }

        if (params !== '') {
            url = url + this.params(params);
        }

        return new createPortal().send({
            method: method,
            url: url,
            headers: headers,
            body: body
        })
        .then(function (res) {
            thenHandler(res.status, res.body, res.xhr);
        })
        .catch(function (res) {
            catchHandler(res.status, res.body, res.xhr);
        });
    }

    static params (params) {
        var string = '?',
            paramsArr = [];

        for (var key in params) {
            if (Array.isArray(params[key])) {
                params[key].forEach((param) => (paramsArr.push(key + '=' + param)));
            } else {
                paramsArr.push(key + '=' + params[key]);
            }
        }

        return string = string + paramsArr.join('&');
    }

    static createURL (templateURL, params) {
        return templateURL.replace(/({(\w+)})/gi, function (searched, pathParam, argument) {
            return argument in params ? params[argument] : searched;
        });
    }
}

export default ixhr;
