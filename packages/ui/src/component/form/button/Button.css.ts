import { Prop } from '@rvjs/core'
import vars from '@theme/variable/vars.css.ts'
import { recipe } from '@vanilla-extract/recipes'

export interface ButtonStyleProps {
  size?: Prop<'sm' | 'md' | 'lg' | 'xl' | '2xl'>
  kind?: Prop<
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'ghost'
    | 'dangerPrimary'
    | 'dangerGhost'
    | 'dangerTertiary'
  >
}

export const button_kind_recipe = recipe({
  base: {
    display: 'flex',
    justifyContent: 'space-between',
    gap: vars.spacing['07'],
    width: 'fit-content',
    height: 'fit-content',
    boxSizing: 'border-box',
    padding: 0,
    border: 'none',
    transition: `all ${vars.motion.productive}`,
    cursor: 'pointer',
    ':focus-visible': {
      outline: 'none',
    },
  },
  variants: {
    kind: {
      primary: {
        backgroundColor: vars.color.buttonPrimary,
        '&:hover': {
          backgroundColor: vars.color.buttonPrimaryHover,
        },
        '&:active': {
          backgroundColor: vars.color.buttonPrimaryActive,
        },
        '&:focus': {
          boxShadow: `inset 0 0 0 0.0625rem ${vars.color.focus},inset 0 0 0 0.125rem ${vars.color.focusInset}`,
        },
        '&:disabled': {
          backgroundColor: vars.color.buttonDisabled,
          cursor: 'not-allowed',
        },
      },
      secondary: {
        backgroundColor: vars.color.buttonSecondary,
        '&:hover': {
          backgroundColor: vars.color.buttonSecondaryHover,
        },
        '&:active': {
          backgroundColor: vars.color.buttonSecondaryActive,
        },
        '&:focus': {
          boxShadow: `inset 0 0 0 0.0625rem ${vars.color.focus},inset 0 0 0 0.125rem ${vars.color.focusInset}`,
        },
        '&:disabled': {
          backgroundColor: vars.color.buttonDisabled,
          cursor: 'not-allowed',
        },
      },
      tertiary: {
        backgroundColor: vars.color.transparent,
        boxShadow: `inset 0 0 0 0.0625rem ${vars.color.buttonTertiary}`,
        '&:hover': {
          backgroundColor: vars.color.buttonTertiaryHover,
        },
        '&:active': {
          backgroundColor: vars.color.buttonTertiaryActive,
        },
        '&:focus': {
          backgroundColor: vars.color.buttonTertiaryHover,
          boxShadow: `inset 0 0 0 0.0625rem ${vars.color.focus},inset 0 0 0 0.125rem ${vars.color.focusInset}`,
        },
        '&:disabled': {
          backgroundColor: vars.color.transparent,
          boxShadow: `inset 0 0 0 0.0625rem ${vars.color.buttonDisabled}`,
          cursor: 'not-allowed',
        },
      },
      ghost: {
        backgroundColor: vars.color.transparent,
        '&:hover': {
          backgroundColor: vars.color.backgroundHover,
        },
        '&:active': {
          backgroundColor: vars.color.backgroundActive,
        },
        '&:focus': {
          boxShadow: `inset 0 0 0 0.125rem ${vars.color.focus}`,
        },
        '&:disabled': {
          cursor: 'not-allowed',
        },
      },
      ghostIconOnly: {
        backgroundColor: vars.color.transparent,
        ':hover': {
          backgroundColor: vars.color.backgroundHover,
        },
        '&:active': {
          backgroundColor: vars.color.backgroundActive,
        },
        '&:focus': {
          boxShadow: `inset 0 0 0 0.125rem ${vars.color.focus}`,
        },
        '&:disabled': {
          cursor: 'not-allowed',
        },
      },
      dangerPrimary: {
        backgroundColor: vars.color.buttonDangerPrimary,
        '&:hover': {
          backgroundColor: vars.color.buttonDangerHover,
        },
        '&:active': {
          backgroundColor: vars.color.buttonDangerActive,
        },
        '&:focus': {
          boxShadow: `inset 0 0 0 0.0625rem ${vars.color.focus},inset 0 0 0 0.125rem ${vars.color.focusInset}`,
        },
        '&:disabled': {
          backgroundColor: vars.color.buttonDisabled,
        },
      },
      dangerGhost: {
        boxShadow: `inset 0 0 0 0.0625rem ${vars.color.buttonDangerSecondary}`,
        '&:hover': {
          backgroundColor: vars.color.buttonDangerHover,
        },
        '&:active': {
          backgroundColor: vars.color.buttonDangerActive,
        },
        '&:focus': {
          boxShadow: `inset 0 0 0 0.0625rem ${vars.color.focus},inset 0 0 0 0.125rem ${vars.color.focusInset}`,
        },
        '&:disabled': {
          backgroundColor: vars.color.buttonDisabled,
          cursor: 'not-allowed',
        },
      },
      dangerTertiary: {
        ':hover': {
          backgroundColor: vars.color.buttonDangerHover,
        },
        '&:active': {
          backgroundColor: vars.color.buttonDangerActive,
        },
        '&:focus': {
          boxShadow: `inset 0 0 0 0.0625rem ${vars.color.focus},inset 0 0 0 0.125rem ${vars.color.focusInset}`,
        },
        '&:disabled': {
          backgroundColor: vars.color.buttonDisabled,
          cursor: 'not-allowed',
        },
      },
    },
  },
})

