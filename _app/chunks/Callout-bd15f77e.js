import{S as e,i as s,s as t,e as a,t as r,c as l,a as o,g as c,d as n,b as i,f as d,H as f,k as $,j as h,n as u,m,o as p,h as v,v as k,r as E,w as V,E as g,I as w}from"./vendor-1eea39ca.js";import{a as x}from"./VideoModule-c2b5eedd.js";function I(e){let s;const t=e[2].default,a=g(t,e,e[3],null);return{c(){a&&a.c()},l(e){a&&a.l(e)},m(e,t){a&&a.m(e,t),s=!0},p(e,r){a&&a.p&&(!s||8&r)&&w(a,t,e,e[3],s?r:-1,null,null)},i(e){s||(k(a,e),s=!0)},o(e){E(a,e),s=!1},d(e){a&&a.d(e)}}}function L(e){let s,t,$;return{c(){s=a("div"),t=a("a"),$=r("View Starter Code"),this.h()},l(e){s=l(e,"DIV",{class:!0});var a=o(s);t=l(a,"A",{class:!0,href:!0});var r=o(t);$=c(r,"View Starter Code"),r.forEach(n),a.forEach(n),this.h()},h(){i(t,"class","card-footer-item svelte-1d03e9e"),i(t,"href",e[1]),i(s,"class","card-footer linker svelte-1d03e9e")},m(e,a){d(e,s,a),f(s,t),f(t,$)},p(e,s){2&s&&i(t,"href",e[1])},d(e){e&&n(s)}}}function b(e){let s,t,g,w,b,j,y,C,D;y=new x({props:{$$slots:{default:[I]},$$scope:{ctx:e}}});let S=e[1]&&L(e);return{c(){s=a("div"),t=a("div"),g=a("h3"),w=r("💡 "),b=r(e[0]),j=$(),h(y.$$.fragment),C=$(),S&&S.c(),this.h()},l(a){s=l(a,"DIV",{class:!0});var r=o(s);t=l(r,"DIV",{class:!0});var i=o(t);g=l(i,"H3",{});var d=o(g);w=c(d,"💡 "),b=c(d,e[0]),d.forEach(n),j=u(i),m(y.$$.fragment,i),i.forEach(n),C=u(r),S&&S.l(r),r.forEach(n),this.h()},h(){i(t,"class","card-content body svelte-1d03e9e"),i(s,"class","callout card my-5 svelte-1d03e9e")},m(e,a){d(e,s,a),f(s,t),f(t,g),f(g,w),f(g,b),f(t,j),p(y,t,null),f(s,C),S&&S.m(s,null),D=!0},p(e,[t]){(!D||1&t)&&v(b,e[0]);const a={};8&t&&(a.$$scope={dirty:t,ctx:e}),y.$set(a),e[1]?S?S.p(e,t):(S=L(e),S.c(),S.m(s,null)):S&&(S.d(1),S=null)},i(e){D||(k(y.$$.fragment,e),D=!0)},o(e){E(y.$$.fragment,e),D=!1},d(e){e&&n(s),V(y),S&&S.d()}}}function j(e,s,t){let{$$slots:a={},$$scope:r}=s,{title:l="No Title!"}=s,{footerLink:o}=s;return e.$$set=e=>{"title"in e&&t(0,l=e.title),"footerLink"in e&&t(1,o=e.footerLink),"$$scope"in e&&t(3,r=e.$$scope)},[l,o,a,r]}class y extends e{constructor(e){super(),s(this,e,j,b,t,{title:0,footerLink:1})}}export{y as C};
