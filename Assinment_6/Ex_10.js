/*
    Create a function simulateTask(name, delay) that returns a Promise resolving after delay ms.

    Part A: Run three tasks sequentially using async/await.
    Part B: Run three tasks simultaneously using Promise.all().
    Compare the total time taken for Part A vs Part B.
*/

function simulateTask(name, ms){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(name)
        }, ms)
    })
}

async function part_A(){

    const time = new Date()
    const start = time.getTime()

    await simulateTask("A", 1000)
    await simulateTask("B", 1000)
    await simulateTask("C", 1000)

    const curr_time = new Date()

    const end = curr_time.getTime() - start + " ms"
    return end
}

async function part_B(){

    const time = new Date()
    const start = time.getTime()

    const result = await Promise.all([simulateTask("A", 1000), simulateTask("B", 1000), simulateTask("C", 1000)])

    const curr_time = new Date()
    const end = curr_time.getTime() - start
    return end
}

part_A().then(res => console.log(`Part A take : ${res}`))
part_B().then(res => console.log(`Part B take : ${res}`))