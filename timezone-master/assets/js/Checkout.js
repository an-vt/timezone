const billDetail = document.querySelector('.billing_details')
const logoutElement = document.getElementById("account-logout")
const loginElement = document.getElementById("account-login")
// let buyBtn;
// window.onload = function () {
// buyBtn = document.getElementById("buyBtn");
// console.log(buyBtn)
// };

const app = {
    currentUser: {},
    isLogin: localStorage.getItem("accessToken") ? true : false,
    cart: JSON.parse(localStorage.getItem('cart')),
    couponLs: JSON.parse(localStorage.getItem('coupon')) ? JSON.parse(localStorage.getItem('coupon')) : '',
    isCoupon: JSON.parse(localStorage.getItem('coupon')) ? true : false,
    totalFinal: '',
    price: '',
    loadUser: async function () {
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
                this.currentUser = result
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
    order: async function () {
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer "+localStorage.getItem('accessToken'));
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "cart": this.cart,
            "coupon": this.couponLs,
            "user": this.currentUser,
            "totalFinal": this.totalFinal,
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        try {
            let response = await fetch("http://localhost:4000/api/member/order", requestOptions)
            if(response.ok) {
                let result = await response.json()
                console.log(result)
                if(this.isCoupon) {
                    await localStorage.removeItem('coupon')
                    await localStorage.removeItem('isCoupon')
                }
                await localStorage.removeItem('cart')
                window.location.href = "./confirmation.html?id="+result._id
            }
        } catch (error) {
            console.log("error ",error)
        } 

    },
    handleEvents: function () {
        const _this = this;
        buyBtn = document.getElementById("buyBtn");
        buyBtn.onclick = async () => {
            await _this.order()
        }
    },
    render: async function () {
        let cart = JSON.parse(localStorage.getItem('cart')); 
        let total = await cart.reduce((total, item, index) => {
            return total + item.totalPrice;
        }, 0)

        let coupon = await JSON.parse(localStorage.getItem('coupon'))
        let totalReduce = 0;
        let subTotal = 0;
        let totalFinal = 0;

        //truong hop co coupon
        if (coupon) {
            totalReduce = total * (coupon.present / 100)
            subTotal = (total - (total * (coupon.present / 100)))
            totalFinal = (total - totalReduce + 25000)
        }else {
            subTotal = total;
            totalFinal = total + 25000;
        }
        this.totalFinal = totalFinal;
        const header = `
                <div class="row">
                    <div class="col-lg-8">
                    <h3>Chi tiết hóa đơn</h3>
                    <form class="row contact_form" action="#" method="post" novalidate="novalidate">
                        <div class="col-md-12 form-group p_star">
                            <input type="text" class="form-control" placeholder="Họ tên" value='${this.currentUser.name ? this.currentUser.name : ''}' id="name" name="name" />
                        </div>
                        <div class="col-md-6 form-group p_star">
                            <input type="text" class="form-control" placeholder="Số điện thoại" id="number" value=${this.currentUser.phone ? this.currentUser.phone : ''} name="number" />
                        </div>
                        <div class="col-md-6 form-group p_star">
                            <input type="text" class="form-control" placeholder="Email" id="email" value=${this.currentUser.email ? this.currentUser.email : ''} name="compemailany" />
                        </div>
                        <div class="col-md-12 form-group p_star">
                            <input type="text" placeholder="Địa chỉ của bạn" class="form-control" value='${this.currentUser.address ? this.currentUser.address : ''}' id="address" name="address" />
                        </div>
                    </form>
                    </div>
                    <div class="col-lg-4">
                        <div class="order_box">
                            <h2>Đơn hàng</h2>
                            <ul class="list">
                                <li>
                                    <a href="#">Sản phẩm
                                    <span>Tổng tiền</span>
                                    </a>
                                </li>
            `

        const body = await cart.map(item => {
            return `
                    <li>
                        <a style="display: block" class="item-order" href="#">${item.name}
                        <span class="middle">x ${item.quantity}</span>
                        <span class="last">${item.totalPrice}vnđ</span>
                        </a>
                    </li>
                `
        })

        const footer = `
                            </ul>
                            <ul class="list list_2">
                                <li>
                                    <a href="#">Mã giảm giá
                                    <span>- ${totalReduce}vnđ</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">Phí vận chuyển
                                    <span>25.000vnđ</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">Thành tiền
                                    <span>${totalFinal}vnđ</span>
                                    </a>
                                </li>
                            </ul>
                            <button id="buyBtn" type="button" class="btn_3" href="#">Thanh Toán</button>
                        </div>
                    </div>
                </div> 
            `
        billDetail.innerHTML = header + body.join('') + footer;
    },
    start: async function () {
        await this.loadUser()

        await this.render()

        await this.loadMenuAccount()

        this.handleEvents()
    }
}

app.start()