import { Children } from '@rvjs/core/dom'
import {
  componentFnMap,
  componentRenderPropsMap,
  elementFnMap,
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

type ComponentFnMapKey = keyof typeof componentFnMap
type ElementFnMapKey = keyof typeof elementFnMap

export const renderComponentFromJSON = (jsons: RenderJSON[]): Children => {
  return jsons.map(renderByType).filter(Boolean) as Children
}

const renderByType = (json: RenderJSON) => {
  const { type } = json!
  if (type === 'component') {
    return renderComponent(json)
  } else if (type === 'element') {
    return renderElement(json)
  } else if (type === 'text') {
    return renderTextNode(json)
  }
}

const renderComponent = (json: RenderJSON) => {
  const { name, props = {} } = json!
  const renderFn = componentFnMap[name as ComponentFnMapKey]
  const componentProps = configProps(
    props,
    componentRenderPropsMap[name as ComponentFnMapKey],
  )
  const { children = [] } = componentProps
  if (children.length !== 0) {
    componentProps.children = renderComponentFromJSON(children as RenderJSON[])
  }

  return renderFn(componentProps)
}

const renderElement = (json: RenderJSON) => {
  const { name, props = {} } = json!
  const renderFn = elementFnMap[name as ElementFnMapKey]
  const elementProps = configProps(props, elementRenderProps)
  const { children = [] } = elementProps
  if (children.length !== 0) {
    elementProps.children = renderComponentFromJSON(children as RenderJSON[])
  }

  // @ts-ignore
  return renderFn(elementProps)
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
