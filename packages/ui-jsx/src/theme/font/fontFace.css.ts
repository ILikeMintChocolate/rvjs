import { globalFontFace } from '@vanilla-extract/css'

export const ibmPlexSans = 'IBM_Plex_Sans'

globalFontFace(ibmPlexSans, [
  {
    fontStyle: 'italic',
    fontWeight: 300,
    fontDisplay: 'swap',
    src: "url(https://fonts.gstatic.com/s/ibmplexsans/v19/zYX7KVElMYYaJe8bpLHnCwDKhdTmvIRcePfuNmo.woff2) format('woff2')",
  },
  {
    fontStyle: 'normal',
    fontWeight: 300,
    fontDisplay: 'swap',
    src: "url(https://fonts.gstatic.com/s/ibmplexsans/v19/zYX9KVElMYYaJe8bpLHnCwDKjXr8AIFsdA.woff2) format('woff2')",
  },
  {
    fontStyle: 'italic',
    fontWeight: 400,
    fontDisplay: 'swap',
    src: "url(https://fonts.gstatic.com/s/ibmplexsans/v19/zYX-KVElMYYaJe8bpLHnCwDKhdTuF6ZJ.woff2) format('woff2')",
  },
  {
    fontStyle: 'normal',
    fontWeight: 400,
    fontDisplay: 'swap',
    src: "url(https://fonts.gstatic.com/s/ibmplexsans/v19/zYXgKVElMYYaJe8bpLHnCwDKhdHeFQ.woff2) format('woff2')",
  },
  {
    fontStyle: 'italic',
    fontWeight: 700,
    fontDisplay: 'swap',
    src: "url(https://fonts.gstatic.com/s/ibmplexsans/v19/zYX7KVElMYYaJe8bpLHnCwDKhdTmrINcdvfu.woff2) format('woff2')",
  },
  {
    fontStyle: 'normal',
    fontWeight: 700,
    fontDisplay: 'swap',
    src: "url(https://fonts.gstatic.com/s/ibmplexsans/v19/zYX9KVElMYYaJe8bpLHnCwDKjWr7AIFsdA.woff2) format('woff2')",
  },
])

export const jetBrainsMono = 'JetBrains_Mono'

globalFontFace(jetBrainsMono, [
  {
    fontStyle: 'normal',
    fontWeight: 300,
    fontDisplay: 'swap',
    src: "url(https://fonts.gstatic.com/s/jetbrainsmono/v18/tDbV2o-flEEny0FZhsfKu5WU4xD7OwE.woff2) format('woff2')",
  },
])
