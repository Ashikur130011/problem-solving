const products= [
    {name:'laptop', price:83000, quantity:1},
    {name:'shirt', price:700, quantity:4},
    {name:'watch', price:3000, quantity:2},
    {name:'phone', price:30000, quantity:1},
]
function totalPrice(products){
    let totalPrice = 0
    for(let product of products){
        let productPrice = product.price * product.quantity
        totalPrice= totalPrice + productPrice
    }
    return totalPrice
}
const totalCoast = totalPrice(products)
console.log(totalCoast);