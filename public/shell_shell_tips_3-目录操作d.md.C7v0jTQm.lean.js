import{_ as r,a7 as a,O as d,k as t,V as n,a0 as l,R as s,N as o}from"./chunks/framework.CTc7_n9L.js";const el=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"shell/shell/tips/3-目录操作d.md","filePath":"shell/shell/tips/3-目录操作d.md"}'),h={name:"shell/shell/tips/3-目录操作d.md"},u=l("h4",{id:"删-rm-和-rmdir",tabindex:"-1"},[s("删 rm 和 rmdir "),l("a",{class:"header-anchor",href:"#删-rm-和-rmdir","aria-label":'Permalink to "删 rm 和 rmdir"'},"​")],-1),c=l("br",null,null,-1),_=l("h5",{id:"rm",tabindex:"-1"},[s("rm "),l("a",{class:"header-anchor",href:"#rm","aria-label":'Permalink to "rm"'},"​")],-1),p=l("hr",null,null,-1),k=l("table",{tabindex:"0"},[l("thead",null,[l("tr",null,[l("th",null,"命令 （a是文件，aa是目录"),l("th",null,"作用")])]),l("tbody",null,[l("tr",null,[l("td",null,[l("code",null,"rm a")]),l("td",null,"删除当前目录下的文件 a")]),l("tr",null,[l("td",null,[l("code",null,"rm -f a")]),l("td",null,"删除当前目录的的文件（不询问）")]),l("tr",null,[l("td",null,[l("code",null,"rm -r aa")]),l("td",null,"递归删除当前目录下的aa目录")]),l("tr",null,[l("td",null,[l("code",null,"rm -rf aa")]),l("td",null,"递归删除当前目录下的aa目录（不询问）")]),l("tr",null,[l("td",null,[l("code",null,"rm -rf /**")]),l("td",null,"将根目录下的所有文件全部删除 【自杀命令！慎用！慎用！慎用！】")]),l("tr",null,[l("td",null,[l("code",null,"rm -r *")]),l("td",null,"删除当前目录下除隐含文件外的所有文件和子目录")]),l("tr",null,[l("td",null,[l("code",null,"rm -rf *.html")]),l("td",null,"删除当前项目下 *.html 结尾的文件")]),l("tr",null,[l("td",null,[l("code",null,"rm -r -i testdir")]),l("td",null,"删除操作前有确认提示")]),l("tr",null,[l("td",null,[l("code",null,"rm -rf icons/**/data")]),l("td",null,[s("批量删除 "),l("code",null,"icons"),s(" 文件夹中的子文件夹中的 data 文件夹")])]),l("tr",null,[l("td",null,[l("code",null,"rm -v [文件/目录]")]),l("td",null,"显示当前删除操作的详情")])])],-1),m=l("hr",null,null,-1),g=l("blockquote",null,[l("p",null,[l("strong",null,"作用")])],-1),b=l("p",null,"用于删除给定的文件和目录",-1),y=l("p",null,"rm 命令 可以删除一个目录中的一个或多个文件或目录，也可以将某个目录及其下属的所有文件及其子目录均删除掉。对于链接文件，只是删除整个链接文件，而原有文件保持不变。",-1),F=l("p",null,"注意：使用rm命令要格外小心。因为一旦删除了一个文件，就无法再恢复它。所以，在删除文件之前，最好再看一下文件的内容，确定是否真要删除。rm命令可以用-i选项，这个选项在使用文件扩展名字符删除多个文件时特别有用。使用这个选项，系统会要求你逐一确定是否要删除。这时，必须输入y并按Enter键，才能删除文件。如果仅按Enter键或其他字符，文件不会被删除。",-1),C=l("hr",null,null,-1),v=l("blockquote",null,[l("p",null,[l("strong",null,"语法")])],-1),f=l("div",{class:"language-sh vp-adaptive-theme"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"},"sh"),l("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"rm"),l("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," (选项)("),l("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"参数"),l("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},")")])])])],-1),E=l("hr",null,null,-1),w=l("blockquote",null,[l("p",null,[l("strong",null,"选项")])],-1),B=l("div",{class:"language-sh vp-adaptive-theme"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"},"sh"),l("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"-d：直接把欲删除的目录的硬连接数据删除成0，删除该目录；")]),s(`
`),l("span",{class:"line"},[l("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"-f：强制删除文件或目录,不会出现警告信息；")]),s(`
`),l("span",{class:"line"},[l("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"-i：删除已有文件或目录之前先询问用户；这是非常危险的选项！！！"),l("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," 输入y/n来确认")]),s(`
`),l("span",{class:"line"},[l("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"-r或-R：递归处理，将指定目录下的所有文件与子目录一并处理；")]),s(`
`),l("span",{class:"line"},[l("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"--preserve-root：不对根目录进行递归操作；")]),s(`
`),l("span",{class:"line"},[l("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"-v：显示指令的详细执行过程。")])])])],-1),x=l("hr",null,null,-1),q=l("blockquote",null,[l("p",null,[l("strong",null,"参数")])],-1),P=l("p",null,"文件：指定被删除的文件列表，如果参数中含有目录，则必须加上-r或者-R选项。",-1),N=l("hr",null,null,-1),T=l("hr",null,null,-1),V=l("br",null,null,-1),$=l("h5",{id:"rmdir",tabindex:"-1"},[s("rmdir "),l("a",{class:"header-anchor",href:"#rmdir","aria-label":'Permalink to "rmdir"'},"​")],-1),R=l("hr",null,null,-1),O=l("table",{tabindex:"0"},[l("thead",null,[l("tr",null,[l("th",null,"命令 （aa是目录"),l("th",null,"作用")])]),l("tbody",null,[l("tr",null,[l("td",null,[l("code",null,"rmdir aa")]),l("td",null,"删除当前目录下的aa目录")]),l("tr",null,[l("td",null,[l("code",null,"rmdir -p www/Test"),s(" 等同于 "),l("code",null,"rmdir www/Test, rmdir www")]),l("td",null,"在工作目录下的 www 目录中，删除名为 Test 的子目录。若 Test 删除后，www 目录成为空目录，则 www 亦予删除。")])])],-1),D=l("hr",null,null,-1),J=l("p",null,"只能删除空的目录",-1),S=l("blockquote",null,[l("p",null,[l("strong",null,"作用")])],-1),j=l("p",null,"rmdir命令 用来删除空目录。当目录不再被使用时，或者磁盘空间已到达使用限定值，就需要删除失去使用价值的目录。利用rmdir命令可以从一个目录中删除一个或多个空的子目录。该命令从一个目录中删除一个或多个子目录，其中dirname佬表示目录名。如果dirname中没有指定路径，则删除当前目录下由dirname指定的目录；如dirname中包含路径，则删除指定位置的目录。删除目录时，必须具有对其父目录的写权限。",-1),z=l("p",null,"注意：子目录被删除之前应该是空目录。就是说，该目录中的所有文件必须用rm命令全部，另外，当前工作目录必须在被删除目录之上，不能是被删除目录本身，也不能是被删除目录的子目录。",-1),A=l("h2",{id:"虽然还可以用带有-r选项的rm命令递归删除一个目录中的所有文件和该目录本身-但是这样做存在很大的危险性。",tabindex:"-1"},[s("虽然还可以用带有-r选项的rm命令递归删除一个目录中的所有文件和该目录本身，但是这样做存在很大的危险性。 "),l("a",{class:"header-anchor",href:"#虽然还可以用带有-r选项的rm命令递归删除一个目录中的所有文件和该目录本身-但是这样做存在很大的危险性。","aria-label":'Permalink to "虽然还可以用带有-r选项的rm命令递归删除一个目录中的所有文件和该目录本身，但是这样做存在很大的危险性。"'},"​")],-1),G=l("blockquote",null,[l("p",null,[l("strong",null,"语法")])],-1),H=l("div",{class:"language-sh vp-adaptive-theme"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"},"sh"),l("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"rmdir(选项"),l("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},")("),l("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"参数"),l("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},")")])])])],-1),I=l("hr",null,null,-1),K=l("blockquote",null,[l("p",null,[l("strong",null,"选项")])],-1),L=l("div",{class:"language-sh vp-adaptive-theme"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"},"sh"),l("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"-p或--parents：删除指定目录后，若该目录的上层目录已变成空目录，则将其一并删除；")]),s(`
`),l("span",{class:"line"},[l("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"--ignore-fail-on-non-empty：此选项使rmdir命令忽略由于删除非空目录时导致的错误信息；")]),s(`
`),l("span",{class:"line"},[l("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"-v或-verboes：显示命令的详细执行过程；")]),s(`
`),l("span",{class:"line"},[l("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"--help：显示命令的帮助信息；")]),s(`
`),l("span",{class:"line"},[l("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"--version：显示命令的版本信息。")])])])],-1),M=l("hr",null,null,-1),Q=l("blockquote",null,[l("p",null,[l("strong",null,"参数"),s(" 目录列表：要删除的空目录列表。当删除多个空目录时，目录名之间使用空格隔开。")])],-1),U=l("hr",null,null,-1),W=l("hr",null,null,-1);function X(Y,Z,ll,sl,nl,tl){const i=a("Card"),e=a("Collapse");return o(),d("div",null,[u,c,_,p,t(i,null,{title:n(()=>[s(" 实例 ")]),default:n(()=>[k]),_:1}),m,t(e,null,{default:n(()=>[g,b,y,F,C,v,f,E,w,B,x,q,P,N]),_:1}),T,V,$,R,t(i,null,{title:n(()=>[s(" 实例 ")]),default:n(()=>[O]),_:1}),D,t(e,null,{default:n(()=>[J,S,j,z,A,G,H,I,K,L,M,Q,U]),_:1}),W])}const al=r(h,[["render",X]]);export{el as __pageData,al as default};
