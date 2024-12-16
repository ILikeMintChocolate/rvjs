import { transformAsync as l } from '@babel/core'

const c = (env) => ({
  name: 'vite-plugin-rvjs',
  enforce: 'pre',
  config() {
    return {
      esbuild: !1,
    }
  },
  async transform(n, s) {
    const r = async (e, t) =>
        (
          await l(e, {
            filename: t,
            presets: [
              [
                '@babel/preset-typescript',
                {
                  allowDeclareFields: !0,
                },
              ],
            ],
          })
        ).code,
      a = async (e, t) =>
        (
          await l(e, {
            filename: t,
            plugins: [
              [
                'babel-plugin-jsx-dom-expressions',
                {
                  moduleName:
                    env === 'production'
                      ? '@rvjs/core'
                      : 'C:\\Users\\qjatj\\OneDrive\\Documents\\Workspace\\Portfolio\\rvjs\\packages\\core\\src\\index.ts',
                  delegateEvents: !1,
                  wrapConditionals: !1,
                  builtIns: ['Switch', 'Case', 'For', 'Toggle', 'Refresh'],
                },
              ],
            ],
          })
        ).code,
      o = r
    if (s.endsWith('.tsx')) {
      const e = await r(n, s)
      return {
        code: await a(e, s),
        map: null,
      }
    } else {
      if (s.endsWith('.jsx'))
        return {
          code: await a(n, s),
          map: null,
        }
      if (s.endsWith('.ts'))
        return {
          code: await o(n, s),
          map: null,
        }
    }
    return null
  },
})
export { c as default }
