import { insert } from '@rvjs/core'
import { isArray, isHTMLElement, isObject } from '@type/guard.ts'
import { componentFnMap, componentRenderPropsMap } from '@util/renderMap.ts'

interface Json {
  type: 'element' | 'component' | 'text'
  name: keyof (HTMLElementTagNameMap | typeof componentFnMap)
  props: Record<string, any>
}

export const renderFromJSON = (json: Json) => {
  return render(json)
}

export const render = (json: Json | Json[]) => {
  if (isArray(json)) {
    return json.map(render)
  } else if (isObject(json)) {
    if (!json.type) {
      return json
    } else if (json.type === 'element') {
      return renderElement(json)
    } else if (json.type === 'component') {
      return renderComponent(json)
    } else if (json.type === 'text') {
      return renderTextNode(json)
    }
  }
}

export const renderElement = (json: Json) => {
  const element = document.createElement(
    json.name as keyof HTMLElementTagNameMap,
  )
  for (const key in json.props) {
    if (key === 'children') {
      for (const child of render(json.props.children)) {
        if (isHTMLElement(child)) {
          element.appendChild(child)
        } else {
          // @ts-ignore
          insert(element, child)
        }
      }
    } else if (key === 'style') {
      for (const styleKey in json.props.style) {
        element.style[styleKey] = json.props.style[styleKey]
      }
    } else if (key in element) {
      element[key] = json.props[key]
    } else {
      element.setAttribute(key, json.props[key])
    }
  }
  return element
}

export const renderComponent = (json: Json) => {
  const props = configProps(json)
  const componentFn = componentFnMap[json.name]
  return componentFn(props)
}

export const renderTextNode = (json: Json) => {
  const textNode = document.createTextNode(json.props.text)
  return textNode
}

export const configProps = (json: Json) => {
  const newProps = {}
  for (const key in json.props) {
    if (!componentRenderPropsMap[json.name][key]) {
      newProps[key] = json.props[key]
    } else if (isObject(json.props[key])) {
      newProps[key] = componentRenderPropsMap[json.name][key](
        render(json.props[key]),
      )
    } else {
      newProps[key] = componentRenderPropsMap[json.name][key](json.props[key])
    }
  }
  return newProps
}
