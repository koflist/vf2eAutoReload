module.exports = {
    command: {
        start: 'run'
    },
    config: {
        root: '../cube',
        proxy: 'localhost:9000',
        port: '8181',
        //delay: 500,
    },
    watching: {
        js: 'build/dev/js/**/*.js',
        jade: 'views/**/*.jade',
        //由于vf2e会编译全部依赖的styl,请指定styl对应输出的css,避免多余刷新
        // => build/dev//css/activity/activity.css
        css: 'build/dev/css/**/*.css',
    }
}
