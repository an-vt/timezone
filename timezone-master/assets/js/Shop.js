const navTabContent = document.getElementById("nav-tabContent")
const navTab = document.getElementById("nav-tab")
const searchBtn = document.getElementById("search-btn")
const inputSearch = document.getElementById("input-search")
const logoutElement = document.getElementById("account-logout")
const loginElement = document.getElementById("account-login")

const app = {
    listProducts: [],
    listCategorys: [],
    isLogin: localStorage.getItem("accessToken") ? true : false,
    loadCategorys: async function() {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
          "search": ""
        });
        
        var requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: raw,
          redirect: 'follow'
        };

        try {
            let response = await fetch("http://localhost:4000/api/category/search", requestOptions)
            if (response.ok) {
                let result = await response.json()
                console.log('category' ,result)
                this.listCategorys.push(...result)
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
                console.log('result search ' ,result)
                this.listProducts.push(...result)
            }
        } catch (error) {
            console.log('error', error)
        }
    },
    loadRestNavContentHtmls: async function() {
        this.listCategorys.forEach(item => {

        })
    },
    handleEvents: function () {
        const _this = this
        const navItem = document.querySelectorAll('.nav-item')
        const tabPane = document.querySelectorAll('.tab-pane')

        navItem.forEach((nav ,index) => {
            const pane = tabPane[index]
            nav.onclick = function() {
                console.log('click' ,this)
                document.querySelector('.tab-pane.fade.show.active').classList.remove('show','active')
                document.querySelector('.nav-item.nav-link.active').classList.remove('active')
            
                pane.classList.add('show','active')
                this.classList.add('active')
            }
        })

        //search
        searchBtn.onclick = async function() {
            const value = inputSearch.value;
            console.log(value)
            _this.listProducts = []
            await _this.loadProducts(value)
            _this.render()
        }

        logoutElement.onclick = function(event) {
            event.preventDefault()
            console.log('click')
            localStorage.removeItem("accessToken")
            window.location.reload()
        }
    },
    render: async function () {
        const navHtmls = await this.listCategorys.map((item ,index) => {
            return `
                    <span class="nav-item nav-link" id="nav-home-tab" data-toggle="tab" 
                    href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="false">${item.name}</span>
                `
        }) 

        const headerFirstNavContentHtmls = `<div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
        <div class="row">`

        const bodyFirstNavContentHtmls = await this.listProducts.map((item ,index) => {
            return `
                        <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                            <div class="single-popular-items mb-50 text-center">
                                <div class="popular-img">
                                    <a style="display :block;height: 350px" href="./product_details.html?id=${item._id}">
                                        <img style="height: 100%" src=${"http://localhost:4000/api/download/"+item.image} alt="">
                                        <div class="favorit-items">
                                            <span class="flaticon-heart"></span>
                                        </div>
                                    </a>
                                </div>
                                <div class="popular-caption">
                                    <h3><a href="product_details.html">${item.name}</a></h3>
                                    <span>$ ${item.price}</span>
                                </div>
                            </div>
                        </div>                      
            `
        })

        const footerFirstNavContentHtmls = `</div>
        </div>`

        let restNavContent = await this.listCategorys.map( category => {
            let htmls =  this.listProducts.map((product ,index) => {
                if(category.name === product.category.name) {
                    return `
                        
                                <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                                    <div class="single-popular-items mb-50 text-center">
                                        <div class="popular-img">
                                            <a style="display :block;height: 350px" href="./product_details.html?id=${product._id}">
                                                <img style="height: 100%" src=${"http://localhost:4000/api/download/"+product.image} alt="">
                                                <div class="favorit-items">
                                                    <span class="flaticon-heart"></span>
                                                </div>
                                            </a>
                                        </div>
                                        <div class="popular-caption">
                                            <h3><a href="product_details.html">${product.name}</a></h3>
                                            <span>$ ${product.price}</span>
                                        </div>
                                    </div>
                                </div>            
                    `
                }
                return ''
            }) 

            return `<div class="tab-pane fade" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
            <div id="listProducts" class="row">` + htmls + `</div></div>`
        })

        let restNavContentHtmls = ''

        await restNavContent.forEach(item => {
            restNavContentHtmls+=(item.split(',')).join('');
        })

        const firstNavHtmls = `
            <span class="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" 
            href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">Tất cả</span>
        `
    
        let arrayNavTab = [firstNavHtmls ,...navHtmls]

        const navTabDivHtmls = (headerFirstNavContentHtmls + bodyFirstNavContentHtmls.join('') + footerFirstNavContentHtmls) + restNavContentHtmls;

        // console.log(navTabDivHtmls)

        navTab.innerHTML = arrayNavTab.join('')
        navTabContent.innerHTML = navTabDivHtmls
    },
    start: async function () {
        await this.loadCategorys()

        await this.loadProducts("")

        await this.render()

        await this.loadMenuAccount()

        await this.handleEvents()

    }
}

app.start()
