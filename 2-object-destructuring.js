// object destructuring 

const product = {
    label: 'Red notebook',
    price: 3,
    stock: 201,
    salePrice: undefined,
    // rating: 4.2
}


const { label, stock, rating } = product

console.log(label)
console.log(stock)
console.log(rating)

