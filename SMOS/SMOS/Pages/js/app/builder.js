$(document).ready(function () {
    //build navbar
    $("nav").html(buildNav(getPrefix()));
    //build footer
    $("footer").html(buildFooter(getPrefix()));
});

function buildNav(prefix) {
    return `<!-- navbar desktop content-->
    <div class="navbar-custom parent hiddenformobile">
        <!-- navbar logo -->
        <div class="navbar-desktop-child-logo">
            <a href="` + prefix + `index.html">
                <img class="navbar-desktop-logo logo" src="` + prefix + `img/logo.png">
            </a>
        </div>
        <!-- navbar searchfield & links -->
        <div class="navbar-desktop-flex-column">
            <!-- navbar searchfield -->
            <div class="navbar-desktop-child-search">
                <!-- navbar input -->
                <input class="navbar-desktop-input" type="search" placeholder="Search" aria-label="Search">
                <!-- navbar input button -->
                <button class="navbar-search-button" type="submit">
                    <i class="fa fa-search"></i>
                </button>
            </div>
            <!-- navbar links -->
            <div class="navbar-desktop-child-links">
                <!-- navbar links left & right -->
                <div class="parent navbar-spacebetween">
                    <!-- navbar links left-->
                    <div class="flex">
                        <!-- navbar dropdown products-->
                        <div class="dropdown">
                            <!-- navbar dropdown button -->
                            <button class="clean-button normal-colors">
                                <a href="` + prefix + `pages/products.html"><span>Products</span></a>
                                <i class="fa fa-caret-down"></i>
                            </button>
                            <!-- navbar dropdown menu -->
                            <div class="dropdown_menu left dropdown_menu--animated navbar-dropdown_menu">
                                <div class="navbar-dropdown-parent">
                                    <!-- navbar dropdown menu box -->
                                    <div class="navbar-dropdown-child">
                                        <a href="` + prefix + `pages/products.html"><div class="navbar-dropdown-all">All</div></a> 
                                        <a href="` + prefix + `pages/t-shirt.html"><div>T-Shirt</div></a>
                                        <a href="` + prefix + `pages/hoodie.html"><div>Hoodie</div></a>
                                        <a href="` + prefix + `pages/mousepad.html"><div>Mousepad</div></a>
                                        <a href="` + prefix + `pages/cap.html"><div>Cap</div></a>
                                        <a href="` + prefix + `pages/mug.html"><div>Mug</div></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- navbar Voting-->
                        <div>
                            <!-- navbar button -->
                            <button class="clean-button normal-colors">
                                <a href="`+prefix +`pages/voting.html">Voting</a>
                            </button>
                            
                        </div>
                    </div>
                    <!-- navbar links right -->
                    <div class="flex">
                        <!-- navbar dropdown themes-->
                        <div class="dropdown">
                            <!-- navbar dropdown button -->
                            <button class="clean-button normal-colors">
                                <span>Themes</span>
                                <i class="fa fa-caret-down"></i>
                            </button>
                            <!-- navbar dropdown menu -->
                            <div class="dropdown_menu right dropdown_menu--animated navbar-dropdown_menu">
                                <div class="navbar-dropdown-parent">
                                    <div class="flex-wrap text-align-center">
                                        <!-- navbar dropdown menu box -->
                                        <button class="theme-button theme-dark"">Dark</button>
                                        <button class="theme-button theme-light">Light</button>
                                        <button class="theme-button theme-hacker">Hacker</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- navbar other -->
        <div class="navbar-desktop-child-other">
            <button class="clean-button normal-colors" type="submit">
                <a href="` + prefix + `pages/cart.html">
                    <i class="fa fa-shopping-cart"></i>
                </a>
            </button>
            <button class="clean-button normal-colors" type="submit">
                <a href="` + prefix + `pages/login.html">
                    <i class="fa fa-user"></i>
                </a>
            </button>
        </div>
    </div>
    <!-- navbar mobile content-->
    <div class="navbar-custom parent navbar-spacebetween hiddenfordesktop">
        <!-- navbar left -->
        <div class="navbar-mobile-child-left">
            <!-- navbar dropdownmenu -->
            <div class="dropdown height100">
                <!-- navbar dropdown button -->
                <button class="navbar-mobile-dropdown-button" type="submit">
                    <i class="fa fa-bars"></i>
                </button>
                <!-- navbar dropdown menu -->
                <div class="dropdown_menu_mobile dropdown_menu--animated navbar-dropdown_menu">
                    <!-- navbar dropdown menu box -->
                    <div class="navbar-dropdown-mobile-parent">
                        <!-- navbar dropdown menu search -->
                        <div class="navbar-dropdown-mobile-search">
                            <!-- navbar searchfield -->
                            <div class="navbar-desktop-child-search">
                                <!-- navbar input -->
                                <input class="navbar-mobile-input" type="search" placeholder="Search"
                                    aria-label="Search">
                                <!-- navbar input button -->
                                <button class="navbar-search-button" type="submit">
                                    <i class="fa fa-search"></i>
                                </button>
                            </div>
                        </div>
                        <!-- navbar dropdown menu links -->
                        <div class="navbar-dropdown-mobile-links">
                            <!-- navbar links left & right -->
                            <div class="parent navbar-spacebetween">
                                <!-- navbar links left-->
                                <div class="flex">
                                    <!-- navbar dropdown products-->
                                    <div class="dropdown">
                                        <!-- navbar dropdown button -->
                                        <button class="clean-button normal-colors">
                                            <span>Products</span>
                                            <i class="fa fa-caret-down"></i>
                                        </button>
                                        <!-- navbar dropdown menu -->
                                        <div class="dropdown_menu left dropdown_menu--animated navbar-dropdown_menu">
                                            <div class="navbar-dropdown-parent">
                                                <!-- navbar dropdown menu box -->
                                                <div class="navbar-dropdown-child">
                                                    <a href="` + prefix + `pages/products.html"><div class="navbar-dropdown-all">All</div></a> 
                                                    <a href="` + prefix + `pages/t-shirt.html"><div>T-Shirt</div></a>
                                                    <a href="` + prefix + `pages/hoodie.html"><div>Hoodie</div></a>
                                                    <a href="` + prefix + `pages/mousepad.html"><div>Mousepad</div></a>
                                                    <a href="` + prefix + `pages/cap.html"><div>Cap</div></a>
                                                    <a href="` + prefix + `pages/mug.html"><div>Mug</div></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- navbar Voting-->
                                    <div>
                                        <!-- navbar button -->
                                        <button class="clean-button normal-colors">
                                            <a href="\`+prefix +\`pages/voting.html">Voting</a>
                                        </button>
                                        
                                    </div>
                                </div>
                                <!-- navbar links right -->
                                <div class="flex">
                                    <!-- navbar dropdown themes-->
                                    <div class="dropdown">
                                        <!-- navbar dropdown button -->
                                        <button class="clean-button normal-colors">
                                            <span>Themes</span>
                                            <i class="fa fa-caret-down"></i>
                                        </button>
                                        <!-- navbar dropdown menu -->
                                        <div class="dropdown_menu right dropdown_menu--animated navbar-dropdown_menu">
                                            <div class="navbar-dropdown-parent">
                                                <div class="flex-wrap text-align-center">
                                                    <!-- navbar dropdown menu box -->
                                                    <button class="theme-button theme-dark">Dark</button>
                                                    <button class="theme-button theme-light">Light</button>
                                                    <button
                                                        class="theme-button theme-hacker">Hacker</button>
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
        </div>
        <!-- navbar logo -->
        <div class="navbar-mobile-child-logo">
            <a href="` + prefix + `index.html">
                <img class="navbar-mobile-logo logo" src="` + prefix + `img/logo.png">
            </a>
        </div>
        <!-- navbar other -->
        <div class="navbar-mobile-child-right">
            <div class="navbar-mobile-child-right-buttons height100 relative">
                <button class="clean-button normal-colors navbar-mobile-right-buttons" type="submit">
                    <a href="` + prefix + `pages/cart.html">
                        <i class="fa fa-shopping-cart"></i>
                    </a>
                </button>
                <button class="clean-button normal-colors navbar-mobile-right-buttons" type="submit">
                    <a href="` + prefix + `pages/login.html">
                        <i class="fa fa-user"></i>
                    </a>
                </button>
            </div>
        </div>
    </div>`
}

