import _ from 'lodash';

export default function (url, routers) {
    return async function (ctx, next) {
        if (url === ctx.url) {
            let results = [];
            routers.forEach(router => {
                results = results.concat(_.get(router, 'stack', []).map(route => {
                    return {
                        path: route.path,
                        methods: route.methods,
                        function: _.get(route, 'stack', []).map(stack => {
                            return stack.name;
                        }).filter(name => name)
                    };
                }));
            });
            ctx.body = results;
        }

        return next();
    }
};