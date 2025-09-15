let numbers = [5, 12, 8, 130, 44]
let newnumbers = [5, 12, 8, 130, 44]
let largest = numbers[1]
let smallest = numbers[1]
for(let i=0;i<numbers.length;i++){
    if(numbers[i]>largest){
        largest = numbers[i]
    }
}
console.log(`Largest: ${largest}`)
for(let i=0;i<numbers.length;i++){
    if(numbers[i]<smallest){
        smallest = numbers[i]
    }
}
console.log(`Smallest: ${smallest}`)
let sum = 0
let length = numbers.length

for(i=0;i<length;i++){

    sum = sum + numbers.pop();
}
console.log(`Sum: ${sum}`);
let even = new Array()
for(let i=0;i<length;i++){
    if((newnumbers[i]%2)==0){
        even.push(newnumbers[i]);
    }
}
console.log(`Evens : [${even}]`)



