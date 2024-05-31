import { Prop } from '@rvjs/core/reactive'
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

export const button_recipe = recipe({
  base: {
    width: 'fit-content',
    height: 'fit-content',
    boxSizing: 'border-box',
    border: '1px solid transparent',
    transition: 'all 0.1s ease-in-out',
    cursor: 'pointer',
    display: 'flex',
  },
  variants: {
    size: {
      sm: {
        alignItems: 'center',
        height: vars.spacing['07'],
        paddingLeft: vars.spacing['05'],
        paddingRight: vars.spacing['10'],
      },
      md: {
        alignItems: 'center',
        height: vars.spacing['08'],
        paddingLeft: vars.spacing['05'],
        paddingRight: vars.spacing['10'],
      },
      lg: {
        height: vars.spacing['09'],
        paddingLeft: vars.spacing['05'],
        paddingTop: vars.spacing['05'],
        paddingRight: vars.spacing['10'],
      },
      xl: {
        height: vars.spacing['10'],
        paddingLeft: vars.spacing['05'],
        paddingTop: vars.spacing['05'],
        paddingRight: vars.spacing['10'],
      },
      '2xl': {
        height: vars.spacing['11'],
        paddingLeft: vars.spacing['05'],
        paddingTop: vars.spacing['05'],
        paddingRight: vars.spacing['10'],
      },
    },
    kind: {
      primary: {
        color: vars.color.textOnColor,
        backgroundColor: vars.color.buttonPrimary,
        '& svg': {
          fill: vars.color.iconOnColor,
        },
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
          color: vars.color.textOnColorDisabled,
          cursor: 'not-allowed',
          '& svg': {
            fill: vars.color.iconOnColorDisabled,
          },
        },
      },
      secondary: {
        color: vars.color.textOnColor,
        backgroundColor: vars.color.buttonSecondary,
        '& svg': {
          fill: vars.color.iconOnColor,
        },
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
          color: vars.color.textOnColorDisabled,
          cursor: 'not-allowed',
          '& svg': {
            fill: vars.color.iconOnColorDisabled,
          },
        },
      },
      tertiary: {
        color: vars.color.buttonTertiary,
        backgroundColor: vars.color.transparent,
        boxShadow: `inset 0 0 0 0.0625rem ${vars.color.buttonTertiary}`,
        '& svg': {
          fill: vars.color.buttonTertiary,
        },
        '&:hover': {
          color: vars.color.textInverse,
          '& svg': {
            fill: vars.color.iconInverse,
          },
          backgroundColor: vars.color.buttonTertiaryHover,
        },
        '&:active': {
          color: vars.color.textInverse,
          '& svg': {
            fill: vars.color.iconInverse,
          },
          backgroundColor: vars.color.buttonTertiaryActive,
        },
        '&:focus': {
          color: vars.color.textInverse,
          backgroundColor: vars.color.buttonTertiaryHover,
          boxShadow: `inset 0 0 0 0.0625rem ${vars.color.focus},inset 0 0 0 0.125rem ${vars.color.focusInset}`,
        },
        '&:disabled': {
          backgroundColor: vars.color.transparent,
          boxShadow: `inset 0 0 0 0.0625rem ${vars.color.buttonDisabled}`,
          color: vars.color.textDisabled,
          cursor: 'not-allowed',
          '& svg': {
            fill: vars.color.iconDisabled,
          },
        },
      },
      ghost: {
        color: vars.color.linkPrimary,
        backgroundColor: vars.color.transparent,
        '& svg': {
          fill: vars.color.linkPrimary,
        },

        '&:hover': {
          color: vars.color.linkPrimaryHover,
          backgroundColor: vars.color.backgroundHover,
          '& svg': {
            fill: vars.color.linkPrimaryHover,
          },
        },
        '&:active': {
          backgroundColor: vars.color.backgroundActive,
        },
        '&:focus': {
          boxShadow: `inset 0 0 0 0.0625rem ${vars.color.focus}`,
        },
        '&:disabled': {
          color: vars.color.textDisabled,
          cursor: 'not-allowed',
          '& svg': {
            fill: vars.color.iconDisabled,
          },
        },
      },
      dangerPrimary: {
        color: vars.color.textOnColor,
        backgroundColor: vars.color.buttonDangerPrimary,
        '& svg': {
          fill: vars.color.iconOnColor,
        },
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
          color: vars.color.textOnColorDisabled,
          '& svg': {
            fill: vars.color.iconOnColorDisabled,
          },
        },
      },
      dangerGhost: {
        color: vars.color.buttonDangerSecondary,
        boxShadow: `inset 0 0 0 0.0625rem ${vars.color.buttonDangerSecondary}`,
        '& svg': {
          fill: vars.color.buttonDangerSecondary,
        },
        '&:hover': {
          color: vars.color.textOnColor,
          backgroundColor: vars.color.buttonDangerHover,
          '& svg': {
            fill: vars.color.iconOnColor,
          },
        },
        '&:active': {
          color: vars.color.textOnColor,
          backgroundColor: vars.color.buttonDangerActive,
          '& svg': {
            fill: vars.color.iconOnColor,
          },
        },
        '&:focus': {
          boxShadow: `inset 0 0 0 0.0625rem ${vars.color.focus},inset 0 0 0 0.125rem ${vars.color.focusInset}`,
        },
        '&:disabled': {
          color: vars.color.textDisabled,
          backgroundColor: vars.color.buttonDisabled,
          cursor: 'not-allowed',
          '& svg': {
            fill: vars.color.iconDisabled,
          },
        },
      },
      dangerTertiary: {
        color: vars.color.buttonDangerSecondary,
        '& svg': {
          fill: vars.color.buttonDangerSecondary,
        },
        '&:hover': {
          color: vars.color.textOnColor,
          backgroundColor: vars.color.buttonDangerHover,
          '& svg': {
            fill: vars.color.iconOnColor,
          },
        },
        '&:active': {
          color: vars.color.textOnColor,
          backgroundColor: vars.color.buttonDangerActive,
          '& svg': {
            fill: vars.color.iconOnColor,
          },
        },
        '&:focus': {
          boxShadow: `inset 0 0 0 0.0625rem ${vars.color.focus},inset 0 0 0 0.125rem ${vars.color.focusInset}`,
        },
        '&:disabled': {
          color: vars.color.textDisabled,
          backgroundColor: vars.color.buttonDisabled,
          cursor: 'not-allowed',
          '& svg': {
            fill: vars.color.iconDisabled,
          },
        },
      },
    },
  },
})
