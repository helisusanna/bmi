(this.webpackJsonpbmi=this.webpackJsonpbmi||[]).push([[0],{11:function(a,e,t){"use strict";t.r(e);var i=t(1),n=t.n(i),s=t(4),c=t(2),l=t(0);var o=function(a){var e=Object(i.useState)(""),t=Object(c.a)(e,2),n=t[0],s=t[1],o=Object(i.useState)(""),r=Object(c.a)(o,2),d=r[0],u=r[1],b=Object(i.useState)(""),j=Object(c.a)(b,2),m=j[0],p=j[1],v=Object(i.useState)(""),O=Object(c.a)(v,2),h=O[0],k=O[1],x=Object(i.useState)(""),N=Object(c.a)(x,2),g=N[0],y=N[1],f=Object(i.useState)(""),S=Object(c.a)(f,2),w=S[0],L=S[1],M=Object(i.useState)(""),C=Object(c.a)(M,2),F=C[0],A=C[1];return Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)("nav",{className:"navbar navbar-light",children:Object(l.jsx)("p",{className:"navbar-brand",children:"BMI Laskuri"})}),Object(l.jsxs)("div",{className:"col-sm-6",children:[Object(l.jsx)("input",{className:"form-control","data-testid":"pituus",type:"number",placeholder:"Anna pituutesi (cm)",onChange:function(a){A(a.target.value)},onFocus:function(a){s(""),u(""),p(""),k(""),y("")}}),Object(l.jsx)("input",{className:"form-control","data-testid":"paino",type:"number",placeholder:"Anna painosi (kg)",onChange:function(a){L(a.target.value)},onFocus:function(a){s(""),u(""),p(""),k(""),y("")}}),Object(l.jsx)("button",{className:"btn btn-primary btn-block","data-testid":"nappi",onClick:function(){if(w>=30&&w<=230)if(F>=100&&F<=230){var e=a.painoindeksi?a.painoindeksi:w/(F/100*(F/100));a.painoindeksi?s("Painoindeksi on: ".concat(e)):s("Painoindeksi on: ".concat(e.toFixed(1))),e<15?u("Vaikea alipaino"):e>35?u("Vaikea ylipaino"):e>=15&&e<17?p("Merkitt\xe4v\xe4 alipaino"):e<=35&&e>30?p("Merkitt\xe4v\xe4 ylipaino"):e>=17&&e<18.5?p("Liev\xe4 alipaino"):e<=30&&e>25?p("Liev\xe4 ylipaino"):e>=18.5&&e<=25&&k("Normaali paino")}else y("Sy\xf6tt\xf6tiedoissa on virhe. K\xe4yt\xe4 ainoastaan numeerisia arvoja v\xe4lilt\xe4 100-230");else y("Sy\xf6tt\xf6tiedoissa on virhe. K\xe4yt\xe4 ainoastaan numeerisia arvoja v\xe4lilt\xe4 30-230")},children:"Laske painoindeksi"}),n?Object(l.jsx)("div",{className:"card card-body mt-3",children:n}):null,d?Object(l.jsx)("div",{className:"alert alert-danger","data-testid":"danger-ilmoitus",children:d}):null,m?Object(l.jsx)("div",{className:"alert alert-warning","data-testid":"warning-ilmoitus",children:m}):null,h?Object(l.jsx)("div",{className:"alert alert-success","data-testid":"success-ilmoitus",children:h}):null,g?Object(l.jsx)("div",{className:"alert alert-danger","data-testid":"virheilmoitus",children:g}):null]})]})};t(10);s.render(Object(l.jsx)(n.a.StrictMode,{children:Object(l.jsx)(o,{})}),document.getElementById("root"))}},[[11,1,2]]]);
//# sourceMappingURL=main.1cd5ece2.chunk.js.map