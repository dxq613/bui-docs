module.exports = function(grunt) {
    // 配置
    grunt.initConfig({
        pkg : grunt.file.readJSON('package.json'),
        jsduck : {
            main: {
                // source paths with your code
                src: [
                        "../bui/src/common",
                        "../bui/src/bar",
                        "../bui/src/data",
                        "../bui/src/cookie",
                        "../bui/src/overlay",
                        "../bui/src/mask",
                        "../bui/src/calendar",
                        "../bui/src/list",
                        "../bui/src/picker",
                        "../bui/src/menu",
                        "../bui/src/form",
                        "../bui/src/select",
                        "../bui/src/tab",
                        "../bui/src/grid",
                        "../bui/src/editor",
                        "../bui/src/tree",
                        "../bui/src/tooltip",
                        "../bui/src/slider",
                        "../bui/src/extensions",
                        "../bui/src/layout",
                        "../bui/src/module",
                        "../bui/src/uploader/",
                        "../bui/src/progressbar",
                        "../bui/src/graphic",
                        "../bui/src/chart"
                    // globbing supported!
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