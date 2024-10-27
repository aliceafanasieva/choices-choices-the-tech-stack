import { mergeProps, useSSRContext } from 'file:///Users/alisa/Documents/GitHub/choices-choices-the-tech-stack/node_modules/vue/index.mjs';
import { ssrRenderAttrs } from 'file:///Users/alisa/Documents/GitHub/choices-choices-the-tech-stack/node_modules/vue/server-renderer/index.mjs';
import { useRouter } from 'file:///Users/alisa/Documents/GitHub/choices-choices-the-tech-stack/node_modules/vue-router/dist/vue-router.node.mjs';
import { _ as _export_sfc } from './server.mjs';
import 'file:///Users/alisa/Documents/GitHub/choices-choices-the-tech-stack/node_modules/ofetch/dist/node.mjs';
import '../_/renderer.mjs';
import 'file:///Users/alisa/Documents/GitHub/choices-choices-the-tech-stack/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file:///Users/alisa/Documents/GitHub/choices-choices-the-tech-stack/node_modules/h3/dist/index.mjs';
import 'file:///Users/alisa/Documents/GitHub/choices-choices-the-tech-stack/node_modules/devalue/index.js';
import 'file:///Users/alisa/Documents/GitHub/choices-choices-the-tech-stack/node_modules/ufo/dist/index.mjs';
import 'file:///Users/alisa/Documents/GitHub/choices-choices-the-tech-stack/node_modules/@unhead/ssr/dist/index.mjs';
import '../runtime.mjs';
import 'file:///Users/alisa/Documents/GitHub/choices-choices-the-tech-stack/node_modules/destr/dist/index.mjs';
import 'file:///Users/alisa/Documents/GitHub/choices-choices-the-tech-stack/node_modules/unenv/runtime/fetch/index.mjs';
import 'file:///Users/alisa/Documents/GitHub/choices-choices-the-tech-stack/node_modules/hookable/dist/index.mjs';
import 'file:///Users/alisa/Documents/GitHub/choices-choices-the-tech-stack/node_modules/klona/dist/index.mjs';
import 'file:///Users/alisa/Documents/GitHub/choices-choices-the-tech-stack/node_modules/scule/dist/index.mjs';
import 'file:///Users/alisa/Documents/GitHub/choices-choices-the-tech-stack/node_modules/defu/dist/defu.mjs';
import 'file:///Users/alisa/Documents/GitHub/choices-choices-the-tech-stack/node_modules/ohash/dist/index.mjs';
import 'file:///Users/alisa/Documents/GitHub/choices-choices-the-tech-stack/node_modules/unstorage/dist/index.mjs';
import 'file:///Users/alisa/Documents/GitHub/choices-choices-the-tech-stack/node_modules/unstorage/drivers/fs.mjs';
import 'file:///Users/alisa/Documents/GitHub/choices-choices-the-tech-stack/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file:///Users/alisa/Documents/GitHub/choices-choices-the-tech-stack/node_modules/unstorage/drivers/lru-cache.mjs';
import 'file:///Users/alisa/Documents/GitHub/choices-choices-the-tech-stack/node_modules/radix3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file:///Users/alisa/Documents/GitHub/choices-choices-the-tech-stack/node_modules/pathe/dist/index.mjs';
import 'file:///Users/alisa/Documents/GitHub/choices-choices-the-tech-stack/node_modules/unhead/dist/index.mjs';
import 'file:///Users/alisa/Documents/GitHub/choices-choices-the-tech-stack/node_modules/@unhead/shared/dist/index.mjs';
import 'file:///Users/alisa/Documents/GitHub/choices-choices-the-tech-stack/node_modules/unctx/dist/index.mjs';

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useRouter();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "intro-main" }, _attrs))} data-v-723b71f5><article class="intro-article" data-v-723b71f5><h1 data-v-723b71f5>Drop <br data-v-723b71f5> &amp; Heal</h1><p data-v-723b71f5> Welkom bij Drop &amp; Heal. Een veilige plek voor jouw reis door rouwverwerking.<br data-v-723b71f5><br data-v-723b71f5> Er volgt eerst een introductie en kennismaking, hierna kan je op eigen tempo aan de slag in de omgeving. </p></article><button class="start-button" data-v-723b71f5> Starten </button></main>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-723b71f5"]]);

export { index as default };
//# sourceMappingURL=index-CLTZGxCr.mjs.map
