import vars from '@theme/variable/vars.css.ts'
import { recipe } from '@vanilla-extract/recipes'

export const link_anchor_recipe = recipe({
  base: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: vars.spacing['03'],
    textDecoration: 'none',
    cursor: 'pointer',
    ':focus': {
      boxShadow: `inset 0 0 0 0.0625rem ${vars.color.focus}`,
    },
    ':active': {
      boxShadow: `inset 0 0 0 0.0625rem ${vars.color.focus}`,
    },
    ':focus-visible': {
      outline: 'none',
    },
  },
  variants: {
    inline: {
      true: {
        display: 'inline-flex',
      },
      false: {
        display: 'flex',
      },
    },
    size: {
      sm: {
        height: '1rem',
      },
      md: {
        height: '1.125rem',
      },
      lg: {
        height: '1.375rem',
      },
    },
  },
})

export const link_text_recipe = recipe({
  base: {
    color: `${vars.color.linkPrimary} !important`,
    selectors: {
      [`${link_anchor_recipe.classNames.base}:hover &`]: {
        color: `${vars.color.linkPrimaryHover} !important`,
      },
      [`${link_anchor_recipe.classNames.base}:focus &`]: {
        color: `${vars.color.linkPrimary} !important`,
      },
      [`${link_anchor_recipe.classNames.base}:active &`]: {
        color: `${vars.color.textPrimary} !important`,
      },
      [`${link_anchor_recipe.classNames.base}:visited &`]: {
        color: `${vars.color.linkVisited} !important`,
      },
    },
  },
  variants: {
    disabled: {
      true: {
        color: `${vars.color.textDisabled} !important`,
      },
    },
    visited: {
      true: {
        color: `${vars.color.linkVisited} !important`,
      },
    },
  },
})

export const link_icon_recipe = recipe({
  base: {
    fill: vars.color.linkPrimary,
    selectors: {
      [`${link_anchor_recipe.classNames.base}:hover &`]: {
        fill: vars.color.linkPrimaryHover,
      },
      [`${link_anchor_recipe.classNames.base}:focus &`]: {
        fill: vars.color.linkPrimary,
      },
      [`${link_anchor_recipe.classNames.base}:active &`]: {
        fill: vars.color.linkPrimary,
      },
      [`${link_anchor_recipe.classNames.base}:visited &`]: {
        fill: vars.color.linkVisited,
      },
    },
  },
  variants: {
    disabled: {
      true: {
        fill: vars.color.iconDisabled,
      },
    },
    visited: {
      true: {
        fill: vars.color.linkVisited,
      },
    },
    size: {
      sm: {
        width: vars.spacing['05'],
        height: vars.spacing['05'],
      },
      md: {
        width: vars.spacing['05'],
        height: vars.spacing['05'],
      },
      lg: {
        width: `calc(${vars.spacing['06']} - ${vars.spacing['02']})`,
        height: `calc(${vars.spacing['06']} - ${vars.spacing['02']})`,
      },
    },
  },
})
