import { CustomProperties, setProperty } from './property'
import { AddTypeToValues } from '../type/util'
import { ElementBlock } from './elementBlock.ts'

type Attributes<TagName extends keyof HTMLElementTagNameMap> = Partial<
  AddTypeToValues<HTMLElementTagNameMap[TagName], any> & CustomProperties
>

const createElement = <TagName extends keyof HTMLElementTagNameMap>(
  tagName: TagName,
  attributes: Attributes<TagName> = {},
) => {
  const elementBlock = new ElementBlock({
    element: document.createElement(tagName),
  })

  Object.entries(attributes).forEach(([key, value]) => {
    setProperty(elementBlock, key, value)
  })

  return elementBlock
}

export const a = (properties?: Attributes<'a'>) =>
  createElement('a', properties)
export const abbr = (properties?: Attributes<'abbr'>) =>
  createElement('abbr', properties)
export const address = (properties?: Attributes<'address'>) =>
  createElement('address', properties)
export const area = (properties?: Attributes<'area'>) =>
  createElement('area', properties)
export const article = (properties?: Attributes<'article'>) =>
  createElement('article', properties)
export const aside = (properties?: Attributes<'aside'>) =>
  createElement('aside', properties)
export const audio = (properties?: Attributes<'audio'>) =>
  createElement('audio', properties)
export const b = (properties?: Attributes<'b'>) =>
  createElement('b', properties)
export const base = (properties?: Attributes<'base'>) =>
  createElement('base', properties)
export const bdi = (properties?: Attributes<'bdi'>) =>
  createElement('bdi', properties)
export const bdo = (properties?: Attributes<'bdo'>) =>
  createElement('bdo', properties)
export const blockquote = (properties?: Attributes<'blockquote'>) =>
  createElement('blockquote', properties)
export const body = (properties?: Attributes<'body'>) =>
  createElement('body', properties)
export const br = (properties?: Attributes<'br'>) =>
  createElement('br', properties)
export const button = (properties?: Attributes<'button'>) =>
  createElement('button', properties)
export const canvas = (properties?: Attributes<'canvas'>) =>
  createElement('canvas', properties)
export const caption = (properties?: Attributes<'caption'>) =>
  createElement('caption', properties)
export const cite = (properties?: Attributes<'cite'>) =>
  createElement('cite', properties)
export const code = (properties?: Attributes<'code'>) =>
  createElement('code', properties)
export const col = (properties?: Attributes<'col'>) =>
  createElement('col', properties)
export const colgroup = (properties?: Attributes<'colgroup'>) =>
  createElement('colgroup', properties)
export const data = (properties?: Attributes<'data'>) =>
  createElement('data', properties)
export const datalist = (properties?: Attributes<'datalist'>) =>
  createElement('datalist', properties)
export const dd = (properties?: Attributes<'dd'>) =>
  createElement('dd', properties)
export const del = (properties?: Attributes<'del'>) =>
  createElement('del', properties)
export const details = (properties?: Attributes<'details'>) =>
  createElement('details', properties)
export const dfn = (properties?: Attributes<'dfn'>) =>
  createElement('dfn', properties)
export const dialog = (properties?: Attributes<'dialog'>) =>
  createElement('dialog', properties)
export const div = (properties?: Attributes<'div'>) =>
  createElement('div', properties)
export const dl = (properties?: Attributes<'dl'>) =>
  createElement('dl', properties)
export const dt = (properties?: Attributes<'dt'>) =>
  createElement('dt', properties)
export const em = (properties?: Attributes<'em'>) =>
  createElement('em', properties)
export const embed = (properties?: Attributes<'embed'>) =>
  createElement('embed', properties)
export const fieldset = (properties?: Attributes<'fieldset'>) =>
  createElement('fieldset', properties)
export const figcaption = (properties?: Attributes<'figcaption'>) =>
  createElement('figcaption', properties)
export const figure = (properties?: Attributes<'figure'>) =>
  createElement('figure', properties)
export const footer = (properties?: Attributes<'footer'>) =>
  createElement('footer', properties)
export const form = (properties?: Attributes<'form'>) =>
  createElement('form', properties)
export const h1 = (properties?: Attributes<'h1'>) =>
  createElement('h1', properties)
export const h2 = (properties?: Attributes<'h2'>) =>
  createElement('h2', properties)
export const h3 = (properties?: Attributes<'h3'>) =>
  createElement('h3', properties)
export const h4 = (properties?: Attributes<'h4'>) =>
  createElement('h4', properties)
export const h5 = (properties?: Attributes<'h5'>) =>
  createElement('h5', properties)
export const h6 = (properties?: Attributes<'h6'>) =>
  createElement('h6', properties)
export const head = (properties?: Attributes<'head'>) =>
  createElement('head', properties)
export const header = (properties?: Attributes<'header'>) =>
  createElement('header', properties)
export const hgroup = (properties?: Attributes<'hgroup'>) =>
  createElement('hgroup', properties)
export const hr = (properties?: Attributes<'hr'>) =>
  createElement('hr', properties)
export const html = (properties?: Attributes<'html'>) =>
  createElement('html', properties)
export const i = (properties?: Attributes<'i'>) =>
  createElement('i', properties)
export const iframe = (properties?: Attributes<'iframe'>) =>
  createElement('iframe', properties)
