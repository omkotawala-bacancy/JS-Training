async function fn() {
    try {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const random = Math.random();
                if (random > 0.5) {
                    resolve("data loaded")
                }
                else {
                    throw new error("Error occuered")
                }
            })
        })
    } catch (error) {
        console.log(error);
    }
}