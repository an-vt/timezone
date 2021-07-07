const usernameElement = document.querySelector('.login_part_form #username')
const passwordElement = document.querySelector('.login_part_form #password')

const usernameRegisterElement = document.querySelector('.register_part_form #username')
const passwordRegisterElement = document.querySelector('.register_part_form #password')
const emailRegisterElement = document.querySelector(".register_part_form #email")

const formLogin = document.querySelector(".login_part_form")
const linkregister = document.getElementById("link-register")
const formRegister = document.querySelector(".register_part_form")


let ischeck = false;

// async function login() {
//     var myHeaders = new Headers();
//     myHeaders.append("Content-Type", "application/json");

//     var raw = JSON.stringify({
//         "username": usernameElement.value,
//         "password": passwordElement.value
//     });

//     var requestOptions = {
//         method: 'POST',
//         headers: myHeaders,
//         body: raw,
//         redirect: 'follow'
//     };

//     try {
//         let response = await fetch("http://localhost:4000/api/login", requestOptions)
//         if (response.ok) {
//             let result = await response.json()
//             console.log(result)
//             localStorage.setItem('accessToken', result.accessToken)
//             //lấy trang trước khi bấm sang đăng nhập
//             let prevUrl = document.referrer
//             if (prevUrl.includes('cart.html')) {
//                 window.location.href = './checkout.html'
//             } else {
//                 window.location.href = './index.html'
//             }
//         }
//         if(response.status == 400) {
//             alert('Tài khoản của bạn bị vô hiệu hóa')
//         }
//         if(response.status == 401) {
//             alert('Tài khoản hoặc mật khẩu không chính xác')
//         }
//     } catch (error) {
//         console.log('error ', error)
//     }
// }

// async function register() {
//     var myHeaders = new Headers();
//     myHeaders.append("Content-Type", "application/json");

//     console.log(usernameRegisterElement.value)
//     console.log(passwordRegisterElement.value)
//     var raw = JSON.stringify({
//         "username": usernameRegisterElement.value,
//         "password": passwordRegisterElement.value,
//         "email": emailRegisterElement.value,
//     });

//     var requestOptions = {
//         method: 'POST',
//         headers: myHeaders,
//         body: raw,
//         redirect: 'follow'
//     };

//     try {
//         let response = await fetch("http://localhost:4000/api/user/register", requestOptions)
//         if(response.ok) {
//             let result = await response.json()
//             console.log(result)
//             alert('Đăng kí thành công')
//         }
//     } catch (error) {
//         console.log(error)
//         alert('Đăng kí thất bại')
//     }

// }

linkregister.onclick = function(event) {
    event.preventDefault() 
    ischeck = !ischeck
    if(ischeck) {
        formLogin.classList.toggle('active')
        formRegister.classList.toggle('active')
        linkregister.textContent = 'ĐĂNG NHẬP'
    }else {
        formLogin.classList.toggle('active')
        formRegister.classList.toggle('active')
        linkregister.textContent = 'TẠO TÀI KHOẢN'
    }
}

