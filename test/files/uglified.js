!function r(t,e,o){function n(u,f){if(!e[u]){if(!t[u]){var i="function"==typeof require&&require;if(!f&&i)return i(u,!0);if(a)return a(u,!0);throw new Error("Cannot find module '"+u+"'")}var h=e[u]={exports:{}};t[u][0].call(h.exports,function(r){var e=t[u][1][r];return n(e?e:r)},h,h.exports,r,t,e,o)}return e[u].exports}for(var a="function"==typeof require&&require,u=0;u<o.length;u++)n(o[u]);return n}({1:[function(r,t){function e(r){if(0>r)return Number("0/0");for(var t=u[0],e=u.length-1;e>0;--e)t+=u[e]/(r+e);var o=r+a+.5;return.5*Math.log(2*Math.PI)+(r+.5)*Math.log(o)-o+Math.log(t)-Math.log(r)}var o=7,n=[.9999999999998099,676.5203681218851,-1259.1392167224028,771.3234287776531,-176.6150291621406,12.507343278686905,-.13857109526572012,9984369578019572e-21,1.5056327351493116e-7],a=607/128,u=[.9999999999999971,57.15623566586292,-59.59796035547549,14.136097974741746,-.4919138160976202,3399464998481189e-20,4652362892704858e-20,-9837447530487956e-20,.0001580887032249125,-.00021026444172410488,.00021743961811521265,-.0001643181065367639,8441822398385275e-20,-26190838401581408e-21,36899182659531625e-22];t.exports=function f(r){if(.5>r)return Math.PI/(Math.sin(Math.PI*r)*f(1-r));if(r>100)return Math.exp(e(r));r-=1;for(var t=n[0],a=1;o+2>a;a++)t+=n[a]/(r+a);var u=r+o+.5;return Math.sqrt(2*Math.PI)*Math.pow(u,r+.5)*Math.exp(-u)*t},t.exports.log=e},{}],2:[function(r,t){t.exports=function(r){return 111*r}},{}],3:[function(r){var t=r("./foo.js"),e=r("gamma");console.log(Math.floor(t(e(3.8))))},{"./foo.js":2,gamma:1}]},{},[3]);