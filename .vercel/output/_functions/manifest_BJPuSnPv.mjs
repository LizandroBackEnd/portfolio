import 'piccolore';
import { q as decodeKey } from './chunks/astro/server_a3yW9ILe.mjs';
import 'clsx';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_D9o14ij3.mjs';
import 'es-module-lexer';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///home/lizdev/Escritorio/projects/portfolio/","cacheDir":"file:///home/lizdev/Escritorio/projects/portfolio/node_modules/.astro/","outDir":"file:///home/lizdev/Escritorio/projects/portfolio/dist/","srcDir":"file:///home/lizdev/Escritorio/projects/portfolio/src/","publicDir":"file:///home/lizdev/Escritorio/projects/portfolio/public/","buildClientDir":"file:///home/lizdev/Escritorio/projects/portfolio/dist/client/","buildServerDir":"file:///home/lizdev/Escritorio/projects/portfolio/dist/server/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"stage":"head-inline","children":"window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };\n\t\tvar script = document.createElement('script');\n\t\tscript.defer = true;\n\t\tscript.src = '/_vercel/insights/script.js';\n\t\tvar head = document.querySelector('head');\n\t\thead.appendChild(script);\n\t"}],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"stage":"head-inline","children":"window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };\n\t\tvar script = document.createElement('script');\n\t\tscript.defer = true;\n\t\tscript.src = '/_vercel/insights/script.js';\n\t\tvar head = document.querySelector('head');\n\t\thead.appendChild(script);\n\t"}],"styles":[{"type":"external","src":"/_astro/index.DaL2MnXb.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"site":"https://angelcruzsanchez.com","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/home/lizdev/Escritorio/projects/portfolio/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000virtual:astro:actions/noop-entrypoint":"noop-entrypoint.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_BJPuSnPv.mjs","/home/lizdev/Escritorio/projects/portfolio/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_D1YUgMea.mjs","/home/lizdev/Escritorio/projects/portfolio/src/components/navigation/Navbar.astro?astro&type=script&index=0&lang.ts":"_astro/Navbar.astro_astro_type_script_index_0_lang.FL3aWBar.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["/home/lizdev/Escritorio/projects/portfolio/src/components/navigation/Navbar.astro?astro&type=script&index=0&lang.ts","const n=document.getElementById(\"mobile-menu-button\"),e=document.getElementById(\"mobile-menu\"),s=document.getElementById(\"line1\"),a=document.getElementById(\"line2\"),o=document.getElementById(\"line3\"),c=document.querySelectorAll(\".mobile-link\");let t=!1;function l(){t=!t,t?(e.classList.remove(\"scale-95\",\"opacity-0\",\"pointer-events-none\"),e.classList.add(\"scale-100\",\"opacity-100\",\"pointer-events-auto\"),n.setAttribute(\"aria-expanded\",\"true\"),s.style.transform=\"rotate(45deg) translateY(6px)\",s.style.transformOrigin=\"center\",a.style.opacity=\"0\",a.style.transform=\"scaleX(0)\",o.style.transform=\"rotate(-45deg) translateY(-6px)\",o.style.transformOrigin=\"center\"):(e.classList.remove(\"scale-100\",\"opacity-100\",\"pointer-events-auto\"),e.classList.add(\"scale-95\",\"opacity-0\",\"pointer-events-none\"),n.setAttribute(\"aria-expanded\",\"false\"),s.style.transform=\"rotate(0deg) translateY(-6px)\",s.style.transformOrigin=\"center\",a.style.opacity=\"1\",a.style.transform=\"scaleX(1)\",o.style.transform=\"rotate(0deg) translateY(6px)\",o.style.transformOrigin=\"center\")}n?.addEventListener(\"click\",l);c.forEach(r=>{r.addEventListener(\"click\",()=>{t&&l()})});document.addEventListener(\"click\",r=>{const i=r.target;t&&e&&n&&!e.contains(i)&&!n.contains(i)&&l()});"]],"assets":["/_astro/geist-sans-latin-400-normal.gapTbOY8.woff2","/_astro/onest-cyrillic-wght-normal.DXI_y_WF.woff2","/_astro/onest-latin-ext-wght-normal.CnNj8hVb.woff2","/_astro/onest-latin-wght-normal.CUIqqgP9.woff2","/_astro/geist-sans-latin-400-normal.BOaIZNA2.woff","/_astro/index.DaL2MnXb.css","/favicon.ico","/favicon.svg","/yo.jpg","/img/favicon.svg","/img/me.jpeg","/img/perfil.jpg","/img/projects/archlinux.webp","/img/projects/mindflow.webp","/img/works/axolmen.png","/img/works/codeverse.png","/img/works/codeverse.webp","/img/works/codeverse1.webp","/img/works/mindyourenglish.png","/img/works/sultepec.png"],"buildFormat":"directory","checkOrigin":true,"allowedDomains":[],"serverIslandNameMap":[],"key":"tacAvExEit01a0RMKgsCWlwu7rHN/SZPmUPPkuTai0I="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
