Ext.data.JsonP.BUI_Uploader_Theme({"tagname":"class","name":"BUI.Uploader.Theme","autodetected":{},"files":[{"filename":"uploader.js","href":"uploader2.html#BUI-Uploader-Theme"}],"static":true,"members":[{"name":"addTheme","tagname":"method","owner":"BUI.Uploader.Theme","id":"method-addTheme","meta":{}},{"name":"getTheme","tagname":"method","owner":"BUI.Uploader.Theme","id":"method-getTheme","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"static-class-BUI.Uploader.Theme","component":false,"superclasses":[],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/uploader2.html#BUI-Uploader-Theme' target='_blank'>uploader.js</a></div></pre><div class='doc-contents'><p>文件上传的主题设置</p>\n\n<pre><code>默认自带的题有\n\n//这个是默认的\ntheme: 'defaultTheme'\n\n//这个带图片预览的\ntheme: 'imageView'\n</code></pre>\n\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-addTheme' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BUI.Uploader.Theme'>BUI.Uploader.Theme</span><br/><a href='source/uploader2.html#BUI-Uploader-Theme-method-addTheme' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Uploader.Theme-method-addTheme' class='name expandable'>addTheme</a>( <span class='pre'>name, config</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>添加一个主题 ...</div><div class='long'><p>添加一个主题</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>主题名称</p>\n</div></li><li><span class='pre'>config</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'><p>主题的配置</p>\n\n<pre class='inline-example '><code>// 添加一个主题模板\nTheme.addTheme('imageView', {\n elCls: 'imageViewTheme',\n queue:{\n   resultTpl: {\n     'default': '&lt;div class=\"default\"&gt;{name}&lt;/div&gt;',\n     'success': '&lt;div class=\"success\"&gt;&lt;img src=\"{url}\" /&gt;&lt;/div&gt;'\n     'error': '&lt;div class=\"error\"&gt;&lt;span title=\"{name}\"&gt;{name}&lt;/span&gt;&lt;span class=\"uploader-error\"&gt;{msg}&lt;/span&gt;&lt;/div&gt;',\n     'progress': '&lt;div class=\"progress\"&gt;&lt;div class=\"bar\" style=\"width:{loadedPercent}%\"&gt;&lt;/div&gt;&lt;/div&gt;'\n   }\n }\n});\n</code></pre>\n\n</div></li></ul></div></div></div><div id='method-getTheme' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BUI.Uploader.Theme'>BUI.Uploader.Theme</span><br/><a href='source/uploader2.html#BUI-Uploader-Theme-method-getTheme' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Uploader.Theme-method-getTheme' class='name expandable'>getTheme</a>( <span class='pre'>name</span> ) : <a href=\"#!/api/BUI.Uploader.Theme\" rel=\"BUI.Uploader.Theme\" class=\"docClass\">BUI.Uploader.Theme</a><span class=\"signature\"></span></div><div class='description'><div class='short'>获取一个主题 ...</div><div class='long'><p>获取一个主题</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>[description]</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/BUI.Uploader.Theme\" rel=\"BUI.Uploader.Theme\" class=\"docClass\">BUI.Uploader.Theme</a></span><div class='sub-desc'><p>主题的配置</p>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{"static":true}});