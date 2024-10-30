(function(){try{var e=typeof window<"u"?window:typeof o<"u"?o:typeof self<"u"?self:{},t=new Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="8ab0deae-c38b-47da-8cf8-0272d37a9870",e._sentryDebugIdIdentifier="sentry-dbid-8ab0deae-c38b-47da-8cf8-0272d37a9870")}catch{}})();const{global:o}=__STORYBOOK_MODULE_GLOBAL__,{addons:h}=__STORYBOOK_MODULE_PREVIEW_API__,{STORY_CHANGED:g}=__STORYBOOK_MODULE_CORE_EVENTS__;var r="storybook/highlight",s="storybookHighlight",y=`${r}/add`,I=`${r}/reset`,{document:_}=o,O=(e="#FF4785",t="dashed")=>`
  outline: 2px ${t} ${e};
  outline-offset: 2px;
  box-shadow: 0 0 0 6px rgba(255,255,255,0.6);
`,a=h.getChannel(),b=e=>{let t=s;i();let d=Array.from(new Set(e.elements)),n=_.createElement("style");n.setAttribute("id",t),n.innerHTML=d.map(l=>`${l}{
          ${O(e.color,e.style)}
         }`).join(" "),_.head.appendChild(n)},i=()=>{var d;let e=s,t=_.getElementById(e);t&&((d=t.parentNode)==null||d.removeChild(t))};a.on(g,i);a.on(I,i);a.on(y,b);
