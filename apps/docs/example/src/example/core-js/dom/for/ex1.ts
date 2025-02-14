import {
  products_style,
  productsUl_style,
} from '@example/core-js/dom/for/ex1.css.ts'
import { button, div, For, li, ul, useState } from '@rvjs/core'

const Products = () => {
  const [products, setProducts] = useState([
    { name: 'Product 1' },
    { name: 'Product 2' },
  ])

  const addProduct = () => {
    const newProduct = {
      name: `Product ${products().length + 1}`,
    }
    setProducts([...products(), newProduct])
  }

  return div({
    classes: [products_style],
    children: [
      button({
        textContent: 'Add Product',
        onclick: addProduct,
      }),
      ul({
        classes: [productsUl_style],
        children: [
          For(products, (product) => {
            return Product(product)
          }),
        ],
      }),
    ],
  })
}

const Product = (props) => {
  const { name } = props

  return li({
    textContent: name,
  })
}

export default Products
