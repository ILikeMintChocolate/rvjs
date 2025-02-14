import { createGlobalTheme } from '@vanilla-extract/css'

const spacingVars = createGlobalTheme(':root', {
  spacing: {
    /** 0rem */
    '00': '0',
    /** 0.125rem */
    '01': '0.125rem',
    /** 0.25rem */
    '02': '0.25rem',
    /** 0.5rem */
    '03': '0.5rem',
    /** 0.75rem */
    '04': '0.75rem',
    /** 1rem */
    '05': '1rem',
    /** 1.5rem */
    '06': '1.5rem',
    /** 2rem */
    '07': '2rem',
    /** 2.5rem */
    '08': '2.5rem',
    /** 3rem */
    '09': '3rem',
    /** 4rem */
    '10': '4rem',
    /** 5rem */
    '11': '5rem',
    /** 6rem */
    '12': '6rem',
    /** 10rem */
    '13': '10rem',
  },
})

export default spacingVars