export const img = (properties?: Attributes<'img'>) =>
  createElement('img', properties)
export const input = (properties?: Attributes<'input'>) =>
  createElement('input', properties)
export const ins = (properties?: Attributes<'ins'>) =>
  createElement('ins', properties)
export const kbd = (properties?: Attributes<'kbd'>) =>
  createElement('kbd', properties)
export const label = (properties?: Attributes<'label'>) =>
  createElement('label', properties)
export const legend = (properties?: Attributes<'legend'>) =>
  createElement('legend', properties)
export const li = (properties?: Attributes<'li'>) =>
  createElement('li', properties)
export const link = (properties?: Attributes<'link'>) =>
  createElement('link', properties)
export const main = (properties?: Attributes<'main'>) =>
  createElement('main', properties)
export const map = (properties?: Attributes<'map'>) =>
  createElement('map', properties)
export const mark = (properties?: Attributes<'mark'>) =>
  createElement('mark', properties)
export const menu = (properties?: Attributes<'menu'>) =>
  createElement('menu', properties)
export const meta = (properties?: Attributes<'meta'>) =>
  createElement('meta', properties)
export const meter = (properties?: Attributes<'meter'>) =>
  createElement('meter', properties)
export const nav = (properties?: Attributes<'nav'>) =>
  createElement('nav', properties)
export const noscript = (properties?: Attributes<'noscript'>) =>
  createElement('noscript', properties)
export const object = (properties?: Attributes<'object'>) =>
  createElement('object', properties)
export const ol = (properties?: Attributes<'ol'>) =>
  createElement('ol', properties)
export const optgroup = (properties?: Attributes<'optgroup'>) =>
  createElement('optgroup', properties)
export const option = (properties?: Attributes<'option'>) =>
  createElement('option', properties)
export const output = (properties?: Attributes<'output'>) =>
  createElement('output', properties)
export const p = (properties?: Attributes<'p'>) =>
  createElement('p', properties)
export const picture = (properties?: Attributes<'picture'>) =>
  createElement('picture', properties)
export const pre = (properties?: Attributes<'pre'>) =>
  createElement('pre', properties)
export const progress = (properties?: Attributes<'progress'>) =>
  createElement('progress', properties)
export const q = (properties?: Attributes<'q'>) =>
  createElement('q', properties)
export const rp = (properties?: Attributes<'rp'>) =>
  createElement('rp', properties)
export const rt = (properties?: Attributes<'rt'>) =>
  createElement('rt', properties)
export const ruby = (properties?: Attributes<'ruby'>) =>
  createElement('ruby', properties)
export const s = (properties?: Attributes<'s'>) =>
  createElement('s', properties)
export const samp = (properties?: Attributes<'samp'>) =>
  createElement('samp', properties)
export const script = (properties?: Attributes<'script'>) =>
  createElement('script', properties)
export const search = (properties?: Attributes<'search'>) =>
  createElement('search', properties)
export const section = (properties?: Attributes<'section'>) =>
  createElement('section', properties)
export const select = (properties?: Attributes<'select'>) =>
  createElement('select', properties)
export const slot = (properties?: Attributes<'slot'>) =>
  createElement('slot', properties)
export const small = (properties?: Attributes<'small'>) =>
  createElement('small', properties)
export const source = (properties?: Attributes<'source'>) =>
  createElement('source', properties)
export const span = (properties?: Attributes<'span'>) =>
  createElement('span', properties)
export const strong = (properties?: Attributes<'strong'>) =>
  createElement('strong', properties)
export const style = (properties?: Attributes<'style'>) =>
  createElement('style', properties)
export const sub = (properties?: Attributes<'sub'>) =>
  createElement('sub', properties)
export const summary = (properties?: Attributes<'summary'>) =>
  createElement('summary', properties)
export const sup = (properties?: Attributes<'sup'>) =>
  createElement('sup', properties)
export const table = (properties?: Attributes<'table'>) =>
  createElement('table', properties)
export const tbody = (properties?: Attributes<'tbody'>) =>
  createElement('tbody', properties)
export const td = (properties?: Attributes<'td'>) =>
  createElement('td', properties)
export const template = (properties?: Attributes<'template'>) =>
  createElement('template', properties)
export const textarea = (properties?: Attributes<'textarea'>) =>
  createElement('textarea', properties)
export const tfoot = (properties?: Attributes<'tfoot'>) =>
  createElement('tfoot', properties)
export const th = (properties?: Attributes<'th'>) =>
  createElement('th', properties)
export const thead = (properties?: Attributes<'thead'>) =>
  createElement('thead', properties)
export const time = (properties?: Attributes<'time'>) =>
  createElement('time', properties)
export const title = (properties?: Attributes<'title'>) =>
  createElement('title', properties)
export const tr = (properties?: Attributes<'tr'>) =>
  createElement('tr', properties)
export const track = (properties?: Attributes<'track'>) =>
  createElement('track', properties)
export const u = (properties?: Attributes<'u'>) =>
  createElement('u', properties)
export const ul = (properties?: Attributes<'ul'>) =>
  createElement('ul', properties)
export const video = (properties?: Attributes<'video'>) =>
  createElement('video', properties)
export const wbr = (properties?: Attributes<'wbr'>) =>
  createElement('wbr', properties)
