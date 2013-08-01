Ext.data.JsonP.BUI_Component_UIBase_List({"tagname":"class","name":"BUI.Component.UIBase.List","extends":null,"mixins":[],"alternateClassNames":[],"aliases":{},"singleton":false,"requires":[],"uses":[],"enum":null,"override":null,"inheritable":null,"inheritdoc":null,"meta":{},"private":null,"id":"class-BUI.Component.UIBase.List","members":{"cfg":[{"name":"idField","tagname":"cfg","owner":"BUI.Component.UIBase.List","meta":{},"id":"cfg-idField"},{"name":"items","tagname":"cfg","owner":"BUI.Component.UIBase.List","meta":{},"id":"cfg-items"}],"property":[{"name":"itemStatusCls","tagname":"property","owner":"BUI.Component.UIBase.List","meta":{},"id":"property-itemStatusCls"},{"name":"itemTplRender","tagname":"property","owner":"BUI.Component.UIBase.List","meta":{},"id":"property-itemTplRender"},{"name":"items","tagname":"property","owner":"BUI.Component.UIBase.List","meta":{},"id":"property-items"}],"method":[{"name":"addItem","tagname":"method","owner":"BUI.Component.UIBase.List","meta":{},"id":"method-addItem"},{"name":"addItemAt","tagname":"method","owner":"BUI.Component.UIBase.List","meta":{},"id":"method-addItemAt"},{"name":"addItems","tagname":"method","owner":"BUI.Component.UIBase.List","meta":{},"id":"method-addItems"},{"name":"addItemsAt","tagname":"method","owner":"BUI.Component.UIBase.List","meta":{},"id":"method-addItemsAt"},{"name":"clearControl","tagname":"method","owner":"BUI.Component.UIBase.List","meta":{"protected":true,"template":true},"id":"method-clearControl"},{"name":"clearItems","tagname":"method","owner":"BUI.Component.UIBase.List","meta":{},"id":"method-clearItems"},{"name":"findItemByField","tagname":"method","owner":"BUI.Component.UIBase.List","meta":{"protected":true},"id":"method-findItemByField"},{"name":"getFirstItem","tagname":"method","owner":"BUI.Component.UIBase.List","meta":{},"id":"method-getFirstItem"},{"name":"getItem","tagname":"method","owner":"BUI.Component.UIBase.List","meta":{},"id":"method-getItem"},{"name":"getItemAt","tagname":"method","owner":"BUI.Component.UIBase.List","meta":{},"id":"method-getItemAt"},{"name":"getItemCount","tagname":"method","owner":"BUI.Component.UIBase.List","meta":{},"id":"method-getItemCount"},{"name":"getItemText","tagname":"method","owner":"BUI.Component.UIBase.List","meta":{"protected":true},"id":"method-getItemText"},{"name":"getItems","tagname":"method","owner":"BUI.Component.UIBase.List","meta":{},"id":"method-getItems"},{"name":"getLastItem","tagname":"method","owner":"BUI.Component.UIBase.List","meta":{},"id":"method-getLastItem"},{"name":"getValueByField","tagname":"method","owner":"BUI.Component.UIBase.List","meta":{"protected":true},"id":"method-getValueByField"},{"name":"indexOfItem","tagname":"method","owner":"BUI.Component.UIBase.List","meta":{},"id":"method-indexOfItem"},{"name":"removeItem","tagname":"method","owner":"BUI.Component.UIBase.List","meta":{},"id":"method-removeItem"},{"name":"removeItemAt","tagname":"method","owner":"BUI.Component.UIBase.List","meta":{},"id":"method-removeItemAt"},{"name":"removeItems","tagname":"method","owner":"BUI.Component.UIBase.List","meta":{},"id":"method-removeItems"},{"name":"updateItem","tagname":"method","owner":"BUI.Component.UIBase.List","meta":{},"id":"method-updateItem"}],"event":[{"name":"itemclick","tagname":"event","owner":"BUI.Component.UIBase.List","meta":{},"id":"event-itemclick"}],"css_var":[],"css_mixin":[]},"linenr":10,"files":[{"filename":"list.js","href":"list.html#BUI-Component-UIBase-List"}],"html_meta":{},"statics":{"cfg":[],"property":[],"method":[],"event":[],"css_var":[],"css_mixin":[]},"component":false,"superclasses":[],"subclasses":["BUI.Component.UIBase.ChildList","BUI.List.DomList"],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Subclasses</h4><div class='dependency'><a href='#!/api/BUI.Component.UIBase.ChildList' rel='BUI.Component.UIBase.ChildList' class='docClass'>BUI.Component.UIBase.ChildList</a></div><div class='dependency'><a href='#!/api/BUI.List.DomList' rel='BUI.List.DomList' class='docClass'>BUI.List.DomList</a></div><h4>Files</h4><div class='dependency'><a href='source/list.html#BUI-Component-UIBase-List' target='_blank'>list.js</a></div></pre><div class='doc-contents'><p>列表一类的控件的扩展，list,menu,grid都是可以从此类扩展</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div id='cfg-idField' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BUI.Component.UIBase.List'>BUI.Component.UIBase.List</span><br/><a href='source/list.html#BUI-Component-UIBase-List-cfg-idField' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Component.UIBase.List-cfg-idField' class='name expandable'>idField</a><span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span></div><div class='description'><div class='short'>选项的默认key值 ...</div><div class='long'><p>选项的默认key值</p>\n<p>Defaults to: <code>'id'</code></p></div></div></div><div id='cfg-items' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BUI.Component.UIBase.List'>BUI.Component.UIBase.List</span><br/><a href='source/list.html#BUI-Component-UIBase-List-cfg-items' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Component.UIBase.List-cfg-items' class='name expandable'>items</a><span> : <a href=\"#!/api/Array\" rel=\"Array\" class=\"docClass\">Array</a></span></div><div class='description'><div class='short'>选择的数据集合\n\nvar list = new List.SimpleList({\n  itemTpl : '&lt;li id=\"{value}\"&gt;{text}&lt;/li&gt;',\n  idField : 'value'...</div><div class='long'><p>选择的数据集合</p>\n\n<pre><code>var list = new List.SimpleList({\n  itemTpl : '&lt;li id=\"{value}\"&gt;{text}&lt;/li&gt;',\n  idField : 'value',\n  render : '#t1',\n  items : [{value : '1',text : '1'},{value : '2',text : '2'}]\n});\nlist.render();\n</code></pre>\n\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-itemStatusCls' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BUI.Component.UIBase.List'>BUI.Component.UIBase.List</span><br/><a href='source/list.html#BUI-Component-UIBase-List-property-itemStatusCls' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Component.UIBase.List-property-itemStatusCls' class='name expandable'>itemStatusCls</a><span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></span></div><div class='description'><div class='short'>子控件各个状态默认采用的样式\n\nvar list = new List.SimpleList({\n  render : '#t1',\n  itemStatusCls : {\n    selected : 'active', //默认样...</div><div class='long'><p>子控件各个状态默认采用的样式</p>\n\n<pre><code>var list = new List.SimpleList({\n  render : '#t1',\n  itemStatusCls : {\n    selected : 'active', //默认样式为list-item-selected,现在变成'active'\n    hover : 'hover' //默认样式为list-item-hover,现在变成'hover'\n  },\n  items : [{id : '1',text : '1',type : '0'},{id : '2',text : '2',type : '1'}]\n});\nlist.render();\n</code></pre>\n\n\n<p>see <a href=\"#!/api/BUI.Component.Controller-property-statusCls\" rel=\"BUI.Component.Controller-property-statusCls\" class=\"docClass\">BUI.Component.Controller.statusCls</a></p>\n<p>Defaults to: <code>{view: true, value: {}}</code></p></div></div></div><div id='property-itemTplRender' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BUI.Component.UIBase.List'>BUI.Component.UIBase.List</span><br/><a href='source/list.html#BUI-Component-UIBase-List-property-itemTplRender' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Component.UIBase.List-property-itemTplRender' class='name expandable'>itemTplRender</a><span> : <a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a></span></div><div class='description'><div class='short'>列表项的渲染函数，应对列表项之间有很多差异时\n\nvar list = new List.SimpleList({\n  itemTplRender : function(item){\n    if(item.type == '1'){\n...</div><div class='long'><p>列表项的渲染函数，应对列表项之间有很多差异时</p>\n\n<pre><code>var list = new List.SimpleList({\n  itemTplRender : function(item){\n    if(item.type == '1'){\n      return '&lt;li&gt;&lt;img src=\"xxx.jpg\"/&gt;'+item.text+'&lt;/li&gt;'\n    }else{\n      return '&lt;li&gt;item.text&lt;/li&gt;'\n    }\n  },\n  idField : 'value',\n  render : '#t1',\n  items : [{value : '1',text : '1',type : '0'},{value : '2',text : '2',type : '1'}]\n});\nlist.render();\n</code></pre>\n\n<p>Defaults to: <code>{view: true}</code></p></div></div></div><div id='property-items' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BUI.Component.UIBase.List'>BUI.Component.UIBase.List</span><br/><a href='source/list.html#BUI-Component-UIBase-List-property-items' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Component.UIBase.List-property-items' class='name expandable'>items</a><span> : <a href=\"#!/api/Array\" rel=\"Array\" class=\"docClass\">Array</a></span></div><div class='description'><div class='short'>选择的数据集合\n\n list.set('items',items); //列表会直接替换内容\n //等同于 \n list.clearItems();\n list.addItems(items); ...</div><div class='long'><p>选择的数据集合</p>\n\n<pre><code> list.set('items',items); //列表会直接替换内容\n //等同于 \n list.clearItems();\n list.addItems(items);\n</code></pre>\n\n<p>Defaults to: <code>{view: true}</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-addItem' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BUI.Component.UIBase.List'>BUI.Component.UIBase.List</span><br/><a href='source/list.html#BUI-Component-UIBase-List-method-addItem' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Component.UIBase.List-method-addItem' class='name expandable'>addItem</a>( <span class='pre'>item</span> ) : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a>|<a href=\"#!/api/BUI.Component.Controller\" rel=\"BUI.Component.Controller\" class=\"docClass\">BUI.Component.Controller</a></div><div class='description'><div class='short'>添加选项,添加在控件最后\n\nlist.addItem({id : '3',text : '3',type : '0'}); ...</div><div class='long'><p>添加选项,添加在控件最后</p>\n\n<pre><code>list.addItem({id : '3',text : '3',type : '0'});\n</code></pre>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>item</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a>|<a href=\"#!/api/BUI.Component.Controller\" rel=\"BUI.Component.Controller\" class=\"docClass\">BUI.Component.Controller</a><div class='sub-desc'><p>选项，子控件配置项、子控件</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a>|<a href=\"#!/api/BUI.Component.Controller\" rel=\"BUI.Component.Controller\" class=\"docClass\">BUI.Component.Controller</a></span><div class='sub-desc'><p>子控件或者选项记录</p>\n</div></li></ul></div></div></div><div id='method-addItemAt' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BUI.Component.UIBase.List'>BUI.Component.UIBase.List</span><br/><a href='source/list.html#BUI-Component-UIBase-List-method-addItemAt' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Component.UIBase.List-method-addItemAt' class='name expandable'>addItemAt</a>( <span class='pre'>item, index</span> ) : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a>|<a href=\"#!/api/BUI.Component.Controller\" rel=\"BUI.Component.Controller\" class=\"docClass\">BUI.Component.Controller</a></div><div class='description'><div class='short'>在指定位置添加选项\n\nlist.addItemAt({id : '3',text : '3',type : '0'},0); //第一个位置 ...</div><div class='long'><p>在指定位置添加选项</p>\n\n<pre><code>list.addItemAt({id : '3',text : '3',type : '0'},0); //第一个位置\n</code></pre>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>item</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a>|<a href=\"#!/api/BUI.Component.Controller\" rel=\"BUI.Component.Controller\" class=\"docClass\">BUI.Component.Controller</a><div class='sub-desc'><p>选项，子控件配置项、子控件</p>\n</div></li><li><span class='pre'>index</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><div class='sub-desc'><p>索引</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a>|<a href=\"#!/api/BUI.Component.Controller\" rel=\"BUI.Component.Controller\" class=\"docClass\">BUI.Component.Controller</a></span><div class='sub-desc'><p>子控件或者选项记录</p>\n</div></li></ul></div></div></div><div id='method-addItems' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BUI.Component.UIBase.List'>BUI.Component.UIBase.List</span><br/><a href='source/list.html#BUI-Component-UIBase-List-method-addItems' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Component.UIBase.List-method-addItems' class='name expandable'>addItems</a>( <span class='pre'>items</span> )</div><div class='description'><div class='short'>添加多条选项\n\nvar items = [{id : '1',text : '1'},{id : '2',text : '2'}];\nlist.addItems(items); ...</div><div class='long'><p>添加多条选项</p>\n\n<pre><code>var items = [{id : '1',text : '1'},{id : '2',text : '2'}];\nlist.addItems(items);\n</code></pre>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>items</span> : <a href=\"#!/api/Array\" rel=\"Array\" class=\"docClass\">Array</a><div class='sub-desc'><p>记录集合（子控件配置项）</p>\n</div></li></ul></div></div></div><div id='method-addItemsAt' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BUI.Component.UIBase.List'>BUI.Component.UIBase.List</span><br/><a href='source/list.html#BUI-Component-UIBase-List-method-addItemsAt' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Component.UIBase.List-method-addItemsAt' class='name expandable'>addItemsAt</a>( <span class='pre'>items, start</span> )</div><div class='description'><div class='short'>插入多条记录\n\nvar items = [{id : '1',text : '1'},{id : '2',text : '2'}];\nlist.addItemsAt(items,0); // 在最前面插入\nlist.addItemsA...</div><div class='long'><p>插入多条记录</p>\n\n<pre><code>var items = [{id : '1',text : '1'},{id : '2',text : '2'}];\nlist.addItemsAt(items,0); // 在最前面插入\nlist.addItemsAt(items,2); //第三个位置插入\n</code></pre>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>items</span> : <a href=\"#!/api/Array\" rel=\"Array\" class=\"docClass\">Array</a><div class='sub-desc'><p>多条记录</p>\n</div></li><li><span class='pre'>start</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><div class='sub-desc'><p>起始位置</p>\n</div></li></ul></div></div></div><div id='method-clearControl' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BUI.Component.UIBase.List'>BUI.Component.UIBase.List</span><br/><a href='source/list.html#BUI-Component-UIBase-List-method-clearControl' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Component.UIBase.List-method-clearControl' class='name expandable'>clearControl</a>( <span class='pre'></span> )<strong class='protected signature' >protected</strong><strong class='template signature' >template</strong></div><div class='description'><div class='short'>清除所有的子控件或者列表项的DOM ...</div><div class='long'><p>清除所有的子控件或者列表项的DOM</p>\n      <div class='signature-box template'>\n      <p>This is a <a href=\"#!/guide/components\">template method</a>.\n         a hook into the functionality of this class.\n         Feel free to override it in child classes.</p>\n      </div>\n</div></div></div><div id='method-clearItems' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BUI.Component.UIBase.List'>BUI.Component.UIBase.List</span><br/><a href='source/list.html#BUI-Component-UIBase-List-method-clearItems' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Component.UIBase.List-method-clearItems' class='name expandable'>clearItems</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>清除所有选项,不等同于删除全部，此时不会触发删除事件\n\nlist.clearItems(); \n//等同于\nlist.set('items',items); ...</div><div class='long'><p>清除所有选项,不等同于删除全部，此时不会触发删除事件</p>\n\n<pre><code>list.clearItems(); \n//等同于\nlist.set('items',items);\n</code></pre>\n\n</div></div></div><div id='method-findItemByField' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BUI.Component.UIBase.List'>BUI.Component.UIBase.List</span><br/><a href='source/list.html#BUI-Component-UIBase-List-method-findItemByField' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Component.UIBase.List-method-findItemByField' class='name expandable'>findItemByField</a>( <span class='pre'>field, value</span> ) : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><strong class='protected signature' >protected</strong></div><div class='description'><div class='short'>根据字段查找指定的项 ...</div><div class='long'><p>根据字段查找指定的项</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>field</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>字段名</p>\n</div></li><li><span class='pre'>value</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'><p>字段值</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></span><div class='sub-desc'><p>查询出来的项（传入的记录或者子控件）</p>\n</div></li></ul></div></div></div><div id='method-getFirstItem' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BUI.Component.UIBase.List'>BUI.Component.UIBase.List</span><br/><a href='source/list.html#BUI-Component-UIBase-List-method-getFirstItem' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Component.UIBase.List-method-getFirstItem' class='name expandable'>getFirstItem</a>( <span class='pre'></span> ) : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a>|<a href=\"#!/api/BUI.Component.Controller\" rel=\"BUI.Component.Controller\" class=\"docClass\">BUI.Component.Controller</a></div><div class='description'><div class='short'>获取第一项\n\n  var item = list.getFirstItem();\n  //等同\n  list.getItemAt(0); ...</div><div class='long'><p>获取第一项</p>\n\n<pre><code>  var item = list.getFirstItem();\n  //等同\n  list.getItemAt(0);\n</code></pre>\n\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a>|<a href=\"#!/api/BUI.Component.Controller\" rel=\"BUI.Component.Controller\" class=\"docClass\">BUI.Component.Controller</a></span><div class='sub-desc'><p>选项值（子控件）</p>\n</div></li></ul></div></div></div><div id='method-getItem' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BUI.Component.UIBase.List'>BUI.Component.UIBase.List</span><br/><a href='source/list.html#BUI-Component-UIBase-List-method-getItem' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Component.UIBase.List-method-getItem' class='name expandable'>getItem</a>( <span class='pre'>id</span> ) : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a>|<a href=\"#!/api/BUI.Component.Controller\" rel=\"BUI.Component.Controller\" class=\"docClass\">BUI.Component.Controller</a></div><div class='description'><div class='short'>通过Id获取选项，如果是改变了idField则通过改变的idField来查找选项\n\n  //如果idField = 'id'\n  var item = list.getItem('2'); \n  //等同于\n  list.findIt...</div><div class='long'><p>通过Id获取选项，如果是改变了idField则通过改变的idField来查找选项</p>\n\n<pre><code>  //如果idField = 'id'\n  var item = list.getItem('2'); \n  //等同于\n  list.findItemByField('id','2');\n\n  //如果idField = 'value'\n  var item = list.getItem('2'); \n  //等同于\n  list.findItemByField('value','2');\n</code></pre>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>id</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>编号</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a>|<a href=\"#!/api/BUI.Component.Controller\" rel=\"BUI.Component.Controller\" class=\"docClass\">BUI.Component.Controller</a></span><div class='sub-desc'><p>选项（子控件）</p>\n</div></li></ul></div></div></div><div id='method-getItemAt' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BUI.Component.UIBase.List'>BUI.Component.UIBase.List</span><br/><a href='source/list.html#BUI-Component-UIBase-List-method-getItemAt' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Component.UIBase.List-method-getItemAt' class='name expandable'>getItemAt</a>( <span class='pre'>index</span> ) : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a>|<a href=\"#!/api/BUI.Component.Controller\" rel=\"BUI.Component.Controller\" class=\"docClass\">BUI.Component.Controller</a></div><div class='description'><div class='short'>通过索引获取选项值（子控件）\n\n  var item = list.getItemAt(0); //获取第1个\n  var item = list.getItemAt(2); //获取第3个 ...</div><div class='long'><p>通过索引获取选项值（子控件）</p>\n\n<pre><code>  var item = list.getItemAt(0); //获取第1个\n  var item = list.getItemAt(2); //获取第3个\n</code></pre>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>index</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><div class='sub-desc'><p>索引值</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a>|<a href=\"#!/api/BUI.Component.Controller\" rel=\"BUI.Component.Controller\" class=\"docClass\">BUI.Component.Controller</a></span><div class='sub-desc'><p>选项（子控件）</p>\n</div></li></ul></div></div></div><div id='method-getItemCount' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BUI.Component.UIBase.List'>BUI.Component.UIBase.List</span><br/><a href='source/list.html#BUI-Component-UIBase-List-method-getItemCount' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Component.UIBase.List-method-getItemCount' class='name expandable'>getItemCount</a>( <span class='pre'></span> ) : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a></div><div class='description'><div class='short'>获取选项的数量\n\n  var count = list.getItemCount(); ...</div><div class='long'><p>获取选项的数量</p>\n\n<pre><code>  var count = list.getItemCount();\n</code></pre>\n\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a></span><div class='sub-desc'><p>选项数量</p>\n</div></li></ul></div></div></div><div id='method-getItemText' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BUI.Component.UIBase.List'>BUI.Component.UIBase.List</span><br/><a href='source/list.html#BUI-Component-UIBase-List-method-getItemText' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Component.UIBase.List-method-getItemText' class='name expandable'>getItemText</a>( <span class='pre'>item</span> )<strong class='protected signature' >protected</strong></div><div class='description'><div class='short'>获取此项显示的文本 ...</div><div class='long'><p>获取此项显示的文本</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>item</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'><p>获取记录显示的文本</p>\n</div></li></ul></div></div></div><div id='method-getItems' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BUI.Component.UIBase.List'>BUI.Component.UIBase.List</span><br/><a href='source/list.html#BUI-Component-UIBase-List-method-getItems' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Component.UIBase.List-method-getItems' class='name expandable'>getItems</a>( <span class='pre'></span> ) : <a href=\"#!/api/Array\" rel=\"Array\" class=\"docClass\">Array</a></div><div class='description'><div class='short'>获取所有选项值，如果选项是子控件，则是所有子控件\n\n  var items = list.getItems();\n  //等同\n  list.get(items); ...</div><div class='long'><p>获取所有选项值，如果选项是子控件，则是所有子控件</p>\n\n<pre><code>  var items = list.getItems();\n  //等同\n  list.get(items);\n</code></pre>\n\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Array\" rel=\"Array\" class=\"docClass\">Array</a></span><div class='sub-desc'><p>选项值集合</p>\n</div></li></ul></div></div></div><div id='method-getLastItem' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BUI.Component.UIBase.List'>BUI.Component.UIBase.List</span><br/><a href='source/list.html#BUI-Component-UIBase-List-method-getLastItem' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Component.UIBase.List-method-getLastItem' class='name expandable'>getLastItem</a>( <span class='pre'></span> ) : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a>|<a href=\"#!/api/BUI.Component.Controller\" rel=\"BUI.Component.Controller\" class=\"docClass\">BUI.Component.Controller</a></div><div class='description'><div class='short'>获取最后一项\n\n  var item = list.getLastItem();\n  //等同\n  list.getItemAt(list.getItemCount()-1); ...</div><div class='long'><p>获取最后一项</p>\n\n<pre><code>  var item = list.getLastItem();\n  //等同\n  list.getItemAt(list.getItemCount()-1);\n</code></pre>\n\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a>|<a href=\"#!/api/BUI.Component.Controller\" rel=\"BUI.Component.Controller\" class=\"docClass\">BUI.Component.Controller</a></span><div class='sub-desc'><p>选项值（子控件）</p>\n</div></li></ul></div></div></div><div id='method-getValueByField' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BUI.Component.UIBase.List'>BUI.Component.UIBase.List</span><br/><a href='source/list.html#BUI-Component-UIBase-List-method-getValueByField' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Component.UIBase.List-method-getValueByField' class='name expandable'>getValueByField</a>( <span class='pre'>item, field</span> ) : *<strong class='protected signature' >protected</strong></div><div class='description'><div class='short'>获取字段的值 ...</div><div class='long'><p>获取字段的值</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>item</span> : *<div class='sub-desc'><p>字段名</p>\n</div></li><li><span class='pre'>field</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>字段名</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>*</span><div class='sub-desc'><p>字段的值</p>\n</div></li></ul></div></div></div><div id='method-indexOfItem' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BUI.Component.UIBase.List'>BUI.Component.UIBase.List</span><br/><a href='source/list.html#BUI-Component-UIBase-List-method-indexOfItem' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Component.UIBase.List-method-indexOfItem' class='name expandable'>indexOfItem</a>( <span class='pre'>item</span> ) : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a></div><div class='description'><div class='short'>返回指定项的索引\n\nvar index = list.indexOf(item); //返回索引，不存在则返回-1 ...</div><div class='long'><p>返回指定项的索引</p>\n\n<pre><code>var index = list.indexOf(item); //返回索引，不存在则返回-1\n</code></pre>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>item</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a>|<a href=\"#!/api/BUI.Component.Controller\" rel=\"BUI.Component.Controller\" class=\"docClass\">BUI.Component.Controller</a><div class='sub-desc'><p>选项</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a></span><div class='sub-desc'><p>项的索引值</p>\n</div></li></ul></div></div></div><div id='method-removeItem' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BUI.Component.UIBase.List'>BUI.Component.UIBase.List</span><br/><a href='source/list.html#BUI-Component-UIBase-List-method-removeItem' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Component.UIBase.List-method-removeItem' class='name expandable'>removeItem</a>( <span class='pre'>item</span> )</div><div class='description'><div class='short'>删除选项\n\nvar item = list.getItem('1');\nlist.removeItem(item); ...</div><div class='long'><p>删除选项</p>\n\n<pre><code>var item = list.getItem('1');\nlist.removeItem(item);\n</code></pre>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>item</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a>|<a href=\"#!/api/BUI.Component.Controller\" rel=\"BUI.Component.Controller\" class=\"docClass\">BUI.Component.Controller</a><div class='sub-desc'><p>选项（子控件）</p>\n</div></li></ul></div></div></div><div id='method-removeItemAt' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BUI.Component.UIBase.List'>BUI.Component.UIBase.List</span><br/><a href='source/list.html#BUI-Component-UIBase-List-method-removeItemAt' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Component.UIBase.List-method-removeItemAt' class='name expandable'>removeItemAt</a>( <span class='pre'>index</span> )</div><div class='description'><div class='short'>通过索引删除选项\n\nlist.removeItemAt(0); //删除第一个 ...</div><div class='long'><p>通过索引删除选项</p>\n\n<pre><code>list.removeItemAt(0); //删除第一个\n</code></pre>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>index</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><div class='sub-desc'><p>索引</p>\n</div></li></ul></div></div></div><div id='method-removeItems' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BUI.Component.UIBase.List'>BUI.Component.UIBase.List</span><br/><a href='source/list.html#BUI-Component-UIBase-List-method-removeItems' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Component.UIBase.List-method-removeItems' class='name expandable'>removeItems</a>( <span class='pre'>items</span> )</div><div class='description'><div class='short'>移除选项集合\n\nvar items = list.getSelection();\nlist.removeItems(items); ...</div><div class='long'><p>移除选项集合</p>\n\n<pre><code>var items = list.getSelection();\nlist.removeItems(items);\n</code></pre>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>items</span> : <a href=\"#!/api/Array\" rel=\"Array\" class=\"docClass\">Array</a><div class='sub-desc'><p>选项集合</p>\n</div></li></ul></div></div></div><div id='method-updateItem' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BUI.Component.UIBase.List'>BUI.Component.UIBase.List</span><br/><a href='source/list.html#BUI-Component-UIBase-List-method-updateItem' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Component.UIBase.List-method-updateItem' class='name expandable'>updateItem</a>( <span class='pre'>item</span> )</div><div class='description'><div class='short'>更新列表项，修改选项值后，DOM跟随变化\n\n  var item = list.getItem('2');\n  list.text = '新内容'; //此时对应的DOM不会变化\n  list.updateItem(item); //...</div><div class='long'><p>更新列表项，修改选项值后，DOM跟随变化</p>\n\n<pre><code>  var item = list.getItem('2');\n  list.text = '新内容'; //此时对应的DOM不会变化\n  list.updateItem(item); //DOM进行相应的变化\n</code></pre>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>item</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'><p>选项值</p>\n</div></li></ul></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-event'>Events</h3><div class='subsection'><div id='event-itemclick' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BUI.Component.UIBase.List'>BUI.Component.UIBase.List</span><br/><a href='source/list.html#BUI-Component-UIBase-List-event-itemclick' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Component.UIBase.List-event-itemclick' class='name expandable'>itemclick</a>( <span class='pre'>e</span> )</div><div class='description'><div class='short'>选项点击事件 ...</div><div class='long'><p>选项点击事件</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>e</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'><p>事件对象</p>\n<ul><li><span class='pre'>item</span> : <a href=\"#!/api/BUI.Component.UIBase.ListItem\" rel=\"BUI.Component.UIBase.ListItem\" class=\"docClass\">BUI.Component.UIBase.ListItem</a><div class='sub-desc'><p>点击的选项</p>\n</div></li><li><span class='pre'>element</span> : HTMLElement<div class='sub-desc'><p>选项代表的DOM对象</p>\n</div></li><li><span class='pre'>domTarget</span> : HTMLElement<div class='sub-desc'><p>点击的DOM对象</p>\n</div></li><li><span class='pre'>domEvent</span> : HTMLElement<div class='sub-desc'><p>点击的原生事件对象</p>\n</div></li></ul></div></li></ul></div></div></div></div></div></div></div>"});