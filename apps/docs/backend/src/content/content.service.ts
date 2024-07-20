import { Injectable } from '@nestjs/common'
import { content as dom_component_content } from '../_data/core/dom/component.json'
import { content as core_useEffect_content } from '../_data/core/reactive/useEffect.json'
import { content as core_useState_content } from '../_data/core/reactive/useState.json'
import { content as is_gettingStarted_content } from '../_data/is/gettingStarted.json'
import { content as is_composite_content } from '../_data/is/type/composite.json'
import { content as is_primitive_content } from '../_data/is/type/primitive.json'
import { content as is_reference_content } from '../_data/is/type/reference.json'
import { content as is_rvjsCore_content } from '../_data/is/type/rvjsCore.json'
import { NoContentException } from '../error/noContent.exception'

const contentMap = {
  core: {
    dom: {
      component: dom_component_content,
    },
    reactive: {
      useState: core_useState_content,
      useEffect: core_useEffect_content,
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
