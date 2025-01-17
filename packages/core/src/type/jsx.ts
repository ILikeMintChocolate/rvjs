import { ElementObject } from '@hook/useElement'
import { Component } from '@render/component.ts'
import * as csstype from 'csstype'

export type Children = JSX.Element

export type SVG = JSX.SVG

export type DOMAttributes<T extends HTMLElement | SVGElement> =
  JSX.DOMAttributes<T>

declare global {
  namespace JSX {
    type Element = Component | Node | string | number | null | Element[]

    interface IntrinsicAttributes {
      children?: Element | Function
    }

    interface ElementChildrenAttribute {
      children: {}
    }

    type IntrinsicElements = {
      [K in keyof HTMLElementTagNameMap]: DOMAttributes<
        HTMLElementTagNameMap[K]
      >
    }

    type DOMAttributes<T extends HTMLElement | SVGElement> = Partial<
      Omit<
        T,
        keyof CustomDOMAttributes<T> | Lowercase<keyof EventHandlers<T>>
      > &
        CustomDOMAttributes<T> &
        EventHandlers<T>
    >

    interface CustomDOMAttributes<T> {
      style?: csstype.PropertiesHyphen
      element?: ElementObject<T>
      children?: Element
    }

    type EventHandler<
      T extends HTMLElement | SVGElement,
      K extends keyof (HTMLElement | SVGElement),
    > = NonNullable<T[K]>

    interface EventHandlers<T extends HTMLElement | SVGElement> {
      onAbort?: EventHandler<T, Lowercase<'onAbort'>>
      onAnimationEnd?: EventHandler<T, Lowercase<'onAnimationEnd'>>
      onAnimationIteration?: EventHandler<T, Lowercase<'onAnimationIteration'>>
      onAnimationStart?: EventHandler<T, Lowercase<'onAnimationStart'>>
      onAuxClick?: EventHandler<T, Lowercase<'onAuxClick'>>
      onBeforeInput?: EventHandler<T, Lowercase<'onBeforeInput'>>
      onBlur?: EventHandler<T, Lowercase<'onBlur'>>
      onCanPlay?: EventHandler<T, Lowercase<'onCanPlay'>>
      onCanPlayThrough?: EventHandler<T, Lowercase<'onCanPlayThrough'>>
      onChange?: EventHandler<T, Lowercase<'onChange'>>
      onClick?: EventHandler<T, Lowercase<'onClick'>>
      onContextMenu?: EventHandler<T, Lowercase<'onContextMenu'>>
      onDblClick?: EventHandler<T, Lowercase<'onDblClick'>>
      onDrag?: EventHandler<T, Lowercase<'onDrag'>>
      onDragEnd?: EventHandler<T, Lowercase<'onDragEnd'>>
      onDragEnter?: EventHandler<T, Lowercase<'onDragEnter'>>
      onDragLeave?: EventHandler<T, Lowercase<'onDragLeave'>>
      onDragOver?: EventHandler<T, Lowercase<'onDragOver'>>
      onDragStart?: EventHandler<T, Lowercase<'onDragStart'>>
      onDrop?: EventHandler<T, Lowercase<'onDrop'>>
      onDurationChange?: EventHandler<T, Lowercase<'onDurationChange'>>
      onEmptied?: EventHandler<T, Lowercase<'onEmptied'>>
      onEnded?: EventHandler<T, Lowercase<'onEnded'>>
      onError?: EventHandler<T, Lowercase<'onError'>>
      onFocus?: EventHandler<T, Lowercase<'onFocus'>>
      onGotPointerCapture?: EventHandler<T, Lowercase<'onGotPointerCapture'>>
      onInput?: EventHandler<T, Lowercase<'onInput'>>
      onInvalid?: EventHandler<T, Lowercase<'onInvalid'>>
      onKeyDown?: EventHandler<T, Lowercase<'onKeyDown'>>
      onKeyPress?: EventHandler<T, Lowercase<'onKeyPress'>>
      onKeyUp?: EventHandler<T, Lowercase<'onKeyUp'>>
      onLoad?: EventHandler<T, Lowercase<'onLoad'>>
      onLoadedData?: EventHandler<T, Lowercase<'onLoadedData'>>
      onLoadedMetadata?: EventHandler<T, Lowercase<'onLoadedMetadata'>>
      onLoadStart?: EventHandler<T, Lowercase<'onLoadStart'>>
      onLostPointerCapture?: EventHandler<T, Lowercase<'onLostPointerCapture'>>
      onMouseDown?: EventHandler<T, Lowercase<'onMouseDown'>>
      onMouseEnter?: EventHandler<T, Lowercase<'onMouseEnter'>>
      onMouseLeave?: EventHandler<T, Lowercase<'onMouseLeave'>>
      onMouseMove?: EventHandler<T, Lowercase<'onMouseMove'>>
      onMouseOut?: EventHandler<T, Lowercase<'onMouseOut'>>
      onMouseOver?: EventHandler<T, Lowercase<'onMouseOver'>>
      onMouseUp?: EventHandler<T, Lowercase<'onMouseUp'>>
      onPause?: EventHandler<T, Lowercase<'onPause'>>
      onPlay?: EventHandler<T, Lowercase<'onPlay'>>
      onPlaying?: EventHandler<T, Lowercase<'onPlaying'>>
      onPointerCancel?: EventHandler<T, Lowercase<'onPointerCancel'>>
      onPointerDown?: EventHandler<T, Lowercase<'onPointerDown'>>
      onPointerEnter?: EventHandler<T, Lowercase<'onPointerEnter'>>
      onPointerLeave?: EventHandler<T, Lowercase<'onPointerLeave'>>
      onPointerMove?: EventHandler<T, Lowercase<'onPointerMove'>>
      onPointerOut?: EventHandler<T, Lowercase<'onPointerOut'>>
      onPointerOver?: EventHandler<T, Lowercase<'onPointerOver'>>
      onPointerUp?: EventHandler<T, Lowercase<'onPointerUp'>>
      onProgress?: EventHandler<T, Lowercase<'onProgress'>>
      onRateChange?: EventHandler<T, Lowercase<'onRateChange'>>
      onReset?: EventHandler<T, Lowercase<'onReset'>>
      onScroll?: EventHandler<T, Lowercase<'onScroll'>>
      onScrollEnd?: EventHandler<T, Lowercase<'onScrollEnd'>>
      onSeeked?: EventHandler<T, Lowercase<'onSeeked'>>
      onSeeking?: EventHandler<T, Lowercase<'onSeeking'>>
      onSelect?: EventHandler<T, Lowercase<'onSelect'>>
      onStalled?: EventHandler<T, Lowercase<'onStalled'>>
      onSubmit?: EventHandler<T, Lowercase<'onSubmit'>>
      onSuspend?: EventHandler<T, Lowercase<'onSuspend'>>
      onTimeUpdate?: EventHandler<T, Lowercase<'onTimeUpdate'>>
      onTouchCancel?: EventHandler<T, Lowercase<'onTouchCancel'>>
      onTouchEnd?: EventHandler<T, Lowercase<'onTouchEnd'>>
      onTouchMove?: EventHandler<T, Lowercase<'onTouchMove'>>
      onTouchStart?: EventHandler<T, Lowercase<'onTouchStart'>>
      onTransitionStart?: EventHandler<T, Lowercase<'onTransitionStart'>>
      onTransitionEnd?: EventHandler<T, Lowercase<'onTransitionEnd'>>
      onTransitionRun?: EventHandler<T, Lowercase<'onTransitionRun'>>
      onTransitionCancel?: EventHandler<T, Lowercase<'onTransitionCancel'>>
      onVolumeChange?: EventHandler<T, Lowercase<'onVolumeChange'>>
      onWaiting?: EventHandler<T, Lowercase<'onWaiting'>>
      onWheel?: EventHandler<T, Lowercase<'onWheel'>>
    }

    type SVG = DOMAttributes<SVGElement>
  }
}
