"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[667],{667:function(t,e,n){n.r(e);var r=n(439),c=n(791),i=n(87),o=n(697),u=n(184);e.default=function(){var t=(0,c.useState)([]),e=(0,r.Z)(t,2),n=e[0],a=e[1],s=(0,i.lr)(),f=(0,r.Z)(s,2),h=f[0],l=f[1],p=h.get("query");(0,c.useEffect)((function(){p&&((0,o.Ht)(p).then((function(t){return t.data.results})).then(a),console.log(Boolean([])))}),[p]);return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)("form",{onSubmit:function(t){t.preventDefault();var e=t.target;l({query:e.elements.search.value}),e.reset()},children:[(0,u.jsx)("input",{name:"search",type:"text"}),(0,u.jsx)("button",{type:"submit",children:"Search"})]}),n&&(0,u.jsx)("ul",{children:n.map((function(t){return(0,u.jsx)("li",{children:(0,u.jsx)(i.rU,{to:"".concat(t.id),children:t.title?t.title:t.name})},t.id)}))})]})}},697:function(t,e,n){n.d(e,{Df:function(){return i},FL:function(){return o},Ht:function(){return s},Ku:function(){return u},fI:function(){return a}});var r=n(243),c="5f7559859986b78c33527b478befbc82",i=function(){return r.Z.get("https://api.themoviedb.org/3/trending/all/day?api_key=".concat(c))},o=function(t){return r.Z.get("\nhttps://api.themoviedb.org/3/movie/".concat(t,"?api_key=").concat(c)).then((function(t){return t.data}))},u=function(t){return r.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"/credits?api_key=").concat(c))},a=function(t){return r.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"/reviews?api_key=").concat(c))},s=function(t){return r.Z.get("\nhttps://api.themoviedb.org/3/search/movie?query=".concat(t,"&api_key=").concat(c))}}}]);
//# sourceMappingURL=667.719dc9e8.chunk.js.map