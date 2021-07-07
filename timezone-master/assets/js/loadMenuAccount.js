const logoutElement = document.getElementById("account-logout")
const loginElement = document.getElementById("account-login")

const app = {
    isLogin: localStorage.getItem("accessToken") ? true : false,
    loadMenuAccount: function() {
        if(this.isLogin) {
            logoutElement.classList.add('active')
            loginElement.classList.toggle('active')
        }
    },
    handleEvents: async function () {

        logoutElement.onclick = function(event) {
            event.preventDefault()
            console.log('click')
            localStorage.removeItem("accessToken")
            window.location.reload()
        }
    },
    
    start: async function () {
        await this.loadMenuAccount()

        this.handleEvents()
    }
}

app.start()
