// Generated by CoffeeScript 1.6.1
/*
 * Keep calm and carry on
 * A JavaScript util library
 * @author Leny (http://leny.me)
 *
 * inspired by:
 *     Utopia by Lea Verou (http://lea.verou.me)
 *     jQuery (http://jquery.com)
 *
 * MIT license (http://www.opensource.org/licenses/mit-license.php)
 * Last update: 2013-5-3
*/(function(){var e,t;e=function(e,t){var n,r,i;if(!e)return[];n=(t||document).querySelectorAll(e)||[];return r=function(){var e,t,r;r=[];for(e=0,t=n.length;e<t;e++){i=n[e];r.push(i)}return r}()};t=function(e){var t,n,r,i,s,o,u,a,f,l,c,h,p;i=new XMLHttpRequest;o=(f=e.method)!=null?f:"GET";r=(l=e.headers)!=null?l:{};i.responseType=(c=e.type)!=null?c:"";t=[];p=(h=e.data)!=null?h:{};for(u in p){n=p[u];t.push(encodeURIComponent(u)+"="+encodeURIComponent(n))}s=t.join("&");i.open(o,e.url+(o==="GET"&&s?"?"+s:""),!0);o!=="GET"&&!r["Content-type"]&&!r["Content-Type"]&&i.setRequestHeader("Content-type","application/x-www-form-urlencoded");for(u in r){a=r[u];i.setRequestHeader(u,a)}i.onreadystatechange=function(){if(i.readyState===4)return e.callback(i.response,i)};i.send(o==="GET"?null:s);return i};e.xhr=t;e.ajax=t;window.$=e}).call(this);
