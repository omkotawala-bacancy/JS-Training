const productList = document.getElementById('productList')
const cartList = document.getElementById('cartList')
const cart = JSON.parse(localStorage.getItem('cart')) || []
const totalBtn = document.getElementById('total')
const filtering = document.getElementById('filter')
const sorting = document.getElementById('sort')
const search = document.getElementById('search')
const clrBtn = document.getElementById('clear')
let isFetched = false





async function fetchURL(url) {

    const response = await fetch(url)
    const data = await response.json()
    // console.log(data);

    return data;
}

function renderProducts(products, list, message) {

    list.innerHTML = ""

    products.forEach((item, index) => {
        const li = document.createElement('li')
        const div = document.createElement('div')

        const img = document.createElement('img')
        img.setAttribute('src', item.thumbnail)
        img.style.width = "120px"

        const p1 = document.createElement('p')
        p1.innerHTML = `Name: ${item.title}`

        const p2 = document.createElement('p')
        p2.innerHTML = `Price: $${item.price}`

        const addBtn = document.createElement('button')
        addBtn.textContent = message
        addBtn.dataset.index = index
        addBtn.setAttribute('id', item.id)


        addBtn.style.width = "100px"
        addBtn.style.height = "50px"

        const Id = addBtn.getAttribute('id')
        const productToUpdate = products.find(p => p.id == Id);
        if (productToUpdate && productToUpdate.stock <= 0) {
            addBtn.textContent = "Out of Stock"
            addBtn.disabled = true;
        }

        if (list === productList) {
            const p3 = document.createElement('p')
            p3.innerHTML = `Qunatity: ${item.stock}`
            div.append(img, p1, p2, p3, addBtn)
        }
        else {
            div.append(img, p1, p2, addBtn)
        }

        div.style.display = "flex"
        div.style.justifyContent = "space-around"
        div.style.alignItems = "center"

        li.appendChild(div)
        list.appendChild(li)
    })
}

function renderCart() {
    renderProducts(cart, cartList, "Remove")
}

function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart))
}

function saveProducts(product) {
    localStorage.setItem('products', JSON.stringify(product))
}

const addToCart = (product) => {

    cart.push(product)
    saveCart()
    renderCart()

}

function filterProducts(products, value) {
    let filtered = products;

    if (value === "1") filtered = products.filter(p => p.price < 20);
    if (value === "2") filtered = products.filter(p => p.price >= 20 && p.price < 40);
    if (value === "3") filtered = products.filter(p => p.price >= 40 && p.price < 60);
    if (value === "4") filtered = products.filter(p => p.price >= 60 && p.price < 80);
    if (value === "5") filtered = products.filter(p => p.price >= 80);

    renderProducts(filtered, productList, "Add");

}


const removeFromCart = (index) => {
    cart.splice(index, 1)
    saveCart()
    renderCart()
}

const calculateTotal = () => {
    const total = cart.reduce((acc, val) => {
        return acc += val.price;
    }, 0)
    // console.log(total);


    alert(`total of the cart is : ${total}`)
}

function clearCart() {
    cart.splice(0, cart.length)
    localStorage.removeItem('cart')
    renderProducts(cart, cartList, "Remove")

}




if (isFetched === false) {
    fetchURL("https://dummyjson.com/products?limit=10&skip=140&select=title,price,thumbnail,stock")
        .then((res) => {

            isFetched = true
            const { products } = res
            // console.log(products);

            saveProducts(products)
            renderProducts(products, productList, "Add")

            productList.addEventListener('click', (e) => {
                if (e.target.tagName === "BUTTON") {
                    const Id = (e.target.id)
                    const [product] = products.filter(p => {
                        if (p.id == Id) {
                            return p
                        }
                    });
                    addToCart(product)
                    // product.stock -= 1
                    products.forEach(item => {


                        if (item.id == Id) {
                            item.stock -= 1
                            console.log(item);
                        }
                    })
                    saveProducts(products)
                    renderProducts(products, productList, "Add")

                }
            })

            filtering.addEventListener('change', () => {
                console.log(filtering.value);

                filterProducts(products, filtering.value)
            })

            cartList.addEventListener('click', (e) => {

                if (e.target.tagName === "BUTTON") {
                    const index = Number(e.target.dataset.index)
                    removeFromCart(index)

                }
            })

            sorting.addEventListener('click', () => {
                const sorted = structuredClone(products).sort((a, b) => {
                    return a.title.localeCompare(b.title);
                });
                renderProducts(sorted, productList, "Add");
            })

            search.addEventListener('input', () => {

                let timer = null
                if (timer) {
                    clearTimeout(timer)
                }
                timer = setTimeout(() => {
                    let text = search.value.toLowerCase()
                    console.log(text);


                    const array = products.filter(item => {
                        return item.title.toLowerCase().includes(text)

                    })
                    renderProducts(array, productList, "Add")
                }, 1000)


            })



            totalBtn.addEventListener('click', calculateTotal)

            clrBtn.addEventListener('click', clearCart)

            renderCart(cartList)

        })
        .catch((error) => {
            console.log(error.message);
        })
}

// console.log(cart);
