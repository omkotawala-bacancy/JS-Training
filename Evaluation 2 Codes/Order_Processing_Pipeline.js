/*
    JS: Order Processing Pipeline (Promise + async/await + event loop awareness)

    Description

    You are given an array of order IDs.
    You must process orders in the following way:

    1. Fetch order details for all order IDs /orders/{id} (this must happen in
    parallel)
    2. After all orders are fetched, for each order:
    call /payments/{orderId} to get payment status
    3. Build a final summary object containing:
    total orders
    total paid orders
    total unpaid orders

    Constraints:

    Fetching orders must be parallel.
    Payment checks must run after all orders are fetched.
    Use async / await
    Use Promise.all for parallel execution
    Do not use callbacks
    Handle partial failures (if one payment API fails, continue others)
    Return a summary object
*/

async function orderProcessingPipeline(array) {

    try {

        const promiseArray = array.map(id => fetch(`/orders/${id}`))

        const orders = await Promise.allSettled(promiseArray)

        const orderData = orders
            .filter(o => o.status === 'fulfilled' && o.value.ok)
            .map(item => {
                return item.value
            })

        const successfullOrders = await Promise.all(
            orderData.map(i => i.json())
        )

        const paymentArray = successfullOrders.map(order => fetch(`/payments/${order.id}`))

        const payments = await Promise.allSettled(paymentArray)

        const paymentData = payments
        .filter(p =>
            p.status === 'fulfilled' && p.value.ok
        )
        .map(item => item.value)

        const succesfulPayementData = await Promise.all(paymentData.map(i => {
            return i.json() 
        }))

        let paid = 0;
        let unpaid = 0;

        for (const item of succesfulPayementData) {
            if (item.paymentStatus === "paid") {
                paid++
            }
            if (item.paymentStatus === "unpaid") {
                unpaid++
            }
        }

        return {
            totalOrder: successfullOrders.length,
            totalPaidOrders: paid,
            totalUnpaidOrders: unpaid
        }
    }
    catch (error) {
        console.log(`Error: ${error.message}`)
    }
}