// Đối tượng `Validator`
function Validator(options) {
    function getParent(element, selector) {
        while (element.parentElement) {
            if (element.parentElement.matches(selector)) {
                return element.parentElement;
            }
            element = element.parentElement;
        }
    }

    var selectorRules = {};

    // Hàm thực hiện validate
    function validate(inputElement, rule) {
        var errorElement = getParent(inputElement, options.formGroupSelector).querySelector(options.errorSelector);
        var errorMessage;

        // Lấy ra các rules của selector
        var rules = selectorRules[rule.selector];
        
        // Lặp qua từng rule & kiểm tra
        // Nếu có lỗi thì dừng việc kiểm
        for (var i = 0; i < rules.length; ++i) {
            switch (inputElement.type) {
                case 'radio':
                case 'checkbox':
                    errorMessage = rules[i](
                        formElement.querySelector(rule.selector + ':checked')
                    );
                    break;
                default:
                    errorMessage = rules[i](inputElement.value);
            }
            if (errorMessage) break;
        }
        
        if (errorMessage) {
            errorElement.innerText = errorMessage;
            getParent(inputElement, options.formGroupSelector).classList.add('invalid');
        } else {
            errorElement.innerText = '';
            getParent(inputElement, options.formGroupSelector).classList.remove('invalid');
        }

        return !errorMessage;
    }

    // Lấy element của form cần validate
    var formElement = document.querySelector(options.form);
    if (formElement) {
        // Khi submit form
        formElement.onsubmit = function (e) {
            e.preventDefault();

            var isFormValid = true;

            // Lặp qua từng rules và validate
            options.rules.forEach(function (rule) {
                var inputElement = formElement.querySelector(rule.selector);
                var isValid = validate(inputElement, rule);
                if (!isValid) {
                    isFormValid = false;
                }
            });

            if (isFormValid) {
                // Trường hợp submit với javascript
                if (typeof options.onSubmit === 'function') {
                    var enableInputs = formElement.querySelectorAll('[name]');
                    var formValues = Array.from(enableInputs).reduce(function (values, input) {
                        
                        switch(input.type) {
                            case 'radio':
                                values[input.name] = formElement.querySelector('input[name="' + input.name + '"]:checked').value;
                                break;
                            case 'checkbox':
                                if (!input.matches(':checked')) {
                                    values[input.name] = '';
                                    return values;
                                }
                                if (!Array.isArray(values[input.name])) {
                                    values[input.name] = [];
                                }
                                values[input.name].push(input.value);
                                break;
                            case 'file':
                                values[input.name] = input.files[0];
                                break;
                            default:
                                values[input.name] = input.value;
                        }

                        return values;
                    }, {});
                    options.onSubmit(formValues);
                }
                // Trường hợp submit với hành vi mặc định
                // else {
                //     formElement.submit();
                // }
            }
        }

        // Lặp qua mỗi rule và xử lý (lắng nghe sự kiện blur, input, ...)
        options.rules.forEach(function (rule) {

            // Lưu lại các rules cho mỗi input
            if (Array.isArray(selectorRules[rule.selector])) {
                selectorRules[rule.selector].push(rule.test);
            } else {
                selectorRules[rule.selector] = [rule.test];
            }

            var inputElements = formElement.querySelectorAll(rule.selector);

            Array.from(inputElements).forEach(function (inputElement) {
               // Xử lý trường hợp blur khỏi input
                inputElement.onblur = function () {
                    validate(inputElement, rule);
                }

                // Xử lý mỗi khi người dùng nhập vào input
                inputElement.oninput = function () {
                    var errorElement = getParent(inputElement, options.formGroupSelector).querySelector(options.errorSelector);
                    errorElement.innerText = '';
                    getParent(inputElement, options.formGroupSelector).classList.remove('invalid');
                } 
            });
        });
    }

}



// Định nghĩa rules
// Nguyên tắc của các rules:
// 1. Khi có lỗi => Trả ra message lỗi
// 2. Khi hợp lệ => Không trả ra cái gì cả (undefined)
Validator.isRequired = function (selector, message) {
    return {
        selector: selector,
        test: function (value) {
            return value ? undefined :  message || 'Vui lòng nhập trường này'
        }
    };
}

Validator.isEmail = function (selector, message) {
    return {
        selector: selector,
        test: function (value) {
            var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            return regex.test(value) ? undefined :  message || 'Trường này phải là email';
        }
    };
}

Validator.minLength = function (selector, min, message) {
    return {
        selector: selector,
        test: function (value) {
            return value.length >= min ? undefined :  message || `Vui lòng nhập tối thiểu ${min} kí tự`;
        }
    };
}

Validator.isConfirmed = function (selector, getConfirmValue, message) {
    return {
        selector: selector,
        test: function (value) {
            return value === getConfirmValue() ? undefined : message || 'Giá trị nhập vào không chính xác';
        }
    }
}
