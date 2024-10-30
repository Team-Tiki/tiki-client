(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},d=new Error().stack;d&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[d]="9dcb7b06-a9c9-4c0c-b679-1fd29a60eb1f",t._sentryDebugIdIdentifier="sentry-dbid-9dcb7b06-a9c9-4c0c-b679-1fd29a60eb1f")}catch{}})();function b(t){for(var d=[],i=1;i<arguments.length;i++)d[i-1]=arguments[i];var n=Array.from(typeof t=="string"?[t]:t);n[n.length-1]=n[n.length-1].replace(/\r?\n([\t ]*)$/,"");var u=n.reduce(function(e,o){var c=o.match(/\n([\t ]+|(?!\s).)/g);return c?e.concat(c.map(function(s){var r,a;return(a=(r=s.match(/[\t ]/g))===null||r===void 0?void 0:r.length)!==null&&a!==void 0?a:0})):e},[]);if(u.length){var g=new RegExp(`
[	 ]{`+Math.min.apply(Math,u)+"}","g");n=n.map(function(e){return e.replace(g,`
`)})}n[0]=n[0].replace(/^\r?\n/,"");var f=n[0];return d.forEach(function(e,o){var c=f.match(/(?:^|\n)( *)$/),s=c?c[1]:"",r=e;typeof e=="string"&&e.includes(`
`)&&(r=String(e).split(`
`).map(function(a,l){return l===0?a:""+s+a}).join(`
`)),f+=r+n[o+1]}),f}export{b as d};
