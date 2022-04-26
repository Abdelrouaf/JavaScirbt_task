// with Arrow function
const num = (n) => {
    if(n % 2 == 0){
        num_type = 'even'
        return console.log('the number '+ n + ' is even')
    }
        
    else{
        num_type = 'odd'
        return console.log('number is odd')    
    }
}
num(8)



// with Template literal
var num_type
const numType = n => {
    if(n % 2 == 0){
        num_type = 'even'
    }
    else
        num_type = 'odd'
    console.log(`the number ${n} is ${num_type}`)
      
}
numType([7])



// with set time out
setTimeout(() => {
    console.log(num(7))
},3000)