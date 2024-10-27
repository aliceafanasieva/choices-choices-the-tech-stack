import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs } from "vue/server-renderer";
import { useRouter } from "vue-router";
import { _ as _export_sfc } from "../server.mjs";
import "ofetch";
import "#internal/nuxt/paths";
import "hookable";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "radix3";
import "defu";
import "ufo";
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
export {
  index as default
};
//# sourceMappingURL=index-CLTZGxCr.js.map
