import{_ as o,e as i,L as l,k as s,v as t,i as n,G as a,c}from"./chunks/framework.CRIP8SHs.js";const D=JSON.parse('{"title":"多个commit合并成一个","description":"","frontmatter":{},"headers":[],"relativePath":"笔记/other/software/git/多个commit合并成一个.md","filePath":"笔记/other/software/git/多个commit合并成一个.md","lastUpdated":1719890788000}'),r={name:"笔记/other/software/git/多个commit合并成一个.md"},m=t("h1",{id:"多个commit合并成一个",tabindex:"-1"},[n("多个commit合并成一个 "),t("a",{class:"header-anchor",href:"#多个commit合并成一个","aria-label":'Permalink to "多个commit合并成一个"'},"​")],-1),_=t("ul",null,[t("li",null,"输入git log -8 //查看前8条提交"),t("li",null,"按大写ZZ退出日志查看，输入git rebase -i HEAD~3 //表示最近的3条合并成一条(如果失败，检查有没有为提交或暂存的修改，提交或暂存它们)"),t("li",null,"输入完后界面如下，按i进入编译模式，将第2，3个pick改为s，表示将后2条合并到第一条中，然后按esc退出编译模式，然后按大写ZZ，再按ZZ彻底退出 ctrl+w 快速删了pick")],-1),p=t("p",null,[t("img",{src:"https://raw.githubusercontent.com/nsnans/picGo-bed/main/vitepress_1x/202407011347740.png",alt:"alt text"})],-1),u=t("p",null,[t("img",{src:"https://raw.githubusercontent.com/nsnans/picGo-bed/main/vitepress_1x/202407011348771.png",alt:"alt text"})],-1),d=t("ul",null,[t("li",null,"可以通过git log看合并情况，如下图表示合并成功，然后输入git push --force推送到远程")],-1),h=t("p",null,[t("img",{src:"https://raw.githubusercontent.com/nsnans/picGo-bed/main/vitepress_1x/202407011348452.png",alt:"alt text"})],-1),g=t("div",{class:"tip custom-block"},[t("p",{class:"custom-block-title"},"参考"),t("ul",null,[t("li",null,[t("a",{href:"https://www.cnblogs.com/liuXiaoDi/p/17720189.html",target:"_blank",rel:"noreferrer"},"https://www.cnblogs.com/liuXiaoDi/p/17720189.html")]),t("li",null,[t("a",{href:"https://blog.csdn.net/Albert_J/article/details/135759398",target:"_blank",rel:"noreferrer"},"https://blog.csdn.net/Albert_J/article/details/135759398")])])],-1);function f(b,w,x,k,v,Z){const e=a("Bimg");return c(),i("div",null,[m,_,l(e,null,{default:s(()=>[p]),_:1}),l(e,null,{default:s(()=>[u]),_:1}),d,l(e,null,{default:s(()=>[h]),_:1}),g])}const G=o(r,[["render",f]]);export{D as __pageData,G as default};
