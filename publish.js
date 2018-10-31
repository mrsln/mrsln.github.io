'use strict';
 
var theme = require('jsonresume-theme-onepage');
 
var resume = require('./resume.json');
process.stdout.write(theme.render(resume));
