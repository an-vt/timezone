const bodyTable = document.getElementById('bodyTable')
const couponBtn = document.getElementById('couponBtn')
const codeElement = document.getElementById('inputCode')
const warnElement = document.getElementById('warning')
const loginElement = document.getElementById("account-login")
const logoutElement = document.getElementById("account-logout")
console.log(loginElement)
console.log(logoutElement)

const app = {
    isCoupon: JSON.parse(localStorage.getItem('isCoupon')) ? true : false,
    isLogin: localStorage.getItem("accessToken") ? true : false,
    updateWarn: false,
    products: [],
    cart: JSON.parse(localStorage.getItem('cart')) ? JSON.parse(localStorage.getItem('cart')) : null,
    loadProducts: async function(value) {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
          "search": value
        });
        
        var requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: raw,
          redirect: 'follow'
        };

        try {
            let response = await fetch("http://localhost:4000/api/product/search", requestOptions)
            if (response.ok) {
                let result = await response.json()
                console.log(result)
                this.products.push(...result)
            }
        } catch (error) {
            console.log('error', error)
        }
    },
    loadMenuAccount: function() {
        if(this.isLogin) {
            logoutElement.classList.add('active')
            loginElement.classList.toggle('active')
        }
    },
    render: async function () {
        let i = 0;
        console.log('func render' +i++)
        let cartLocalStorage = await JSON.parse(localStorage.getItem("cart"))
        let total = 0;
        //nếu giỏ hàng có thì tính total
        if(cartLocalStorage) {
            total = await cartLocalStorage.reduce((total, item, index) => {
               return total + item.totalPrice;
           }, 0)
        }
        console.log('total ',total)
        let coupon = await JSON.parse(localStorage.getItem('coupon'))
        let subTotal = 0;
        let discount = 0;
        if (coupon) {
            console.log('2', (total*(coupon.present/100)))
            subTotal = total - (total * (coupon.present / 100))
            discount = total - subTotal
        }
        total -= discount;
        console.log('discount' ,discount)
        let html = [];
        if(cartLocalStorage) {
            console.log('có giỏ hàng')
            html = await cartLocalStorage.map(item => {
                return `
                        <tr>
                            <td>
                                <div class="media">
                                    <div class="d-flex">
                                        <img src="${item.image}" alt="" />
                                    </div>
                                    <div class="media-body">
                                        <p hidden>${item.id}</p>
                                        <p>${item.name}</p>
                                        <p hidden>${item.description}</p>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <h5>${item.price}vnđ</h5>
                            </td>
                            <td>
                                <div class="product_count">
                                    <span class="increase-btn" class="product_count_item number-increment"> <i
                                        class="ti-plus"></i></span>
                                    <input id="number" class="input-number" value="${item.quantity}" >
                                    <span class="decrease-btn" class="product_count_item inumber-decrement"> <i
                                        class="ti-minus"></i></span>
                                </div>
                            </td>
                            <td>
                                <h5>$${item.totalPrice}</h5>
                            </td>
                            <td>
                                <h5><i class="ti-trash delete-item-icon"></i></h5>
                            </td>
                        </tr>
                `
            })
        }

        let htmls = await html.join('') + `
            <tr>
                <td></td>
                <td></td>
                <td>
                <h5>Giảm giá</h5>
                </td>
                <td>
                <h5>-$${discount}</h5>
                </td>
            </tr>   
            <tr>
                <td></td>
                <td></td>
                <td>
                <h5>Tổng tiền</h5>
                </td>
                <td>
                <h5>$${total}</h5>
                </td>
            </tr>
      
        `
        bodyTable.innerHTML = await htmls
    },
    loadCoupon: async function () {
        if (this.isCoupon) {
            let coupon = await JSON.parse(localStorage.getItem('coupon'))
            console.log(coupon)
            codeElement.value = coupon.code
        }
    },
    increaseItemToLocal: async function (product) {
        console.log(product)
            await this.cart.forEach((item, index) => {
                if (product.id === item.id) {
                    product.totalPrice = (product.quantity * product.price);
                    this.cart[index] = product;
                } 
            });
        await localStorage.setItem('cart', JSON.stringify(this.cart))
    },
    decreaseItemToLocal: async function (product) {
        console.log(product)
            await this.cart.forEach((item, index) => {
                if (product.id === item.id) {
                    if(item.quantity > 1) {
                        product.quantity = item.quantity -= 1;
                        product.totalPrice = product.totalPrice;
                        this.cart[index] = product;
                    }
                } 
            });
        await localStorage.setItem('cart', JSON.stringify(this.cart))
    },
    getCoupon: async function (code) {
        console.log('idCoupon ', this.isCoupon)
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        try {
            let response = await fetch("http://localhost:4000/api/coupon/" + code, requestOptions);
            if(response.status == 400) {
                    localStorage.removeItem('coupon')
                    localStorage.removeItem('isCoupon');
                console.log('heh')
                this.updateWarn = false
            }
            if (response.ok) {
                console.log(response)
                let result = await response.json()
                if(result) {
                    await localStorage.setItem('coupon', JSON.stringify(result))
                    await localStorage.setItem('isCoupon', JSON.stringify(true))
                    this.updateWarn = true
                }
            }
        } catch (error) {
            console.log(error)
        }
    },
    handleEvents: async function () {
        //chuyển đối tượng this ra ngoài
        const _this = this;
        const quantityItemElement = document.querySelectorAll('#number')

        //lấy btn áp dụng coupon
        couponBtn.onclick = async function () {
            let code = codeElement.value.trim();
            console.log('code ', code)
            if (code) {
                await _this.getCoupon(code)
                await _this.render()
                // console.log(_this.isCoupon)
                _this.updateWarn ? warnElement.textContent = '' : warnElement.textContent = 'Coupon sai'
            } else {
                _this.render()
                localStorage.removeItem('coupon')
                localStorage.removeItem('isCoupon')
                warnElement.textContent = 'Bạn chưa nhập gì'
            }
        }
            const increaseBtn = document.querySelectorAll('.increase-btn')
            const decreaseBtn = document.querySelectorAll('.decrease-btn')
            increaseBtn.forEach((itemBtn ,index) => {
                itemBtn.onclick = async function(event) {
                    let spanElement = event.target.closest('.increase-btn');
                    if(spanElement){
                        //get quantity current
                        var value = parseInt(quantityItemElement[index].value, 10);
                        value = isNaN(value) ? 0 : value;
                        value++;
                        let price = Number.parseInt((spanElement.parentElement.parentElement.parentElement.children[1].children[0].textContent).replace('vnđ','') )
                        // create item save to cart
                        let itemCart = {
                            id: spanElement.parentElement.parentElement.parentElement.children[0].children[0].children[1].children[0].textContent,
                            name: spanElement.parentElement.parentElement.parentElement.children[0].children[0].children[1].children[1].textContent,
                            description: spanElement.parentElement.parentElement.parentElement.children[0].children[0].children[1].children[2].textContent,
                            price: price,
                            quantity: value,
                            totalPrice: price * value,
                            image: spanElement.parentElement.parentElement.parentElement.children[0].children[0].children[0].children[0].src
                        }
                        let product = _this.products.find(item => {
                            return item._id === itemCart.id
                        })
                        //check quantity cart vs quantity product in database
                        if(value <= product.quantity) {
                            //call func increase quantity
                            await _this.increaseItemToLocal(itemCart)
    
                            //render
                            _this.start()
                        }else {
                            alert('Số lượng sản phẩm ' +product.name+ ' không đủ')
                        }

                    }
                }
            })

            decreaseBtn.forEach((itemBtn ,index) => {
                itemBtn.onclick = async function(event) {
                    let spanElement = event.target.closest('.decrease-btn');
                    if(spanElement){
                        let value = parseInt(quantityItemElement[index].value, 10);
                        value = isNaN(value) ? 0 : value;
                        if(value > 1) {
                            value--;
                        }else if(value <= 1) {
                            value = 1;
                        }
                        let price = Number.parseInt((spanElement.parentElement.parentElement.parentElement.children[1].children[0].textContent).replace('$','') )
                        let item = {
                            id: spanElement.parentElement.parentElement.parentElement.children[0].children[0].children[1].children[0].textContent,
                            name: spanElement.parentElement.parentElement.parentElement.children[0].children[0].children[1].children[1].textContent,
                            description: spanElement.parentElement.parentElement.parentElement.children[0].children[0].children[1].children[2].textContent,
                            price: price,
                            quantity: value,
                            totalPrice: price * value,
                            image: spanElement.parentElement.parentElement.parentElement.children[0].children[0].children[0].children[0].src
                        }
                        console.log(item)
                        await _this.decreaseItemToLocal(item)
                        _this.start()
                    }

                }
            })
            
        // delete item cart
            const iconListDeleteItem = document.querySelectorAll('.delete-item-icon');
            iconListDeleteItem.forEach(item => {
                item.onclick = function(event) {
                    let id = event.target.parentElement.parentElement.parentElement.children[0].children[0].children[1].children[0].textContent
                    _this.cart.forEach((item ,index) => {
                        if(item.id === id) {
                            _this.cart.splice(index ,1);
                            localStorage.setItem('cart', JSON.stringify(_this.cart));
                            _this.start()
                        }
                    })
                }
            })

        //logout
        logoutElement.onclick = function(event) {
            event.preventDefault()
            console.log('click')
            localStorage.removeItem("accessToken")
            window.location.reload()
        }
    },
    start: async function () {
        //load list product for check quantity product
        //set value params 
        await this.loadProducts('')

        //render product ra screen
        await this.render()

        await this.loadMenuAccount()

        // await this.loadProduct()

        // load ma code neu da tung ap dung thi show ra man hinh
        await this.loadCoupon()

        // goi ham bat cac su kien
        await this.handleEvents()


    }
}

app.start()

//khi bấm check out nếu chưa có tk thì cho sang trang đăng nhập
//nếu đăng nhập rồi thì cho đi tiếp
function checkout() {
    localStorage.getItem('accessToken') ? window.location.href = "./checkout.html" : window.location.href = "./login.html"
}
