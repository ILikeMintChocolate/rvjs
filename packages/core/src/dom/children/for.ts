import { Block } from '@block/block.ts'
import { ForRender, RenderContext } from '@children/type.ts'
import { componentContext } from '@context/executionContext.ts'
import { GetState, isGetState } from '@hook/useState.ts'
import { isRvjsFunction } from '@type/guard.ts'
import { Context } from '@util/context.ts'
import { IndexedMap } from '@util/indexedMap.ts'
import { RVJS_FOR_RENDER_SYMBOL } from '@util/symbol.ts'

export const For = <Item>(
  items: Item[] | GetState<Item[]>,
  render: (item: Item, index: number) => Block,
) => {
  const itemsMap = new IndexedMap<Item, Block>()
  const context = new Context<RenderContext>()
  const thisComponent = componentContext.get()!

  const forRender = () => {
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
        block?.triggerDestroy()
        itemsMap.deleteByKey(key)
      })
    }
    return {
      getBlock: () => {
        return itemsMap.getSortedValues()
      },
      context,
    }
  }
  forRender.$$typeof = RVJS_FOR_RENDER_SYMBOL

  return forRender as ForRender
}

export const isForRender = (value: unknown): value is ForRender => {
  return isRvjsFunction(value) && value?.$$typeof === RVJS_FOR_RENDER_SYMBOL
}
