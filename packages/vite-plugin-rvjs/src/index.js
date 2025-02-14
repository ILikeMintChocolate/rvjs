import { transformAsync } from '@babel/core'

const vitePluginRvjs = () => {
  return {
    name: 'vite-plugin-rvjs',
    enforce: 'pre',
    config() {
      return {
        esbuild: false,
      }
    },
    async transform(code, id) {
      const tsxToJsx = async (code, id) => {
        const result = await transformAsync(code, {
          filename: id,
          presets: [
            [
              '@babel/preset-typescript',
              {
                allowDeclareFields: true,
              },
            ],
          ],
        })
        return result.code
      }

      const jsxToJs = async (code, id) => {
        const result = await transformAsync(code, {
          filename: id,
          plugins: [
            [
              'babel-plugin-jsx-dom-expressions',
              {
                moduleName: '@rvjs/core',
                delegateEvents: false,
                wrapConditionals: false,
                builtIns: ['Switch', 'Case', 'For', 'Toggle', 'Refresh'],
              },
            ],
          ],
        })
        return result.code
      }

      const tsToJs = tsxToJsx

      if (id.endsWith('.tsx')) {
        const jsx = await tsxToJsx(code, id)
        const js = await jsxToJs(jsx, id)
        return {
          code: js,
          map: null,
        }
      } else if (id.endsWith('.jsx')) {
        const js = await jsxToJs(code, id)
        return {
          code: js,
          map: null,
        }
      } else if (id.endsWith('.ts')) {
        const js = await tsToJs(code, id)
        return {
          code: js,
          map: null,
        }
      }

      return null
    },
  }
}

export default vitePluginRvjs
