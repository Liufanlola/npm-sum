function sum (){
    return Array.from(arguments).reduce( (accumulator,currentValue) => {
        return accumulator + currentValue
    })
}
sum(1,2,3,4,5)