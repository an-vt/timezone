const productElement = document.getElementById("product")
const logoutElement = document.getElementById("account-logout")
const loginElement = document.getElementById("account-login")

const app = {
    isLogin: localStorage.getItem("accessToken") ? true : false,
    comments: [],
    product: {},
    user: {},
    totalRecord: 0,
    cart: JSON.parse(localStorage.getItem('cart')) ? JSON.parse(localStorage.getItem('cart')) : "",
    inStock: true,
    isHave: false,
    getTotalRecord: async function (nameProduct) {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "search": nameProduct
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        try {
            let response = await fetch("http://localhost:4000/api/comment/count", requestOptions)
            if (response.ok) {
                let result = await response.json()
                this.totalRecord = result.totalRecord;
                console.log(result)
            }
        } catch (error) {
            console.log(error)
        }

    },
    getUserLogin: async function () {
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer " + localStorage.getItem('accessToken'));

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        try {
            let response = await fetch("http://localhost:4000/api/member/me", requestOptions)
            if (response.ok) {
                let result = await response.json()
                console.log(result)
                this.user = result
            }
        } catch (error) {
            console.log('error', error)
        }
    },
    loadComment: async function (nameProduct) {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "search": nameProduct
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        try {
            let response = await fetch("http://localhost:4000/api/comment/product", requestOptions)
            if (response.ok) {
                let result = await response.json()
                console.log(result)
                this.comments = result
            }
        } catch (error) {
            console.log('error', error)
        }
    },
    loadProduct: async function (id) {
        var myHeaders = new Headers();

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        try {
            let response = await fetch("http://localhost:4000/api/product/" + id, requestOptions)
            if (response.ok) {
                let result = await response.json()
                console.log(result)
                this.product = result
            }
        } catch (error) {
            console.log('error', error)
        }
    },
    loadMenuAccount: function () {
        if (this.isLogin) {
            logoutElement.classList.add('active')
            loginElement.classList.toggle('active')
        }
    },
    render: async function (product) {
        if (this.cart) {
            console.log('render có cart')
            //tìm xem product có trong giỏ hàng hay không
            let item = this.cart.find((item) => {
                return this.product._id == item.id
            })
            if (item) {
                //nếu số lượng sản phẩm trong giỏ hàng >= số lượng sp trong database
                if (item.quantity >= this.product.quantity) {
                    console.log('bbbbbbbbbbbb')
                    this.inStock = false
                }
            }
        }
        console.log(this.inStock)
        let productHtmls = `
            <div  class="row justify-content-center product-info">
                <div class="col-lg-12">
                    <img id="product-info-img" width="100%" src=${"http://localhost:4000/api/download/" + product.image} alt="#" />
                </div>
                <div class="col-lg-8">
                    <div class="single_product_text text-center">
                        <p id="id-product" style="display: none">${product._id}</p>
                        <h3>${product.name}</h3>
                        <p>
                            ${product.description}
                        </p>
                        <div class="card_area">
                            <div class="product_count_area">
                                <p>Số lượng</p>
                                <div class="product_count d-inline-block">
                                    <span id="decrease" class="product_count_item inumber-decrement"> <i
                                            class="ti-minus"></i></span>
                                    <input id="number" class="product_count_item input-number" type="text" value="1" min="1"
                                        max="10"/>
                                    <span id="increase" class="product_count_item number-increment"> <i
                                            class="ti-plus"></i></span>
                                </div>
                                <p>${product.price}vnđ</p>
                            </div>
                            <div id="add_to_cart" class="add_to_cart">
                                <button style="margin-left: 32px display: inline-block;
                                padding: 18px 36px;
                                border-radius: 5px;
                                background-color: transparent;
                                border: 1px solid #2577fd;
                                font-size: 15px;
                                font-weight: 700;
                                color: #2577fd;
                                text-transform: uppercase;
                                font-weight: 400;
                                -webkit-transition: 0.5s;
                                -moz-transition: 0.5s;
                                -o-transition: 0.5s;
                                transition: 0.5s" type="button" class=${this.inStock ? '' : 'disable'}>Thêm vào giỏ hàng</button>
                            </div>
                        </div>
                    </div>
                </div>  
            </div>
            <div class="product-comment">
                <div class="form-contact contact_form" id="contactForm" novalidate="novalidate">
                    <div class="row">
                        <div class="col-12">
                            <div class="form-group">
                                <textarea class="form-control w-100" name="message" id="message" cols="30" rows="9" 
                                placeholder="Nhập bình luận của bạn vào đây" onfocus="this.placeholder = ''" 
                                onblur="this.placeholder = 'Nhập bình luận của bạn vào đây'"></textarea>
                            </div>
                        </div>
                    </div>
                    <div class="form-group mt-3">
                        <button type="submit" class="button button-contactForm boxed-btn">Bình luận</button>
                    </div>
                </div>
                <div class="product-list-comments">
                    <h4>${this.totalRecord} Comments</h4>
        `

        let commentProductHtmls = await this.comments.map(item => {
            const date = new Date(Date.parse(item.created)).toLocaleString()
            return `
                    <div class="comment-list">
                        <div class="single-comment justify-content-between d-flex">
                            <div class="user justify-content-between d-flex">
                                <div class="thumb">
                                    <img style="width: 54px" src=${"http://localhost:4000/api/download/" + item.user.avatar} alt="">
                                </div>
                                <div class="desc">
                                    <p class="comment">${item.content}</p>
                                    <div class="d-flex justify-content-between">
                                    <div class="d-flex align-items-center">
                                        <h5>
                                            <a href="#">Emilly Blunt</a>
                                        </h5>
                                        <p class="date">${date}</p>
                                    </div>
                                    <div class="reply-btn">
                                        <a href="#" class="btn-reply text-uppercase">reply</a>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
        `
        })

        let restProductDetailHtmls = `
            </div>
        </div>    
        `
        productElement.innerHTML = productHtmls + commentProductHtmls.join('') + restProductDetailHtmls
    },
    getParameterByName: function (name, url = window.location.href) {
        name = name.replace(/[\[\]]/g, '\\$&');
        var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
            results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, ' '));
    },
    createComment: async function (content, idProduct, idUser) {
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer " + localStorage.getItem("accessToken"));
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "content": content,
            "idProduct": idProduct,
            "idUser": idUser
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        try {
            let response = await fetch("http://localhost:4000/api/member/comment", requestOptions)
            if (response.ok) {
                let result = await response.json()
                console.log(result)
            }
        } catch (error) {
            console.log(error)
        }
    },
    addItemToLocal: async function (product) {
        let cart = []
        console.log('cart ', cart)
        console.log('click')

        if (JSON.parse(localStorage.getItem('cart')) === null) {
            cart.push(product);
            localStorage.setItem("cart", JSON.stringify(cart));
            window.location.reload();
        } else {
            const cartItems = JSON.parse(localStorage.getItem("cart"));
            cartItems.map(data => {
                if (product.id == data.id) {
                    product.quantity += data.quantity;
                    product.totalPrice += data.totalPrice;
                } else {
                    cart.push(data);
                }
            });
            cart.push(product);
            localStorage.setItem('cart', JSON.stringify(cart));
            // await this.render(this.product)
        }
    },
    //handle these event in page
    handleEvents: async function () {
        const _this = this
        const contentElement = document.getElementById('message')
        const btnComment = document.querySelector('.button')
        const increaseQuantity = document.getElementById('increase')
        const decreaseQuantity = document.getElementById('decrease')


        //increase quantity
        increaseQuantity.onclick = function () {
            var value = parseInt(document.getElementById('number').value, 10);
            x = isNaN(value) ? 0 : value;
            value++;
            //check cart is empty
            if (_this.cart.length > 0) {
                console.log('giỏ hàng có')
                //loop each item of cart
                _this.cart.forEach((element, index) => {
                    //nếu sản phẩm chọn thêm vào có trong giỏ hàng
                    if (_this.product._id == _this.cart[index].id) {
                        _this.isHave = true;
                        //nếu số lượng chọn thêm vào + số lượng sản phẩm đã có trong giỏ hàng <=  số lượng của sản phẩm có trong database
                        if ((value + _this.cart[index].quantity) <= Number.parseInt(_this.product.quantity)) {
                            console.log('hhhhhhhhhhh')
                            document.getElementById('number').value = value;
                        } else {
                            alert('Số lượng bạn đã thêm vượt quá số lượng hiện có')
                        }
                    }
                });

                if (!_this.isHave) {
                    //sản phẩm chọn không có trong giỏ hàng
                    if (value <= Number.parseInt(_this.product.quantity)) {
                        console.log('ggggggggggggg')
                        document.getElementById('number').value = value;
                    } else {
                        alert('Số lượng sản phẩm không đủ')
                    }
                }
            } else {
                console.log('giỏ hàng ko có')
                if (value <= Number.parseInt(_this.product.quantity)) {
                    document.getElementById('number').value = value;
                } else {
                    alert('Số lượng sản phẩm không đủ')
                }
            }
        }
        decreaseQuantity.onclick = function () {
            var value = parseInt(document.getElementById('number').value, 10);
            value = isNaN(value) ? 0 : value;
            // value < 1 ? value = 1 : '';
            // value <= 1 ? '' : value--;
            if (value > 1) {
                value--;
            } else if (value <= 1) {
                value = 1;
            }
            document.getElementById('number').value = value;
        }

        //add comment
        btnComment.onclick = async function () {
            if (_this.isLogin) {
                //get user current login
                await _this.getUserLogin()
                await _this.createComment(contentElement.value, _this.product._id, _this.user._id)
                await _this.loadComment(_this.product.name)
                await _this.render(_this.product)
            } else {
                window.location.href = './login.html'
            }
        }

        //add to cart
        // window.onload = function() {
        const addToCartBtn = document.getElementById("add_to_cart")

        addToCartBtn.onclick = async (e) => {
            //nếu có class này thì không có click
            if (e.target.classList.contains('disable')) {
                e.preventDefault()
            } else {
                const __this = _this
                let price = (e.target.parentElement.parentElement.children[0].children[2].textContent).replace('vnđ', '')
                let item = {
                    id: e.target.parentElement.parentElement.parentElement.children[0].textContent,
                    name: e.target.parentElement.parentElement.parentElement.children[1].textContent,
                    description: e.target.parentElement.parentElement.parentElement.children[2].innerText,
                    price: parseInt(price),
                    quantity: parseInt(e.target.parentElement.parentElement.children[0].children[1].children[1].value),
                    totalPrice: parseInt(e.target.parentElement.parentElement.children[0].children[2].textContent) * parseInt(e.target.parentElement.parentElement.children[0].children[1].children[1].value),
                    image: e.target.parentElement.parentElement.parentElement.parentElement.parentElement.children[0].children[0].src
                }
                await __this.addItemToLocal(item)
                window.location.reload()
            }
        }

        // }

    },
    start: async function () {
        //lay id product
        const id = await this.getParameterByName('id');

        //load product
        await this.loadProduct(id)

        //load totalRecord
        await this.getTotalRecord(this.product.name)

        //load Comment
        await this.loadComment(this.product.name)

        //render product ra screen
        await this.render(this.product)

        //handles event
        this.handleEvents()

        await this.loadMenuAccount()
    }
}

app.start()