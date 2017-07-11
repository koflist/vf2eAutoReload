'use strict'

const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const reload = browserSync.reload;
const nodemon = require('gulp-nodemon');
const path = require('path');

const command = require('./gulpconfig').command;
const config = require('./gulpconfig').config;
const watchingfiles = require('./gulpconfig').watching;

function getAbsPath(value) {
    let res = path.join(config.root, value);
    return path.join(__dirname, res);
};

function wfs2array(obj) {
    let arraypath = [];
    for (var key in obj) {
        arraypath.push(getAbsPath(obj[key]))
    }
    return arraypath;
}

function startBrowserSync() {
    browserSync.init({
        proxy: config.proxy,
        port: config.port,
        reloadDelay: config.delay,
        files: wfs2array(watchingfiles),
    }, () => {
        console.log('browser sync working ...');
    })
};

// define task
gulp.task(command.start, () => {

    let entry = getAbsPath('app.js');
    let ignoreFiles = ['gulpfile.js', 'gulpconfig.js', 'webpack.config.js', 'node_modules/'].map(getAbsPath);
    nodemon({
            script: entry,
            ignore: ignoreFiles,
        })
        .on('start', startBrowserSync)
})
