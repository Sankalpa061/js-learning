// const heros = ["Superman","Spiderman","Batman","Flash","Thor"]
// const values = heros.forEach( (item)=>{
//     console.log(item);
// })
// console.log(values);

const cart = [
    {
        itemName: "Sunglass",
        iteamPrice: 1299
    },
    {
        itemName: "Bracelet",
        iteamPrice: 800
    },
    {
        itemName: "Shoes",
        iteamPrice: 3499
    },
    {
        itemName: "Shirt",
        iteamPrice: 4000
    }
]

let cartPrice = cart.reduce((acc,item)=>acc+item.iteamPrice,0)
console.log(`The total price is: ${cartPrice}`)