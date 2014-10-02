/*
 * grunt-mavenify
 * https://github.com/tenzinkabsang/mavenify
 *
 * Copyright (c) 2014 tenzinkabzang
 * Licensed under the MIT license.
 */

'use strict';

var shell = require('shelljs');
var watch = require('watch');

module.exports = function (grunt) {

    // measures the time each task takes
    require('time-grunt')(grunt);

    function cmdToRun(target) {
        var options = target.options();

        if (options.cmd === '') {
            return 'mvn test -q';
        }
        return options.quite ? options.cmd + ' -q' : options.cmd;
    }

    grunt.registerMultiTask('mavenify', 'run maven goals through grunt', function () {
        // Merge task-specific and/or target-specific options with these defaults.
        this.options({
            quite: true,
            cmd: ''
        });

        var finalCmd = cmdToRun(this);

        grunt.config.set(watch.files, this.filesSrc);

        grunt.config.set(watch.tasks, function () {
            shell.exec(finalCmd);
        });
    });
};
