"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[290],{290:function(e,t,n){n.r(t);var c=n(439),r=n(791),i=n(689),o=n(87),a=n(697),s=n(184);t.default=function(){var e,t,n=(0,r.useState)(null),l=(0,c.Z)(n,2),u=l[0],d=l[1],h=(0,i.UO)().movieId,p=(0,i.TH)(),f=null!==(e=null===(t=p.state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/movies";return(0,r.useEffect)((function(){(0,a.FL)(h).then(d)}),[h]),u&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(o.rU,{to:f,children:"Go back"}),(0,s.jsxs)("div",{children:[u.poster_path?(0,s.jsx)("img",{src:"https://image.tmdb.org/t/p/w200/".concat(u.poster_path),alt:"".concat(u.title," movie poster")}):(0,s.jsx)("img",{src:"https://www.pulsecarshalton.co.uk/wp-content/uploads/2016/08/jk-placeholder-image.jpg",alt:"poster placeholder",width:"200"}),(0,s.jsxs)("div",{children:[(0,s.jsxs)("h1",{children:[u.title,"(",u.release_date.slice(0,4),")"]}),(0,s.jsxs)("p",{children:["User Score: ",u.vote_average]}),(0,s.jsx)("h2",{children:"Overview"}),(0,s.jsx)("p",{children:u.overview}),(0,s.jsx)("h3",{children:"Genres"}),(0,s.jsx)("p",{children:u.genres.map((function(e){return e.name})).join(", ")})]})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("p",{children:"Additional information"}),(0,s.jsxs)("ul",{children:[(0,s.jsx)("li",{children:(0,s.jsx)(o.rU,{to:"cast",state:p.state,children:"Cast"})}),(0,s.jsx)("li",{children:(0,s.jsx)(o.rU,{to:"reviews",state:p.state,children:"Reviews"})})]})]}),(0,s.jsx)(i.j3,{})]})}},697:function(e,t,n){n.d(t,{Df:function(){return o},FL:function(){return a},Ht:function(){return u},Ku:function(){return s},fI:function(){return l}});var c=n(243),r="5f7559859986b78c33527b478befbc82",i="https://api.themoviedb.org/3/",o=function(){return c.Z.get("".concat(i,"trending/all/day?api_key=").concat(r))},a=function(e){return c.Z.get("\n".concat(i,"movie/").concat(e,"?api_key=").concat(r)).then((function(e){return e.data}))},s=function(e){return c.Z.get("".concat(i,"movie/").concat(e,"/credits?api_key=").concat(r))},l=function(e){return c.Z.get("".concat(i,"movie/").concat(e,"/reviews?api_key=").concat(r))},u=function(e){return c.Z.get("\n".concat(i,"search/movie?query=").concat(e,"&api_key=").concat(r))}}}]);
//# sourceMappingURL=290.b883531f.chunk.js.map