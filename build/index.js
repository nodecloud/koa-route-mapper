'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (url, routers) {
    return (() => {
        var _ref = _asyncToGenerator(function* (ctx, next) {
            if (url === ctx.url) {
                let results = [];
                routers.forEach(function (router) {
                    results = _lodash2.default.get(router, 'stack', []).map(function (route) {
                        return {
                            path: route.path,
                            methods: route.methods,
                            function: _lodash2.default.get(route, 'stack', []).map(function (stack) {
                                return stack.name;
                            }).filter(function (name) {
                                return name;
                            })
                        };
                    });
                });
                ctx.body = results;
            }

            return next();
        });

        return function (_x, _x2) {
            return _ref.apply(this, arguments);
        };
    })();
};

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

;