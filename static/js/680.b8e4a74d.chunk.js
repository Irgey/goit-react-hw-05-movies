"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[680],{680:function(n,t,e){e.r(t);var c=e(439),r=e(791),i=e(87),o=e(697),u=e(184);t.default=function(){var n=(0,r.useState)([]),t=(0,c.Z)(n,2),e=t[0],a=t[1];return(0,r.useEffect)((function(){(0,o.Df)().then((function(n){return n.data.results})).then(a)}),[]),(0,u.jsxs)("div",{children:[(0,u.jsx)("h1",{children:"Trending Movies"}),(0,u.jsx)("ul",{children:e.map((function(n){return(0,u.jsx)("li",{children:(0,u.jsx)(i.rU,{to:"movies/".concat(n.id),children:n.title?n.title:n.name})},n.id)}))})]})}},697:function(n,t,e){e.d(t,{Df:function(){return o},FL:function(){return u},Ht:function(){return s},Ku:function(){return a},fI:function(){return f}});var c=e(243),r="5f7559859986b78c33527b478befbc82",i="https://api.themoviedb.org/3/",o=function(){return c.Z.get("".concat(i,"trending/all/day?api_key=").concat(r))},u=function(n){return c.Z.get("\n".concat(i,"movie/").concat(n,"?api_key=").concat(r)).then((function(n){return n.data}))},a=function(n){return c.Z.get("".concat(i,"movie/").concat(n,"/credits?api_key=").concat(r))},f=function(n){return c.Z.get("".concat(i,"movie/").concat(n,"/reviews?api_key=").concat(r))},s=function(n){return c.Z.get("\n".concat(i,"search/movie?query=").concat(n,"&api_key=").concat(r))}}}]);
//# sourceMappingURL=680.b8e4a74d.chunk.js.map