'use strict';
/*
 |--------------------------------------------------------------------------
 | Browser-sync config file
 |--------------------------------------------------------------------------
 |
 | For up-to-date information about the options:
 |   http://www.browsersync.io/docs/options/
 |
 | There are more options than you see here, these are just the ones that are
 | set internally. See the website for more info.
 |
 |
 */

module.exports = {
  'files': [
    './src/**/*.css',
    './src/dist/**/*.js',
    './src/*.js',
    './src/**/*.json',
    './src/**/*.html',
    './src/**/*.jpg',
    './src/**/*.png',
    './src/**/*.gif'
  ],
  'server': {
    baseDir: './src',
    middleware: function(req, res, next){
      next();
    }
  },
  'port': 3000,
  'open': 'local'
};