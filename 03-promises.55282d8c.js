var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var i={id:e,exports:{}};return t[e]=i,o.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){n[e]=t},e.parcelRequired7c6=o);var i=o("iQIUW");const r={form:document.querySelector(".form"),inputDelay:document.querySelector("[name=delay]"),inputStep:document.querySelector("[name=step]"),inputAmount:document.querySelector("[name=amount]")};function u(e,t){const n=Math.random()>.3;return new Promise(((o,i)=>{setTimeout((()=>{n?o({position:e,delay:t}):i({position:e,delay:t})}),t)}))}r.form.addEventListener("submit",(function(e){e.preventDefault(),setTimeout((()=>{for(let e=0;e<r.inputAmount.value;e+=1){u(e+1,+r.inputDelay.value+ +r.inputStep.value*e).then((({position:e,delay:t})=>{i.Notify.success(`✅ Fulfilled promise ${e} in ${t}ms`)})).catch((({position:e,delay:t})=>{i.Notify.failure(`❌ Rejected promise ${e} in ${t}ms`)}))}}),r.inputStep.value)}));
//# sourceMappingURL=03-promises.55282d8c.js.map
