(window.webpackJsonp=window.webpackJsonp||[]).push([[79],{653:function(t,a,e){"use strict";e.r(a);var s=e(9),n=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("p"),e("div",{staticClass:"table-of-contents"},[e("ul",[e("li",[e("a",{attrs:{href:"#plugin"}},[t._v("Plugin")]),e("ul",[e("li",[e("a",{attrs:{href:"#hot-module-replacementplugin-热更新插件"}},[t._v("Hot-Module-ReplacementPlugin(热更新插件)")])]),e("li",[e("a",{attrs:{href:"#html-webpack-plugin-生成-html-文件"}},[t._v("html-webpack-plugin(生成 html 文件)")])])])])])]),e("p"),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("转自")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://mp.weixin.qq.com/s/lYyx4YB6oSiL09cAbKjeSw",target:"_blank",rel:"noopener noreferrer"}},[t._v("前端壹栈"),e("OutboundLink")],1)])]),t._v(" "),e("h3",{attrs:{id:"plugin"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#plugin"}},[t._v("#")]),t._v(" Plugin")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("概念")]),t._v(" "),e("ul",[e("li",[t._v("专注处理"),e("code",[t._v("webpack")]),t._v("在编译过程中的某个特定的任务功能模块，称为插件。"),e("code",[t._v("plugin")]),t._v("是一个扩展器，丰富了"),e("code",[t._v("webpack")]),t._v("本身，针对"),e("code",[t._v("loader")]),t._v("结束后，"),e("code",[t._v("webpack")]),t._v("打包的整个过程，它并不直接操作文件，而是基于事件机制工作，会监听"),e("code",[t._v("webpack")]),t._v("打包过程中的某些节点，执行广泛的任务。")])])]),t._v(" "),e("li",[e("p",[t._v("特点")]),t._v(" "),e("ul",[e("li",[t._v("是一个独立的模块")]),t._v(" "),e("li",[t._v("模块对外暴露一个 js 函数")]),t._v(" "),e("li",[t._v("函数的原型"),e("code",[t._v("(prototype)")]),t._v("上定义一个注入"),e("code",[t._v("compiler")]),t._v("对象的"),e("code",[t._v("apply")]),t._v("方法"),e("code",[t._v("apply")]),t._v("函数中需要有通过"),e("code",[t._v("compiler")]),t._v("对象挂载的"),e("code",[t._v("webpack")]),t._v("事件钩子，钩子的回调中能拿到当前编译的"),e("code",[t._v("compliation")]),t._v("对象，如果是异步编译插件的话可以拿到回调"),e("code",[t._v("callback")])]),t._v(" "),e("li",[t._v("完成自定义子编译流程并处理"),e("code",[t._v("compliation")]),t._v("对象的内部数据")]),t._v(" "),e("li",[t._v("如果异步编译插件的话，数据处理完成后执行"),e("code",[t._v("callback")]),t._v("回调")])])])]),t._v(" "),e("hr"),t._v(" "),e("el-carousel",{attrs:{height:"100vh","indicator-position":"none",autoplay:!1,arrow:"never"}},[e("el-carousel-item",{attrs:{name:"0"}},[e("h4",{attrs:{id:"hot-module-replacementplugin-热更新插件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#hot-module-replacementplugin-热更新插件"}},[t._v("#")]),t._v(" Hot-Module-ReplacementPlugin(热更新插件)")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("Hot-Module-Replacement")]),t._v("的热更新是依赖于"),e("code",[t._v("webpack-dev-server")]),t._v("，后者是在打包文件改变时更新打包文件或者"),e("code",[t._v("reload")]),t._v("刷新整个页面，"),e("code",[t._v("HRM")]),t._v("是只更新修改的部分。")]),t._v(" "),e("li",[e("code",[t._v("Hot-Module-Replacement-Plugin")]),t._v("是"),e("code",[t._v("webpack")]),t._v("模块自带，引入"),e("code",[t._v("webpack")]),t._v("后在"),e("code",[t._v("plugins")]),t._v("配置项中直接使用即可。")])]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" webpack "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'webpack'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" produce "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* ... */")]),t._v("\n  plugins"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("webpack"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("HotModuleReplacementPlugin")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//热更新插件")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* ... */")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nmodule"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" produce"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("hr"),t._v(" "),e("h4",{attrs:{id:"html-webpack-plugin-生成-html-文件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#html-webpack-plugin-生成-html-文件"}},[t._v("#")]),t._v(" html-webpack-plugin(生成 html 文件)")]),t._v(" "),e("ul",[e("li",[t._v("将"),e("code",[t._v("webpack")]),t._v("中"),e("code",[t._v("entry")]),t._v("配置的相关入口"),e("code",[t._v("chunk")]),t._v("和"),e("code",[t._v("extract-text-webpack-plugin")]),t._v("抽取的"),e("code",[t._v("css")]),t._v("样式插入到该插件提供的"),e("code",[t._v("template")]),t._v("或者"),e("code",[t._v("templateContent")]),t._v("配置项指定的内容基础上生成一个"),e("code",[t._v("html")]),t._v("文件，具体插入方式是将样式"),e("code",[t._v("link")]),t._v("插入到"),e("code",[t._v("head")]),t._v("元素中，"),e("code",[t._v("script")]),t._v("插入到"),e("code",[t._v("head")]),t._v("或者"),e("code",[t._v("body")]),t._v("中。")])]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" HtmlWebpackPlugin "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'html-webpack-plugin'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" produce "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* ... */")]),t._v("\n    plugins"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HtmlWebpackPlugin")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            filename"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'index.html'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            template"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" path"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("join")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("__dirname"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/index.html'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            minify"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("   "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 压缩")]),t._v("\n                removeComments"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 移除注释")]),t._v("\n                collapseWhitesspace"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 删除空白符与换行")]),t._v("\n                minifyCss"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 压缩内联css")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            inject"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[e("code",[t._v("inject")]),t._v("有四个选项值")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("true")]),t._v("：默认值，"),e("code",[t._v("script")]),t._v("标签位于"),e("code",[t._v("html")]),t._v("文件的"),e("code",[t._v("body")]),t._v("底部")]),t._v(" "),e("li",[e("code",[t._v("body")]),t._v("："),e("code",[t._v("script")]),t._v("标签位于"),e("code",[t._v("html")]),t._v("文件的"),e("code",[t._v("body")]),t._v("底部(同"),e("code",[t._v("true")]),t._v(")")]),t._v(" "),e("li",[e("code",[t._v("head")]),t._v("："),e("code",[t._v("script")]),t._v("标签位于"),e("code",[t._v("head")]),t._v("标签内")]),t._v(" "),e("li",[e("code",[t._v("false")]),t._v("：不插入生成的js文件，只是单纯的生成一个"),e("code",[t._v("html")]),t._v("文件")])]),t._v(" "),e("hr")])],1)],1)}),[],!1,null,null,null);a.default=n.exports}}]);