"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[823],{823:function(t,e,n){n.r(e),n.d(e,{default:function(){return h}});var r=n(439),i=n(184),o=function(t){var e=t.author,n=t.review;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("h3",{children:["Author: ",e]}),(0,i.jsx)("p",{children:n})]})},c=n(791),u=n(689),a=n(697),h=function(){var t=(0,c.useState)([]),e=(0,r.Z)(t,2),n=e[0],h=e[1],f=(0,u.UO)().movieId;return(0,c.useEffect)((function(){(0,a.fI)(f).then((function(t){return t.data.results})).then(h)}),[f]),n.length?(0,i.jsx)("ul",{children:n.map((function(t){return(0,i.jsx)("li",{children:(0,i.jsx)(o,{author:t.author,review:t.content})},t.id)}))}):(0,i.jsx)("p",{children:"Sorry, we don't have any reviews for this movie"})}},697:function(t,e,n){n.d(e,{Df:function(){return o},FL:function(){return c},Ht:function(){return h},Ku:function(){return u},fI:function(){return a}});var r=n(243),i="5f7559859986b78c33527b478befbc82",o=function(){return r.Z.get("https://api.themoviedb.org/3/trending/all/day?api_key=".concat(i))},c=function(t){return r.Z.get("\nhttps://api.themoviedb.org/3/movie/".concat(t,"?api_key=").concat(i)).then((function(t){return t.data}))},u=function(t){return r.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"/credits?api_key=").concat(i))},a=function(t){return r.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"/reviews?api_key=").concat(i))},h=function(t){return r.Z.get("\nhttps://api.themoviedb.org/3/search/movie?query=".concat(t,"&api_key=").concat(i))}}}]);
//# sourceMappingURL=823.32cf95ae.chunk.js.map