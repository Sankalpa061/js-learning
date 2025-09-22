// const heros = ["Superman","Spiderman","Batman","Flash","Thor"]
// const values = heros.forEach( (item)=>{
//     console.log(item);
// })
// console.log(values);

// const cart = [
//     {
//         itemName: "Sunglass",
//         iteamPrice: 1299
//     },
//     {
//         itemName: "Bracelet",
//         iteamPrice: 800
//     },
//     {
//         itemName: "Shoes",
//         iteamPrice: 3499
//     },
//     {
//         itemName: "Shirt",
//         iteamPrice: 4000
//     }
// ]

// let cartPrice = cart.reduce((acc,item)=>acc+item.iteamPrice,0)
// console.log(`The total price is: ${cartPrice}`)

//Filter
// const numbers =[1,2,3,4,5,6,7,8,9,10]

// let newArr = numbers.filter( (number)=> number>=5 )
// console.log(newArr)



//Map
const numbers =[1,2,3,4,5,6,7,8,9,10]

let newArr = numbers.map( (number)=> number * 2 )
console.log(newArr)