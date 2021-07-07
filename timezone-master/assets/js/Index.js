const products = document.getElementById("products")
const inputSearch = document.getElementById("input-search")
const searchBtn = document.getElementById("search-btn-index")
const logoutElement = document.getElementById("account-logout")
const loginElement = document.getElementById("account-login")

const app = {
    listProducts: [],
    isLogin: localStorage.getItem("accessToken") ? true : false,
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
                this.listProducts.push(...result)
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
    handleEvents: async function () {
        const _this = this
        searchBtn.onclick = async function() {
            console.log(inputSearch.value)
            _this.listProducts = []
            await _this.loadProducts(inputSearch.value)
            await _this.render()
        }

        logoutElement.onclick = function(event) {
            event.preventDefault()
            console.log('click')
            localStorage.removeItem("accessToken")
            window.location.reload()
        }
    },
    render: async function () {
        const htmls = await this.listProducts.map(item => {
            return `
                <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                    <div class="single-popular-items mb-50 text-center">
                        <div class="popular-img">
                            <a style="display :block;height: 350px" href="./product_details.html?id=${item._id}">
                                <img style="height: 100%" src=${"http://localhost:4000/api/download/"+item.image} alt="" />
                                <div class="favorit-items">
                                    <span class="flaticon-heart"></span>
                                </div>
                            </a>
                        </div>
                        <div class="popular-caption">
                            <h3><a href="product_details.html">${item.name}</a></h3>
                            <span>${item.price} vnđ</span>
                        </div>
                    </div>
                </div>  
            `
        })
        products.innerHTML = htmls.join('')
    },
    start: async function () {
        
        await this.loadProducts("")

        await this.render()

        await this.loadMenuAccount()

        this.handleEvents()

        // export let loadMenuAccount = await this.loadMenuAccount
    }
}

app.start()
