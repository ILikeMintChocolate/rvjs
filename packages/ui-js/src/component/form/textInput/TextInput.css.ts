import vars from '@theme/variable/vars.css.ts'
import { style } from '@vanilla-extract/css'
import { recipe } from '@vanilla-extract/recipes'

export const textInput_style = style({
  backgroundColor: vars.color.transparent,
})

export const textInput_label_recipe = recipe({
  base: {
    marginBottom: `${vars.spacing['03']} !important`,
  },
  variants: {
    disabled: {
      false: {
        color: `${vars.color.textSecondary} !important`,
      },
      true: {
        color: `${vars.color.textDisabled} !important`,
      },
    },
  },
})

export const textInput_inputWrapper_recipe = recipe({
  base: {
    backgroundColor: vars.color.field01,
    border: 'none',

    ':focus-within': {
      boxShadow: `inset 0 0 0 0.125rem ${vars.color.focus}`,
    },
  },
  variants: {
    size: {
      sm: {
        height: vars.spacing['07'],
      },
      md: {
        height: vars.spacing['08'],
      },
      lg: {
        height: vars.spacing['09'],
      },
    },
    disabled: {
      false: {
        boxShadow: `inset 0 -0.0625rem 0 0 ${vars.color.borderStrong01}`,
        cursor: 'text',
      },
      true: {
        boxShadow: 'none',
        cursor: 'not-allowed',
      },
    },
  },
})

export const textInput_input_recipe = recipe({
  base: {
    width: '100%',
    height: '100%',
    border: 'none',
    backgroundColor: vars.color.transparent,
    paddingLeft: `${vars.spacing['05']} !important`,
    paddingRight: `${vars.spacing['05']} !important`,
    ':focus': {
      outline: 'none',
    },
    '::placeholder': {
      color: vars.color.textPlaceholder,
    },
  },
  variants: {
    disabled: {
      false: {
        color: `${vars.color.textPrimary} !important`,
        cursor: 'text',
      },
      true: {
        color: `${vars.color.textDisabled} !important`,
        cursor: 'not-allowed',
      },
    },
  },
})

export const textInput_invalidIcon_style = style({
  width: vars.spacing['05'],
  height: vars.spacing['05'],
  fill: vars.color.supportError,
  paddingRight: `${vars.spacing['05']} !important`,
})

export const textInput_warnIcon_style = style({
  width: vars.spacing['05'],
  height: vars.spacing['05'],
  fill: vars.color.supportWarning,
  paddingRight: `${vars.spacing['05']} !important`,
})

export const textInput_helper_recipe = recipe({
  base: {
    marginTop: `${vars.spacing['02']} !important`,
  },
  variants: {
    disabled: {
      false: {
        color: `${vars.color.textSecondary} !important`,
      },
      true: {
        color: `${vars.color.textDisabled} !important`,
      },
    },
  },
})
