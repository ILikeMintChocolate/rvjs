import { Component } from '@render/component.ts'

interface CurrentComponent {
  value: Component | null
}

export let currentComponent: CurrentComponent = {
  value: null,
}
