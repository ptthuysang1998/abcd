import React from 'react'

function Body() {
    return (
        <div>
            <div id="content-left">
  <div className="container-slide-wrapper">
    <div className="slide-wrapper">
      <div className="menu-left-title">
        <h4><a href="/">DANH MỤC SẢN PHẨM</a></h4>
      </div>
      <div className="menu-left">
        <ul className="sub-menu-left">
          <li>
            <a href="/">Sản phẩm</a>
            <ul className="sub-menu">

            </ul>
          </li>
          <li><a href="/">
            <img src="img/leftmenu_icon_2.png" alt="" />
            <span>Áo</span>
          </a></li>
          <li><a href="/">
            <img src="img/leftmenu_icon_3.png" alt="" />
            <span>Quần</span>
          </a>

          </li>
          <li><a href="/">
            <img src="img/leftmenu_icon_4.png" alt="" />
            <span>Váy</span>
          </a></li>
          <li><a href="/">
            <img src="img/leftmenu_icon_5.png" alt="" />
            <span>Phụ kiện</span>
          </a></li>
          <li><a href="/">
            <img src="img/leftmenu_icon_6.png" alt="" />
            <span>Hàng gia dụng</span>
          </a></li>
          <li><a href="/">
            <img src="img/leftmenu_icon_7.png" alt="" />
            <span>Hàng điện tử</span>
          </a>
            <ul className="submenu">
              <div className="submenu-padding">
                <li>
                  <a href={1}>
                    <div>Máy làm sữa chua, đậu nành, rau mầm Kangaroo</div>
                  </a>
                </li>
                <li>
                  <a href={2}>
                    <div>Ấm đun nước siêu tốc Kangaroo</div>
                  </a>
                </li>
                <li>
                  <a href={3}>
                    <div>Cây lau nhà đa năng Kangaroo</div>
                  </a>
                </li>
                <li>
                  <a href={4}>
                    <div>Máy sấy tóc Kangaroo</div>
                  </a>
                </li>
                <li>
                  <a href={5}>
                    <div>Bàn là hơi nước Kangaroo</div>
                  </a>
                </li>
                <li>
                  <a href={6}>
                    <div>Đèn led Kangaroo</div>
                  </a>
                </li>
                <li>
                  <a href={7}>
                    <span>Két sắt, két bạc Kangaroo</span>
                  </a>
                  <ul className="submenu1">
                    <li><a href={1}>
                      <div>Két khách sạn Kangaroo</div>
                    </a></li>
                    <li><a href={2}>
                      <div>Két phào Kangaroo</div>
                    </a></li>
                    <li><a href={3}>
                      <div>Két vuông Kangaroo</div>
                    </a></li>
                    <li><a href={4}>
                      <div>Két ngang Kangaroo</div>
                    </a></li>
                    <li><a href={5}>
                      <div>Két nhập khẩu Kangaroo</div>
                    </a></li>
                  </ul>
                </li>
                <li>
                  <a href={8}>
                    <div>Cân hạnh phúc Kangaroo</div>
                  </a>
                </li>
                <li>
                  <a href={9}>
                    <div>Thang gấp gia đình Kangaroo</div>
                  </a>
                </li>
                <li>
                  <a href={10}>
                    <div>Xịt rửa cao áp Kangaroo</div>
                  </a>
                </li>
                <li>
                  <a href={11}>
                    <span>Máy bơm kháng khuẩn</span>
                  </a>
                  <ul className="submenu1" style={{ display: 'none' }}>
                    <li ><a href={1}>
                      <div>Máy bơm nước bán chân không Kangaroo</div>
                    </a></li>
                    <li ><a href={2}>
                      <div>Máy bơm nước chân không Kangaroo</div>
                    </a></li>
                    <li ><a href={3}>
                      <div>Máy bơm nước đầu inox Kangaroo</div>
                    </a></li>
                    <li ><a href={4}>
                      <div>Máy bơm nước lưu lượng Kangaroo</div>
                    </a></li>
                    <li ><a href={5}>
                      <div>Máy bơm nước ly tâm Kangaroo</div>
                    </a></li>
                    <li ><a href={6}>
                      <div>Máy bơm nước hai tầng cánh Kangaroo</div>
                    </a></li>

                    <li ><a href={7}>
                      <div>Máy bơm nước thải Kangaroo</div>
                    </a></li>
                  </ul>
                </li>
              </div>
              <div className="submenu-padding">
                <li>
                  <a href={1}>
                    <div>Tủ sắt Kangaroo</div>
                  </a>
                </li>
                <li>
                  <a href={2}>
                    <div>Quạt Kangaroo</div>
                  </a>
                </li>
                <li>
                  <a href={3}>
                    <div>Máy xay sinh tố Kangaroo</div>
                  </a>
                </li>
                <li>
                  <a href={4}>
                    <div>Máy lọc không khí Ô tô Kangaroo</div>
                  </a>
                </li>
              </div>
            </ul>
          </li>
          <li><a href="/">
            <img src="img/leftmenu_icon_8.png" alt="" />
            <span>Nội thất giai đình</span>
          </a></li>
          <li><a href="/">
            <img src="img/leftmenu_icon_9.png" alt="" />
            <span>Đồ chơi</span>
          </a></li>
          <li><a href="/">
            <img src="img/leftmenu_icon_10.png" alt="" />
            <span>Chăm sóc sức khỏe</span>
          </a></li>
        </ul>
      </div>
    </div>
    <div className="slide_banner">
      <div id="demo" className="carousel slide" data-ride="carousel">
        <ul className="carousel-indicators">
          <li data-target="#demo" data-slide-to={0} className="active" />
          <li data-target="#demo" data-slide-to={1} />
          <li data-target="#demo" data-slide-to={2} />
        </ul>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="img/slieshow.jpg" alt="" />
          </div>
          <div className="carousel-item">
            <img src="img/slideshow.jpg" alt="" />
          </div>
        </div>
        <div className="row_nut">
          <a className="carousel-control-prev" href="#demo" data-slide="prev">
            <span className="carousel-control-prev-icon" />
          </a>
          <a className="carousel-control-next" href="#demo" data-slide="next">
            <span className="carousel-control-next-icon" />
          </a>
        </div>
      </div>
    </div>{/*  Kết thúc slide_banner */}

  </div>
</div>
<div className="nav">
  <div id="nav-nav">

    <div className="img-popular">

      <img src="img/popular_brand_img_2.png" alt={1} />
      <img src="img/popular_brand_img_3.png" alt={2} />
      <img src="img/popular_brand_img_4.png" alt={4} />
      <img src="img/popular_brand_img_5.png" alt={5} />
      <img src="img/popular_brand_img_6.png" alt={6} />

      <img src="img/popular_brand_img_8.png" alt={7} />
    </div>
    <div className="menu-tab">
      <div className="navbar">

        <div className="dropdown">
          <button className="dropbtn">Giới tính
<i className="fa fa-caret-down" />
          </button>
          <div className="dropdown-content">

            <div className="row" cols="10">

              <div className="column">
                <ul className="filter-sblock__filter-list">
                  <li className="filter-sblock__filter-item is-active">
                    <a href="">
                      <span className="filter-sblock__check-icon" />
        Nam
  </a>
                  </li>
                  <li className="filter-sblock__filter-item">
                    <a href="">
                      <span className="filter-sblock__check-icon" />
      Nữ
  </a>
                  </li>

                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="navbar">

          <div className="dropdown">
            <button className="dropbtn">Lứa tuổi
<i className="fa fa-caret-down" />
            </button>
            <div className="dropdown-content">

              <div className="row" cols="10">

                <div className="column">
                  <ul className="filter-sblock__filter-list">
                    <li className="filter-sblock__filter-item is-active">
                      <a href="">
                        <span className="filter-sblock__check-icon" />
Trẻ em
</a>
                    </li>
                    <li className="filter-sblock__filter-item">
                      <a href="">
                        <span className="filter-sblock__check-icon" />
Thanh niên
</a>
                    </li>
                    <li className="filter-sblock__filter-item">
                      <a href="">
                        <span className="filter-sblock__check-icon" />
Trưởng thành
</a>
                    </li>
                    <li className="filter-sblock__filter-item">
                      <a href="">
                        <span className="filter-sblock__check-icon" />
Trung niên
</a>
                    </li>
                    <li className="filter-sblock__filter-item">
                      <a href="">
                        <span className="filter-sblock__check-icon" />
Người già
</a>
                    </li>

                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>

          <div className="navbar">

            <div className="dropdown">
              <button className="dropbtn">Màu sắc
<i className="fa fa-caret-down" />
              </button>
              <div className="dropdown-content">

                <div className="row" cols="10">

                  <div className="column">
                    <ul className="filter-sblock__filter-list">
                      <li className="filter-sblock__filter-item is-active">
                        <a href="">
                          <span className="filter-sblock__check-icon" />
      Hồng
</a>
                      </li>
                      <li className="filter-sblock__filter-item">
                        <a href="">
                          <span className="filter-sblock__check-icon" />
    Vàng
</a>
                      </li>
                      <li className="filter-sblock__filter-item">
                        <a href="">
                          <span className="filter-sblock__check-icon" />
    Đen
</a>
                      </li>
                      <li className="filter-sblock__filter-item">
                        <a href="">
                          <span className="filter-sblock__check-icon" />
    Đỏ
</a>
                      </li>
                      <li className="filter-sblock__filter-item">
                        <a href="">
                          <span className="filter-sblock__check-icon" />
    Trắng
</a>
                      </li>

                    </ul>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
        <div>
          <div className="navbar">

            <div className="dropdown">
              <button className="dropbtn">Kích thước
<i className="fa fa-caret-down" />
              </button>
              <div className="dropdown-content">

                <div className="row" cols="10">

                  <div className="column">
                    <ul className="filter-sblock__filter-list">
                      <li className="filter-sblock__filter-item is-active">
                        <a href="">
                          <span className="filter-sblock__check-icon" />
      S
</a>
                      </li>
                      <li className="filter-sblock__filter-item">
                        <a href="">
                          <span className="filter-sblock__check-icon" />
    M
</a>
                      </li>
                      <li className="filter-sblock__filter-item">
                        <a href="">
                          <span className="filter-sblock__check-icon" />
    L
</a>
                      </li>
                      <li className="filter-sblock__filter-item">
                        <a href="">
                          <span className="filter-sblock__check-icon" />
    XL
</a>
                      </li>
                      <li className="filter-sblock__filter-item">
                        <a href="">
                          <span className="filter-sblock__check-icon" />
    Lớn
</a>
                      </li>

                    </ul>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
        <div>
          <div className="navbar">

            <div className="dropdown">
              <button className="dropbtn">Đặc điểm
            <i className="fa fa-caret-down" />
              </button>
              <div className="dropdown-content">

                <div className="row" cols="10">

                  <div className="column">
                    <ul className="filter-sblock__filter-list">
                      <li className="filter-sblock__filter-item is-active">
                        <a href="">
                          <span className="filter-sblock__check-icon" />

                        </a>
                      </li>
                      <li className="filter-sblock__filter-item">
                        <a href="">
                          <span className="filter-sblock__check-icon" />

                        </a>
                      </li>
                      <li className="filter-sblock__filter-item">
                        <a href="">
                          <span className="filter-sblock__check-icon" />

                        </a>
                      </li>
                      <li className="filter-sblock__filter-item">
                        <a href="">
                          <span className="filter-sblock__check-icon" />

                        </a>
                      </li>

                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="navbar">

              <div className="dropdown">
                <button className="dropbtn">Xu hướng
            <i className="fa fa-caret-down" />
                </button>
                <div className="dropdown-content">

                  <div className="row" cols="10">

                    <div className="column">
                      <ul className="filter-sblock__filter-list">
                        <li className="filter-sblock__filter-item is-active">
                          <a href="">
                            <span className="filter-sblock__check-icon" />

                          </a>
                        </li>
                        <li className="filter-sblock__filter-item">
                          <a href="">
                            <span className="filter-sblock__check-icon" />

                          </a>
                        </li>
                        <li className="filter-sblock__filter-item">
                          <a href="">
                            <span className="filter-sblock__check-icon" />

                          </a>
                        </li>
                        <li className="filter-sblock__filter-item">
                          <a href="">
                            <span className="filter-sblock__check-icon" />

                          </a>
                        </li>

                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="navbar">

                <div className="dropdown">
                  <button className="dropbtn">Giá
            <i className="fa fa-caret-down" />
                  </button>
                  <div className="dropdown-content">

                    <div className="row" cols="10">

                      <div className="column">
                        <ul className="filter-sblock__filter-list">
                          <li className="filter-sblock__filter-item is-active">
                            <a href="">
                              <span className="filter-sblock__check-icon" />

                            </a>
                          </li>
                          <li className="filter-sblock__filter-item">
                            <a href="">
                              <span className="filter-sblock__check-icon" />

                            </a>
                          </li>
                          <li className="filter-sblock__filter-item">
                            <a href="">
                              <span className="filter-sblock__check-icon" />

                            </a>
                          </li>
                          <li className="filter-sblock__filter-item">
                            <a href="">
                              <span className="filter-sblock__check-icon" />

                            </a>
                          </li>

                        </ul>
                      </div>
                    </div>
                  </div>
                </div>



              </div>
              <div className="navbar">

                <div className="dropdown">
                  <button className="dropbtn">Nơi bán
            <i className="fa fa-caret-down" />
                  </button>
                  <div className="dropdown-content">

                    <div className="row" cols="10">

                      <div className="column">
                        <ul className="filter-sblock__filter-list">
                          <li className="filter-sblock__filter-item is-active">
                            <a href="">
                              <span className="filter-sblock__check-icon" />

                            </a>
                          </li>
                          <li className="filter-sblock__filter-item">
                            <a href="">
                              <span className="filter-sblock__check-icon" />

                            </a>
                          </li>
                          <li className="filter-sblock__filter-item">
                            <a href="">
                              <span className="filter-sblock__check-icon" />

                            </a>
                          </li>
                          <li className="filter-sblock__filter-item">
                            <a href="">
                              <span className="filter-sblock__check-icon" />

                            </a>
                          </li>

                        </ul>
                      </div>
                    </div>
                  </div>
                </div>



              </div>
            </div>



          </div>
        </div>
      </div>
    </div>
    <div className="index-col-group">
      <div className="index-col-right nopadding">
        <div className="col-sm product_single">
          <div className="product">
            <div className="product-title">
              <h4><a href="/">Máy lọc nước Kangaroo Hydrogen KG100HC vỏ tủ VTU</a></h4>
            </div>
            <div className="product-img">
              <img src="img/img_1.jpg" alt="" />
            </div>
            <div className="seft-flash">- 28%</div>
            <div className="product-price">
              <ins>8.290.000đ</ins>
              <del>11.500.000₫</del>
            </div>
            {/* <div class="product-overlay">
            <a href="">
              <i></i>
              <span>thêm vào giỏ</span>
            </a>
            <a href="">
                <i></i>
                <span>xem nhanh</span>
            </a>
          </div> */}
          </div>

        </div>
        <div className="col-sm product_single">
          <div className="product">
            <div className="product-title">
              <h4><a href="/">Máy lọc nước Kangaroo Hydrogen KG100HC vỏ tủ VTU</a></h4>
            </div>
            <div className="product-img">
              <img src="img/img_1.jpg" alt="" />
            </div>
            <div className="seft-flash">- 28%</div>
            <div className="product-price">
              <ins>8.290.000đ</ins>
              <del>11.500.000₫</del>
            </div>
            {/* <div class="product-overlay">
            <a href="">
              <i></i>
              <span>thêm vào giỏ</span>
            </a>
            <a href="">
                <i></i>
                <span>xem nhanh</span>
            </a>
          </div> */}
          </div>
        </div>
        <div className="col-sm product_single">
          <div className="product">
            <div className="product-title">
              <h4><a href="/">Máy lọc nước Kangaroo Hydrogen KG100HC vỏ tủ VTU</a></h4>
            </div>
            <div className="product-img">
              <img src="img/img_1.jpg" alt="" />
            </div>
            <div className="seft-flash">- 28%</div>
            <div className="product-price">
              <ins>8.290.000đ</ins>
              <del>11.500.000₫</del>
            </div>
            {/* <div class="product-overlay">
              <a href="">
                <i></i>
                <span>thêm vào giỏ</span>
              </a>
              <a href="">
                  <i></i>
                  <span>xem nhanh</span>
              </a>
            </div> */}
          </div>
        </div>
        <div className="col-sm product_single">
          <div className="product">
            <div className="product-title">
              <h4><a href="/">Máy lọc nước Kangaroo Hydrogen KG100HC vỏ tủ VTU</a></h4>
            </div>
            <div className="product-img">
              <img src="img/img_1.jpg" alt="" />
            </div>
            <div className="seft-flash">- 28%</div>
            <div className="product-price">
              <ins>8.290.000đ</ins>
              <del>11.500.000₫</del>
            </div>
            {/* <div class="product-overlay">
            <a href="">
              <i></i>
              <span>thêm vào giỏ</span>
            </a>
            <a href="">
                <i></i>
                <span>xem nhanh</span>
            </a>
          </div> */}
          </div>
        </div>
        <div className="col-sm product_single">
          <div className="product">
            <div className="product-title">
              <h4><a href="/">Máy lọc nước Kangaroo Hydrogen KG100HC vỏ tủ VTU</a></h4>
            </div>
            <div className="product-img">
              <img src="img/img_1.jpg" alt="" />
            </div>
            <div className="seft-flash">- 28%</div>
            <div className="product-price">
              <ins>8.290.000đ</ins>
              <del>11.500.000₫</del>
            </div>
            {/* <div class="product-overlay">
            <a href="">
              <i></i>
              <span>thêm vào giỏ</span>
            </a>
            <a href="">
                <i></i>
                <span>xem nhanh</span>
            </a>
          </div> */}
          </div>
        </div>
        <div className="col-sm product_single">
          <div className="product">
            <div className="product-title">
              <h4><a href="/">Máy lọc nước Kangaroo Hydrogen KG100HC vỏ tủ VTU</a></h4>
            </div>
            <div className="product-img">
              <img src="img/img_1.jpg" alt="" />
            </div>
            <div className="seft-flash">- 28%</div>
            <div className="product-price">
              <ins>8.290.000đ</ins>
              <del>11.500.000₫</del>
            </div>
            {/* <div class="product-overlay">
            <a href="">
              <i></i>
              <span>thêm vào giỏ</span>
            </a>
            <a href="">
                <i></i>
                <span>xem nhanh</span>
            </a>
          </div> */}
          </div>
        </div>
      </div>
    </div>
    <div className="index-col-group">
      <div className="index-col-right nopadding">
        <div className="col-sm product_single">
          <div className="product">
            <div className="product-title">
              <h4><a href="/">Máy lọc nước Kangaroo Hydrogen KG100HC vỏ tủ VTU</a></h4>
            </div>
            <div className="product-img">
              <img src="img/img_1.jpg" alt="" />
            </div>
            <div className="seft-flash">- 28%</div>
            <div className="product-price">
              <ins>8.290.000đ</ins>
              <del>11.500.000₫</del>
            </div>
            {/* <div class="product-overlay">
            <a href="">
              <i></i>
              <span>thêm vào giỏ</span>
            </a>
            <a href="">
                <i></i>
                <span>xem nhanh</span>
            </a>
          </div> */}
          </div>
        </div>
        <div className="col-sm product_single">
          <div className="product">
            <div className="product-title">
              <h4><a href="/">Máy lọc nước Kangaroo Hydrogen KG100HC vỏ tủ VTU</a></h4>
            </div>
            <div className="product-img">
              <img src="img/img_1.jpg" alt="" />
            </div>
            <div className="seft-flash">- 28%</div>
            <div className="product-price">
              <ins>8.290.000đ</ins>
              <del>11.500.000₫</del>
            </div>
            {/* <div class="product-overlay">
            <a href="">
              <i></i>
              <span>thêm vào giỏ</span>
            </a>
            <a href="">
                <i></i>
                <span>xem nhanh</span>
            </a>
          </div> */}
          </div>
        </div>
        <div className="col-sm product_single">
          <div className="product">
            <div className="product-title">
              <h4><a href="/">Máy lọc nước Kangaroo Hydrogen KG100HC vỏ tủ VTU</a></h4>
            </div>
            <div className="product-img">
              <img src="img/img_1.jpg" alt="" />
            </div>
            <div className="seft-flash">- 28%</div>
            <div className="product-price">
              <ins>8.290.000đ</ins>
              <del>11.500.000₫</del>
            </div>
            {/* <div class="product-overlay">
              <a href="">
                <i></i>
                <span>thêm vào giỏ</span>
              </a>
              <a href="">
                  <i></i>
                  <span>xem nhanh</span>
              </a>
            </div> */}
          </div>
        </div>
        <div className="col-sm product_single">
          <div className="product">
            <div className="product-title">
              <h4><a href="/">Máy lọc nước Kangaroo Hydrogen KG100HC vỏ tủ VTU</a></h4>
            </div>
            <div className="product-img">
              <img src="img/img_1.jpg" alt="" />
            </div>
            <div className="seft-flash">- 28%</div>
            <div className="product-price">
              <ins>8.290.000đ</ins>
              <del>11.500.000₫</del>
            </div>
            {/* <div class="product-overlay">
            <a href="">
              <i></i>
              <span>thêm vào giỏ</span>
            </a>
            <a href="">
                <i></i>
                <span>xem nhanh</span>
            </a>
          </div> */}
          </div>
        </div>
        <div className="col-sm product_single">
          <div className="product">
            <div className="product-title">
              <h4><a href="/">Máy lọc nước Kangaroo Hydrogen KG100HC vỏ tủ VTU</a></h4>
            </div>
            <div className="product-img">
              <img src="img/img_1.jpg" alt="" />
            </div>
            <div className="seft-flash">- 28%</div>
            <div className="product-price">
              <ins>8.290.000đ</ins>
              <del>11.500.000₫</del>
            </div>
            {/* <div class="product-overlay">
            <a href="">
              <i></i>
              <span>thêm vào giỏ</span>
            </a>
            <a href="">
                <i></i>
                <span>xem nhanh</span>
            </a>
          </div> */}
          </div>
        </div>
        <div className="col-sm product_single">
          <div className="product">
            <div className="product-title">
              <h4><a href="/">Máy lọc nước Kangaroo Hydrogen KG100HC vỏ tủ VTU</a></h4>
            </div>
            <div className="product-img">
              <img src="img/img_1.jpg" alt="" />
            </div>
            <div className="seft-flash">- 28%</div>
            <div className="product-price">
              <ins>8.290.000đ</ins>
              <del>11.500.000₫</del>
            </div>
            {/* <div class="product-overlay">
            <a href="">
              <i></i>
              <span>thêm vào giỏ</span>
            </a>
            <a href="">
                <i></i>
                <span>xem nhanh</span>
            </a>
          </div> */}
          </div>
        </div>
      </div>
    </div>



    <div className="index-col-group">
      <div className="index-col-right nopadding">
        <div className="col-sm product_single">
          <div className="product">
            <div className="product-title">
              <h4><a href="/">Máy lọc nước Kangaroo Hydrogen KG100HC vỏ tủ VTU</a></h4>
            </div>
            <div className="product-img">
              <img src="img/img_1.jpg" alt="" />
            </div>
            <div className="seft-flash">- 28%</div>
            <div className="product-price">
              <ins>8.290.000đ</ins>
              <del>11.500.000₫</del>
            </div>
            {/* <div class="product-overlay">
            <a href="">
              <i></i>
              <span>thêm vào giỏ</span>
            </a>
            <a href="">
                <i></i>
                <span>xem nhanh</span>
            </a>
          </div> */}
          </div>
        </div>
        <div className="col-sm product_single">
          <div className="product">
            <div className="product-title">
              <h4><a href="/">Máy lọc nước Kangaroo Hydrogen KG100HC vỏ tủ VTU</a></h4>
            </div>
            <div className="product-img">
              <img src="img/img_1.jpg" alt="" />
            </div>
            <div className="seft-flash">- 28%</div>
            <div className="product-price">
              <ins>8.290.000đ</ins>
              <del>11.500.000₫</del>
            </div>
            {/* <div class="product-overlay">
            <a href="">
              <i></i>
              <span>thêm vào giỏ</span>
            </a>
            <a href="">
                <i></i>
                <span>xem nhanh</span>
            </a>
          </div> */}
          </div>
        </div>
        <div className="col-sm product_single">
          <div className="product">
            <div className="product-title">
              <h4><a href="/">Máy lọc nước Kangaroo Hydrogen KG100HC vỏ tủ VTU</a></h4>
            </div>
            <div className="product-img">
              <img src="img/img_1.jpg" alt="" />
            </div>
            <div className="seft-flash">- 28%</div>
            <div className="product-price">
              <ins>8.290.000đ</ins>
              <del>11.500.000₫</del>
            </div>
            {/* <div class="product-overlay">
              <a href="">
                <i></i>
                <span>thêm vào giỏ</span>
              </a>
              <a href="">
                  <i></i>
                  <span>xem nhanh</span>
              </a>
            </div> */}
          </div>
        </div>
        <div className="col-sm product_single">
          <div className="product">
            <div className="product-title">
              <h4><a href="/">Máy lọc nước Kangaroo Hydrogen KG100HC vỏ tủ VTU</a></h4>
            </div>
            <div className="product-img">
              <img src="img/img_1.jpg" alt="" />
            </div>
            <div className="seft-flash">- 28%</div>
            <div className="product-price">
              <ins>8.290.000đ</ins>
              <del>11.500.000₫</del>
            </div>
            {/* <div class="product-overlay">
            <a href="">
              <i></i>
              <span>thêm vào giỏ</span>
            </a>
            <a href="">
                <i></i>
                <span>xem nhanh</span>
            </a>
          </div> */}
          </div>
        </div>
        <div className="col-sm product_single">
          <div className="product">
            <div className="product-title">
              <h4><a href="/">Máy lọc nước Kangaroo Hydrogen KG100HC vỏ tủ VTU</a></h4>
            </div>
            <div className="product-img">
              <img src="img/img_1.jpg" alt="" />
            </div>
            <div className="seft-flash">- 28%</div>
            <div className="product-price">
              <ins>8.290.000đ</ins>
              <del>11.500.000₫</del>
            </div>
            {/* <div class="product-overlay">
            <a href="">
              <i></i>
              <span>thêm vào giỏ</span>
            </a>
            <a href="">
                <i></i>
                <span>xem nhanh</span>
            </a>
          </div> */}
          </div>
        </div>
        <div className="col-sm product_single">
          <div className="product">
            <div className="product-title">
              <h4><a href="/">Máy lọc nước Kangaroo Hydrogen KG100HC vỏ tủ VTU</a></h4>
            </div>
            <div className="product-img">
              <img src="img/img_1.jpg" alt="" />
            </div>
            <div className="seft-flash">- 28%</div>
            <div className="product-price">
              <ins>8.290.000đ</ins>
              <del>11.500.000₫</del>
            </div>
            {/* <div class="product-overlay">
            <a href="">
              <i></i>
              <span>thêm vào giỏ</span>
            </a>
            <a href="">
                <i></i>
                <span>xem nhanh</span>
            </a>
          </div> */}
          </div>
        </div>
      </div>
    </div>



    <div className="index-col-group">
      <div className="index-col-right nopadding">
        <div className="col-sm product_single">
          <div className="product">
            <div className="product-title">
              <h4><a href="/">Máy lọc nước Kangaroo Hydrogen KG100HC vỏ tủ VTU</a></h4>
            </div>
            <div className="product-img">
              <img src="img/img_1.jpg" alt="" />
            </div>
            <div className="seft-flash">- 28%</div>
            <div className="product-price">
              <ins>8.290.000đ</ins>
              <del>11.500.000₫</del>
            </div>
            {/* <div class="product-overlay">
            <a href="">
              <i></i>
              <span>thêm vào giỏ</span>
            </a>
            <a href="">
                <i></i>
                <span>xem nhanh</span>
            </a>
          </div> */}
          </div>
        </div>
        <div className="col-sm product_single">
          <div className="product">
            <div className="product-title">
              <h4><a href="/">Máy lọc nước Kangaroo Hydrogen KG100HC vỏ tủ VTU</a></h4>
            </div>
            <div className="product-img">
              <img src="img/img_1.jpg" alt="" />
            </div>
            <div className="seft-flash">- 28%</div>
            <div className="product-price">
              <ins>8.290.000đ</ins>
              <del>11.500.000₫</del>
            </div>
            {/* <div class="product-overlay">
            <a href="">
              <i></i>
              <span>thêm vào giỏ</span>
            </a>
            <a href="">
                <i></i>
                <span>xem nhanh</span>
            </a>
          </div> */}
          </div>
        </div>
        <div className="col-sm product_single">
          <div className="product">
            <div className="product-title">
              <h4><a href="/">Máy lọc nước Kangaroo Hydrogen KG100HC vỏ tủ VTU</a></h4>
            </div>
            <div className="product-img">
              <img src="img/img_1.jpg" alt="" />
            </div>
            <div className="seft-flash">- 28%</div>
            <div className="product-price">
              <ins>8.290.000đ</ins>
              <del>11.500.000₫</del>
            </div>
            {/* <div class="product-overlay">
              <a href="">
                <i></i>
                <span>thêm vào giỏ</span>
              </a>
              <a href="">
                  <i></i>
                  <span>xem nhanh</span>
              </a>
            </div> */}
          </div>
        </div>
        <div className="col-sm product_single">
          <div className="product">
            <div className="product-title">
              <h4><a href="/">Máy lọc nước Kangaroo Hydrogen KG100HC vỏ tủ VTU</a></h4>
            </div>
            <div className="product-img">
              <img src="img/img_1.jpg" alt="" />
            </div>
            <div className="seft-flash">- 28%</div>
            <div className="product-price">
              <ins>8.290.000đ</ins>
              <del>11.500.000₫</del>
            </div>
            {/* <div class="product-overlay">
            <a href="">
              <i></i>
              <span>thêm vào giỏ</span>
            </a>
            <a href="">
                <i></i>
                <span>xem nhanh</span>
            </a>
          </div> */}
          </div>
        </div>
        <div className="col-sm product_single">
          <div className="product">
            <div className="product-title">
              <h4><a href="/">Máy lọc nước Kangaroo Hydrogen KG100HC vỏ tủ VTU</a></h4>
            </div>
            <div className="product-img">
              <img src="img/img_1.jpg" alt="" />
            </div>
            <div className="seft-flash">- 28%</div>
            <div className="product-price">
              <ins>8.290.000đ</ins>
              <del>11.500.000₫</del>
            </div>
            {/* <div class="product-overlay">
            <a href="">
              <i></i>
              <span>thêm vào giỏ</span>
            </a>
            <a href="">
                <i></i>
                <span>xem nhanh</span>
            </a>
          </div> */}
          </div>
        </div>
        <div className="col-sm product_single">
          <div className="product">
            <div className="product-title">
              <h4><a href="/">Máy lọc nước Kangaroo Hydrogen KG100HC vỏ tủ VTU</a></h4>
            </div>
            <div className="product-img">
              <img src="img/img_1.jpg" alt="" />
            </div>
            <div className="seft-flash">- 28%</div>
            <div className="product-price">
              <ins>8.290.000đ</ins>
              <del>11.500.000₫</del>
            </div>
            {/* <div class="product-overlay">
            <a href="">
              <i></i>
              <span>thêm vào giỏ</span>
            </a>
            <a href="">
                <i></i>
                <span>xem nhanh</span>
            </a>
          </div> */}
          </div>
        </div>
      </div>
    </div>




  </div>
</div>
        </div>
    )
}

export default Body
