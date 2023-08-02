import { useEffect } from "react";

declare global {
  interface Window {
    driftt: any;
    drift: any;
  }
}

const DriftChatWidget = () => {
  useEffect(() => {
    !function() {
      var driftt = (window.driftt = window.drift = window.driftt || []);
      if (!driftt.init) {
        if (driftt.invoked) return void (console && console.error && console.error("Drift snippet included twice."));
        driftt.invoked = true;
        driftt.methods = [ "identify", "config", "track", "reset", "debug", "show", "ping", "page", "hide", "off", "on" ];
        driftt.factory = function(e: any) {
          return function() {
            var t = Array.prototype.slice.call(arguments);
            return t.unshift(e), driftt.push(t), driftt;
          };
        };
        driftt.methods.forEach(function(e: string) {
          driftt[e] = driftt.factory(e);
        });
        driftt.load = function(t: string) {
          var e: any = 3e5, n = Math.ceil(Number(new Date()) / e) * e, o = document.createElement("script");
          o.type = "text/javascript";
          o.async = true;
          o.crossOrigin = "anonymous";
          o.src = `https://js.driftt.com/include/${n}/${t}.js`;
          var i = document.getElementsByTagName("script")[0];
          i.parentNode?.insertBefore(o, i);
        };
      }
      driftt.SNIPPET_VERSION = '0.3.1';
      driftt.load('8ftcmc4zmtft');
    }();
  }, []);
  
  return (
    <div />
  );
};

export default DriftChatWidget;