import { TextNodeBlock } from '@block/textNode.ts'
import { createElement, createSvgElement } from '@element/element.ts'
import { ElementProps, SvgProps } from '@element/type.ts'

export const element = <TagName extends keyof HTMLElementTagNameMap>(
  tagName: TagName,
  props?: Partial<ElementProps<TagName>>,
) => createElement(tagName, props)
export const a = (props?: Partial<ElementProps<'a'>>) => {
  return createElement('a', props)
}
export const abbr = (props?: Partial<ElementProps<'abbr'>>) => {
  return createElement('abbr', props)
}
export const address = (props?: Partial<ElementProps<'address'>>) => {
  return createElement('address', props)
}
export const area = (props?: Partial<ElementProps<'area'>>) => {
  return createElement('area', props)
}
export const article = (props?: Partial<ElementProps<'article'>>) => {
  return createElement('article', props)
}
export const aside = (props?: Partial<ElementProps<'aside'>>) => {
  return createElement('aside', props)
}
export const audio = (props?: Partial<ElementProps<'audio'>>) => {
  return createElement('audio', props)
}
export const b = (props?: Partial<ElementProps<'b'>>) => {
  return createElement('b', props)
}
export const base = (props?: Partial<ElementProps<'base'>>) => {
  return createElement('base', props)
}
export const bdi = (props?: Partial<ElementProps<'bdi'>>) => {
  return createElement('bdi', props)
}
export const bdo = (props?: Partial<ElementProps<'bdo'>>) => {
  return createElement('bdo', props)
}
export const blockquote = (props?: Partial<ElementProps<'blockquote'>>) => {
  return createElement('blockquote', props)
}
export const body = (props?: Partial<ElementProps<'body'>>) => {
  return createElement('body', props)
}
export const br = (props?: Partial<ElementProps<'br'>>) => {
  return createElement('br', props)
}
export const button = (props?: Partial<ElementProps<'button'>>) => {
  return createElement('button', props)
}
export const canvas = (props?: Partial<ElementProps<'canvas'>>) => {
  return createElement('canvas', props)
}
export const caption = (props?: Partial<ElementProps<'caption'>>) => {
  return createElement('caption', props)
}
export const cite = (props?: Partial<ElementProps<'cite'>>) => {
  return createElement('cite', props)
}
export const code = (props?: Partial<ElementProps<'code'>>) => {
  return createElement('code', props)
}
export const col = (props?: Partial<ElementProps<'col'>>) => {
  return createElement('col', props)
}
export const colgroup = (props?: Partial<ElementProps<'colgroup'>>) => {
  return createElement('colgroup', props)
}
export const data = (props?: Partial<ElementProps<'data'>>) => {
  return createElement('data', props)
}
export const datalist = (props?: Partial<ElementProps<'datalist'>>) => {
  return createElement('datalist', props)
}
export const dd = (props?: Partial<ElementProps<'dd'>>) => {
  return createElement('dd', props)
}
export const del = (props?: Partial<ElementProps<'del'>>) => {
  return createElement('del', props)
}
export const details = (props?: Partial<ElementProps<'details'>>) => {
  return createElement('details', props)
}
export const dfn = (props?: Partial<ElementProps<'dfn'>>) => {
  return createElement('dfn', props)
}
export const dialog = (props?: Partial<ElementProps<'dialog'>>) => {
  return createElement('dialog', props)
}
export const div = (props?: Partial<ElementProps<'div'>>) => {
  return createElement('div', props)
}
export const dl = (props?: Partial<ElementProps<'dl'>>) => {
  return createElement('dl', props)
}
export const dt = (props?: Partial<ElementProps<'dt'>>) => {
  return createElement('dt', props)
}
export const em = (props?: Partial<ElementProps<'em'>>) => {
  return createElement('em', props)
}
export const embed = (props?: Partial<ElementProps<'embed'>>) => {
  return createElement('embed', props)
}
export const fieldset = (props?: Partial<ElementProps<'fieldset'>>) => {
  return createElement('fieldset', props)
}
export const figcaption = (props?: Partial<ElementProps<'figcaption'>>) => {
  return createElement('figcaption', props)
}
export const figure = (props?: Partial<ElementProps<'figure'>>) => {
  return createElement('figure', props)
}
export const footer = (props?: Partial<ElementProps<'footer'>>) => {
  return createElement('footer', props)
}
export const form = (props?: Partial<ElementProps<'form'>>) => {
  return createElement('form', props)
}
export const h1 = (props?: Partial<ElementProps<'h1'>>) => {
  return createElement('h1', props)
}
export const h2 = (props?: Partial<ElementProps<'h2'>>) => {
  return createElement('h2', props)
}
export const h3 = (props?: Partial<ElementProps<'h3'>>) => {
  return createElement('h3', props)
}
export const h4 = (props?: Partial<ElementProps<'h4'>>) => {
  return createElement('h4', props)
}
export const h5 = (props?: Partial<ElementProps<'h5'>>) => {
  return createElement('h5', props)
}
export const h6 = (props?: Partial<ElementProps<'h6'>>) => {
  return createElement('h6', props)
}
export const head = (props?: Partial<ElementProps<'head'>>) => {
  return createElement('head', props)
}
export const header = (props?: Partial<ElementProps<'header'>>) => {
  return createElement('header', props)
}
export const hgroup = (props?: Partial<ElementProps<'hgroup'>>) => {
  return createElement('hgroup', props)
}
export const hr = (props?: Partial<ElementProps<'hr'>>) => {
  return createElement('hr', props)
}
export const html = (props?: Partial<ElementProps<'html'>>) => {
  return createElement('html', props)
}
export const i = (props?: Partial<ElementProps<'i'>>) => {
  return createElement('i', props)
}
export const iframe = (props?: Partial<ElementProps<'iframe'>>) => {
  return createElement('iframe', props)
}
export const img = (props?: Partial<ElementProps<'img'>>) => {
  return createElement('img', props)
}
export const input = (props?: Partial<ElementProps<'input'>>) => {
  return createElement('input', props)
}
export const ins = (props?: Partial<ElementProps<'ins'>>) => {
  return createElement('ins', props)
}
export const kbd = (props?: Partial<ElementProps<'kbd'>>) => {
  return createElement('kbd', props)
}
export const label = (props?: Partial<ElementProps<'label'>>) => {
  return createElement('label', props)
}
export const legend = (props?: Partial<ElementProps<'legend'>>) => {
  return createElement('legend', props)
}
export const li = (props?: Partial<ElementProps<'li'>>) => {
  return createElement('li', props)
}
export const link = (props?: Partial<ElementProps<'link'>>) => {
  return createElement('link', props)
}
export const main = (props?: Partial<ElementProps<'main'>>) => {
  return createElement('main', props)
}
export const map = (props?: Partial<ElementProps<'map'>>) => {
  return createElement('map', props)
}
export const mark = (props?: Partial<ElementProps<'mark'>>) => {
  return createElement('mark', props)
}
export const menu = (props?: Partial<ElementProps<'menu'>>) => {
  return createElement('menu', props)
}
export const meta = (props?: Partial<ElementProps<'meta'>>) => {
  return createElement('meta', props)
}
export const meter = (props?: Partial<ElementProps<'meter'>>) => {
  return createElement('meter', props)
}
export const nav = (props?: Partial<ElementProps<'nav'>>) => {
  return createElement('nav', props)
}
export const noscript = (props?: Partial<ElementProps<'noscript'>>) => {
  return createElement('noscript', props)
}
export const object = (props?: Partial<ElementProps<'object'>>) => {
  return createElement('object', props)
}
export const ol = (props?: Partial<ElementProps<'ol'>>) => {
  return createElement('ol', props)
}
export const optgroup = (props?: Partial<ElementProps<'optgroup'>>) => {
  return createElement('optgroup', props)
}
export const option = (props?: Partial<ElementProps<'option'>>) => {
  return createElement('option', props)
}
export const output = (props?: Partial<ElementProps<'output'>>) => {
  return createElement('output', props)
}
export const p = (props?: Partial<ElementProps<'p'>>) => {
  return createElement('p', props)
}
export const picture = (props?: Partial<ElementProps<'picture'>>) => {
  return createElement('picture', props)
}
export const pre = (props?: Partial<ElementProps<'pre'>>) => {
  return createElement('pre', props)
}
export const progress = (props?: Partial<ElementProps<'progress'>>) => {
  return createElement('progress', props)
}
export const q = (props?: Partial<ElementProps<'q'>>) => {
  return createElement('q', props)
}
export const rp = (props?: Partial<ElementProps<'rp'>>) => {
  return createElement('rp', props)
}
export const rt = (props?: Partial<ElementProps<'rt'>>) => {
  return createElement('rt', props)
}
export const ruby = (props?: Partial<ElementProps<'ruby'>>) => {
  return createElement('ruby', props)
}
export const s = (props?: Partial<ElementProps<'s'>>) => {
  return createElement('s', props)
}
export const samp = (props?: Partial<ElementProps<'samp'>>) => {
  return createElement('samp', props)
}
export const script = (props?: Partial<ElementProps<'script'>>) => {
  return createElement('script', props)
}
export const search = (props?: Partial<ElementProps<'search'>>) => {
  return createElement('search', props)
}
export const section = (props?: Partial<ElementProps<'section'>>) => {
  return createElement('section', props)
}
export const select = (props?: Partial<ElementProps<'select'>>) => {
  return createElement('select', props)
}
export const slot = (props?: Partial<ElementProps<'slot'>>) => {
  return createElement('slot', props)
}
export const small = (props?: Partial<ElementProps<'small'>>) => {
  return createElement('small', props)
}
export const source = (props?: Partial<ElementProps<'source'>>) => {
  return createElement('source', props)
}
export const span = (props?: Partial<ElementProps<'span'>>) => {
  return createElement('span', props)
}
export const strong = (props?: Partial<ElementProps<'strong'>>) => {
  return createElement('strong', props)
}
export const style = (props?: Partial<ElementProps<'style'>>) => {
  return createElement('style', props)
}
export const sub = (props?: Partial<ElementProps<'sub'>>) => {
  return createElement('sub', props)
}
export const summary = (props?: Partial<ElementProps<'summary'>>) => {
  return createElement('summary', props)
}
export const sup = (props?: Partial<ElementProps<'sup'>>) => {
  return createElement('sup', props)
}
export const table = (props?: Partial<ElementProps<'table'>>) => {
  return createElement('table', props)
}
export const tbody = (props?: Partial<ElementProps<'tbody'>>) => {
  return createElement('tbody', props)
}
export const td = (props?: Partial<ElementProps<'td'>>) => {
  return createElement('td', props)
}
export const template = (props?: Partial<ElementProps<'template'>>) => {
  return createElement('template', props)
}
export const textarea = (props?: Partial<ElementProps<'textarea'>>) => {
  return createElement('textarea', props)
}
export const tfoot = (props?: Partial<ElementProps<'tfoot'>>) => {
  return createElement('tfoot', props)
}
export const th = (props?: Partial<ElementProps<'th'>>) => {
  return createElement('th', props)
}
export const thead = (props?: Partial<ElementProps<'thead'>>) => {
  return createElement('thead', props)
}
export const time = (props?: Partial<ElementProps<'time'>>) => {
  return createElement('time', props)
}
export const title = (props?: Partial<ElementProps<'title'>>) => {
  return createElement('title', props)
}
export const tr = (props?: Partial<ElementProps<'tr'>>) => {
  return createElement('tr', props)
}
export const track = (props?: Partial<ElementProps<'track'>>) => {
  return createElement('track', props)
}
export const u = (props?: Partial<ElementProps<'u'>>) => {
  return createElement('u', props)
}
export const ul = (props?: Partial<ElementProps<'ul'>>) => {
  return createElement('ul', props)
}
export const video = (props?: Partial<ElementProps<'video'>>) => {
  return createElement('video', props)
}
export const wbr = (props?: Partial<ElementProps<'wbr'>>) => {
  return createElement('wbr', props)
}
export const svg = (element: SVGElement, props?: Partial<SvgProps>) => {
  return createSvgElement(element, props)
}
export const textNode = (text: string) => {
  const node = document.createTextNode(text)
  return new TextNodeBlock({
    element: node,
  })
}
