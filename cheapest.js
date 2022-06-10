const phones=[
    {name:"Xiaomi",price: 20000, storage:'64gb'},
    {name:"Lenovo",price: 30000, storage:'128gb'},
    {name:"Oppo",price: 12000, storage:'32gb'},
    {name:"Vivo",price: 14000, storage:'32gb'},
    {name:"Nokia",price: 28000, storage:'128gb'},
]
function cheapestPhone(phones){
    let cheapest = phones[0]
    for(const phone of phones){
        if(phone.price < cheapest.price){
            cheapest = phone
        }
    }
    return cheapest
}

const myPhone = cheapestPhone(phones)
console.log("My Phone's configuration is:",myPhone);