function buildFooter(prefix){
    return `<div class="footer">
    <div class="footer-container">
      <div class="footer-row">
        <div class="footer-col">
          <h4>follow us</h4>
          <div class="footer-follow">
            <svg class="svg" aria-hidden="true" focusable="false" role="presentation"
              xmlns="http://www.w3.org/2000/svg" viewBox="00.5 0 28 28">
              <path fill="currentColor" fill-rule="evenodd"
                d="M11.114 7.042c-.745.034-1.254.152-1.7.326-.46.178-.85.418-1.24.807-.388.389-.628.78-.806 1.24-.174.445-.292.954-.326 1.699C7.008 11.86 7 12.099 7 14c0 1.901.008 2.14.042 2.886.034.745.152 1.254.326 1.7.178.46.418.85.807 1.24.389.388.78.628 1.24.807.445.173.954.29 1.699.325.747.034.985.042 2.886.042 1.901 0 2.14-.008 2.886-.042.745-.034 1.254-.152 1.7-.325.46-.18.85-.419 1.24-.808.388-.389.628-.78.807-1.24.173-.445.29-.954.325-1.699.034-.747.042-.985.042-2.886 0-1.901-.008-2.14-.042-2.886-.034-.745-.152-1.254-.325-1.7a3.432 3.432 0 0 0-.808-1.24c-.389-.388-.78-.628-1.24-.806-.445-.174-.954-.292-1.699-.326C16.14 7.008 15.901 7 14 7c-1.901 0-2.14.008-2.886.042zM10.405 14a3.595 3.595 0 1 0 7.19 0 3.595 3.595 0 0 0-7.19 0zM14 16.333a2.333 2.333 0 1 1 0-4.666 2.333 2.333 0 0 1 0 4.666zm4.9-6.323a.84.84 0 1 1-1.68 0 .84.84 0 0 1 1.68 0z">
              </path>
            </svg>
            <svg class="svg" aria-hidden="true" focusable="false" role="presentation"
              xmlns="http://www.w3.org/2000/svg" viewBox="-14 -16 82 82">
              <path fill="currentColor" fill-rule="evenodd"
                d="M41 4H9C6.243 4 4 6.243 4 9v32c0 2.757 2.243 5 5 5h32c2.757 0 5-2.243 5-5V9c0-2.757-2.243-5-5-5m-3.994 18.323a7.482 7.482 0 0 1-.69.035 7.492 7.492 0 0 1-6.269-3.388v11.537a8.527 8.527 0 1 1-8.527-8.527c.178 0 .352.016.527.027v4.202c-.175-.021-.347-.053-.527-.053a4.351 4.351 0 1 0 0 8.704c2.404 0 4.527-1.894 4.527-4.298l.042-19.594h4.02a7.488 7.488 0 0 0 6.901 6.685v4.67"
                clip-rule="evenodd"></path>
            </svg>
            <svg class="svg" aria-hidden="true" focusable="false" role="presentation"
              xmlns="http://www.w3.org/2000/svg" viewBox="-10 -11 46 46">
              <path fill="currentColor" fill-rule="evenodd"
                d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-3 7h-1.924c-.615 0-1.076.252-1.076.889v1.111h3l-.238 3h-2.762v8h-3v-8h-2v-3h2v-1.923c0-2.022 1.064-3.077 3.461-3.077h2.539v3z">
              </path>
            </svg>

          </div>
        </div>
        <div class="footer-col">
          <h4>Our company</h4>
          <ul class="footer-ul">
            <li><a href="` + prefix + `pages/aboutus.html">About MOS</a></li>
            <li><a href="` + prefix + `pages/.html">Our Services</a></li>
            <li><a href="` + prefix + `pages/.html">Privacy Policy</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>get help</h4>
          <ul class="footer-ul">
            <li><a href="` + prefix + `pages/.html">FAQ</a></li>
            <li><a href="` + prefix + `pages/.html">Shipping</a></li>
            <li><a href="` + prefix + `pages/.html">Returns</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Payment</h4>
          <ul class="footer-ul">
            <svg class="svg" viewBox="0 0 38 24" xmlns="http://www.w3.org/2000/svg" role="img"
              aria-labelledby="pi-maestro">
              <title id="pi-maestro">Maestro</title>
              <path opacity=".07"
                d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z">
              </path>
              <path fill="#fff" d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32">
              </path>
              <circle fill="#EB001B" cx="15" cy="12" r="7"></circle>
              <circle fill="#00A2E5" cx="23" cy="12" r="7"></circle>
              <path fill="#7375CF"
                d="M22 12c0-2.4-1.2-4.5-3-5.7-1.8 1.3-3 3.4-3 5.7s1.2 4.5 3 5.7c1.8-1.2 3-3.3 3-5.7z"></path>
            </svg>
            <svg class="svg" viewBox="0 0 38 24" xmlns="http://www.w3.org/2000/svg" role="img"
              aria-labelledby="pi-master">
              <title id="pi-master">Mastercard</title>
              <path opacity=".07"
                d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z">
              </path>
              <path fill="#fff" d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32">
              </path>
              <circle fill="#EB001B" cx="15" cy="12" r="7"></circle>
              <circle fill="#F79E1B" cx="23" cy="12" r="7"></circle>
              <path fill="#FF5F00"
                d="M22 12c0-2.4-1.2-4.5-3-5.7-1.8 1.3-3 3.4-3 5.7s1.2 4.5 3 5.7c1.8-1.2 3-3.3 3-5.7z"></path>
            </svg>
            <svg class="svg" viewBox="0 0 38 24" xmlns="http://www.w3.org/2000/svg" role="img"
              aria-labelledby="pi-paypal">
              <title id="pi-paypal">PayPal</title>
              <path opacity=".07"
                d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z">
              </path>
              <path fill="#fff" d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32">
              </path>
              <path fill="#003087"
                d="M23.9 8.3c.2-1 0-1.7-.6-2.3-.6-.7-1.7-1-3.1-1h-4.1c-.3 0-.5.2-.6.5L14 15.6c0 .2.1.4.3.4H17l.4-3.4 1.8-2.2 4.7-2.1z">
              </path>
              <path fill="#3086C8"
                d="M23.9 8.3l-.2.2c-.5 2.8-2.2 3.8-4.6 3.8H18c-.3 0-.5.2-.6.5l-.6 3.9-.2 1c0 .2.1.4.3.4H19c.3 0 .5-.2.5-.4v-.1l.4-2.4v-.1c0-.2.3-.4.5-.4h.3c2.1 0 3.7-.8 4.1-3.2.2-1 .1-1.8-.4-2.4-.1-.5-.3-.7-.5-.8z">
              </path>
              <path fill="#012169"
                d="M23.3 8.1c-.1-.1-.2-.1-.3-.1-.1 0-.2 0-.3-.1-.3-.1-.7-.1-1.1-.1h-3c-.1 0-.2 0-.2.1-.2.1-.3.2-.3.4l-.7 4.4v.1c0-.3.3-.5.6-.5h1.3c2.5 0 4.1-1 4.6-3.8v-.2c-.1-.1-.3-.2-.5-.2h-.1z">
              </path>
            </svg>
            <svg class="svg" version="1.1" xmlns="http://www.w3.org/2000/svg" role="img" x="0" y="0"
              viewBox="0 0 165.521 105.965" xml:space="preserve" aria-labelledby="pi-apple_pay">
              <title id="pi-apple_pay">Apple Pay</title>
              <path fill="#000"
                d="M150.698 0H14.823c-.566 0-1.133 0-1.698.003-.477.004-.953.009-1.43.022-1.039.028-2.087.09-3.113.274a10.51 10.51 0 0 0-2.958.975 9.932 9.932 0 0 0-4.35 4.35 10.463 10.463 0 0 0-.975 2.96C.113 9.611.052 10.658.024 11.696a70.22 70.22 0 0 0-.022 1.43C0 13.69 0 14.256 0 14.823v76.318c0 .567 0 1.132.002 1.699.003.476.009.953.022 1.43.028 1.036.09 2.084.275 3.11a10.46 10.46 0 0 0 .974 2.96 9.897 9.897 0 0 0 1.83 2.52 9.874 9.874 0 0 0 2.52 1.83c.947.483 1.917.79 2.96.977 1.025.183 2.073.245 3.112.273.477.011.953.017 1.43.02.565.004 1.132.004 1.698.004h135.875c.565 0 1.132 0 1.697-.004.476-.002.952-.009 1.431-.02 1.037-.028 2.085-.09 3.113-.273a10.478 10.478 0 0 0 2.958-.977 9.955 9.955 0 0 0 4.35-4.35c.483-.947.789-1.917.974-2.96.186-1.026.246-2.074.274-3.11.013-.477.02-.954.022-1.43.004-.567.004-1.132.004-1.699V14.824c0-.567 0-1.133-.004-1.699a63.067 63.067 0 0 0-.022-1.429c-.028-1.038-.088-2.085-.274-3.112a10.4 10.4 0 0 0-.974-2.96 9.94 9.94 0 0 0-4.35-4.35A10.52 10.52 0 0 0 156.939.3c-1.028-.185-2.076-.246-3.113-.274a71.417 71.417 0 0 0-1.431-.022C151.83 0 151.263 0 150.698 0z">
              </path>
              <path fill="#FFF"
                d="M150.698 3.532l1.672.003c.452.003.905.008 1.36.02.793.022 1.719.065 2.583.22.75.135 1.38.34 1.984.648a6.392 6.392 0 0 1 2.804 2.807c.306.6.51 1.226.645 1.983.154.854.197 1.783.218 2.58.013.45.019.9.02 1.36.005.557.005 1.113.005 1.671v76.318c0 .558 0 1.114-.004 1.682-.002.45-.008.9-.02 1.35-.022.796-.065 1.725-.221 2.589a6.855 6.855 0 0 1-.645 1.975 6.397 6.397 0 0 1-2.808 2.807c-.6.306-1.228.511-1.971.645-.881.157-1.847.2-2.574.22-.457.01-.912.017-1.379.019-.555.004-1.113.004-1.669.004H14.801c-.55 0-1.1 0-1.66-.004a74.993 74.993 0 0 1-1.35-.018c-.744-.02-1.71-.064-2.584-.22a6.938 6.938 0 0 1-1.986-.65 6.337 6.337 0 0 1-1.622-1.18 6.355 6.355 0 0 1-1.178-1.623 6.935 6.935 0 0 1-.646-1.985c-.156-.863-.2-1.788-.22-2.578a66.088 66.088 0 0 1-.02-1.355l-.003-1.327V14.474l.002-1.325a66.7 66.7 0 0 1 .02-1.357c.022-.792.065-1.717.222-2.587a6.924 6.924 0 0 1 .646-1.981c.304-.598.7-1.144 1.18-1.623a6.386 6.386 0 0 1 1.624-1.18 6.96 6.96 0 0 1 1.98-.646c.865-.155 1.792-.198 2.586-.22.452-.012.905-.017 1.354-.02l1.677-.003h135.875">
              </path>
              <g>
                <g>
                  <path fill="#000"
                    d="M43.508 35.77c1.404-1.755 2.356-4.112 2.105-6.52-2.054.102-4.56 1.355-6.012 3.112-1.303 1.504-2.456 3.959-2.156 6.266 2.306.2 4.61-1.152 6.063-2.858">
                  </path>
                  <path fill="#000"
                    d="M45.587 39.079c-3.35-.2-6.196 1.9-7.795 1.9-1.6 0-4.049-1.8-6.698-1.751-3.447.05-6.645 2-8.395 5.1-3.598 6.2-.95 15.4 2.55 20.45 1.699 2.5 3.747 5.25 6.445 5.151 2.55-.1 3.549-1.65 6.647-1.65 3.097 0 3.997 1.65 6.696 1.6 2.798-.05 4.548-2.5 6.247-5 1.95-2.85 2.747-5.6 2.797-5.75-.05-.05-5.396-2.101-5.446-8.251-.05-5.15 4.198-7.6 4.398-7.751-2.399-3.548-6.147-3.948-7.447-4.048">
                  </path>
                </g>
                <g>
                  <path fill="#000"
                    d="M78.973 32.11c7.278 0 12.347 5.017 12.347 12.321 0 7.33-5.173 12.373-12.529 12.373h-8.058V69.62h-5.822V32.11h14.062zm-8.24 19.807h6.68c5.07 0 7.954-2.729 7.954-7.46 0-4.73-2.885-7.434-7.928-7.434h-6.706v14.894z">
                  </path>
                  <path fill="#000"
                    d="M92.764 61.847c0-4.809 3.665-7.564 10.423-7.98l7.252-.442v-2.08c0-3.04-2.001-4.704-5.562-4.704-2.938 0-5.07 1.507-5.51 3.82h-5.252c.157-4.86 4.731-8.395 10.918-8.395 6.654 0 10.995 3.483 10.995 8.89v18.663h-5.38v-4.497h-.13c-1.534 2.937-4.914 4.782-8.579 4.782-5.406 0-9.175-3.222-9.175-8.057zm17.675-2.417v-2.106l-6.472.416c-3.64.234-5.536 1.585-5.536 3.95 0 2.288 1.975 3.77 5.068 3.77 3.95 0 6.94-2.522 6.94-6.03z">
                  </path>
                  <path fill="#000"
                    d="M120.975 79.652v-4.496c.364.051 1.247.103 1.715.103 2.573 0 4.029-1.09 4.913-3.899l.52-1.663-9.852-27.293h6.082l6.863 22.146h.13l6.862-22.146h5.927l-10.216 28.67c-2.34 6.577-5.017 8.735-10.683 8.735-.442 0-1.872-.052-2.261-.157z">
                  </path>
                </g>
              </g>
            </svg>
            <svg class="svg" viewBox="0 0 38 24" xmlns="http://www.w3.org/2000/svg" role="img"
              aria-labelledby="pi-visa">
              <title id="pi-visa">Visa</title>
              <path opacity=".07"
                d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z">
              </path>
              <path fill="#fff" d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32">
              </path>
              <path
                d="M28.3 10.1H28c-.4 1-.7 1.5-1 3h1.9c-.3-1.5-.3-2.2-.6-3zm2.9 5.9h-1.7c-.1 0-.1 0-.2-.1l-.2-.9-.1-.2h-2.4c-.1 0-.2 0-.2.2l-.3.9c0 .1-.1.1-.1.1h-2.1l.2-.5L27 8.7c0-.5.3-.7.8-.7h1.5c.1 0 .2 0 .2.2l1.4 6.5c.1.4.2.7.2 1.1.1.1.1.1.1.2zm-13.4-.3l.4-1.8c.1 0 .2.1.2.1.7.3 1.4.5 2.1.4.2 0 .5-.1.7-.2.5-.2.5-.7.1-1.1-.2-.2-.5-.3-.8-.5-.4-.2-.8-.4-1.1-.7-1.2-1-.8-2.4-.1-3.1.6-.4.9-.8 1.7-.8 1.2 0 2.5 0 3.1.2h.1c-.1.6-.2 1.1-.4 1.7-.5-.2-1-.4-1.5-.4-.3 0-.6 0-.9.1-.2 0-.3.1-.4.2-.2.2-.2.5 0 .7l.5.4c.4.2.8.4 1.1.6.5.3 1 .8 1.1 1.4.2.9-.1 1.7-.9 2.3-.5.4-.7.6-1.4.6-1.4 0-2.5.1-3.4-.2-.1.2-.1.2-.2.1zm-3.5.3c.1-.7.1-.7.2-1 .5-2.2 1-4.5 1.4-6.7.1-.2.1-.3.3-.3H18c-.2 1.2-.4 2.1-.7 3.2-.3 1.5-.6 3-1 4.5 0 .2-.1.2-.3.2M5 8.2c0-.1.2-.2.3-.2h3.4c.5 0 .9.3 1 .8l.9 4.4c0 .1 0 .1.1.2 0-.1.1-.1.1-.1l2.1-5.1c-.1-.1 0-.2.1-.2h2.1c0 .1 0 .1-.1.2l-3.1 7.3c-.1.2-.1.3-.2.4-.1.1-.3 0-.5 0H9.7c-.1 0-.2 0-.2-.2L7.9 9.5c-.2-.2-.5-.5-.9-.6-.6-.3-1.7-.5-1.9-.5L5 8.2z"
                fill="#142688"></path>
            </svg>
            <svg class="svg" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 38 24"
              aria-labelledby="pi-eps">
              <title id="pi-eps">EPS</title>
              <path d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z"
                opacity=".07">
              </path>
              <path d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32" fill="#fff">
              </path>
              <path fill="#71706f"
                d="M27.745 12.32h-2.322a.465.465 0 01-.468-.464c0-.258.21-.484.468-.484h3.535V9.628h-3.535c-1.233 0-2.237 1.006-2.237 2.236s1.004 2.237 2.237 2.237h2.29c.259 0 .469.205.469.462 0 .258-.21.448-.468.448h-4.912c-.417.796-.822 1.478-1.645 1.82h6.588c1.213-.018 2.205-1.045 2.205-2.265 0-1.22-.992-2.23-2.205-2.247z">
              </path>
              <path fill="#71706f"
                d="M18.845 9.628c-1.968 0-3.571 1.612-3.571 3.594V20.697h1.782V16.83h1.785c1.968 0 3.565-1.634 3.565-3.615 0-1.98-1.593-3.587-3.561-3.587zm0 5.383h-1.79v-1.796c0-1.003.8-1.82 1.79-1.82s1.796.817 1.796 1.82a1.79 1.79 0 01-1.796 1.796z">
              </path>
              <path fill="#c8036f"
                d="M9.634 16.83c-1.685 0-3.101-1.2-3.484-2.768 0 0-.111-.519-.111-.86 0-.342.105-.865.105-.865a3.594 3.594 0 013.482-2.73c1.978 0 3.6 1.608 3.6 3.586v.87H7.973c.31.607.938.948 1.662.948h4.724l.006-5.13c0-.764-.625-1.39-1.39-1.39H6.278c-.764 0-1.39.607-1.39 1.371v6.696c0 .765.626 1.41 1.39 1.41h6.696c.686 0 1.259-.493 1.37-1.138h-4.71z">
              </path>
              <path fill="#c8036f"
                d="M9.626 11.31c-.72 0-1.348.44-1.66 1.01h3.32c-.312-.57-.939-1.01-1.66-1.01zM12.659 6.314c0-1.635-1.359-2.96-3.034-2.96-1.647 0-2.987 1.282-3.031 2.879v.91c0 .106.086.21.195.21h1.116c.11 0 .205-.104.205-.21v-.83c0-.815.68-1.48 1.516-1.48.837 0 1.516.665 1.516 1.48v.83c0 .106.089.21.198.21h1.116c.109 0 .202-.104.202-.21v-.83z">
              </path>
              <g>
                <path fill="#71706f"
                  d="M20.843 19.142l-.16.914c-.082.462-.384.673-.794.673-.347 0-.616-.226-.538-.672l.161-.914h.249l-.161.913c-.05.285.078.447.32.447.249 0 .462-.148.513-.446l.161-.915h.25zm-.977-.285c0 .076.059.112.121.112.079 0 .164-.057.164-.162 0-.074-.05-.112-.114-.112-.08 0-.17.052-.17.162zm.538-.003c0 .079.06.114.126.114.07 0 .161-.056.161-.159 0-.074-.054-.114-.114-.114-.08 0-.173.052-.173.16zM21.445 19.142l-.112.632a.57.57 0 01.423-.199c.278 0 .47.163.47.465 0 .428-.297.686-.678.686-.148 0-.274-.055-.35-.194l-.042.165h-.218l.276-1.554h.23zm-.175 1.066c-.01.183.11.302.282.302a.444.444 0 00.441-.423c.01-.186-.111-.296-.28-.296a.45.45 0 00-.443.417zM22.68 20.242c-.01.151.11.275.311.275.112 0 .26-.044.34-.12l.126.145a.782.782 0 01-.508.188c-.319 0-.505-.19-.505-.482 0-.388.305-.677.695-.677.356 0 .558.216.437.67h-.896zm.708-.19c.018-.19-.094-.267-.28-.267-.168 0-.323.078-.39.267h.67zM24.193 19.597l-.012.146a.414.414 0 01.357-.17c.107 0 .204.039.255.095l-.139.201a.244.244 0 00-.183-.067.346.346 0 00-.352.3l-.106.595h-.23l.195-1.1h.215zM25.905 19.597l.116.87.422-.87h.257l-.578 1.1h-.27l-.11-.725-.178.36-.192.365h-.27l-.194-1.1h.26l.114.87.424-.87h.199zM26.997 20.242c-.01.151.11.275.311.275.112 0 .26-.044.34-.12l.126.145a.782.782 0 01-.508.188c-.319 0-.505-.19-.505-.482 0-.388.305-.677.695-.677.356 0 .558.216.437.67h-.896zm.708-.19c.018-.19-.094-.267-.28-.267-.168 0-.323.078-.39.267h.67zM28.525 19.597l-.194 1.1H28.1l.195-1.1h.23zm-.204-.3c0 .08.059.12.121.12.09 0 .173-.059.173-.168a.113.113 0 00-.117-.117c-.082 0-.177.054-.177.166zM29.55 19.87c-.072-.081-.164-.104-.274-.104-.152 0-.26.052-.26.148 0 .08.088.114.218.126.201.017.459.085.405.37-.038.205-.244.326-.53.326-.18 0-.353-.04-.47-.204l.151-.163c.083.114.229.161.358.164.11 0 .24-.04.26-.144.02-.098-.067-.136-.228-.152-.188-.018-.394-.087-.394-.296 0-.276.298-.372.522-.372.17 0 .295.038.399.148l-.157.152zM30.278 19.597l-.105.592c-.034.189.051.319.244.319.181 0 .336-.15.367-.334l.101-.576h.231l-.195 1.099h-.208l.015-.16a.573.573 0 01-.412.182c-.271 0-.432-.194-.374-.528l.105-.593h.231zM32.13 20.697l.105-.589c.033-.19-.032-.317-.242-.317-.184 0-.339.148-.37.33l-.1.576h-.232l.195-1.1h.21l-.015.16a.583.583 0 01.403-.176c.27 0 .444.187.384.525l-.106.59h-.233zM32.912 20.848c-.016.152.1.213.296.213.17 0 .354-.095.396-.337l.034-.189c-.1.142-.285.197-.421.197-.283 0-.48-.168-.48-.473 0-.434.323-.685.688-.685.155 0 .294.073.343.199l.038-.176h.224l-.193 1.132c-.071.42-.383.55-.668.55-.34 0-.528-.165-.481-.43h.224zm.065-.633c0 .188.123.302.3.302.477 0 .605-.733.128-.733a.42.42 0 00-.428.43z">
                </path>
              </g>
            </svg>
            <svg class="svg" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 38 24"
              aria-labelledby="pi-google_pay">
              <title id="pi-google_pay">Google Pay</title>
              <path d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z" fill="#000"
                opacity=".07"></path>
              <path d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32" fill="#FFF">
              </path>
              <path
                d="M18.093 11.976v3.2h-1.018v-7.9h2.691a2.447 2.447 0 0 1 1.747.692 2.28 2.28 0 0 1 .11 3.224l-.11.116c-.47.447-1.098.69-1.747.674l-1.673-.006zm0-3.732v2.788h1.698c.377.012.741-.135 1.005-.404a1.391 1.391 0 0 0-1.005-2.354l-1.698-.03zm6.484 1.348c.65-.03 1.286.188 1.778.613.445.43.682 1.03.65 1.649v3.334h-.969v-.766h-.049a1.93 1.93 0 0 1-1.673.931 2.17 2.17 0 0 1-1.496-.533 1.667 1.667 0 0 1-.613-1.324 1.606 1.606 0 0 1 .613-1.336 2.746 2.746 0 0 1 1.698-.515c.517-.02 1.03.093 1.49.331v-.208a1.134 1.134 0 0 0-.417-.901 1.416 1.416 0 0 0-.98-.368 1.545 1.545 0 0 0-1.319.717l-.895-.564a2.488 2.488 0 0 1 2.182-1.06zM23.29 13.52a.79.79 0 0 0 .337.662c.223.176.5.269.785.263.429-.001.84-.17 1.146-.472.305-.286.478-.685.478-1.103a2.047 2.047 0 0 0-1.324-.374 1.716 1.716 0 0 0-1.03.294.883.883 0 0 0-.392.73zm9.286-3.75l-3.39 7.79h-1.048l1.281-2.728-2.224-5.062h1.103l1.612 3.885 1.569-3.885h1.097z"
                fill="#5F6368"></path>
              <path
                d="M13.986 11.284c0-.308-.024-.616-.073-.92h-4.29v1.747h2.451a2.096 2.096 0 0 1-.9 1.373v1.134h1.464a4.433 4.433 0 0 0 1.348-3.334z"
                fill="#4285F4"></path>
              <path
                d="M9.629 15.721a4.352 4.352 0 0 0 3.01-1.097l-1.466-1.14a2.752 2.752 0 0 1-4.094-1.44H5.577v1.17a4.53 4.53 0 0 0 4.052 2.507z"
                fill="#34A853"></path>
              <path d="M7.079 12.05a2.709 2.709 0 0 1 0-1.735v-1.17H5.577a4.505 4.505 0 0 0 0 4.075l1.502-1.17z"
                fill="#FBBC04"></path>
              <path
                d="M9.629 8.44a2.452 2.452 0 0 1 1.74.68l1.3-1.293a4.37 4.37 0 0 0-3.065-1.183 4.53 4.53 0 0 0-4.027 2.5l1.502 1.171a2.715 2.715 0 0 1 2.55-1.875z"
                fill="#EA4335"></path>
            </svg>
            <svg class="svg" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 38 24"
              aria-labelledby="pi-sofort">
              <title id="pi-sofort">SOFORT</title>
              <g fill="none" fill-rule="evenodd">
                <rect width="38" height="24" fill="#EB6F93" fill-rule="nonzero" rx="3"></rect>
                <path fill="#FFF"
                  d="M11.804 21.453c-.57 0-1.062-.264-1.362-.672l.564-.57c.168.216.444.45.81.45.342 0 .576-.204.576-.528 0-.348-.276-.432-.714-.558-.804-.234-1.128-.654-1.128-1.194 0-.678.516-1.266 1.332-1.266.516 0 .99.24 1.2.708l-.678.426c-.126-.21-.306-.348-.546-.348-.282 0-.462.192-.462.438 0 .294.258.384.672.504.648.192 1.176.516 1.176 1.26 0 .804-.624 1.35-1.44 1.35zm3.298 0c-.864 0-1.566-.69-1.566-1.53 0-.84.702-1.53 1.566-1.53.864 0 1.566.69 1.566 1.53 0 .84-.702 1.53-1.566 1.53zm0-.768c.42 0 .75-.33.75-.762a.745.745 0 0 0-.75-.762c-.42 0-.75.33-.75.762s.33.762.75.762zm3.586-2.742c-.456-.018-.786.21-.786.714v.312c.18-.192.438-.288.762-.288v.78c-.45.012-.762.3-.762.702v1.212h-.816v-2.76c0-.78.486-1.44 1.482-1.44h.12v.768zm1.78 3.51c-.864 0-1.566-.69-1.566-1.53 0-.84.702-1.53 1.566-1.53.864 0 1.566.69 1.566 1.53 0 .84-.702 1.53-1.566 1.53zm0-.768c.42 0 .75-.33.75-.762a.745.745 0 0 0-.75-.762c-.42 0-.75.33-.75.762s.33.762.75.762zm2.8-1.884c.162-.264.426-.39.798-.378v.876c-.492 0-.774.27-.774.75v1.326h-.816v-2.904h.792v.33zm2.08 1.092c0 .504.33.732.786.714v.768h-.12c-.996 0-1.482-.66-1.482-1.44v-2.4h.816v.456c0 .396.318.69.762.702v.78c-.324 0-.582-.096-.762-.288v.708zm1.762 1.53a.548.548 0 0 1-.546-.546c0-.3.246-.546.546-.546.3 0 .546.246.546.546 0 .3-.246.546-.546.546zm-7.772-6.71c2.55-.004 3.628-1.459 3.824-3.789.056-.67-.056-1.079-.258-1.295a.486.486 0 0 0-.153-.114.23.23 0 0 0-.06-.018l-3.023-.706a1.276 1.276 0 0 0-.581-.02.57.57 0 0 0-.46.431c-.101.34-.094.6.121.807.056.02.101.057.132.104.15.1.362.186.648.264l1.993.445c.33.074.23.57-.104.507a1.76 1.76 0 0 0-.86.083c-.487.183-.789.601-.826 1.377a.259.259 0 0 1-.518-.026c.042-.855.376-1.421.915-1.722l-.724-.161a3.181 3.181 0 0 1-.635-.24c-.083.128-.192.24-.321.33l-.057.037c-.035.024-.071.045-.107.065.23.434.167.983-.191 1.355l-.05.054a1.17 1.17 0 0 1-1.65.022l-.388-.384c.318 1.553 1.702 2.593 3.32 2.593h.013zm-.09.516c-2.05-.037-3.773-1.547-3.828-3.69l-.471-.466c-.582-.584-.676-1.393-.208-1.873l.05-.053c.2-.207.464-.32.733-.334-.325-.641-.224-1.343.282-1.69l.072-.047c.55-.319 1.028-.196 1.437.21l-.47-3.865c-.158-.672.254-1.408.882-1.542a1.233 1.233 0 0 1 1.464.958l.801 3.42 1.015-3.476a1.285 1.285 0 0 1 1.565-.911c.617.183.989.811.854 1.436l-1.118 5.57.48.112c.14.02.322.103.494.287.313.334.464.886.396 1.692-.217 2.59-1.493 4.288-4.413 4.263l-.017-.001zm2.556-6.47L22.918 3.2a.711.711 0 0 0-.484-.832.767.767 0 0 0-.928.55l-1.292 4.427a.26.26 0 0 1-.433.108.258.258 0 0 1-.07-.124l-1.026-4.384a.713.713 0 0 0-.85-.56c-.334.07-.584.523-.483.926l.005.031.583 4.79.37.552c.16-.22.39-.358.664-.419a1.773 1.773 0 0 1 .824.024l2.006.468zm-3.726.51l-.572-.852a.258.258 0 0 1-.053-.079l-.262-.39c-.334-.486-.658-.654-1.04-.433l-.055.037c-.297.204-.338.698-.028 1.167l1.132 1.685a.651.651 0 0 0 .902.173l.056-.037a.64.64 0 0 0 .19-.205c-.282-.293-.35-.655-.27-1.067zm-.324 1.937a1.17 1.17 0 0 1-.983-.512l-.842-1.253a.587.587 0 0 0-.765.065l-.05.053c-.252.259-.196.75.2 1.147l1.44 1.427a.65.65 0 0 0 .915-.012l.05-.052a.65.65 0 0 0 .035-.863z">
                </path>
              </g>
            </svg>
            <svg class="svg" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 38 24"
              aria-labelledby="pi-klarna">
              <title id="pi-klarna">Klarna</title>
              <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <path d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z"
                  fill="#FFB3C7"></path>
                <path d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32" fill="#FFB3C7">
                </path>
                <path
                  d="M34.117 13.184c-.487 0-.882.4-.882.892 0 .493.395.893.882.893.488 0 .883-.4.883-.893a.888.888 0 00-.883-.892zm-2.903-.69c0-.676-.57-1.223-1.274-1.223-.704 0-1.274.547-1.274 1.222 0 .675.57 1.223 1.274 1.223.704 0 1.274-.548 1.274-1.223zm.005-2.376h1.406v4.75h-1.406v-.303a2.446 2.446 0 01-1.394.435c-1.369 0-2.478-1.122-2.478-2.507 0-1.384 1.11-2.506 2.478-2.506.517 0 .996.16 1.394.435v-.304zm-11.253.619v-.619h-1.44v4.75h1.443v-2.217c0-.749.802-1.15 1.359-1.15h.016v-1.382c-.57 0-1.096.247-1.378.618zm-3.586 1.756c0-.675-.57-1.222-1.274-1.222-.703 0-1.274.547-1.274 1.222 0 .675.57 1.223 1.274 1.223.704 0 1.274-.548 1.274-1.223zm.005-2.375h1.406v4.75h-1.406v-.303A2.446 2.446 0 0114.99 15c-1.368 0-2.478-1.122-2.478-2.507 0-1.384 1.11-2.506 2.478-2.506.517 0 .997.16 1.394.435v-.304zm8.463-.128c-.561 0-1.093.177-1.448.663v-.535H22v4.75h1.417v-2.496c0-.722.479-1.076 1.055-1.076.618 0 .973.374.973 1.066v2.507h1.405v-3.021c0-1.106-.87-1.858-2.002-1.858zM10.465 14.87h1.472V8h-1.472v6.868zM4 14.87h1.558V8H4v6.87zM9.45 8a5.497 5.497 0 01-1.593 3.9l2.154 2.97H8.086l-2.341-3.228.604-.458A3.96 3.96 0 007.926 8H9.45z"
                  fill="#0A0B09" fill-rule="nonzero"></path>
              </g>
            </svg>

          </ul>
        </div>

      </div>
    </div>
  </div>`;
}