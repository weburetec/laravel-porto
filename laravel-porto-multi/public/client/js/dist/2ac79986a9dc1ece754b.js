(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{169:function(t,e,s){"use strict";var i=s(170);const r=function(t){t.directive("Sticky",i.a)};window.Vue&&Vue.use(r),i.a.install=r,e.a=i.a},170:function(module,__webpack_exports__,__webpack_require__){"use strict";const namespace="@@vue-sticky-directive",events=["resize","scroll","touchstart","touchmove","touchend","pageshow","load"],batchStyle=(t,e={},s={})=>{for(let s in e)t.style[s]=e[s];for(let e in s)s[e]&&!t.classList.contains(e)?t.classList.add(e):!s[e]&&t.classList.contains(e)&&t.classList.remove(e)};class Sticky{constructor(t,e){this.el=t,this.vm=e,this.unsubscribers=[],this.isPending=!1,this.state={isTopSticky:null,isBottomSticky:null,height:null,width:null,xOffset:null},this.lastState={top:null,bottom:null,sticked:!1};const s=this.getAttribute("sticky-offset")||{},i=this.getAttribute("sticky-side")||"top",r=this.getAttribute("sticky-z-index")||"10",o=this.getAttribute("on-stick")||null;this.options={topOffset:Number(s.top)||0,bottomOffset:Number(s.bottom)||0,shouldTopSticky:"top"===i||"both"===i,shouldBottomSticky:"bottom"===i||"both"===i,zIndex:r,onStick:o}}doBind(){if(this.unsubscribers.length>0)return;const{el:t,vm:e}=this;e.$nextTick(()=>{this.placeholderEl=document.createElement("div"),this.containerEl=this.getContainerEl(),t.parentNode.insertBefore(this.placeholderEl,t),events.forEach(t=>{const e=this.update.bind(this);this.unsubscribers.push(()=>window.removeEventListener(t,e)),this.unsubscribers.push(()=>this.containerEl.removeEventListener(t,e)),window.addEventListener(t,e,{passive:!0}),this.containerEl.addEventListener(t,e,{passive:!0})})})}doUnbind(){this.unsubscribers.forEach(t=>t()),this.unsubscribers=[],this.resetElement()}update(){this.isPending||(requestAnimationFrame(()=>{this.isPending=!1,this.recomputeState(),this.updateElements()}),this.isPending=!0)}isTopSticky(){if(!this.options.shouldTopSticky)return!1;const t=this.state.placeholderElRect.top,e=this.state.containerElRect.bottom,s=this.options.topOffset,i=this.options.bottomOffset;return t<=s&&e>=i}isBottomSticky(){if(!this.options.shouldBottomSticky)return!1;const t=window.innerHeight-this.state.placeholderElRect.top-this.state.height,e=window.innerHeight-this.state.containerElRect.top,s=this.options.topOffset;return t<=this.options.bottomOffset&&e>=s}recomputeState(){this.state=Object.assign({},this.state,{height:this.getHeight(),width:this.getWidth(),xOffset:this.getXOffset(),placeholderElRect:this.getPlaceholderElRect(),containerElRect:this.getContainerElRect()}),this.state.isTopSticky=this.isTopSticky(),this.state.isBottomSticky=this.isBottomSticky()}fireEvents(){"function"!=typeof this.options.onStick||this.lastState.top===this.state.isTopSticky&&this.lastState.bottom===this.state.isBottomSticky&&this.lastState.sticked===(this.state.isTopSticky||this.state.isBottomSticky)||(this.lastState={top:this.state.isTopSticky,bottom:this.state.isBottomSticky,sticked:this.state.isBottomSticky||this.state.isTopSticky},this.options.onStick(this.lastState))}updateElements(){const t={paddingTop:0},e={position:"static",top:"auto",bottom:"auto",left:"auto",width:"auto",zIndex:this.options.zIndex},s={"vue-sticky-el":!0,"top-sticky":!1,"bottom-sticky":!1};if(this.state.isTopSticky){e.position="fixed",e.top=this.options.topOffset+"px",e.left=this.state.xOffset+"px",e.width=this.state.width+"px";const i=this.state.containerElRect.bottom-this.state.height-this.options.bottomOffset-this.options.topOffset;i<0&&(e.top=i+this.options.topOffset+"px"),t.paddingTop=this.state.height+"px",s["top-sticky"]=!0}else if(this.state.isBottomSticky){e.position="fixed",e.bottom=this.options.bottomOffset+"px",e.left=this.state.xOffset+"px",e.width=this.state.width+"px";const i=window.innerHeight-this.state.containerElRect.top-this.state.height-this.options.bottomOffset-this.options.topOffset;i<0&&(e.bottom=i+this.options.bottomOffset+"px"),t.paddingTop=this.state.height+"px",s["bottom-sticky"]=!0}else t.paddingTop=0;batchStyle(this.el,e,s),batchStyle(this.placeholderEl,t,{"vue-sticky-placeholder":!0}),this.fireEvents()}resetElement(){["position","top","bottom","left","width","zIndex"].forEach(t=>{this.el.style.removeProperty(t)}),this.el.classList.remove("bottom-sticky","top-sticky");const{parentNode:t}=this.placeholderEl;t&&t.removeChild(this.placeholderEl)}getContainerEl(){let t=this.el.parentNode;for(;t&&"HTML"!==t.tagName&&"BODY"!==t.tagName&&1===t.nodeType;){if(t.hasAttribute("sticky-container"))return t;t=t.parentNode}return this.el.parentNode}getXOffset(){return this.placeholderEl.getBoundingClientRect().left}getWidth(){return this.placeholderEl.getBoundingClientRect().width}getHeight(){return this.el.getBoundingClientRect().height}getPlaceholderElRect(){return this.placeholderEl.getBoundingClientRect()}getContainerElRect(){return this.containerEl.getBoundingClientRect()}getAttribute(name){const expr=this.el.getAttribute(name);let result=void 0;if(expr)if(this.vm[expr])result=this.vm[expr];else try{result=eval(`(${expr})`)}catch(t){result=expr}return result}}__webpack_exports__.a={inserted(t,e,s){(void 0===e.value||e.value)&&(t[namespace]=new Sticky(t,s.context),t[namespace].doBind())},unbind(t,e,s){t[namespace]&&(t[namespace].doUnbind(),t[namespace]=void 0)},componentUpdated(t,e,s){void 0===e.value||e.value?(t[namespace]||(t[namespace]=new Sticky(t,s.context)),t[namespace].doBind()):t[namespace]&&t[namespace].doUnbind()}}},54:function(t,e,s){"use strict";s.r(e);var i=s(169),r=s(30),o=s(20),a={components:{ProductTwoComponent:r.default},directives:{Sticky:i.a},props:{featuredProducts:Array,user:Object,loaded:{type:Boolean,default:function(){return!1}}},data:function(){return{shouldSticky:window.innerWidth>=992}},created:function(){window.addEventListener("resize",this.resizeHandler,{passive:!0})},beforeDestroy:function(){window.removeEventListener("resize",this.resizeHandler)},methods:{resizeHandler:function(){this.shouldSticky=window.innerWidth>=992},toggleSidebar:function(){document.querySelector("body").classList.toggle("sidebar-opened")},getLocation:function(t,e){var s=o.a.find((function(e){return e.id==t})),i={text:"Unknown"};return s?(i=o.c[t].find((function(t){return t.id==e})))||(i={text:"Unknown"}):s={text:"Unknown"},i.text+", "+s.text},setRating:function(t){return 20*t+"%"}}},n=s(1),c=Object(n.a)(a,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"sidebar-overlay",on:{click:t.toggleSidebar}}),t._v(" "),s("a",{staticClass:"sidebar-toggle",on:{click:function(e){return e.preventDefault(),t.toggleSidebar.apply(null,arguments)}}},[s("i",{staticClass:"fas fa-sliders-h"})]),t._v(" "),s("aside",{staticClass:"mobile-sidebar h-100",attrs:{"sticky-container":""}},[s("div",{directives:[{name:"sticky",rawName:"v-sticky",value:t.shouldSticky,expression:"shouldSticky"}],staticClass:"sidebar-wrapper",attrs:{"sticky-offset":"{ top: 69 }"}},[t._m(0),t._v(" "),t.loaded?[t.user.vendor?s("div",{key:"vendor",staticClass:"widget widget-info"},[s("h3",{staticClass:"widget-title"},[t._v("Sold By")]),t._v(" "),s("div",{staticClass:"widget-body"},[s("div",{staticClass:"store",class:{"no-banner":!t.user.vendor.banner}},[s("div",{staticClass:"store-info"},[s("figure",[t.user.vendor.banner?s("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.$root.getUrl(t.user.vendor.banner.copy_link,!0),expression:"\n\t\t\t\t\t\t\t\t\t\t\t\t$root.getUrl(\n\t\t\t\t\t\t\t\t\t\t\t\t\tuser.vendor.banner.copy_link,\n\t\t\t\t\t\t\t\t\t\t\t\t\ttrue\n\t\t\t\t\t\t\t\t\t\t\t\t)\n\t\t\t\t\t\t\t\t\t\t\t"}],attrs:{ratio:220/380,alt:"Store",width:t.user.vendor.banner.width,height:t.user.vendor.banner.height}}):s("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.$root.getUrl("client/images/vendors/banner-3.png"),expression:"\n\t\t\t\t\t\t\t\t\t\t\t\t$root.getUrl(\n\t\t\t\t\t\t\t\t\t\t\t\t\t'client/images/vendors/banner-3.png'\n\t\t\t\t\t\t\t\t\t\t\t\t)\n\t\t\t\t\t\t\t\t\t\t\t"}],attrs:{alt:"Store",width:"453",height:"220"}})]),t._v(" "),s("div",{staticClass:"store-content"},[s("h3",{staticClass:"store-title"},[t._v(t._s(t.user.vendor.store_name))]),t._v(" "),s("div",{staticClass:"ratings-container"},[s("div",{staticClass:"store-ratings",attrs:{title:"Rated "+t.user.rating+"out of 5"}},[s("span",{staticClass:"ratings",style:{width:t.setRating(t.user.rating)}})])]),t._v(" "),s("p",{staticClass:"store-address",class:{"text-white":t.user.vendor.banner}},[t._v(t._s(t.getLocation(t.user.vendor.country,t.user.vendor.state)))])])]),t._v(" "),s("div",{staticClass:"store-footer"},[s("div",{staticClass:"seller-avatar"},[t.user.vendor.profile?s("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.$root.getUrl(t.user.vendor.profile.copy_link,!0,100),expression:"\n\t\t\t\t\t\t\t\t\t\t\t\t$root.getUrl(\n\t\t\t\t\t\t\t\t\t\t\t\t\tuser.vendor.profile.copy_link,\n\t\t\t\t\t\t\t\t\t\t\t\t\ttrue,\n\t\t\t\t\t\t\t\t\t\t\t\t\t100\n\t\t\t\t\t\t\t\t\t\t\t\t)\n\t\t\t\t\t\t\t\t\t\t\t"}],attrs:{alt:"vendor",width:"100",height:"100"}}):s("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.$root.getUrl("server/images/placeholder-img-100x100.png"),expression:"\n\t\t\t\t\t\t\t\t\t\t\t\t$root.getUrl(\n\t\t\t\t\t\t\t\t\t\t\t\t\t'server/images/placeholder-img-100x100.png'\n\t\t\t\t\t\t\t\t\t\t\t\t)\n\t\t\t\t\t\t\t\t\t\t\t"}],attrs:{alt:"vendor",width:"100",height:"100"}})]),t._v(" "),s("router-link",{staticClass:"btn btn-primary btn-round",attrs:{to:"/vendors/"+t.user.id}})],1)])])]):s("div",{key:"admin",staticClass:"widget"},[s("div",{staticClass:"maga-sale-container"},[s("figure",{staticClass:"mega-image"},[s("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.$root.getUrl("client/images/banners/banner_sidebar_right.jpg"),expression:"\n\t\t\t\t\t\t\t\t\t\t$root.getUrl(\n\t\t\t\t\t\t\t\t\t\t\t'client/images/banners/banner_sidebar_right.jpg'\n\t\t\t\t\t\t\t\t\t\t)\n\t\t\t\t\t\t\t\t\t"}],staticClass:"w-100",attrs:{width:"768",height:"462",ratio:220/340,alt:"Banner Desc"}})]),t._v(" "),t._m(1)])])]:t._e(),t._v(" "),s("div",{staticClass:"widget widget-featured mb-5"},[s("h3",{staticClass:"widget-title"},[t._v("Featured Product")]),t._v(" "),s("div",{staticClass:"widget-body"},t._l(t.featuredProducts.slice(0,3),(function(t){return s("product-two-component",{key:t.id,attrs:{product:t}})})),1)])],2)])])}),[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"widget widget-info"},[s("ul",[s("li",[s("i",{staticClass:"icon-shipping"}),t._v(" "),s("h4",[t._v("\n                                FREE\n                                "),s("br"),t._v("SHIPPING\n                            ")])]),t._v(" "),s("li",[s("i",{staticClass:"icon-us-dollar"}),t._v(" "),s("h4",[t._v("\n                                100% MONEY\n                                "),s("br"),t._v("BACK GUARANTEE\n                            ")])]),t._v(" "),s("li",[s("i",{staticClass:"icon-online-support"}),t._v(" "),s("h4",[t._v("\n                                ONLINE\n                                "),s("br"),t._v("SUPPORT 24/7\n                            ")])])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"mega-content"},[s("div",{staticClass:"mega-price-box"},[s("span",{staticClass:"price-big"},[t._v("50")]),t._v(" "),s("span",{staticClass:"price-desc"},[s("em",[t._v("%")]),t._v("OFF\n                                    ")])]),t._v(" "),s("div",{staticClass:"mega-desc"},[s("h3",{staticClass:"mega-title mb-0"},[t._v("MEGA SALE")]),t._v(" "),s("span",{staticClass:"mega-subtitle"},[t._v("MANY ITEM")])])])}],!1,null,null,null);e.default=c.exports},94:function(t,e,s){"use strict";s.r(e);var i=s(0),r=s.n(i),o=s(3),a=s(174),n=s.n(a),c=(s(175),s(40)),l=s(34),d=s(36),u=s(30),p=s(43),v=s(44),h=s(45),m=s(54),g=(s(2),s(8));function f(t,e,s,i,r,o,a){try{var n=t[o](a),c=n.value}catch(t){return void s(t)}n.done?e(c):Promise.resolve(c).then(i,r)}function _(t){return function(t){if(Array.isArray(t))return b(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return b(t,e);var s=Object.prototype.toString.call(t).slice(8,-1);"Object"===s&&t.constructor&&(s=t.constructor.name);if("Map"===s||"Set"===s)return Array.from(t);if("Arguments"===s||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s))return b(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function b(t,e){(null==e||e>t.length)&&(e=t.length);for(var s=0,i=new Array(e);s<e;s++)i[s]=t[s];return i}function y(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,i)}return s}function w(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?y(Object(s),!0).forEach((function(e){C(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):y(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}function C(t,e,s){return e in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}var k,P,x={components:{LightBox:n.a,HorizontalQuantityInputComponent:c.default,OwlCarouselComponent:l.default,ProductOneComponent:d.default,ProductTwoComponent:u.default,ProductBreadcrumbComponent:p.default,ProductSidebarTwoComponent:m.default,ProductReviewsComponent:v.default,ProductNavComponent:h.default},data:function(){return{loaded:!1,product:{media:[],reviews:[],categories:[],tags:[],average_rating:0},prevProduct:null,nextProduct:null,variations:[],selectedProduct:{},showPrice:!1,attrFilters:[],qty:1,relatedProducts:[],upsells:[],approvedReviewsCount:0,featuredProducts:[],bestSellings:[],newArrivals:[],topRates:[],vendor:{}}},computed:w(w(w(w({},Object(o.c)("wishlist",["isInWishlist"])),Object(o.c)("setting",["getProductSettings","formatPrice","priceSuffix","formatStock","showNewBadge"])),Object(o.c)("user",["isCustomer","getUser","userName"])),{},{lightBoxMedia:function(){var t=this;return this.product.media.reduce((function(e,s){return[].concat(_(e),[{thumb:window.baseUrl+"/storage/"+s.copy_link,src:window.baseUrl+"/storage/"+s.copy_link,caption:t.product.name}])}),[])}}),watch:{$route:function(){this.getProduct()}},created:function(){this.getProduct()},methods:w(w(w({},Object(o.b)("cart",["addToCart"])),Object(o.d)("wishlist",{addToWishlist:g.a})),{},{addCart:function(){0==this.selectedProduct.media.length&&(this.selectedProduct.media=_(this.product.media)),"variable"==this.product.type&&(this.selectedProduct.sold_individually=this.product.sold_individually),this.addToCart({product:this.selectedProduct,qty:this.qty})},getSaleRate:function(t,e){return(100*(1-t/e)).toFixed()},changeQty:function(t,e){this.qty=e},isColor:function(t){return t.includes("#")},openGallery:function(){var t,e=document.querySelector("#carousel-custom-dots .owl-dot.active"),s=e.parentElement.parentElement.children;for(t=0;t<s.length&&e.parentElement!==s[t];t++);this.$refs.lightbox.showImage(t)},getProduct:(k=r.a.mark((function t(){var e,s,i=this;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=JSON.parse(window.localStorage.getItem("product")),this.isCustomer?s=this.getUser.email:e&&(s=e.email),document.querySelector(".skeleton-body")&&document.querySelector(".skeleton-body").classList.remove("loaded"),this.loaded=!1,t.next=6,window.axios.get("/web/products/"+this.$route.params.slug,{params:{author_email:s}}).then((function(t){i.product=w({},t.data.product),i.relatedProducts=_(t.data.relatedProducts),i.upsells=_(t.data.upsells),i.featuredProducts=t.data.featuredProducts,i.bestSellings=t.data.bestSellings,i.newArrivals=t.data.newArrivals,i.topRates=t.data.topRates,i.vendor=t.data.vendor;var e=-1;if(i.relatedProducts.map((function(t,s){t.id<i.product.id&&(e=s)})),i.prevProduct=e>=0?i.relatedProducts[e]:null,e<i.relatedProducts.length-1?i.nextProduct=i.relatedProducts[e+1]:i.nextProduct=null,i.product.attributes=i.product.attributes.reduce((function(e,s){for(var i=0;i<t.data.attributes.length;i++){var r=s.pivot.term_ids.split(",");if(s.id==t.data.attributes[i].id){var o=t.data.attributes[i].terms.reduce((function(t,e){return r.includes(e.id.toString())?[].concat(_(t),[{id:e.id,text:e.name,slug:e.slug}]):t}),[]);return[].concat(_(e),[w(w({},s),{},{pivot:w(w({},s.pivot),{},{term_ids:r}),termOptions:o})])}}return e}),[]),"variable"==t.data.product.type){i.variations=_(t.data.variations);var s=[];i.product.attributes.map((function(t){if(t.pivot.used_for_variation&&t.pivot.term_ids.length>0){for(var e=[],r=null,o=null,a=0;a<t.pivot.term_ids.length;a++){var n=t.termOptions.find((function(e){return e.id==t.pivot.term_ids[a]}));n&&(i.$route.query.termId&&i.$route.query.termId.find((function(t){return t==n.id}))?(e.push(w(w({},n),{},{active:!0,enabled:!0})),o=i.isColor(n.text)?n.slug:n.text,r=n.id):e.push(w(w({},n),{},{active:!1,enabled:!1})))}s.push({name:t.name,id:t.id,activeTermId:r,activeTermName:o,options:e})}})),i.attrFilters=[].concat(s),i.resetAttrFilter()}else"simple"==t.data.product.type&&(i.selectedProduct=w({},i.product),i.showPrice=!0);i.approvedReviewsCount=i.product.approved_reviews_count,document.querySelector(".skeleton-body")&&document.querySelector(".skeleton-body").classList.add("loaded")})).catch((function(t){i.$router.push("/pages/404")}));case 6:this.loaded=!0;case 7:case"end":return t.stop()}}),t,this)})),P=function(){var t=this,e=arguments;return new Promise((function(s,i){var r=k.apply(t,e);function o(t){f(r,s,i,o,a,"next",t)}function a(t){f(r,s,i,o,a,"throw",t)}o(void 0)}))},function(){return P.apply(this,arguments)}),clearFilter:function(){this.attrFilters=this.attrFilters.reduce((function(t,e){var s=e.options.reduce((function(t,e){return[].concat(_(t),[w(w({},e),{},{enabled:!1,active:!1})])}),[]);return[].concat(_(t),[w(w({},e),{},{activeTermName:null,activeTermId:null,options:s})])}),[]),this.resetAttrFilter()},changeAttrFilter:function(t,e){var s=this,i=null,r=null;this.attrFilters[t].options=this.attrFilters[t].options.reduce((function(t,o,a){return e==a?(o.active||(i=o.id,r=s.isColor(o.text)?o.slug:o.text),[].concat(_(t),[w(w({},o),{},{active:!o.active})])):[].concat(_(t),[w(w({},o),{},{active:!1})])}),[]),this.attrFilters[t].activeTermId=i,this.attrFilters[t].activeTermName=r,this.resetAttrFilter()},resetAttrFilter:function(){var t=this,e=!0,s=!1,i=this.attrFilters.reduce((function(t,s){var i=s.options.reduce((function(t,e){return[].concat(_(t),[w(w({},e),{},{enabled:!1})])}),[]);return s.activeTermId||(e=!1),[].concat(_(t),[w(w({},s),{},{options:_(i)})])}),[]);if(this.variations.map((function(e,r){var o=JSON.parse(e.excerpt),a=!0;o.map((function(e){if(e.termId){var s=t.attrFilters.find((function(t){return t.id==e.attrId}));s&&s.activeTermId&&s.activeTermId!==e.termId&&(a=!1)}})),a&&(s||(t.selectedProduct=e,s=!0),i=i.reduce((function(t,e){var s=o.find((function(t){return t.attrId==e.id}));if(s.termId)var i=e.options.reduce((function(t,e){return s.termId==e.id?[].concat(_(t),[w(w({},e),{},{enabled:!0})]):[].concat(_(t),[e])}),[]);else i=e.options.reduce((function(t,e){return[].concat(_(t),[w(w({},e),{},{enabled:!0})])}),[]);return[].concat(_(t),[w(w({},e),{},{options:_(i)})])}),[]))})),this.attrFilters=_(i),e){this.showPrice=!0,this.selectedProduct.excerpts=i.reduce((function(t,e){return[].concat(_(t),[{attrId:e.id,termId:e.activeTermId}])}),[]);var r=i.reduce((function(t,e){return t+e.activeTermName.replace(e.activeTermName[0],e.activeTermName[0].toUpperCase())+", "}),this.product.name+" - ");this.selectedProduct.name=r.slice(0,-2)}else this.showPrice=!1},termNames:function(t){var e=this,s="";return t.termOptions.map((function(t,i){s+=0==i?e.isColor(t.text)?t.slug:t.text:",  "+(e.isColor(t.text)?t.slug:t.text)})),s},toReviewTab:function(){var t=document.querySelector("#product-tab-reviews");t.click(),t.scrollIntoView({behavior:"smooth"})},incApprovedReviewsCount:function(){this.approvedReviewsCount++}})},S=s(1),E=Object(S.a)(x,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("main",{staticClass:"main"},[s("div",{staticClass:"container skeleton-body skel-shop-products sidebar-product"},[s("product-breadcrumb-component",{attrs:{categories:t.product.categories,name:t.product.name}}),t._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col-lg-9 main-content"},[s("div",{staticClass:"product-single-container product-single-default"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-6 product-single-gallery"},[s("div",{staticClass:"skel-pro skel-magnifier skel-padding-128"}),t._v(" "),s("div",{staticClass:"product-slider-container skel-hide"},[s("div",{staticClass:"label-group"},[t.product.featured?s("div",{staticClass:"product-label label-hot"},[t._v("HOT")]):t._e(),t._v(" "),t.showNewBadge(t.product)?s("div",{staticClass:"product-label label-new"},[t._v("NEW")]):t._e(),t._v(" "),"simple"==t.product.type&&t.product.min_max_price[0]!=t.product.min_max_price[1]?s("div",{staticClass:"product-label label-sale"},[t._v("\n                                            -"+t._s(t.getSaleRate(t.product.min_max_price[0],t.product.min_max_price[1]))+"%\n                                        ")]):t._e()]),t._v(" "),t.loaded?s("owl-carousel-component",{staticClass:"product-single-carousel show-nav-hover",attrs:{options:{dots:!1,nav:!0,loop:!1,margin:0,autoplay:!1}}},[t._l(t.product.media,(function(e){return s("div",{key:e.id,staticClass:"product-item"},[s("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.$root.getUrl(e.copy_link,!0,600),expression:"\n\t\t\t\t\t\t\t\t\t\t\t\t\t$root.getUrl(\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tmedium.copy_link,\n\t\t\t\t\t\t\t\t\t\t\t\t\t\ttrue,\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t600\n\t\t\t\t\t\t\t\t\t\t\t\t\t)\n\t\t\t\t\t\t\t\t\t\t\t\t"}],staticClass:"product-single-image",attrs:{width:"600",height:"600",alt:e.alt_text?e.alt_text:"product"}})])})),t._v(" "),0==t.product.media.length?s("div",{staticClass:"product-item"},[s("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.$root.getUrl("server/images/placeholder-img-300x300.png"),expression:"\n\t\t\t\t\t\t\t\t\t\t\t\t\t$root.getUrl(\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t'server/images/placeholder-img-300x300.png'\n\t\t\t\t\t\t\t\t\t\t\t\t\t)\n\t\t\t\t\t\t\t\t\t\t\t\t"}],attrs:{width:"300",height:"300",alt:"product"}})]):t._e()],2):t._e(),t._v(" "),t.product.media.length>0?s("span",{staticClass:"prod-full-screen",on:{click:t.openGallery}},[s("i",{staticClass:"icon-plus"})]):t._e()],1),t._v(" "),s("div",{staticClass:"prod-thumbnail owl-dots skel-hide",attrs:{id:"carousel-custom-dots"}},[t.loaded?s("owl-carousel-component",{attrs:{options:{dots:!1,loop:!1,margin:5,autoplay:!1,items:4}}},[t._l(t.product.media,(function(e,i){return s("div",{key:e.id,staticClass:"owl-dot",class:{active:0==i}},[s("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.$root.getUrl(e.copy_link,!0,100),expression:"\n                                                    $root.getUrl(\n                                                        medium.copy_link,\n                                                        true,\n                                                        100\n                                                    )\n                                                "}],staticClass:"product-single-image",attrs:{alt:"product",width:"100",height:"100"}})])})),t._v(" "),0==t.product.media.length?s("div",{staticClass:"owl-dot"},[s("img",{staticClass:"product-single-image",attrs:{src:t.$root.getUrl("server/images/placeholder-img-300x300.png"),alt:"product",width:"100",height:"100"}})]):t._e()],2):t._e()],1)]),t._v(" "),s("div",{staticClass:"col-md-6"},[s("div",{staticClass:"skel-pro skel-detail"}),t._v(" "),s("div",{staticClass:"product-single-details skel-hide"},[s("h1",{staticClass:"product-title"},[t._v(t._s(t.product.name))]),t._v(" "),s("product-nav-component",{attrs:{"prev-product":t.prevProduct,"next-product":t.nextProduct}}),t._v(" "),t.getProductSettings.enableReview&&t.getProductSettings.enableStarRating?s("div",{staticClass:"ratings-container product-default"},[s("div",{staticClass:"product-ratings"},[s("span",{staticClass:"ratings",style:"width:"+20*t.product.average_rating+"%"}),t._v(" "),s("span",{staticClass:"tooltiptext tooltip-top"},[t._v(t._s(t.product.average_rating.toFixed(2)))])]),t._v(" "),s("a",{staticClass:"rating-link",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.toReviewTab.apply(null,arguments)}}},[t._v("\n                                            "+t._s(t.approvedReviewsCount)+" customer\n                                            review\n                                        ")]),t._v(" "),s("span",{staticClass:"rating-link-separator"},[t._v("|")]),t._v(" "),s("a",{staticClass:"rating-link",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.toReviewTab.apply(null,arguments)}}},[t._v("Add a review")])]):t._e(),t._v(" "),s("hr",{staticClass:"short-divider"}),t._v(" "),"simple"==t.product.type?s("div",{staticClass:"price-box"},[t.product.min_max_price[0]!=t.product.min_max_price[1]?s("del",{staticClass:"old-price"},[s("span",{domProps:{innerHTML:t._s(t.formatPrice(t.product.min_max_price[1])+t.priceSuffix)}})]):t._e(),t._v(" "),s("span",{staticClass:"product-price",domProps:{innerHTML:t._s(t.formatPrice(t.product.min_max_price[0])+t.priceSuffix)}})]):t._e(),t._v(" "),"variable"==t.product.type?s("div",{staticClass:"price-box"},[s("span",{staticClass:"product-price",domProps:{innerHTML:t._s(t.formatPrice(t.product.min_max_price[0])+t.priceSuffix)}}),t._v(" "),t.product.min_max_price[0]!==t.product.min_max_price[1]?s("span",{staticClass:"product-price"},[t._v("\n                                            –\n                                            "),s("span",{domProps:{innerHTML:t._s(t.formatPrice(t.product.min_max_price[1])+t.priceSuffix)}})]):t._e()]):t._e(),t._v(" "),s("div",{staticClass:"product-desc"},[s("p",[s("span",{domProps:{innerHTML:t._s(t.product.short_desc)}})])]),t._v(" "),s("ul",{staticClass:"single-info-list"},["simple"!=t.product.type||"out-of-stock"!=t.product.stock_status&&!t.product.manage_stock?t._e():s("li",{domProps:{innerHTML:t._s(t.formatStock(t.product))}}),t._v(" "),t.product.sku?s("li",[t._v("\n                                            SKU:\n                                            "),s("strong",[t._v(t._s(t.product.sku))])]):t._e(),t._v(" "),t.product.categories.length>0?s("li",[t._v("\n                                            CATEGORIES:\n                                            "),t._l(t.product.categories,(function(e,i){return s("strong",{key:e.id},[s("router-link",{staticClass:"product-category",attrs:{to:{path:"/shop/default",query:{category:e.slug}}}},[t._v(t._s(e.name))]),t._v("\n                                                "+t._s(i<t.product.categories.length-1?",":"")+"\n                                            ")],1)}))],2):t._e(),t._v(" "),t.product.tags.length>0?s("li",[t._v("\n                                            TAGs:\n                                            "),t._l(t.product.tags,(function(e,i){return s("strong",{key:e.id},[s("router-link",{staticClass:"product-category",attrs:{to:{path:"/shop/default",query:{tag:e.slug}}}},[t._v(t._s(e.name))]),t._v("\n                                                "+t._s(i<t.product.tags.length-1?",":"")+"\n                                            ")],1)}))],2):t._e()]),t._v(" "),"variable"==t.product.type?s("div",{staticClass:"product-filters-container"},[t._l(t.attrFilters,(function(e,i){return s("div",{key:e.id,staticClass:"product-single-filter"},[s("label",[t._v(t._s(e.name)+":")]),t._v(" "),s("ul",{staticClass:"config-size-list"},t._l(e.options,(function(e,r){return s("li",{key:e.id,class:{active:e.active}},[t.isColor(e.text)?[e.enabled?s("a",{key:"is-color-1",staticClass:"filter-color border-0",style:"background-color: "+e.text,attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.changeAttrFilter(i,r)}}}):s("a",{key:"is-color-2",staticClass:"filter-color border-0 disabled",style:"background-color: "+e.text,attrs:{href:"javascript:;"}})]:[e.enabled?s("a",{key:"not-color-1",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.changeAttrFilter(i,r)}}},[t._v(t._s(e.text))]):s("a",{key:"not-color-2",staticClass:"disabled",attrs:{href:"javascript:;"}},[t._v(t._s(e.text))])]],2)})),0)])})),t._v(" "),t.showPrice?s("div",{staticClass:"product-single-filter"},[s("label"),t._v(" "),s("a",{staticClass:"font1 text-uppercase clear-btn",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.clearFilter.apply(null,arguments)}}},[t._v("Clear")])]):t._e()],2):t._e(),t._v(" "),"variable"==t.product.type&&t.showPrice?s("div",{staticClass:"price-box"},[t.selectedProduct.min_max_price[0]!=t.selectedProduct.min_max_price[1]?s("del",{staticClass:"old-price"},[s("span",{domProps:{innerHTML:t._s(t.formatPrice(t.selectedProduct.min_max_price[1])+t.priceSuffix)}})]):t._e(),t._v(" "),s("span",{staticClass:"product-price",domProps:{innerHTML:t._s(t.formatPrice(t.selectedProduct.min_max_price[0])+t.priceSuffix)}})]):t._e(),t._v(" "),"variable"==t.product.type&&t.showPrice&&("out-of-stock"==t.selectedProduct.stock_status||t.selectedProduct.manage_stock)?s("div",{staticClass:"variation-availability",domProps:{innerHTML:t._s(t.formatStock(t.selectedProduct))}}):t._e(),t._v(" "),"on-backorder"==t.product.stock_status||"in-stock"==t.product.stock_status||t.product.stock_quantity>0?s("div",{staticClass:"product-action"},[s("horizontal-quantity-input-component",{attrs:{product:t.product},on:{"change-qty":t.changeQty}}),t._v(" "),s("a",{staticClass:"btn btn-dark add-cart",class:{disabled:!t.showPrice},attrs:{href:"#",title:"Add to Cart"},on:{click:function(e){return e.preventDefault(),t.addCart.apply(null,arguments)}}},[t._v("Add to Cart")])],1):t._e(),t._v(" "),s("hr",{staticClass:"divider mb-1"}),t._v(" "),s("div",{staticClass:"product-single-share"},[s("label",{staticClass:"sr-only"},[t._v("Share:")]),t._v(" "),t._m(0),t._v(" "),t.isInWishlist(t.product)?s("router-link",{staticClass:"add-wishlist browse-wishlist",attrs:{to:"/pages/wishlist",title:"Browse Wishlist"}},[t._v("Browse Wishlist")]):s("a",{key:"out-wishlist",staticClass:"add-wishlist",attrs:{href:"#",title:"Add to Wishlist"},on:{click:function(e){return e.preventDefault(),t.addToWishlist({product:t.product})}}},[t._v("Add to Wishlist")])],1)],1)])])]),t._v(" "),s("div",{staticClass:"skel-pro skel-tab skel-padding-20"}),t._v(" "),s("div",{staticClass:"product-single-tabs"},[s("ul",{staticClass:"nav nav-tabs",attrs:{role:"tablist"}},[t._m(1),t._v(" "),t._m(2),t._v(" "),s("li",{staticClass:"nav-item"},[t.getProductSettings.enableReview?s("a",{staticClass:"nav-link",attrs:{id:"product-tab-reviews","data-toggle":"tab",href:"#product-reviews-content",role:"tab","aria-controls":"product-reviews-content","aria-selected":"false"}},[t._v("Reviews ("+t._s(t.approvedReviewsCount)+")")]):t._e()])]),t._v(" "),s("div",{staticClass:"tab-content"},[s("div",{staticClass:"tab-pane fade show active",attrs:{id:"product-desc-content",role:"tabpanel","aria-labelledby":"product-tab-desc"}},[s("div",{staticClass:"product-desc-content",domProps:{innerHTML:t._s(t.product.description)}}),t._v(" "),t.product.description?t._e():s("div",{staticClass:"product-desc-content"},[t._v("No description for the product")])]),t._v(" "),s("div",{staticClass:"tab-pane fade fade",attrs:{id:"product-more-info-content",role:"tabpanel","aria-labelledby":"product-tab-more-info"}},[s("div",{staticClass:"product-desc-content"},[t.product.weight||t.selectedProduct.weight?s("p",{staticClass:"mb-0"},[t._v("\n                                        Weight:   "+t._s(t.selectedProduct.weight?t.selectedProduct.weight:t.product.weight)+t._s(t.getProductSettings.weightUnit)+"\n                                    ")]):t._e(),t._v(" "),t.product.length&&t.product.width&&t.product.height||t.selectedProduct.length&&t.selectedProduct.width&&t.selectedProduct.height?s("p",{staticClass:"mb-0"},[t._v("\n                                        Dimensions:   \n                                        "+t._s(t.selectedProduct.length?t.selectedProduct.length:t.product.length)+"\n                                        "+t._s(t.getProductSettings.dimentionsUnit)+" x\n                                        "+t._s(t.selectedProduct.width?t.selectedProduct.width:t.product.width)+"\n                                        "+t._s(t.getProductSettings.dimentionsUnit)+" x\n                                        "+t._s(t.selectedProduct.height?t.selectedProduct.height:t.product.height)+"\n                                        "+t._s(t.getProductSettings.dimentionsUnit)+"\n                                    ")]):t._e(),t._v(" "),t._l(t.product.attributes,(function(e){return s("p",{key:e.id,staticClass:"mb-0"},[t._v(t._s(e.name)+":   "+t._s(t.termNames(e)))])}))],2)]),t._v(" "),t.getProductSettings.enableReview?s("div",{staticClass:"tab-pane fade",attrs:{id:"product-reviews-content",role:"tabpanel","aria-labelledby":"product-tab-reviews"}},[s("product-reviews-component",{attrs:{"product-id":t.product.id,"product-name":t.product.name,"approved-reviews-count":t.approvedReviewsCount,reviews:t.product.reviews},on:{"new-approved-review":t.incApprovedReviewsCount}})],1):t._e()])]),t._v(" "),t.relatedProducts.length>0&&this.loaded?s("div",{staticClass:"products-section pt-0"},[s("h2",{staticClass:"section-title"},[t._v("Related Products")]),t._v(" "),s("owl-carousel-component",{staticClass:"products-slider dots-top",attrs:{options:{loop:!1,autoplay:!1,dots:!0,items:2,responsive:{576:{items:3},992:{items:4}}}}},t._l(t.relatedProducts,(function(t){return s("product-one-component",{key:t.id,attrs:{product:t}})})),1)],1):t._e(),t._v(" "),t.upsells.length>0&&this.loaded?s("div",{staticClass:"products-section pt-0"},[s("h2",{staticClass:"section-title"},[t._v("You May Also Like")]),t._v(" "),s("owl-carousel-component",{staticClass:"products-slider dots-top",attrs:{options:{loop:!1,autoplay:!1,dots:!0,items:2,responsive:{576:{items:3},992:{items:4}}}}},t._l(t.upsells,(function(t){return s("product-one-component",{key:t.id,attrs:{product:t}})})),1)],1):t._e()]),t._v(" "),s("product-sidebar-two-component",{staticClass:"col-lg-3",attrs:{"featured-products":t.featuredProducts,user:t.vendor,loaded:t.loaded}})],1),t._v(" "),s("hr",{staticClass:"mt-0 m-b-5"}),t._v(" "),s("div",{staticClass:"product-widgets-container row pb-2 mb-4"},[s("div",{staticClass:"col-lg-3 col-sm-6 pb-5 pb-md-0"},[s("h4",{staticClass:"section-sub-title m-b-3"},[t._v("Featured Products")]),t._v(" "),t._l(t.featuredProducts,(function(t){return s("product-two-component",{key:t.id,attrs:{product:t}})}))],2),t._v(" "),s("div",{staticClass:"col-lg-3 col-sm-6 pb-5 pb-md-0"},[s("h4",{staticClass:"section-sub-title m-b-3"},[t._v("Best Selling Products")]),t._v(" "),t._l(t.bestSellings,(function(t){return s("product-two-component",{key:t.id,attrs:{product:t}})}))],2),t._v(" "),s("div",{staticClass:"col-lg-3 col-sm-6 pb-5 pb-md-0"},[s("h4",{staticClass:"section-sub-title m-b-3"},[t._v("Latest Products")]),t._v(" "),t._l(t.newArrivals,(function(t){return s("product-two-component",{key:t.id,attrs:{product:t}})}))],2),t._v(" "),s("div",{staticClass:"col-lg-3 col-sm-6 pb-5 pb-md-0"},[s("h4",{staticClass:"section-sub-title m-b-3"},[t._v("Top Rated Products")]),t._v(" "),t._l(t.topRates,(function(t){return s("product-two-component",{key:t.id,attrs:{product:t}})}))],2)]),t._v(" "),s("LightBox",{ref:"lightbox",staticClass:"porto-light-box",attrs:{media:t.lightBoxMedia,"show-caption":!0,"show-light-box":!1}})],1)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"social-icons mr-2"},[e("a",{staticClass:"social-icon social-facebook icon-facebook",attrs:{href:"#",target:"_blank",title:"Facebook"}}),this._v(" "),e("a",{staticClass:"social-icon social-twitter icon-twitter",attrs:{href:"#",target:"_blank",title:"Twitter"}}),this._v(" "),e("a",{staticClass:"social-icon social-linkedin fab fa-linkedin-in",attrs:{href:"#",target:"_blank",title:"Linkedin"}}),this._v(" "),e("a",{staticClass:"social-icon social-mail icon-mail-alt",attrs:{href:"#",target:"_blank",title:"Mail"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",{staticClass:"nav-item"},[e("a",{staticClass:"nav-link active",attrs:{id:"product-tab-desc","data-toggle":"tab",href:"#product-desc-content",role:"tab","aria-controls":"product-desc-content","aria-selected":"true"}},[this._v("Description")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",{staticClass:"nav-item"},[e("a",{staticClass:"nav-link",attrs:{id:"product-tab-more-info","data-toggle":"tab",href:"#product-more-info-content",role:"tab","aria-controls":"product-more-info-content","aria-selected":"false"}},[this._v("Additional Info")])])}],!1,null,null,null);e.default=E.exports}}]);