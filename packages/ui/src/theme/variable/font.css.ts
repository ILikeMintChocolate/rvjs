import { createGlobalTheme } from '@vanilla-extract/css'

const fontVars = createGlobalTheme(':root', {
  size: {
    /** 12px / 0.75rem */
    '12': '0.75rem',
    /** 14px / 0.875rem */
    '14': '0.875rem',
    /** 16px / 1rem */
    '16': '1rem',
    /** 18px / 1.125rem */
    '18': '1.125rem',
    /** 20px / 1.25rem */
    '20': '1.25rem',
    /** 22px / 1.375rem */
    '22': '1.375rem',
    /** 24px / 1.5rem */
    '24': '1.5rem',
    /** 28px / 1.75rem */
    '28': '1.75rem',
    /** 32px / 2rem */
    '32': '2rem',
    /** 36px / 2.25rem */
    '36': '2.25rem',
    /** 40px / 2.5rem */
    '40': '2.5rem',
    /** 42px / 2.625rem */
    '42': '2.625rem',
    /** 50px / 3.125rem */
    '50': '3.125rem',
    /** 54px / 3.375rem */
    '54': '3.375rem',
    /** 64px / 4rem */
    '64': '4rem',
  },
  weight: {
    light: '300',
    regular: '400',
    semiBold: '600',
  },
  letterSpacing: {
    '00': '0rem',
    '01': '0.01rem',
    '02': '0.02em',
  },
})

export default fontVars
