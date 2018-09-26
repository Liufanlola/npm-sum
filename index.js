function sum () {
    return Array.from(arguments).reduce( (accumulator,currentValue) => {
        return accumulator + currentValue
    })
}
module.exports = sum