'use strict';

var autoprefixer = require('autoprefixer'),
    cssnano = require('cssnano'),
    calc = require('postcss-calc'),
    precss = require('precss');

//var config = require('./config');

var postcss = {

  build: {
    options: {
      map: true,
      processors: [
        calc(),
        precss(),
        autoprefixer({'browsers': 'last 2 versions'}), // vendor prefix
      ]
    },
    files: {
      '.build/src/htdocs/css/alert.css':
          'src/htdocs/css/alert.scss',
      '.build/src/htdocs/css/flexible-grid.css':
          'src/htdocs/css/flexible-grid.scss',
      '.build/src/htdocs/css/jumplist.css':
          'src/htdocs/css/jumplist.scss',
      '.build/src/htdocs/css/references.css':
          'src/htdocs/css/references.scss',
      '.build/src/htdocs/css/responsive-table.css':
          'src/htdocs/css/responsive-table.scss',

      '.build/src/htdocs/site/default/index.css':
          'src/htdocs/site/default/index.scss',
      '.build/src/htdocs/site/earthquake/index.css':
          'src/htdocs/site/earthquake/index.scss',
      '.build/src/htdocs/site/geomag/index.css':
          'src/htdocs/site/geomag/index.scss',
      '.build/src/htdocs/site/landslides/index.css':
          'src/htdocs/site/landslides/index.scss'
    }
  },

  dist: {
    options: {
      processors: [
        cssnano({zindex: false}) // minify
      ]
    },
    files: {
      'dist/htdocs/css/alert.css':
          '.build/src/htdocs/css/alert.css',
      'dist/htdocs/css/flexible-grid.css':
          '.build/src/htdocs/css/flexible-grid.css',
      'dist/htdocs/css/jumplist.css':
          '.build/src/htdocs/css/jumplist.css',
      'dist/htdocs/css/references.css':
          '.build/src/htdocs/css/references.css',
      'dist/htdocs/css/responsive-table.css':
          '.build/src/htdocs/css/responsive-table.css',

      'dist/htdocs/site/default/index.css':
          '.build/src/htdocs/site/default/index.css',
      'dist/htdocs/site/earthquake/index.css':
          '.build/src/htdocs/site/earthquake/index.css',
      'dist/htdocs/site/geomag/index.css':
          '.build/src/htdocs/site/geomag/index.css',
      'dist/htdocs/site/landslides/index.css':
          '.build/src/htdocs/site/landslides/index.css'
    }
  }
};

module.exports = postcss;
