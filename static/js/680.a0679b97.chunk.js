"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[680],{680:function(t,e,n){n.r(e);var r=n(439),i=n(791),c=n(87),o=n(697),u=n(184);e.default=function(){var t=(0,i.useState)([]),e=(0,r.Z)(t,2),n=e[0],a=e[1];return(0,i.useEffect)((function(){(0,o.Df)().then((function(t){return t.data.results})).then(a)}),[]),(0,u.jsxs)("div",{children:[(0,u.jsx)("h1",{children:"Trending Movies"}),(0,u.jsx)("ul",{children:n.map((function(t){return(0,u.jsx)("li",{children:(0,u.jsx)(c.rU,{to:"movies/".concat(t.id),children:t.title?t.title:t.name})},t.id)}))})]})}},697:function(t,e,n){n.d(e,{Df:function(){return c},FL:function(){return o},Ht:function(){return f},Ku:function(){return u},fI:function(){return a}});var r=n(243),i="5f7559859986b78c33527b478befbc82",c=function(){return r.Z.get("https://api.themoviedb.org/3/trending/all/day?api_key=".concat(i))},o=function(t){return r.Z.get("\nhttps://api.themoviedb.org/3/movie/".concat(t,"?api_key=").concat(i)).then((function(t){return t.data}))},u=function(t){return r.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"/credits?api_key=").concat(i))},a=function(t){return r.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"/reviews?api_key=").concat(i))},f=function(t){return r.Z.get("\nhttps://api.themoviedb.org/3/search/movie?query=".concat(t,"&api_key=").concat(i))}}}]);
//# sourceMappingURL=680.a0679b97.chunk.js.map