import { Prop } from '@rvjs/core/reactive'
import vars from '@theme/variable/vars.css.ts'
import { recipe } from '@vanilla-extract/recipes'
import { createSprinkles, defineProperties } from '@vanilla-extract/sprinkles'

export interface TextStyleProps {
  kind?: Prop<
    | 'body-compact-01'
    | 'body-compact-02'
    | 'body-01'
    | 'body-02'
    | 'code-01'
    | 'code-02'
    | 'label-01'
    | 'label-02'
    | 'helper-text-01'
    | 'helper-text-02'
    | 'legal-01'
    | 'legal-02'
    | 'heading-compact-01'
    | 'heading-compact-02'
    | 'heading-01'
    | 'heading-02'
    | 'heading-03'
    | 'heading-04'
    | 'heading-05'
    | 'heading-06'
    | 'heading-07'
  >
  color?: Prop<keyof typeof vars.color>
}

export const text_recipe = recipe({
  base: {
    fontFamily: vars.font.family,
  },
  variants: {
    kind: {
      'body-compact-01': {
        fontFamily: 'IBM Plex Sans, sans-serif',
        fontStyle: 'normal',
        fontVariant: 'normal',
        fontWeight: vars.font.weight.regular,
        fontSize: vars.font.size['14'],
        lineHeight: vars.font.size['18'],
        letterSpacing: vars.font.letterSpacing['01'],
      },
      'body-compact-02': {
        fontFamily: 'IBM Plex Sans, sans-serif',
        fontStyle: 'normal',
        fontVariant: 'normal',
        fontWeight: vars.font.weight.regular,
        fontSize: vars.font.size['16'],
        lineHeight: vars.font.size['22'],
        letterSpacing: vars.font.letterSpacing['00'],
      },
      'body-01': {
        fontFamily: 'IBM Plex Sans, sans-serif',
        fontStyle: 'normal',
        fontVariant: 'normal',
        fontWeight: vars.font.weight.regular,
        fontSize: vars.font.size['14'],
        lineHeight: vars.font.size['20'],
        letterSpacing: vars.font.letterSpacing['01'],
      },
      'body-02': {
        fontFamily: 'IBM Plex Sans, sans-serif',
        fontStyle: 'normal',
        fontVariant: 'normal',
        fontWeight: vars.font.weight.regular,
        fontSize: vars.font.size['16'],
        lineHeight: vars.font.size['24'],
        letterSpacing: vars.font.letterSpacing['00'],
      },
      'code-01': {
        fontFamily: 'IBM Plex Mono, monospace',
        fontStyle: 'normal',
        fontVariant: 'normal',
        fontWeight: vars.font.weight.regular,
        fontSize: vars.font.size['12'],
        lineHeight: vars.font.size['16'],
        letterSpacing: vars.font.letterSpacing['02'],
      },
      'code-02': {
        fontFamily: 'IBM Plex Mono, monospace',
        fontStyle: 'normal',
        fontVariant: 'normal',
        fontWeight: vars.font.weight.regular,
        fontSize: vars.font.size['14'],
        lineHeight: vars.font.size['20'],
        letterSpacing: vars.font.letterSpacing['02'],
      },
      'label-01': {
        fontFamily: 'IBM Plex Sans, sans-serif',
        fontStyle: 'normal',
        fontVariant: 'normal',
        fontWeight: vars.font.weight.regular,
        fontSize: vars.font.size['12'],
        lineHeight: vars.font.size['16'],
        letterSpacing: vars.font.letterSpacing['02'],
      },
      'label-02': {
        fontFamily: 'IBM Plex Sans, sans-serif',
        fontStyle: 'normal',
        fontVariant: 'normal',
        fontWeight: vars.font.weight.regular,
        fontSize: vars.font.size['14'],
        lineHeight: vars.font.size['18'],
        letterSpacing: vars.font.letterSpacing['01'],
      },
      'helper-text-01': {
        fontFamily: 'IBM Plex Sans, sans-serif',
        fontStyle: 'normal',
        fontVariant: 'normal',
        fontWeight: vars.font.weight.regular,
        fontSize: vars.font.size['12'],
        lineHeight: vars.font.size['16'],
        letterSpacing: vars.font.letterSpacing['02'],
      },
      'helper-text-02': {
        fontFamily: 'IBM Plex Sans, sans-serif',
        fontStyle: 'normal',
        fontVariant: 'normal',
        fontWeight: vars.font.weight.regular,
        fontSize: vars.font.size['14'],
        lineHeight: vars.font.size['18'],
        letterSpacing: vars.font.letterSpacing['01'],
      },
      'legal-01': {
        fontFamily: 'IBM Plex Sans, sans-serif',
        fontStyle: 'normal',
        fontVariant: 'normal',
        fontWeight: vars.font.weight.regular,
        fontSize: vars.font.size['12'],
        lineHeight: vars.font.size['16'],
        letterSpacing: vars.font.letterSpacing['02'],
      },
      'legal-02': {
        fontFamily: 'IBM Plex Sans, sans-serif',
        fontStyle: 'normal',
        fontVariant: 'normal',
        fontWeight: vars.font.weight.regular,
        fontSize: vars.font.size['14'],
        lineHeight: vars.font.size['18'],
        letterSpacing: vars.font.letterSpacing['01'],
      },
      'heading-compact-01': {
        fontFamily: 'IBM Plex Sans, sans-serif',
        fontStyle: 'normal',
        fontVariant: 'normal',
        fontWeight: vars.font.weight.semiBold,
        fontSize: vars.font.size['14'],
        lineHeight: vars.font.size['18'],
        letterSpacing: vars.font.letterSpacing['01'],
      },
      'heading-compact-02': {
        fontFamily: 'IBM Plex Sans, sans-serif',
        fontStyle: 'normal',
        fontVariant: 'normal',
        fontWeight: vars.font.weight.semiBold,
        fontSize: vars.font.size['16'],
        lineHeight: vars.font.size['22'],
        letterSpacing: vars.font.letterSpacing['00'],
      },
      'heading-01': {
        fontFamily: 'IBM Plex Sans, sans-serif',
        fontStyle: 'normal',
        fontVariant: 'normal',
        fontWeight: vars.font.weight.semiBold,
        fontSize: vars.font.size['14'],
        lineHeight: vars.font.size['20'],
        letterSpacing: vars.font.letterSpacing['01'],
      },
      'heading-02': {
        fontFamily: 'IBM Plex Sans, sans-serif',
        fontStyle: 'normal',
        fontVariant: 'normal',
        fontWeight: vars.font.weight.semiBold,
        fontSize: vars.font.size['16'],
        lineHeight: vars.font.size['24'],
        letterSpacing: vars.font.letterSpacing['00'],
      },
      'heading-03': {
        fontFamily: 'IBM Plex Sans, sans-serif',
        fontStyle: 'normal',
        fontVariant: 'normal',
        fontWeight: vars.font.weight.regular,
        fontSize: vars.font.size['20'],
        lineHeight: vars.font.size['28'],
        letterSpacing: vars.font.letterSpacing['00'],
      },
      'heading-04': {
        fontFamily: 'IBM Plex Sans, sans-serif',
        fontStyle: 'normal',
        fontVariant: 'normal',
        fontWeight: vars.font.weight.regular,
        fontSize: vars.font.size['28'],
        lineHeight: vars.font.size['36'],
        letterSpacing: vars.font.letterSpacing['00'],
      },
      'heading-05': {
        fontFamily: 'IBM Plex Sans, sans-serif',
        fontStyle: 'normal',
        fontVariant: 'normal',
        fontWeight: vars.font.weight.light,
        fontSize: vars.font.size['32'],
        lineHeight: vars.font.size['40'],
        letterSpacing: vars.font.letterSpacing['00'],
      },
      'heading-06': {
        fontFamily: 'IBM Plex Sans, sans-serif',
        fontStyle: 'normal',
        fontVariant: 'normal',
        fontWeight: vars.font.weight.light,
        fontSize: vars.font.size['42'],
        lineHeight: vars.font.size['50'],
        letterSpacing: vars.font.letterSpacing['00'],
      },
      'heading-07': {
        fontFamily: 'IBM Plex Sans, sans-serif',
        fontStyle: 'normal',
        fontVariant: 'normal',
        fontWeight: vars.font.weight.light,
        fontSize: vars.font.size['54'],
        lineHeight: vars.font.size['64'],
        letterSpacing: vars.font.letterSpacing['00'],
      },
    },
  },
})

export const textDefineProps = defineProperties({
  properties: {
    color: vars.color,
  },
})

export const textSprinkles = createSprinkles(textDefineProps)
