import React, { useEffect } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import '../../assets/client/fonts/themify-icons/themify-icons.css'
import '../../assets/client/css/grid.css'
import '../../assets/client/css/base.css'
import '../../assets/client/css/style.css'

export default function HomeClient() {
  return (
    <div className="app">
      <div className="header">
        <div className="header-topbar">
          <div className="header-left">
            <nav className="header-left-nav">
              <ul className="header-left__list">
                <li className="header-left__item"><a href="./category.html" className="header-left__link">ĐỒNG HỒ NAM</a></li>
                <li className="header-left__item">PHỤ KIỆN</li>
                <li className="header-left__item">THƯƠNG HIỆU</li>
              </ul>
            </nav>
          </div>
          <div className="header-logo">
            <a href className="header-logo__kink">
              <img src="/imgClient/logo-mWb.svg" alt="" className="header-logo__img" />
            </a>
          </div>
          <div className="header-right">
            <nav className="header-right-nav">
              <ul className="header-right__list">
                <li className="header-right__item header-right__account">
                  <span className="header-right__account-text">TÀI KHOẢN</span>
                  <ul className="header-account">
                    <li className="nav-account__item">
                      <a className="nav-account__link" href>ĐĂNG NHẬP</a>
                    </li>
                    <li className="nav-account__item">
                      <a className="nav-account__link" href>ĐĂNG KÝ</a>
                    </li>
                  </ul>
                </li>
                <li className="header-right__item">
                  <label htmlFor="header-checkbox" className="header-right__lable">
                    <span>GIỎ HÀNG</span>
                    <i className="header-right__icon-bag ti-bag" />
                  </label>
                  <input type="checkbox" hidden id="header-checkbox" className="header-checkbox" />
                  <label htmlFor="header-checkbox" className="header__overlay" />
                  <div className="cart">
                    <div className="cart-header">
                      <h3 className="cart-header__heading">GIỎ HÀNG CỦA BẠN</h3>
                      <label htmlFor="header-checkbox" className="cart-header__exit">
                        <i className="cart-header__exit-icon ti-close" />
                      </label>
                    </div>
                    {/* No cart : cart-content-empty */}
                    <div className="cart-content">
                      <div className="cart-content-wrap">
                        <h3 className="cart-content__status">Hiện tại chưa có sản phẩm nào trong giỏ
                          hàng của bạn</h3>
                        <button className="cart-content__btn">Tiếp tục mua sắm</button>
                        <ul className="cart-productList">
                          <li className="cart-productList-item">
                            <div className="cart-productList-picture">
                              <img className="cart-productList-img" src="/imgClient/bx.swank (1).webp" />
                            </div>
                            <div className="cart-productList-content">
                              <p className="cart-productList-name">6 Mile</p>
                              <div className="cart-productList-quantityPrice">
                                <input type="number" defaultValue={1} className="cart-productList-quantity" />
                                <span className="cart-productList__multiplication">x</span>
                                <div className="cart-productList-price">
                                  <p className="cart-productList__price-current">2.789.000
                                    <span className="cart-productList__price-unit">đ</span>
                                  </p>
                                  <p className="cart-productList__price-old">3.099.000
                                    <span className="cart-productList__price-unit">đ</span>
                                  </p>
                                </div>
                              </div>
                            </div>
                            <span className="cart-productList-delete__icon">
                              <i className="ti-trash" />
                            </span>
                          </li>
                          <li className="cart-productList-item">
                            <div className="cart-productList-picture">
                              <img className="cart-productList-img" src="/imgClient/bx.swank (1).webp" />
                            </div>
                            <div className="cart-productList-content">
                              <p className="cart-productList-name">6 Mile</p>
                              <div className="cart-productList-quantityPrice">
                                <input type="number" defaultValue={1} className="cart-productList-quantity" />
                                <span className="cart-productList__multiplication">x</span>
                                <div className="cart-productList-price">
                                  <p className="cart-productList__price-current">2.789.000
                                    <span className="cart-productList__price-unit">đ</span>
                                  </p>
                                  <p className="cart-productList__price-old">3.099.000
                                    <span className="cart-productList__price-unit">đ</span>
                                  </p>
                                </div>
                              </div>
                            </div>
                            <span className="cart-productList-delete__icon">
                              <i className="ti-trash" />
                            </span>
                          </li>
                          <li className="cart-productList-item">
                            <div className="cart-productList-picture">
                              <img className="cart-productList-img" src="/imgClient/bx.swank (1).webp" />
                            </div>
                            <div className="cart-productList-content">
                              <p className="cart-productList-name">6 Mile</p>
                              <div className="cart-productList-quantityPrice">
                                <input type="number" defaultValue={1} className="cart-productList-quantity" />
                                <span className="cart-productList__multiplication">x</span>
                                <div className="cart-productList-price">
                                  <p className="cart-productList__price-current">2.789.000
                                    <span className="cart-productList__price-unit">đ</span>
                                  </p>
                                  <p className="cart-productList__price-old">3.099.000
                                    <span className="cart-productList__price-unit">đ</span>
                                  </p>
                                </div>
                              </div>
                            </div>
                            <span className="cart-productList-delete__icon">
                              <i className="ti-trash" />
                            </span>
                          </li>
                          <li className="cart-productList-item">
                            <div className="cart-productList-picture">
                              <img className="cart-productList-img" src="/imgClient/bx.swank (1).webp" />
                            </div>
                            <div className="cart-productList-content">
                              <p className="cart-productList-name">6 Mile</p>
                              <div className="cart-productList-quantityPrice">
                                <input type="number" defaultValue={1} className="cart-productList-quantity" />
                                <span className="cart-productList__multiplication">x</span>
                                <div className="cart-productList-price">
                                  <p className="cart-productList__price-current">2.789.000
                                    <span className="cart-productList__price-unit">đ</span>
                                  </p>
                                  <p className="cart-productList__price-old">3.099.000
                                    <span className="cart-productList__price-unit">đ</span>
                                  </p>
                                </div>
                              </div>
                            </div>
                            <span className="cart-productList-delete__icon">
                              <i className="ti-trash" />
                            </span>
                          </li>
                        </ul>
                        <div className="cart-productList-pay">
                          <div className="cart-productList-total">
                            <span className="cart-productList-total__text">thành tiền</span>
                            <span className="cart-productList-total__total-price">5.088.000
                              <span className="cart-productList-total__total-unit">đ</span>
                            </span>
                          </div>
                          <a href="./checkout.html" className="cart-productList-pay-btn">thanh toán</a>
                        </div>
                      </div>
                    </div>
                    <div className="cart-footer">
                      <div className="cart-footer__warranty">
                        <div className="cart-footer__warranty-img">
                          <svg xmlns="http://www.w3.org/2000/svg" width={32} height={34} viewBox="0 0 34 40" fill="none">
                            <path d="M32.7867 6.47703L17.4742 0.119443C17.0906 -0.0397754 16.6594 -0.0398535 16.2759 0.119443L0.96336 6.47703C0.380157 6.71921 0 7.28859 0 7.92007V15.6486C0 26.2902 6.43196 35.8627 16.2845 39.8842C16.663 40.0386 17.087 40.0386 17.4655 39.8842C27.3179 35.8628 33.75 26.2903 33.75 15.6486V7.92007C33.75 7.28859 33.3699 6.71921 32.7867 6.47703ZM30.625 15.6486C30.625 24.6951 25.3125 33.023 16.875 36.7403C8.66297 33.1223 3.125 24.9402 3.125 15.6486V8.9632L16.875 3.25429L30.625 8.9632V15.6486ZM15.148 20.9153L21.8639 14.1995C22.4741 13.5893 23.4634 13.5892 24.0736 14.1995C24.6838 14.8097 24.6838 15.799 24.0735 16.4091L16.2528 24.2299C15.6425 24.8402 14.6532 24.8399 14.0431 24.2299L9.67641 19.8631C9.06618 19.2529 9.06618 18.2636 9.67641 17.6534C10.2866 17.0433 11.2759 17.0432 11.8861 17.6534L15.148 20.9153Z" fill="black" />
                          </svg>
                        </div>
                        <span className="cart-footer__warranty-des">Bảo hành 10 năm <br />lỗi nhà sản
                          xuất</span>
                      </div>
                      <div className="cart-footer__freeship">
                        <div className="cart-footer__freeship-img">
                          <svg xmlns="http://www.w3.org/2000/svg" width={64} height={32} viewBox="0 0 64 40" fill="none">
                            <path d="M58.808 16.9574L57.1704 10.4073C57.6181 10.3122 57.9541 9.915 57.9541 9.43913V8.38304C57.9541 6.09004 56.0885 4.22462 53.7957 4.22462H46.3369V2.04623C46.3369 0.917891 45.419 0 44.2907 0H6.27061C5.14226 0 4.22437 0.917891 4.22437 2.04623V20.0002C4.22437 20.5469 4.66763 20.9903 5.21451 20.9903C5.76127 20.9903 6.20465 20.5471 6.20465 20.0002V2.04623C6.20465 2.0098 6.23417 1.98028 6.27061 1.98028H44.2906C44.327 1.98028 44.3565 2.0098 44.3565 2.04623V20.0004C44.3565 20.5472 44.7998 20.9906 45.3467 20.9906C45.8934 20.9906 46.3368 20.5473 46.3368 20.0004V18.878H58.0166C58.0176 18.878 58.0183 18.8783 58.0192 18.8783C58.0202 18.8783 58.021 18.8781 58.0219 18.8781C59.4591 18.8791 60.6795 19.8225 61.0986 21.1224H58.0199C57.4731 21.1224 57.0298 21.5656 57.0298 22.1125V24.2247C57.0298 25.9354 58.4214 27.327 60.1321 27.327H61.2543V31.6834H58.6653C57.8149 29.2278 55.4805 27.4589 52.7393 27.4589C49.9981 27.4589 47.6636 29.2278 46.8133 31.6834H46.3366V24.2246C46.3366 23.6778 45.8933 23.2344 45.3464 23.2344C44.7997 23.2344 44.3563 23.6777 44.3563 24.2246V31.6832H23.8139C22.9634 29.2275 20.6291 27.4587 17.8879 27.4587C15.1467 27.4587 12.8122 29.2275 11.9618 31.6832H6.27061C6.23417 31.6832 6.20465 31.6536 6.20465 31.6172V29.4389H10.4951C11.0419 29.4389 11.4852 28.9957 11.4852 28.4488C11.4852 27.9019 11.042 27.4587 10.4951 27.4587H0.990141C0.443384 27.4587 0 27.9019 0 28.4488C0 28.9957 0.44326 29.4389 0.990141 29.4389H4.2245V31.6172C4.2245 32.7456 5.14239 33.6634 6.27073 33.6634H11.619C11.6188 33.6854 11.6173 33.7073 11.6173 33.7294C11.6173 37.187 14.4303 40 17.8879 40C21.3454 40 24.1585 37.187 24.1585 33.7294C24.1585 33.7072 24.157 33.6854 24.1568 33.6634H46.4704C46.4702 33.6854 46.4687 33.7073 46.4687 33.7294C46.4687 37.187 49.2818 40 52.7393 40C56.1968 40 59.0099 37.187 59.0099 33.7294C59.0099 33.7072 59.0084 33.6854 59.0082 33.6634H62.2444C62.7912 33.6634 63.2345 33.2202 63.2345 32.6733V22.1123C63.2347 19.5048 61.3108 17.3384 58.808 16.9574ZM46.3369 6.20478H53.7957C54.9967 6.20478 55.9739 7.18195 55.9739 8.38304V8.44899H46.3369V6.20478ZM46.3369 16.8979V10.4292H55.1348L56.752 16.8979H46.3369ZM17.8879 38.0201C15.5221 38.0201 13.5974 36.0955 13.5974 33.7296C13.5974 31.3638 15.5221 29.4392 17.8879 29.4392C20.2536 29.4392 22.1783 31.3638 22.1783 33.7296C22.1783 36.0955 20.2536 38.0201 17.8879 38.0201ZM52.7396 38.0201C50.3738 38.0201 48.4491 36.0955 48.4491 33.7296C48.4491 31.3638 50.3738 29.4392 52.7396 29.4392C55.1053 29.4392 57.03 31.3638 57.03 33.7296C57.03 36.0955 55.1053 38.0201 52.7396 38.0201ZM61.2545 25.3467H60.1323C59.5136 25.3467 59.0102 24.8433 59.0102 24.2246V23.1024H61.2544V25.3467H61.2545Z" fill="black" />
                            <path d="M17.8879 31.6836C16.7595 31.6836 15.8416 32.6015 15.8416 33.7298C15.8416 34.8582 16.7595 35.7761 17.8879 35.7761C19.0162 35.7761 19.9341 34.8582 19.9341 33.7298C19.9341 32.6015 19.0162 31.6836 17.8879 31.6836Z" fill="black" />
                            <path d="M52.7396 31.6836C51.6113 31.6836 50.6934 32.6015 50.6934 33.7298C50.6934 34.8582 51.6113 35.7761 52.7396 35.7761C53.8679 35.7761 54.7858 34.8582 54.7858 33.7298C54.7858 32.6015 53.8679 31.6836 52.7396 31.6836Z" fill="black" />
                            <path d="M41.1223 27.4595H26.3368C25.79 27.4595 25.3466 27.9027 25.3466 28.4496C25.3466 28.9965 25.7899 29.4398 26.3368 29.4398H41.1223C41.6691 29.4398 42.1124 28.9965 42.1124 28.4496C42.1124 27.9027 41.6692 27.4595 41.1223 27.4595Z" fill="black" />
                            <path d="M15.7757 23.2344H3.10229C2.55554 23.2344 2.11215 23.6776 2.11215 24.2245C2.11215 24.7714 2.55541 25.2147 3.10229 25.2147H15.7757C16.3224 25.2147 16.7658 24.7714 16.7658 24.2245C16.7658 23.6776 16.3224 23.2344 15.7757 23.2344Z" fill="black" />
                            <path d="M34.4297 9.79528C34.0431 9.40871 33.4161 9.40871 33.0295 9.79541L24.2246 18.6002L19.6441 14.0198C19.2574 13.6331 18.6305 13.6331 18.2439 14.0198C17.8572 14.4065 17.8572 15.0333 18.2439 15.42L23.5245 20.7005C23.7178 20.8939 23.9713 20.9905 24.2246 20.9905C24.4779 20.9905 24.7314 20.8939 24.9246 20.7005L34.4296 11.1956C34.8163 10.8088 34.8163 10.182 34.4297 9.79528Z" fill="black" />
                          </svg>
                        </div>
                        <span className="cart-footer__freeship-des">Freeship <br />với đơn hàng &gt;
                          700K</span>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="header-right__item">
                  <label htmlFor="header-checkbox-search" className="header-right__lable">
                    <i className="header-right__icon-search ti-search" />
                  </label>
                  <input type="checkbox" hidden id="header-checkbox-search" className="header-checkbox-search" />
                  <label htmlFor="header-checkbox-search" className="header__overlay" />
                  <div className="search">
                    <div className="search-header">
                      <label htmlFor="header-checkbox-search" className="cart-header__exit">
                        <i className="cart-header__exit-icon ti-close" />
                      </label>
                    </div>
                    {/* search-body--empty :empty */}
                    <div className="search-body">
                      <div className="search-body-header">
                        <div className="search-body__icon">
                          <i className="ti-search" />
                        </div>
                        <input type="text" placeholder="Tìm kiếm ..." className="search-body__input" />
                      </div>
                      <div className="search-body-notify">
                        <p className="search-body-notify-text">5 mục</p>
                      </div>
                      <ul className="search-body-productList">
                        <li className="search-body-item">
                          <div className="search-body-item__pictureName">
                            <img src="/imgClient/bx.swank (1).webp" alt="" className="search-body-item__img" />
                            <span className="search-body-item__name">9 miles</span>
                          </div>
                          <div className="search-body-item__price">
                            <p className="search-body-item__price-current">2.199.000
                              <span className="search-body-item__unit">đ</span>
                            </p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="banner">
          <div className="banner-des">
            <h3 className="banner-des__heading">KASHMIR COLLECTION<br />NIỀM TỰ HÀO ĐẦU TIÊN</h3>
            <div className="banner-des__sub-heading">
              <span className="banner-des__text">Là dòng đồng hồ đầu tiên của Curnon, Kashmir<br />
                định hình một triết lí thiết kế tối giản, hiện đại<br />
                và đại diện cho sự tự tin.</span>
            </div>
            <a href className="banner-des__link">KHÁM PHÁ NGAY</a>
          </div>
          <img src="/imgClient/banner_kashmir_desktop-8bo.jpg" alt="Banner" className="banner-img" />
        </div>
      </div>
      <div className="app_container">
        <div className="categoryCard">
          <div className="categoryCard-list">
            <div className="categoryCard-wrap">
              <div className="categoryCard__item">
                <a href className="categoryCard__link">
                  <div className="categoryCard__img" style={{ backgroundImage: 'url(/imgClient/dong-ho-nam-category.webp)' }} />
                  <div className="categoryCard__content">
                    <h4 className="categoryCard__heading">ĐỒNG HỒ NAM</h4>
                    <p className="categoryCard__text">MUA NGAY <span className="categoryCard__icon"><i className="ti-arrow-right" /></span></p>
                  </div>
                </a>
              </div>
              <div className="categoryCard__item">
                <a href className="categoryCard__link">
                  <div className="categoryCard__img" style={{ backgroundImage: 'url(/imgClient/dong-ho-nu-category.webp)' }} />
                  <div className="categoryCard__content">
                    <h4 className="categoryCard__heading">ĐỒNG HỒ NAM</h4>
                    <p className="categoryCard__text">MUA NGAY <span className="categoryCard__icon"><i className="ti-arrow-right" /></span></p>
                  </div>
                </a>
              </div>
              <div className="categoryCard__item">
                <a href className="categoryCard__link">
                  <div className="categoryCard__img" style={{ backgroundImage: 'url(/imgClient/phu-kien-nam-category.webp)' }} />
                  <div className="categoryCard__content">
                    <h4 className="categoryCard__heading">ĐỒNG HỒ NAM</h4>
                    <p className="categoryCard__text">MUA NGAY <span className="categoryCard__icon"><i className="ti-arrow-right" /></span></p>
                  </div>
                </a>
              </div>
              <div className="categoryCard__item">
                <a href className="categoryCard__link">
                  <div className="categoryCard__img" style={{ backgroundImage: 'url(/imgClient/phu-kien-nu-category.webp)' }} />
                  <div className="categoryCard__content">
                    <h4 className="categoryCard__heading">ĐỒNG HỒ NAM</h4>
                    <p className="categoryCard__text">MUA NGAY <span className="categoryCard__icon"><i className="ti-arrow-right" /></span></p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="product-bestseller">
          <div className="bestseller-men">
            <div className="grid wide">
              <h1 className="bestseller__heading">MEN'S BEST SELLERS</h1>
              <a href className="bestseller__link">
                KHÁM PHÁ THÊM
                <i className="ti-arrow-right" />
              </a>
              <div className="row">
                <div className="col l-3">
                  <a href="./detail_product.html" className="bestseller__item">
                    <img src="/imgClient/bx.swank.webp" alt="" className="bestseller__img" />
                    <span className="bestseller__name">KASHMIR - 40MN</span>
                    <span className="bestseller__type">SWANK</span>
                    <span className="bestseller__order">PRE-ORDER</span>
                    <span className="bestseller__detail">XEM SẢN PHẨM</span>
                  </a>
                </div>
                <div className="col l-3">
                  <a href="./detail_product.html" className="bestseller__item">
                    <img src="/imgClient/bx.swank.webp" alt="" className="bestseller__img" />
                    <span className="bestseller__name">KASHMIR - 40MN</span>
                    <span className="bestseller__type">SWANK</span>
                    <span className="bestseller__order">PRE-ORDER</span>
                    <span className="bestseller__detail">XEM SẢN PHẨM</span>
                  </a>
                </div>
                <div className="col l-3">
                  <a href="./detail_product.html" className="bestseller__item">
                    <img src="/imgClient/bx.swank.webp" alt="" className="bestseller__img" />
                    <span className="bestseller__name">KASHMIR - 40MN</span>
                    <span className="bestseller__type">SWANK</span>
                    <span className="bestseller__order">3.099.000 <span className="bestseller__order-price">đ</span></span>
                    <span className="bestseller__detail">XEM SẢN PHẨM</span>
                  </a>
                </div>
                <div className="col l-3">
                  <a href="./detail_product.html" className="bestseller__item">
                    <img src="/imgClient/bx.swank.webp" alt="" className="bestseller__img" />
                    <span className="bestseller__name">KASHMIR - 40MN</span>
                    <span className="bestseller__type">SWANK</span>
                    <span className="bestseller__order">3.199.000 <span className="bestseller__unit">đ</span></span>
                    <span className="bestseller__detail">XEM SẢN PHẨM</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="bestseller-women">
            <div className="grid wide">
              <h1 className="bestseller__heading">WOMEN'S BEST SELLERS</h1>
              <a href className="bestseller__link">
                KHÁM PHÁ THÊM
                <i className="ti-arrow-right" />
              </a>
              <div className="row">
                <div className="col l-3">
                  <a href="./detail_product.html" className="bestseller__item">
                    <img src="/imgClient/lexie.1.png" alt="" className="bestseller__img" />
                    <span className="bestseller__name">SANTORINI - 40MN</span>
                    <span className="bestseller__type">LEXIE</span>
                    <span className="bestseller__price-current">2.079.000 <span className="bestseller__unit">đ</span></span>
                    <span className="bestseller__price-old">2.599.000 <span className="bestseller__unit">đ</span></span>
                    <span className="bestseller__detail">XEM SẢN PHẨM</span>
                  </a>
                </div>
                <div className="col l-3">
                  <a href="./detail_product.html" className="bestseller__item">
                    <img src="/imgClient/lexie.1.png" alt="" className="bestseller__img" />
                    <span className="bestseller__name">SANTORINI - 40MN</span>
                    <span className="bestseller__type">LEXIE</span>
                    <span className="bestseller__price-current">2.079.000 <span className="bestseller__unit">đ</span></span>
                    <span className="bestseller__price-old">2.599.000 <span className="bestseller__unit">đ</span></span>
                    <span className="bestseller__detail">XEM SẢN PHẨM</span>
                  </a>
                </div>
                <div className="col l-3">
                  <a href="./detail_product.html" className="bestseller__item">
                    <img src="/imgClient/lexie.1.png" alt="" className="bestseller__img" />
                    <span className="bestseller__name">SANTORINI - 40MN</span>
                    <span className="bestseller__type">LEXIE</span>
                    <span className="bestseller__price-current">2.079.000 <span className="bestseller__unit">đ</span></span>
                    <span className="bestseller__price-old">2.599.000 <span className="bestseller__unit">đ</span></span>
                    <span className="bestseller__detail">XEM SẢN PHẨM</span>
                  </a>
                </div>
                <div className="col l-3">
                  <a href="./detail_product.html" className="bestseller__item">
                    <img src="/imgClient/lexie.1.png" alt="" className="bestseller__img" />
                    <span className="bestseller__name">SANTORINI - 40MN</span>
                    <span className="bestseller__type">LEXIE</span>
                    <span className="bestseller__price-current">2.079.000 <span className="bestseller__unit">đ</span></span>
                    <span className="bestseller__price-old">2.599.000 <span className="bestseller__unit">đ</span></span>
                    <span className="bestseller__detail">XEM SẢN PHẨM</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="campaign">
          <div className="campaign__img">
            <div className="grid wide">
              <div className="row campaign-row">
                <div className="col campaign__content">
                  <p className="campaign__hastag">#whynotgirls</p>
                  <h2 className="campaign__heading">CHANGMAKEUP x CURNON</h2>
                  <p className="campaign__subheading">Những cô gái thời đại mới</p>
                  <a href className="campaign__link">KHÁM PHÁ BỘ SƯU TẬP</a>
                  <a href="https://www.youtube.com/watch?v=l0dCd_9_5Yo" className="campaign__link-video">
                    <span className="campaign__link-video-text">XEM VIDEO</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width={10} height={16} viewBox="0 0 10 16" fill="none">
                      <path d="M2.00781 15.1406L9.21484 8.51953C9.41016 8.36328 9.50781 8.14844 9.50781 7.875C9.50781 7.60156 9.41016 7.38672 9.21484 7.23047C9.21484 7.23047 9.19531 7.23047 9.15625 7.23047C9.15625 7.19141 9.15625 7.17188 9.15625 7.17188L2.00781 0.609375C1.53906 0.179688 1.05078 0.179688 0.542969 0.609375V0.667969C0.347656 0.824219 0.25 1.03906 0.25 1.3125V14.4375C0.25 14.7109 0.367188 14.9453 0.601562 15.1406H0.542969C1.05078 15.5703 1.53906 15.5703 2.00781 15.1406Z" fill="white" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="our-prouduct">
          <div className="grid wide">
            <div className="row our-prouduct-row">
              <div className="col out-product-wrap">
                <div className="our-product__picture">
                  <img src="/imgClient/bg1-wuA.jpg" alt="" className="our-product__img" />
                </div>
                <div className="product-info">
                  <div className="product-info__heading">SẢN PHẨM CỦA CHÚNG TÔI</div>
                  <div className="product-info-list">
                    {/* Cái này xử lí bằng javascript */}
                    <div className="product-info__item product-info__item--choose">
                      <button className="product-info__subheading">
                        DESIGNED IN VIETNAM
                        <i className="product-info__icon-normal ti-angle-right" />
                        <i className="product-info__icon-choose ti-angle-down" />
                      </button>
                      <p className="product-info__des">Mỗi chiếc Đồng hồ Curnon được thiết kế phát triển bởi
                        chất xám và nỗ lực của những con người Việt Nam,
                        mang theo cảm hứng và khát khao của tuổi trẻ.</p>
                    </div>
                    <div className="product-info__item">
                      <button className="product-info__subheading">
                        CHỐNG NƯỚC TIÊU CHUẨN
                        <i className="product-info__icon-normal ti-angle-right" />
                        <i className="product-info__icon-choose ti-angle-down" />
                      </button>
                      <p className="product-info__des">Mỗi chiếc Đồng hồ Curnon được thiết kế phát triển bởi
                        chất xám và nỗ lực của những con người Việt Nam,
                        mang theo cảm hứng và khát khao của tuổi trẻ.</p>
                    </div>
                    <div className="product-info__item">
                      <button className="product-info__subheading">
                        KÍNH SAPPHIRE CHỐNG XƯỚC VƯỢT CHỘI
                        <i className="product-info__icon-normal ti-angle-right" />
                        <i className="product-info__icon-choose ti-angle-down" />
                      </button>
                      <p className="product-info__des">Mỗi chiếc Đồng hồ Curnon được thiết kế phát triển bởi
                        chất xám và nỗ lực của những con người Việt Nam,
                        mang theo cảm hứng và khát khao của tuổi trẻ.</p>
                    </div>
                    <div className="product-info__item">
                      <button className="product-info__subheading">
                        THAY ĐỔI DÂY ĐEO TRONG 30 GIÂY
                        <i className="product-info__icon-normal ti-angle-right" />
                        <i className="product-info__icon-choose ti-angle-down" />
                      </button>
                      <p className="product-info__des">Mỗi chiếc Đồng hồ Curnon được thiết kế phát triển bởi
                        chất xám và nỗ lực của những con người Việt Nam,
                        mang theo cảm hứng và khát khao của tuổi trẻ.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="story">
          <div className="grid wide">
            <div className="row">
              <div className="col story-content">
                <span className="story-logo">
                  <img src="/imgClient/logo_small-2Xe.svg" alt="" className="story-logo__img" />
                </span>
                <h1 className="story-heading">THE STORY OF CURNON</h1>
                <p className="story-des">Cuối năm 2016, 3 chàng trai đam mê Startup và Đồng hồ quyết định thành
                  lập Curnon,
                  nhưng ngay từ đầu, chúng tôi đã biết rằng: Curnon sinh ra với một sứ mệnh lớn lao hơn,
                  không chỉ dừng lại là một thương hiệu đồng hồ. Chúng tôi muốn mang tới một nguồn cảm
                  hứng,
                  một sự thay đổi về tư duy, về suy nghĩ và chính những cái chúng tôi gọi là trải nghiệm
                  cho người trẻ.
                </p>
                <div className="story-picture">
                  <img src="/imgClient/storyLarge-8J9.png" alt="" className="story-img" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="community">
          <div className="col-1">
            <img src="/imgClient/part_of_curnon_1-mCk.jpg" alt="" className="community-slider" />
          </div>
          <div className="col-2">
            <div className="slider-center">
              <div className="slider-center-content">
                <h3 className="slider-center__heading">BE PART OF CURNON</h3>
                <p className="slider-center__des">Ai nói bạn không thể lựa chọn gia đình?</p>
                <ul className="slider-center__socials">
                  <li className="slider-center__item">
                    <a href className="slider-center__link">
                      <i className="slider-center__icon ti-facebook" />
                    </a>
                  </li>
                  <li className="slider-center__item">
                    <a href className="slider-center__link">
                      <i className="slider-center__icon ti-instagram" />
                    </a>
                  </li>
                  <li className="slider-center__item">
                    <a href className="slider-center__link">
                      <i className="slider-center__icon ti-youtube" />
                    </a>
                  </li>
                </ul>
                <p className="slider-center__hastag">#CURNONWATCH</p>
              </div>
            </div>
          </div>
          <div className="col-1">
            <img src="/imgClient/part_of_curnon_3-4DR.jpg" alt="" className="community-slider" />
          </div>
        </div>
        <div className="service">
          <div className="grid wide">
            <div className="row">
              <div className="service-category-wrap">
                <div className="service-category">
                  <span className="service-category__img">
                    <svg xmlns="http://www.w3.org/2000/svg" width={34} height={30} viewBox="0 0 34 40" fill="none">
                      <path d="M32.7867 6.47703L17.4742 0.119443C17.0906 -0.0397754 16.6594 -0.0398535 16.2759 0.119443L0.96336 6.47703C0.380157 6.71921 0 7.28859 0 7.92007V15.6486C0 26.2902 6.43196 35.8627 16.2845 39.8842C16.663 40.0386 17.087 40.0386 17.4655 39.8842C27.3179 35.8628 33.75 26.2903 33.75 15.6486V7.92007C33.75 7.28859 33.3699 6.71921 32.7867 6.47703ZM30.625 15.6486C30.625 24.6951 25.3125 33.023 16.875 36.7403C8.66297 33.1223 3.125 24.9402 3.125 15.6486V8.9632L16.875 3.25429L30.625 8.9632V15.6486ZM15.148 20.9153L21.8639 14.1995C22.4741 13.5893 23.4634 13.5892 24.0736 14.1995C24.6838 14.8097 24.6838 15.799 24.0735 16.4091L16.2528 24.2299C15.6425 24.8402 14.6532 24.8399 14.0431 24.2299L9.67641 19.8631C9.06618 19.2529 9.06618 18.2636 9.67641 17.6534C10.2866 17.0433 11.2759 17.0432 11.8861 17.6534L15.148 20.9153Z" fill="white" />
                    </svg>
                  </span>
                  <p className="service-category__des">BẢO HÀNH 10 NĂM LỖI NHÀ SẢN XUẤT</p>
                </div>
                <div className="service-category">
                  <span className="service-category__img">
                    <svg xmlns="http://www.w3.org/2000/svg" width={64} height={30} viewBox="0 0 64 40" fill="none">
                      <path d="M58.808 16.9574L57.1704 10.4073C57.6181 10.3122 57.9541 9.915 57.9541 9.43913V8.38304C57.9541 6.09004 56.0885 4.22462 53.7957 4.22462H46.3369V2.04623C46.3369 0.917891 45.419 0 44.2907 0H6.27061C5.14226 0 4.22437 0.917891 4.22437 2.04623V20.0002C4.22437 20.5469 4.66763 20.9903 5.21451 20.9903C5.76127 20.9903 6.20465 20.5471 6.20465 20.0002V2.04623C6.20465 2.0098 6.23417 1.98028 6.27061 1.98028H44.2906C44.327 1.98028 44.3565 2.0098 44.3565 2.04623V20.0004C44.3565 20.5472 44.7998 20.9906 45.3467 20.9906C45.8934 20.9906 46.3368 20.5473 46.3368 20.0004V18.878H58.0166C58.0176 18.878 58.0183 18.8783 58.0192 18.8783C58.0202 18.8783 58.021 18.8781 58.0219 18.8781C59.4591 18.8791 60.6795 19.8225 61.0986 21.1224H58.0199C57.4731 21.1224 57.0298 21.5656 57.0298 22.1125V24.2247C57.0298 25.9354 58.4214 27.327 60.1321 27.327H61.2543V31.6834H58.6653C57.8149 29.2278 55.4805 27.4589 52.7393 27.4589C49.9981 27.4589 47.6636 29.2278 46.8133 31.6834H46.3366V24.2246C46.3366 23.6778 45.8933 23.2344 45.3464 23.2344C44.7997 23.2344 44.3563 23.6777 44.3563 24.2246V31.6832H23.8139C22.9634 29.2275 20.6291 27.4587 17.8879 27.4587C15.1467 27.4587 12.8122 29.2275 11.9618 31.6832H6.27061C6.23417 31.6832 6.20465 31.6536 6.20465 31.6172V29.4389H10.4951C11.0419 29.4389 11.4852 28.9957 11.4852 28.4488C11.4852 27.9019 11.042 27.4587 10.4951 27.4587H0.990141C0.443384 27.4587 0 27.9019 0 28.4488C0 28.9957 0.44326 29.4389 0.990141 29.4389H4.2245V31.6172C4.2245 32.7456 5.14239 33.6634 6.27073 33.6634H11.619C11.6188 33.6854 11.6173 33.7073 11.6173 33.7294C11.6173 37.187 14.4303 40 17.8879 40C21.3454 40 24.1585 37.187 24.1585 33.7294C24.1585 33.7072 24.157 33.6854 24.1568 33.6634H46.4704C46.4702 33.6854 46.4687 33.7073 46.4687 33.7294C46.4687 37.187 49.2818 40 52.7393 40C56.1968 40 59.0099 37.187 59.0099 33.7294C59.0099 33.7072 59.0084 33.6854 59.0082 33.6634H62.2444C62.7912 33.6634 63.2345 33.2202 63.2345 32.6733V22.1123C63.2347 19.5048 61.3108 17.3384 58.808 16.9574ZM46.3369 6.20478H53.7957C54.9967 6.20478 55.9739 7.18195 55.9739 8.38304V8.44899H46.3369V6.20478ZM46.3369 16.8979V10.4292H55.1348L56.752 16.8979H46.3369ZM17.8879 38.0201C15.5221 38.0201 13.5974 36.0955 13.5974 33.7296C13.5974 31.3638 15.5221 29.4392 17.8879 29.4392C20.2536 29.4392 22.1783 31.3638 22.1783 33.7296C22.1783 36.0955 20.2536 38.0201 17.8879 38.0201ZM52.7396 38.0201C50.3738 38.0201 48.4491 36.0955 48.4491 33.7296C48.4491 31.3638 50.3738 29.4392 52.7396 29.4392C55.1053 29.4392 57.03 31.3638 57.03 33.7296C57.03 36.0955 55.1053 38.0201 52.7396 38.0201ZM61.2545 25.3467H60.1323C59.5136 25.3467 59.0102 24.8433 59.0102 24.2246V23.1024H61.2544V25.3467H61.2545Z" fill="white" />
                      <path d="M17.8879 31.6836C16.7595 31.6836 15.8416 32.6015 15.8416 33.7298C15.8416 34.8582 16.7595 35.7761 17.8879 35.7761C19.0162 35.7761 19.9341 34.8582 19.9341 33.7298C19.9341 32.6015 19.0162 31.6836 17.8879 31.6836Z" fill="white" />
                      <path d="M52.7396 31.6836C51.6113 31.6836 50.6934 32.6015 50.6934 33.7298C50.6934 34.8582 51.6113 35.7761 52.7396 35.7761C53.8679 35.7761 54.7858 34.8582 54.7858 33.7298C54.7858 32.6015 53.8679 31.6836 52.7396 31.6836Z" fill="white" />
                      <path d="M41.1223 27.4595H26.3368C25.79 27.4595 25.3466 27.9027 25.3466 28.4496C25.3466 28.9965 25.7899 29.4398 26.3368 29.4398H41.1223C41.6691 29.4398 42.1124 28.9965 42.1124 28.4496C42.1124 27.9027 41.6692 27.4595 41.1223 27.4595Z" fill="white" />
                      <path d="M15.7757 23.2344H3.10229C2.55554 23.2344 2.11215 23.6776 2.11215 24.2245C2.11215 24.7714 2.55541 25.2147 3.10229 25.2147H15.7757C16.3224 25.2147 16.7658 24.7714 16.7658 24.2245C16.7658 23.6776 16.3224 23.2344 15.7757 23.2344Z" fill="white" />
                      <path d="M34.4297 9.79528C34.0431 9.40871 33.4161 9.40871 33.0295 9.79541L24.2246 18.6002L19.6441 14.0198C19.2574 13.6331 18.6305 13.6331 18.2439 14.0198C17.8572 14.4065 17.8572 15.0333 18.2439 15.42L23.5245 20.7005C23.7178 20.8939 23.9713 20.9905 24.2246 20.9905C24.4779 20.9905 24.7314 20.8939 24.9246 20.7005L34.4296 11.1956C34.8163 10.8088 34.8163 10.182 34.4297 9.79528Z" fill="white" />
                    </svg>
                  </span>
                  <p className="service-category__des">FREESHIP VỚI ĐƠN HÀNG TỪ 700.000 VND</p>
                </div>
                <div className="service-category">
                  <span className="service-category__img">
                    <svg xmlns="http://www.w3.org/2000/svg" style={{ backgroundColor: '#000' }} width={40} height={30} viewBox="0 0 40 40" fill="none">
                      <g clipPath="url(#clip0)">
                        <path d="M19.9994 0C12.4169 0 6.24939 6.1675 6.24939 13.75C6.24939 21.3325 12.4169 27.5 19.9994 27.5C27.5794 27.5 33.7494 21.3325 33.7494 13.75C33.7494 6.1675 27.5794 0 19.9994 0ZM27.2269 11.805L24.8519 14.78L25.1119 18.6675C25.1419 19.1 24.9444 19.5175 24.5869 19.77C24.3694 19.9225 24.1169 20 23.8619 20C23.6969 20 23.5294 19.9675 23.3744 19.9L19.9994 18.4675L16.6269 19.9C16.2269 20.07 15.7669 20.0225 15.4144 19.77C15.0594 19.5175 14.8619 19.1 14.8894 18.6675L15.1494 14.78L12.7744 11.805C12.5094 11.475 12.4319 11.0325 12.5644 10.63C12.6969 10.2275 13.0244 9.9225 13.4344 9.815L16.9794 8.8875L18.9244 5.6125C19.3744 4.8525 20.6244 4.8525 21.0719 5.6125L23.0169 8.8875L26.5644 9.815C26.9719 9.9225 27.2994 10.23 27.4344 10.63C27.5694 11.03 27.4894 11.4725 27.2269 11.805Z" fill="white" />
                        <path d="M5.93688 21.8574L0.166881 31.8749C-0.0856195 32.3149 -0.0481195 32.8624 0.259381 33.2624C0.566881 33.6624 1.08438 33.8424 1.57438 33.7074L8.91438 31.7349L10.8669 39.0749C10.9969 39.5624 11.4094 39.9249 11.9094 39.9924C11.9644 39.9974 12.0219 39.9999 12.0744 39.9999C12.5169 39.9999 12.9319 39.7649 13.1569 39.3749L18.6144 29.9299C13.1919 29.4699 8.53188 26.3374 5.93688 21.8574Z" fill="white" />
                        <path d="M39.8344 31.8749L34.0619 21.8574C31.4694 26.3374 26.8069 29.4699 21.3844 29.9299L26.8419 39.3749C27.0669 39.7649 27.4819 39.9999 27.9244 39.9999C27.9769 39.9999 28.0344 39.9974 28.0869 39.9899C28.5894 39.9224 28.9994 39.5599 29.1319 39.0724L31.0844 31.7324L38.4244 33.7049C38.9144 33.8399 39.4294 33.6599 39.7394 33.2599C40.0494 32.8624 40.0844 32.3149 39.8344 31.8749Z" fill="white" />
                      </g>
                      <defs>
                        <clipPath id="clip0">
                          <rect width={40} height={40} fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </span>
                  <p className="service-category__des">CAM KẾT 100% HÀNG CHÍNH HÃNG</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="newsletter">
          <h3 className="newsletter__heading">ĐĂNG KÍ NHẬN TIN MỚI</h3>
          <span className="newsletter__sub-heading">Nhận các tin tức về chương trình và khuyến mãi sớm nhất</span>
          <form className="newsletter-form">
            <input type="text" placeholder="Họ tên" className="newsletter-form__input" />
            <input type="text" placeholder="Email" className="newsletter-form__input" />
            <button className="btn">Đăng Kí</button>
          </form>
        </div>
        <div className="contact">
          <div className="grid wide">
            <div className="row">
              <div className="col contact-info">
                <div className="col-1 contact-diffirent">
                  <p className="contact-heading">CHÍNH SÁCH</p>
                  <ul className="contact-list">
                    <li className="contact-list__item">
                      <a className="contact-list__link" href>Chính sách vận chuyển</a>
                    </li>
                    <li className="contact-list__item">
                      <a className="contact-list__link" href>Chính sách đổi trả</a>
                    </li>
                    <li className="contact-list__item">
                      <a className="contact-list__link" href>Chính sách bảo hành</a>
                    </li>
                  </ul>
                </div>
                <div className="col-2 contact-common">
                  <p className="contact-heading">HANOI STORES</p>
                  <ul className="contact-list">
                    <li className="contact-list__item">Store 1:<span className="contact-address">33 Hàm Long, Hoàn Kiếm, Hà Nội.</span></li>
                    <li className="contact-list__item">Store 2:<span className="contact-address">9 B7 Phạm Ngọc Thạch, Đống Đa, Hà Nội.</span></li>
                    <li className="contact-list__item">Store 3:<span className="contact-address">173C Kim Mã, Ba Đình, Hà Nội.</span></li>
                  </ul>
                </div>
                <div className="col-2 contact-common">
                  <p className="contact-heading">TP.HCM STORES</p>
                  <ul className="contact-list">
                    <li className="contact-list__item">Store 4:<span className="contact-address">25 Nguyễn Trãi, P.Bến Thành, Quận 1, TPHCM.</span></li>
                    <li className="contact-list__item">Store 5:<span className="contact-address">Lầu 2, 63 Hồ Tùng Mậu, Quận 1, TPHCM.</span></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="nav-footer">
          <div className="grid wide">
            <div className="row nav-footer-row">
              <div className="nav-footer__content">
                <a href className="nav-footer__link">ĐỒNG HỒ NAM</a>
                <a href className="nav-footer__link">ĐỒNG HỒ NỮ</a>
                <a href className="nav-footer__link">PHỤ KIỆN</a>
                <a href className="nav-footer__link">BLOG</a>
                <a href className="nav-footer__link">CHÍNH SÁCH CỦA CHÚNG TÔI</a>
                <a href className="nav-footer__link">TUYỂN DỤNG</a>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="grid wide">
            <div className="row">
              <div className="col footer-content">
                <div className="footer-left col-1">
                  <p className="footer-left__copyright">© 2019 - Bản quyền của CTCP PHÁT TRIỂN SẢN PHẨM SÁNG TẠO VIỆT</p>
                  <p className="footer-left__text">Giấy chứng nhận ĐKKD số 0108150321 do Sở Kế hoạch và Đầu tư Thành phố Hà Nội
                    cấp ngày 29/01/2018 123C Thụy Khuê, Tây Hồ, Hà Nội</p>
                </div>
                <div className="footer-right col-1">
                  <div className="footer-right-logo">
                    <img src="/imgClient/momo-logo.png" alt="Momo logo" className="footer-right__img logo-momo" />
                    <img src="/imgClient/vnpay-logo.png" alt="Vnpay logo" className="footer-right__img logo-vnpay" />
                    <img src="/imgClient/bct.png" alt="BCT logo" className="footer-right__img " />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <h4 className="copy-by">Copy by: Anfeed</h4>
        </div>
      </div>
    </div>
  )

}