import { Context } from '../../util/context.ts'
import { IndexedMap } from '../../util/indexedMap.ts'
import { isFunction } from '../../type/guard.ts'
import { GetState, isGetState } from '../hook/useState.ts'
import { AnyBlock } from '../../type/dom'
import { componentContext } from '../context/executionContext.ts'

export type ForRender = () => {
  getBlocks: () => AnyBlock[]
  context: Context<ForContext>
}

interface ForContext {
  index: number
}

export const For = <Item>(
  items: Item[] | GetState<Item[]>,
  render: (item: Item, index: number) => AnyBlock,
) => {
  const itemsMap = new IndexedMap<Item, AnyBlock>()
  const context = new Context<ForContext>()
  const thisComponent = componentContext.get()!

  return function forRender() {
    const newItems = isGetState(items) ? items() : items
    const deletable = new Set(itemsMap.keys)

    newItems.forEach((item, index) => {
      if (itemsMap.has(item) || itemsMap.hasTemp(item)) {
        itemsMap.changeIndex(item, index)
        deletable.delete(item)
      } else {
        componentContext.set(thisComponent)
        const newBlock = render(item, index)
        componentContext.set(null)
        itemsMap.set(item, newBlock, index)
      }
    })

    if (deletable.size) {
      deletable.forEach((key) => {
        const block = itemsMap.getItemByKey(key)?.value
        block?.destroy()
        itemsMap.deleteByKey(key)
      })
    }

    return {
      getBlocks: () => {
        return itemsMap.getSortedValues()
      },
      context,
    }
  } as ForRender
}

export const isForRender = (value: unknown): value is ForRender => {
  return isFunction(value) && value.name === 'forRender'
}
