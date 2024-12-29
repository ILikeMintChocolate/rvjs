true&&(function polyfill() {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) {
    return;
  }
  for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
    processPreload(link);
  }
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") {
        continue;
      }
      for (const node of mutation.addedNodes) {
        if (node.tagName === "LINK" && node.rel === "modulepreload")
          processPreload(node);
      }
    }
  }).observe(document, { childList: true, subtree: true });
  function getFetchOpts(link) {
    const fetchOpts = {};
    if (link.integrity) fetchOpts.integrity = link.integrity;
    if (link.referrerPolicy) fetchOpts.referrerPolicy = link.referrerPolicy;
    if (link.crossOrigin === "use-credentials")
      fetchOpts.credentials = "include";
    else if (link.crossOrigin === "anonymous") fetchOpts.credentials = "omit";
    else fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  function processPreload(link) {
    if (link.ep)
      return;
    link.ep = true;
    const fetchOpts = getFetchOpts(link);
    fetch(link.href, fetchOpts);
  }
}());

var se = Object.defineProperty;
var ne = (e, s, t) => s in e ? se(e, s, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[s] = t;
var i = (e, s, t) => ne(e, typeof s != "symbol" ? s + "" : s, t);
class _ {
  constructor(s) {
    i(this, "context");
    this.context = s ?? null;
  }
  has() {
    return this.context !== null;
  }
  get() {
    return this.context;
  }
  set(s) {
    this.context = s;
  }
  clear() {
    this.context = null;
  }
}
const d = new _(), K = Symbol.for("RVJS_GET_STATE_IDENTIFIER"), G = Symbol.for("RVJS_SET_STATE_IDENTIFIER"), U = Symbol.for("RVJS_COMPONENT_IDENTIFIER"), W = Symbol.for(
  "RVJS_BLOCK_COMPONENT_IDENTIFIER"
), j = Symbol.for(
  "RVJS_FOR_COMPONENT_IDENTIFIER"
), k = Symbol.for(
  "RVJS_SWITCH_COMPONENT_IDENTIFIER"
), v = Symbol.for(
  "RVJS_CASE_COMPONENT_IDENTIFIER"
), z = Symbol.for(
  "RVJS_TOGGLE_COMPONENT_IDENTIFIER"
), Y = Symbol.for(
  "RVJS_REFRESH_COMPONENT_IDENTIFIER"
), oe = Symbol.for(
  "RVJS_DEFINED_COMPONENT_IDENTIFIER"
), y = Symbol.for(
  "RVJS_COMPONENT_FN_IDENTIFIER"
), re = (e) => Array.isArray(e), Q = (e) => typeof e == "function", ie = (e) => e instanceof SVGElement, ce = (e) => e instanceof Node, le = (e) => typeof e == "boolean", x = (e) => typeof e == "function" && e.hasOwnProperty("$$typeof"), de = (e) => typeof e == "object" && e.hasOwnProperty("$$typeof"), fe = (e) => x(e) && e.$$typeof === K, p = (e) => de(e) && e.$$typeof === U, H = (e) => p(e) && e.$$componentType === W, he = (e) => x(e) && y, X = (e) => e instanceof HTMLElement, ae = (e) => e instanceof SVGElement, ue = (e) => e != null, R = (e) => e.map((t) => p(t) ? t.getNodes() : t).flat(1 / 0), C = (e) => Array.isArray(e) ? e : [e], me = (e) => class extends e {
  constructor(...t) {
    super(...t);
    i(this, "self");
    i(this, "parentNode");
    i(this, "isRendered");
    i(this, "isCommited");
    i(this, "componentFn");
    const [n] = t;
    this.self = this, this.self.componentFn = n, this.self.parentNode = null, this.self.isRendered = !1, this.self.isCommited = !1;
  }
  renderFn() {
    return C(this.self.componentFn());
  }
  getNodes() {
    const t = [];
    if (!this.self.isRendered)
      H(this.self) ? t.push(this.self.tempNode) : t.push(this.self.startNode, this.self.endNode);
    else if (H(this.self))
      t.push(...R(this.self.childNodes));
    else {
      let { startNode: n, endNode: o } = this.self;
      for (; n !== o; )
        t.push(n.nextSibling), n = n.nextSibling;
      t.push(o);
    }
    return t;
  }
  renderTree(t) {
    this.self.traverseChildren((n) => (!t && n === this.self || n.isRendered || (d.set(n), n.render(!0)), !0));
  }
  commit() {
    this.self.traverseChildren((t) => t.isCommited ? !1 : (t.onMountHandler && (t.onMountHandler(), t.isCommited = !0), !0));
  }
  destroyNode() {
    this.self.getNodes().forEach((t) => {
      X(t) ? t.remove() : ie(t) && t.parentNode.removeChild(t);
    });
  }
  destroyComponent() {
    this.self.traverseChildren((t) => (t.onDestroyHandler && t.onDestroyHandler(), t.unsubscribeAllEffects(), !0));
  }
  clearDom(t, n) {
    let o = t.nextSibling;
    for (; o !== n; ) {
      const r = o.nextSibling;
      o.remove(), o = r;
    }
  }
  updateDom(t, n, o, r, h) {
    if (h) {
      const l = document.createDocumentFragment();
      l.append(...r), t.insertBefore(l, o);
    } else {
      let l = n.nextSibling, c = 0, f = r.length - 1;
      const u = /* @__PURE__ */ new Set();
      for (; l && l !== o && c <= f; ) {
        const m = r[c++], T = l.nextSibling;
        if (l === m) {
          l = T;
          continue;
        }
        t.insertBefore(m, l), t.removeChild(l), u.add(l), u.delete(m), l = T;
      }
      for ([...u].forEach((m) => {
        t.insertBefore(m, o);
      }); c <= f; )
        t.insertBefore(r[c], o), c++;
    }
  }
}, pe = (e) => class extends e {
  constructor(...t) {
    super(...t);
    i(this, "contextRef");
    i(this, "context");
    this.contextRef = null, this.context = null;
  }
  setContextRef(t) {
    this.contextRef = t;
  }
  setContext(t) {
    this.context = t;
  }
}, Ne = (e) => class extends e {
  constructor(...t) {
    super(...t);
    i(this, "unsubscribeEffectHandlers");
    this.unsubscribeEffectHandlers = [];
  }
  addUnsubscribeEffectHandler(t) {
    this.unsubscribeEffectHandlers.push(t);
  }
  unsubscribeAllEffects() {
    this.unsubscribeEffectHandlers.forEach((t) => {
      t();
    });
  }
}, Ee = (e) => class extends e {
  constructor(...t) {
    super(...t);
    i(this, "onMountHandler");
    i(this, "onDestroyHandler");
    this.onMountHandler = null, this.onDestroyHandler = null;
  }
  setOnMountHandler(t) {
    this.onMountHandler = t;
  }
  setOnDestroyHandler(t) {
    this.onDestroyHandler = t;
  }
};
class Ce {
}
const Te = (e) => class extends e {
  constructor(...t) {
    super(...t);
    i(this, "parent");
    i(this, "childComponents");
    this.parent = null, this.childComponents = [];
  }
  setParentChildRelation(t) {
    t.parent = this, this.childComponents.push(t);
  }
  traverseChildren(t) {
    const n = [this];
    let o = !0;
    for (; n.length > 0; ) {
      const r = n.pop();
      o = t(r), o && [...r.childComponents].reverse().forEach((h) => {
        n.push(h);
      });
    }
  }
  traverseParent(t) {
    let n = this.parent, o = !0;
    for (; n && o; )
      o = t(n), n = n.parent;
  }
}, ye = (e) => class extends e {
  constructor(...t) {
    super(...t);
    i(this, "outlet");
    i(this, "setOutlet");
    this.outlet = null, this.setOutlet = null;
  }
};
class g extends ye(
  me(pe(Te(Ee(Ne(Ce)))))
) {
  constructor(...t) {
    super(...t);
    i(this, "$$typeof");
    i(this, "$$componentType");
    i(this, "key");
    const [n, o] = t;
    this.$$typeof = U, this.key = o;
  }
}
const Re = (e) => class extends e {
  constructor(...t) {
    super(...t);
    i(this, "self");
    i(this, "tempNode");
    i(this, "childNodes");
    this.self = this, this.self.tempNode = document.createComment("BLOCK-COMPONENT-TEMP"), this.self.childNodes = [];
  }
  render() {
    const t = this.self.renderFn();
    t.forEach((o) => {
      p(o) && this.self.setParentChildRelation(o);
    });
    const n = R(t);
    this.self.childNodes = n, this.self.replaceTempNodes(n);
  }
  replaceTempNodes(t) {
    this.self.isRendered = !0, this.self.tempNode.replaceWith(...t), this.self.tempNode = null;
  }
};
class S extends Re(g) {
  constructor(...s) {
    super(...s), this.$$componentType = W;
  }
}
const a = new _();
const Oe = (e) => class extends e {
  constructor(...t) {
    super(...t);
    i(this, "self");
    i(this, "startNode");
    i(this, "endNode");
    i(this, "is");
    i(this, "isMounted");
    this.self = this, this.self.startNode = document.createComment("CASE-COMPONENT-START"), this.self.endNode = document.createComment("CASE-COMPONENT-END"), this.self.isMounted = !1;
  }
  render(t) {
    if (t && this.self.subscribeDependency(), !this.self.is && !this.isMounted || this.self.is && this.self.isMounted)
      return;
    if (!this.self.is && this.self.isMounted) {
      this.self.deleteItem();
      return;
    }
    const n = this.self.renderFn();
    this.self.isMounted = !0, this.self.updateDom(
      this.self.parentNode ?? this.self.startNode.parentNode,
      this.self.startNode,
      this.self.endNode,
      R(n),
      this.self.startNode.nextSibling === this.self.endNode
    ), t || this.self.commitItem();
  }
  renderItem(t) {
    const n = new S(() => t, "BLOCK_COMPONENT");
    return this.self.setParentChildRelation(n), n;
  }
  commitItem() {
    this.self.renderTree(!1), this.self.commit();
  }
  deleteItem() {
    this.self.isMounted = !1, this.self.clearDom(this.self.startNode, this.self.endNode), this.self.childComponents.forEach((t) => {
      t.destroyComponent();
    }), this.self.childComponents = [];
  }
  subscribeDependency() {
    a.set({
      component: this.self,
      type: "FLOW_EFFECT",
      effectFn: () => {
        a.clear();
        const t = d.get();
        d.set(this.self), this.self.render(!1), d.set(t);
      }
    }), this.self.is, a.clear();
  }
};
class ge extends Oe(g) {
  constructor(...s) {
    super(...s), this.$$componentType = v;
  }
}
class Ie {
  constructor() {
    i(this, "first");
    i(this, "last");
    i(this, "size");
    this.first = null, this.last = null, this.size = 0;
  }
  enqueue(s) {
    const t = new Se(s);
    !this.first && !this.last ? (this.first = t, this.last = t) : (this.last.setNext(t), this.last = t), this.size++;
  }
  dequeue() {
    const s = this.first;
    return this.first = s.next, this.size--, this.size === 0 && (this.last = null), s.data;
  }
  dequeueAll(s) {
    let t = 0;
    for (; this.size > 0; ) {
      const n = this.dequeue();
      s(n, t++);
    }
  }
  clear() {
    this.first = null, this.last = null, this.size = 0;
  }
}
let Se = class {
  constructor(s) {
    i(this, "data");
    i(this, "next");
    this.data = s, this.next = null;
  }
  setNext(s) {
    this.next = s;
  }
};
const b = (e) => {
  let s = e, t = !1;
  const n = {
    DOM_EFFECT: /* @__PURE__ */ new Map(),
    USE_EFFECT: [],
    FLOW_EFFECT: []
  }, o = new Ie(), r = () => {
    const l = a.get();
    return l && (t ? o.enqueue(l) : V(n, l)), s;
  };
  r.$$typeof = K;
  const h = (l) => {
    l !== s && (s = Q(l) ? l(s) : l, t = !0, be(n), t = !1, o.dequeueAll((c) => {
      V(n, c);
    }));
  };
  return h.$$typeof = G, [r, h];
}, V = (e, s) => {
  const { component: t, type: n, effectFn: o, target: r } = s;
  if (n === "DOM_EFFECT") {
    if (e.DOM_EFFECT.has(r))
      return;
    e[n].set(r, o), t.addUnsubscribeEffectHandler(() => {
      e[n].delete(r);
    });
  } else
    e[n].push(o), t.addUnsubscribeEffectHandler(() => {
      e[n] = e[n].filter((h) => h !== o);
    });
}, be = (e) => {
  e.DOM_EFFECT.forEach((s) => {
    s();
  }), e.USE_EFFECT.forEach((s) => {
    s();
  }), e.FLOW_EFFECT.forEach((s) => {
    s();
  });
}, Me = (e) => class extends e {
  constructor(...t) {
    super(...t);
    i(this, "self");
    i(this, "each");
    i(this, "startNode");
    i(this, "endNode");
    i(this, "itemMap");
    i(this, "countMap");
    i(this, "deletable");
    i(this, "committable");
    this.self = this, this.self.startNode = document.createComment("FOR-COMPONENT-START"), this.self.endNode = document.createComment("FOR-COMPONENT-END"), this.itemMap = /* @__PURE__ */ new Map(), this.countMap = /* @__PURE__ */ new Map(), this.deletable = [], this.committable = [];
  }
  render(t) {
    t && this.self.subscribeDependency();
    const n = this.self.renderFn();
    this.self.childComponents = n, this.self.deleteItems(n), n.length > 0 && (this.self.updateDom(
      this.self.parentNode ?? this.self.startNode.parentNode,
      this.self.startNode,
      this.self.endNode,
      R(n),
      this.self.startNode.nextSibling === this.self.endNode
    ), t || this.self.commitItems(), this.committable.length = 0);
  }
  renderItems(t) {
    const n = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Map(), r = [];
    for (let l = 0; l < this.self.each.length; l++) {
      const c = this.self.each[l];
      let f = n.get(c);
      f || (f = { items: [], index: 0 }, n.set(c, f));
      let u;
      if ((this.self.countMap.get(c) ?? 0) !== 0) {
        const m = this.self.itemMap.get(c);
        u = m.items[m.index++], u.setIndex(l), this.self.countMap.set(c, (this.self.countMap.get(c) ?? 1) - 1);
      } else {
        const [m, T] = b(l), E = new S(
          () => t(c, m),
          "BLOCK_COMPONENT"
        );
        u = {
          component: E,
          index: m,
          setIndex: T
        }, this.self.setParentChildRelation(E), this.committable.push(E);
      }
      r.push(u.component), f.items.push(u), o.set(c, (o.get(c) ?? 0) + 1);
    }
    const h = [...this.self.itemMap.values()];
    return this.self.deletable = h.flatMap(({ items: l, index: c }) => l.slice(c)).map((l) => l.component), this.self.itemMap = n, this.self.countMap = o, r;
  }
  commitItems() {
    this.self.committable.forEach((t) => {
      t.renderTree(!0);
    }), this.self.committable.forEach((t) => {
      t.commit();
    }), this.self.committable = [];
  }
  deleteItems(t) {
    t.length === 0 ? (this.self.deletable.forEach((n) => {
      n.destroyComponent();
    }), this.self.clearDom(this.self.startNode, this.self.endNode)) : this.self.deletable.forEach((n) => {
      n.destroyComponent(), t.length > 0 && n.destroyNode();
    }), this.self.deletable = [];
  }
  subscribeDependency() {
    a.set({
      component: this.self,
      type: "FLOW_EFFECT",
      effectFn: () => {
        a.clear();
        const t = d.get();
        d.set(this.self), this.self.render(!1), d.set(t);
      }
    }), this.self.each, a.clear();
  }
};
class Fe extends Me(g) {
  constructor(...s) {
    super(...s), this.$$componentType = j;
  }
}
const De = (e) => class extends e {
  constructor(...t) {
    super(...t);
    i(this, "self");
    i(this, "by");
    i(this, "startNode");
    i(this, "endNode");
    this.self = this, this.self.startNode = document.createComment("REFRESH-COMPONENT-START"), this.self.endNode = document.createComment("REFRESH-COMPONENT-END");
  }
  render(t) {
    t && this.self.subscribeDependency(), this.self.deleteItem();
    const n = this.self.renderFn()[0];
    n && (this.self.updateDom(
      this.self.parentNode ?? this.self.startNode.parentNode,
      this.self.startNode,
      this.self.endNode,
      R([n]),
      this.self.startNode.nextSibling === this.self.endNode
    ), t || this.self.commitItem());
  }
  renderItem(t) {
    if (!t.filter(Boolean).length)
      return null;
    const n = new S(() => t, "BLOCK_COMPONENT");
    return this.self.setParentChildRelation(n), n;
  }
  commitItem() {
    this.self.renderTree(!1), this.self.commit();
  }
  deleteItem() {
    this.self.clearDom(this.self.startNode, this.self.endNode), this.self.childComponents.forEach((t) => {
      t.destroyComponent();
    }), this.self.childComponents = [];
  }
  subscribeDependency() {
    a.set({
      component: this.self,
      type: "FLOW_EFFECT",
      effectFn: () => {
        a.clear();
        const t = d.get();
        d.set(this.self), this.self.render(!1), d.set(t);
      }
    }), this.self.by, a.clear();
  }
};
class _e extends De(g) {
  constructor(...s) {
    super(...s), this.$$componentType = Y;
  }
}
const xe = (e) => class extends e {
  constructor(...t) {
    super(...t);
    i(this, "self");
    i(this, "startNode");
    i(this, "endNode");
    i(this, "renderedCase");
    this.self = this, this.self.startNode = document.createComment("SWITCH-COMPONENT-START"), this.self.endNode = document.createComment("SWITCH-COMPONENT-END"), this.self.renderedCase = null;
  }
  render() {
    const t = this.self.renderFn();
    this.self.updateDom(
      this.self.parentNode ?? this.self.startNode.parentNode,
      this.self.startNode,
      this.self.endNode,
      R(t),
      this.self.startNode.nextSibling === this.self.endNode
    );
  }
  renderItems(t) {
    t.forEach((n) => {
      this.self.setParentChildRelation(n);
    });
  }
  updateSwitchDom(t) {
    this.self.updateDom(
      this.self.parentNode ?? this.self.startNode.parentNode,
      this.self.startNode,
      this.self.endNode,
      t,
      !0
    );
  }
};
class Pe extends xe(g) {
  constructor(...s) {
    super(...s), this.$$componentType = k;
  }
}
const $e = (e) => class extends e {
  constructor(...t) {
    super(...t);
    i(this, "self");
    i(this, "is");
    i(this, "startNode");
    i(this, "endNode");
    i(this, "isMounted");
    this.self = this, this.self.startNode = document.createComment("TOGGLE-COMPONENT-START"), this.self.endNode = document.createComment("TOGGLE-COMPONENT-END"), this.self.isMounted = !1;
  }
  render(t) {
    if (t && this.self.subscribeDependency(), this.self.is && this.self.isMounted)
      return;
    if (!this.self.is) {
      this.self.deleteItem(), this.self.clearDom(this.self.startNode, this.self.endNode);
      return;
    }
    const n = this.self.renderFn();
    this.self.updateDom(
      this.self.parentNode ?? this.self.startNode.parentNode,
      this.self.startNode,
      this.self.endNode,
      R(n),
      this.self.startNode.nextSibling === this.self.endNode
    ), t || this.self.commitItem();
  }
  renderItem(t) {
    if (!t.filter(Boolean).length)
      return null;
    const n = new S(() => t, "BLOCK_COMPONENT");
    return this.self.setParentChildRelation(n), n;
  }
  commitItem() {
    this.self.isRendered = !1, this.self.renderTree(!1), this.self.commit();
  }
  deleteItem() {
    this.self.childComponents.forEach((t) => {
      t.destroyNode(), t.destroyComponent();
    }), this.self.childComponents = [];
  }
  subscribeDependency() {
    a.set({
      component: this.self,
      type: "FLOW_EFFECT",
      effectFn: () => {
        a.clear();
        const t = d.get();
        d.set(this.self), this.self.render(!1), d.set(t);
      }
    }), this.self.is, a.clear();
  }
};
class we extends $e(g) {
  constructor(...s) {
    super(...s), this.$$componentType = z;
  }
}
const N = (e, s, t, n) => {
  const o = Object.getOwnPropertyDescriptor(e, s);
  Object.defineProperty(t, n, o);
}, Ae = (e) => {
  const s = new ge(
    () => d.get().renderItem(C(e.children)),
    // @ts-ignore
    e.key
  );
  return N(e, "is", s, "is"), s;
};
Ae.$$typeof = y;
const Z = (e, s = {}) => {
  let t;
  return he(e) ? t = e(s) : t = new S(() => e(s), s.key), t;
}, He = (e) => class extends e {
  constructor(...t) {
    super(...t);
    i(this, "self");
    i(this, "value");
    i(this, "startNode");
    i(this, "endNode");
    i(this, "isMounted");
    this.self = this, this.self.startNode = document.createComment("DEFINED-COMPONENT-START"), this.self.endNode = document.createComment("DEFINED-COMPONENT-END"), this.self.isMounted = !1;
  }
  render(t) {
    if (t && this.self.subscribeDependency(), !ue(this.self.value)) {
      this.self.deleteItem(), this.self.isMounted = !1;
      return;
    }
    if (!this.self.isMounted) {
      const n = this.self.renderFn()[0];
      if (!n)
        return;
      this.self.updateDom(
        this.self.parentNode ?? this.self.startNode.parentNode,
        this.self.startNode,
        this.self.endNode,
        R([n]),
        this.self.startNode.nextSibling === this.self.endNode
      ), t || this.self.commitItem(), this.self.isMounted = !0;
    }
  }
  renderItem(t) {
    if (!t.filter(Boolean).length)
      return null;
    const n = new S(() => t, "BLOCK_COMPONENT");
    return this.self.setParentChildRelation(n), n;
  }
  commitItem() {
    this.self.renderTree(!1), this.self.commit();
  }
  deleteItem() {
    this.self.clearDom(this.self.startNode, this.self.endNode), this.self.childComponents.forEach((t) => {
      t.destroyComponent();
    }), this.self.childComponents = [];
  }
  subscribeDependency() {
    a.set({
      component: this.self,
      type: "FLOW_EFFECT",
      effectFn: () => {
        a.clear();
        const t = d.get();
        d.set(this.self), this.self.render(!1), d.set(t);
      }
    }), this.self.value, a.clear();
  }
};
class Ve extends He(g) {
  constructor(...s) {
    super(...s), this.$$componentType = oe;
  }
}
const Le = (e) => {
  const s = new Ve(
    () => d.get().renderItem(C(e.children)),
    // @ts-ignore
    e.key
  );
  return N(e, "value", s, "value"), s;
};
Le.$$typeof = y;
const Je = (e) => {
  const s = new Fe(
    () => d.get().renderItems(e.children),
    // @ts-ignore
    e == null ? void 0 : e.key
  );
  return N(e, "each", s, "each"), s;
};
Je.$$typeof = y;
const P = (e) => {
  const s = new _e(
    () => d.get().renderItem(C(e.children)),
    // @ts-ignore
    e.key
  );
  return N(e, "by", s, "by"), s;
};
P.$$typeof = y;
const Rt = (e, s) => {
  p(s) ? (d.set(s), e.append(...s.getNodes()), s.renderTree(!0), s.commit(), d.clear()) : e.append(String(s));
}, qe = (e) => new Pe(
  () => {
    const { children: t } = e;
    return d.get().renderItems(C(t)), t;
  },
  // @ts-ignore
  e.key
);
qe.$$typeof = y;
const I = (e, s, t) => {
  s == null || le(s) || (re(s) ? Be(e, s, t) : Q(s) ? Ge(e, s, t) : p(s) ? Ke(e, s, t) : ce(s) ? L(e, s, t) : L(e, document.createTextNode(String(s)), t));
}, Be = (e, s, t) => {
  s.forEach((n) => {
    I(e, n, t);
  });
}, Ke = (e, s, t) => {
  const n = d.get();
  if (n && n.setParentChildRelation(s), d.set(s), s.parentNode = e, t) {
    const o = document.createDocumentFragment();
    o.append(...s.getNodes()), e.insertBefore(o, t);
  } else {
    const o = s.getNodes();
    e.append(...o);
  }
  d.set(n);
}, L = (e, s, t) => {
  t ? e.insertBefore(s, t) : e.appendChild(s);
}, Ge = (e, s, t) => {
  const n = document.createComment("VALUE-START"), o = document.createComment("VALUE-END");
  I(e, n, t), I(e, o, t);
  const r = d.get(), h = () => {
    Ue(e, n, o), a.set({
      component: r,
      type: "DOM_EFFECT",
      target: e,
      effectFn: h
    });
    const c = s();
    a.clear(), I(e, c, o);
  };
  a.set({
    component: r,
    type: "DOM_EFFECT",
    target: e,
    effectFn: h
  });
  const l = s();
  a.clear(), I(e, l, o);
}, Ue = (e, s, t) => {
  let n = s.nextSibling;
  for (; n !== t; ) {
    const o = n.nextSibling;
    e.removeChild(n), n = o;
  }
}, J = (e) => {
  let s = {};
  a.set({
    component: d.get(),
    type: "USE_EFFECT",
    effectFn: () => {
      s = e(s);
    }
  }), s = e(s), a.clear();
}, We = (e, s, t) => {
  s === "element" ? t.current = e : e.setAttribute(s, t);
}, je = (e, s) => {
  for (const t in s)
    e.style[t] = s[t];
}, ke = /* @__PURE__ */ new Set(["style", "as", "children"]), q = {
  className: (e, s) => {
    X(e) ? J(() => e.className = s.className) : ae(e) && J(() => e.setAttribute("class", s.className));
  }
}, ve = (e, s) => {
  if (Object.getOwnPropertyDescriptor(s, "style")) {
    const t = () => {
      je(e, s.style);
    };
    a.set({
      component: d.get(),
      type: "USE_EFFECT",
      effectFn: () => {
        t();
      }
    }), t(), a.clear();
  }
  for (const t in s)
    q.hasOwnProperty(t) ? q[t](e, s) : !ke.has(t) && t in e && We(e, t, s[t]);
}, ze = (e) => {
  let s;
  const t = () => {
    const o = document.createElement("template");
    return o.innerHTML = e, o.content.firstChild;
  }, n = () => (s || (s = t())).cloneNode(!0);
  return n.cloneNode = n, n;
}, Ot = (e) => {
  const s = ze(`<${e.as}>`)();
  return e && ve(s, e), I(s, () => e.children, null), s;
}, Ye = (e) => {
  const s = new we(
    () => d.get().renderItem(C(e.children)),
    // @ts-ignore
    e.key
  );
  return N(e, "is", s, "is"), s;
};
Ye.$$typeof = y;
const gt = () => {
  const e = {};
  return {
    setContext: (n) => {
      const o = d.get();
      o.setContextRef(e), o.setContext(n);
    },
    getContext: () => {
      const n = d.get();
      let o = null;
      return n.traverseParent((r) => r.contextRef === e ? (o = r.context, !1) : !0), o;
    }
  };
}, Qe = (e) => {
  d.get().setOnDestroyHandler(e);
}, Xe = (e) => {
  d.get().setOnMountHandler(e);
}, $ = (e, s) => {
  s.forEach((t) => {
    fe(t) && (a.set({
      component: d.get(),
      type: "USE_EFFECT",
      effectFn: e
    }), t(), a.clear());
  });
}, O = /* @__PURE__ */ new Map(), ee = (e, s) => {
  if (Ze(e), !O.has(e)) {
    const [o, r] = b(s);
    O.set(e, {
      count: 0,
      getState: o,
      setState: r
    });
  }
  const { getState: t, setState: n } = O.get(e);
  return O.get(e).count += 1, [t, n];
}, Ze = (e) => {
  d.get().addUnsubscribeEffectHandler(() => {
    O.get(e).count -= 1, O.get(e).count === 0 && O.delete(e);
  });
}, It = () => ({
  current: null
}), St = (e, s, t, n) => {
  e.addEventListener(s, t, n);
}, Mt = (e) => e, et = (e) => {
  const { path: s, children: t } = e, n = { path: s, childRoutes: t ?? [] };
  return N(e, "element", n, "element"), n;
};
et.$$typeof = y;
const w = new _(), tt = (e) => st(e) ? "DYNAMIC" : nt(e) ? "ANY" : "STATIC", st = (e) => e.startsWith("/:", 0), nt = (e) => e === "*", ot = (e) => e.replace("/:", ""), B = (e) => e.replace("/", ""), D = (e) => {
  const s = e.indexOf("?");
  if (s === -1)
    return {};
  const n = e.substring(s + 1).split("&").map((o) => o.split("=")).filter(([o, r]) => o && r);
  return Object.fromEntries(n);
}, F = (e) => {
  const s = e.indexOf("?");
  return s === -1 ? e : e.substring(0, s);
}, rt = (e) => {
  const s = {}, t = (n, o) => {
    o.forEach((r) => {
      const { path: h, childRoutes: l } = r, c = {}, f = {
        path: h,
        childRouteMap: c,
        type: tt(h)
      };
      N(r, "element", f, "getElement"), n[h] = f, l && t(c, C(l));
    });
  };
  return t(s, C(e)), s;
}, it = (e, s) => {
  let t = e;
  const n = [];
  for (let o = 0; o < s.length; o++) {
    const r = s[o], h = (() => {
      if (t[r] || t[F(r)]) {
        const f = t[F(r)], u = {
          path: F(r),
          rawPath: r,
          queries: D(r),
          dynamicKey: {},
          type: "STATIC",
          ...f
        };
        return N(f, "getElement", u, "getElement"), u;
      }
      const l = ft(t);
      if (l) {
        const f = {
          path: F(r),
          rawPath: r,
          type: l.type,
          dynamicKey: ot(l.path),
          queries: D(r),
          childRouteMap: l.childRouteMap
        };
        return N(l, "getElement", f, "getElement"), f;
      }
      const c = ht(t);
      if (c) {
        const f = {
          path: r,
          type: c.type,
          queries: D(r),
          childRouteMap: c.childRouteMap
        };
        return N(c, "getElement", f, "getElement"), f;
      }
    })();
    if (!h)
      break;
    n.push(h), t = h.childRouteMap;
  }
  return n;
}, ct = (e, s) => {
  const t = (f, u) => {
    const m = [];
    let T = -1;
    for (let E = 0; E < Math.min(f.length, u.length); E++) {
      const A = f[E], te = u[E];
      if (dt(A, te))
        T++, m.push(A);
      else {
        T = E - 1;
        break;
      }
    }
    return { routeToRetain: m, retainIndex: T };
  }, n = (f, u) => f.slice(u + 1), o = (f, u) => f.slice(u + 1), { routeToRetain: r, retainIndex: h } = t(
    e,
    s
  ), l = n(e, h), c = o(s, h);
  return { routeToRetain: r, routeToRender: c, routeToRemove: l };
}, lt = (e, s) => {
  const t = (c, f, u) => {
    const m = c.at(-1);
    m && p(m == null ? void 0 : m.element) ? m.element.setOutlet(f[0].element) : u(f[0].element);
  }, { routeToRetain: n, routeToRender: o, routeToRemove: r } = e;
  let h = null;
  if (!o.length && r.length) {
    const c = n.at(-1);
    c && p(c.element) && c.element.setOutlet(null);
    return;
  }
  if (!o.length)
    return;
  const l = {
    dynamicKeys: {},
    queries: {}
  };
  n.forEach((c) => {
    c.type === "DYNAMIC" && (l.dynamicKeys[c.dynamicKey] = B(c.path)), Object.assign(l.queries, c.queries);
  }), [...o].reverse().forEach((c) => {
    if (c.element = c.getElement, p(c.element)) {
      const [f, u] = b((h == null ? void 0 : h.element) ?? null);
      c.element.outlet = Z(P, {
        get by() {
          return f();
        },
        get children() {
          return f();
        }
      }), c.element.setOutlet = u, c.type === "DYNAMIC" && (l.dynamicKeys[c.dynamicKey] = B(c.path)), Object.assign(l.queries, c.queries);
    }
    h = c;
  }), w.set(l), t(n, o, s);
}, dt = (e, s) => e.rawPath === s.rawPath, ft = (e) => Object.values(e).find((s) => s.type === "DYNAMIC"), ht = (e) => e["*"], _t = (e) => {
  const [s] = at(), [t, n] = b(null), o = rt(C(e.children));
  let r = [];
  return $(() => {
    const l = it(o, s()), { routeToRetain: c, routeToRender: f, routeToRemove: u } = ct(
      r,
      l
    );
    lt({ routeToRetain: c, routeToRender: f, routeToRemove: u }, n), r = [...c, ...f];
  }, [s]), Z(P, {
    get by() {
      return t();
    },
    get children() {
      return t();
    }
  });
}, at = () => {
  const [e, s] = ee("RVJS_ROUTER_PATHS", []), t = () => {
    const o = (window.location.hash || "#/").replace("#/", "/").substring(1).split("/").map((r) => `/${r}`);
    s(o);
  };
  return Xe(() => {
    t(), window.addEventListener("hashchange", t);
  }), Qe(() => {
    window.removeEventListener("hashchange", t);
  }), [e, s];
}, xt = () => (e, s) => {
  if (s) {
    const t = /^https?:\/\//.test(e) ? e : `https://${e}`;
    window.open(t, "_blank");
  } else
    e.startsWith("#") ? window.location.hash = e : window.location.hash = `#${e}`;
}, Pt = () => d.get().outlet, $t = () => {
  const [e] = ee("RVJS_ROUTER_PATHS"), [s, t] = b(null), n = () => {
    t((window.location.hash || "#/").replace("#/", "/"));
  };
  return $(n, [e]), n(), s;
}, Ht = (e, s, t) => {
  const n = Object.defineProperties(
    {},
    {
      ...Object.getOwnPropertyDescriptors(e),
      ...Object.getOwnPropertyDescriptors(s)
    }
  );
  if (t != null && t.children)
    for (const o of t.children) {
      let r = null;
      (o in e || o in s) && Object.defineProperty(n, o, {
        get() {
          return r === null && (r = e[o] ?? s[o]), r;
        },
        configurable: !0,
        enumerable: !0
      });
    }
  return n;
};

var header_icon_style = '_11gn21t0';

const isStringLanguage = value => {
  return value.length === 2;
};
const isStringLocale = value => {
  return value.length === 5 && value[2] === '-';
};
const splitLocale = locale => {
  return locale.split('-');
};
const findContentByKey = (resource, key) => {
  const keys = key.split('.');
  let currentObject = resource;
  for (const key of keys) {
    // @ts-ignore
    currentObject = currentObject[key];
  }
  return currentObject;
};
const findResource = (locale, option) => {
  const [language, country] = splitLocale(locale);
  return option.languages[language].countries[country];
};
const getAllLocales = option => {
  const {
    languages
  } = option;
  const locales = [];
  for (const language in languages) {
    const {
      countries
    } = languages[language];
    for (const country in countries) {
      locales.push(`${language}-${country}`);
    }
  }
  return locales;
};

const getUserLocales = () => {
  return navigator.languages;
};
const detectUserLocale = (userInfos, option) => {
  if (userInfos.length === 0) {
    return getDefaultLocale(option);
  }
  for (const userInfo of userInfos) {
    if (isStringLanguage(userInfo)) {
      const language = userInfo;
      if (option.languages[language]?.defaultCountry) {
        return `${language}-${option.languages[language].defaultCountry}`;
      }
    } else if (isStringLocale(userInfo)) {
      const [language, country] = splitLocale(userInfo);
      if (option.languages[language]) {
        return `${language}-${country ?? option.languages[language].defaultCountry}`;
      }
    } else {
      return getDefaultLocale(option);
    }
  }
  return getDefaultLocale(option);
};
const getDefaultLocale = option => {
  return `${option.defaultLanguage}-${option.languages[option.defaultLanguage].defaultCountry}`;
};

let localeContext = null;
const useLocalizer$1 = option => {
  const userLocales = getUserLocales();
  const userLocale = detectUserLocale(userLocales, option);
  const localeSet = new Set(getAllLocales(option));
  const [locale, setLocale] = b(userLocale);
  const [language, setLanguage] = b(userLocale.slice(0, 2));
  const [country, setCountry] = b(userLocale.slice(3, 5));
  const [resource, setResource] = b(findResource(locale(), option));
  localeContext = {
    option,
    locale,
    language,
    country,
    setLocale,
    setLanguage,
    setCountry,
    localeSet,
    resource
  };
  $(() => {
    setResource(findResource(locale(), option));
  }, [locale]);
};
const t = key => {
  const {
    resource
  } = localeContext;
  return findContentByKey(resource(), key);
};
const useLocale = () => {
  const {
    locale,
    language,
    country,
    localeSet
  } = localeContext;
  return {
    locale,
    language,
    country,
    localeSet
  };
};
const setLocale = locale => {
  const {
    setLocale: _setLocale,
    localeSet,
    setLanguage,
    setCountry
  } = localeContext;
  if (!localeSet.has(locale)) {
    return;
  }
  _setLocale(locale);
  setLanguage(locale.slice(0, 2));
  setCountry(locale.slice(3, 5));
};

function toPrimitive$1(t, r) {
  if ("object" != typeof t || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != typeof i) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function toPropertyKey$1(t) {
  var i = toPrimitive$1(t, "string");
  return "symbol" == typeof i ? i : String(i);
}
function _defineProperty$1(obj, key, value) {
  key = toPropertyKey$1(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function ownKeys$1(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread2$1(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys$1(Object(t), true).forEach(function(r2) {
      _defineProperty$1(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$1(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
function mapValues(input, fn) {
  var result = {};
  for (var _key in input) {
    result[_key] = fn(input[_key], _key);
  }
  return result;
}
var shouldApplyCompound = (compoundCheck, selections, defaultVariants) => {
  for (var key of Object.keys(compoundCheck)) {
    var _selections$key;
    if (compoundCheck[key] !== ((_selections$key = selections[key]) !== null && _selections$key !== void 0 ? _selections$key : defaultVariants[key])) {
      return false;
    }
  }
  return true;
};
var createRuntimeFn = (config) => {
  var runtimeFn = (options) => {
    var className = config.defaultClassName;
    var selections = _objectSpread2$1(_objectSpread2$1({}, config.defaultVariants), options);
    for (var variantName in selections) {
      var _selections$variantNa;
      var variantSelection = (_selections$variantNa = selections[variantName]) !== null && _selections$variantNa !== void 0 ? _selections$variantNa : config.defaultVariants[variantName];
      if (variantSelection != null) {
        var selection = variantSelection;
        if (typeof selection === "boolean") {
          selection = selection === true ? "true" : "false";
        }
        var selectionClassName = (
          // @ts-expect-error
          config.variantClassNames[variantName][selection]
        );
        if (selectionClassName) {
          className += " " + selectionClassName;
        }
      }
    }
    for (var [compoundCheck, compoundClassName] of config.compoundVariants) {
      if (shouldApplyCompound(compoundCheck, selections, config.defaultVariants)) {
        className += " " + compoundClassName;
      }
    }
    return className;
  };
  runtimeFn.variants = () => Object.keys(config.variantClassNames);
  runtimeFn.classNames = {
    get base() {
      return config.defaultClassName.split(" ")[0];
    },
    get variants() {
      return mapValues(config.variantClassNames, (classNames) => mapValues(classNames, (className) => className.split(" ")[0]));
    }
  };
  return runtimeFn;
};
function toPrimitive(t, r) {
  if ("object" != typeof t || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != typeof i) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function toPropertyKey(t) {
  var i = toPrimitive(t, "string");
  return "symbol" == typeof i ? i : String(i);
}
function _defineProperty(obj, key, value) {
  key = toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread2(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), true).forEach(function(r2) {
      _defineProperty(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
var createSprinkles$1 = (composeStyles2) => function() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  var sprinklesStyles = Object.assign({}, ...args.map((a) => a.styles));
  var sprinklesKeys = Object.keys(sprinklesStyles);
  var shorthandNames = sprinklesKeys.filter((property) => "mappings" in sprinklesStyles[property]);
  var sprinklesFn = (props) => {
    var classNames = [];
    var shorthands = {};
    var nonShorthands = _objectSpread2({}, props);
    var hasShorthands = false;
    for (var shorthand of shorthandNames) {
      var value = props[shorthand];
      if (value != null) {
        var sprinkle = sprinklesStyles[shorthand];
        hasShorthands = true;
        for (var propMapping of sprinkle.mappings) {
          shorthands[propMapping] = value;
          if (nonShorthands[propMapping] == null) {
            delete nonShorthands[propMapping];
          }
        }
      }
    }
    var finalProps = hasShorthands ? _objectSpread2(_objectSpread2({}, shorthands), nonShorthands) : props;
    var _loop = function _loop2() {
      var propValue = finalProps[prop];
      var sprinkle2 = sprinklesStyles[prop];
      try {
        if (sprinkle2.mappings) {
          return 1;
        }
        if (typeof propValue === "string" || typeof propValue === "number") {
          if (false) ;
          classNames.push(sprinkle2.values[propValue].defaultClass);
        } else if (Array.isArray(propValue)) {
          for (var responsiveIndex = 0; responsiveIndex < propValue.length; responsiveIndex++) {
            var responsiveValue = propValue[responsiveIndex];
            if (responsiveValue != null) {
              var conditionName = sprinkle2.responsiveArray[responsiveIndex];
              if (false) ;
              classNames.push(sprinkle2.values[responsiveValue].conditions[conditionName]);
            }
          }
        } else {
          for (var _conditionName in propValue) {
            var _value = propValue[_conditionName];
            if (_value != null) {
              if (false) ;
              classNames.push(sprinkle2.values[_value].conditions[_conditionName]);
            }
          }
        }
      } catch (e) {
        throw e;
      }
    };
    for (var prop in finalProps) {
      if (_loop()) continue;
    }
    return composeStyles2(classNames.join(" "));
  };
  return Object.assign(sprinklesFn, {
    properties: new Set(sprinklesKeys)
  });
};
var composeStyles = (classList) => classList;
var createSprinkles = function createSprinkles2() {
  return createSprinkles$1(composeStyles)(...arguments);
};
var colorChip_recipe = createRuntimeFn({ defaultClassName: "dwareo0", variantClassNames: { size: { sm: "dwareo1", md: "dwareo2", lg: "dwareo3" } }, defaultVariants: {}, compoundVariants: [] });
var colorChipDefineProps = { conditions: void 0, styles: { backgroundColor: { values: { transparent: { defaultClass: "dwareo4" }, background: { defaultClass: "dwareo5" }, backgroundHover: { defaultClass: "dwareo6" }, backgroundActive: { defaultClass: "dwareo7" }, backgroundSelected: { defaultClass: "dwareo8" }, backgroundSelectedHover: { defaultClass: "dwareo9" }, backgroundBrand: { defaultClass: "dwareoa" }, backgroundInverse: { defaultClass: "dwareob" }, backgroundInverseHover: { defaultClass: "dwareoc" }, layer01: { defaultClass: "dwareod" }, layer02: { defaultClass: "dwareoe" }, layer03: { defaultClass: "dwareof" }, layerHover01: { defaultClass: "dwareog" }, layerHover02: { defaultClass: "dwareoh" }, layerHover03: { defaultClass: "dwareoi" }, layerActive01: { defaultClass: "dwareoj" }, layerActive02: { defaultClass: "dwareok" }, layerActive03: { defaultClass: "dwareol" }, layerSelected01: { defaultClass: "dwareom" }, layerSelected02: { defaultClass: "dwareon" }, layerSelected03: { defaultClass: "dwareoo" }, layerSelectedHover01: { defaultClass: "dwareop" }, layerSelectedHover02: { defaultClass: "dwareoq" }, layerSelectedHover03: { defaultClass: "dwareor" }, layerSelectedDisabled: { defaultClass: "dwareos" }, layerAccent01: { defaultClass: "dwareot" }, layerAccent02: { defaultClass: "dwareou" }, layerAccent03: { defaultClass: "dwareov" }, layerAccentHover01: { defaultClass: "dwareow" }, layerAccentHover02: { defaultClass: "dwareox" }, layerAccentHover03: { defaultClass: "dwareoy" }, layerAccentActive01: { defaultClass: "dwareoz" }, layerAccentActive02: { defaultClass: "dwareo10" }, layerAccentActive03: { defaultClass: "dwareo11" }, field01: { defaultClass: "dwareo12" }, field02: { defaultClass: "dwareo13" }, field03: { defaultClass: "dwareo14" }, fieldHover01: { defaultClass: "dwareo15" }, fieldHover02: { defaultClass: "dwareo16" }, fieldHover03: { defaultClass: "dwareo17" }, borderSubtle00: { defaultClass: "dwareo18" }, borderSubtle01: { defaultClass: "dwareo19" }, borderSubtle02: { defaultClass: "dwareo1a" }, borderSubtle03: { defaultClass: "dwareo1b" }, borderSubtleSelected01: { defaultClass: "dwareo1c" }, borderSubtleSelected02: { defaultClass: "dwareo1d" }, borderSubtleSelected03: { defaultClass: "dwareo1e" }, borderStrong01: { defaultClass: "dwareo1f" }, borderStrong02: { defaultClass: "dwareo1g" }, borderStrong03: { defaultClass: "dwareo1h" }, borderInverse: { defaultClass: "dwareo1i" }, borderInteractive: { defaultClass: "dwareo1j" }, borderDisabled: { defaultClass: "dwareo1k" }, borderTitle01: { defaultClass: "dwareo1l" }, borderTitle02: { defaultClass: "dwareo1m" }, borderTitle03: { defaultClass: "dwareo1n" }, textPrimary: { defaultClass: "dwareo1o" }, textSecondary: { defaultClass: "dwareo1p" }, textPlaceholder: { defaultClass: "dwareo1q" }, textOnColor: { defaultClass: "dwareo1r" }, textHelper: { defaultClass: "dwareo1s" }, textError: { defaultClass: "dwareo1t" }, textInverse: { defaultClass: "dwareo1u" }, textDisabled: { defaultClass: "dwareo1v" }, textOnColorDisabled: { defaultClass: "dwareo1w" }, linkPrimary: { defaultClass: "dwareo1x" }, linkPrimaryHover: { defaultClass: "dwareo1y" }, linkSecondary: { defaultClass: "dwareo1z" }, linkInverse: { defaultClass: "dwareo20" }, linkVisited: { defaultClass: "dwareo21" }, iconPrimary: { defaultClass: "dwareo22" }, iconSecondary: { defaultClass: "dwareo23" }, iconOnColor: { defaultClass: "dwareo24" }, iconInverse: { defaultClass: "dwareo25" }, iconOnColorDisabled: { defaultClass: "dwareo26" }, iconDisabled: { defaultClass: "dwareo27" }, iconInteractive: { defaultClass: "dwareo28" }, supportError: { defaultClass: "dwareo29" }, supportSuccess: { defaultClass: "dwareo2a" }, supportWarning: { defaultClass: "dwareo2b" }, supportInfo: { defaultClass: "dwareo2c" }, supportErrorInverse: { defaultClass: "dwareo2d" }, supportSuccessInverse: { defaultClass: "dwareo2e" }, supportWarningInverse: { defaultClass: "dwareo2f" }, supportInfoInverse: { defaultClass: "dwareo2g" }, supportCautionMajor: { defaultClass: "dwareo2h" }, supportCautionMinor: { defaultClass: "dwareo2i" }, supportUndefined: { defaultClass: "dwareo2j" }, focus: { defaultClass: "dwareo2k" }, focusInset: { defaultClass: "dwareo2l" }, focusInverse: { defaultClass: "dwareo2m" }, interactive: { defaultClass: "dwareo2n" }, highlight: { defaultClass: "dwareo2o" }, overlay: { defaultClass: "dwareo2p" }, skeletonBackground: { defaultClass: "dwareo2q" }, skeletonElement: { defaultClass: "dwareo2r" }, toggleOff: { defaultClass: "dwareo2s" }, buttonPrimary: { defaultClass: "dwareo2t" }, buttonPrimaryHover: { defaultClass: "dwareo2u" }, buttonPrimaryActive: { defaultClass: "dwareo2v" }, buttonSecondary: { defaultClass: "dwareo2w" }, buttonSecondaryHover: { defaultClass: "dwareo2x" }, buttonSecondaryActive: { defaultClass: "dwareo2y" }, buttonTertiary: { defaultClass: "dwareo2z" }, buttonTertiaryHover: { defaultClass: "dwareo30" }, buttonTertiaryActive: { defaultClass: "dwareo31" }, buttonDangerPrimary: { defaultClass: "dwareo32" }, buttonDangerSecondary: { defaultClass: "dwareo33" }, buttonDangerHover: { defaultClass: "dwareo34" }, buttonDangerActive: { defaultClass: "dwareo35" }, buttonSeparator: { defaultClass: "dwareo36" }, buttonDisabled: { defaultClass: "dwareo37" } } } } };
var colorChipSprinkles = createSprinkles(colorChipDefineProps);
const copyToClipboard = async (text) => {
  try {
    await navigator.clipboard.writeText(text);
  } catch (err) {
    console.error("Failed to copy: ", text);
  }
};
const colorToHex = (color) => {
  const rgbaRegex = /rgba?\((\d+), (\d+), (\d+)(?:, ([\d.]+))?\)/;
  const rgbaValues = color.match(rgbaRegex);
  const r = parseInt(rgbaValues[1]);
  const g = parseInt(rgbaValues[2]);
  const b = parseInt(rgbaValues[3]);
  const hexR = r.toString(16).padStart(2, "0");
  const hexG = g.toString(16).padStart(2, "0");
  const hexB = b.toString(16).padStart(2, "0");
  if (rgbaValues[4]) {
    const a = parseFloat(rgbaValues[4]);
    const hexA = Math.round(a * 255).toString(16).padStart(2, "0");
    return `#${hexR}${hexG}${hexB}${hexA}`;
  } else {
    return `#${hexR}${hexG}${hexB}`;
  }
};
const useColorChipClipboard = () => {
  const colorChipElement = It();
  const colorChipOnClickHandler = async () => {
    const style = getComputedStyle(colorChipElement.current);
    const color = style.getPropertyValue("background-color");
    const hex = colorToHex(color);
    await copyToClipboard(hex);
  };
  return {
    colorChipElement,
    colorChipOnClickHandler
  };
};
var _tmpl$$v = /* @__PURE__ */ ze(`<button>`);
const ColorChip = (props) => {
  const {
    colorChipElement,
    colorChipOnClickHandler
  } = useColorChipClipboard();
  return (() => {
    var _el$ = _tmpl$$v();
    St(_el$, "click", colorChipOnClickHandler);
    We(_el$, "element", colorChipElement);
    J(() => _el$.className = [colorChip_recipe({
      size: props.size
    }), colorChipSprinkles({
      backgroundColor: props.color
    })].join(" "));
    return _el$;
  })();
};
function arrowRightSvg() {
  const svgElement = new DOMParser().parseFromString(`<svg id="icon" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
  <defs>
    <style>
      .cls-1 {
        fill: none;
      }
    </style>
  </defs>
  <polygon points="18 6 16.57 7.393 24.15 15 4 15 4 17 24.15 17 16.57 24.573 18 26 28 16 18 6"/>
  <rect id="_Transparent_Rectangle_" data-name="&lt;Transparent Rectangle&gt;" class="cls-1" width="32" height="32"/>
</svg>
`, "image/svg+xml").documentElement;
  return svgElement;
}
function chevronDownSvg() {
  const svgElement = new DOMParser().parseFromString(`<svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
    <defs>
        <style>
            .cls-1 {
            fill: none;
            }
        </style>
    </defs>
    <title>chevron--down</title>
    <path d="M8 10.9998L3 5.9998L3.7 5.2998L8 9.5998L12.3 5.2998L13 5.9998L8 10.9998Z"/>
    <rect id="_Transparent_Rectangle_" data-name="&lt;Transparent Rectangle&gt;" class="cls-1" width="32" height="32"/>
</svg>
`, "image/svg+xml").documentElement;
  return svgElement;
}
function closeSvg() {
  const svgElement = new DOMParser().parseFromString(`<?xml version="1.0" encoding="UTF-8"?>
<svg id="icon" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
  <defs>
    <style>
      .cls-1 {
        fill: none;
      }
    </style>
  </defs>
  <polygon points="17.4141 16 24 9.4141 22.5859 8 16 14.5859 9.4143 8 8 9.4141 14.5859 16 8 22.5859 9.4143 24 16 17.4141 22.5859 24 24 22.5859 17.4141 16"/>
  <g id="_Transparent_Rectangle_" data-name="&amp;lt;Transparent Rectangle&amp;gt;">
    <rect class="cls-1" width="32" height="32"/>
  </g>
</svg>`, "image/svg+xml").documentElement;
  return svgElement;
}
function copySvg() {
  const svgElement = new DOMParser().parseFromString(`<svg id="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
    <defs>
        <style>.cls-1{fill:none;}</style>
    </defs>
    <title>copy</title>
    <path d="M28,10V28H10V10H28m0-2H10a2,2,0,0,0-2,2V28a2,2,0,0,0,2,2H28a2,2,0,0,0,2-2V10a2,2,0,0,0-2-2Z"
    />
    <path d="M4,18H2V4A2,2,0,0,1,4,2H18V4H4Z"/>
    <rect id="_Transparent_Rectangle_" data-name="&lt;Transparent Rectangle&gt;" class="cls-1" width="32" height="32"/>
</svg>`, "image/svg+xml").documentElement;
  return svgElement;
}
function documentSvg() {
  const svgElement = new DOMParser().parseFromString(`<?xml version="1.0" encoding="utf-8"?>
<!-- Generator: Adobe Illustrator 24.0.3, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
<svg version="1.1" id="icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 width="32px" height="32px" viewBox="0 0 32 32" style="enable-background:new 0 0 32 32;" xml:space="preserve">
<style type="text/css">
	.st0{fill:none;}
</style>
<title>document</title>
<path d="M25.7,9.3l-7-7C18.5,2.1,18.3,2,18,2H8C6.9,2,6,2.9,6,4v24c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V10C26,9.7,25.9,9.5,25.7,9.3
	z M18,4.4l5.6,5.6H18V4.4z M24,28H8V4h8v6c0,1.1,0.9,2,2,2h6V28z"/>
<rect x="10" y="22" width="12" height="2"/>
<rect x="10" y="16" width="12" height="2"/>
<rect class="st0" width="32" height="32"/>
</svg>
`, "image/svg+xml").documentElement;
  return svgElement;
}
function logoGithubSvg() {
  const svgElement = new DOMParser().parseFromString(`<svg id="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
    <defs>
        <style>
            .cls-1 {
            fill: none;
            }
        </style>
    </defs>
    <title>logo--github</title>
    <path d="M16,2a14,14,0,0,0-4.43,27.28c.7.13,1-.3,1-.67s0-1.21,0-2.38c-3.89.84-4.71-1.88-4.71-1.88A3.71,3.71,0,0,0,6.24,22.3c-1.27-.86.1-.85.1-.85A2.94,2.94,0,0,1,8.48,22.9a3,3,0,0,0,4.08,1.16,2.93,2.93,0,0,1,.88-1.87c-3.1-.36-6.37-1.56-6.37-6.92a5.4,5.4,0,0,1,1.44-3.76,5,5,0,0,1,.14-3.7s1.17-.38,3.85,1.43a13.3,13.3,0,0,1,7,0c2.67-1.81,3.84-1.43,3.84-1.43a5,5,0,0,1,.14,3.7,5.4,5.4,0,0,1,1.44,3.76c0,5.38-3.27,6.56-6.39,6.91a3.33,3.33,0,0,1,.95,2.59c0,1.87,0,3.38,0,3.84s.25.81,1,.67A14,14,0,0,0,16,2Z"/>
    <rect id="_Transparent_Rectangle_" data-name="&lt;Transparent Rectangle&gt;" class="cls-1" width="32" height="32"/>
</svg> `, "image/svg+xml").documentElement;
  return svgElement;
}
function logoNpmSvg() {
  const svgElement = new DOMParser().parseFromString(`<?xml version="1.0" encoding="utf-8"?>
<!-- Generator: Adobe Illustrator 26.3.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
<svg version="1.1" id="icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 width="32px" height="32px" viewBox="0 0 32 32" style="enable-background:new 0 0 32 32;" xml:space="preserve">
<style type="text/css">
	.st0{fill:none;}
</style>
<path d="M4,28V4h24v24H4z M8.5,8.5v15H16v-12h4.5v12h3v-15H8.5z"/>
<rect id="_x3C_Transparent_Rectangle_x3E__363_" class="st0" width="32" height="32"/>
</svg>
`, "image/svg+xml").documentElement;
  return svgElement;
}
function menuSvg() {
  const svgElement = new DOMParser().parseFromString(`<svg id="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><defs><style>.cls-1{fill:none;}</style></defs><title>menu</title><rect x="4" y="6" width="24" height="2"/><rect x="4" y="24" width="24" height="2"/><rect x="4" y="12" width="24" height="2"/><rect x="4" y="18" width="24" height="2"/><rect id="_Transparent_Rectangle_" data-name="&lt;Transparent Rectangle&gt;" class="cls-1" width="32" height="32"/></svg>`, "image/svg+xml").documentElement;
  return svgElement;
}
function searchSvg() {
  const svgElement = new DOMParser().parseFromString(`<svg id="icon" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
  <defs>
    <style>
      .cls-1 {
        fill: none;
      }
    </style>
  </defs>
  <path d="M29,27.5859l-7.5521-7.5521a11.0177,11.0177,0,1,0-1.4141,1.4141L27.5859,29ZM4,13a9,9,0,1,1,9,9A9.01,9.01,0,0,1,4,13Z" transform="translate(0 0)"/>
  <rect id="_Transparent_Rectangle_" data-name="&lt;Transparent Rectangle&gt;" class="cls-1" width="32" height="32"/>
</svg>
`, "image/svg+xml").documentElement;
  return svgElement;
}
function tooltipArrowSvg() {
  const svgElement = new DOMParser().parseFromString(`<svg width="16" height="8" viewBox="0 0 16 8" xmlns="http://www.w3.org/2000/svg">
    <defs>
        <style>
            .cls-1 {
            fill: none;
            }
        </style>
    </defs>
    <g clip-path="url(#clip0_94_126)">
        <path d="M8 0L0 8H16L8 0Z"/>
    </g>
    <defs>
        <rect width="16" height="8" class="cls-1"/>
    </defs>
</svg>
`, "image/svg+xml").documentElement;
  return svgElement;
}
function warningAltFilledSvg() {
  const svgElement = new DOMParser().parseFromString(`<svg id="icon" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
  <defs>
    <style>
      .cls-1 {
        fill: none;
      }
    </style>
  </defs>
  <path id="inner-path" class="cls-1" d="M16,26a1.5,1.5,0,1,1,1.5-1.5A1.5,1.5,0,0,1,16,26Zm-1.125-5h2.25V12h-2.25Z"/>
  <path d="M16.002,6.1714h-.004L4.6487,27.9966,4.6506,28H27.3494l.0019-.0034ZM14.875,12h2.25v9h-2.25ZM16,26a1.5,1.5,0,1,1,1.5-1.5A1.5,1.5,0,0,1,16,26Z"/>
  <path d="M29,30H3a1,1,0,0,1-.8872-1.4614l13-25a1,1,0,0,1,1.7744,0l13,25A1,1,0,0,1,29,30ZM4.6507,28H27.3493l.002-.0033L16.002,6.1714h-.004L4.6487,27.9967Z"/>
  <rect id="_Transparent_Rectangle_" data-name="&lt;Transparent Rectangle&gt;" class="cls-1" width="32" height="32"/>
</svg>
`, "image/svg+xml").documentElement;
  return svgElement;
}
function warningFilledSvg() {
  const svgElement = new DOMParser().parseFromString(`<?xml version="1.0" encoding="utf-8"?>
<!-- Generator: Adobe Illustrator 23.0.2, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
<svg version="1.1" id="icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 width="32px" height="32px" viewBox="0 0 32 32" style="enable-background:new 0 0 32 32;" xml:space="preserve">
<style type="text/css">
	.st0{fill:none;}
	.st1{opacity:0;fill-opacity:0;}
</style>
<rect id="Transparent_Rectangle" class="st0" width="32" height="32"/>
<path id="Compound_Path" d="M16,2C8.3,2,2,8.3,2,16s6.3,14,14,14s14-6.3,14-14C30,8.3,23.7,2,16,2z M14.9,8h2.2v11h-2.2V8z M16,25
	c-0.8,0-1.5-0.7-1.5-1.5S15.2,22,16,22c0.8,0,1.5,0.7,1.5,1.5S16.8,25,16,25z"/>
<path id="inner-path" class="st1" d="M17.5,23.5c0,0.8-0.7,1.5-1.5,1.5c-0.8,0-1.5-0.7-1.5-1.5S15.2,22,16,22
	C16.8,22,17.5,22.7,17.5,23.5z M17.1,8h-2.2v11h2.2V8z"/>
</svg>
`, "image/svg+xml").documentElement;
  return svgElement;
}
const createSvg = (html) => {
  const tempElement = document.createElement("div");
  tempElement.innerHTML = html;
  return tempElement.childNodes[0];
};
const setSvgProperties = (svg, props) => {
  if (props) {
    ve(svg, props);
  }
  return svg;
};
const ArrowRightIcon = (props) => {
  return setSvgProperties(arrowRightSvg(), props ?? {});
};
const ChevronDownIcon = (props) => {
  return setSvgProperties(chevronDownSvg(), props ?? {});
};
const CloseIcon = (props) => {
  return setSvgProperties(closeSvg(), props ?? {});
};
const CopyIcon = (props) => {
  return setSvgProperties(copySvg(), props ?? {});
};
const DocumentIcon = (props) => {
  return setSvgProperties(documentSvg(), props ?? {});
};
const LogoGithubIcon = (props) => {
  return setSvgProperties(logoGithubSvg(), props ?? {});
};
const LogoNpmIcon = (props) => {
  return setSvgProperties(logoNpmSvg(), props ?? {});
};
const MenuIcon = (props) => {
  return setSvgProperties(menuSvg(), props ?? {});
};
const SearchIcon = (props) => {
  return setSvgProperties(searchSvg(), props ?? {});
};
const TooltipArrowIcon = (props) => {
  return setSvgProperties(tooltipArrowSvg(), props ?? {});
};
const WarningAltFilledIcon = (props) => {
  return setSvgProperties(warningAltFilledSvg(), props ?? {});
};
const WarningFilledIcon = (props) => {
  return setSvgProperties(warningFilledSvg(), props ?? {});
};
var iframe_wrapper_style = "sk5ofp0";
var iframe_style = "sk5ofp1";
var _tmpl$$u = /* @__PURE__ */ ze(`<div tabindex=0><iframe>`);
const Iframe = (props) => {
  return (() => {
    var _el$ = _tmpl$$u(), _el$2 = _el$.firstChild;
    _el$.className = iframe_wrapper_style;
    _el$2.className = iframe_style;
    ve(_el$2, props);
    return _el$;
  })();
};
var orderedList_style = "_9affzk0";
const orderedListStyleTypeMap = {
  "1": "decimal",
  a: "lower-alpha",
  A: "upper-alpha",
  i: "lower-roman",
  I: "upper-roman"
};
const useOrderedListProps = (props) => {
  const newProps = Ht(props, {
    get type() {
      return props.type || "1";
    }
  });
  return newProps;
};
const useOrderedListStyleType = (props) => {
  const orderedListElement = It();
  Xe(() => {
    if (orderedListElement.current) {
      orderedListElement.current.style.listStyleType = orderedListStyleTypeMap[props.type];
    }
  });
  return orderedListElement;
};
var _tmpl$$t = /* @__PURE__ */ ze(`<ol>`);
const OrderedList = (_props) => {
  const props = useOrderedListProps(_props);
  const orderedListElement = useOrderedListStyleType(props);
  return (() => {
    var _el$ = _tmpl$$t();
    We(_el$, "element", orderedListElement);
    _el$.className = orderedList_style;
    I(_el$, () => props.children);
    return _el$;
  })();
};
var unorderedList_style = "l2zluo0";
const useUnorderedListProps = (props) => {
  const newProps = Ht(props, {
    get type() {
      return props.type ?? "square";
    }
  });
  return newProps;
};
const useUnorderedListStyleType = (type) => {
  const unorderedListElement = It();
  Xe(() => {
    if (unorderedListElement.current) {
      unorderedListElement.current.style.listStyleType = type;
    }
  });
  return unorderedListElement;
};
var _tmpl$$s = /* @__PURE__ */ ze(`<ul>`);
const unorderedList = (_props) => {
  const props = useUnorderedListProps(_props);
  const unorderedListElement = useUnorderedListStyleType(props.type);
  return (() => {
    var _el$ = _tmpl$$s();
    We(_el$, "element", unorderedListElement);
    _el$.className = unorderedList_style;
    I(_el$, () => props.children);
    return _el$;
  })();
};
var listItem_li_style = "_3q2b4u0";
const isGetter = (object, key) => {
  const descriptor = Object.getOwnPropertyDescriptor(object, key);
  return descriptor && typeof descriptor.get === "function";
};
const isDefined = (value) => {
  return value !== void 0 && value !== null;
};
const isHTMLElement = (value) => {
  return value instanceof HTMLElement;
};
const isString = (value) => {
  return typeof value === "string";
};
const isArray = (value) => {
  return Array.isArray(value);
};
const isObject = (value) => {
  return typeof value === "object";
};
var text_recipe = createRuntimeFn({ defaultClassName: "_1b0vm5p0", variantClassNames: { kind: { "body-compact-01": "_1b0vm5p1", "body-compact-02": "_1b0vm5p2", "body-01": "_1b0vm5p3", "body-02": "_1b0vm5p4", "code-01": "_1b0vm5p5", "code-02": "_1b0vm5p6", "label-01": "_1b0vm5p7", "label-02": "_1b0vm5p8", "helper-text-01": "_1b0vm5p9", "helper-text-02": "_1b0vm5pa", "legal-01": "_1b0vm5pb", "legal-02": "_1b0vm5pc", "heading-compact-01": "_1b0vm5pd", "heading-compact-02": "_1b0vm5pe", "heading-01": "_1b0vm5pf", "heading-02": "_1b0vm5pg", "heading-03": "_1b0vm5ph", "heading-04": "_1b0vm5pi", "heading-05": "_1b0vm5pj", "heading-06": "_1b0vm5pk", "heading-07": "_1b0vm5pl" } }, defaultVariants: {}, compoundVariants: [] });
var textDefineProps = { conditions: void 0, styles: { color: { values: { transparent: { defaultClass: "_1b0vm5pm" }, background: { defaultClass: "_1b0vm5pn" }, backgroundHover: { defaultClass: "_1b0vm5po" }, backgroundActive: { defaultClass: "_1b0vm5pp" }, backgroundSelected: { defaultClass: "_1b0vm5pq" }, backgroundSelectedHover: { defaultClass: "_1b0vm5pr" }, backgroundBrand: { defaultClass: "_1b0vm5ps" }, backgroundInverse: { defaultClass: "_1b0vm5pt" }, backgroundInverseHover: { defaultClass: "_1b0vm5pu" }, layer01: { defaultClass: "_1b0vm5pv" }, layer02: { defaultClass: "_1b0vm5pw" }, layer03: { defaultClass: "_1b0vm5px" }, layerHover01: { defaultClass: "_1b0vm5py" }, layerHover02: { defaultClass: "_1b0vm5pz" }, layerHover03: { defaultClass: "_1b0vm5p10" }, layerActive01: { defaultClass: "_1b0vm5p11" }, layerActive02: { defaultClass: "_1b0vm5p12" }, layerActive03: { defaultClass: "_1b0vm5p13" }, layerSelected01: { defaultClass: "_1b0vm5p14" }, layerSelected02: { defaultClass: "_1b0vm5p15" }, layerSelected03: { defaultClass: "_1b0vm5p16" }, layerSelectedHover01: { defaultClass: "_1b0vm5p17" }, layerSelectedHover02: { defaultClass: "_1b0vm5p18" }, layerSelectedHover03: { defaultClass: "_1b0vm5p19" }, layerSelectedDisabled: { defaultClass: "_1b0vm5p1a" }, layerAccent01: { defaultClass: "_1b0vm5p1b" }, layerAccent02: { defaultClass: "_1b0vm5p1c" }, layerAccent03: { defaultClass: "_1b0vm5p1d" }, layerAccentHover01: { defaultClass: "_1b0vm5p1e" }, layerAccentHover02: { defaultClass: "_1b0vm5p1f" }, layerAccentHover03: { defaultClass: "_1b0vm5p1g" }, layerAccentActive01: { defaultClass: "_1b0vm5p1h" }, layerAccentActive02: { defaultClass: "_1b0vm5p1i" }, layerAccentActive03: { defaultClass: "_1b0vm5p1j" }, field01: { defaultClass: "_1b0vm5p1k" }, field02: { defaultClass: "_1b0vm5p1l" }, field03: { defaultClass: "_1b0vm5p1m" }, fieldHover01: { defaultClass: "_1b0vm5p1n" }, fieldHover02: { defaultClass: "_1b0vm5p1o" }, fieldHover03: { defaultClass: "_1b0vm5p1p" }, borderSubtle00: { defaultClass: "_1b0vm5p1q" }, borderSubtle01: { defaultClass: "_1b0vm5p1r" }, borderSubtle02: { defaultClass: "_1b0vm5p1s" }, borderSubtle03: { defaultClass: "_1b0vm5p1t" }, borderSubtleSelected01: { defaultClass: "_1b0vm5p1u" }, borderSubtleSelected02: { defaultClass: "_1b0vm5p1v" }, borderSubtleSelected03: { defaultClass: "_1b0vm5p1w" }, borderStrong01: { defaultClass: "_1b0vm5p1x" }, borderStrong02: { defaultClass: "_1b0vm5p1y" }, borderStrong03: { defaultClass: "_1b0vm5p1z" }, borderInverse: { defaultClass: "_1b0vm5p20" }, borderInteractive: { defaultClass: "_1b0vm5p21" }, borderDisabled: { defaultClass: "_1b0vm5p22" }, borderTitle01: { defaultClass: "_1b0vm5p23" }, borderTitle02: { defaultClass: "_1b0vm5p24" }, borderTitle03: { defaultClass: "_1b0vm5p25" }, textPrimary: { defaultClass: "_1b0vm5p26" }, textSecondary: { defaultClass: "_1b0vm5p27" }, textPlaceholder: { defaultClass: "_1b0vm5p28" }, textOnColor: { defaultClass: "_1b0vm5p29" }, textHelper: { defaultClass: "_1b0vm5p2a" }, textError: { defaultClass: "_1b0vm5p2b" }, textInverse: { defaultClass: "_1b0vm5p2c" }, textDisabled: { defaultClass: "_1b0vm5p2d" }, textOnColorDisabled: { defaultClass: "_1b0vm5p2e" }, linkPrimary: { defaultClass: "_1b0vm5p2f" }, linkPrimaryHover: { defaultClass: "_1b0vm5p2g" }, linkSecondary: { defaultClass: "_1b0vm5p2h" }, linkInverse: { defaultClass: "_1b0vm5p2i" }, linkVisited: { defaultClass: "_1b0vm5p2j" }, iconPrimary: { defaultClass: "_1b0vm5p2k" }, iconSecondary: { defaultClass: "_1b0vm5p2l" }, iconOnColor: { defaultClass: "_1b0vm5p2m" }, iconInverse: { defaultClass: "_1b0vm5p2n" }, iconOnColorDisabled: { defaultClass: "_1b0vm5p2o" }, iconDisabled: { defaultClass: "_1b0vm5p2p" }, iconInteractive: { defaultClass: "_1b0vm5p2q" }, supportError: { defaultClass: "_1b0vm5p2r" }, supportSuccess: { defaultClass: "_1b0vm5p2s" }, supportWarning: { defaultClass: "_1b0vm5p2t" }, supportInfo: { defaultClass: "_1b0vm5p2u" }, supportErrorInverse: { defaultClass: "_1b0vm5p2v" }, supportSuccessInverse: { defaultClass: "_1b0vm5p2w" }, supportWarningInverse: { defaultClass: "_1b0vm5p2x" }, supportInfoInverse: { defaultClass: "_1b0vm5p2y" }, supportCautionMajor: { defaultClass: "_1b0vm5p2z" }, supportCautionMinor: { defaultClass: "_1b0vm5p30" }, supportUndefined: { defaultClass: "_1b0vm5p31" }, focus: { defaultClass: "_1b0vm5p32" }, focusInset: { defaultClass: "_1b0vm5p33" }, focusInverse: { defaultClass: "_1b0vm5p34" }, interactive: { defaultClass: "_1b0vm5p35" }, highlight: { defaultClass: "_1b0vm5p36" }, overlay: { defaultClass: "_1b0vm5p37" }, skeletonBackground: { defaultClass: "_1b0vm5p38" }, skeletonElement: { defaultClass: "_1b0vm5p39" }, toggleOff: { defaultClass: "_1b0vm5p3a" }, buttonPrimary: { defaultClass: "_1b0vm5p3b" }, buttonPrimaryHover: { defaultClass: "_1b0vm5p3c" }, buttonPrimaryActive: { defaultClass: "_1b0vm5p3d" }, buttonSecondary: { defaultClass: "_1b0vm5p3e" }, buttonSecondaryHover: { defaultClass: "_1b0vm5p3f" }, buttonSecondaryActive: { defaultClass: "_1b0vm5p3g" }, buttonTertiary: { defaultClass: "_1b0vm5p3h" }, buttonTertiaryHover: { defaultClass: "_1b0vm5p3i" }, buttonTertiaryActive: { defaultClass: "_1b0vm5p3j" }, buttonDangerPrimary: { defaultClass: "_1b0vm5p3k" }, buttonDangerSecondary: { defaultClass: "_1b0vm5p3l" }, buttonDangerHover: { defaultClass: "_1b0vm5p3m" }, buttonDangerActive: { defaultClass: "_1b0vm5p3n" }, buttonSeparator: { defaultClass: "_1b0vm5p3o" }, buttonDisabled: { defaultClass: "_1b0vm5p3p" } } } } };
var textSprinkles = createSprinkles(textDefineProps);
const useTextProps = (props) => {
  const newProps = Ht(props, {
    get as() {
      return props.as ?? "p";
    },
    get kind() {
      return props.kind ?? "body-01";
    },
    get color() {
      return props.color ?? "textPrimary";
    },
    get className() {
      return props.className ?? "";
    }
  });
  return newProps;
};
const Text = (_props) => {
  const props = useTextProps(_props);
  return Z(Ot, {
    get as() {
      return props.as;
    },
    get className() {
      return [text_recipe({
        kind: props.kind
      }), textSprinkles({
        color: props.color
      }), props.className].join(" ");
    },
    get children() {
      return props.text ?? props.children;
    }
  });
};
var _tmpl$$r = /* @__PURE__ */ ze(`<li>`);
const ListItem = (props) => {
  return (() => {
    var _el$ = _tmpl$$r();
    I(_el$, () => !isGetter(props, "children") ? Z(Text, {
      as: "span",
      kind: "body-01",
      color: "textPrimary",
      get children() {
        return props.children;
      }
    }) : props.children);
    J(() => _el$.className = [listItem_li_style, text_recipe({
      kind: "body-01"
    })].join(" "));
    return _el$;
  })();
};
var button_kind_recipe = createRuntimeFn({ defaultClassName: "_40xlnk0", variantClassNames: { kind: { primary: "_40xlnk1", secondary: "_40xlnk2", tertiary: "_40xlnk3", ghost: "_40xlnk4", ghostIconOnly: "_40xlnk5", dangerPrimary: "_40xlnk6", dangerGhost: "_40xlnk7", dangerTertiary: "_40xlnk8" } }, defaultVariants: {}, compoundVariants: [] });
var button_size_recipe = createRuntimeFn({ defaultClassName: "_40xlnk9", variantClassNames: { size: { sm: "_40xlnka", md: "_40xlnkb", lg: "_40xlnkc", xl: "_40xlnkd", "2xl": "_40xlnke", smIconOnly: "_40xlnkf", mdIconOnly: "_40xlnkg", lgIconOnly: "_40xlnkh", xlIconOnly: "_40xlnki", "2xlIconOnly": "_40xlnkj" } }, defaultVariants: {}, compoundVariants: [] });
var button_text_recipe = createRuntimeFn({ defaultClassName: "_40xlnkk", variantClassNames: { kind: { primary: "_40xlnkl", secondary: "_40xlnkm", tertiary: "_40xlnkn", ghost: "_40xlnko", dangerPrimary: "_40xlnkp", dangerGhost: "_40xlnkq", dangerTertiary: "_40xlnkr" } }, defaultVariants: {}, compoundVariants: [] });
createRuntimeFn({ defaultClassName: "_40xlnks", variantClassNames: { kind: { primary: "_40xlnkt", secondary: "_40xlnku", tertiary: "_40xlnkv", ghost: "_40xlnkw", ghostIconOnly: "_40xlnkx", dangerPrimary: "_40xlnky", dangerGhost: "_40xlnkz", dangerTertiary: "_40xlnk10" } }, defaultVariants: {}, compoundVariants: [] });
const useButtonProps = (props) => {
  const newProps = Ht(props, {
    get type() {
      return props.type ?? "button";
    },
    get className() {
      return props.className ?? "";
    },
    get disabled() {
      return props.disabled ?? false;
    },
    get tabIndex() {
      return props.tabIndex ?? 0;
    }
  });
  return newProps;
};
const useButtonClassName = (props) => {
  const classes = {
    get kind() {
      return props.hasIconOnly && props.kind === "ghost" ? "ghostIconOnly" : props.kind;
    },
    get size() {
      return props.hasIconOnly ? `${props.size}IconOnly` : props.size;
    }
  };
  return classes;
};
var __default__ = { color: { transparent: "var(--ie8oza0)", background: "var(--ie8oza1)", backgroundHover: "var(--ie8oza2)", backgroundActive: "var(--ie8oza3)", backgroundSelected: "var(--ie8oza4)", backgroundSelectedHover: "var(--ie8oza5)", backgroundBrand: "var(--ie8oza6)", backgroundInverse: "var(--ie8oza7)", backgroundInverseHover: "var(--ie8oza8)", layer01: "var(--ie8oza9)", layer02: "var(--ie8ozaa)", layer03: "var(--ie8ozab)", layerHover01: "var(--ie8ozac)", layerHover02: "var(--ie8ozad)", layerHover03: "var(--ie8ozae)", layerActive01: "var(--ie8ozaf)", layerActive02: "var(--ie8ozag)", layerActive03: "var(--ie8ozah)", layerSelected01: "var(--ie8ozai)", layerSelected02: "var(--ie8ozaj)", layerSelected03: "var(--ie8ozak)", layerSelectedHover01: "var(--ie8ozal)", layerSelectedHover02: "var(--ie8ozam)", layerSelectedHover03: "var(--ie8ozan)", layerSelectedDisabled: "var(--ie8ozao)", layerAccent01: "var(--ie8ozap)", layerAccent02: "var(--ie8ozaq)", layerAccent03: "var(--ie8ozar)", layerAccentHover01: "var(--ie8ozas)", layerAccentHover02: "var(--ie8ozat)", layerAccentHover03: "var(--ie8ozau)", layerAccentActive01: "var(--ie8ozav)", layerAccentActive02: "var(--ie8ozaw)", layerAccentActive03: "var(--ie8ozax)", field01: "var(--ie8ozay)", field02: "var(--ie8ozaz)", field03: "var(--ie8oza10)", fieldHover01: "var(--ie8oza11)", fieldHover02: "var(--ie8oza12)", fieldHover03: "var(--ie8oza13)", borderSubtle00: "var(--ie8oza14)", borderSubtle01: "var(--ie8oza15)", borderSubtle02: "var(--ie8oza16)", borderSubtle03: "var(--ie8oza17)", borderSubtleSelected01: "var(--ie8oza18)", borderSubtleSelected02: "var(--ie8oza19)", borderSubtleSelected03: "var(--ie8oza1a)", borderStrong01: "var(--ie8oza1b)", borderStrong02: "var(--ie8oza1c)", borderStrong03: "var(--ie8oza1d)", borderInverse: "var(--ie8oza1e)", borderInteractive: "var(--ie8oza1f)", borderDisabled: "var(--ie8oza1g)", borderTitle01: "var(--ie8oza1h)", borderTitle02: "var(--ie8oza1i)", borderTitle03: "var(--ie8oza1j)", textPrimary: "var(--ie8oza1k)", textSecondary: "var(--ie8oza1l)", textPlaceholder: "var(--ie8oza1m)", textOnColor: "var(--ie8oza1n)", textHelper: "var(--ie8oza1o)", textError: "var(--ie8oza1p)", textInverse: "var(--ie8oza1q)", textDisabled: "var(--ie8oza1r)", textOnColorDisabled: "var(--ie8oza1s)", linkPrimary: "var(--ie8oza1t)", linkPrimaryHover: "var(--ie8oza1u)", linkSecondary: "var(--ie8oza1v)", linkInverse: "var(--ie8oza1w)", linkVisited: "var(--ie8oza1x)", iconPrimary: "var(--ie8oza1y)", iconSecondary: "var(--ie8oza1z)", iconOnColor: "var(--ie8oza20)", iconInverse: "var(--ie8oza21)", iconOnColorDisabled: "var(--ie8oza22)", iconDisabled: "var(--ie8oza23)", iconInteractive: "var(--ie8oza24)", supportError: "var(--ie8oza25)", supportSuccess: "var(--ie8oza26)", supportWarning: "var(--ie8oza27)", supportInfo: "var(--ie8oza28)", supportErrorInverse: "var(--ie8oza29)", supportSuccessInverse: "var(--ie8oza2a)", supportWarningInverse: "var(--ie8oza2b)", supportInfoInverse: "var(--ie8oza2c)", supportCautionMajor: "var(--ie8oza2d)", supportCautionMinor: "var(--ie8oza2e)", supportUndefined: "var(--ie8oza2f)", focus: "var(--ie8oza2g)", focusInset: "var(--ie8oza2h)", focusInverse: "var(--ie8oza2i)", interactive: "var(--ie8oza2j)", highlight: "var(--ie8oza2k)", overlay: "var(--ie8oza2l)", skeletonBackground: "var(--ie8oza2m)", skeletonElement: "var(--ie8oza2n)", toggleOff: "var(--ie8oza2o)", buttonPrimary: "var(--ie8oza2p)", buttonPrimaryHover: "var(--ie8oza2q)", buttonPrimaryActive: "var(--ie8oza2r)", buttonSecondary: "var(--ie8oza2s)", buttonSecondaryHover: "var(--ie8oza2t)", buttonSecondaryActive: "var(--ie8oza2u)", buttonTertiary: "var(--ie8oza2v)", buttonTertiaryHover: "var(--ie8oza2w)", buttonTertiaryActive: "var(--ie8oza2x)", buttonDangerPrimary: "var(--ie8oza2y)", buttonDangerSecondary: "var(--ie8oza2z)", buttonDangerHover: "var(--ie8oza30)", buttonDangerActive: "var(--ie8oza31)", buttonSeparator: "var(--ie8oza32)", buttonDisabled: "var(--ie8oza33)" }, component: { header: { height: "var(--_11w4t9v0)" }, sideNav: { width: "var(--_11w4t9v1)" } }, motion: { productive: "var(--_1wj4m7m0)" }, opacity: { "12": "var(--sj3a7g0)", "20": "var(--sj3a7g1)", "25": "var(--sj3a7g2)", "32": "var(--sj3a7g3)", "50": "var(--sj3a7g4)", hex12: "var(--sj3a7g5)", hex20: "var(--sj3a7g6)", hex25: "var(--sj3a7g7)", hex32: "var(--sj3a7g8)", hex50: "var(--sj3a7g9)" }, spacing: { "10": "var(--_1regh6m0)", "11": "var(--_1regh6m1)", "12": "var(--_1regh6m2)", "13": "var(--_1regh6m3)", "00": "var(--_1regh6m4)", "01": "var(--_1regh6m5)", "02": "var(--_1regh6m6)", "03": "var(--_1regh6m7)", "04": "var(--_1regh6m8)", "05": "var(--_1regh6m9)", "06": "var(--_1regh6ma)", "07": "var(--_1regh6mb)", "08": "var(--_1regh6mc)", "09": "var(--_1regh6md)" }, font: { size: { "12": "var(--heo27c0)", "14": "var(--heo27c1)", "16": "var(--heo27c2)", "18": "var(--heo27c3)", "20": "var(--heo27c4)", "22": "var(--heo27c5)", "24": "var(--heo27c6)", "28": "var(--heo27c7)", "32": "var(--heo27c8)", "36": "var(--heo27c9)", "40": "var(--heo27ca)", "42": "var(--heo27cb)", "50": "var(--heo27cc)", "54": "var(--heo27cd)", "64": "var(--heo27ce)" }, weight: { light: "var(--heo27cf)", regular: "var(--heo27cg)", semiBold: "var(--heo27ch)" }, letterSpacing: { "00": "var(--heo27ci)", "01": "var(--heo27cj)", "02": "var(--heo27ck)" } } };
var _tmpl$$q = /* @__PURE__ */ ze(`<button>`), _tmpl$2$3 = /* @__PURE__ */ ze(`<div>`);
const Button = (_props) => {
  const props = useButtonProps(_props);
  const buttonClassName = useButtonClassName(props);
  return (() => {
    var _el$ = _tmpl$$q();
    St(_el$, "mouseleave", props.onMouseLeave);
    St(_el$, "mouseenter", props.onMouseEnter);
    St(_el$, "focus", props.onFocus);
    St(_el$, "click", props.onClick);
    St(_el$, "blur", props.onBlur);
    I(_el$, () => !props.hasIconOnly && Z(Text, {
      as: "span",
      kind: "body-compact-01",
      get className() {
        return button_text_recipe({
          kind: props.kind
        });
      },
      get children() {
        return props.text;
      }
    }), null);
    I(_el$, () => props.renderIcon ?? (() => {
      var _el$2 = _tmpl$2$3();
      J((_p$) => {
        var _v$5 = __default__.spacing["05"], _v$6 = __default__.spacing["05"];
        _v$5 !== _p$.e && ((_p$.e = _v$5) != null ? _el$2.style.setProperty("width", _v$5) : _el$2.style.removeProperty("width"));
        _v$6 !== _p$.t && ((_p$.t = _v$6) != null ? _el$2.style.setProperty("height", _v$6) : _el$2.style.removeProperty("height"));
        return _p$;
      });
      return _el$2;
    })(), null);
    J((_p$) => {
      var _v$ = props.type, _v$2 = [button_kind_recipe({
        kind: buttonClassName.kind
      }), button_size_recipe({
        size: buttonClassName.size
      }), props.className].join(" "), _v$3 = props.disabled, _v$4 = props.tabIndex;
      _v$ !== _p$.e && We(_el$, "type", _p$.e = _v$);
      _v$2 !== _p$.t && (_el$.className = _p$.t = _v$2);
      _v$3 !== _p$.a && (_el$.disabled = _p$.a = _v$3);
      _v$4 !== _p$.o && We(_el$, "tabindex", _p$.o = _v$4);
      return _p$;
    });
    return _el$;
  })();
};
var textInput_wrapper_style = "_1f5zvs50";
var textInput_labelWrapper_style = "_1f5zvs51";
var textInput_label_recipe = createRuntimeFn({ defaultClassName: "_1f5zvs52", variantClassNames: { disabled: { false: "_1f5zvs53", true: "_1f5zvs54" } }, defaultVariants: {}, compoundVariants: [] });
var textInput_inputWrapper_recipe = createRuntimeFn({ defaultClassName: "_1f5zvs55", variantClassNames: { size: { sm: "_1f5zvs56", md: "_1f5zvs57", lg: "_1f5zvs58" }, disabled: { false: "_1f5zvs59", true: "_1f5zvs5a" } }, defaultVariants: {}, compoundVariants: [] });
var textInput_input_recipe = createRuntimeFn({ defaultClassName: "_1f5zvs5b", variantClassNames: { disabled: { false: "_1f5zvs5c", true: "_1f5zvs5d" } }, defaultVariants: {}, compoundVariants: [] });
var textInput_invalidIcon_style = "_1f5zvs5e";
var textInput_warnIcon_style = "_1f5zvs5f";
var textInput_helper_recipe = createRuntimeFn({ defaultClassName: "_1f5zvs5g", variantClassNames: { disabled: { false: "_1f5zvs5h", true: "_1f5zvs5i" } }, defaultVariants: {}, compoundVariants: [] });
const useTextInputProps = (props) => {
  const newProps = Ht(props, {
    get size() {
      return props.size ?? "md";
    },
    get disabled() {
      return props.disabled ?? false;
    },
    get placeholder() {
      return props.placeholder ?? "";
    },
    get readOnly() {
      return props.readOnly ?? false;
    },
    get type() {
      return props.type ?? "text";
    }
  });
  return newProps;
};
const useTextInputValue = (props) => {
  const onInputHandler = (event) => {
    const target = event.target;
    if (isDefined(props.maxCount) && target.value.length > props.maxCount) {
      target.value = target.value.slice(0, props.maxCount);
    } else {
      props.setValue(target.value);
    }
    if (props.onChange) {
      props.onChange(event);
    }
  };
  return onInputHandler;
};
var _tmpl$$p = /* @__PURE__ */ ze(`<div><div></div><div><input>`);
const TextInput = (_props) => {
  const props = useTextInputProps(_props);
  const onInputHandler = useTextInputValue(props);
  return (() => {
    var _el$ = _tmpl$$p(), _el$2 = _el$.firstChild, _el$3 = _el$2.nextSibling, _el$4 = _el$3.firstChild;
    _el$.className = textInput_wrapper_style;
    _el$2.className = textInput_labelWrapper_style;
    I(_el$2, () => !props.hideLabel && Z(Text, {
      kind: "label-01",
      color: "textSecondary",
      get className() {
        return textInput_label_recipe({
          disabled: props.disabled
        });
      },
      get children() {
        return props.labelText;
      }
    }), null);
    I(_el$2, Z(Le, {
      get value() {
        return props.maxCount;
      },
      get children() {
        return Z(Text, {
          kind: "label-01",
          color: "textSecondary",
          get children() {
            return [Mt(() => props.value.length), "/", Mt(() => props.maxCount)];
          }
        });
      }
    }), null);
    St(_el$4, "click", props.onClick);
    St(_el$4, "input", onInputHandler);
    I(_el$3, Z(qe, {
      get children() {
        return [Z(Ae, {
          get is() {
            return props.status === "invalid";
          },
          get children() {
            return Z(WarningFilledIcon, {
              className: textInput_invalidIcon_style
            });
          }
        }), Z(Ae, {
          get is() {
            return props.status === "warn";
          },
          get children() {
            return Z(WarningFilledIcon, {
              className: textInput_warnIcon_style
            });
          }
        })];
      }
    }), null);
    I(_el$, Z(qe, {
      get children() {
        return [Z(Ae, {
          get is() {
            return props.status === "invalid";
          },
          get children() {
            return Z(Text, {
              kind: "helper-text-01",
              get className() {
                return textInput_helper_recipe({
                  disabled: props.disabled
                });
              },
              get children() {
                return props.invalidText;
              }
            });
          }
        }), Z(Ae, {
          get is() {
            return props.status === "warn";
          },
          get children() {
            return Z(Text, {
              kind: "helper-text-01",
              get className() {
                return textInput_helper_recipe({
                  disabled: props.disabled
                });
              },
              get children() {
                return props.warnText;
              }
            });
          }
        }), Z(Ae, {
          get is() {
            return props.status === "valid";
          },
          get children() {
            return Z(Text, {
              kind: "helper-text-01",
              get className() {
                return textInput_helper_recipe({
                  disabled: props.disabled
                });
              },
              get children() {
                return props.helperText;
              }
            });
          }
        })];
      }
    }), null);
    J((_p$) => {
      var _v$ = textInput_inputWrapper_recipe({
        size: props.size,
        disabled: props.disabled
      }), _v$2 = props.status === "invalid" ? `inset 0 0 0 0.125rem ${__default__.color.supportError}` : "", _v$3 = props.type, _v$4 = textInput_input_recipe({
        disabled: props.disabled
      }), _v$5 = props.disabled, _v$6 = props.placeholder, _v$7 = props.readOnly;
      _v$ !== _p$.e && (_el$3.className = _p$.e = _v$);
      _v$2 !== _p$.t && ((_p$.t = _v$2) != null ? _el$3.style.setProperty("box-shadow", _v$2) : _el$3.style.removeProperty("box-shadow"));
      _v$3 !== _p$.a && We(_el$4, "type", _p$.a = _v$3);
      _v$4 !== _p$.o && (_el$4.className = _p$.o = _v$4);
      _v$5 !== _p$.i && (_el$4.disabled = _p$.i = _v$5);
      _v$6 !== _p$.n && We(_el$4, "placeholder", _p$.n = _v$6);
      _v$7 !== _p$.s && (_el$4.readOnly = _p$.s = _v$7);
      return _p$;
    });
    J(() => _el$4.value = props.value);
    return _el$;
  })();
};
var section_style = "_11p63vp0";
var _tmpl$$o = /* @__PURE__ */ ze(`<section> `);
const Section = (props) => {
  return (() => {
    var _el$ = _tmpl$$o(), _el$2 = _el$.firstChild;
    _el$.className = section_style;
    I(_el$, () => props.children, _el$2);
    return _el$;
  })();
};
var spinner_wrapper_style = "_1scwsaz0";
var spinner_recipe = createRuntimeFn({ defaultClassName: "_1scwsaz2", variantClassNames: { size: { sm: "_1scwsaz3", md: "_1scwsaz4", lg: "_1scwsaz5" } }, defaultVariants: {}, compoundVariants: [] });
const useSpinnerProps = (props) => {
  const newProps = Ht(props, {
    get size() {
      return props.size ?? "sm";
    }
  });
  return newProps;
};
var _tmpl$$n = /* @__PURE__ */ ze(`<div><div>`);
const Spinner = (_props) => {
  const props = useSpinnerProps(_props);
  return (() => {
    var _el$ = _tmpl$$n(), _el$2 = _el$.firstChild;
    _el$.className = spinner_wrapper_style;
    J(() => _el$2.className = spinner_recipe({
      size: props.size
    }));
    return _el$;
  })();
};
var tooltip_wrapper_style = "_1t8zczz0";
var tooltip_backdrop_recipe = createRuntimeFn({ defaultClassName: "_1t8zczz1", variantClassNames: { kind: { standard: "_1t8zczz2", iconButton: "_1t8zczz3", definition: "_1t8zczz4" } }, defaultVariants: {}, compoundVariants: [] });
var tooltip_arrow_style = "_1t8zczz5";
var tooltip_descriptionWrapper_recipe = createRuntimeFn({ defaultClassName: "_1t8zczz6", variantClassNames: { kind: { standard: "_1t8zczz7", iconButton: "_1t8zczz8", definition: "_1t8zczz9" } }, defaultVariants: {}, compoundVariants: [] });
var tooltip_descriptionText_style = "_1t8zczza";
const getZoomLevel = () => {
  return Math.floor((window.outerWidth - 10) / window.innerWidth * 100);
};
const repositionElement = (element, position) => {
  const {
    left,
    right,
    top,
    bottom
  } = position;
  if (left) {
    element.style.left = left;
  }
  if (right) {
    element.style.right = right;
  }
  if (top) {
    element.style.top = top;
  }
  if (bottom) {
    element.style.bottom = bottom;
  }
};
const setTooltipAlignCenter = (trigger, tooltip, arrow) => {
  const {
    left: tooltipLeft
  } = calcElementAlignCenterPosition(trigger, tooltip, "absolute");
  repositionElement(tooltip, {
    left: `${tooltipLeft}px`
  });
  const {
    left: arrowLeft
  } = calcElementAlignCenterPosition(tooltip, arrow, "relative");
  repositionElement(arrow, {
    left: `${arrowLeft}px`
  });
};
const setTooltipAlignRight = (trigger, tooltip, arrow) => {
  const {
    left: tooltipLeft
  } = calcElementAlignRightPosition(trigger, tooltip);
  repositionElement(tooltip, {
    left: `${tooltipLeft}px`
  });
  const {
    left: arrowLeft
  } = calcArrowAlignRightPosition(trigger, tooltip, arrow);
  repositionElement(arrow, {
    left: `${arrowLeft}px`
  });
};
const setTooltipAlignLeft = (trigger, tooltip, arrow) => {
  repositionElement(tooltip, {
    left: "0px"
  });
  const {
    left: arrowLeft
  } = calcArrowAlignRightPosition(trigger, tooltip, arrow);
  repositionElement(arrow, {
    left: `${arrowLeft}px`
  });
};
const isTooltipOverflowRight = (tooltip) => {
  const {
    right
  } = tooltip.getBoundingClientRect();
  return window.innerWidth < right;
};
const isTooltipOverflowLeft = (tooltip) => {
  const {
    left
  } = tooltip.getBoundingClientRect();
  return left < 0;
};
const calcElementAlignCenterPosition = (anchor, target, position) => {
  const {
    left: anchorLeft,
    width: anchorWidth,
    top: anchorTop,
    height: anchorHeight
  } = anchor.getBoundingClientRect();
  const {
    width: targetWidth
  } = target.getBoundingClientRect();
  if (position === "absolute") {
    const newLeft = Math.floor(anchorLeft + anchorWidth / 2 - targetWidth / 2);
    const newTop = Math.floor(anchorTop + anchorHeight);
    return {
      left: newLeft,
      top: newTop
    };
  } else if (position === "relative") {
    const newLeft = Math.floor(anchorWidth / 2 - targetWidth / 2);
    const newTop = Math.floor(anchorTop + anchorHeight);
    return {
      left: newLeft,
      top: newTop
    };
  }
};
const calcElementAlignRightPosition = (anchor, target, position) => {
  const {
    right: anchorRight,
    top: anchorTop,
    height: anchorHeight
  } = anchor.getBoundingClientRect();
  const {
    width: targetWidth
  } = target.getBoundingClientRect();
  {
    const newLeft = Math.floor(anchorRight - targetWidth);
    const newTop = Math.floor(anchorTop + anchorHeight);
    return {
      left: newLeft,
      top: newTop
    };
  }
};
const calcArrowAlignRightPosition = (trigger, tooltip, arrow) => {
  const {
    left: triggerLeft
  } = trigger.getBoundingClientRect();
  const {
    left: tooltipLeft
  } = tooltip.getBoundingClientRect();
  const {
    left: arrowLeft
  } = calcElementAlignCenterPosition(trigger, arrow, "relative");
  const newLeft = Math.floor(arrowLeft + (triggerLeft - tooltipLeft));
  return {
    left: newLeft
  };
};
const useTooltipProps = (props) => {
  const newProps = Ht(props, {
    get kind() {
      return props.kind ?? "standard";
    },
    get showOnHoverOrClick() {
      return props.showOnHoverOrClick ?? "hover";
    }
  }, {
    children: ["children"]
  });
  return newProps;
};
const useTooltipToggle = (props) => {
  const [showTooltip, setShowTooltip] = b(false);
  const onMouseOverHandler = () => {
    if (props.showOnHoverOrClick === "hover") {
      setShowTooltip(true);
    }
  };
  const onMouseOutHandler = () => {
    if (props.showOnHoverOrClick === "hover") {
      setShowTooltip(false);
    }
  };
  const onClickHandler = () => {
    if (props.showOnHoverOrClick === "click") {
      setShowTooltip(true);
      setTimeout(() => {
        setShowTooltip(false);
      }, 3e3);
    }
  };
  return {
    showTooltip,
    onMouseOverHandler,
    onMouseOutHandler,
    onClickHandler
  };
};
const useTooltipPosition = (showTooltip, trigger) => {
  const tooltipElementObject = It();
  let previousZoom = -1;
  const setTooltipPosition = () => {
    const tooltipElement = tooltipElementObject.current;
    const arrowElement = tooltipElementObject.current.children[0];
    const triggerElement = getTriggerElement(trigger);
    previousZoom = getZoomLevel();
    setTooltipAlignCenter(triggerElement, tooltipElement, arrowElement);
    if (isTooltipOverflowRight(tooltipElement)) {
      setTooltipAlignRight(triggerElement, tooltipElement, arrowElement);
    } else if (isTooltipOverflowLeft(tooltipElement)) {
      setTooltipAlignLeft(triggerElement, tooltipElement, arrowElement);
    }
  };
  Xe(() => {
    window.addEventListener("resize", setTooltipPosition);
  });
  Qe(() => {
    window.removeEventListener("resize", setTooltipPosition);
  });
  $(() => {
    if (showTooltip() && previousZoom !== getZoomLevel() && tooltipElementObject.current) {
      setTooltipPosition();
    }
  }, [showTooltip]);
  return tooltipElementObject;
};
const getTriggerElement = (trigger) => {
  if (isHTMLElement(trigger)) {
    return trigger;
  } else if (p(trigger)) {
    return trigger.getNodes()[0];
  }
};
var _tmpl$$m = /* @__PURE__ */ ze(`<div><div><div>`);
const Tooltip = (_props) => {
  const props = useTooltipProps(_props);
  const {
    showTooltip,
    onMouseOverHandler,
    onMouseOutHandler,
    onClickHandler
  } = useTooltipToggle(props);
  const tooltipElement = useTooltipPosition(showTooltip, props.children);
  return (() => {
    var _el$ = _tmpl$$m(), _el$2 = _el$.firstChild, _el$3 = _el$2.firstChild;
    St(_el$, "click", onClickHandler);
    St(_el$, "mouseout", onMouseOutHandler);
    St(_el$, "mouseover", onMouseOverHandler);
    _el$.className = tooltip_wrapper_style;
    I(_el$, () => props.children, _el$2);
    We(_el$2, "element", tooltipElement);
    I(_el$2, Z(TooltipArrowIcon, {
      className: tooltip_arrow_style
    }), _el$3);
    I(_el$3, Z(Text, {
      kind: "body-01",
      color: "textInverse",
      className: tooltip_descriptionText_style,
      get children() {
        return props.description;
      }
    }));
    J((_p$) => {
      var _v$ = tooltip_backdrop_recipe({
        kind: props.kind
      }), _v$2 = showTooltip() ? "visible" : "hidden", _v$3 = tooltip_descriptionWrapper_recipe({
        kind: props.kind
      });
      _v$ !== _p$.e && (_el$2.className = _p$.e = _v$);
      _v$2 !== _p$.t && ((_p$.t = _v$2) != null ? _el$2.style.setProperty("visibility", _v$2) : _el$2.style.removeProperty("visibility"));
      _v$3 !== _p$.a && (_el$3.className = _p$.a = _v$3);
      return _p$;
    });
    return _el$;
  })();
};
var shell_wrapper_style = "_1f892tw0";
var shell_bodyWrapper_style = "_1f892tw1";
var shell_body_style = "_1f892tw2";
var _tmpl$$l = /* @__PURE__ */ ze(`<div><main><div>`);
const Shell = (props) => {
  return (() => {
    var _el$ = _tmpl$$l(), _el$2 = _el$.firstChild, _el$3 = _el$2.firstChild;
    _el$.className = shell_wrapper_style;
    I(_el$, () => props.header, _el$2);
    _el$2.className = shell_bodyWrapper_style;
    I(_el$2, () => props.panel, _el$3);
    _el$3.className = shell_body_style;
    I(_el$3, () => props.body);
    return _el$;
  })();
};
var body_style = "_469ctn0";
const useBodyProps = (props) => {
  const newProps = Ht(props, {
    get as() {
      return props.as ?? "div";
    }
  });
  return newProps;
};
const Body = (_props) => {
  const props = useBodyProps(_props);
  return Z(Ot, {
    get as() {
      return props.as;
    },
    className: body_style,
    get children() {
      return props.children;
    }
  });
};
var header_wrapper_style = "_14cqm2a0";
var header_content_style = "_14cqm2a1";
var _tmpl$$k = /* @__PURE__ */ ze(`<header><div>`);
const Header$1 = (props) => {
  return (() => {
    var _el$ = _tmpl$$k(), _el$2 = _el$.firstChild;
    _el$.className = header_wrapper_style;
    _el$2.className = header_content_style;
    I(_el$2, () => props.children);
    return _el$;
  })();
};
var headerGlobalAction_li_style = "_8qwwvc0";
var headerGlobalAction_button_recipe = createRuntimeFn({ defaultClassName: "_8qwwvc1", variantClassNames: { isActive: { true: "_8qwwvc2" } }, defaultVariants: {}, compoundVariants: [] });
const useHeaderGlobalActionProps = (props) => {
  const newProps = Ht(props, {
    get className() {
      return props.className ?? "";
    },
    get isActive() {
      return props.isActive ?? false;
    }
  });
  return newProps;
};
var _tmpl$$j = /* @__PURE__ */ ze(`<button>`), _tmpl$2$2 = /* @__PURE__ */ ze(`<li>`);
const HeaderGlobalAction = (_props) => {
  const props = useHeaderGlobalActionProps(_props);
  return (() => {
    var _el$ = _tmpl$2$2();
    I(_el$, Z(qe, {
      get children() {
        return [Z(Ae, {
          get is() {
            return isDefined(props.tooltip);
          },
          get children() {
            return Z(Tooltip, {
              get description() {
                return props.tooltip;
              },
              get children() {
                var _el$2 = _tmpl$$j();
                St(_el$2, "click", props.onClick);
                I(_el$2, () => props.children);
                J(() => _el$2.className = headerGlobalAction_button_recipe({
                  isActive: props.isActive
                }));
                return _el$2;
              }
            });
          }
        }), Z(Ae, {
          get is() {
            return !isDefined(props.tooltip);
          },
          get children() {
            var _el$3 = _tmpl$$j();
            St(_el$3, "click", props.onClick);
            I(_el$3, () => props.children);
            J(() => _el$3.className = headerGlobalAction_button_recipe({
              isActive: props.isActive
            }));
            return _el$3;
          }
        })];
      }
    }));
    J(() => _el$.className = [headerGlobalAction_li_style, props.className].join(" "));
    return _el$;
  })();
};
var headerGlobalBar_style = "v924by0";
var _tmpl$$i = /* @__PURE__ */ ze(`<ul>`);
const HeaderGlobalBar = (props) => {
  return (() => {
    var _el$ = _tmpl$$i();
    _el$.className = headerGlobalBar_style;
    I(_el$, () => props.children);
    return _el$;
  })();
};
var headerHr_style = "_17yhv9v0";
var _tmpl$$h = /* @__PURE__ */ ze(`<hr>`);
const HeaderHr = () => {
  return (() => {
    var _el$ = _tmpl$$h();
    _el$.className = headerHr_style;
    return _el$;
  })();
};
var headerMenuButton_button_style = "_1wciidy0";
var headerMenuButton_icon_style = "_1wciidy1";
const rvjsUIThemeContext = gt();
const RvjsUIProvider = (props) => {
  const [showSideNav, setShowSideNav] = b(false);
  rvjsUIThemeContext.setContext({
    showSideNav,
    setShowSideNav
  });
  return props.children;
};
const useHeaderMenuButtonSideNav = (props) => {
  const {
    showSideNav,
    setShowSideNav
  } = rvjsUIThemeContext.getContext();
  const onClickHandler = (event) => {
    setShowSideNav(!showSideNav());
    if (props.onClick) {
      props.onClick(event);
    }
  };
  return {
    onClickHandler,
    showSideNav
  };
};
var _tmpl$$g = /* @__PURE__ */ ze(`<button type=button>`);
const HeaderMenuButton = (props) => {
  const {
    onClickHandler,
    showSideNav
  } = useHeaderMenuButtonSideNav(props);
  return (() => {
    var _el$ = _tmpl$$g();
    St(_el$, "click", onClickHandler);
    _el$.className = headerMenuButton_button_style;
    I(_el$, Z(P, {
      get by() {
        return showSideNav();
      },
      get children() {
        return showSideNav() ? Z(CloseIcon, {
          className: headerMenuButton_icon_style
        }) : Z(MenuIcon, {
          className: headerMenuButton_icon_style
        });
      }
    }));
    return _el$;
  })();
};
var headerMenuItem_li_style = "mscgr00";
var headerMenuItem_anchor_recipe = createRuntimeFn({ defaultClassName: "mscgr01", variantClassNames: { isActive: { true: "mscgr02" } }, defaultVariants: {}, compoundVariants: [] });
var headerMenuItem_text_recipe = createRuntimeFn({ defaultClassName: "mscgr03", variantClassNames: { isActive: { true: "mscgr04" } }, defaultVariants: {}, compoundVariants: [] });
const useHeaderMenuItemProps = (props) => {
  const newProps = Ht(props, {
    get isActive() {
      return props.isActive ?? false;
    },
    get tabIndex() {
      return props.tabIndex ?? 0;
    }
  });
  return newProps;
};
const useHeaderMenuItemNavigation = (props) => {
  const navigate = xt();
  const onClickHandler = (event) => {
    event.preventDefault();
    navigate(props.href, props.isExternal);
  };
  return onClickHandler;
};
var _tmpl$$f = /* @__PURE__ */ ze(`<li tabindex=-1><a>`);
const HeaderMenuItem = (_props) => {
  const props = useHeaderMenuItemProps(_props);
  const onClickHandler = useHeaderMenuItemNavigation(props);
  return (() => {
    var _el$ = _tmpl$$f(), _el$2 = _el$.firstChild;
    _el$.className = headerMenuItem_li_style;
    St(_el$2, "click", onClickHandler);
    I(_el$2, Z(Text, {
      kind: "body-compact-01",
      color: "textSecondary",
      get className() {
        return headerMenuItem_text_recipe({
          isActive: props.isActive
        });
      },
      get children() {
        return props.text;
      }
    }));
    J((_p$) => {
      var _v$ = headerMenuItem_anchor_recipe({
        isActive: props.isActive
      }), _v$2 = props.href, _v$3 = props.tabIndex;
      _v$ !== _p$.e && (_el$2.className = _p$.e = _v$);
      _v$2 !== _p$.t && We(_el$2, "href", _p$.t = _v$2);
      _v$3 !== _p$.a && We(_el$2, "tabindex", _p$.a = _v$3);
      return _p$;
    });
    return _el$;
  })();
};
var headerName_style = "_1ac36gm0";
const useHeaderNameNavigation = (props) => {
  const navigate = xt();
  const onClickHandler = (event) => {
    event.preventDefault();
    navigate(props.href, props.isExternal);
  };
  return onClickHandler;
};
var _tmpl$$e = /* @__PURE__ */ ze(`<a>`);
const HeaderName = (props) => {
  const onClickHandler = useHeaderNameNavigation(props);
  return (() => {
    var _el$ = _tmpl$$e();
    St(_el$, "click", onClickHandler);
    _el$.className = headerName_style;
    I(_el$, Z(Le, {
      get value() {
        return props.prefix;
      },
      get children() {
        return Z(Text, {
          kind: "body-compact-01",
          color: "textPrimary",
          get children() {
            return props.prefix;
          }
        });
      }
    }), null);
    I(_el$, Z(Text, {
      kind: "heading-compact-01",
      color: "textPrimary",
      get children() {
        return props.title;
      }
    }), null);
    J(() => We(_el$, "href", props.href));
    return _el$;
  })();
};
var headerNavigation_nav_style = "_1crsv1t0";
var headerNavigation_ul_style = "_1crsv1t1";
var _tmpl$$d = /* @__PURE__ */ ze(`<nav><ul>`);
const HeaderNavigation = (props) => {
  return (() => {
    var _el$ = _tmpl$$d(), _el$2 = _el$.firstChild;
    _el$.className = headerNavigation_nav_style;
    _el$2.className = headerNavigation_ul_style;
    I(_el$2, () => props.children);
    return _el$;
  })();
};
var subMenu_wrapper_style = "p1ysaz0";
var subMenu_button_recipe = createRuntimeFn({ defaultClassName: "p1ysaz1", variantClassNames: { isSelected: { true: "p1ysaz2", false: "p1ysaz3" } }, defaultVariants: {}, compoundVariants: [] });
var subMenu_text_style = "p1ysaz4";
var subMenu_iconWrapper_style = "p1ysaz5";
var subMenu_icon_recipe = createRuntimeFn({ defaultClassName: "p1ysaz6", variantClassNames: { isSelected: { true: "p1ysaz7" } }, defaultVariants: {}, compoundVariants: [] });
var subMenu_dropDown_recipe = createRuntimeFn({ defaultClassName: "p1ysaz8", variantClassNames: { isSelected: { true: "p1ysaz9", false: "p1ysaza" } }, defaultVariants: {}, compoundVariants: [] });
const subMenuContext = gt();
const useSubMenuProps = (props) => {
  const newProps = Ht(props, {
    get ariaLabel() {
      return props.ariaLabel ?? null;
    },
    get tabIndex() {
      return props.tabIndex ?? 0;
    }
  });
  return newProps;
};
const useSubMenuToggle = (props) => {
  const {
    onClick,
    onBlur
  } = props;
  const [showItems, setShowItems] = b(false);
  const subMenuElement = It();
  subMenuContext.setContext({
    showItems,
    setShowItems
  });
  const handleClickOutside = (event) => {
    if (subMenuElement.current && event.target) {
      if (!subMenuElement.current.contains(event.target)) {
        setShowItems(false);
      }
    }
  };
  const onClickHandler = (event) => {
    setShowItems(!showItems());
    if (onClick) {
      onClick(event);
    }
  };
  const onBlurHandler = (event) => {
    if (onBlur) {
      onBlur(event);
    }
  };
  Xe(() => {
    document.addEventListener("mousedown", handleClickOutside);
  });
  Qe(() => {
    document.removeEventListener("mousedown", handleClickOutside);
  });
  return {
    showItems,
    subMenuElement,
    onClickHandler,
    onBlurHandler
  };
};
var noDrag_style = "ep835p0";
var coolScrollBar_style = "ep835p1";
var _tmpl$$c = /* @__PURE__ */ ze(`<div><button><div></div></button><ul>`);
const SubMenu = (_props) => {
  const props = useSubMenuProps(_props);
  const {
    showItems,
    subMenuElement,
    onClickHandler,
    onBlurHandler
  } = useSubMenuToggle(props);
  return (() => {
    var _el$ = _tmpl$$c(), _el$2 = _el$.firstChild, _el$3 = _el$2.firstChild, _el$4 = _el$2.nextSibling;
    We(_el$, "element", subMenuElement);
    _el$.className = subMenu_wrapper_style;
    St(_el$2, "blur", onBlurHandler);
    St(_el$2, "click", onClickHandler);
    I(_el$2, Z(Text, {
      kind: "body-compact-01",
      color: "textSecondary",
      get className() {
        return [subMenu_text_style, noDrag_style].join(" ");
      },
      get children() {
        return props.menuName;
      }
    }), _el$3);
    _el$3.className = subMenu_iconWrapper_style;
    I(_el$3, Z(ChevronDownIcon, {
      get className() {
        return subMenu_icon_recipe({
          isSelected: showItems()
        });
      }
    }));
    I(_el$4, () => props.children);
    J((_p$) => {
      var _v$ = props.ariaLabel, _v$2 = props.focusElement, _v$3 = subMenu_button_recipe({
        isSelected: showItems()
      }), _v$4 = props.tabIndex, _v$5 = subMenu_dropDown_recipe({
        isSelected: showItems()
      });
      _v$ !== _p$.e && We(_el$, "aria-label", _p$.e = _v$);
      _v$2 !== _p$.t && We(_el$2, "element", _p$.t = _v$2);
      _v$3 !== _p$.a && (_el$2.className = _p$.a = _v$3);
      _v$4 !== _p$.o && We(_el$2, "tabindex", _p$.o = _v$4);
      _v$5 !== _p$.i && (_el$4.className = _p$.i = _v$5);
      return _p$;
    });
    return _el$;
  })();
};
var subMenuItem_li_style = "zdk5130";
var subMenuItem_anchor_recipe = createRuntimeFn({ defaultClassName: "zdk5131", variantClassNames: { isActive: { true: "zdk5132" } }, defaultVariants: {}, compoundVariants: [] });
var subMenuItem_text_recipe = createRuntimeFn({ defaultClassName: "zdk5133", variantClassNames: { isActive: { true: "zdk5134" } }, defaultVariants: {}, compoundVariants: [] });
const useSubMenuItemProps = (props) => {
  const newProps = Ht(props, {
    get isActive() {
      return props.isActive ?? false;
    },
    get tabIndex() {
      return props.tabIndex ?? 0;
    }
  });
  return newProps;
};
const useSubMenuNavigation = (props) => {
  const {
    setShowItems
  } = subMenuContext.getContext();
  const navigate = xt();
  const onClickHandler = (event) => {
    event.preventDefault();
    navigate(props.href, props.isExternal);
    setShowItems(false);
  };
  return onClickHandler;
};
var _tmpl$$b = /* @__PURE__ */ ze(`<li tabindex=-1><a>`);
const SubMenuItem = (_props) => {
  const props = useSubMenuItemProps(_props);
  const onClickHandler = useSubMenuNavigation(props);
  return (() => {
    var _el$ = _tmpl$$b(), _el$2 = _el$.firstChild;
    _el$.className = subMenuItem_li_style;
    St(_el$2, "click", onClickHandler);
    I(_el$2, Z(Text, {
      kind: "body-compact-01",
      color: "textSecondary",
      get className() {
        return subMenuItem_text_recipe({
          isActive: props.isActive
        });
      },
      get children() {
        return props.text;
      }
    }));
    J((_p$) => {
      var _v$ = subMenuItem_anchor_recipe({
        isActive: props.isActive
      }), _v$2 = props.href, _v$3 = props.tabIndex;
      _v$ !== _p$.e && (_el$2.className = _p$.e = _v$);
      _v$2 !== _p$.t && We(_el$2, "href", _p$.t = _v$2);
      _v$3 !== _p$.a && We(_el$2, "tabindex", _p$.a = _v$3);
      return _p$;
    });
    return _el$;
  })();
};
var sideNav_wrapper_recipe = createRuntimeFn({ defaultClassName: "_14b80qu0", variantClassNames: { isOpen: { true: "_14b80qu1", false: "_14b80qu2" } }, defaultVariants: {}, compoundVariants: [] });
var sideNav_nav_recipe = createRuntimeFn({ defaultClassName: "_14b80qu3", variantClassNames: { isOpen: { true: "_14b80qu4", false: "_14b80qu5" } }, defaultVariants: {}, compoundVariants: [] });
var sideNav_backdrop_style = "_14b80qu6";
const useSideNavToggle = () => {
  const {
    showSideNav,
    setShowSideNav
  } = rvjsUIThemeContext.getContext();
  const sideNavBackdropElement = It();
  Xe(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth >= 768) {
        setShowSideNav(false);
      }
    });
  });
  const onBackdropClickHandler = () => {
    setShowSideNav(false);
  };
  return {
    sideNavBackdropElement,
    showSideNav,
    onBackdropClickHandler
  };
};
var _tmpl$$a = /* @__PURE__ */ ze(`<div>`), _tmpl$2$1 = /* @__PURE__ */ ze(`<section><nav>`);
const SideNav = (props) => {
  const {
    sideNavBackdropElement,
    showSideNav,
    onBackdropClickHandler
  } = useSideNavToggle();
  return (() => {
    var _el$ = _tmpl$2$1(), _el$2 = _el$.firstChild;
    I(_el$2, () => props.children);
    I(_el$, Z(Ye, {
      get is() {
        return showSideNav();
      },
      get children() {
        var _el$3 = _tmpl$$a();
        St(_el$3, "click", onBackdropClickHandler);
        We(_el$3, "element", sideNavBackdropElement);
        _el$3.className = sideNav_backdrop_style;
        return _el$3;
      }
    }), null);
    J((_p$) => {
      var _v$ = [sideNav_wrapper_recipe({
        isOpen: showSideNav()
      }), coolScrollBar_style].join(" "), _v$2 = sideNav_nav_recipe({
        isOpen: showSideNav()
      });
      _v$ !== _p$.e && (_el$.className = _p$.e = _v$);
      _v$2 !== _p$.t && (_el$2.className = _p$.t = _v$2);
      return _p$;
    });
    return _el$;
  })();
};
var sideNavItems_style = "_1dw73m30";
var _tmpl$$9 = /* @__PURE__ */ ze(`<ul>`);
const SideNavItems = (props) => {
  return (() => {
    var _el$ = _tmpl$$9();
    _el$.className = sideNavItems_style;
    I(_el$, () => props.children);
    return _el$;
  })();
};
var sideNavLink_style = "_7qts2a0";
var sideNavLink_anchor_recipe = createRuntimeFn({ defaultClassName: "_7qts2a1", variantClassNames: { isActive: { true: "_7qts2a2" } }, defaultVariants: {}, compoundVariants: [] });
var sideNavLink_text_recipe = createRuntimeFn({ defaultClassName: "_7qts2a3", variantClassNames: { isActive: { true: "_7qts2a4" } }, defaultVariants: {}, compoundVariants: [] });
const useSideNavLinkProps = (props) => {
  const newProps = Ht(props, {
    get isActive() {
      return props.isActive ?? true;
    },
    get tabIndex() {
      return props.tabIndex ?? 0;
    }
  });
  return newProps;
};
const useSideNavLinkNavigation = (props) => {
  const navigate = xt();
  const onClickHandler = (event) => {
    event.preventDefault();
    navigate(props.href, props.isExternal);
  };
  return onClickHandler;
};
var _tmpl$$8 = /* @__PURE__ */ ze(`<li tabindex=-1><a>`);
const SideNavLink = (_props) => {
  const props = useSideNavLinkProps(_props);
  const onClickHandler = useSideNavLinkNavigation(props);
  return (() => {
    var _el$ = _tmpl$$8(), _el$2 = _el$.firstChild;
    _el$.className = sideNavLink_style;
    St(_el$2, "click", onClickHandler);
    I(_el$2, Z(Text, {
      kind: "heading-compact-01",
      color: "textSecondary",
      get className() {
        return sideNavLink_text_recipe({
          isActive: props.isActive
        });
      },
      get children() {
        return props.text;
      }
    }));
    J((_p$) => {
      var _v$ = props.href, _v$2 = props.tabIndex, _v$3 = sideNavLink_anchor_recipe({
        isActive: props.isActive
      });
      _v$ !== _p$.e && We(_el$2, "href", _p$.e = _v$);
      _v$2 !== _p$.t && We(_el$2, "tabindex", _p$.t = _v$2);
      _v$3 !== _p$.a && (_el$2.className = _p$.a = _v$3);
      return _p$;
    });
    return _el$;
  })();
};
var sideNavMenu_wrapper_style = "_1ozopjz0";
var sideNavMenu_button_style = "_1ozopjz1";
var sideNavMenu_text_style = "_1ozopjz2";
var sideNavMenu_iconWrapper_style = "_1ozopjz3";
var sideNavMenu_icon_recipe = createRuntimeFn({ defaultClassName: "_1ozopjz4", variantClassNames: { isShow: { true: "_1ozopjz5", false: "_1ozopjz6" } }, defaultVariants: {}, compoundVariants: [] });
var sideNavMenu_ul_recipe = createRuntimeFn({ defaultClassName: "_1ozopjz7", variantClassNames: { isShow: { true: "_1ozopjz8", false: "_1ozopjz9" } }, defaultVariants: {}, compoundVariants: [] });
const useSideNavMenuProps = (props) => {
  const newProps = Ht(props, {
    get ariaLabel() {
      return props.ariaLabel ?? null;
    },
    get tabIndex() {
      return props.tabIndex ?? 0;
    },
    get defaultShow() {
      return props.defaultShow ?? false;
    }
  });
  return newProps;
};
const useSideNavMenuToggle = (props) => {
  const [showItems, setShowItems] = b(props.defaultShow);
  const onClickHandler = (event) => {
    setShowItems(!showItems());
    if (props.onClick) {
      props.onClick(event);
    }
  };
  const onBlurHandler = (event) => {
    if (props.onBlur) {
      props.onBlur(event);
    }
  };
  return {
    showItems,
    onClickHandler,
    onBlurHandler
  };
};
var _tmpl$$7 = /* @__PURE__ */ ze(`<div><button><div></div></button><ul>`);
const SideNavMenu = (_props) => {
  const props = useSideNavMenuProps(_props);
  const {
    showItems,
    onClickHandler,
    onBlurHandler
  } = useSideNavMenuToggle(props);
  return (() => {
    var _el$ = _tmpl$$7(), _el$2 = _el$.firstChild, _el$3 = _el$2.firstChild, _el$4 = _el$2.nextSibling;
    _el$.className = sideNavMenu_wrapper_style;
    St(_el$2, "blur", onBlurHandler);
    St(_el$2, "click", onClickHandler);
    _el$2.className = sideNavMenu_button_style;
    I(_el$2, Z(Text, {
      kind: "heading-compact-01",
      color: "textSecondary",
      get className() {
        return [sideNavMenu_text_style, noDrag_style].join(" ");
      },
      get children() {
        return props.menuName;
      }
    }), _el$3);
    _el$3.className = sideNavMenu_iconWrapper_style;
    I(_el$3, Z(ChevronDownIcon, {
      get className() {
        return sideNavMenu_icon_recipe({
          isShow: showItems()
        });
      }
    }));
    I(_el$4, () => props.children);
    J((_p$) => {
      var _v$ = props.ariaLabel, _v$2 = props.focusElement, _v$3 = props.tabIndex, _v$4 = sideNavMenu_ul_recipe({
        isShow: showItems()
      });
      _v$ !== _p$.e && We(_el$, "aria-label", _p$.e = _v$);
      _v$2 !== _p$.t && We(_el$2, "element", _p$.t = _v$2);
      _v$3 !== _p$.a && We(_el$2, "tabindex", _p$.a = _v$3);
      _v$4 !== _p$.o && (_el$4.className = _p$.o = _v$4);
      return _p$;
    });
    return _el$;
  })();
};
var sideNavMenuItem_wrapper_style = "uwis0g0";
var sideNavMenuItem_anchor_recipe = createRuntimeFn({ defaultClassName: "uwis0g1", variantClassNames: { isActive: { true: "uwis0g2" } }, defaultVariants: {}, compoundVariants: [] });
var sideNavMenuItem_text_recipe = createRuntimeFn({ defaultClassName: "uwis0g3", variantClassNames: { isActive: { true: "uwis0g4" } }, defaultVariants: {}, compoundVariants: [] });
const useSideNavMenuItemProps = (props) => {
  const newProps = Ht(props, {
    get isActive() {
      return props.isActive ?? true;
    },
    get tabIndex() {
      return props.tabIndex ?? 0;
    }
  });
  return newProps;
};
const useSideNavMenuItemNavigation = (props) => {
  const navigate = xt();
  const onClickHandler = (event) => {
    event.preventDefault();
    navigate(props.href, props.isExternal);
  };
  return onClickHandler;
};
var _tmpl$$6 = /* @__PURE__ */ ze(`<li tabindex=-1><a>`);
const SideNavMenuItem = (_props) => {
  const props = useSideNavMenuItemProps(_props);
  const onClickHandler = useSideNavMenuItemNavigation(props);
  return (() => {
    var _el$ = _tmpl$$6(), _el$2 = _el$.firstChild;
    _el$.className = sideNavMenuItem_wrapper_style;
    St(_el$2, "click", onClickHandler);
    I(_el$2, Z(Text, {
      kind: "body-compact-01",
      color: "textSecondary",
      get className() {
        return sideNavMenuItem_text_recipe({
          isActive: props.isActive
        });
      },
      get children() {
        return props.text;
      }
    }));
    J((_p$) => {
      var _v$ = props.href, _v$2 = sideNavMenuItem_anchor_recipe({
        isActive: props.isActive
      }), _v$3 = props.tabIndex;
      _v$ !== _p$.e && We(_el$2, "href", _p$.e = _v$);
      _v$2 !== _p$.t && (_el$2.className = _p$.t = _v$2);
      _v$3 !== _p$.a && We(_el$2, "tabindex", _p$.a = _v$3);
      return _p$;
    });
    return _el$;
  })();
};
var highlight_style = "hpt0bp0";
var _tmpl$$5$1 = /* @__PURE__ */ ze(`<mark>`);
const Highlight = (props) => {
  return (() => {
    var _el$ = _tmpl$$5$1();
    _el$.className = highlight_style;
    I(_el$, () => props.children);
    return _el$;
  })();
};
const useCodeSnippetProps = (props) => {
  const newProps = Ht(props, {
    get type() {
      return props.type ?? "single";
    }
  });
  return newProps;
};
var inlineCodeSnippet_button_style = "_1ta04r70";
var inlineCodeSnippet_code_style = "_1ta04r71";
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
var prism = { exports: {} };
(function(module) {
  var _self = typeof window !== "undefined" ? window : typeof WorkerGlobalScope !== "undefined" && self instanceof WorkerGlobalScope ? self : {};
  /**
   * Prism: Lightweight, robust, elegant syntax highlighting
   *
   * @license MIT <https://opensource.org/licenses/MIT>
   * @author Lea Verou <https://lea.verou.me>
   * @namespace
   * @public
   */
  var Prism2 = function(_self2) {
    var lang = /(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i;
    var uniqueId = 0;
    var plainTextGrammar = {};
    var _ = {
      /**
       * By default, Prism will attempt to highlight all code elements (by calling {@link Prism.highlightAll}) on the
       * current page after the page finished loading. This might be a problem if e.g. you wanted to asynchronously load
       * additional languages or plugins yourself.
       *
       * By setting this value to `true`, Prism will not automatically highlight all code elements on the page.
       *
       * You obviously have to change this value before the automatic highlighting started. To do this, you can add an
       * empty Prism object into the global scope before loading the Prism script like this:
       *
       * ```js
       * window.Prism = window.Prism || {};
       * Prism.manual = true;
       * // add a new <script> to load Prism's script
       * ```
       *
       * @default false
       * @type {boolean}
       * @memberof Prism
       * @public
       */
      manual: _self2.Prism && _self2.Prism.manual,
      /**
       * By default, if Prism is in a web worker, it assumes that it is in a worker it created itself, so it uses
       * `addEventListener` to communicate with its parent instance. However, if you're using Prism manually in your
       * own worker, you don't want it to do this.
       *
       * By setting this value to `true`, Prism will not add its own listeners to the worker.
       *
       * You obviously have to change this value before Prism executes. To do this, you can add an
       * empty Prism object into the global scope before loading the Prism script like this:
       *
       * ```js
       * window.Prism = window.Prism || {};
       * Prism.disableWorkerMessageHandler = true;
       * // Load Prism's script
       * ```
       *
       * @default false
       * @type {boolean}
       * @memberof Prism
       * @public
       */
      disableWorkerMessageHandler: _self2.Prism && _self2.Prism.disableWorkerMessageHandler,
      /**
       * A namespace for utility methods.
       *
       * All function in this namespace that are not explicitly marked as _public_ are for __internal use only__ and may
       * change or disappear at any time.
       *
       * @namespace
       * @memberof Prism
       */
      util: {
        encode: function encode(tokens) {
          if (tokens instanceof Token) {
            return new Token(tokens.type, encode(tokens.content), tokens.alias);
          } else if (Array.isArray(tokens)) {
            return tokens.map(encode);
          } else {
            return tokens.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ");
          }
        },
        /**
         * Returns the name of the type of the given value.
         *
         * @param {any} o
         * @returns {string}
         * @example
         * type(null)      === 'Null'
         * type(undefined) === 'Undefined'
         * type(123)       === 'Number'
         * type('foo')     === 'String'
         * type(true)      === 'Boolean'
         * type([1, 2])    === 'Array'
         * type({})        === 'Object'
         * type(String)    === 'Function'
         * type(/abc+/)    === 'RegExp'
         */
        type: function(o) {
          return Object.prototype.toString.call(o).slice(8, -1);
        },
        /**
         * Returns a unique number for the given object. Later calls will still return the same number.
         *
         * @param {Object} obj
         * @returns {number}
         */
        objId: function(obj) {
          if (!obj["__id"]) {
            Object.defineProperty(obj, "__id", { value: ++uniqueId });
          }
          return obj["__id"];
        },
        /**
         * Creates a deep clone of the given object.
         *
         * The main intended use of this function is to clone language definitions.
         *
         * @param {T} o
         * @param {Record<number, any>} [visited]
         * @returns {T}
         * @template T
         */
        clone: function deepClone(o, visited) {
          visited = visited || {};
          var clone;
          var id;
          switch (_.util.type(o)) {
            case "Object":
              id = _.util.objId(o);
              if (visited[id]) {
                return visited[id];
              }
              clone = /** @type {Record<string, any>} */
              {};
              visited[id] = clone;
              for (var key in o) {
                if (o.hasOwnProperty(key)) {
                  clone[key] = deepClone(o[key], visited);
                }
              }
              return (
                /** @type {any} */
                clone
              );
            case "Array":
              id = _.util.objId(o);
              if (visited[id]) {
                return visited[id];
              }
              clone = [];
              visited[id] = clone;
              /** @type {Array} */
              /** @type {any} */
              o.forEach(function(v, i) {
                clone[i] = deepClone(v, visited);
              });
              return (
                /** @type {any} */
                clone
              );
            default:
              return o;
          }
        },
        /**
         * Returns the Prism language of the given element set by a `language-xxxx` or `lang-xxxx` class.
         *
         * If no language is set for the element or the element is `null` or `undefined`, `none` will be returned.
         *
         * @param {Element} element
         * @returns {string}
         */
        getLanguage: function(element) {
          while (element) {
            var m = lang.exec(element.className);
            if (m) {
              return m[1].toLowerCase();
            }
            element = element.parentElement;
          }
          return "none";
        },
        /**
         * Sets the Prism `language-xxxx` class of the given element.
         *
         * @param {Element} element
         * @param {string} language
         * @returns {void}
         */
        setLanguage: function(element, language) {
          element.className = element.className.replace(RegExp(lang, "gi"), "");
          element.classList.add("language-" + language);
        },
        /**
         * Returns the script element that is currently executing.
         *
         * This does __not__ work for line script element.
         *
         * @returns {HTMLScriptElement | null}
         */
        currentScript: function() {
          if (typeof document === "undefined") {
            return null;
          }
          if ("currentScript" in document && 1 < 2) {
            return (
              /** @type {any} */
              document.currentScript
            );
          }
          try {
            throw new Error();
          } catch (err) {
            var src = (/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(err.stack) || [])[1];
            if (src) {
              var scripts = document.getElementsByTagName("script");
              for (var i in scripts) {
                if (scripts[i].src == src) {
                  return scripts[i];
                }
              }
            }
            return null;
          }
        },
        /**
         * Returns whether a given class is active for `element`.
         *
         * The class can be activated if `element` or one of its ancestors has the given class and it can be deactivated
         * if `element` or one of its ancestors has the negated version of the given class. The _negated version_ of the
         * given class is just the given class with a `no-` prefix.
         *
         * Whether the class is active is determined by the closest ancestor of `element` (where `element` itself is
         * closest ancestor) that has the given class or the negated version of it. If neither `element` nor any of its
         * ancestors have the given class or the negated version of it, then the default activation will be returned.
         *
         * In the paradoxical situation where the closest ancestor contains __both__ the given class and the negated
         * version of it, the class is considered active.
         *
         * @param {Element} element
         * @param {string} className
         * @param {boolean} [defaultActivation=false]
         * @returns {boolean}
         */
        isActive: function(element, className, defaultActivation) {
          var no = "no-" + className;
          while (element) {
            var classList = element.classList;
            if (classList.contains(className)) {
              return true;
            }
            if (classList.contains(no)) {
              return false;
            }
            element = element.parentElement;
          }
          return !!defaultActivation;
        }
      },
      /**
       * This namespace contains all currently loaded languages and the some helper functions to create and modify languages.
       *
       * @namespace
       * @memberof Prism
       * @public
       */
      languages: {
        /**
         * The grammar for plain, unformatted text.
         */
        plain: plainTextGrammar,
        plaintext: plainTextGrammar,
        text: plainTextGrammar,
        txt: plainTextGrammar,
        /**
         * Creates a deep copy of the language with the given id and appends the given tokens.
         *
         * If a token in `redef` also appears in the copied language, then the existing token in the copied language
         * will be overwritten at its original position.
         *
         * ## Best practices
         *
         * Since the position of overwriting tokens (token in `redef` that overwrite tokens in the copied language)
         * doesn't matter, they can technically be in any order. However, this can be confusing to others that trying to
         * understand the language definition because, normally, the order of tokens matters in Prism grammars.
         *
         * Therefore, it is encouraged to order overwriting tokens according to the positions of the overwritten tokens.
         * Furthermore, all non-overwriting tokens should be placed after the overwriting ones.
         *
         * @param {string} id The id of the language to extend. This has to be a key in `Prism.languages`.
         * @param {Grammar} redef The new tokens to append.
         * @returns {Grammar} The new language created.
         * @public
         * @example
         * Prism.languages['css-with-colors'] = Prism.languages.extend('css', {
         *     // Prism.languages.css already has a 'comment' token, so this token will overwrite CSS' 'comment' token
         *     // at its original position
         *     'comment': { ... },
         *     // CSS doesn't have a 'color' token, so this token will be appended
         *     'color': /\b(?:red|green|blue)\b/
         * });
         */
        extend: function(id, redef) {
          var lang2 = _.util.clone(_.languages[id]);
          for (var key in redef) {
            lang2[key] = redef[key];
          }
          return lang2;
        },
        /**
         * Inserts tokens _before_ another token in a language definition or any other grammar.
         *
         * ## Usage
         *
         * This helper method makes it easy to modify existing languages. For example, the CSS language definition
         * not only defines CSS highlighting for CSS documents, but also needs to define highlighting for CSS embedded
         * in HTML through `<style>` elements. To do this, it needs to modify `Prism.languages.markup` and add the
         * appropriate tokens. However, `Prism.languages.markup` is a regular JavaScript object literal, so if you do
         * this:
         *
         * ```js
         * Prism.languages.markup.style = {
         *     // token
         * };
         * ```
         *
         * then the `style` token will be added (and processed) at the end. `insertBefore` allows you to insert tokens
         * before existing tokens. For the CSS example above, you would use it like this:
         *
         * ```js
         * Prism.languages.insertBefore('markup', 'cdata', {
         *     'style': {
         *         // token
         *     }
         * });
         * ```
         *
         * ## Special cases
         *
         * If the grammars of `inside` and `insert` have tokens with the same name, the tokens in `inside`'s grammar
         * will be ignored.
         *
         * This behavior can be used to insert tokens after `before`:
         *
         * ```js
         * Prism.languages.insertBefore('markup', 'comment', {
         *     'comment': Prism.languages.markup.comment,
         *     // tokens after 'comment'
         * });
         * ```
         *
         * ## Limitations
         *
         * The main problem `insertBefore` has to solve is iteration order. Since ES2015, the iteration order for object
         * properties is guaranteed to be the insertion order (except for integer keys) but some browsers behave
         * differently when keys are deleted and re-inserted. So `insertBefore` can't be implemented by temporarily
         * deleting properties which is necessary to insert at arbitrary positions.
         *
         * To solve this problem, `insertBefore` doesn't actually insert the given tokens into the target object.
         * Instead, it will create a new object and replace all references to the target object with the new one. This
         * can be done without temporarily deleting properties, so the iteration order is well-defined.
         *
         * However, only references that can be reached from `Prism.languages` or `insert` will be replaced. I.e. if
         * you hold the target object in a variable, then the value of the variable will not change.
         *
         * ```js
         * var oldMarkup = Prism.languages.markup;
         * var newMarkup = Prism.languages.insertBefore('markup', 'comment', { ... });
         *
         * assert(oldMarkup !== Prism.languages.markup);
         * assert(newMarkup === Prism.languages.markup);
         * ```
         *
         * @param {string} inside The property of `root` (e.g. a language id in `Prism.languages`) that contains the
         * object to be modified.
         * @param {string} before The key to insert before.
         * @param {Grammar} insert An object containing the key-value pairs to be inserted.
         * @param {Object<string, any>} [root] The object containing `inside`, i.e. the object that contains the
         * object to be modified.
         *
         * Defaults to `Prism.languages`.
         * @returns {Grammar} The new grammar object.
         * @public
         */
        insertBefore: function(inside, before, insert2, root) {
          root = root || /** @type {any} */
          _.languages;
          var grammar = root[inside];
          var ret = {};
          for (var token in grammar) {
            if (grammar.hasOwnProperty(token)) {
              if (token == before) {
                for (var newToken in insert2) {
                  if (insert2.hasOwnProperty(newToken)) {
                    ret[newToken] = insert2[newToken];
                  }
                }
              }
              if (!insert2.hasOwnProperty(token)) {
                ret[token] = grammar[token];
              }
            }
          }
          var old = root[inside];
          root[inside] = ret;
          _.languages.DFS(_.languages, function(key, value) {
            if (value === old && key != inside) {
              this[key] = ret;
            }
          });
          return ret;
        },
        // Traverse a language definition with Depth First Search
        DFS: function DFS(o, callback, type, visited) {
          visited = visited || {};
          var objId = _.util.objId;
          for (var i in o) {
            if (o.hasOwnProperty(i)) {
              callback.call(o, i, o[i], type || i);
              var property = o[i];
              var propertyType = _.util.type(property);
              if (propertyType === "Object" && !visited[objId(property)]) {
                visited[objId(property)] = true;
                DFS(property, callback, null, visited);
              } else if (propertyType === "Array" && !visited[objId(property)]) {
                visited[objId(property)] = true;
                DFS(property, callback, i, visited);
              }
            }
          }
        }
      },
      plugins: {},
      /**
       * This is the most high-level function in Prism’s API.
       * It fetches all the elements that have a `.language-xxxx` class and then calls {@link Prism.highlightElement} on
       * each one of them.
       *
       * This is equivalent to `Prism.highlightAllUnder(document, async, callback)`.
       *
       * @param {boolean} [async=false] Same as in {@link Prism.highlightAllUnder}.
       * @param {HighlightCallback} [callback] Same as in {@link Prism.highlightAllUnder}.
       * @memberof Prism
       * @public
       */
      highlightAll: function(async, callback) {
        _.highlightAllUnder(document, async, callback);
      },
      /**
       * Fetches all the descendants of `container` that have a `.language-xxxx` class and then calls
       * {@link Prism.highlightElement} on each one of them.
       *
       * The following hooks will be run:
       * 1. `before-highlightall`
       * 2. `before-all-elements-highlight`
       * 3. All hooks of {@link Prism.highlightElement} for each element.
       *
       * @param {ParentNode} container The root element, whose descendants that have a `.language-xxxx` class will be highlighted.
       * @param {boolean} [async=false] Whether each element is to be highlighted asynchronously using Web Workers.
       * @param {HighlightCallback} [callback] An optional callback to be invoked on each element after its highlighting is done.
       * @memberof Prism
       * @public
       */
      highlightAllUnder: function(container, async, callback) {
        var env = {
          callback,
          container,
          selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
        };
        _.hooks.run("before-highlightall", env);
        env.elements = Array.prototype.slice.apply(env.container.querySelectorAll(env.selector));
        _.hooks.run("before-all-elements-highlight", env);
        for (var i = 0, element; element = env.elements[i++]; ) {
          _.highlightElement(element, async === true, env.callback);
        }
      },
      /**
       * Highlights the code inside a single element.
       *
       * The following hooks will be run:
       * 1. `before-sanity-check`
       * 2. `before-highlight`
       * 3. All hooks of {@link Prism.highlight}. These hooks will be run by an asynchronous worker if `async` is `true`.
       * 4. `before-insert`
       * 5. `after-highlight`
       * 6. `complete`
       *
       * Some the above hooks will be skipped if the element doesn't contain any text or there is no grammar loaded for
       * the element's language.
       *
       * @param {Element} element The element containing the code.
       * It must have a class of `language-xxxx` to be processed, where `xxxx` is a valid language identifier.
       * @param {boolean} [async=false] Whether the element is to be highlighted asynchronously using Web Workers
       * to improve performance and avoid blocking the UI when highlighting very large chunks of code. This option is
       * [disabled by default](https://prismjs.com/faq.html#why-is-asynchronous-highlighting-disabled-by-default).
       *
       * Note: All language definitions required to highlight the code must be included in the main `prism.js` file for
       * asynchronous highlighting to work. You can build your own bundle on the
       * [Download page](https://prismjs.com/download.html).
       * @param {HighlightCallback} [callback] An optional callback to be invoked after the highlighting is done.
       * Mostly useful when `async` is `true`, since in that case, the highlighting is done asynchronously.
       * @memberof Prism
       * @public
       */
      highlightElement: function(element, async, callback) {
        var language = _.util.getLanguage(element);
        var grammar = _.languages[language];
        _.util.setLanguage(element, language);
        var parent = element.parentElement;
        if (parent && parent.nodeName.toLowerCase() === "pre") {
          _.util.setLanguage(parent, language);
        }
        var code = element.textContent;
        var env = {
          element,
          language,
          grammar,
          code
        };
        function insertHighlightedCode(highlightedCode) {
          env.highlightedCode = highlightedCode;
          _.hooks.run("before-insert", env);
          env.element.innerHTML = env.highlightedCode;
          _.hooks.run("after-highlight", env);
          _.hooks.run("complete", env);
          callback && callback.call(env.element);
        }
        _.hooks.run("before-sanity-check", env);
        parent = env.element.parentElement;
        if (parent && parent.nodeName.toLowerCase() === "pre" && !parent.hasAttribute("tabindex")) {
          parent.setAttribute("tabindex", "0");
        }
        if (!env.code) {
          _.hooks.run("complete", env);
          callback && callback.call(env.element);
          return;
        }
        _.hooks.run("before-highlight", env);
        if (!env.grammar) {
          insertHighlightedCode(_.util.encode(env.code));
          return;
        }
        if (async && _self2.Worker) {
          var worker = new Worker(_.filename);
          worker.onmessage = function(evt) {
            insertHighlightedCode(evt.data);
          };
          worker.postMessage(JSON.stringify({
            language: env.language,
            code: env.code,
            immediateClose: true
          }));
        } else {
          insertHighlightedCode(_.highlight(env.code, env.grammar, env.language));
        }
      },
      /**
       * Low-level function, only use if you know what you’re doing. It accepts a string of text as input
       * and the language definitions to use, and returns a string with the HTML produced.
       *
       * The following hooks will be run:
       * 1. `before-tokenize`
       * 2. `after-tokenize`
       * 3. `wrap`: On each {@link Token}.
       *
       * @param {string} text A string with the code to be highlighted.
       * @param {Grammar} grammar An object containing the tokens to use.
       *
       * Usually a language definition like `Prism.languages.markup`.
       * @param {string} language The name of the language definition passed to `grammar`.
       * @returns {string} The highlighted HTML.
       * @memberof Prism
       * @public
       * @example
       * Prism.highlight('var foo = true;', Prism.languages.javascript, 'javascript');
       */
      highlight: function(text, grammar, language) {
        var env = {
          code: text,
          grammar,
          language
        };
        _.hooks.run("before-tokenize", env);
        if (!env.grammar) {
          throw new Error('The language "' + env.language + '" has no grammar.');
        }
        env.tokens = _.tokenize(env.code, env.grammar);
        _.hooks.run("after-tokenize", env);
        return Token.stringify(_.util.encode(env.tokens), env.language);
      },
      /**
       * This is the heart of Prism, and the most low-level function you can use. It accepts a string of text as input
       * and the language definitions to use, and returns an array with the tokenized code.
       *
       * When the language definition includes nested tokens, the function is called recursively on each of these tokens.
       *
       * This method could be useful in other contexts as well, as a very crude parser.
       *
       * @param {string} text A string with the code to be highlighted.
       * @param {Grammar} grammar An object containing the tokens to use.
       *
       * Usually a language definition like `Prism.languages.markup`.
       * @returns {TokenStream} An array of strings and tokens, a token stream.
       * @memberof Prism
       * @public
       * @example
       * let code = `var foo = 0;`;
       * let tokens = Prism.tokenize(code, Prism.languages.javascript);
       * tokens.forEach(token => {
       *     if (token instanceof Prism.Token && token.type === 'number') {
       *         console.log(`Found numeric literal: ${token.content}`);
       *     }
       * });
       */
      tokenize: function(text, grammar) {
        var rest = grammar.rest;
        if (rest) {
          for (var token in rest) {
            grammar[token] = rest[token];
          }
          delete grammar.rest;
        }
        var tokenList = new LinkedList();
        addAfter(tokenList, tokenList.head, text);
        matchGrammar(text, tokenList, grammar, tokenList.head, 0);
        return toArray(tokenList);
      },
      /**
       * @namespace
       * @memberof Prism
       * @public
       */
      hooks: {
        all: {},
        /**
         * Adds the given callback to the list of callbacks for the given hook.
         *
         * The callback will be invoked when the hook it is registered for is run.
         * Hooks are usually directly run by a highlight function but you can also run hooks yourself.
         *
         * One callback function can be registered to multiple hooks and the same hook multiple times.
         *
         * @param {string} name The name of the hook.
         * @param {HookCallback} callback The callback function which is given environment variables.
         * @public
         */
        add: function(name, callback) {
          var hooks = _.hooks.all;
          hooks[name] = hooks[name] || [];
          hooks[name].push(callback);
        },
        /**
         * Runs a hook invoking all registered callbacks with the given environment variables.
         *
         * Callbacks will be invoked synchronously and in the order in which they were registered.
         *
         * @param {string} name The name of the hook.
         * @param {Object<string, any>} env The environment variables of the hook passed to all callbacks registered.
         * @public
         */
        run: function(name, env) {
          var callbacks = _.hooks.all[name];
          if (!callbacks || !callbacks.length) {
            return;
          }
          for (var i = 0, callback; callback = callbacks[i++]; ) {
            callback(env);
          }
        }
      },
      Token
    };
    _self2.Prism = _;
    function Token(type, content, alias, matchedStr) {
      this.type = type;
      this.content = content;
      this.alias = alias;
      this.length = (matchedStr || "").length | 0;
    }
    Token.stringify = function stringify(o, language) {
      if (typeof o == "string") {
        return o;
      }
      if (Array.isArray(o)) {
        var s = "";
        o.forEach(function(e) {
          s += stringify(e, language);
        });
        return s;
      }
      var env = {
        type: o.type,
        content: stringify(o.content, language),
        tag: "span",
        classes: ["token", o.type],
        attributes: {},
        language
      };
      var aliases = o.alias;
      if (aliases) {
        if (Array.isArray(aliases)) {
          Array.prototype.push.apply(env.classes, aliases);
        } else {
          env.classes.push(aliases);
        }
      }
      _.hooks.run("wrap", env);
      var attributes = "";
      for (var name in env.attributes) {
        attributes += " " + name + '="' + (env.attributes[name] || "").replace(/"/g, "&quot;") + '"';
      }
      return "<" + env.tag + ' class="' + env.classes.join(" ") + '"' + attributes + ">" + env.content + "</" + env.tag + ">";
    };
    function matchPattern(pattern, pos, text, lookbehind) {
      pattern.lastIndex = pos;
      var match = pattern.exec(text);
      if (match && lookbehind && match[1]) {
        var lookbehindLength = match[1].length;
        match.index += lookbehindLength;
        match[0] = match[0].slice(lookbehindLength);
      }
      return match;
    }
    function matchGrammar(text, tokenList, grammar, startNode, startPos, rematch) {
      for (var token in grammar) {
        if (!grammar.hasOwnProperty(token) || !grammar[token]) {
          continue;
        }
        var patterns = grammar[token];
        patterns = Array.isArray(patterns) ? patterns : [patterns];
        for (var j = 0; j < patterns.length; ++j) {
          if (rematch && rematch.cause == token + "," + j) {
            return;
          }
          var patternObj = patterns[j];
          var inside = patternObj.inside;
          var lookbehind = !!patternObj.lookbehind;
          var greedy = !!patternObj.greedy;
          var alias = patternObj.alias;
          if (greedy && !patternObj.pattern.global) {
            var flags = patternObj.pattern.toString().match(/[imsuy]*$/)[0];
            patternObj.pattern = RegExp(patternObj.pattern.source, flags + "g");
          }
          var pattern = patternObj.pattern || patternObj;
          for (var currentNode = startNode.next, pos = startPos; currentNode !== tokenList.tail; pos += currentNode.value.length, currentNode = currentNode.next) {
            if (rematch && pos >= rematch.reach) {
              break;
            }
            var str = currentNode.value;
            if (tokenList.length > text.length) {
              return;
            }
            if (str instanceof Token) {
              continue;
            }
            var removeCount = 1;
            var match;
            if (greedy) {
              match = matchPattern(pattern, pos, text, lookbehind);
              if (!match || match.index >= text.length) {
                break;
              }
              var from = match.index;
              var to = match.index + match[0].length;
              var p = pos;
              p += currentNode.value.length;
              while (from >= p) {
                currentNode = currentNode.next;
                p += currentNode.value.length;
              }
              p -= currentNode.value.length;
              pos = p;
              if (currentNode.value instanceof Token) {
                continue;
              }
              for (var k = currentNode; k !== tokenList.tail && (p < to || typeof k.value === "string"); k = k.next) {
                removeCount++;
                p += k.value.length;
              }
              removeCount--;
              str = text.slice(pos, p);
              match.index -= pos;
            } else {
              match = matchPattern(pattern, 0, str, lookbehind);
              if (!match) {
                continue;
              }
            }
            var from = match.index;
            var matchStr = match[0];
            var before = str.slice(0, from);
            var after = str.slice(from + matchStr.length);
            var reach = pos + str.length;
            if (rematch && reach > rematch.reach) {
              rematch.reach = reach;
            }
            var removeFrom = currentNode.prev;
            if (before) {
              removeFrom = addAfter(tokenList, removeFrom, before);
              pos += before.length;
            }
            removeRange(tokenList, removeFrom, removeCount);
            var wrapped = new Token(token, inside ? _.tokenize(matchStr, inside) : matchStr, alias, matchStr);
            currentNode = addAfter(tokenList, removeFrom, wrapped);
            if (after) {
              addAfter(tokenList, currentNode, after);
            }
            if (removeCount > 1) {
              var nestedRematch = {
                cause: token + "," + j,
                reach
              };
              matchGrammar(text, tokenList, grammar, currentNode.prev, pos, nestedRematch);
              if (rematch && nestedRematch.reach > rematch.reach) {
                rematch.reach = nestedRematch.reach;
              }
            }
          }
        }
      }
    }
    function LinkedList() {
      var head = { value: null, prev: null, next: null };
      var tail = { value: null, prev: head, next: null };
      head.next = tail;
      this.head = head;
      this.tail = tail;
      this.length = 0;
    }
    function addAfter(list, node, value) {
      var next = node.next;
      var newNode = { value, prev: node, next };
      node.next = newNode;
      next.prev = newNode;
      list.length++;
      return newNode;
    }
    function removeRange(list, node, count) {
      var next = node.next;
      for (var i = 0; i < count && next !== list.tail; i++) {
        next = next.next;
      }
      node.next = next;
      next.prev = node;
      list.length -= i;
    }
    function toArray(list) {
      var array = [];
      var node = list.head.next;
      while (node !== list.tail) {
        array.push(node.value);
        node = node.next;
      }
      return array;
    }
    if (!_self2.document) {
      if (!_self2.addEventListener) {
        return _;
      }
      if (!_.disableWorkerMessageHandler) {
        _self2.addEventListener("message", function(evt) {
          var message = JSON.parse(evt.data);
          var lang2 = message.language;
          var code = message.code;
          var immediateClose = message.immediateClose;
          _self2.postMessage(_.highlight(code, _.languages[lang2], lang2));
          if (immediateClose) {
            _self2.close();
          }
        }, false);
      }
      return _;
    }
    var script = _.util.currentScript();
    if (script) {
      _.filename = script.src;
      if (script.hasAttribute("data-manual")) {
        _.manual = true;
      }
    }
    function highlightAutomaticallyCallback() {
      if (!_.manual) {
        _.highlightAll();
      }
    }
    if (!_.manual) {
      var readyState = document.readyState;
      if (readyState === "loading" || readyState === "interactive" && script && script.defer) {
        document.addEventListener("DOMContentLoaded", highlightAutomaticallyCallback);
      } else {
        if (window.requestAnimationFrame) {
          window.requestAnimationFrame(highlightAutomaticallyCallback);
        } else {
          window.setTimeout(highlightAutomaticallyCallback, 16);
        }
      }
    }
    return _;
  }(_self);
  if (module.exports) {
    module.exports = Prism2;
  }
  if (typeof commonjsGlobal !== "undefined") {
    commonjsGlobal.Prism = Prism2;
  }
  Prism2.languages.markup = {
    "comment": {
      pattern: /<!--(?:(?!<!--)[\s\S])*?-->/,
      greedy: true
    },
    "prolog": {
      pattern: /<\?[\s\S]+?\?>/,
      greedy: true
    },
    "doctype": {
      // https://www.w3.org/TR/xml/#NT-doctypedecl
      pattern: /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,
      greedy: true,
      inside: {
        "internal-subset": {
          pattern: /(^[^\[]*\[)[\s\S]+(?=\]>$)/,
          lookbehind: true,
          greedy: true,
          inside: null
          // see below
        },
        "string": {
          pattern: /"[^"]*"|'[^']*'/,
          greedy: true
        },
        "punctuation": /^<!|>$|[[\]]/,
        "doctype-tag": /^DOCTYPE/i,
        "name": /[^\s<>'"]+/
      }
    },
    "cdata": {
      pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
      greedy: true
    },
    "tag": {
      pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,
      greedy: true,
      inside: {
        "tag": {
          pattern: /^<\/?[^\s>\/]+/,
          inside: {
            "punctuation": /^<\/?/,
            "namespace": /^[^\s>\/:]+:/
          }
        },
        "special-attr": [],
        "attr-value": {
          pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
          inside: {
            "punctuation": [
              {
                pattern: /^=/,
                alias: "attr-equals"
              },
              {
                pattern: /^(\s*)["']|["']$/,
                lookbehind: true
              }
            ]
          }
        },
        "punctuation": /\/?>/,
        "attr-name": {
          pattern: /[^\s>\/]+/,
          inside: {
            "namespace": /^[^\s>\/:]+:/
          }
        }
      }
    },
    "entity": [
      {
        pattern: /&[\da-z]{1,8};/i,
        alias: "named-entity"
      },
      /&#x?[\da-f]{1,8};/i
    ]
  };
  Prism2.languages.markup["tag"].inside["attr-value"].inside["entity"] = Prism2.languages.markup["entity"];
  Prism2.languages.markup["doctype"].inside["internal-subset"].inside = Prism2.languages.markup;
  Prism2.hooks.add("wrap", function(env) {
    if (env.type === "entity") {
      env.attributes["title"] = env.content.replace(/&amp;/, "&");
    }
  });
  Object.defineProperty(Prism2.languages.markup.tag, "addInlined", {
    /**
     * Adds an inlined language to markup.
     *
     * An example of an inlined language is CSS with `<style>` tags.
     *
     * @param {string} tagName The name of the tag that contains the inlined language. This name will be treated as
     * case insensitive.
     * @param {string} lang The language key.
     * @example
     * addInlined('style', 'css');
     */
    value: function addInlined(tagName, lang) {
      var includedCdataInside = {};
      includedCdataInside["language-" + lang] = {
        pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
        lookbehind: true,
        inside: Prism2.languages[lang]
      };
      includedCdataInside["cdata"] = /^<!\[CDATA\[|\]\]>$/i;
      var inside = {
        "included-cdata": {
          pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
          inside: includedCdataInside
        }
      };
      inside["language-" + lang] = {
        pattern: /[\s\S]+/,
        inside: Prism2.languages[lang]
      };
      var def = {};
      def[tagName] = {
        pattern: RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g, function() {
          return tagName;
        }), "i"),
        lookbehind: true,
        greedy: true,
        inside
      };
      Prism2.languages.insertBefore("markup", "cdata", def);
    }
  });
  Object.defineProperty(Prism2.languages.markup.tag, "addAttribute", {
    /**
     * Adds an pattern to highlight languages embedded in HTML attributes.
     *
     * An example of an inlined language is CSS with `style` attributes.
     *
     * @param {string} attrName The name of the tag that contains the inlined language. This name will be treated as
     * case insensitive.
     * @param {string} lang The language key.
     * @example
     * addAttribute('style', 'css');
     */
    value: function(attrName, lang) {
      Prism2.languages.markup.tag.inside["special-attr"].push({
        pattern: RegExp(
          /(^|["'\s])/.source + "(?:" + attrName + ")" + /\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,
          "i"
        ),
        lookbehind: true,
        inside: {
          "attr-name": /^[^\s=]+/,
          "attr-value": {
            pattern: /=[\s\S]+/,
            inside: {
              "value": {
                pattern: /(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,
                lookbehind: true,
                alias: [lang, "language-" + lang],
                inside: Prism2.languages[lang]
              },
              "punctuation": [
                {
                  pattern: /^=/,
                  alias: "attr-equals"
                },
                /"|'/
              ]
            }
          }
        }
      });
    }
  });
  Prism2.languages.html = Prism2.languages.markup;
  Prism2.languages.mathml = Prism2.languages.markup;
  Prism2.languages.svg = Prism2.languages.markup;
  Prism2.languages.xml = Prism2.languages.extend("markup", {});
  Prism2.languages.ssml = Prism2.languages.xml;
  Prism2.languages.atom = Prism2.languages.xml;
  Prism2.languages.rss = Prism2.languages.xml;
  (function(Prism3) {
    var string = /(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;
    Prism3.languages.css = {
      "comment": /\/\*[\s\S]*?\*\//,
      "atrule": {
        pattern: RegExp("@[\\w-](?:" + /[^;{\s"']|\s+(?!\s)/.source + "|" + string.source + ")*?" + /(?:;|(?=\s*\{))/.source),
        inside: {
          "rule": /^@[\w-]+/,
          "selector-function-argument": {
            pattern: /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,
            lookbehind: true,
            alias: "selector"
          },
          "keyword": {
            pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/,
            lookbehind: true
          }
          // See rest below
        }
      },
      "url": {
        // https://drafts.csswg.org/css-values-3/#urls
        pattern: RegExp("\\burl\\((?:" + string.source + "|" + /(?:[^\\\r\n()"']|\\[\s\S])*/.source + ")\\)", "i"),
        greedy: true,
        inside: {
          "function": /^url/i,
          "punctuation": /^\(|\)$/,
          "string": {
            pattern: RegExp("^" + string.source + "$"),
            alias: "url"
          }
        }
      },
      "selector": {
        pattern: RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|` + string.source + ")*(?=\\s*\\{)"),
        lookbehind: true
      },
      "string": {
        pattern: string,
        greedy: true
      },
      "property": {
        pattern: /(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,
        lookbehind: true
      },
      "important": /!important\b/i,
      "function": {
        pattern: /(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,
        lookbehind: true
      },
      "punctuation": /[(){};:,]/
    };
    Prism3.languages.css["atrule"].inside.rest = Prism3.languages.css;
    var markup = Prism3.languages.markup;
    if (markup) {
      markup.tag.addInlined("style", "css");
      markup.tag.addAttribute("style", "css");
    }
  })(Prism2);
  Prism2.languages.clike = {
    "comment": [
      {
        pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
        lookbehind: true,
        greedy: true
      },
      {
        pattern: /(^|[^\\:])\/\/.*/,
        lookbehind: true,
        greedy: true
      }
    ],
    "string": {
      pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
      greedy: true
    },
    "class-name": {
      pattern: /(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,
      lookbehind: true,
      inside: {
        "punctuation": /[.\\]/
      }
    },
    "keyword": /\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,
    "boolean": /\b(?:false|true)\b/,
    "function": /\b\w+(?=\()/,
    "number": /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
    "operator": /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
    "punctuation": /[{}[\];(),.:]/
  };
  Prism2.languages.javascript = Prism2.languages.extend("clike", {
    "class-name": [
      Prism2.languages.clike["class-name"],
      {
        pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,
        lookbehind: true
      }
    ],
    "keyword": [
      {
        pattern: /((?:^|\})\s*)catch\b/,
        lookbehind: true
      },
      {
        pattern: /(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
        lookbehind: true
      }
    ],
    // Allow for all non-ASCII characters (See http://stackoverflow.com/a/2008444)
    "function": /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
    "number": {
      pattern: RegExp(
        /(^|[^\w$])/.source + "(?:" + // constant
        (/NaN|Infinity/.source + "|" + // binary integer
        /0[bB][01]+(?:_[01]+)*n?/.source + "|" + // octal integer
        /0[oO][0-7]+(?:_[0-7]+)*n?/.source + "|" + // hexadecimal integer
        /0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source + "|" + // decimal bigint
        /\d+(?:_\d+)*n/.source + "|" + // decimal number (integer or float) but no bigint
        /(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source) + ")" + /(?![\w$])/.source
      ),
      lookbehind: true
    },
    "operator": /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/
  });
  Prism2.languages.javascript["class-name"][0].pattern = /(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/;
  Prism2.languages.insertBefore("javascript", "keyword", {
    "regex": {
      pattern: RegExp(
        // lookbehind
        // eslint-disable-next-line regexp/no-dupe-characters-character-class
        /((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source + // Regex pattern:
        // There are 2 regex patterns here. The RegExp set notation proposal added support for nested character
        // classes if the `v` flag is present. Unfortunately, nested CCs are both context-free and incompatible
        // with the only syntax, so we have to define 2 different regex patterns.
        /\//.source + "(?:" + /(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source + "|" + // `v` flag syntax. This supports 3 levels of nested character classes.
        /(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source + ")" + // lookahead
        /(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source
      ),
      lookbehind: true,
      greedy: true,
      inside: {
        "regex-source": {
          pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/,
          lookbehind: true,
          alias: "language-regex",
          inside: Prism2.languages.regex
        },
        "regex-delimiter": /^\/|\/$/,
        "regex-flags": /^[a-z]+$/
      }
    },
    // This must be declared before keyword because we use "function" inside the look-forward
    "function-variable": {
      pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,
      alias: "function"
    },
    "parameter": [
      {
        pattern: /(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,
        lookbehind: true,
        inside: Prism2.languages.javascript
      },
      {
        pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,
        lookbehind: true,
        inside: Prism2.languages.javascript
      },
      {
        pattern: /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,
        lookbehind: true,
        inside: Prism2.languages.javascript
      },
      {
        pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,
        lookbehind: true,
        inside: Prism2.languages.javascript
      }
    ],
    "constant": /\b[A-Z](?:[A-Z_]|\dx?)*\b/
  });
  Prism2.languages.insertBefore("javascript", "string", {
    "hashbang": {
      pattern: /^#!.*/,
      greedy: true,
      alias: "comment"
    },
    "template-string": {
      pattern: /`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,
      greedy: true,
      inside: {
        "template-punctuation": {
          pattern: /^`|`$/,
          alias: "string"
        },
        "interpolation": {
          pattern: /((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,
          lookbehind: true,
          inside: {
            "interpolation-punctuation": {
              pattern: /^\$\{|\}$/,
              alias: "punctuation"
            },
            rest: Prism2.languages.javascript
          }
        },
        "string": /[\s\S]+/
      }
    },
    "string-property": {
      pattern: /((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,
      lookbehind: true,
      greedy: true,
      alias: "property"
    }
  });
  Prism2.languages.insertBefore("javascript", "operator", {
    "literal-property": {
      pattern: /((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,
      lookbehind: true,
      alias: "property"
    }
  });
  if (Prism2.languages.markup) {
    Prism2.languages.markup.tag.addInlined("script", "javascript");
    Prism2.languages.markup.tag.addAttribute(
      /on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,
      "javascript"
    );
  }
  Prism2.languages.js = Prism2.languages.javascript;
  (function() {
    if (typeof Prism2 === "undefined" || typeof document === "undefined") {
      return;
    }
    if (!Element.prototype.matches) {
      Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
    }
    var LOADING_MESSAGE = "Loading…";
    var FAILURE_MESSAGE = function(status, message) {
      return "✖ Error " + status + " while fetching file: " + message;
    };
    var FAILURE_EMPTY_MESSAGE = "✖ Error: File does not exist or is empty";
    var EXTENSIONS = {
      "js": "javascript",
      "py": "python",
      "rb": "ruby",
      "ps1": "powershell",
      "psm1": "powershell",
      "sh": "bash",
      "bat": "batch",
      "h": "c",
      "tex": "latex"
    };
    var STATUS_ATTR = "data-src-status";
    var STATUS_LOADING = "loading";
    var STATUS_LOADED = "loaded";
    var STATUS_FAILED = "failed";
    var SELECTOR = "pre[data-src]:not([" + STATUS_ATTR + '="' + STATUS_LOADED + '"]):not([' + STATUS_ATTR + '="' + STATUS_LOADING + '"])';
    function loadFile(src, success, error) {
      var xhr = new XMLHttpRequest();
      xhr.open("GET", src, true);
      xhr.onreadystatechange = function() {
        if (xhr.readyState == 4) {
          if (xhr.status < 400 && xhr.responseText) {
            success(xhr.responseText);
          } else {
            if (xhr.status >= 400) {
              error(FAILURE_MESSAGE(xhr.status, xhr.statusText));
            } else {
              error(FAILURE_EMPTY_MESSAGE);
            }
          }
        }
      };
      xhr.send(null);
    }
    function parseRange(range) {
      var m = /^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(range || "");
      if (m) {
        var start = Number(m[1]);
        var comma = m[2];
        var end = m[3];
        if (!comma) {
          return [start, start];
        }
        if (!end) {
          return [start, void 0];
        }
        return [start, Number(end)];
      }
      return void 0;
    }
    Prism2.hooks.add("before-highlightall", function(env) {
      env.selector += ", " + SELECTOR;
    });
    Prism2.hooks.add("before-sanity-check", function(env) {
      var pre = (
        /** @type {HTMLPreElement} */
        env.element
      );
      if (pre.matches(SELECTOR)) {
        env.code = "";
        pre.setAttribute(STATUS_ATTR, STATUS_LOADING);
        var code = pre.appendChild(document.createElement("CODE"));
        code.textContent = LOADING_MESSAGE;
        var src = pre.getAttribute("data-src");
        var language = env.language;
        if (language === "none") {
          var extension = (/\.(\w+)$/.exec(src) || [, "none"])[1];
          language = EXTENSIONS[extension] || extension;
        }
        Prism2.util.setLanguage(code, language);
        Prism2.util.setLanguage(pre, language);
        var autoloader = Prism2.plugins.autoloader;
        if (autoloader) {
          autoloader.loadLanguages(language);
        }
        loadFile(
          src,
          function(text) {
            pre.setAttribute(STATUS_ATTR, STATUS_LOADED);
            var range = parseRange(pre.getAttribute("data-range"));
            if (range) {
              var lines = text.split(/\r\n?|\n/g);
              var start = range[0];
              var end = range[1] == null ? lines.length : range[1];
              if (start < 0) {
                start += lines.length;
              }
              start = Math.max(0, Math.min(start - 1, lines.length));
              if (end < 0) {
                end += lines.length;
              }
              end = Math.max(0, Math.min(end, lines.length));
              text = lines.slice(start, end).join("\n");
              if (!pre.hasAttribute("data-start")) {
                pre.setAttribute("data-start", String(start + 1));
              }
            }
            code.textContent = text;
            Prism2.highlightElement(code);
          },
          function(error) {
            pre.setAttribute(STATUS_ATTR, STATUS_FAILED);
            code.textContent = error;
          }
        );
      }
    });
    Prism2.plugins.fileHighlight = {
      /**
       * Executes the File Highlight plugin for all matching `pre` elements under the given container.
       *
       * Note: Elements which are already loaded or currently loading will not be touched by this method.
       *
       * @param {ParentNode} [container=document]
       */
      highlight: function highlight(container) {
        var elements = (container || document).querySelectorAll(SELECTOR);
        for (var i = 0, element; element = elements[i++]; ) {
          Prism2.highlightElement(element);
        }
      }
    };
    var logged = false;
    Prism2.fileHighlight = function() {
      if (!logged) {
        console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead.");
        logged = true;
      }
      Prism2.plugins.fileHighlight.highlight.apply(this, arguments);
    };
  })();
})(prism);
var prismExports = prism.exports;
const useInlineCodeSnippetProps = (props) => {
  const newProps = Ht(props, {
    get ariaLabel() {
      return props.ariaLabel ?? "Copy to clipboard";
    }
  });
  return newProps;
};
const useInlineCodeSnippetHighlight = (props) => {
  const highlightedCodeHTML = prismExports.highlight(props.codeText, prismExports.languages[props.language], props.language);
  return highlightedCodeHTML;
};
const useInlineCodeSnippetClipboard = (props) => {
  const onClickHandler = async (event) => {
    await copyToClipboard(props.codeText);
    if (props.onClick) {
      props.onClick(event);
    }
  };
  return onClickHandler;
};
var _tmpl$$4$1 = /* @__PURE__ */ ze(`<button><code>`);
const InlineCodeSnippet = (_props) => {
  const props = useInlineCodeSnippetProps(_props);
  const highlightedCodeHTML = useInlineCodeSnippetHighlight(props);
  const onClickHandler = useInlineCodeSnippetClipboard(props);
  return (() => {
    var _el$ = _tmpl$$4$1(), _el$2 = _el$.firstChild;
    St(_el$, "click", onClickHandler);
    _el$.className = inlineCodeSnippet_button_style;
    _el$2.innerHTML = highlightedCodeHTML;
    J((_p$) => {
      var _v$ = props.ariaLabel, _v$2 = [text_recipe({
        kind: "code-01"
      }), inlineCodeSnippet_code_style].join(" ");
      _v$ !== _p$.e && We(_el$, "aria-label", _p$.e = _v$);
      _v$2 !== _p$.t && (_el$2.className = _p$.t = _v$2);
      return _p$;
    });
    return _el$;
  })();
};
var linkCodeSnippet_anchor_style = "ci48ls0";
var linkCodeSnippet_code_style = "ci48ls1";
const useLinkCodeSnippetProps = (props) => {
  const definedProps = Ht(props, {
    get ariaLabel() {
      return props.ariaLabel ?? "Copy to clipboard";
    },
    get href() {
      return props.href ?? "/";
    }
  });
  return definedProps;
};
const useLinkCodeSnippetHighlight = (props) => {
  const highlightedCodeHTML = prismExports.highlight(props.codeText, prismExports.languages[props.language], props.language);
  return highlightedCodeHTML;
};
const useLinkCodeSnippetNavigation = (props) => {
  const [visited, setVisited] = b(false);
  const navigate = xt();
  const onAnchorClickHandler = (event) => {
    event.preventDefault();
    navigate(props.href, props.isExternal);
    setVisited(true);
  };
  return {
    visited,
    onAnchorClickHandler
  };
};
var link_anchor_recipe = createRuntimeFn({ defaultClassName: "tq2a440", variantClassNames: { inline: { true: "tq2a441", false: "tq2a442" }, size: { sm: "tq2a443", md: "tq2a444", lg: "tq2a445" } }, defaultVariants: {}, compoundVariants: [] });
var link_text_recipe = createRuntimeFn({ defaultClassName: "tq2a446", variantClassNames: { disabled: { true: "tq2a447" }, visited: { true: "tq2a448" } }, defaultVariants: {}, compoundVariants: [] });
var link_icon_recipe = createRuntimeFn({ defaultClassName: "tq2a449", variantClassNames: { disabled: { true: "tq2a44a" }, visited: { true: "tq2a44b" }, size: { sm: "tq2a44c", md: "tq2a44d", lg: "tq2a44e" } }, defaultVariants: {}, compoundVariants: [] });
var _tmpl$$3$1 = /* @__PURE__ */ ze(`<a tabindex=0><code>`);
const LinkCodeSnippet = (_props) => {
  const props = useLinkCodeSnippetProps(_props);
  const highlightedCodeHTML = useLinkCodeSnippetHighlight(props);
  const {
    visited,
    onAnchorClickHandler
  } = useLinkCodeSnippetNavigation(props);
  return (() => {
    var _el$ = _tmpl$$3$1(), _el$2 = _el$.firstChild;
    St(_el$, "click", onAnchorClickHandler);
    _el$.className = linkCodeSnippet_anchor_style;
    _el$2.innerHTML = highlightedCodeHTML;
    J((_p$) => {
      var _v$ = props.ariaLabel, _v$2 = [linkCodeSnippet_code_style, link_text_recipe({
        disabled: false,
        visited: visited()
      }), text_recipe({
        kind: "code-01"
      })].join(" ");
      _v$ !== _p$.e && We(_el$, "aria-label", _p$.e = _v$);
      _v$2 !== _p$.t && (_el$2.className = _p$.t = _v$2);
      return _p$;
    });
    return _el$;
  })();
};
var multiCodeSnippet_wrapper_style = "_1lmaqmj0";
var multiCodeSnippet_codeWrapper_style = "_1lmaqmj1";
var multiCodeSnippet_buttonWrapper_style = "_1lmaqmj2";
var multiCodeSnippet_pre_style = "_1lmaqmj3";
var multiCodeSnippet_showMoreIcon_recipe = createRuntimeFn({ defaultClassName: "_1lmaqmj4", variantClassNames: { showMore: { true: "_1lmaqmj5", false: "_1lmaqmj6" } }, defaultVariants: {}, compoundVariants: [] });
var multiCodeSnippet_copyIcon_style = "_1lmaqmj7";
const calcHeight = (collapsedNumberOfRows) => {
  return `${collapsedNumberOfRows}rem`;
};
const useMultiCodeSnippetProps = (props) => {
  const newProps = Ht(props, {
    get copyButtonDescription() {
      return props.copyButtonDescription ?? "Copied to clipboard!";
    },
    get collapsedNumberOfRows() {
      return props.collapsedNumberOfRows ?? 3;
    },
    get hideCopyButton() {
      return props.hideCopyButton ?? false;
    },
    get width() {
      return props.width ?? "fit-content";
    },
    get wrapText() {
      return props.wrapText ?? true;
    },
    get ariaLabel() {
      return props.ariaLabel ?? "Copy to clipboard";
    },
    get defaultShow() {
      return props.defaultShow ?? false;
    }
  });
  return newProps;
};
const useMultiCodeSnippetHighlight = (props) => {
  const highlightedCodeHTML = prismExports.highlight(props.codeText, prismExports.languages[props.language], props.language);
  return highlightedCodeHTML;
};
const useMultiCodeSnippetToggle = (props) => {
  const [showMore, setShowMore] = b(props.defaultShow);
  const collapsedHeight = calcHeight(props.collapsedNumberOfRows);
  const [height, setHeight] = b(props.defaultShow ? "auto" : collapsedHeight);
  const onClickHandler = () => {
    if (showMore()) {
      setHeight(collapsedHeight);
    } else {
      setHeight("auto");
    }
    setShowMore(!showMore());
  };
  return {
    height,
    showMore,
    onClickHandler
  };
};
const useMultiCodeSnippetClipboard = (props) => {
  const onCopyButtonClickHandler = async (event) => {
    await copyToClipboard(props.codeText);
    if (props.onClick) {
      props.onClick(event);
    }
  };
  return onCopyButtonClickHandler;
};
var _tmpl$$2$1 = /* @__PURE__ */ ze(`<div><div tabindex=0></div><div>`), _tmpl$2 = /* @__PURE__ */ ze(`<pre><code>`), _tmpl$3 = /* @__PURE__ */ ze(`<code>`);
const MultiCodeSnippet = (_props) => {
  const props = useMultiCodeSnippetProps(_props);
  const {
    height,
    showMore,
    onClickHandler
  } = useMultiCodeSnippetToggle(props);
  const onCopyButtonClickHandler = useMultiCodeSnippetClipboard(props);
  const highlightedCodeHTML = useMultiCodeSnippetHighlight(props);
  return (() => {
    var _el$ = _tmpl$$2$1(), _el$2 = _el$.firstChild, _el$3 = _el$2.nextSibling;
    _el$.className = multiCodeSnippet_wrapper_style;
    _el$2.className = multiCodeSnippet_codeWrapper_style;
    I(_el$2, () => props.wrapText ? (() => {
      var _el$4 = _tmpl$2(), _el$5 = _el$4.firstChild;
      _el$4.className = multiCodeSnippet_pre_style;
      _el$5.innerHTML = highlightedCodeHTML;
      J((_p$) => {
        var _v$3 = height(), _v$4 = text_recipe({
          kind: "code-01"
        });
        _v$3 !== _p$.e && ((_p$.e = _v$3) != null ? _el$4.style.setProperty("height", _v$3) : _el$4.style.removeProperty("height"));
        _v$4 !== _p$.t && (_el$5.className = _p$.t = _v$4);
        return _p$;
      });
      return _el$4;
    })() : (() => {
      var _el$6 = _tmpl$3();
      _el$6.innerHTML = highlightedCodeHTML;
      J(() => _el$6.className = text_recipe({
        kind: "code-01"
      }));
      return _el$6;
    })());
    _el$3.className = multiCodeSnippet_buttonWrapper_style;
    I(_el$3, () => !props.hideCopyButton && Z(Tooltip, {
      get description() {
        return props.copyButtonDescription;
      },
      showOnHoverOrClick: "click",
      get children() {
        return Z(Button, {
          size: "md",
          kind: "ghost",
          hasIconOnly: true,
          get renderIcon() {
            return Z(CopyIcon, {
              className: multiCodeSnippet_copyIcon_style
            });
          },
          onClick: onCopyButtonClickHandler
        });
      }
    }), null);
    I(_el$3, Z(Button, {
      size: "md",
      kind: "ghost",
      hasIconOnly: true,
      get renderIcon() {
        return Z(ChevronDownIcon, {
          get className() {
            return multiCodeSnippet_showMoreIcon_recipe({
              showMore: showMore()
            });
          }
        });
      },
      onClick: onClickHandler
    }), null);
    J((_p$) => {
      var _v$ = props.width, _v$2 = props.ariaLabel;
      _v$ !== _p$.e && ((_p$.e = _v$) != null ? _el$.style.setProperty("width", _v$) : _el$.style.removeProperty("width"));
      _v$2 !== _p$.t && We(_el$, "aria-label", _p$.t = _v$2);
      return _p$;
    });
    return _el$;
  })();
};
var singleCodeSnippet_wrapper_style = "_3ctl4r0";
var singleCodeSnippet_codeWrapper_style = "_3ctl4r1";
var singleCodeSnippet_copyIcon_style = "_3ctl4r2";
const useSingleCodeSnippetProps = (props) => {
  const newProps = Ht(props, {
    get copyButtonDescription() {
      return props.copyButtonDescription ?? "Copied to clipboard!";
    },
    get hideCopyButton() {
      return props.hideCopyButton ?? false;
    },
    get width() {
      return props.width ?? "fit-content";
    },
    get ariaLabel() {
      return props.ariaLabel ?? "Copy to clipboard";
    }
  });
  return newProps;
};
const useSingleCodeSnippetEvent = (props) => {
  const onClickHandler = async (event) => {
    await copyToClipboard(props.codeText);
    if (props.onClick) {
      props.onClick(event);
    }
  };
  return onClickHandler;
};
const useSingleCodeSnippetHighlight = (props) => {
  const highlightedCodeHTML = prismExports.highlight(props.codeText, prismExports.languages[props.language], props.language);
  return highlightedCodeHTML;
};
var _tmpl$$1$1 = /* @__PURE__ */ ze(`<div><div tabindex=-1><span>`);
const SingleCodeSnippet = (_props) => {
  const props = useSingleCodeSnippetProps(_props);
  const onClickHandler = useSingleCodeSnippetEvent(props);
  const highlightedCodeHTML = useSingleCodeSnippetHighlight(props);
  return (() => {
    var _el$ = _tmpl$$1$1(), _el$2 = _el$.firstChild, _el$3 = _el$2.firstChild;
    _el$.className = singleCodeSnippet_wrapper_style;
    _el$2.className = singleCodeSnippet_codeWrapper_style;
    _el$3.innerHTML = highlightedCodeHTML;
    I(_el$, () => !props.hideCopyButton && Z(Tooltip, {
      get description() {
        return props.copyButtonDescription;
      },
      showOnHoverOrClick: "click",
      get children() {
        return Z(Button, {
          size: "md",
          kind: "ghost",
          hasIconOnly: true,
          get renderIcon() {
            return Z(CopyIcon, {
              className: singleCodeSnippet_copyIcon_style
            });
          },
          onClick: onClickHandler
        });
      }
    }), null);
    J((_p$) => {
      var _v$ = props.width, _v$2 = props.ariaLabel, _v$3 = text_recipe({
        kind: "code-01"
      });
      _v$ !== _p$.e && ((_p$.e = _v$) != null ? _el$.style.setProperty("width", _v$) : _el$.style.removeProperty("width"));
      _v$2 !== _p$.t && We(_el$, "aria-label", _p$.t = _v$2);
      _v$3 !== _p$.a && (_el$3.className = _p$.a = _v$3);
      return _p$;
    });
    return _el$;
  })();
};
(function(Prism2) {
  var envVars = "\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b";
  var commandAfterHeredoc = {
    pattern: /(^(["']?)\w+\2)[ \t]+\S.*/,
    lookbehind: true,
    alias: "punctuation",
    // this looks reasonably well in all themes
    inside: null
    // see below
  };
  var insideString = {
    "bash": commandAfterHeredoc,
    "environment": {
      pattern: RegExp("\\$" + envVars),
      alias: "constant"
    },
    "variable": [
      // [0]: Arithmetic Environment
      {
        pattern: /\$?\(\([\s\S]+?\)\)/,
        greedy: true,
        inside: {
          // If there is a $ sign at the beginning highlight $(( and )) as variable
          "variable": [
            {
              pattern: /(^\$\(\([\s\S]+)\)\)/,
              lookbehind: true
            },
            /^\$\(\(/
          ],
          "number": /\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee]-?\d+)?/,
          // Operators according to https://www.gnu.org/software/bash/manual/bashref.html#Shell-Arithmetic
          "operator": /--|\+\+|\*\*=?|<<=?|>>=?|&&|\|\||[=!+\-*/%<>^&|]=?|[?~:]/,
          // If there is no $ sign at the beginning highlight (( and )) as punctuation
          "punctuation": /\(\(?|\)\)?|,|;/
        }
      },
      // [1]: Command Substitution
      {
        pattern: /\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/,
        greedy: true,
        inside: {
          "variable": /^\$\(|^`|\)$|`$/
        }
      },
      // [2]: Brace expansion
      {
        pattern: /\$\{[^}]+\}/,
        greedy: true,
        inside: {
          "operator": /:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/,
          "punctuation": /[\[\]]/,
          "environment": {
            pattern: RegExp("(\\{)" + envVars),
            lookbehind: true,
            alias: "constant"
          }
        }
      },
      /\$(?:\w+|[#?*!@$])/
    ],
    // Escape sequences from echo and printf's manuals, and escaped quotes.
    "entity": /\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|U[0-9a-fA-F]{8}|u[0-9a-fA-F]{4}|x[0-9a-fA-F]{1,2})/
  };
  Prism2.languages.bash = {
    "shebang": {
      pattern: /^#!\s*\/.*/,
      alias: "important"
    },
    "comment": {
      pattern: /(^|[^"{\\$])#.*/,
      lookbehind: true
    },
    "function-name": [
      // a) function foo {
      // b) foo() {
      // c) function foo() {
      // but not “foo {”
      {
        // a) and c)
        pattern: /(\bfunction\s+)[\w-]+(?=(?:\s*\(?:\s*\))?\s*\{)/,
        lookbehind: true,
        alias: "function"
      },
      {
        // b)
        pattern: /\b[\w-]+(?=\s*\(\s*\)\s*\{)/,
        alias: "function"
      }
    ],
    // Highlight variable names as variables in for and select beginnings.
    "for-or-select": {
      pattern: /(\b(?:for|select)\s+)\w+(?=\s+in\s)/,
      alias: "variable",
      lookbehind: true
    },
    // Highlight variable names as variables in the left-hand part
    // of assignments (“=” and “+=”).
    "assign-left": {
      pattern: /(^|[\s;|&]|[<>]\()\w+(?:\.\w+)*(?=\+?=)/,
      inside: {
        "environment": {
          pattern: RegExp("(^|[\\s;|&]|[<>]\\()" + envVars),
          lookbehind: true,
          alias: "constant"
        }
      },
      alias: "variable",
      lookbehind: true
    },
    // Highlight parameter names as variables
    "parameter": {
      pattern: /(^|\s)-{1,2}(?:\w+:[+-]?)?\w+(?:\.\w+)*(?=[=\s]|$)/,
      alias: "variable",
      lookbehind: true
    },
    "string": [
      // Support for Here-documents https://en.wikipedia.org/wiki/Here_document
      {
        pattern: /((?:^|[^<])<<-?\s*)(\w+)\s[\s\S]*?(?:\r?\n|\r)\2/,
        lookbehind: true,
        greedy: true,
        inside: insideString
      },
      // Here-document with quotes around the tag
      // → No expansion (so no “inside”).
      {
        pattern: /((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s[\s\S]*?(?:\r?\n|\r)\3/,
        lookbehind: true,
        greedy: true,
        inside: {
          "bash": commandAfterHeredoc
        }
      },
      // “Normal” string
      {
        // https://www.gnu.org/software/bash/manual/html_node/Double-Quotes.html
        pattern: /(^|[^\\](?:\\\\)*)"(?:\\[\s\S]|\$\([^)]+\)|\$(?!\()|`[^`]+`|[^"\\`$])*"/,
        lookbehind: true,
        greedy: true,
        inside: insideString
      },
      {
        // https://www.gnu.org/software/bash/manual/html_node/Single-Quotes.html
        pattern: /(^|[^$\\])'[^']*'/,
        lookbehind: true,
        greedy: true
      },
      {
        // https://www.gnu.org/software/bash/manual/html_node/ANSI_002dC-Quoting.html
        pattern: /\$'(?:[^'\\]|\\[\s\S])*'/,
        greedy: true,
        inside: {
          "entity": insideString.entity
        }
      }
    ],
    "environment": {
      pattern: RegExp("\\$?" + envVars),
      alias: "constant"
    },
    "variable": insideString.variable,
    "function": {
      pattern: /(^|[\s;|&]|[<>]\()(?:add|apropos|apt|apt-cache|apt-get|aptitude|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cargo|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|composer|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|docker|docker-compose|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|java|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|node|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|podman|podman-compose|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|sysctl|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vcpkg|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/,
      lookbehind: true
    },
    "keyword": {
      pattern: /(^|[\s;|&]|[<>]\()(?:case|do|done|elif|else|esac|fi|for|function|if|in|select|then|until|while)(?=$|[)\s;|&])/,
      lookbehind: true
    },
    // https://www.gnu.org/software/bash/manual/html_node/Shell-Builtin-Commands.html
    "builtin": {
      pattern: /(^|[\s;|&]|[<>]\()(?:\.|:|alias|bind|break|builtin|caller|cd|command|continue|declare|echo|enable|eval|exec|exit|export|getopts|hash|help|let|local|logout|mapfile|printf|pwd|read|readarray|readonly|return|set|shift|shopt|source|test|times|trap|type|typeset|ulimit|umask|unalias|unset)(?=$|[)\s;|&])/,
      lookbehind: true,
      // Alias added to make those easier to distinguish from strings.
      alias: "class-name"
    },
    "boolean": {
      pattern: /(^|[\s;|&]|[<>]\()(?:false|true)(?=$|[)\s;|&])/,
      lookbehind: true
    },
    "file-descriptor": {
      pattern: /\B&\d\b/,
      alias: "important"
    },
    "operator": {
      // Lots of redirections here, but not just that.
      pattern: /\d?<>|>\||\+=|=[=~]?|!=?|<<[<-]?|[&\d]?>>|\d[<>]&?|[<>][&=]?|&[>&]?|\|[&|]?/,
      inside: {
        "file-descriptor": {
          pattern: /^\d/,
          alias: "important"
        }
      }
    },
    "punctuation": /\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/,
    "number": {
      pattern: /(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/,
      lookbehind: true
    }
  };
  commandAfterHeredoc.inside = Prism2.languages.bash;
  var toBeCopied = [
    "comment",
    "function-name",
    "for-or-select",
    "assign-left",
    "parameter",
    "string",
    "environment",
    "function",
    "keyword",
    "builtin",
    "boolean",
    "file-descriptor",
    "operator",
    "punctuation",
    "number"
  ];
  var inside = insideString.variable[1].inside;
  for (var i = 0; i < toBeCopied.length; i++) {
    inside[toBeCopied[i]] = Prism2.languages.bash[toBeCopied[i]];
  }
  Prism2.languages.sh = Prism2.languages.bash;
  Prism2.languages.shell = Prism2.languages.bash;
})(Prism);
(function(Prism2) {
  Prism2.languages.typescript = Prism2.languages.extend("javascript", {
    "class-name": {
      pattern: /(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/,
      lookbehind: true,
      greedy: true,
      inside: null
      // see below
    },
    "builtin": /\b(?:Array|Function|Promise|any|boolean|console|never|number|string|symbol|unknown)\b/
  });
  Prism2.languages.typescript.keyword.push(
    /\b(?:abstract|declare|is|keyof|readonly|require)\b/,
    // keywords that have to be followed by an identifier
    /\b(?:asserts|infer|interface|module|namespace|type)\b(?=\s*(?:[{_$a-zA-Z\xA0-\uFFFF]|$))/,
    // This is for `import type *, {}`
    /\btype\b(?=\s*(?:[\{*]|$))/
  );
  delete Prism2.languages.typescript["parameter"];
  delete Prism2.languages.typescript["literal-property"];
  var typeInside = Prism2.languages.extend("typescript", {});
  delete typeInside["class-name"];
  Prism2.languages.typescript["class-name"].inside = typeInside;
  Prism2.languages.insertBefore("typescript", "function", {
    "decorator": {
      pattern: /@[$\w\xA0-\uFFFF]+/,
      inside: {
        "at": {
          pattern: /^@/,
          alias: "operator"
        },
        "function": /^[\s\S]+/
      }
    },
    "generic-function": {
      // e.g. foo<T extends "bar" | "baz">( ...
      pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/,
      greedy: true,
      inside: {
        "function": /^#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/,
        "generic": {
          pattern: /<[\s\S]+/,
          // everything after the first <
          alias: "class-name",
          inside: typeInside
        }
      }
    }
  });
  Prism2.languages.ts = Prism2.languages.typescript;
})(Prism);
(function(Prism2) {
  var javascript = Prism2.util.clone(Prism2.languages.javascript);
  var space = /(?:\s|\/\/.*(?!.)|\/\*(?:[^*]|\*(?!\/))\*\/)/.source;
  var braces = /(?:\{(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])*\})/.source;
  var spread2 = /(?:\{<S>*\.{3}(?:[^{}]|<BRACES>)*\})/.source;
  function re(source, flags) {
    source = source.replace(/<S>/g, function() {
      return space;
    }).replace(/<BRACES>/g, function() {
      return braces;
    }).replace(/<SPREAD>/g, function() {
      return spread2;
    });
    return RegExp(source, flags);
  }
  spread2 = re(spread2).source;
  Prism2.languages.jsx = Prism2.languages.extend("markup", javascript);
  Prism2.languages.jsx.tag.pattern = re(
    /<\/?(?:[\w.:-]+(?:<S>+(?:[\w.:$-]+(?:=(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s{'"/>=]+|<BRACES>))?|<SPREAD>))*<S>*\/?)?>/.source
  );
  Prism2.languages.jsx.tag.inside["tag"].pattern = /^<\/?[^\s>\/]*/;
  Prism2.languages.jsx.tag.inside["attr-value"].pattern = /=(?!\{)(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s'">]+)/;
  Prism2.languages.jsx.tag.inside["tag"].inside["class-name"] = /^[A-Z]\w*(?:\.[A-Z]\w*)*$/;
  Prism2.languages.jsx.tag.inside["comment"] = javascript["comment"];
  Prism2.languages.insertBefore("inside", "attr-name", {
    "spread": {
      pattern: re(/<SPREAD>/.source),
      inside: Prism2.languages.jsx
    }
  }, Prism2.languages.jsx.tag);
  Prism2.languages.insertBefore("inside", "special-attr", {
    "script": {
      // Allow for two levels of nesting
      pattern: re(/=<BRACES>/.source),
      alias: "language-javascript",
      inside: {
        "script-punctuation": {
          pattern: /^=(?=\{)/,
          alias: "punctuation"
        },
        rest: Prism2.languages.jsx
      }
    }
  }, Prism2.languages.jsx.tag);
  var stringifyToken = function(token) {
    if (!token) {
      return "";
    }
    if (typeof token === "string") {
      return token;
    }
    if (typeof token.content === "string") {
      return token.content;
    }
    return token.content.map(stringifyToken).join("");
  };
  var walkTokens = function(tokens) {
    var openedTags = [];
    for (var i = 0; i < tokens.length; i++) {
      var token = tokens[i];
      var notTagNorBrace = false;
      if (typeof token !== "string") {
        if (token.type === "tag" && token.content[0] && token.content[0].type === "tag") {
          if (token.content[0].content[0].content === "</") {
            if (openedTags.length > 0 && openedTags[openedTags.length - 1].tagName === stringifyToken(token.content[0].content[1])) {
              openedTags.pop();
            }
          } else {
            if (token.content[token.content.length - 1].content === "/>") ;
            else {
              openedTags.push({
                tagName: stringifyToken(token.content[0].content[1]),
                openedBraces: 0
              });
            }
          }
        } else if (openedTags.length > 0 && token.type === "punctuation" && token.content === "{") {
          openedTags[openedTags.length - 1].openedBraces++;
        } else if (openedTags.length > 0 && openedTags[openedTags.length - 1].openedBraces > 0 && token.type === "punctuation" && token.content === "}") {
          openedTags[openedTags.length - 1].openedBraces--;
        } else {
          notTagNorBrace = true;
        }
      }
      if (notTagNorBrace || typeof token === "string") {
        if (openedTags.length > 0 && openedTags[openedTags.length - 1].openedBraces === 0) {
          var plainText = stringifyToken(token);
          if (i < tokens.length - 1 && (typeof tokens[i + 1] === "string" || tokens[i + 1].type === "plain-text")) {
            plainText += stringifyToken(tokens[i + 1]);
            tokens.splice(i + 1, 1);
          }
          if (i > 0 && (typeof tokens[i - 1] === "string" || tokens[i - 1].type === "plain-text")) {
            plainText = stringifyToken(tokens[i - 1]) + plainText;
            tokens.splice(i - 1, 1);
            i--;
          }
          tokens[i] = new Prism2.Token("plain-text", plainText, null, plainText);
        }
      }
      if (token.content && typeof token.content !== "string") {
        walkTokens(token.content);
      }
    }
  };
  Prism2.hooks.add("after-tokenize", function(env) {
    if (env.language !== "jsx" && env.language !== "tsx") {
      return;
    }
    walkTokens(env.tokens);
  });
})(Prism);
(function(Prism2) {
  var typescript = Prism2.util.clone(Prism2.languages.typescript);
  Prism2.languages.tsx = Prism2.languages.extend("jsx", typescript);
  delete Prism2.languages.tsx["parameter"];
  delete Prism2.languages.tsx["literal-property"];
  var tag = Prism2.languages.tsx.tag;
  tag.pattern = RegExp(/(^|[^\w$]|(?=<\/))/.source + "(?:" + tag.pattern.source + ")", tag.pattern.flags);
  tag.lookbehind = true;
})(Prism);
Prism.languages.json = {
  "property": {
    pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?=\s*:)/,
    lookbehind: true,
    greedy: true
  },
  "string": {
    pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,
    lookbehind: true,
    greedy: true
  },
  "comment": {
    pattern: /\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/,
    greedy: true
  },
  "number": /-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,
  "punctuation": /[{}[\],]/,
  "operator": /:/,
  "boolean": /\b(?:false|true)\b/,
  "null": {
    pattern: /\bnull\b/,
    alias: "keyword"
  }
};
Prism.languages.webmanifest = Prism.languages.json;
const CodeSnippet = (_props) => {
  const props = useCodeSnippetProps(_props);
  if (props.type === "single") {
    return Z(SingleCodeSnippet, {
      get codeText() {
        return props.codeText;
      },
      get copyButtonDescription() {
        return props.copyButtonDescription;
      },
      get hideCopyButton() {
        return props.hideCopyButton;
      },
      get language() {
        return props.language;
      },
      get onClick() {
        return props.onClick;
      },
      get width() {
        return props.width;
      },
      get ariaLabel() {
        return props.ariaLabel;
      }
    });
  } else if (props.type === "inline") {
    return Z(InlineCodeSnippet, {
      get codeText() {
        return props.codeText;
      },
      get language() {
        return props.language;
      },
      get onClick() {
        return props.onClick;
      },
      get ariaLabel() {
        return props.ariaLabel;
      }
    });
  } else if (props.type === "multi") {
    return Z(MultiCodeSnippet, {
      get codeText() {
        return props.codeText;
      },
      get copyButtonDescription() {
        return props.copyButtonDescription;
      },
      get collapsedNumberOfRows() {
        return props.collapsedNumberOfRows;
      },
      get hideCopyButton() {
        return props.hideCopyButton;
      },
      get language() {
        return props.language;
      },
      get onClick() {
        return props.onClick;
      },
      get width() {
        return props.width;
      },
      get wrapText() {
        return props.wrapText;
      },
      get ariaLabel() {
        return props.ariaLabel;
      },
      get defaultShow() {
        return props.defaultShow;
      }
    });
  } else if (props.type === "link") {
    return Z(LinkCodeSnippet, {
      get codeText() {
        return props.codeText;
      },
      get language() {
        return props.language;
      },
      get ariaLabel() {
        return props.ariaLabel;
      },
      get href() {
        return props.href;
      }
    });
  }
};
const useLinkProps = (props) => {
  const newProps = Ht(props, {
    get as() {
      return props.as ?? "p";
    },
    get disabled() {
      return props.disabled ?? false;
    },
    get inline() {
      return props.inline ?? false;
    },
    get size() {
      return props.size ?? "md";
    }
  }, {
    children: ["children"]
  });
  return newProps;
};
const useLinkNavigate = (props) => {
  const [visited, setVisited] = b(false);
  const navigate = xt();
  const onClickHandler = (event) => {
    event.preventDefault();
    navigate(props.href, props.isExternal);
    setVisited(true);
  };
  return {
    visited,
    onClickHandler
  };
};
const useLinkIconStyle = (props, visited) => {
  Xe(() => {
    if (props.renderIcon) {
      setSvgProperties(props.renderIcon.childNodes[0], {
        // @ts-ignore
        get className() {
          return link_icon_recipe({
            disabled: props.disabled,
            visited: visited(),
            size: props.size
          });
        }
      });
    }
  });
};
var _tmpl$$w = /* @__PURE__ */ ze(`<a tabindex=0>`);
const Link = (_props) => {
  const props = useLinkProps(_props);
  const {
    visited,
    onClickHandler
  } = useLinkNavigate(props);
  useLinkIconStyle(props, visited);
  return (() => {
    var _el$ = _tmpl$$w();
    St(_el$, "click", onClickHandler);
    I(_el$, () => isString(props.children) ? Z(Text, {
      get as() {
        return props.as;
      },
      get kind() {
        return props.size === "sm" ? "helper-text-01" : props.size === "md" ? "body-compact-01" : "body-compact-02";
      },
      color: "linkPrimary",
      get className() {
        return link_text_recipe({
          disabled: props.disabled,
          visited: visited()
        });
      },
      get children() {
        return props.children;
      }
    }) : props.children, null);
    I(_el$, () => props.renderIcon, null);
    J(() => _el$.className = link_anchor_recipe({
      inline: props.inline
    }));
    return _el$;
  })();
};
const colorChipRenderProps = {
  color: (p) => p,
  size: (p) => p
};
const iframeRenderProps = {
  src: (p) => p,
  width: (p) => p,
  height: (p) => p
};
const listItemRenderProps = {
  children: (p) => p
};
const orderedListRenderProps = {
  children: (p) => p,
  type: (p) => p
};
const unorderedListRenderProps = {
  children: (p) => p,
  type: (p) => p
};
const buttonRenderProps = {
  text: (p) => p,
  className: (p) => p,
  disabled: (p) => p,
  tabIndex: (p) => p,
  type: (p) => p,
  hasIconOnly: (p) => p,
  renderIcon: (p) => p,
  onBlur: (p) => p,
  onClick: (p) => p,
  onFocus: (p) => p,
  onMouseEnter: (p) => p,
  onMouseLeave: (p) => p
};
const textInputRenderProps = {
  value: (p) => p,
  setValue: (p) => p,
  size: (p) => p,
  disabled: (p) => p,
  helperText: (p) => p,
  hideLabel: (p) => p,
  invalidText: (p) => p,
  labelText: (p) => p,
  maxCount: (p) => p,
  onChange: (p) => p,
  onClick: (p) => p,
  placeholder: (p) => p,
  readOnly: (p) => p,
  type: (p) => p,
  status: (p) => p,
  warnText: (p) => p
};
const sectionRenderProps = {
  children: (p) => p
};
const spinnerRenderProps = {
  size: (p) => p
};
const tooltipRenderProps = {
  description: (p) => p,
  kind: (p) => p,
  showOnHoverOrClick: (p) => p,
  children: (p) => p
};
const bodyRenderProps = {
  as: (p) => p,
  children: (p) => p
};
const headerRenderProps = {
  children: (p) => p
};
const headerGlobalActionRenderProps = {
  children: (p) => p,
  className: (p) => p,
  isActive: (p) => p,
  onClick: (p) => p,
  tooltip: (p) => p,
  tooltipAlignment: (p) => p
};
const headerGlobalRenderProps = {
  children: (p) => p
};
const headerMenuButtonRenderProps = {
  onClick: (p) => p,
  menuIcon: (p) => createSvg(p),
  closeIcon: (p) => createSvg(p)
};
const headerMenuItemRenderProps = {
  text: (p) => p,
  href: (p) => p,
  isActive: (p) => p,
  tabIndex: (p) => p,
  isExternal: (p) => p
};
const headerNameRenderProps = {
  title: (p) => p,
  href: (p) => p,
  prefix: (p) => p,
  isExternal: (p) => p
};
const headerNavigationRenderProps = {
  children: (p) => p
};
const subMenuRenderProps = {
  menuName: (p) => p,
  children: (p) => p,
  ariaLabel: (p) => p,
  focusElement: (p) => p,
  onBlur: (p) => p,
  onClick: (p) => p,
  tabIndex: (p) => p
};
const subMenuItemRenderProps = {
  href: (p) => p,
  text: (p) => p,
  isActive: (p) => p,
  tabIndex: (p) => p,
  isExternal: (p) => p
};
const shellRenderProps = {
  header: (p) => p,
  body: (p) => p,
  panel: (p) => p
};
const sideNavProps = {
  children: (p) => p
};
const sideNavItemsProps = {
  children: (p) => p
};
const sideNavLinkRenderProps = {
  href: (p) => p,
  text: (p) => p,
  isActive: (p) => p,
  tabIndex: (p) => p,
  isExternal: (p) => p
};
const sideNavMenuRenderProps = {
  menuName: (p) => p,
  children: (p) => p,
  ariaLabel: (p) => p,
  focusElement: (p) => p,
  onBlur: (p) => p,
  onClick: (p) => p,
  tabIndex: (p) => p,
  defaultShow: (p) => p
};
const sideNavMenuItemRenderProps = {
  href: (p) => p,
  text: (p) => p,
  isActive: (p) => p,
  tabIndex: (p) => p,
  isExternal: (p) => p
};
const codeSnippetRenderProps = {
  codeText: (p) => p,
  language: (p) => p,
  type: (p) => p,
  collapsedNumberOfRows: (p) => p,
  copyButtonDescription: (p) => p,
  hideCopyButton: (p) => p,
  onClick: (p) => p,
  width: (p) => p,
  wrapText: (p) => p,
  ariaLabel: (p) => p,
  defaultShow: (p) => p,
  href: (p) => p,
  isExternal: (p) => p
};
const highlightRenderProps = {
  children: (p) => p
};
const linkRenderProps = {
  href: (p) => p,
  as: (p) => p,
  children: (p) => p,
  disabled: (p) => p,
  inline: (p) => p,
  renderIcon: (p) => createSvg(p),
  size: (p) => p,
  isExternal: (p) => p
};
const textRenderProps = {
  as: (p) => p,
  kind: (p) => p,
  color: (p) => p,
  className: (p) => p,
  text: (p) => p,
  children: (p) => p
};
const componentFnMap = {
  ColorChip,
  Iframe,
  OrderedList,
  UnorderedList: unorderedList,
  ListItem,
  Button,
  TextInput,
  Section,
  Spinner,
  Tooltip,
  CodeSnippet,
  Highlight,
  Link,
  Text,
  Body,
  Header: Header$1,
  HeaderGlobalAction,
  HeaderGlobalBar,
  HeaderHr,
  HeaderMenuButton,
  HeaderMenuItem,
  HeaderName,
  HeaderNavigation,
  SubMenu,
  SubMenuItem,
  Shell,
  SideNav,
  SideNavItems,
  SideNavLink,
  SideNavMenu,
  SideNavMenuItem,
  ArrowRightIcon,
  ChevronDownIcon,
  CloseIcon,
  CopyIcon,
  DocumentIcon,
  LogoGithubIcon,
  LogoNpmIcon,
  MenuIcon,
  SearchIcon,
  TooltipArrowIcon,
  WarningAltFilledIcon,
  WarningFilledIcon
};
const componentRenderPropsMap = {
  ColorChip: colorChipRenderProps,
  Iframe: iframeRenderProps,
  OrderedList: orderedListRenderProps,
  UnorderedList: unorderedListRenderProps,
  ListItem: listItemRenderProps,
  Button: buttonRenderProps,
  TextInput: textInputRenderProps,
  Section: sectionRenderProps,
  Spinner: spinnerRenderProps,
  Tooltip: tooltipRenderProps,
  CodeSnippet: codeSnippetRenderProps,
  Highlight: highlightRenderProps,
  Link: linkRenderProps,
  Text: textRenderProps,
  Body: bodyRenderProps,
  Header: headerRenderProps,
  HeaderGlobalAction: headerGlobalActionRenderProps,
  HeaderGlobalBar: headerGlobalRenderProps,
  HeaderMenuButton: headerMenuButtonRenderProps,
  HeaderMenuItem: headerMenuItemRenderProps,
  HeaderName: headerNameRenderProps,
  HeaderNavigation: headerNavigationRenderProps,
  SubMenu: subMenuRenderProps,
  SubMenuItem: subMenuItemRenderProps,
  Shell: shellRenderProps,
  SideNav: sideNavProps,
  SideNavItems: sideNavItemsProps,
  SideNavLink: sideNavLinkRenderProps,
  SideNavMenu: sideNavMenuRenderProps,
  SideNavMenuItem: sideNavMenuItemRenderProps,
  ArrowRightIcon: {},
  ChevronDownIcon: {},
  CloseIcon: {},
  CopyIcon: {},
  DocumentIcon: {},
  LogoGithubIcon: {},
  LogoNpmIcon: {},
  MenuIcon: {},
  SearchIcon: {},
  TooltipArrowIcon: {},
  WarningAltFilledIcon: {},
  WarningFilledIcon: {}
};
const renderFromJSON = (json) => {
  return render(json);
};
const render = (json) => {
  if (isArray(json)) {
    return json.map(render);
  } else if (isObject(json)) {
    if (!json.type) {
      return json;
    } else if (json.type === "element") {
      return renderElement(json);
    } else if (json.type === "component") {
      return renderComponent(json);
    } else if (json.type === "text") {
      return renderTextNode(json);
    }
  }
};
const renderElement = (json) => {
  const element = document.createElement(json.name);
  for (const key in json.props) {
    if (key === "children") {
      for (const child of render(json.props.children)) {
        if (isHTMLElement(child)) {
          element.appendChild(child);
        } else {
          I(element, child);
        }
      }
    } else if (key === "style") {
      for (const styleKey in json.props.style) {
        element.style[styleKey] = json.props.style[styleKey];
      }
    } else if (key in element) {
      element[key] = json.props[key];
    } else {
      element.setAttribute(key, json.props[key]);
    }
  }
  return element;
};
const renderComponent = (json) => {
  const props = configProps(json);
  const componentFn = componentFnMap[json.name];
  return componentFn(props);
};
const renderTextNode = (json) => {
  const textNode = document.createTextNode(json.props.text);
  return textNode;
};
const configProps = (json) => {
  const newProps = {};
  for (const key in json.props) {
    if (!componentRenderPropsMap[json.name][key]) {
      newProps[key] = json.props[key];
    } else if (isObject(json.props[key])) {
      newProps[key] = componentRenderPropsMap[json.name][key](render(json.props[key]));
    } else {
      newProps[key] = componentRenderPropsMap[json.name][key](json.props[key]);
    }
  }
  return newProps;
};

const isInCoreJSXPage = pathname => {
  return /\/core-jsx\//.test(pathname);
};
const isInCoreJSPage = pathname => {
  return /\/core-js\//.test(pathname);
};
const isInUIJSXPage = pathname => {
  return /\/ui-jsx\//.test(pathname);
};
const isInUIJSPage = pathname => {
  return /\/ui-js\//.test(pathname);
};
const isInIsJSPage = pathname => {
  return /\/is-js\//.test(pathname);
};

const Header = () => {
  const navigate = xt();
  const pathname = $t();
  const {
    language
  } = useLocale();
  return Z(Header$1, {
    get children() {
      return [Z(HeaderMenuButton, {
        get menuIcon() {
          return Z(MenuIcon, {});
        }
      }), Z(HeaderName, {
        get title() {
          return t('header.title');
        },
        get href() {
          return `/${language()}/core-jsx/overview/gettingStarted`;
        },
        get prefix() {
          return t('header.prefix');
        }
      }), Z(HeaderHr, {}), Z(HeaderNavigation, {
        get children() {
          return [Z(HeaderMenuItem, {
            text: "core-jsx",
            get href() {
              return `/${language()}/core-jsx/overview/gettingStarted`;
            },
            get isActive() {
              return isInCoreJSXPage(pathname());
            }
          }), Z(HeaderMenuItem, {
            text: "ui-jsx",
            get href() {
              return `/${language()}/ui-jsx/overview/gettingStarted`;
            },
            get isActive() {
              return isInUIJSXPage(pathname());
            }
          }), Z(SubMenu, {
            get menuName() {
              return t('header.items.legacy');
            },
            get children() {
              return [Z(SubMenuItem, {
                text: "core-js",
                get href() {
                  return `/${language()}/core-js/overview/gettingStarted`;
                },
                get isActive() {
                  return isInCoreJSPage(pathname());
                }
              }), Z(SubMenuItem, {
                text: "ui-js",
                get href() {
                  return `/${language()}/ui-js/overview/gettingStarted`;
                },
                get isActive() {
                  return isInUIJSPage(pathname());
                }
              }), Z(SubMenuItem, {
                text: "is-js",
                get href() {
                  return `/${language()}/is-js/overview/gettingStarted`;
                },
                get isActive() {
                  return isInIsJSPage(pathname());
                }
              })];
            }
          })];
        }
      }), Z(HeaderGlobalBar, {
        get children() {
          return [Z(SubMenu, {
            get menuName() {
              return t('header.items.language');
            },
            get children() {
              return Z(SubMenuItem, {
                text: "\uD55C\uAD6D\uC5B4",
                get href() {
                  return `/ko/${pathname().slice(4)}`;
                },
                get isActive() {
                  return language() === 'ko';
                }
              });
            }
          }), Z(HeaderGlobalAction, {
            tooltip: "Github",
            onClick: () => navigate('https://github.com/ILikeMintChocolate/rvjs', true),
            get children() {
              return Z(LogoGithubIcon, {
                className: header_icon_style
              });
            }
          }), Z(HeaderGlobalAction, {
            tooltip: "npm",
            onClick: () => navigate('https://npmjs.com/package/@rvjs/core', true),
            get children() {
              return Z(LogoNpmIcon, {
                className: header_icon_style
              });
            }
          })];
        }
      })];
    }
  });
};

const CoreJSSideNav = () => {
  const pathname = $t();
  const {
    language
  } = useLocale();
  return Z(SideNav, {
    get children() {
      return Z(SideNavItems, {
        get children() {
          return [Z(SideNavMenu, {
            get menuName() {
              return t('sideNav.coreJS.overview.menuName');
            },
            defaultShow: true,
            get children() {
              return [Z(SideNavMenuItem, {
                get text() {
                  return t('sideNav.coreJS.overview.items.gettingStarted');
                },
                get href() {
                  return `/${language()}/core-js/overview/gettingStarted`;
                },
                get isActive() {
                  return pathname() === '/core-js/overview/gettingStarted';
                }
              }), Z(SideNavMenuItem, {
                get text() {
                  return t('sideNav.coreJS.overview.items.guide');
                },
                get href() {
                  return `/${language()}/core-js/overview/guide`;
                },
                get isActive() {
                  return pathname() === '/core-js/overview/guide';
                }
              }), Z(SideNavMenuItem, {
                get text() {
                  return t('sideNav.coreJS.overview.items.benchmark');
                },
                get href() {
                  return `/${language()}/core-js/overview/benchmark`;
                },
                get isActive() {
                  return pathname() === '/core-js/overview/benchmark';
                }
              })];
            }
          }), Z(SideNavMenu, {
            get menuName() {
              return t('sideNav.coreJS.render.menuName');
            },
            defaultShow: true,
            get children() {
              return [Z(SideNavMenuItem, {
                text: "element",
                get href() {
                  return `/${language()}/core-js/dom/element`;
                },
                get isActive() {
                  return pathname() === '/core-js/dom/element';
                }
              }), Z(SideNavMenuItem, {
                text: "component",
                get href() {
                  return `/${language()}/core-js/dom/component`;
                },
                get isActive() {
                  return pathname() === '/core-js/dom/component';
                }
              }), Z(SideNavMenuItem, {
                text: "root",
                get href() {
                  return `/${language()}/core-js/dom/root`;
                },
                get isActive() {
                  return pathname() === '/core-js/dom/root';
                }
              }), Z(SideNavMenuItem, {
                text: "textNode",
                get href() {
                  return `/${language()}/core-js/dom/textNode`;
                },
                get isActive() {
                  return pathname() === '/core-js/dom/textNode';
                }
              }), Z(SideNavMenuItem, {
                text: "For",
                get href() {
                  return `/${language()}/core-js/dom/for`;
                },
                get isActive() {
                  return pathname() === '/core-js/dom/for';
                }
              }), Z(SideNavMenuItem, {
                text: "Switch",
                get href() {
                  return `/${language()}/core-js/dom/switch`;
                },
                get isActive() {
                  return pathname() === '/core-js/dom/switch';
                }
              }), Z(SideNavMenuItem, {
                text: "Toggle",
                get href() {
                  return `/${language()}/core-js/dom/toggle`;
                },
                get isActive() {
                  return pathname() === '/core-js/dom/toggle';
                }
              }), Z(SideNavMenuItem, {
                text: "Suspense",
                get href() {
                  return `/${language()}/core-js/dom/suspense`;
                },
                get isActive() {
                  return pathname() === '/core-js/dom/suspense';
                }
              })];
            }
          }), Z(SideNavMenu, {
            get menuName() {
              return t('sideNav.coreJS.reactive.menuName');
            },
            defaultShow: true,
            get children() {
              return [Z(SideNavMenuItem, {
                text: "useState",
                get href() {
                  return `/${language()}/core-js/reactive/useState`;
                },
                get isActive() {
                  return pathname() === '/core-js/reactive/useState';
                }
              }), Z(SideNavMenuItem, {
                text: "useGlobalState",
                get href() {
                  return `/${language()}/core-js/reactive/useGlobalState`;
                },
                get isActive() {
                  return pathname() === '/core-js/reactive/useGlobalState';
                }
              }), Z(SideNavMenuItem, {
                text: "useEffect",
                get href() {
                  return `/${language()}/core-js/reactive/useEffect`;
                },
                get isActive() {
                  return pathname() === '/core-js/reactive/useEffect';
                }
              }), Z(SideNavMenuItem, {
                text: "useRef",
                get href() {
                  return `/${language()}/core-js/reactive/useRef`;
                },
                get isActive() {
                  return pathname() === '/core-js/reactive/useRef';
                }
              }), Z(SideNavMenuItem, {
                text: "useElement",
                get href() {
                  return `/${language()}/core-js/reactive/useElement`;
                },
                get isActive() {
                  return pathname() === '/core-js/reactive/useElement';
                }
              }), Z(SideNavMenuItem, {
                text: "dynamic",
                get href() {
                  return `/${language()}/core-js/reactive/dynamic`;
                },
                get isActive() {
                  return pathname() === '/core-js/reactive/dynamic';
                }
              }), Z(SideNavMenuItem, {
                text: "prop",
                get href() {
                  return `/${language()}/core-js/reactive/prop`;
                },
                get isActive() {
                  return pathname() === '/core-js/reactive/prop';
                }
              }), Z(SideNavMenuItem, {
                text: "createContext",
                get href() {
                  return `/${language()}/core-js/reactive/createContext`;
                },
                get isActive() {
                  return pathname() === '/core-js/reactive/createContext';
                }
              }), Z(SideNavMenuItem, {
                text: "onMount",
                get href() {
                  return `/${language()}/core-js/reactive/onMount`;
                },
                get isActive() {
                  return pathname() === '/core-js/reactive/onMount';
                }
              }), Z(SideNavMenuItem, {
                text: "onDestroy",
                get href() {
                  return `/${language()}/core-js/reactive/onDestroy`;
                },
                get isActive() {
                  return pathname() === '/core-js/reactive/onDestroy';
                }
              })];
            }
          }), Z(SideNavMenu, {
            get menuName() {
              return t('sideNav.coreJS.router.menuName');
            },
            defaultShow: true,
            get children() {
              return [Z(SideNavMenuItem, {
                text: "Router",
                get href() {
                  return `/${language()}/core-js/router/router`;
                },
                get isActive() {
                  return pathname() === '/core-js/router/router';
                }
              }), Z(SideNavMenuItem, {
                text: "useNavigate",
                get href() {
                  return `/${language()}/core-js/router/useNavigate`;
                },
                get isActive() {
                  return pathname() === '/core-js/router/useNavigate';
                }
              }), Z(SideNavMenuItem, {
                text: "useOutlet",
                get href() {
                  return `/${language()}/core-js/router/useOutlet`;
                },
                get isActive() {
                  return pathname() === '/core-js/router/useOutlet';
                }
              }), Z(SideNavMenuItem, {
                text: "usePathname",
                get href() {
                  return `/${language()}/core-js/router/usePathname`;
                },
                get isActive() {
                  return pathname() === '/core-js/router/usePathname';
                }
              }), Z(SideNavMenuItem, {
                text: "usePathEffect",
                get href() {
                  return `/${language()}/core-js/router/usePathEffect`;
                },
                get isActive() {
                  return pathname() === '/core-js/router/usePathEffect';
                }
              }), Z(SideNavMenuItem, {
                text: "usePathParams",
                get href() {
                  return `/${language()}/core-js/router/usePathParams`;
                },
                get isActive() {
                  return pathname() === '/core-js/router/usePathParams';
                }
              }), Z(SideNavMenuItem, {
                text: "useQueryParams",
                get href() {
                  return `/${language()}/core-js/router/useQueryParams`;
                },
                get isActive() {
                  return pathname() === '/core-js/router/useQueryParams';
                }
              })];
            }
          })];
        }
      });
    }
  });
};

const CoreJSXSideNav = () => {
  const pathname = $t();
  const {
    language
  } = useLocale();
  return Z(SideNav, {
    get children() {
      return Z(SideNavItems, {
        get children() {
          return [Z(SideNavMenu, {
            get menuName() {
              return t('sideNav.coreJSX.overview.menuName');
            },
            defaultShow: true,
            get children() {
              return [Z(SideNavMenuItem, {
                get text() {
                  return t('sideNav.coreJSX.overview.items.gettingStarted');
                },
                get href() {
                  return `/${language()}/core-jsx/overview/gettingStarted`;
                },
                get isActive() {
                  return pathname() === '/core-jsx/overview/gettingStarted';
                }
              }), Z(SideNavMenuItem, {
                get text() {
                  return t('sideNav.coreJSX.overview.items.benchmark');
                },
                get href() {
                  return `/${language()}/core-jsx/overview/benchmark`;
                },
                get isActive() {
                  return pathname() === '/core-jsx/overview/benchmark';
                }
              })];
            }
          }), Z(SideNavMenu, {
            get menuName() {
              return t('sideNav.coreJSX.render.menuName');
            },
            defaultShow: true,
            get children() {
              return [Z(SideNavMenuItem, {
                text: "element",
                get href() {
                  return `/${language()}/core-jsx/render/element`;
                },
                get isActive() {
                  return pathname() === '/core-jsx/render/element';
                }
              }), Z(SideNavMenuItem, {
                text: "root",
                get href() {
                  return `/${language()}/core-jsx/render/root`;
                },
                get isActive() {
                  return pathname() === '/core-jsx/render/root';
                }
              })];
            }
          }), Z(SideNavMenu, {
            get menuName() {
              return t('sideNav.coreJSX.component.menuName');
            },
            defaultShow: true,
            get children() {
              return [Z(SideNavMenuItem, {
                text: "For",
                get href() {
                  return `/${language()}/core-jsx/component/for`;
                },
                get isActive() {
                  return pathname() === '/core-jsx/component/for';
                }
              }), Z(SideNavMenuItem, {
                text: "Switch / Case",
                get href() {
                  return `/${language()}/core-jsx/component/switchCase`;
                },
                get isActive() {
                  return pathname() === '/core-jsx/component/switchCase';
                }
              }), Z(SideNavMenuItem, {
                text: "Toggle",
                get href() {
                  return `/${language()}/core-jsx/component/toggle`;
                },
                get isActive() {
                  return pathname() === '/core-jsx/component/toggle';
                }
              }), Z(SideNavMenuItem, {
                text: "Refresh",
                get href() {
                  return `/${language()}/core-jsx/component/refresh`;
                },
                get isActive() {
                  return pathname() === '/core-jsx/component/refresh';
                }
              }), Z(SideNavMenuItem, {
                text: "Tag",
                get href() {
                  return `/${language()}/core-jsx/component/tag`;
                },
                get isActive() {
                  return pathname() === '/core-jsx/component/tag';
                }
              }), Z(SideNavMenuItem, {
                text: "Defined",
                get href() {
                  return `/${language()}/core-jsx/component/defined`;
                },
                get isActive() {
                  return pathname() === '/core-jsx/component/defined';
                }
              })];
            }
          }), Z(SideNavMenu, {
            get menuName() {
              return t('sideNav.coreJSX.reactive.menuName');
            },
            defaultShow: true,
            get children() {
              return [Z(SideNavMenuItem, {
                text: "useState",
                get href() {
                  return `/${language()}/core-jsx/reactive/useState`;
                },
                get isActive() {
                  return pathname() === '/core-jsx/reactive/useState';
                }
              }), Z(SideNavMenuItem, {
                text: "useGlobalState",
                get href() {
                  return `/${language()}/core-jsx/reactive/useGlobalState`;
                },
                get isActive() {
                  return pathname() === '/core-jsx/reactive/useGlobalState';
                }
              }), Z(SideNavMenuItem, {
                text: "useEffect",
                get href() {
                  return `/${language()}/core-jsx/reactive/useEffect`;
                },
                get isActive() {
                  return pathname() === '/core-jsx/reactive/useEffect';
                }
              }), Z(SideNavMenuItem, {
                text: "useElement",
                get href() {
                  return `/${language()}/core-jsx/reactive/useElement`;
                },
                get isActive() {
                  return pathname() === '/core-jsx/reactive/useElement';
                }
              }), Z(SideNavMenuItem, {
                text: "createContext",
                get href() {
                  return `/${language()}/core-jsx/reactive/createContext`;
                },
                get isActive() {
                  return pathname() === '/core-jsx/reactive/createContext';
                }
              }), Z(SideNavMenuItem, {
                text: "onMount",
                get href() {
                  return `/${language()}/core-jsx/reactive/onMount`;
                },
                get isActive() {
                  return pathname() === '/core-jsx/reactive/onMount';
                }
              }), Z(SideNavMenuItem, {
                text: "onDestroy",
                get href() {
                  return `/${language()}/core-jsx/reactive/onDestroy`;
                },
                get isActive() {
                  return pathname() === '/core-jsx/reactive/onDestroy';
                }
              })];
            }
          }), Z(SideNavMenu, {
            get menuName() {
              return t('sideNav.coreJSX.router.menuName');
            },
            defaultShow: true,
            get children() {
              return [Z(SideNavMenuItem, {
                text: "Router",
                get href() {
                  return `/${language()}/core-jsx/router/router`;
                },
                get isActive() {
                  return pathname() === '/core-jsx/router/router';
                }
              }), Z(SideNavMenuItem, {
                text: "Route",
                get href() {
                  return `/${language()}/core-jsx/router/route`;
                },
                get isActive() {
                  return pathname() === '/core-jsx/router/route';
                }
              }), Z(SideNavMenuItem, {
                text: "useNavigate",
                get href() {
                  return `/${language()}/core-jsx/router/useNavigate`;
                },
                get isActive() {
                  return pathname() === '/core-jsx/router/useNavigate';
                }
              }), Z(SideNavMenuItem, {
                text: "useOutlet",
                get href() {
                  return `/${language()}/core-jsx/router/useOutlet`;
                },
                get isActive() {
                  return pathname() === '/core-jsx/router/useOutlet';
                }
              }), Z(SideNavMenuItem, {
                text: "usePathname",
                get href() {
                  return `/${language()}/core-jsx/router/usePathname`;
                },
                get isActive() {
                  return pathname() === '/core-jsx/router/usePathname';
                }
              }), Z(SideNavMenuItem, {
                text: "usePathParams",
                get href() {
                  return `/${language()}/core-jsx/router/usePathParams`;
                },
                get isActive() {
                  return pathname() === '/core-jsx/router/usePathParams';
                }
              }), Z(SideNavMenuItem, {
                text: "useQueryParams",
                get href() {
                  return `/${language()}/core-jsx/router/useQueryParams`;
                },
                get isActive() {
                  return pathname() === '/core-jsx/router/useQueryParams';
                }
              })];
            }
          }), Z(SideNavMenu, {
            get menuName() {
              return t('sideNav.coreJSX.util.menuName');
            },
            defaultShow: true,
            get children() {
              return Z(SideNavMenuItem, {
                text: "defineProps",
                get href() {
                  return `/${language()}/core-jsx/util/defineProps`;
                },
                get isActive() {
                  return pathname() === '/core-jsx/util/defineProps';
                }
              });
            }
          })];
        }
      });
    }
  });
};

const IsJSSideNav = () => {
  const pathname = $t();
  const {
    language
  } = useLocale();
  return Z(SideNav, {
    get children() {
      return Z(SideNavItems, {
        get children() {
          return [Z(SideNavMenu, {
            get menuName() {
              return t('sideNav.isJS.overview.menuName');
            },
            defaultShow: true,
            get children() {
              return Z(SideNavMenuItem, {
                get text() {
                  return t('sideNav.isJS.overview.items.gettingStarted');
                },
                get href() {
                  return `/${language()}/is-js/overview/gettingStarted`;
                },
                get isActive() {
                  return pathname() === '/is-js/overview/gettingStarted';
                }
              });
            }
          }), Z(SideNavMenu, {
            get menuName() {
              return t('sideNav.isJS.type.menuName');
            },
            defaultShow: true,
            get children() {
              return [Z(SideNavMenuItem, {
                get text() {
                  return t('sideNav.isJS.type.items.primitive');
                },
                get href() {
                  return `/${language()}/is-js/type/primitive`;
                },
                get isActive() {
                  return pathname() === '/is-js/type/primitive';
                }
              }), Z(SideNavMenuItem, {
                get text() {
                  return t('sideNav.isJS.type.items.reference');
                },
                get href() {
                  return `/${language()}/is-js/type/reference`;
                },
                get isActive() {
                  return pathname() === '/is-js/type/reference';
                }
              }), Z(SideNavMenuItem, {
                get text() {
                  return t('sideNav.isJS.type.items.composite');
                },
                get href() {
                  return `/${language()}/is-js/type/composite`;
                },
                get isActive() {
                  return pathname() === '/is-js/type/composite';
                }
              }), Z(SideNavMenuItem, {
                get text() {
                  return t('sideNav.isJS.type.items.@rvjs/core');
                },
                get href() {
                  return `/${language()}/is-js/type/rvjs-core`;
                },
                get isActive() {
                  return pathname() === '/is-js/type/rvjs-core';
                }
              })];
            }
          })];
        }
      });
    }
  });
};

const usePageCategory = () => {
  const pathname = $t();
  const [pageCategory, setPageCategory] = b(null);
  const setPageCategoryByPathname = pathname => {
    if (isInCoreJSXPage(pathname)) {
      setPageCategory('CORE_JSX');
    } else if (isInCoreJSPage(pathname)) {
      setPageCategory('CORE_JS');
    } else if (isInUIJSXPage(pathname)) {
      setPageCategory('UI_JSX');
    } else if (isInUIJSPage(pathname)) {
      setPageCategory('UI_JS');
    } else if (isInIsJSPage(pathname)) {
      setPageCategory('IS_JS');
    } else {
      setPageCategory(null);
    }
  };
  Xe(() => {
    setPageCategoryByPathname(pathname());
  });
  $(() => {
    setPageCategoryByPathname(pathname());
  }, [pathname]);
  return pageCategory;
};

const UIJSSideNav = () => {
  const pathname = $t();
  const {
    language
  } = useLocale();
  return Z(SideNav, {
    get children() {
      return Z(SideNavItems, {
        get children() {
          return [Z(SideNavMenu, {
            get menuName() {
              return t('sideNav.uiJS.overview.menuName');
            },
            defaultShow: true,
            get children() {
              return Z(SideNavMenuItem, {
                get text() {
                  return t('sideNav.uiJS.overview.items.gettingStarted');
                },
                get href() {
                  return `/${language()}/ui-js/overview/gettingStarted`;
                },
                get isActive() {
                  return pathname() === '/ui-js/overview/gettingStarted';
                }
              });
            }
          }), Z(SideNavMenu, {
            get menuName() {
              return t('sideNav.uiJS.cssVars.menuName');
            },
            defaultShow: true,
            get children() {
              return [Z(SideNavMenuItem, {
                text: "color",
                get href() {
                  return `/${language()}/ui-js/vars/color`;
                },
                get isActive() {
                  return pathname() === '/ui-js/vars/color';
                }
              }), Z(SideNavMenuItem, {
                text: "font",
                get href() {
                  return `/${language()}/ui-js/vars/font`;
                },
                get isActive() {
                  return pathname() === '/ui-js/vars/font';
                }
              }), Z(SideNavMenuItem, {
                text: "opacity",
                get href() {
                  return `/${language()}/ui-js/vars/opacity`;
                },
                get isActive() {
                  return pathname() === '/ui-js/vars/opacity';
                }
              }), Z(SideNavMenuItem, {
                text: "spacing",
                get href() {
                  return `/${language()}/ui-js/vars/spacing`;
                },
                get isActive() {
                  return pathname() === '/ui-js/vars/spacing';
                }
              })];
            }
          }), Z(SideNavMenu, {
            get menuName() {
              return t('sideNav.uiJS.layout.menuName');
            },
            defaultShow: true,
            get children() {
              return [Z(SideNavMenuItem, {
                text: "Box",
                get href() {
                  return `/${language()}/ui-js/layout/box`;
                },
                get isActive() {
                  return pathname() === '/ui-js/layout/box';
                }
              }), Z(SideNavMenuItem, {
                text: "Flex",
                get href() {
                  return `/${language()}/ui-js/layout/flex`;
                },
                get isActive() {
                  return pathname() === '/ui-js/layout/flex';
                }
              }), Z(SideNavMenuItem, {
                text: "Grid",
                get href() {
                  return `/${language()}/ui-js/layout/grid`;
                },
                get isActive() {
                  return pathname() === '/ui-js/layout/grid';
                }
              }), Z(SideNavMenuItem, {
                text: "Section",
                get href() {
                  return `/${language()}/ui-js/layout/section`;
                },
                get isActive() {
                  return pathname() === '/ui-js/layout/section';
                }
              })];
            }
          }), Z(SideNavMenu, {
            get menuName() {
              return t('sideNav.uiJS.form.menuName');
            },
            defaultShow: true,
            get children() {
              return [Z(SideNavMenuItem, {
                text: "Button",
                get href() {
                  return `/${language()}/ui-js/form/button`;
                },
                get isActive() {
                  return pathname() === '/ui-js/form/button';
                }
              }), Z(SideNavMenuItem, {
                text: "TextInput",
                get href() {
                  return `/${language()}/ui-js/form/textInput`;
                },
                get isActive() {
                  return pathname() === '/ui-js/form/textInput';
                }
              })];
            }
          }), Z(SideNavMenu, {
            get menuName() {
              return t('sideNav.uiJS.typography.menuName');
            },
            defaultShow: true,
            get children() {
              return [Z(SideNavMenuItem, {
                text: "Text",
                get href() {
                  return `/${language()}/ui-js/typography/text`;
                },
                get isActive() {
                  return pathname() === '/ui-js/typography/text';
                }
              }), Z(SideNavMenuItem, {
                text: "Highlight",
                get href() {
                  return `/${language()}/ui-js/typography/highlight`;
                },
                get isActive() {
                  return pathname() === '/ui-js/typography/highlight';
                }
              }), Z(SideNavMenuItem, {
                text: "Link",
                get href() {
                  return `/${language()}/ui-js/typography/link`;
                },
                get isActive() {
                  return pathname() === '/ui-js/typography/link';
                }
              }), Z(SideNavMenuItem, {
                text: "InlineCodeSnippet",
                get href() {
                  return `/${language()}/ui-js/typography/inlineCodeSnippet`;
                },
                get isActive() {
                  return pathname() === '/ui-js/typography/inlineCodeSnippet';
                }
              }), Z(SideNavMenuItem, {
                text: "LinkCodeSnippet",
                get href() {
                  return `/${language()}/ui-js/typography/linkCodeSnippet`;
                },
                get isActive() {
                  return pathname() === '/ui-js/typography/linkCodeSnippet';
                }
              }), Z(SideNavMenuItem, {
                text: "SingleCodeSnippet",
                get href() {
                  return `/${language()}/ui-js/typography/singleCodeSnippet`;
                },
                get isActive() {
                  return pathname() === '/ui-js/typography/singleCodeSnippet';
                }
              }), Z(SideNavMenuItem, {
                text: "MultiCodeSnippet",
                get href() {
                  return `/${language()}/ui-js/typography/multiCodeSnippet`;
                },
                get isActive() {
                  return pathname() === '/ui-js/typography/multiCodeSnippet';
                }
              })];
            }
          }), Z(SideNavMenu, {
            get menuName() {
              return t('sideNav.uiJS.content.menuName');
            },
            defaultShow: true,
            get children() {
              return [Z(SideNavMenuItem, {
                text: "ColorChip",
                get href() {
                  return `/${language()}/ui-js/content/colorChip`;
                },
                get isActive() {
                  return pathname() === '/ui-js/content/colorChip';
                }
              }), Z(SideNavMenuItem, {
                text: "Icon",
                get href() {
                  return `/${language()}/ui-js/content/icon`;
                },
                get isActive() {
                  return pathname() === '/ui-js/content/icon';
                }
              }), Z(SideNavMenuItem, {
                text: "Iframe",
                get href() {
                  return `/${language()}/ui-js/content/iframe`;
                },
                get isActive() {
                  return pathname() === '/ui-js/content/iframe';
                }
              }), Z(SideNavMenuItem, {
                text: "OrderedList",
                get href() {
                  return `/${language()}/ui-js/content/orderedList`;
                },
                get isActive() {
                  return pathname() === '/ui-js/content/orderedList';
                }
              }), Z(SideNavMenuItem, {
                text: "UnorderedList",
                get href() {
                  return `/${language()}/ui-js/content/unorderedList`;
                },
                get isActive() {
                  return pathname() === '/ui-js/content/unorderedList';
                }
              }), Z(SideNavMenuItem, {
                text: "ListItem",
                get href() {
                  return `/${language()}/ui-js/content/listItem`;
                },
                get isActive() {
                  return pathname() === '/ui-js/content/listItem';
                }
              })];
            }
          }), Z(SideNavMenu, {
            get menuName() {
              return t('sideNav.uiJS.shell.menuName');
            },
            defaultShow: true,
            get children() {
              return [Z(SideNavMenuItem, {
                text: "Body",
                get href() {
                  return `/${language()}/ui-js/shell/body`;
                },
                get isActive() {
                  return pathname() === '/ui-js/shell/body';
                }
              }), Z(SideNavMenuItem, {
                text: "Header",
                get href() {
                  return `/${language()}/ui-js/shell/header`;
                },
                get isActive() {
                  return pathname() === '/ui-js/shell/header';
                }
              }), Z(SideNavMenuItem, {
                text: "HeaderGlobalAction",
                get href() {
                  return `/${language()}/ui-js/shell/headerGlobalAction`;
                },
                get isActive() {
                  return pathname() === '/ui-js/shell/headerGlobalAction';
                }
              }), Z(SideNavMenuItem, {
                text: "HeaderGlobalBar",
                get href() {
                  return `/${language()}/ui-js/shell/headerGlobalBar`;
                },
                get isActive() {
                  return pathname() === '/ui-js/shell/headerGlobalBar';
                }
              }), Z(SideNavMenuItem, {
                text: "HeaderHr",
                get href() {
                  return `/${language()}/ui-js/shell/headerHr`;
                },
                get isActive() {
                  return pathname() === '/ui-js/shell/headerHr';
                }
              }), Z(SideNavMenuItem, {
                text: "HeaderMenuButton",
                get href() {
                  return `/${language()}/ui-js/shell/headerMenuButton`;
                },
                get isActive() {
                  return pathname() === '/ui-js/shell/headerMenuButton';
                }
              }), Z(SideNavMenuItem, {
                text: "HeaderMenuItem",
                get href() {
                  return `/${language()}/ui-js/shell/headerMenuItem`;
                },
                get isActive() {
                  return pathname() === '/ui-js/shell/headerMenuItem';
                }
              }), Z(SideNavMenuItem, {
                text: "HeaderName",
                get href() {
                  return `/${language()}/ui-js/shell/headerName`;
                },
                get isActive() {
                  return pathname() === '/ui-js/shell/headerName';
                }
              }), Z(SideNavMenuItem, {
                text: "HeaderNavigation",
                get href() {
                  return `/${language()}/ui-js/shell/headerNavigation`;
                },
                get isActive() {
                  return pathname() === '/ui-js/shell/headerNavigation';
                }
              }), Z(SideNavMenuItem, {
                text: "SubMenu",
                get href() {
                  return `/${language()}/ui-js/shell/subMenu`;
                },
                get isActive() {
                  return pathname() === '/ui-js/shell/subMenu';
                }
              }), Z(SideNavMenuItem, {
                text: "SubMenuItem",
                get href() {
                  return `/${language()}/ui-js/shell/subMenuItem`;
                },
                get isActive() {
                  return pathname() === '/ui-js/shell/subMenuItem';
                }
              }), Z(SideNavMenuItem, {
                text: "SideNav",
                get href() {
                  return `/${language()}/ui-js/shell/sideNav`;
                },
                get isActive() {
                  return pathname() === '/ui-js/shell/sideNav';
                }
              }), Z(SideNavMenuItem, {
                text: "SideNavItems",
                get href() {
                  return `/${language()}/ui-js/shell/sideNavItems`;
                },
                get isActive() {
                  return pathname() === '/ui-js/shell/sideNavItems';
                }
              }), Z(SideNavMenuItem, {
                text: "SideNavLink",
                get href() {
                  return `/${language()}/ui-js/shell/sideNavLink`;
                },
                get isActive() {
                  return pathname() === '/ui-js/shell/sideNavLink';
                }
              }), Z(SideNavMenuItem, {
                text: "SideNavMenu",
                get href() {
                  return `/${language()}/ui-js/shell/sideNavMenu`;
                },
                get isActive() {
                  return pathname() === '/ui-js/shell/sideNavMenu';
                }
              }), Z(SideNavMenuItem, {
                text: "SideNavMenuItem",
                get href() {
                  return `/${language()}/ui-js/shell/sideNavMenuItem`;
                },
                get isActive() {
                  return pathname() === '/ui-js/shell/sideNavMenuItem';
                }
              })];
            }
          }), Z(SideNavMenu, {
            get menuName() {
              return t('sideNav.uiJS.overlay.menuName');
            },
            defaultShow: true,
            get children() {
              return Z(SideNavMenuItem, {
                text: "Tooltip",
                get href() {
                  return `/${language()}/ui-js/overlay/tooltip`;
                },
                get isActive() {
                  return pathname() === '/ui-js/overlay/tooltip';
                }
              });
            }
          }), Z(SideNavMenu, {
            get menuName() {
              return t('sideNav.uiJS.util.menuName');
            },
            defaultShow: true,
            get children() {
              return Z(SideNavMenuItem, {
                text: "renderComponentFromJSON",
                get href() {
                  return `/${language()}/ui-js/util/renderComponentFromJSON`;
                },
                get isActive() {
                  return pathname() === '/ui-js/util/renderComponentFromJSON';
                }
              });
            }
          })];
        }
      });
    }
  });
};

const UIJSXSideNav = () => {
  const pathname = $t();
  const {
    language
  } = useLocale();
  return Z(SideNav, {
    get children() {
      return Z(SideNavItems, {
        get children() {
          return [Z(SideNavMenu, {
            get menuName() {
              return t('sideNav.uiJSX.overview.menuName');
            },
            defaultShow: true,
            get children() {
              return Z(SideNavMenuItem, {
                get text() {
                  return t('sideNav.uiJSX.overview.items.gettingStarted');
                },
                get href() {
                  return `/${language()}/ui-jsx/overview/gettingStarted`;
                },
                get isActive() {
                  return pathname() === '/ui-jsx/overview/gettingStarted';
                }
              });
            }
          }), Z(SideNavMenu, {
            get menuName() {
              return t('sideNav.uiJSX.cssVars.menuName');
            },
            defaultShow: true,
            get children() {
              return [Z(SideNavMenuItem, {
                text: "color",
                get href() {
                  return `/${language()}/ui-jsx/vars/color`;
                },
                get isActive() {
                  return pathname() === '/ui-jsx/vars/color';
                }
              }), Z(SideNavMenuItem, {
                text: "font",
                get href() {
                  return `/${language()}/ui-jsx/vars/font`;
                },
                get isActive() {
                  return pathname() === '/ui-jsx/vars/font';
                }
              }), Z(SideNavMenuItem, {
                text: "opacity",
                get href() {
                  return `/${language()}/ui-jsx/vars/opacity`;
                },
                get isActive() {
                  return pathname() === '/ui-jsx/vars/opacity';
                }
              }), Z(SideNavMenuItem, {
                text: "spacing",
                get href() {
                  return `/${language()}/ui-jsx/vars/spacing`;
                },
                get isActive() {
                  return pathname() === '/ui-jsx/vars/spacing';
                }
              })];
            }
          }), Z(SideNavMenu, {
            get menuName() {
              return t('sideNav.uiJSX.layout.menuName');
            },
            defaultShow: true,
            get children() {
              return Z(SideNavMenuItem, {
                text: "Section",
                get href() {
                  return `/${language()}/ui-jsx/layout/section`;
                },
                get isActive() {
                  return pathname() === '/ui-jsx/layout/section';
                }
              });
            }
          }), Z(SideNavMenu, {
            get menuName() {
              return t('sideNav.uiJSX.form.menuName');
            },
            defaultShow: true,
            get children() {
              return [Z(SideNavMenuItem, {
                text: "Button",
                get href() {
                  return `/${language()}/ui-jsx/form/button`;
                },
                get isActive() {
                  return pathname() === '/ui-jsx/form/button';
                }
              }), Z(SideNavMenuItem, {
                text: "TextInput",
                get href() {
                  return `/${language()}/ui-jsx/form/textInput`;
                },
                get isActive() {
                  return pathname() === '/ui-jsx/form/textInput';
                }
              })];
            }
          }), Z(SideNavMenu, {
            get menuName() {
              return t('sideNav.uiJSX.typography.menuName');
            },
            defaultShow: true,
            get children() {
              return [Z(SideNavMenuItem, {
                text: "Text",
                get href() {
                  return `/${language()}/ui-jsx/typography/text`;
                },
                get isActive() {
                  return pathname() === '/ui-jsx/typography/text';
                }
              }), Z(SideNavMenuItem, {
                text: "Highlight",
                get href() {
                  return `/${language()}/ui-jsx/typography/highlight`;
                },
                get isActive() {
                  return pathname() === '/ui-jsx/typography/highlight';
                }
              }), Z(SideNavMenuItem, {
                text: "Link",
                get href() {
                  return `/${language()}/ui-jsx/typography/link`;
                },
                get isActive() {
                  return pathname() === '/ui-jsx/typography/link';
                }
              }), Z(SideNavMenuItem, {
                text: "InlineCodeSnippet",
                get href() {
                  return `/${language()}/ui-jsx/typography/inlineCodeSnippet`;
                },
                get isActive() {
                  return pathname() === '/ui-jsx/typography/inlineCodeSnippet';
                }
              }), Z(SideNavMenuItem, {
                text: "LinkCodeSnippet",
                get href() {
                  return `/${language()}/ui-jsx/typography/linkCodeSnippet`;
                },
                get isActive() {
                  return pathname() === '/ui-jsx/typography/linkCodeSnippet';
                }
              }), Z(SideNavMenuItem, {
                text: "SingleCodeSnippet",
                get href() {
                  return `/${language()}/ui-jsx/typography/singleCodeSnippet`;
                },
                get isActive() {
                  return pathname() === '/ui-jsx/typography/singleCodeSnippet';
                }
              }), Z(SideNavMenuItem, {
                text: "MultiCodeSnippet",
                get href() {
                  return `/${language()}/ui-jsx/typography/multiCodeSnippet`;
                },
                get isActive() {
                  return pathname() === '/ui-jsx/typography/multiCodeSnippet';
                }
              })];
            }
          }), Z(SideNavMenu, {
            get menuName() {
              return t('sideNav.uiJSX.content.menuName');
            },
            defaultShow: true,
            get children() {
              return [Z(SideNavMenuItem, {
                text: "ColorChip",
                get href() {
                  return `/${language()}/ui-jsx/content/colorChip`;
                },
                get isActive() {
                  return pathname() === '/ui-jsx/content/colorChip';
                }
              }), Z(SideNavMenuItem, {
                text: "Icon",
                get href() {
                  return `/${language()}/ui-jsx/content/icon`;
                },
                get isActive() {
                  return pathname() === '/ui-jsx/content/icon';
                }
              }), Z(SideNavMenuItem, {
                text: "Iframe",
                get href() {
                  return `/${language()}/ui-jsx/content/iframe`;
                },
                get isActive() {
                  return pathname() === '/ui-jsx/content/iframe';
                }
              }), Z(SideNavMenuItem, {
                text: "OrderedList",
                get href() {
                  return `/${language()}/ui-jsx/content/orderedList`;
                },
                get isActive() {
                  return pathname() === '/ui-jsx/content/orderedList';
                }
              }), Z(SideNavMenuItem, {
                text: "UnorderedList",
                get href() {
                  return `/${language()}/ui-jsx/content/unorderedList`;
                },
                get isActive() {
                  return pathname() === '/ui-jsx/content/unorderedList';
                }
              }), Z(SideNavMenuItem, {
                text: "ListItem",
                get href() {
                  return `/${language()}/ui-jsx/content/listItem`;
                },
                get isActive() {
                  return pathname() === '/ui-jsx/content/listItem';
                }
              })];
            }
          }), Z(SideNavMenu, {
            get menuName() {
              return t('sideNav.uiJSX.shell.menuName');
            },
            defaultShow: true,
            get children() {
              return [Z(SideNavMenuItem, {
                text: "Shell",
                get href() {
                  return `/${language()}/ui-jsx/shell/shell`;
                },
                get isActive() {
                  return pathname() === '/ui-jsx/shell/shell';
                }
              }), Z(SideNavMenuItem, {
                text: "Body",
                get href() {
                  return `/${language()}/ui-jsx/shell/body`;
                },
                get isActive() {
                  return pathname() === '/ui-jsx/shell/body';
                }
              }), Z(SideNavMenuItem, {
                text: "Header",
                get href() {
                  return `/${language()}/ui-jsx/shell/header`;
                },
                get isActive() {
                  return pathname() === '/ui-jsx/shell/header';
                }
              }), Z(SideNavMenuItem, {
                text: "HeaderGlobalAction",
                get href() {
                  return `/${language()}/ui-jsx/shell/headerGlobalAction`;
                },
                get isActive() {
                  return pathname() === '/ui-jsx/shell/headerGlobalAction';
                }
              }), Z(SideNavMenuItem, {
                text: "HeaderGlobalBar",
                get href() {
                  return `/${language()}/ui-jsx/shell/headerGlobalBar`;
                },
                get isActive() {
                  return pathname() === '/ui-jsx/shell/headerGlobalBar';
                }
              }), Z(SideNavMenuItem, {
                text: "HeaderHr",
                get href() {
                  return `/${language()}/ui-jsx/shell/headerHr`;
                },
                get isActive() {
                  return pathname() === '/ui-jsx/shell/headerHr';
                }
              }), Z(SideNavMenuItem, {
                text: "HeaderMenuButton",
                get href() {
                  return `/${language()}/ui-jsx/shell/headerMenuButton`;
                },
                get isActive() {
                  return pathname() === '/ui-jsx/shell/headerMenuButton';
                }
              }), Z(SideNavMenuItem, {
                text: "HeaderMenuItem",
                get href() {
                  return `/${language()}/ui-jsx/shell/headerMenuItem`;
                },
                get isActive() {
                  return pathname() === '/ui-jsx/shell/headerMenuItem';
                }
              }), Z(SideNavMenuItem, {
                text: "HeaderName",
                get href() {
                  return `/${language()}/ui-jsx/shell/headerName`;
                },
                get isActive() {
                  return pathname() === '/ui-jsx/shell/headerName';
                }
              }), Z(SideNavMenuItem, {
                text: "HeaderNavigation",
                get href() {
                  return `/${language()}/ui-jsx/shell/headerNavigation`;
                },
                get isActive() {
                  return pathname() === '/ui-jsx/shell/headerNavigation';
                }
              }), Z(SideNavMenuItem, {
                text: "SubMenu",
                get href() {
                  return `/${language()}/ui-jsx/shell/subMenu`;
                },
                get isActive() {
                  return pathname() === '/ui-jsx/shell/subMenu';
                }
              }), Z(SideNavMenuItem, {
                text: "SubMenuItem",
                get href() {
                  return `/${language()}/ui-jsx/shell/subMenuItem`;
                },
                get isActive() {
                  return pathname() === '/ui-jsx/shell/subMenuItem';
                }
              }), Z(SideNavMenuItem, {
                text: "SideNav",
                get href() {
                  return `/${language()}/ui-jsx/shell/sideNav`;
                },
                get isActive() {
                  return pathname() === '/ui-jsx/shell/sideNav';
                }
              }), Z(SideNavMenuItem, {
                text: "SideNavItems",
                get href() {
                  return `/${language()}/ui-jsx/shell/sideNavItems`;
                },
                get isActive() {
                  return pathname() === '/ui-jsx/shell/sideNavItems';
                }
              }), Z(SideNavMenuItem, {
                text: "SideNavLink",
                get href() {
                  return `/${language()}/ui-jsx/shell/sideNavLink`;
                },
                get isActive() {
                  return pathname() === '/ui-jsx/shell/sideNavLink';
                }
              }), Z(SideNavMenuItem, {
                text: "SideNavMenu",
                get href() {
                  return `/${language()}/ui-jsx/shell/sideNavMenu`;
                },
                get isActive() {
                  return pathname() === '/ui-jsx/shell/sideNavMenu';
                }
              }), Z(SideNavMenuItem, {
                text: "SideNavMenuItem",
                get href() {
                  return `/${language()}/ui-jsx/shell/sideNavMenuItem`;
                },
                get isActive() {
                  return pathname() === '/ui-jsx/shell/sideNavMenuItem';
                }
              })];
            }
          }), Z(SideNavMenu, {
            get menuName() {
              return t('sideNav.uiJSX.overlay.menuName');
            },
            defaultShow: true,
            get children() {
              return [Z(SideNavMenuItem, {
                text: "Tooltip",
                get href() {
                  return `/${language()}/ui-jsx/overlay/tooltip`;
                },
                get isActive() {
                  return pathname() === '/ui-jsx/overlay/tooltip';
                }
              }), Z(SideNavMenuItem, {
                text: "Spinner",
                get href() {
                  return `/${language()}/ui-jsx/overlay/spinner`;
                },
                get isActive() {
                  return pathname() === '/ui-jsx/overlay/spinner';
                }
              })];
            }
          })];
        }
      });
    }
  });
};

const MainSideNav = () => {
  const pageCategory = usePageCategory();
  return Z(P, {
    get by() {
      return pageCategory();
    },
    get children() {
      return (() => {
        switch (pageCategory()) {
          case 'CORE_JSX':
            return Z(CoreJSXSideNav, {});
          case 'CORE_JS':
            return Z(CoreJSSideNav, {});
          case 'UI_JSX':
            return Z(UIJSXSideNav, {});
          case 'UI_JS':
            return Z(UIJSSideNav, {});
          case 'IS_JS':
            return Z(IsJSSideNav, {});
        }
      })();
    }
  });
};

const header = {
	title: "개발문서",
	prefix: "rvjs",
	items: {
		language: "한국어",
		legacy: "구버전"
	}
};
const sideNav = {
	coreJSX: {
		overview: {
			menuName: "개요",
			items: {
				gettingStarted: "시작하기",
				benchmark: "벤치마크"
			}
		},
		render: {
			menuName: "렌더링"
		},
		component: {
			menuName: "컴포넌트"
		},
		reactive: {
			menuName: "반응성"
		},
		router: {
			menuName: "라우터"
		},
		util: {
			menuName: "유틸"
		}
	},
	coreJS: {
		overview: {
			menuName: "개요",
			items: {
				gettingStarted: "시작하기",
				guide: "가이드",
				benchmark: "벤치마크"
			}
		},
		render: {
			menuName: "렌더링"
		},
		reactive: {
			menuName: "반응성"
		},
		router: {
			menuName: "라우터"
		}
	},
	uiJS: {
		overview: {
			menuName: "개요",
			items: {
				gettingStarted: "시작하기"
			}
		},
		cssVars: {
			menuName: "CSS 변수"
		},
		layout: {
			menuName: "레이아웃"
		},
		form: {
			menuName: "폼"
		},
		typography: {
			menuName: "텍스트"
		},
		content: {
			menuName: "컨텐츠"
		},
		shell: {
			menuName: "쉘"
		},
		overlay: {
			menuName: "오버레이"
		},
		util: {
			menuName: "유틸"
		}
	},
	uiJSX: {
		overview: {
			menuName: "개요",
			items: {
				gettingStarted: "시작하기"
			}
		},
		cssVars: {
			menuName: "CSS 변수"
		},
		layout: {
			menuName: "레이아웃"
		},
		form: {
			menuName: "폼"
		},
		typography: {
			menuName: "텍스트"
		},
		content: {
			menuName: "컨텐츠"
		},
		shell: {
			menuName: "쉘"
		},
		overlay: {
			menuName: "오버레이"
		},
		util: {
			menuName: "유틸"
		}
	},
	isJS: {
		overview: {
			menuName: "개요",
			items: {
				gettingStarted: "시작하기"
			}
		},
		type: {
			menuName: "타입",
			items: {
				primitive: "원시 타입",
				reference: "참조 타입",
				composite: "복합",
				"@rvjs/core": "@rvjs/core"
			}
		}
	}
};
const koKRResource = {
	header: header,
	sideNav: sideNav
};

const useLocalizer = () => {
  const pathname = $t();
  let currentLanguage = pathname().slice(1, 3);
  useLocalizer$1({
    defaultLanguage: 'ko',
    languages: {
      ko: {
        defaultCountry: 'KR',
        countries: {
          KR: koKRResource
        }
      }
    }
  });
  $(() => {
    const newLanguage = pathname().slice(1, 3);
    if (currentLanguage !== newLanguage) {
      setLocale(newLanguage);
      currentLanguage = newLanguage;
    }
  }, [pathname]);
};

var content_outer_style = '_13oqtuh0';
var content_inner_style = '_13oqtuh1';

var _tmpl$$5 = /*#__PURE__*/ze(`<div><div>`);
const Content = props => {
  return (() => {
    var _el$ = _tmpl$$5(),
      _el$2 = _el$.firstChild;
    _el$.className = content_outer_style;
    _el$2.className = content_inner_style;
    I(_el$2, () => props.children);
    return _el$;
  })();
};

const searchingCat = "/assets/searching-cat-C8o1PcZj.webp";

var noContentError_style = '_1sdp7cl0';
var noContentError_image_style = '_1sdp7cl1';
var noContentError_text_style = '_1sdp7cl2';

var _tmpl$$4 = /*#__PURE__*/ze(`<div><img alt="">`);
const NoContentError = () => {
  return (() => {
    var _el$ = _tmpl$$4(),
      _el$2 = _el$.firstChild;
    _el$.className = noContentError_style;
    We(_el$2, "src", searchingCat);
    _el$2.className = noContentError_image_style;
    I(_el$, Z(Text, {
      kind: "heading-04",
      className: noContentError_text_style,
      children: "404 error..."
    }), null);
    return _el$;
  })();
};

var loading_wrapper_style = 'uflzd10';

var _tmpl$$3 = /*#__PURE__*/ze(`<div>`);
const Loading = () => {
  return (() => {
    var _el$ = _tmpl$$3();
    _el$.className = loading_wrapper_style;
    I(_el$, Z(Spinner, {
      size: "md"
    }));
    return _el$;
  })();
};

var indexButton_button_style = '_1dyu2fo0';
var indexButton_text_style = '_1dyu2fo1';

const useIndexButtonScrollTo = props => {
  const onClickHandler = () => {
    const scrollTopPosition = props.heading.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({
      top: scrollTopPosition - 48 - 200,
      behavior: 'smooth'
    });
    props.setActiveIndex(props.currentIndex);
  };
  return onClickHandler;
};

var _tmpl$$2 = /*#__PURE__*/ze(`<button>`);
const IndexButton = props => {
  const onClickHandler = useIndexButtonScrollTo(props);
  return (() => {
    var _el$ = _tmpl$$2();
    St(_el$, "click", onClickHandler);
    _el$.className = indexButton_button_style;
    I(_el$, Z(Text, {
      as: "span",
      get kind() {
        return props.activeIndex === props.currentIndex ? 'heading-compact-01' : 'body-01';
      },
      className: indexButton_text_style,
      get children() {
        return props.heading.textContent;
      }
    }));
    return _el$;
  })();
};

var tableOfContents_style = '_10njmti0';

var _tmpl$$1 = /*#__PURE__*/ze(`<aside>`);
const TableOfContents = props => {
  const [activeIndex, setActiveIndex] = b(0);
  return (() => {
    var _el$ = _tmpl$$1();
    _el$.className = tableOfContents_style;
    I(_el$, Z(Je, {
      get each() {
        return props.headings;
      },
      children: (heading, index) => {
        return Z(IndexButton, {
          heading: heading,
          get currentIndex() {
            return index();
          },
          get activeIndex() {
            return activeIndex();
          },
          setActiveIndex: setActiveIndex
        });
      }
    }));
    return _el$;
  })();
};

var contentSuspense_style = '_171b39a0';

const storeItemToCache = (key, value, maxAge) => {
  window.localStorage.setItem(`${key}-expire`, JSON.stringify(Date.now() + maxAge * 1000));
  window.localStorage.setItem(`${key}-data`, JSON.stringify(value));
};
const getItemFromCache = key => {
  const itemRaw = window.localStorage.getItem(`${key}-data`);
  const itemDate = JSON.parse(itemRaw);
  return itemDate;
};
const hasItemCache = key => {
  const hasItem = window.localStorage.getItem(`${key}-expire`) !== undefined;
  return hasItem;
};
const isCacheExpired = key => {
  const expireRaw = window.localStorage.getItem(`${key}-expire`);
  const expireDate = JSON.parse(expireRaw);
  const isExpired = Date.now() > expireDate;
  return isExpired;
};

const getContent = async path => {
  const apiPath = getApiPath(path);
  if (hasItemCache(apiPath) && !isCacheExpired(apiPath)) {
    const content = getItemFromCache(apiPath);
    return content;
  } else {
    const content = await fetchContent(apiPath);
    storeItemToCache(apiPath, content, 3600);
    return content;
  }
};
const getApiPath = path => {
  return `https://rvjs.xyz/content${path}`;
};
const fetchContent = async path => {
  const response = await fetch(path, {
    method: 'GET',
    cache: 'no-store'
  });
  if (!response.ok) {
    throw new Error(`Failed to fetch content: ${response.statusText}`);
  }
  const content = await response.json();
  return content;
};

const useContentSuspense = () => {
  const [status, setStatus] = b('LOADING');
  const [content, setContent] = b(null);
  const pathname = $t();
  (async () => {
    try {
      const {
        content
      } = await getContent(`${pathname()}.json`);
      setContent(content);
      setStatus('LOADED');
    } catch {
      setStatus('ERROR');
    }
  })();
  window.scrollTo({
    top: 0
  });
  return {
    status,
    content
  };
};
const useContentHeading = status => {
  const wrapperElement = It();
  const [headings, setHeadings] = b([]);
  const findHeading = element => {
    return [...element.querySelectorAll('h1, h2, h3, h4, h5, h6')];
  };
  $(() => {
    if (status() === 'LOADED') {
      setTimeout(() => {
        setHeadings(findHeading(wrapperElement.current.children[0]));
      }, 0);
    }
  }, [status]);
  return {
    wrapperElement,
    headings
  };
};

var _tmpl$ = /*#__PURE__*/ze(`<div>`);
const ContentSuspense = () => {
  const {
    status,
    content
  } = useContentSuspense();
  const {
    wrapperElement,
    headings
  } = useContentHeading(status);
  return (() => {
    var _el$ = _tmpl$();
    _el$.className = contentSuspense_style;
    We(_el$, "element", wrapperElement);
    I(_el$, Z(qe, {
      get children() {
        return [Z(Ae, {
          get is() {
            return status() === 'LOADING';
          },
          get children() {
            return Z(Loading, {});
          }
        }), Z(Ae, {
          get is() {
            return status() === 'LOADED';
          },
          get children() {
            return Z(Content, {
              get children() {
                return renderFromJSON(content());
              }
            });
          }
        }), Z(Ae, {
          get is() {
            return status() === 'ERROR';
          },
          get children() {
            return Z(NoContentError, {});
          }
        })];
      }
    }), null);
    I(_el$, Z(TableOfContents, {
      get headings() {
        return headings();
      }
    }), null);
    return _el$;
  })();
};

const legacyPaths = [{
  legacyPath: '/core-v0.2.x/gettingStarted',
  newPath: '/ko/core-js/overview/gettingStarted'
}, {
  legacyPath: '/core-v0.2.x/benchmark',
  newPath: '/ko/core-js/overview/benchmark'
}, {
  legacyPath: '/core-v0.3.x/gettingStarted',
  newPath: '/ko/core-jsx/overview/gettingStarted'
}, {
  legacyPath: '/core-v0.3.x/benchmark',
  newPath: '/ko/core-jsx/overview/benchmark'
}];
const useRouter = () => {
  const pathname = $t();
  const navigate = xt();
  const redirectLegacyPath = pathname => {
    for (const {
      legacyPath,
      newPath
    } of legacyPaths) {
      if (pathname.startsWith(legacyPath)) {
        navigate(pathname.replace(legacyPath, newPath));
        return;
      }
    }
  };
  const redirectInitialPath = pathname => {
    if (pathname === '/') {
      navigate('/ko/core-jsx/overview/gettingStarted');
    }
  };
  Xe(() => {
    const currentPathname = pathname();
    redirectLegacyPath(currentPathname);
    redirectInitialPath(currentPathname);
  });
};

const Router = () => {
  useRouter();
  return Z(_t, {
    get children() {
      return Z(et, {
        path: "/:language",
        get element() {
          return Z(LanguagePage, {});
        },
        get children() {
          return Z(et, {
            path: "/:packageName",
            get element() {
              return Z(PackagePage, {});
            },
            get children() {
              return Z(et, {
                path: "/:categoryName",
                get element() {
                  return Z(CategoryPage, {});
                },
                get children() {
                  return Z(et, {
                    path: "/:functionName",
                    get element() {
                      return Z(ContentPage, {});
                    }
                  });
                }
              });
            }
          });
        }
      });
    }
  });
};
const LanguagePage = () => {
  const outlet = Pt();
  return outlet;
};
const PackagePage = () => {
  const outlet = Pt();
  return outlet;
};
const CategoryPage = () => {
  const outlet = Pt();
  return outlet;
};
const ContentPage = () => {
  return Z(ContentSuspense, {});
};

const App = () => {
  useLocalizer();
  return Z(RvjsUIProvider, {
    get children() {
      return Z(Shell, {
        get header() {
          return Z(Header, {});
        },
        get panel() {
          return Z(MainSideNav, {});
        },
        get body() {
          return Z(Router, {});
        }
      });
    }
  });
};

window.addEventListener('beforeunload', () => {
  localStorage.clear();
});
Rt(document.getElementById('app'), Z(App, {}));
