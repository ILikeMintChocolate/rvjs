import { ElementBlock } from '@block/element.ts'
import { TextNodeBlock } from '@block/textNode.ts'
import { createElement, createSvgElement } from '@element/element.ts'
import { ElementProps, SvgProps } from '@element/type.ts'

export const element = <TagName extends keyof HTMLElementTagNameMap>(
  tagName: TagName,
  props?: Partial<ElementProps<TagName>>,
): ElementBlock => createElement(tagName, props)
export const a = (props?: Partial<ElementProps<'a'>>): ElementBlock => {
  return createElement('a', props)
}
export const abbr = (props?: Partial<ElementProps<'abbr'>>): ElementBlock => {
  return createElement('abbr', props)
}
export const address = (
  props?: Partial<ElementProps<'address'>>,
): ElementBlock => {
  return createElement('address', props)
}
export const area = (props?: Partial<ElementProps<'area'>>): ElementBlock => {
  return createElement('area', props)
}
export const article = (
  props?: Partial<ElementProps<'article'>>,
): ElementBlock => {
  return createElement('article', props)
}
export const aside = (props?: Partial<ElementProps<'aside'>>): ElementBlock => {
  return createElement('aside', props)
}
export const audio = (props?: Partial<ElementProps<'audio'>>): ElementBlock => {
  return createElement('audio', props)
}
export const b = (props?: Partial<ElementProps<'b'>>): ElementBlock => {
  return createElement('b', props)
}
export const base = (props?: Partial<ElementProps<'base'>>): ElementBlock => {
  return createElement('base', props)
}
export const bdi = (props?: Partial<ElementProps<'bdi'>>): ElementBlock => {
  return createElement('bdi', props)
}
export const bdo = (props?: Partial<ElementProps<'bdo'>>): ElementBlock => {
  return createElement('bdo', props)
}
export const blockquote = (
  props?: Partial<ElementProps<'blockquote'>>,
): ElementBlock => {
  return createElement('blockquote', props)
}
export const body = (props?: Partial<ElementProps<'body'>>): ElementBlock => {
  return createElement('body', props)
}
export const br = (props?: Partial<ElementProps<'br'>>): ElementBlock => {
  return createElement('br', props)
}
export const button = (
  props?: Partial<ElementProps<'button'>>,
): ElementBlock => {
  return createElement('button', props)
}
export const canvas = (
  props?: Partial<ElementProps<'canvas'>>,
): ElementBlock => {
  return createElement('canvas', props)
}
export const caption = (
  props?: Partial<ElementProps<'caption'>>,
): ElementBlock => {
  return createElement('caption', props)
}
export const cite = (props?: Partial<ElementProps<'cite'>>): ElementBlock => {
  return createElement('cite', props)
}
export const code = (props?: Partial<ElementProps<'code'>>): ElementBlock => {
  return createElement('code', props)
}
export const col = (props?: Partial<ElementProps<'col'>>): ElementBlock => {
  return createElement('col', props)
}
export const colgroup = (
  props?: Partial<ElementProps<'colgroup'>>,
): ElementBlock => {
  return createElement('colgroup', props)
}
export const data = (props?: Partial<ElementProps<'data'>>): ElementBlock => {
  return createElement('data', props)
}
export const datalist = (
  props?: Partial<ElementProps<'datalist'>>,
): ElementBlock => {
  return createElement('datalist', props)
}
export const dd = (props?: Partial<ElementProps<'dd'>>): ElementBlock => {
  return createElement('dd', props)
}
export const del = (props?: Partial<ElementProps<'del'>>): ElementBlock => {
  return createElement('del', props)
}
export const details = (
  props?: Partial<ElementProps<'details'>>,
): ElementBlock => {
  return createElement('details', props)
}
export const dfn = (props?: Partial<ElementProps<'dfn'>>): ElementBlock => {
  return createElement('dfn', props)
}
export const dialog = (
  props?: Partial<ElementProps<'dialog'>>,
): ElementBlock => {
  return createElement('dialog', props)
}
export const div = (props?: Partial<ElementProps<'div'>>): ElementBlock => {
  return createElement('div', props)
}
export const dl = (props?: Partial<ElementProps<'dl'>>): ElementBlock => {
  return createElement('dl', props)
}
export const dt = (props?: Partial<ElementProps<'dt'>>): ElementBlock => {
  return createElement('dt', props)
}
export const em = (props?: Partial<ElementProps<'em'>>): ElementBlock => {
  return createElement('em', props)
}
export const embed = (props?: Partial<ElementProps<'embed'>>): ElementBlock => {
  return createElement('embed', props)
}
export const fieldset = (
  props?: Partial<ElementProps<'fieldset'>>,
): ElementBlock => {
  return createElement('fieldset', props)
}
export const figcaption = (
  props?: Partial<ElementProps<'figcaption'>>,
): ElementBlock => {
  return createElement('figcaption', props)
}
export const figure = (
  props?: Partial<ElementProps<'figure'>>,
): ElementBlock => {
  return createElement('figure', props)
}
export const footer = (
  props?: Partial<ElementProps<'footer'>>,
): ElementBlock => {
  return createElement('footer', props)
}
export const form = (props?: Partial<ElementProps<'form'>>): ElementBlock => {
  return createElement('form', props)
}
export const h1 = (props?: Partial<ElementProps<'h1'>>): ElementBlock => {
  return createElement('h1', props)
}
export const h2 = (props?: Partial<ElementProps<'h2'>>): ElementBlock => {
  return createElement('h2', props)
}
export const h3 = (props?: Partial<ElementProps<'h3'>>): ElementBlock => {
  return createElement('h3', props)
}
export const h4 = (props?: Partial<ElementProps<'h4'>>): ElementBlock => {
  return createElement('h4', props)
}
export const h5 = (props?: Partial<ElementProps<'h5'>>): ElementBlock => {
  return createElement('h5', props)
}
export const h6 = (props?: Partial<ElementProps<'h6'>>): ElementBlock => {
  return createElement('h6', props)
}
export const head = (props?: Partial<ElementProps<'head'>>): ElementBlock => {
  return createElement('head', props)
}
export const header = (
  props?: Partial<ElementProps<'header'>>,
): ElementBlock => {
  return createElement('header', props)
}
export const hgroup = (
  props?: Partial<ElementProps<'hgroup'>>,
): ElementBlock => {
  return createElement('hgroup', props)
}
export const hr = (props?: Partial<ElementProps<'hr'>>): ElementBlock => {
  return createElement('hr', props)
}
export const html = (props?: Partial<ElementProps<'html'>>): ElementBlock => {
  return createElement('html', props)
}
export const i = (props?: Partial<ElementProps<'i'>>): ElementBlock => {
  return createElement('i', props)
}
export const iframe = (
  props?: Partial<ElementProps<'iframe'>>,
): ElementBlock => {
  return createElement('iframe', props)
}
export const img = (props?: Partial<ElementProps<'img'>>): ElementBlock => {
  return createElement('img', props)
}
export const input = (props?: Partial<ElementProps<'input'>>): ElementBlock => {
  return createElement('input', props)
}
export const ins = (props?: Partial<ElementProps<'ins'>>): ElementBlock => {
  return createElement('ins', props)
}
export const kbd = (props?: Partial<ElementProps<'kbd'>>): ElementBlock => {
  return createElement('kbd', props)
}
export const label = (props?: Partial<ElementProps<'label'>>): ElementBlock => {
  return createElement('label', props)
}
export const legend = (
  props?: Partial<ElementProps<'legend'>>,
): ElementBlock => {
  return createElement('legend', props)
}
export const li = (props?: Partial<ElementProps<'li'>>): ElementBlock => {
  return createElement('li', props)
}
export const link = (props?: Partial<ElementProps<'link'>>): ElementBlock => {
  return createElement('link', props)
}
export const main = (props?: Partial<ElementProps<'main'>>): ElementBlock => {
  return createElement('main', props)
}
export const map = (props?: Partial<ElementProps<'map'>>): ElementBlock => {
  return createElement('map', props)
}
export const mark = (props?: Partial<ElementProps<'mark'>>): ElementBlock => {
  return createElement('mark', props)
}
export const menu = (props?: Partial<ElementProps<'menu'>>): ElementBlock => {
  return createElement('menu', props)
}
export const meta = (props?: Partial<ElementProps<'meta'>>): ElementBlock => {
  return createElement('meta', props)
}
export const meter = (props?: Partial<ElementProps<'meter'>>): ElementBlock => {
  return createElement('meter', props)
}
export const nav = (props?: Partial<ElementProps<'nav'>>): ElementBlock => {
  return createElement('nav', props)
}
export const noscript = (
  props?: Partial<ElementProps<'noscript'>>,
): ElementBlock => {
  return createElement('noscript', props)
}
export const object = (
  props?: Partial<ElementProps<'object'>>,
): ElementBlock => {
  return createElement('object', props)
}
export const ol = (props?: Partial<ElementProps<'ol'>>): ElementBlock => {
  return createElement('ol', props)
}
export const optgroup = (
  props?: Partial<ElementProps<'optgroup'>>,
): ElementBlock => {
  return createElement('optgroup', props)
}
export const option = (
  props?: Partial<ElementProps<'option'>>,
): ElementBlock => {
  return createElement('option', props)
}
export const output = (
  props?: Partial<ElementProps<'output'>>,
): ElementBlock => {
  return createElement('output', props)
}
export const p = (props?: Partial<ElementProps<'p'>>): ElementBlock => {
  return createElement('p', props)
}
export const picture = (
  props?: Partial<ElementProps<'picture'>>,
): ElementBlock => {
  return createElement('picture', props)
}
export const pre = (props?: Partial<ElementProps<'pre'>>): ElementBlock => {
  return createElement('pre', props)
}
export const progress = (
  props?: Partial<ElementProps<'progress'>>,
): ElementBlock => {
  return createElement('progress', props)
}
export const q = (props?: Partial<ElementProps<'q'>>): ElementBlock => {
  return createElement('q', props)
}
export const rp = (props?: Partial<ElementProps<'rp'>>): ElementBlock => {
  return createElement('rp', props)
}
export const rt = (props?: Partial<ElementProps<'rt'>>): ElementBlock => {
  return createElement('rt', props)
}
export const ruby = (props?: Partial<ElementProps<'ruby'>>): ElementBlock => {
  return createElement('ruby', props)
}
export const s = (props?: Partial<ElementProps<'s'>>): ElementBlock => {
  return createElement('s', props)
}
export const samp = (props?: Partial<ElementProps<'samp'>>): ElementBlock => {
  return createElement('samp', props)
}
export const script = (
  props?: Partial<ElementProps<'script'>>,
): ElementBlock => {
  return createElement('script', props)
}
export const search = (
  props?: Partial<ElementProps<'search'>>,
): ElementBlock => {
  return createElement('search', props)
}
export const section = (
  props?: Partial<ElementProps<'section'>>,
): ElementBlock => {
  return createElement('section', props)
}
export const select = (
  props?: Partial<ElementProps<'select'>>,
): ElementBlock => {
  return createElement('select', props)
}
export const slot = (props?: Partial<ElementProps<'slot'>>): ElementBlock => {
  return createElement('slot', props)
}
export const small = (props?: Partial<ElementProps<'small'>>): ElementBlock => {
  return createElement('small', props)
}
export const source = (
  props?: Partial<ElementProps<'source'>>,
): ElementBlock => {
  return createElement('source', props)
}
export const span = (props?: Partial<ElementProps<'span'>>): ElementBlock => {
  return createElement('span', props)
}
export const strong = (
  props?: Partial<ElementProps<'strong'>>,
): ElementBlock => {
  return createElement('strong', props)
}
export const style = (props?: Partial<ElementProps<'style'>>): ElementBlock => {
  return createElement('style', props)
}
export const sub = (props?: Partial<ElementProps<'sub'>>): ElementBlock => {
  return createElement('sub', props)
}
export const summary = (
  props?: Partial<ElementProps<'summary'>>,
): ElementBlock => {
  return createElement('summary', props)
}
export const sup = (props?: Partial<ElementProps<'sup'>>): ElementBlock => {
  return createElement('sup', props)
}
export const table = (props?: Partial<ElementProps<'table'>>): ElementBlock => {
  return createElement('table', props)
}
export const tbody = (props?: Partial<ElementProps<'tbody'>>): ElementBlock => {
  return createElement('tbody', props)
}
export const td = (props?: Partial<ElementProps<'td'>>): ElementBlock => {
  return createElement('td', props)
}
export const template = (
  props?: Partial<ElementProps<'template'>>,
): ElementBlock => {
  return createElement('template', props)
}
export const textarea = (
  props?: Partial<ElementProps<'textarea'>>,
): ElementBlock => {
  return createElement('textarea', props)
}
export const tfoot = (props?: Partial<ElementProps<'tfoot'>>): ElementBlock => {
  return createElement('tfoot', props)
}
export const th = (props?: Partial<ElementProps<'th'>>): ElementBlock => {
  return createElement('th', props)
}
export const thead = (props?: Partial<ElementProps<'thead'>>): ElementBlock => {
  return createElement('thead', props)
}
export const time = (props?: Partial<ElementProps<'time'>>): ElementBlock => {
  return createElement('time', props)
}
export const title = (props?: Partial<ElementProps<'title'>>): ElementBlock => {
  return createElement('title', props)
}
export const tr = (props?: Partial<ElementProps<'tr'>>): ElementBlock => {
  return createElement('tr', props)
}
export const track = (props?: Partial<ElementProps<'track'>>): ElementBlock => {
  return createElement('track', props)
}
export const u = (props?: Partial<ElementProps<'u'>>): ElementBlock => {
  return createElement('u', props)
}
export const ul = (props?: Partial<ElementProps<'ul'>>): ElementBlock => {
  return createElement('ul', props)
}
export const video = (props?: Partial<ElementProps<'video'>>): ElementBlock => {
  return createElement('video', props)
}
export const wbr = (props?: Partial<ElementProps<'wbr'>>): ElementBlock => {
  return createElement('wbr', props)
}
export const svg = (
  element: SVGElement,
  props?: Partial<SvgProps>,
): ElementBlock => {
  return createSvgElement(element, props)
}
export const textNode = (text: string): TextNodeBlock => {
  const node = document.createTextNode(text)
  return new TextNodeBlock({
    element: node,
  })
}
