import { content as core_dom_component_content } from '@_data/core/dom/component.json'
import { content as core_dom_element_content } from '@_data/core/dom/element.json'
import { content as core_dom_for_content } from '@_data/core/dom/for.json'
import { content as core_dom_root_content } from '@_data/core/dom/root.json'
import { content as core_dom_switch_content } from '@_data/core/dom/switch.json'
import { content as core_dom_toggle_content } from '@_data/core/dom/toggle.json'
import { content as core_reactive_onDestroy_content } from '@_data/core/reactive/onDestroy.json'
import { content as core_reactive_onMount_content } from '@_data/core/reactive/onMount.json'
import { content as core_reactive_prop_content } from '@_data/core/reactive/prop.json'
import { content as core_reactive_useEffect_content } from '@_data/core/reactive/useEffect.json'
import { content as core_reactive_useRef_content } from '@_data/core/reactive/useRef.json'
import { content as core_reactive_useState_content } from '@_data/core/reactive/useState.json'

import { content as is_gettingStarted_content } from '@_data/is/gettingStarted.json'
import { content as is_composite_content } from '@_data/is/type/composite.json'
import { content as is_primitive_content } from '@_data/is/type/primitive.json'
import { content as is_reference_content } from '@_data/is/type/reference.json'
import { content as is_rvjsCore_content } from '@_data/is/type/rvjsCore.json'
import { NoContentException } from '@error/noContent.exception'
import { Injectable } from '@nestjs/common'

const contentMap = {
  core: {
    dom: {
      component: core_dom_component_content,
      element: core_dom_element_content,
      for: core_dom_for_content,
      root: core_dom_root_content,
      switch: core_dom_switch_content,
      toggle: core_dom_toggle_content,
    },
    reactive: {
      onDestroy: core_reactive_onDestroy_content,
      onMount: core_reactive_onMount_content,
      prop: core_reactive_prop_content,
      useEffect: core_reactive_useEffect_content,
      useRef: core_reactive_useRef_content,
      useState: core_reactive_useState_content,
    },
  },
  ui: {},
  is: {
    'getting-started': is_gettingStarted_content,
    type: {
      composite: is_composite_content,
      primitive: is_primitive_content,
      reference: is_reference_content,
      'rvjs-core': is_rvjsCore_content,
    },
  },
}

@Injectable()
export class ContentService {
  findContentByPath(paths: string[]) {
    try {
      const content = paths.reduce((acc, path) => acc && acc[path], contentMap)
      if (!content) {
        throw new NoContentException()
      }
      return content
    } catch {
      throw new NoContentException()
    }
  }
}
