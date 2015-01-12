module.exports = function(grunt) {
    // 配置
    grunt.initConfig({
        pkg : grunt.file.readJSON('package.json'),
        jsduck : {
            main: {
                // source paths with your code
                src: [
                    "../bui/bui-common/src",
                    "../bui/bui-mask/src",
                    "../bui/bui-data/src",
                    "../bui/bui-bar/src",
                    "../bui/bui-cookie/src",
                    "../bui/bui-overlay/src",
                    "../bui/bui-calendar/src",
                    "../bui/bui-list/src",
                    "../bui/bui-picker/src",
                    "../bui/bui-menu/src",
                    "../bui/bui-form/src",
                    "../bui/bui-select/src",
                    "../bui/bui-tab/src",
                    "../bui/bui-grid/src",
                    "../bui/bui-editor/src",
                    "../bui/bui-tree/src",
                    "../bui/bui-tooltip/src",
                    "../bui/bui-slider/src",
                    "../bui/bui-extensions/src",
                    "../bui/bui-layout/src",
                    "../bui/bui-module/src",
                    "../bui/bui-uploader/src",
                    "../bui/bui-graphic/src",
                    "../bui/src/imgview"        
                ],

                // docs output dir
                dest: 'api',

                // extra options
                options: {
                    'builtin-classes': true,
                    //'tags':['fileOverview'],
                    'warnings': [ '-dup_member', '-link_ambiguous','-tag'],
                    'external': ['window','HTMLDocument','HTMLElement','DocumentFragment','XMLHttpRequest','jQuery'],
                    'title' : 'BUI Docs'
                }
            }
        }
    });
    // 载入concat和uglify插件，分别对于合并和压缩
    grunt.loadNpmTasks('grunt-jsduck');
    // 注册任务
    grunt.registerTask('default', ['jsduck']);
}; 