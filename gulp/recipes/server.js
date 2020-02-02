'use strict';

const gulp = require('gulp');
const path = require('path');
const express = require('express');
const morgan = require('morgan');

module.exports = (config) => {
  return () => {
    let server = express();

    server.use(morgan('dev'));

    server.use(express.static(config.input));
    server.use((req, res) => {
      res.sendFile(path.resolve(config.input, 'index.html'));
    });

    server.listen(config.port, () => {
      console.log(`Static server listening on port ${config.port}`);
    });
  };
};