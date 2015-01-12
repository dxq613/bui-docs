Ext.data.JsonP.BUI_Graphic_Shape_Polygon({"tagname":"class","name":"BUI.Graphic.Shape.Polygon","autodetected":{},"files":[{"filename":"shape.js","href":"shape.html#BUI-Graphic-Shape-Polygon"}],"extends":"BUI.Graphic.Shape.Path","members":[{"name":"canvas","tagname":"property","owner":"BUI.Graphic.Base","id":"property-canvas","meta":{}},{"name":"el","tagname":"property","owner":"BUI.Graphic.Base","id":"property-el","meta":{"protected":true}},{"name":"isShape","tagname":"property","owner":"BUI.Graphic.Shape","id":"property-isShape","meta":{}},{"name":"node","tagname":"property","owner":"BUI.Graphic.Base","id":"property-node","meta":{}},{"name":"path","tagname":"property","owner":"BUI.Graphic.Shape.Path","id":"property-path","meta":{}},{"name":"points","tagname":"property","owner":"BUI.Graphic.Shape.Polygon","id":"property-points","meta":{}},{"name":"visible","tagname":"property","owner":"BUI.Graphic.Base","id":"property-visible","meta":{}},{"name":"zIndex","tagname":"property","owner":"BUI.Graphic.Base","id":"property-zIndex","meta":{}},{"name":"attr","tagname":"method","owner":"BUI.Graphic.Base","id":"method-attr","meta":{}},{"name":"beforeRenderUI","tagname":"method","owner":"BUI.Graphic.Base","id":"method-beforeRenderUI","meta":{"protected":true}},{"name":"bindUI","tagname":"method","owner":"BUI.Graphic.Base","id":"method-bindUI","meta":{"protected":true}},{"name":"createElement","tagname":"method","owner":"BUI.Graphic.Shape","id":"method-createElement","meta":{"private":true}},{"name":"destroy","tagname":"method","owner":"BUI.Graphic.Base","id":"method-destroy","meta":{}},{"name":"fire","tagname":"method","owner":"BUI.Graphic.Base","id":"method-fire","meta":{}},{"name":"get","tagname":"method","owner":"BUI.Graphic.Base","id":"method-get","meta":{"protected":true}},{"name":"getCfgAttr","tagname":"method","owner":"BUI.Graphic.Base","id":"method-getCfgAttr","meta":{}},{"name":"getDefaultCfg","tagname":"method","owner":"BUI.Graphic.Base","id":"method-getDefaultCfg","meta":{}},{"name":"getPath","tagname":"method","owner":"BUI.Graphic.Shape","id":"method-getPath","meta":{}},{"name":"getPathString","tagname":"method","owner":"BUI.Graphic.Shape","id":"method-getPathString","meta":{}},{"name":"getTotalLength","tagname":"method","owner":"BUI.Graphic.Shape","id":"method-getTotalLength","meta":{}},{"name":"getTransformPath","tagname":"method","owner":"BUI.Graphic.Shape","id":"method-getTransformPath","meta":{}},{"name":"hide","tagname":"method","owner":"BUI.Graphic.Base","id":"method-hide","meta":{}},{"name":"off","tagname":"method","owner":"BUI.Graphic.Base","id":"method-off","meta":{"chainable":true}},{"name":"on","tagname":"method","owner":"BUI.Graphic.Base","id":"method-on","meta":{"chainable":true}},{"name":"parseElCfg","tagname":"method","owner":"BUI.Graphic.Shape.Polygon","id":"method-parseElCfg","meta":{"protected":true}},{"name":"remove","tagname":"method","owner":"BUI.Graphic.Base","id":"method-remove","meta":{}},{"name":"render","tagname":"method","owner":"BUI.Graphic.Base","id":"method-render","meta":{}},{"name":"renderUI","tagname":"method","owner":"BUI.Graphic.Base","id":"method-renderUI","meta":{"protected":true}},{"name":"rotate","tagname":"method","owner":"BUI.Graphic.Shape","id":"method-rotate","meta":{}},{"name":"scale","tagname":"method","owner":"BUI.Graphic.Shape","id":"method-scale","meta":{}},{"name":"set","tagname":"method","owner":"BUI.Graphic.Base","id":"method-set","meta":{"protected":true}},{"name":"show","tagname":"method","owner":"BUI.Graphic.Base","id":"method-show","meta":{}},{"name":"transform","tagname":"method","owner":"BUI.Graphic.Shape","id":"method-transform","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-BUI.Graphic.Shape.Polygon","component":false,"superclasses":["BUI.Graphic.Base","BUI.Graphic.Shape","BUI.Graphic.Shape.Path"],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'><a href='#!/api/BUI.Graphic.Base' rel='BUI.Graphic.Base' class='docClass'>BUI.Graphic.Base</a><div class='subclass '><a href='#!/api/BUI.Graphic.Shape' rel='BUI.Graphic.Shape' class='docClass'>BUI.Graphic.Shape</a><div class='subclass '><a href='#!/api/BUI.Graphic.Shape.Path' rel='BUI.Graphic.Shape.Path' class='docClass'>BUI.Graphic.Shape.Path</a><div class='subclass '><strong>BUI.Graphic.Shape.Polygon</strong></div></div></div></div><h4>Files</h4><div class='dependency'><a href='source/shape.html#BUI-Graphic-Shape-Polygon' target='_blank'>shape.js</a></div></pre><div class='doc-contents'><p>多边形</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-canvas' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/BUI.Graphic.Base' rel='BUI.Graphic.Base' class='defined-in docClass'>BUI.Graphic.Base</a><br/><a href='source/base7.html#BUI-Graphic-Base-property-canvas' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Graphic.Base-property-canvas' class='name expandable'>canvas</a> : <a href=\"#!/api/BUI.Graphic.Canvas\" rel=\"BUI.Graphic.Canvas\" class=\"docClass\">BUI.Graphic.Canvas</a><span class=\"signature\"></span></div><div class='description'><div class='short'>画布 ...</div><div class='long'><p>画布</p>\n<p>Defaults to: <code>{}</code></p></div></div></div><div id='property-el' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/BUI.Graphic.Base' rel='BUI.Graphic.Base' class='defined-in docClass'>BUI.Graphic.Base</a><br/><a href='source/base7.html#BUI-Graphic-Base-property-el' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Graphic.Base-property-el' class='name expandable'>el</a> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><span class=\"signature\"><span class='protected' >protected</span></span></div><div class='description'><div class='short'>底层使用了raphael 所以此属性对应raphael的对对象 ...</div><div class='long'><p>底层使用了raphael 所以此属性对应raphael的对对象</p>\n<p>Defaults to: <code>{}</code></p></div></div></div><div id='property-isShape' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/BUI.Graphic.Shape' rel='BUI.Graphic.Shape' class='defined-in docClass'>BUI.Graphic.Shape</a><br/><a href='source/shape.html#BUI-Graphic-Shape-property-isShape' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Graphic.Shape-property-isShape' class='name expandable'>isShape</a> : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a><span class=\"signature\"></span></div><div class='description'><div class='short'>是否图形 ...</div><div class='long'><p>是否图形</p>\n<p>Defaults to: <code>true</code></p></div></div></div><div id='property-node' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/BUI.Graphic.Base' rel='BUI.Graphic.Base' class='defined-in docClass'>BUI.Graphic.Base</a><br/><a href='source/base7.html#BUI-Graphic-Base-property-node' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Graphic.Base-property-node' class='name expandable'>node</a> : HTMLElement<span class=\"signature\"></span></div><div class='description'><div class='short'>svg或者vml对象 ...</div><div class='long'><p>svg或者vml对象</p>\n<p>Defaults to: <code>{}</code></p></div></div></div><div id='property-path' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/BUI.Graphic.Shape.Path' rel='BUI.Graphic.Shape.Path' class='defined-in docClass'>BUI.Graphic.Shape.Path</a><br/><a href='source/shape.html#BUI-Graphic-Shape-Path-property-path' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Graphic.Shape.Path-property-path' class='name expandable'>path</a> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><span class=\"signature\"></span></div><div class='description'><div class='short'>路径 ...</div><div class='long'><p>路径</p>\n<p>Defaults to: <code>{}</code></p></div></div></div><div id='property-points' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BUI.Graphic.Shape.Polygon'>BUI.Graphic.Shape.Polygon</span><br/><a href='source/shape.html#BUI-Graphic-Shape-Polygon-property-points' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Graphic.Shape.Polygon-property-points' class='name expandable'>points</a> : <a href=\"#!/api/Array\" rel=\"Array\" class=\"docClass\">Array</a>|<a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><span class=\"signature\"></span></div><div class='description'><div class='short'>定点集合，可以是字符串、或者数组\n\n\n字符串： '0,0 25,25 31,50'\n数组 ： ['0,0','25,25','31,50'] ...</div><div class='long'><p>定点集合，可以是字符串、或者数组</p>\n\n<ul>\n<li>字符串： '0,0 25,25 31,50'</li>\n<li>数组 ： ['0,0','25,25','31,50']</li>\n</ul>\n\n<p>Defaults to: <code>{}</code></p></div></div></div><div id='property-visible' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/BUI.Graphic.Base' rel='BUI.Graphic.Base' class='defined-in docClass'>BUI.Graphic.Base</a><br/><a href='source/base7.html#BUI-Graphic-Base-property-visible' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Graphic.Base-property-visible' class='name expandable'>visible</a> : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a><span class=\"signature\"></span></div><div class='description'><div class='short'>是否显示 ...</div><div class='long'><p>是否显示</p>\n<p>Defaults to: <code>{value: true}</code></p></div></div></div><div id='property-zIndex' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/BUI.Graphic.Base' rel='BUI.Graphic.Base' class='defined-in docClass'>BUI.Graphic.Base</a><br/><a href='source/base7.html#BUI-Graphic-Base-property-zIndex' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Graphic.Base-property-zIndex' class='name expandable'>zIndex</a> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><span class=\"signature\"></span></div><div class='description'><div class='short'>所在父元素中的优先级，仅在父元素排序时有效 ...</div><div class='long'><p>所在父元素中的优先级，仅在父元素排序时有效</p>\n<p>Defaults to: <code>{}</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-attr' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/BUI.Graphic.Base' rel='BUI.Graphic.Base' class='defined-in docClass'>BUI.Graphic.Base</a><br/><a href='source/base7.html#BUI-Graphic-Base-method-attr' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Graphic.Base-method-attr' class='name expandable'>attr</a>( <span class='pre'>name, value</span> ) : *<span class=\"signature\"></span></div><div class='description'><div class='short'>设置或者设置属性，有一下3中情形：\n\n\nname为字符串，value 为空，获取属性值\nname为字符串，value不为空，设置属性值，返回this\nname为键值对，value 为空，设置属性值 ...</div><div class='long'><p>设置或者设置属性，有一下3中情形：</p>\n\n<ul>\n<li>name为字符串，value 为空，获取属性值</li>\n<li>name为字符串，value不为空，设置属性值，返回this</li>\n<li>name为键值对，value 为空，设置属性值</li>\n</ul>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a>|<a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'><p>属性名</p>\n</div></li><li><span class='pre'>value</span> : *<div class='sub-desc'><p>属性值</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>*</span><div class='sub-desc'><p>属性值</p>\n</div></li></ul></div></div></div><div id='method-beforeRenderUI' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/BUI.Graphic.Base' rel='BUI.Graphic.Base' class='defined-in docClass'>BUI.Graphic.Base</a><br/><a href='source/base7.html#BUI-Graphic-Base-method-beforeRenderUI' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Graphic.Base-method-beforeRenderUI' class='name expandable'>beforeRenderUI</a>( <span class='pre'></span> )<span class=\"signature\"><span class='protected' >protected</span></span></div><div class='description'><div class='short'>渲染控件 ...</div><div class='long'><p>渲染控件</p>\n</div></div></div><div id='method-bindUI' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/BUI.Graphic.Base' rel='BUI.Graphic.Base' class='defined-in docClass'>BUI.Graphic.Base</a><br/><a href='source/base7.html#BUI-Graphic-Base-method-bindUI' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Graphic.Base-method-bindUI' class='name expandable'>bindUI</a>( <span class='pre'></span> )<span class=\"signature\"><span class='protected' >protected</span></span></div><div class='description'><div class='short'>绑定事件 ...</div><div class='long'><p>绑定事件</p>\n</div></div></div><div id='method-createElement' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/BUI.Graphic.Shape' rel='BUI.Graphic.Shape' class='defined-in docClass'>BUI.Graphic.Shape</a><br/><a href='source/shape.html#BUI-Graphic-Shape-method-createElement' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Graphic.Shape-method-createElement' class='name expandable'>createElement</a>( <span class='pre'>attrs</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>attrs</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'></div></li></ul></div></div></div><div id='method-destroy' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/BUI.Graphic.Base' rel='BUI.Graphic.Base' class='defined-in docClass'>BUI.Graphic.Base</a><br/><a href='source/base7.html#BUI-Graphic-Base-method-destroy' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Graphic.Base-method-destroy' class='name expandable'>destroy</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>析构函数 ...</div><div class='long'><p>析构函数</p>\n</div></div></div><div id='method-fire' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/BUI.Graphic.Base' rel='BUI.Graphic.Base' class='defined-in docClass'>BUI.Graphic.Base</a><br/><a href='source/base7.html#BUI-Graphic-Base-method-fire' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Graphic.Base-method-fire' class='name expandable'>fire</a>( <span class='pre'>eventType</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>触发事件 ...</div><div class='long'><p>触发事件</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>eventType</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>事件类型</p>\n</div></li></ul></div></div></div><div id='method-get' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/BUI.Graphic.Base' rel='BUI.Graphic.Base' class='defined-in docClass'>BUI.Graphic.Base</a><br/><a href='source/base7.html#BUI-Graphic-Base-method-get' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Graphic.Base-method-get' class='name expandable'>get</a>( <span class='pre'>name</span> )<span class=\"signature\"><span class='protected' >protected</span></span></div><div class='description'><div class='short'>获取属性信息 ...</div><div class='long'><p>获取属性信息</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'></div></li></ul></div></div></div><div id='method-getCfgAttr' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/BUI.Graphic.Base' rel='BUI.Graphic.Base' class='defined-in docClass'>BUI.Graphic.Base</a><br/><a href='source/base7.html#BUI-Graphic-Base-method-getCfgAttr' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Graphic.Base-method-getCfgAttr' class='name expandable'>getCfgAttr</a>( <span class='pre'>name</span> ) : *<span class=\"signature\"></span></div><div class='description'><div class='short'>获取初始配置的信息 ...</div><div class='long'><p>获取初始配置的信息</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>配置项名称</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>*</span><div class='sub-desc'><p>初始值</p>\n</div></li></ul></div></div></div><div id='method-getDefaultCfg' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/BUI.Graphic.Base' rel='BUI.Graphic.Base' class='defined-in docClass'>BUI.Graphic.Base</a><br/><a href='source/base7.html#BUI-Graphic-Base-method-getDefaultCfg' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Graphic.Base-method-getDefaultCfg' class='name expandable'>getDefaultCfg</a>( <span class='pre'></span> ) : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><span class=\"signature\"></span></div><div class='description'><div class='short'>获取默认的配置信息 ...</div><div class='long'><p>获取默认的配置信息</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></span><div class='sub-desc'><p>默认的属性</p>\n</div></li></ul></div></div></div><div id='method-getPath' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/BUI.Graphic.Shape' rel='BUI.Graphic.Shape' class='defined-in docClass'>BUI.Graphic.Shape</a><br/><a href='source/shape.html#BUI-Graphic-Shape-method-getPath' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Graphic.Shape-method-getPath' class='name expandable'>getPath</a>( <span class='pre'></span> ) : <a href=\"#!/api/Array\" rel=\"Array\" class=\"docClass\">Array</a><span class=\"signature\"></span></div><div class='description'><div class='short'>获取路径 ...</div><div class='long'><p>获取路径</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Array\" rel=\"Array\" class=\"docClass\">Array</a></span><div class='sub-desc'><p>路径的数组</p>\n</div></li></ul></div></div></div><div id='method-getPathString' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/BUI.Graphic.Shape' rel='BUI.Graphic.Shape' class='defined-in docClass'>BUI.Graphic.Shape</a><br/><a href='source/shape.html#BUI-Graphic-Shape-method-getPathString' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Graphic.Shape-method-getPathString' class='name expandable'>getPathString</a>( <span class='pre'></span> ) : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><span class=\"signature\"></span></div><div class='description'><div class='short'>获取路径字符串 ...</div><div class='long'><p>获取路径字符串</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span><div class='sub-desc'><p>路径的字符串</p>\n</div></li></ul></div></div></div><div id='method-getTotalLength' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/BUI.Graphic.Shape' rel='BUI.Graphic.Shape' class='defined-in docClass'>BUI.Graphic.Shape</a><br/><a href='source/shape.html#BUI-Graphic-Shape-method-getTotalLength' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Graphic.Shape-method-getTotalLength' class='name expandable'>getTotalLength</a>( <span class='pre'></span> ) : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><span class=\"signature\"></span></div><div class='description'><div class='short'>获取图形的整体长度 ...</div><div class='long'><p>获取图形的整体长度</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a></span><div class='sub-desc'><p>长度</p>\n</div></li></ul></div></div></div><div id='method-getTransformPath' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/BUI.Graphic.Shape' rel='BUI.Graphic.Shape' class='defined-in docClass'>BUI.Graphic.Shape</a><br/><a href='source/shape.html#BUI-Graphic-Shape-method-getTransformPath' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Graphic.Shape-method-getTransformPath' class='name expandable'>getTransformPath</a>( <span class='pre'></span> ) : <a href=\"#!/api/Array\" rel=\"Array\" class=\"docClass\">Array</a><span class=\"signature\"></span></div><div class='description'><div class='short'>获取使用平移后的path ...</div><div class='long'><p>获取使用平移后的path</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Array\" rel=\"Array\" class=\"docClass\">Array</a></span><div class='sub-desc'><p>路径的数组</p>\n</div></li></ul></div></div></div><div id='method-hide' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/BUI.Graphic.Base' rel='BUI.Graphic.Base' class='defined-in docClass'>BUI.Graphic.Base</a><br/><a href='source/base7.html#BUI-Graphic-Base-method-hide' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Graphic.Base-method-hide' class='name expandable'>hide</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>隐藏 ...</div><div class='long'><p>隐藏</p>\n</div></div></div><div id='method-off' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/BUI.Graphic.Base' rel='BUI.Graphic.Base' class='defined-in docClass'>BUI.Graphic.Base</a><br/><a href='source/base7.html#BUI-Graphic-Base-method-off' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Graphic.Base-method-off' class='name expandable'>off</a>( <span class='pre'>eventType, fn</span> ) : <a href=\"#!/api/BUI.Graphic.Base\" rel=\"BUI.Graphic.Base\" class=\"docClass\">BUI.Graphic.Base</a><span class=\"signature\"><span class='chainable' >chainable</span></span></div><div class='description'><div class='short'>移除事件 ...</div><div class='long'><p>移除事件</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>eventType</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>事件类型</p>\n</div></li><li><span class='pre'>fn</span> : <a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a><div class='sub-desc'><p>事件处理函数</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/BUI.Graphic.Base\" rel=\"BUI.Graphic.Base\" class=\"docClass\">BUI.Graphic.Base</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div><div id='method-on' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/BUI.Graphic.Base' rel='BUI.Graphic.Base' class='defined-in docClass'>BUI.Graphic.Base</a><br/><a href='source/base7.html#BUI-Graphic-Base-method-on' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Graphic.Base-method-on' class='name expandable'>on</a>( <span class='pre'>eventType, fn</span> ) : <a href=\"#!/api/BUI.Graphic.Base\" rel=\"BUI.Graphic.Base\" class=\"docClass\">BUI.Graphic.Base</a><span class=\"signature\"><span class='chainable' >chainable</span></span></div><div class='description'><div class='short'>附加事件 ...</div><div class='long'><p>附加事件</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>eventType</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>事件类型</p>\n</div></li><li><span class='pre'>fn</span> : <a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a><div class='sub-desc'><p>事件处理函数</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/BUI.Graphic.Base\" rel=\"BUI.Graphic.Base\" class=\"docClass\">BUI.Graphic.Base</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div><div id='method-parseElCfg' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BUI.Graphic.Shape.Polygon'>BUI.Graphic.Shape.Polygon</span><br/><a href='source/shape.html#BUI-Graphic-Shape-Polygon-method-parseElCfg' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Graphic.Shape.Polygon-method-parseElCfg' class='name expandable'>parseElCfg</a>( <span class='pre'>attrs</span> )<span class=\"signature\"><span class='protected' >protected</span></span></div><div class='description'><div class='short'>格式化初始化配置项 ...</div><div class='long'><p>格式化初始化配置项</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>attrs</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'></div></li></ul><p>Overrides: <a href=\"#!/api/BUI.Graphic.Shape-method-parseElCfg\" rel=\"BUI.Graphic.Shape-method-parseElCfg\" class=\"docClass\">BUI.Graphic.Shape.parseElCfg</a></p></div></div></div><div id='method-remove' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/BUI.Graphic.Base' rel='BUI.Graphic.Base' class='defined-in docClass'>BUI.Graphic.Base</a><br/><a href='source/base7.html#BUI-Graphic-Base-method-remove' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Graphic.Base-method-remove' class='name expandable'>remove</a>( <span class='pre'>[destroy]</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>移除，从父元素中移除 ...</div><div class='long'><p>移除，从父元素中移除</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>destroy</span> : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a> (optional)<div class='sub-desc'>\n<p>Defaults to: <code>true</code></p></div></li></ul></div></div></div><div id='method-render' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/BUI.Graphic.Base' rel='BUI.Graphic.Base' class='defined-in docClass'>BUI.Graphic.Base</a><br/><a href='source/base7.html#BUI-Graphic-Base-method-render' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Graphic.Base-method-render' class='name expandable'>render</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>渲染控件/图形 ...</div><div class='long'><p>渲染控件/图形</p>\n</div></div></div><div id='method-renderUI' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/BUI.Graphic.Base' rel='BUI.Graphic.Base' class='defined-in docClass'>BUI.Graphic.Base</a><br/><a href='source/base7.html#BUI-Graphic-Base-method-renderUI' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Graphic.Base-method-renderUI' class='name expandable'>renderUI</a>( <span class='pre'></span> )<span class=\"signature\"><span class='protected' >protected</span></span></div><div class='description'><div class='short'>渲染控件 ...</div><div class='long'><p>渲染控件</p>\n</div></div></div><div id='method-rotate' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/BUI.Graphic.Shape' rel='BUI.Graphic.Shape' class='defined-in docClass'>BUI.Graphic.Shape</a><br/><a href='source/shape.html#BUI-Graphic-Shape-method-rotate' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Graphic.Shape-method-rotate' class='name expandable'>rotate</a>( <span class='pre'>a, x, y</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>旋转 ...</div><div class='long'><p>旋转</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>a</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><div class='sub-desc'><p>旋转的角度</p>\n</div></li><li><span class='pre'>x</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><div class='sub-desc'><p>旋转的中心点 x</p>\n</div></li><li><span class='pre'>y</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><div class='sub-desc'><p>旋转的中心点 y</p>\n</div></li></ul></div></div></div><div id='method-scale' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/BUI.Graphic.Shape' rel='BUI.Graphic.Shape' class='defined-in docClass'>BUI.Graphic.Shape</a><br/><a href='source/shape.html#BUI-Graphic-Shape-method-scale' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Graphic.Shape-method-scale' class='name expandable'>scale</a>( <span class='pre'>sx, sy, cx, cy</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>放大 ...</div><div class='long'><p>放大</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>sx</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><div class='sub-desc'><p>x轴方向的倍数</p>\n</div></li><li><span class='pre'>sy</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><div class='sub-desc'><p>y轴方向的倍数</p>\n</div></li><li><span class='pre'>cx</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><div class='sub-desc'><p>x轴方向扩展的中心</p>\n</div></li><li><span class='pre'>cy</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><div class='sub-desc'><p>y轴方向扩展的中心</p>\n</div></li></ul></div></div></div><div id='method-set' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/BUI.Graphic.Base' rel='BUI.Graphic.Base' class='defined-in docClass'>BUI.Graphic.Base</a><br/><a href='source/base7.html#BUI-Graphic-Base-method-set' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Graphic.Base-method-set' class='name expandable'>set</a>( <span class='pre'>name, value</span> )<span class=\"signature\"><span class='protected' >protected</span></span></div><div class='description'><div class='short'>设置属性信息 ...</div><div class='long'><p>设置属性信息</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'></div></li><li><span class='pre'>value</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'></div></li></ul></div></div></div><div id='method-show' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/BUI.Graphic.Base' rel='BUI.Graphic.Base' class='defined-in docClass'>BUI.Graphic.Base</a><br/><a href='source/base7.html#BUI-Graphic-Base-method-show' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Graphic.Base-method-show' class='name expandable'>show</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>显示 ...</div><div class='long'><p>显示</p>\n</div></div></div><div id='method-transform' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/BUI.Graphic.Shape' rel='BUI.Graphic.Shape' class='defined-in docClass'>BUI.Graphic.Shape</a><br/><a href='source/shape.html#BUI-Graphic-Shape-method-transform' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Graphic.Shape-method-transform' class='name expandable'>transform</a>( <span class='pre'>tstr</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>直接使用transform方法 \n\n \"t100,100r30,100,100s2,2,100,100r45s1.5\" ...</div><div class='long'><p>直接使用transform方法 <br></p>\n\n<h2> \"t100,100r30,100,100s2,2,100,100r45s1.5\"</h2>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>tstr</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>几何转换的字符串</p>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});