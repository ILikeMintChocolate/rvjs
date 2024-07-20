import { ul_style, wrapper_style } from '@example/core/for/ex1.css.ts'
import { button, div, For, li, ul } from '@rvjs/core/dom'
import { useState } from '@rvjs/core/reactive'
import { coolScrollBar_style } from '@theme/util.css.ts'

const Products = () => {
  const [products, setProducts] = useState([
    { id: 1, name: 'Product 1' },
    { id: 2, name: 'Product 2' },
  ])

  const addProduct = () => {
    const newProduct = {
      id: products().length + 1,
      name: `Product ${products().length + 1}`,
    }
    setProducts([...products(), newProduct])
  }

  return div({
    classes: [wrapper_style],
    children: [
      button({
        textContent: 'Add Product',
        onclick: addProduct,
      }),
      ul({
        classes: [ul_style, coolScrollBar_style],
        children: [
          For(products, (product) => {
            return Product(product)
          }),
        ],
      }),
    ],
  })
}

interface ProductProps {
  id: number
  name: string
}

const Product = (props: ProductProps) => {
  const { id, name } = props

  return li({
    textContent: `${id} - ${name}`,
  })
}

export default Products
