import vars from '@theme/variable/vars.css.ts'
import { style } from '@vanilla-extract/css'
import { recipe } from '@vanilla-extract/recipes'

export const sideNavMenu_wrapper_style = style({
  display: 'flex',
  flexDirection: 'column',
})

export const sideNavMenu_button_style = style({
  display: 'flex',
  width: '100%',
  height: vars.spacing['07'],
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  paddingRight: vars.spacing['05'],
  transition: `all ${vars.motion.productive}`,
  border: 'none',
  cursor: 'pointer',
  backgroundColor: vars.color.background,
  ':hover': {
    backgroundColor: vars.color.backgroundHover,
  },
  ':focus': {
    boxShadow: `inset 0 0 0 0.125rem ${vars.color.focus}`,
  },
  ':active': {
    backgroundColor: vars.color.backgroundActive,
  },
  ':focus-visible': {
    outline: 'none',
  },
})

export const sideNavMenu_text_style = style({
  transition: `all ${vars.motion.productive}`,
  selectors: {
    [`${sideNavMenu_button_style}:hover &`]: {
      color: `${vars.color.textPrimary} !important`,
    },
    [`${sideNavMenu_button_style}:active &`]: {
      color: `${vars.color.textPrimary} !important`,
    },
  },
})

export const sideNavMenu_iconWrapper_style = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
})

export const sideNavMenu_icon_recipe = recipe({
  base: {
    width: vars.spacing['05'],
    height: vars.spacing['05'],
    fill: vars.color.iconSecondary,
    transition: `all ${vars.motion.productive}`,
    selectors: {
      [`${sideNavMenu_button_style}:hover &`]: {
        fill: vars.color.iconPrimary,
      },
      [`${sideNavMenu_button_style}:active &`]: {
        fill: vars.color.iconPrimary,
      },
    },
  },
  variants: {
    isShow: {
      true: {
        transform: 'rotate(180deg)',
      },
      false: {
        transform: '',
      },
    },
  },
})

export const sideNavMenu_ul_recipe = recipe({
  base: {
    flexDirection: 'column',
    margin: '0',
    padding: '0',
  },
  variants: {
    isShow: {
      true: {
        display: 'flex',
      },
      false: {
        display: 'none',
      },
    },
  },
})
