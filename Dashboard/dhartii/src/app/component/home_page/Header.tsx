'use client'
import Link from 'next/link'
import { useState, useRef, useEffect } from 'react'
import menuData from '../../constent/menuData.json'

function Header() {
  const [isSidebar, SetIsSidebar] = useState(false)
  const [isSubMenuActive, setIsSubMenuActive] = useState(false);
  const [openMenu, setOpenMenu] = useState('')
  const menuActiveRef = useRef<HTMLDivElement>(null);

  const handleHamburger =()=>{
    SetIsSidebar(!isSidebar)
  }

  const handleMenuItemClick = (name:string) => {
    setIsSubMenuActive(!isSubMenuActive);
    setOpenMenu(name)
  };

  const closeSubMenu =()=>{
    setIsSubMenuActive(!isSubMenuActive);
    setOpenMenu('')
  }

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (isSidebar && menuActiveRef.current && !menuActiveRef.current.contains(event.target)) {
        SetIsSidebar(false);
      }
    };
  
    document.addEventListener('click', handleClickOutside);
  
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isSidebar]);

  return (
    <header className="site-header">

  <div className="main-navbar">
    <nav className="navbar navbar-expand-lg bg-white">
      <div className="container-fluid">
        <div className="collapse navbar-collapse show" id="main-navlinks">
          <div className="custom_header">
            <div className="row v-center row-reverse11 ">
              <div className="custom_header-item item-left">
                <div className={`menu-overlay ${isSidebar ? 'active':''}`} />
                <nav className={`menu ${isSidebar ? 'active':''}`} ref={menuActiveRef}>
                  <div className={`mobile-menu-head ${isSubMenuActive ? 'active':''}`}>
                    <div className="go-back" onClick={closeSubMenu}>
                      <i className="fa fa-angle-left" />
                    </div>
                    <div className="current-menu-title" >{openMenu}</div>
                    <div className="mobile-menu-close" onClick={handleHamburger}>×</div>
                  </div>
                  <ul className="menu-main">
                    <li className="menu-item-has-children" onClick={()=> !isSubMenuActive && handleMenuItemClick('Men')}>
                      <Link href="#">
                        Men <i className="fa fa-angle-down" />
                      </Link>
                      <div className={`sub-menu mega-menu mega-menu-column-4 ${openMenu =='Men' ? 'active' : ''}`} style={{animation: "0.5s ease 0s 1 normal forwards running slideLeft"}}>
                        <div className="menu-title-div">
                          <h4 className="title menu-main-h">
                            <Link href="product-category/men">Men</Link>
                          </h4>
                        </div>{" "}
                        <div className="list-item">
                          <h4 className="title m-0">
                            <Link href="product-category/men/ethnic">
                              Ethnic Wear
                            </Link>
                          </h4>
                          <ul>
                            <li>
                              <Link href="product-category/men/ethnic/blazers-ethnic">
                                Blazers
                              </Link>
                            </li>
                            <li>
                              <Link href="product-category/men/ethnic/indo-western-ethnic">
                                Indo-western
                              </Link>
                            </li>
                            <li>
                              <Link href="product-category/men/ethnic/kurtas-kurtas-set">
                                Kurtas &amp; Kurtas Set
                              </Link>
                            </li>
                            <li>
                              <Link href="product-category/men/ethnic/nehru-jackets">
                                Nehru Jackets
                              </Link>
                            </li>
                            <li>
                              <Link href="product-category/men/ethnic/pants-ethnic">
                                Pants
                              </Link>
                            </li>
                            <li>
                              <Link href="product-category/men/ethnic/suits-ethnic">
                                Suits
                              </Link>
                            </li>{" "}
                          </ul>
                        </div>
                        <div className="list-item">
                          <h4 className="title m-0">
                            <Link href="product-category/men/western">
                              Western Wear
                            </Link>
                          </h4>
                          <ul>
                            <li>
                              <Link href="product-category/men/western/blazers">
                                Blazers
                              </Link>
                            </li>
                            <li>
                              <Link href="product-category/men/western/co-ords-sets">
                                Co-Ords Sets
                              </Link>
                            </li>
                            <li>
                              <Link href="product-category/men/western/jackets-coats">
                                Jackets &amp; Coats
                              </Link>
                            </li>
                            <li>
                              <Link href="product-category/men/western/pants">
                                Pants
                              </Link>
                            </li>
                            <li>
                              <Link href="product-category/men/western/shirts">
                                Shirts
                              </Link>
                            </li>
                            <li>
                              <Link href="product-category/men/western/sweaters-sweatshirts">
                                Sweaters &amp; Sweatshirts
                              </Link>
                            </li>
                            <li>
                              <Link href="product-category/men/western/t-shirts">
                                T-Shirts
                              </Link>
                            </li>
                            <li>
                              <Link href="product-category/men/western/swim-wear">
                                Swim Wear
                              </Link>
                            </li>
                            <li>
                              <Link href="product-category/men/western/shorts">
                                Shorts
                              </Link>
                            </li>{" "}
                          </ul>
                        </div>
                        <div className="list-item">
                          <img
                            src="https://dhartii.in/wp-content/uploads/2024/02/Menu-card.jpg"
                            alt="Chair"
                          />
                        </div>
                      </div>
                    </li>
                    <li className="menu-item-has-children" onClick={()=> !isSubMenuActive && handleMenuItemClick('Women')}>
                      <Link href="#">
                        Women <i className="fa fa-angle-down" />
                      </Link>
                      <div className={`sub-menu mega-menu mega-menu-column-4 ${openMenu =='Women' ? 'active' : ''}`}>
                        <div className="menu-title-div">
                          <h4 className="title menu-main-h">
                            <Link href="product-category/women">
                              Women
                            </Link>
                          </h4>
                        </div>{" "}
                        <div className="list-item">
                          <h4 className="title m-0">
                            <Link href="product-category/women/western-wear">
                              Western Wear
                            </Link>
                          </h4>
                          <ul>
                            <li>
                              <Link href="product-category/women/ethnic-wear/co-ords-sets-ethnic-wear">
                                Co-ords Sets
                              </Link>
                            </li>
                            <li>
                              <Link href="product-category/women/western-wear/dresses">
                                Dresses
                              </Link>
                            </li>
                            <li>
                              <Link href="product-category/women/western-wear/tops-t-shirts">
                                Tops &amp; T-shirts
                              </Link>
                            </li>
                            <li>
                              <Link href="product-category/women/western-wear/jumpsuits">
                                Jumpsuits
                              </Link>
                            </li>
                            <li>
                              <Link href="product-category/women/western-wear/pants-western-wear">
                                Pants
                              </Link>
                            </li>
                            <li>
                              <Link href="product-category/women/western-wear/resort-wear">
                                Resort Wear
                              </Link>
                            </li>
                            <li>
                              <Link href="product-category/women/western-wear/shirts-western-wear">
                                Shirts
                              </Link>
                            </li>
                            <li>
                              <Link href="product-category/women/western-wear/shorts-western-wear">
                                Shorts
                              </Link>
                            </li>
                            <li>
                              <Link href="product-category/women/western-wear/skirts">
                                Skirts
                              </Link>
                            </li>
                            <li>
                              <Link href="product-category/women/western-wear/swim-wear-western-wear">
                                Swim Wear
                              </Link>
                            </li>
                            <li>
                              <Link href="product-category/women/western-wear/sweatshirts-jackets">
                                Sweatshirts &amp; Jackets
                              </Link>
                            </li>
                            <li>
                              <Link href="product-category/women/western-wear/lingerie-western-wear">
                                Lingerie
                              </Link>
                            </li>{" "}
                          </ul>
                        </div>
                        <div className="list-item">
                          <h4 className="title m-0">
                            <Link href="product-category/women/ethnic-wear">
                              Ethnic Wear
                            </Link>
                          </h4>
                          <ul>
                            <li>
                              <Link href="product-category/women/ethnic-wear/saree">
                                Saree
                              </Link>
                            </li>
                            <li>
                              <Link href="product-category/women/ethnic-wear/palazzos">
                                Palazzos
                              </Link>
                            </li>
                            <li>
                              <Link href="product-category/women/ethnic-wear/lehenga-sets">
                                Lehenga Sets
                              </Link>
                            </li>
                            <li>
                              <Link href="product-category/women/ethnic-wear/kurtas-kurtas-set-ethnic-wear">
                                Kurtas &amp; Kurtas Set
                              </Link>
                            </li>
                            <li>
                              <Link href="product-category/women/ethnic-wear/kaftan-sets">
                                Kaftan Sets
                              </Link>
                            </li>
                            <li>
                              <Link href="product-category/women/ethnic-wear/indo-western">
                                Indo-western
                              </Link>
                            </li>
                            <li>
                              <Link href="product-category/women/ethnic-wear/dupattas">
                                Dupattas
                              </Link>
                            </li>
                            <li>
                              <Link href="product-category/women/ethnic-wear/dresses-ethnic-wear">
                                Dresses
                              </Link>
                            </li>
                            <li>
                              <Link href="product-category/women/ethnic-wear/co-ords-sets-ethnic-wear">
                                Co-ords Sets
                              </Link>
                            </li>
                            <li>
                              <Link href="product-category/women/ethnic-wear/blouses">
                                Blouses
                              </Link>
                            </li>
                            <li>
                              <Link href="product-category/women/ethnic-wear/shararas">
                                Shararas
                              </Link>
                            </li>{" "}
                          </ul>
                        </div>
                        <div className="list-item">
                          <img
                            src="https://dhartii.in/wp-content/uploads/2024/02/Menu-card.jpg"
                            alt="Chair"
                          />
                        </div>
                      </div>
                    </li>
                    <li className="menu-item-has-children" onClick={()=> !isSubMenuActive && handleMenuItemClick('Kids')}>
                      <Link href="#">
                        Kids <i className="fa fa-angle-down" />
                      </Link>
                      <div className={`sub-menu mega-menu mega-menu-column-4 ${openMenu =='Kids' ? 'active' : ''}`}>
                        <div className="menu-title-div">
                          <h4 className="title menu-main-h">
                            <Link href="product-category/kids">Kids</Link>
                          </h4>
                        </div>{" "}
                        <div className="list-item">
                          <h4 className="title m-0">
                            <Link href="product-category/kids/boys">
                              Boys
                            </Link>
                          </h4>
                          <ul>
                            <li>
                              <Link href="product-category/kids/boys/kurta-sets-boys">
                                Kurta Sets
                              </Link>
                            </li>
                            <li>
                              <Link href="product-category/kids/boys/pants-boys">
                                Pants
                              </Link>
                            </li>
                            <li>
                              <Link href="product-category/kids/boys/shirts-boys">
                                Shirts
                              </Link>
                            </li>
                            <li>
                              <Link href="product-category/kids/boys/shorts-boys">
                                Shorts
                              </Link>
                            </li>
                            <li>
                              <Link href="product-category/kids/boys/swim-wear-boys">
                                Swim Wear
                              </Link>
                            </li>{" "}
                          </ul>
                        </div>
                        <div className="list-item">
                          <h4 className="title m-0">
                            <Link href="product-category/kids/girls">
                              Girls
                            </Link>
                          </h4>
                          <ul>
                            <li>
                              <Link href="product-category/kids/girls/dresses-girls">
                                Dresses
                              </Link>
                            </li>
                            <li>
                              <Link href="product-category/kids/girls/jumpsuits-girls">
                                Jumpsuits
                              </Link>
                            </li>
                            <li>
                              <Link href="product-category/kids/girls/kurta-sets">
                                Kurta Sets
                              </Link>
                            </li>
                            <li>
                              <Link href="product-category/kids/girls/lehenga-sets-girls">
                                Lehenga Sets
                              </Link>
                            </li>
                            <li>
                              <Link href="product-category/kids/girls/pants-girls">
                                Pants
                              </Link>
                            </li>
                            <li>
                              <Link href="product-category/kids/girls/shirts-girls">
                                Shirts
                              </Link>
                            </li>
                            <li>
                              <Link href="product-category/kids/girls/shorts-girls">
                                Shorts
                              </Link>
                            </li>
                            <li>
                              <Link href="product-category/kids/girls/skirts-girls">
                                Skirts
                              </Link>
                            </li>
                            <li>
                              <Link href="product-category/kids/girls/swim-wear-girls">
                                Swim Wear
                              </Link>
                            </li>
                            <li>
                              <Link href="product-category/kids/girls/lingerie">
                                Lingerie
                              </Link>
                            </li>{" "}
                          </ul>
                        </div>
                        <div className="list-item">
                          <img
                            src="https://dhartii.in/wp-content/uploads/2024/02/Menu-card.jpg"
                            alt="Chair"
                          />
                        </div>
                      </div>
                    </li>
                    <li className="menu-item-has-children" onClick={()=> !isSubMenuActive && handleMenuItemClick('Accessories')}>
                      <Link href="#">
                        Accessories <i className="fa fa-angle-down" />
                      </Link>
                      <div className={`sub-menu mega-menu mega-menu-column-4 ${openMenu =='Accessories' ? 'active' : ''}`}>
                        <div className="menu-title-div">
                          <h4 className="title menu-main-h">
                            <Link href="product-category/accessories">
                              Accessories
                            </Link>
                          </h4>
                        </div>{" "}
                        <div className="list-item">
                          <h4 className="title m-0">
                            <Link href="product-category/accessories/bags">
                              Bags
                            </Link>
                          </h4>
                          <ul>
                            <li>
                              <Link href="product-category/accessories/bags/clutch">
                                Clutch
                              </Link>
                            </li>
                            <li>
                              <Link href="product-category/accessories/bags/handbags">
                                Handbags
                              </Link>
                            </li>
                            <li>
                              <Link href="product-category/accessories/bags/sling">
                                Sling
                              </Link>
                            </li>
                            <li>
                              <Link href="product-category/accessories/bags/tote">
                                Tote
                              </Link>
                            </li>{" "}
                          </ul>
                        </div>
                        <div className="list-item">
                          <h4 className="title m-0">
                            <Link href="product-category/accessories/jewelry">
                              Jewelry
                            </Link>
                          </h4>
                          <ul>
                            <li>
                              <Link href="product-category/accessories/jewelry/bracelets">
                                Bracelets
                              </Link>
                            </li>
                            <li>
                              <Link href="product-category/accessories/jewelry/necklace">
                                Bangles &amp; Cuffs
                              </Link>
                            </li>
                            <li>
                              <Link href="product-category/accessories/jewelry/chains">
                                Chains
                              </Link>
                            </li>
                            <li>
                              <Link href="product-category/accessories/jewelry/earrings">
                                Earrings
                              </Link>
                            </li>
                            <li>
                              <Link href="product-category/accessories/jewelry/necklace-jewelry">
                                Necklace
                              </Link>
                            </li>
                            <li>
                              <Link href="product-category/accessories/jewelry/rings">
                                Rings
                              </Link>
                            </li>{" "}
                          </ul>
                        </div>
                        <div className="list-item">
                          <img
                            src="https://dhartii.in/wp-content/uploads/2024/02/Menu-card.jpg"
                            alt="Chair"
                          />
                        </div>
                      </div>
                    </li>
                  </ul>
                </nav>
                <div className="mobile-menu-trigger" onClick={handleHamburger}>
                  <span />
                </div>
              </div>

              {/* ----------- */}
              {/* <div className="custom_header-item item-left">
      <div className={`menu-overlay ${isSidebar ? 'active' : ''}`} />
      <nav className={`menu ${isSidebar ? 'active' : ''}`} ref={menuActiveRef}>
        <div className={`mobile-menu-head ${isSubMenuActive ? 'active' : ''}`}>
          <div className="go-back" onClick={closeSubMenu}>
            <i className="fa fa-angle-left" />
          </div>
          <div className="current-menu-title">{openMenu}</div>
          <div className="mobile-menu-close" onClick={handleHamburger}>×</div>
        </div>
        <ul className="menu-main">
          {menuData.menuItems.map((menuItem, index) => (
            <li key={index} className="menu-item-has-children" onClick={() => !isSubMenuActive && handleMenuItemClick(menuItem.title)}>
              <Link href="#">
                {menuItem.title} <i className="fa fa-angle-down" />
              </Link>
              <div className={`sub-menu mega-menu mega-menu-column-4 ${openMenu === menuItem.title ? 'active' : ''}`} style={{ animation: "0.5s ease 0s 1 normal forwards running slideLeft" }}>
                {menuItem.subMenu.map((subMenuItem, subIndex) => (
                  
                  <div key={subIndex} className="list-item">
                    <h4 className="title m-0">
                      <Link href={subMenuItem.items[0].link}>{subMenuItem.title}</Link>
                    </h4>
                    <ul>
                      {subMenuItem.items.map((item, itemIndex) => (
                        <li key={itemIndex}>
                          <Link href={item.link}>{item.title}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </li>
          ))}
        </ul>
      </nav>
      <div className="mobile-menu-trigger" onClick={handleHamburger}>
        <span />
      </div>
    </div> */}

              {/* --------------- */}

              <div className="custom_header-item item-center">
                <div className="logo">
                  <Link className="header-logo" href="index.html">
                    <img
                      className="img-fluid mx-auto d-block"
                      src="https://dhartii.in/wp-content/uploads/2023/05/logo.png"
                      alt=""
                    />
                  </Link>
                </div>
              </div>
              <div className="item-search search-btn-ds">
                <div className="dgwt-wcas-search-wrapp dgwt-wcas-has-submit woocommerce dgwt-wcas-style-pirx js-dgwt-wcas-layout-classic dgwt-wcas-layout-classic js-dgwt-wcas-mobile-overlay-enabled">
                  <form
                    className="dgwt-wcas-search-form"
                    role="search"
                    action="https://dhartii.in/"
                    method="get"
                  >
                    <div className="dgwt-wcas-sf-wrapp">
                      <label
                        className="screen-reader-text"
                        htmlFor="dgwt-wcas-search-input-1"
                      >
                        Products search
                      </label>
                      <input
                        id="dgwt-wcas-search-input-1"
                        type="search"
                        className="dgwt-wcas-search-input"
                        name="s"
                        defaultValue=""
                        placeholder="Search for products..."
                        autoComplete="off"
                      />
                      <div className="dgwt-wcas-preloader" />
                      <div className="dgwt-wcas-voice-search" />
                      <button
                        type="submit"
                        aria-label="Search"
                        className="dgwt-wcas-search-submit"
                      >
                        {" "}
                        <svg
                          className="dgwt-wcas-ico-magnifier"
                          xmlns="http://www.w3.org/2000/svg"
                          width={18}
                          height={18}
                          viewBox="0 0 18 18"
                        >
                          <path
                            d=" M 16.722523,17.901412 C 16.572585,17.825208 15.36088,16.670476 14.029846,15.33534 L 11.609782,12.907819 11.01926,13.29667 C 8.7613237,14.783493 5.6172703,14.768302 3.332423,13.259528 -0.07366363,11.010358 -1.0146502,6.5989684 1.1898146,3.2148776
						  1.5505179,2.6611594 2.4056498,1.7447266 2.9644271,1.3130497 3.4423015,0.94387379 4.3921825,0.48568469 5.1732652,0.2475835 5.886299,0.03022609 6.1341883,0 7.2037391,0 8.2732897,0 8.521179,0.03022609 9.234213,0.2475835 c 0.781083,0.23810119 1.730962,0.69629029 2.208837,1.0654662
						  0.532501,0.4113763 1.39922,1.3400096 1.760153,1.8858877 1.520655,2.2998531 1.599025,5.3023778 0.199549,7.6451086 -0.208076,0.348322 -0.393306,0.668209 -0.411622,0.710863 -0.01831,0.04265 1.065556,1.18264 2.408603,2.533307 1.343046,1.350666 2.486621,2.574792 2.541278,2.720279 0.282475,0.7519
						  -0.503089,1.456506 -1.218488,1.092917 z M 8.4027892,12.475062 C 9.434946,12.25579 10.131043,11.855461 10.99416,10.984753 11.554519,10.419467 11.842507,10.042366 12.062078,9.5863882 12.794223,8.0659672 12.793657,6.2652398 12.060578,4.756293 11.680383,3.9737304 10.453587,2.7178427
						  9.730569,2.3710306 8.6921295,1.8729196 8.3992147,1.807606 7.2037567,1.807606 6.0082984,1.807606 5.7153841,1.87292 4.6769446,2.3710306 3.9539263,2.7178427 2.7271301,3.9737304 2.3469352,4.756293 1.6138384,6.2652398 1.6132726,8.0659672 2.3454252,9.5863882 c 0.4167354,0.8654208 1.5978784,2.0575608
						  2.4443766,2.4671358 1.0971012,0.530827 2.3890403,0.681561 3.6130134,0.421538 z
					"
                          />
                        </svg>
                      </button>
                      <input
                        type="hidden"
                        name="post_type"
                        defaultValue="product"
                      />
                      <input type="hidden" name="dgwt_wcas" defaultValue={1} />
                    </div>
                  </form>
                </div>
              </div>
              <div className="brand-header position-absolute top-3 end-0 other_menu_fit ">
                <div
                  className="brand-header-in position-relative cust_nav_dash"
                  style={{ zIndex: 5 }}
                >
                  <div className="container-xl p-0 py-sm-0">
                    <div className="row float-end justify-content-between align-items-center">
                      <div className="other_menu d-md-inline-flex">
                        <div className="p-0 order-sm-3">
                          <div className="account-options text-end">
                            <Link
                              className="account-opt-items search-btn d-block d-md-none"
                              href=""
                            >
                              <img
                                src="https://dhartii.in/wp-content/themes/dhaarti/images/search-icon.svg"
                                alt="search"
                              />
                            </Link>
                            <Link
                              className="account-opt-items search-btn-d  d-none d-md-block"
                              style={{ marginRight: 0 }}
                              href=""
                            >
                              <img
                                src="https://dhartii.in/wp-content/themes/dhaarti/images/search-icon.svg"
                                alt="search"
                              />
                            </Link>
                            <Link
                              className="account-option heart account-opt-items d-none d-md-block"
                              href="wishlist"
                            >
                              <img
                                src="https://dhartii.in/wp-content/uploads/2024/02/dhartii-wish-lff.png"
                                alt=""
                              />
                              <span className="wcount count">0</span>
                            </Link>
                            <Link
                              className="account-opt-items d-none d-md-block"
                              href="my-account"
                            >
                              <img
                                src="https://dhartii.in/wp-content/themes/dhaarti/images/user-icon.svg"
                                alt="user"
                              />
                            </Link>
                            <Link
                              className="account-opt-items"
                              href="cart"
                            >
                              <img
                                src="https://dhartii.in/wp-content/themes/dhaarti/images/bag-icon.svg"
                                alt="bag"
                              />
                              <span className="count">
                                <div className="header-cart-count">0 </div>
                              </span>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* custom_header end */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
</header>

  )
}

export default Header