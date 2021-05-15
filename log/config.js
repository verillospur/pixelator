// 
//  config.js 
//  ~/log/ 
// 
//  created:    05/01/2021 
// 
//  log config
// 
'use strict';

const config = () => {
    return {
        
        // encoding
        ENCODING_DEFAULT: 'utf8',
        
        // log file
        log_file_dir: 'C:\\dev\\pixelator\\pixelator\\_logs',
        log_file_name_format: 'yyyyMMdd',
        log_file_name_ext: '.log',
        log_file_path_seperator: '\\',

        // messages
        log_message_prefix_format: 'yyyyMMdd-hhmmss⏩▶',

        // console
        always_write_to_console: false,
    };
};

module.exports = config();
