import vars from '@theme/variable/vars.css.ts'
import { style } from '@vanilla-extract/css'
import { recipe } from '@vanilla-extract/recipes'

export const subMenu_wrapper_style = style({
  display: 'flex',
})

export const subMenu_button_recipe = recipe({
  base: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    transition: `all ${vars.motion.productive}`,
    paddingTop: '0',
    paddingLeft: vars.spacing['05'],
    paddingRight: vars.spacing['05'],
    border: 'none',
    gap: vars.spacing['03'],
    cursor: 'pointer',
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
  },
  variants: {
    isSelected: {
      true: {
        backgroundColor: vars.color.layer01,
      },
      false: {
        backgroundColor: vars.color.transparent,
      },
    },
  },
})

export const subMenu_text_style = style({
  transition: `all ${vars.motion.productive}`,
  selectors: {
    [`${subMenu_button_recipe.classNames.base}:hover &`]: {
      color: `${vars.color.textPrimary} !important`,
    },
    [`${subMenu_button_recipe.classNames.base}:active &`]: {
      color: `${vars.color.textPrimary} !important`,
    },
  },
})

export const subMenu_iconWrapper_style = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  position: 'relative',
  top: '50%',
  height: '100%',
  transform: 'translateY(-50%)',
})

export const subMenu_icon_recipe = recipe({
  base: {
    width: vars.spacing['05'],
    height: vars.spacing['05'],
    fill: vars.color.iconSecondary,
    transition: `transform ${vars.motion.productive}`,
    selectors: {
      [`${subMenu_button_recipe.classNames.base}:hover &`]: {
        fill: vars.color.iconPrimary,
      },
      [`${subMenu_button_recipe.classNames.base}:active &`]: {
        fill: vars.color.iconPrimary,
      },
    },
  },
  variants: {
    isSelected: {
      true: {
        transform: 'rotate(180deg)',
      },
    },
  },
})

export const subMenu_dropDown_recipe = recipe({
  base: {
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
    top: vars.spacing['09'],
    padding: 0,
    margin: 0,
    inlineSize: '12.5rem',
    zIndex: 250,
    boxShadow: `0 0.25rem 0.5rem 0 rgba(0, 0, 0, 0.5)`,
    listStyleType: 'none',
  },
  variants: {
    isSelected: {
      true: {
        display: 'flex',
      },
      false: {
        display: 'none',
      },
    },
  },
})
