exports.sum = function () {
    return Array.from(arguments).reduce( (accumulator,currentValue) => {
        return accumulator + currentValue
    })
}