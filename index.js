import _ from 'lodash';

export default function (url, routers) {
    return async function (ctx, next) {
        if (url === ctx.url) {
            let results = [];
            routers.forEach(router => {
                results = _.get(router, 'stack', []).map(route => {
                    return {
                        path: route.path,
                        methods: route.methods,
                        function: _.get(route, 'stack[0].name', '')
                    };
                })
            });
            ctx.body = results;
        }

        return next();
    }
};