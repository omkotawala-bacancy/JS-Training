function countEvens(arr) {

    if (Array.isArray(arr) === false) {
      return false
    }

    const result = arr.reduce((acc, val) => {

        if (typeof val !== 'number' || !Number.isFinite(val) || Number.isNaN(val)) {
        return false
        }

        

        if (val % 2 == 0) {
            if(!Number.isInteger(val)) {
                acc - 1
            }
            return acc + 1;
        }
        else {
            return acc
        }
    }, 0)

    return result
}

console.log(countEvens([1,-2,-3,-4,4.4]))