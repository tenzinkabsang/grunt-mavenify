/*
 * grunt-mavenify
 * https://github.com/tenzinkabsang/mavenify
 *
 * Copyright (c) 2014 tenzinkabzang
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

    function cmdToRun(target){
        var options = target.options();

        if(options.cmd === ''){
            return 'mvn test -q';
        }
        return options.quite ? options.cmd + ' -q' : options.cmd;
    }

  grunt.registerMultiTask('mavenify', 'run maven goals through grunt', function() {
    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({
        quite: true,
        cmd: ''
    });
  });
};
