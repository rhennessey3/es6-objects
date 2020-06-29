// object destructuring 

const product = {
    label: 'Red notebook',
    price: 3,
    stock: 201,
    salePrice: undefined,
}

// const label = product.label
// const stock = product.stock 

const {label, stock } = product
console.log(label)
console.log(stock)