export const button_size_recipe = recipe({
  variants: {
    size: {
      sm: {
        alignItems: 'center',
        height: vars.spacing['07'],
        paddingLeft: vars.spacing['05'],
        paddingRight: vars.spacing['05'],
      },
      md: {
        alignItems: 'center',
        height: vars.spacing['08'],
        paddingLeft: vars.spacing['05'],
        paddingRight: vars.spacing['05'],
      },
      lg: {
        height: vars.spacing['09'],
        paddingLeft: vars.spacing['05'],
        paddingTop: vars.spacing['05'],
        paddingRight: vars.spacing['05'],
      },
      xl: {
        height: vars.spacing['10'],
        paddingLeft: vars.spacing['05'],
        paddingTop: vars.spacing['05'],
        paddingRight: vars.spacing['05'],
      },
      '2xl': {
        height: vars.spacing['11'],
        paddingLeft: vars.spacing['05'],
        paddingTop: vars.spacing['05'],
        paddingRight: vars.spacing['05'],
      },
      smIconOnly: {
        alignItems: 'center',
        padding: vars.spacing['03'],
      },
      mdIconOnly: {
        alignItems: 'center',
        padding: vars.spacing['04'],
      },
      lgIconOnly: {
        alignItems: 'center',
        padding: vars.spacing['05'],
      },
      xlIconOnly: {
        padding: vars.spacing['06'],
      },
      '2xlIconOnly': {
        padding: vars.spacing['07'],
      },
    },
  },
})

