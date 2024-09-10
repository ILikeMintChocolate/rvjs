import { Block, Children, element } from '@rvjs/core'
import {
  componentFnMap,
  componentRenderPropsMap,
  elementRenderProps,
  textNodeFn,
} from '@util/renderMap.ts'
import { Required } from '@util/type.ts'

export interface RenderJSON {
  type: 'component' | 'element'
  name: ComponentFnMapKey | ElementFnMapKey
  props?: Partial<
    Record<string, string> & {
      children: RenderJSON[] | Children
    }
  >
}

type ComponentFnMapKey = string
type ElementFnMapKey = keyof HTMLElementTagNameMap

interface RenderComponentFromJSONOptions {
  indexHeading: boolean
}

interface RenderComponentFromJSONContext {
  headingIndex: Block[]
}

export const renderComponentFromJSON = (
  jsons: RenderJSON[],
  options?: RenderComponentFromJSONOptions,
) => {
  const { indexHeading = false } = options ?? {}
  const context = {
    headingIndex: [],
  }
  const blocks = renderJSON(
    jsons,
    {
      indexHeading,
    },
    context,
  )
  return {
    blocks,
    context,
  }
}

const renderJSON = (
  jsons: RenderJSON[],
  options: RenderComponentFromJSONOptions,
  context: RenderComponentFromJSONContext,
) => {
  return jsons
    .map((json) => {
      const { type } = json!
      if (type === 'component') {
        return renderComponent(json, options, context)
      } else if (type === 'element') {
        return renderElement(json, options, context)
      } else if (type === 'text') {
        return renderTextNode(json)
      }
    })
    .filter(Boolean) as Children
}

const renderComponent = (
  json: RenderJSON,
  options: RenderComponentFromJSONOptions,
  context: RenderComponentFromJSONContext,
) => {
  const { name, props = {} } = json!
  const renderFn = componentFnMap[name as ComponentFnMapKey]
  const componentProps = configProps(
    props,
    (componentRenderPropsMap as Object)[name as ComponentFnMapKey],
  )
  const { children = [] } = componentProps
  if (children.length !== 0) {
    componentProps.children = renderJSON(
      children as RenderJSON[],
      options,
      context,
    )
  }
  // @ts-ignore
  const block = renderFn(componentProps)
  if (
    options.indexHeading &&
    name === 'Text' &&
    /^heading-\d{2}$/.test(props.kind)
  ) {
    context.headingIndex.push(block)
  }
  return block
}

const renderElement = (
  json: RenderJSON,
  options: RenderComponentFromJSONOptions,
  context: RenderComponentFromJSONContext,
) => {
  const { name, props = {} } = json!
  const elementProps = configProps(props, elementRenderProps)
  const { children = [] } = elementProps
  if (children.length !== 0) {
    elementProps.children = renderJSON(
      children as RenderJSON[],
      options,
      context,
    )
  }
  // @ts-ignore
  const block = element(name, elementProps)
  if (
    options.indexHeading &&
    ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(name)
  ) {
    context.headingIndex.push(block)
  }
  return block
}

const renderTextNode = (json: RenderJSON) => {
  const { props } = json!
  const { text = '' } = props ?? {}
  const renderFn = textNodeFn
  return renderFn(text)
}

const configProps = <T extends RenderJSON['props']>(
  props: Required<T>,
  propsMap: Partial<Record<keyof T, Function>>,
): T => {
  return (Object.keys(props) as Array<keyof T>).reduce(
    (propsObject, propKey) => {
      const propValue = props[propKey]
      const prop = propsMap[propKey]?.(propValue) ?? propValue
      return { ...propsObject, [propKey]: prop }
    },
    {} as T,
  )
}