export const button_text_recipe = recipe({
  variants: {
    kind: {
      primary: {
        color: `${vars.color.textOnColor} !important`,
        '&:disabled': {
          color: `${vars.color.textOnColorDisabled} !important`,
        },
      },
      secondary: {
        color: `${vars.color.textOnColor} !important`,
        '&:disabled': {
          color: `${vars.color.textOnColorDisabled} !important`,
        },
      },
      tertiary: {
        color: `${vars.color.buttonTertiary} !important`,
        '&:hover': {
          color: `${vars.color.textInverse} !important`,
        },
        '&:active': {
          color: `${vars.color.textInverse} !important`,
        },
        '&:focus': {
          color: `${vars.color.textInverse} !important`,
        },
        '&:disabled': {
          color: `${vars.color.textDisabled} !important`,
        },
      },
      ghost: {
        color: `${vars.color.linkPrimary} !important`,
        '&:hover': {
          color: `${vars.color.linkPrimaryHover} !important`,
        },
        '&:disabled': {
          color: `${vars.color.textDisabled} !important`,
        },
      },
      dangerPrimary: {
        color: `${vars.color.textOnColor} !important`,
        '&:disabled': {
          color: `${vars.color.textOnColorDisabled} !important`,
        },
      },
      dangerGhost: {
        color: `${vars.color.buttonDangerSecondary} !important`,
        '&:hover': {
          color: `${vars.color.textOnColor} !important`,
        },
        '&:active': {
          color: `${vars.color.textOnColor} !important`,
        },
        '&:disabled': {
          color: `${vars.color.textDisabled} !important`,
        },
      },
      dangerTertiary: {
        color: `${vars.color.buttonDangerSecondary} !important`,
        '&:hover': {
          color: `${vars.color.textOnColor} !important`,
        },
        '&:active': {
          color: `${vars.color.textOnColor} !important`,
        },
        '&:disabled': {
          color: `${vars.color.textDisabled} !important`,
        },
      },
    },
  },
})

export const button_icon_recipe = recipe({
  base: {
    width: vars.spacing['05'],
    height: vars.spacing['05'],
  },
  variants: {
    kind: {
      primary: {
        fill: vars.color.iconOnColor,
        selectors: {
          [`${button_kind_recipe.classNames.base}:disabled &`]: {
            fill: vars.color.iconOnColorDisabled,
          },
        },
      },
      secondary: {
        fill: vars.color.iconOnColor,
        selectors: {
          [`${button_kind_recipe.classNames.base}:disabled &`]: {
            fill: vars.color.iconOnColorDisabled,
          },
        },
      },
      tertiary: {
        fill: vars.color.buttonTertiary,
        selectors: {
          [`${button_kind_recipe.classNames.base}:hover &`]: {
            fill: vars.color.iconInverse,
          },
          [`${button_kind_recipe.classNames.base}:active &`]: {
            fill: vars.color.iconInverse,
          },
          [`${button_kind_recipe.classNames.base}:disabled &`]: {
            fill: vars.color.iconDisabled,
          },
        },
      },
      ghost: {
        fill: vars.color.linkPrimary,
        selectors: {
          [`${button_kind_recipe.classNames.base}:hover &`]: {
            fill: vars.color.linkPrimaryHover,
          },
          [`${button_kind_recipe.classNames.base}:disabled &`]: {
            fill: vars.color.iconDisabled,
          },
        },
      },
      ghostIconOnly: {
        fill: vars.color.iconPrimary,
        selectors: {
          [`${button_kind_recipe.classNames.base}:disabled &`]: {
            fill: vars.color.iconDisabled,
          },
        },
      },
      dangerPrimary: {
        fill: vars.color.iconOnColor,
        selectors: {
          [`${button_kind_recipe.classNames.base}:disabled &`]: {
            fill: vars.color.iconOnColorDisabled,
          },
        },
      },
      dangerGhost: {
        fill: vars.color.buttonDangerSecondary,
        selectors: {
          [`${button_kind_recipe.classNames.base}:hover &`]: {
            fill: vars.color.iconOnColor,
          },
          [`${button_kind_recipe.classNames.base}:active &`]: {
            fill: vars.color.iconOnColor,
          },
          [`${button_kind_recipe.classNames.base}:disabled &`]: {
            fill: vars.color.iconDisabled,
          },
        },
      },
      dangerTertiary: {
        fill: vars.color.buttonDangerSecondary,
        selectors: {
          [`${button_kind_recipe.classNames.base}:hover &`]: {
            fill: vars.color.iconOnColor,
          },
          [`${button_kind_recipe.classNames.base}:active &`]: {
            fill: vars.color.iconOnColor,
          },
          [`${button_kind_recipe.classNames.base}:disabled &`]: {
            fill: vars.color.iconDisabled,
          },
        },
      },
    },
  },
})
