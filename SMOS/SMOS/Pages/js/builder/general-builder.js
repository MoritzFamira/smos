$(document).ready(function () {
    //build navbar
    $("nav").html(buildNav(getPrefix()));
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
                                        <a href="` + prefix + `pages/products.html"><div class="underline">All</div></a> 
                                        <a href="` + prefix + `pages/t-shirt.html"><div>T-Shirt</div></a>
                                        <a href="` + prefix + `pages/hoodie.html"><div>Hoodie</div></a>
                                        <a href="` + prefix + `pages/mousepad.html"><div>Mousepad</div></a>
                                        <a href="` + prefix + `pages/cap.html"><div>Cap</div></a>
                                        <a href="` + prefix + `pages/mug.html"><div>Mug</div></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- navbar dropdown Voting-->
                        <div class="dropdown">
                            <!-- navbar dropdown button -->
                            <button class="clean-button normal-colors">
                                <span>Voting</span>
                                <i class="fa fa-caret-down"></i>
                            </button>
                            <!-- navbar dropdown menu -->
                            <div class="dropdown_menu left dropdown_menu--animated navbar-dropdown_menu">
                                <div class="navbar-dropdown-parent">
                                    <!-- navbar dropdown menu box -->
                                    <div class="navbar-dropdown-child">
                                        <h5>For Men</h5>
                                            <ul>
                                                <li>Hoodies</li>
                                                <li>Hoodies</li>
                                            </ul>
                                    </div>
                                    <!-- navbar dropdown menu box -->
                                    <div class="navbar-dropdown-child">
                                        <h5>For Men</h2>
                                            <ul>
                                                <li>Hoodies</li>
                                                <li>Hoodies</li>
                                            </ul>
                                    </div>
                                </div>
                            </div>
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
            <a href="` + prefix + `pages/cart.html">
                <button class="clean-button normal-colors" type="submit">
                    <i class="fa fa-shopping-cart"></i>
                </button>
            </a>
            <button class="clean-button normal-colors" type="submit">
                <i class="fa fa-user"></i>
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
                                                    <a href="` + prefix + `pages/products.html"><div class="underline">All</div></a> 
                                                    <a href="` + prefix + `pages/t-shirt.html"><div>T-Shirt</div></a>
                                                    <a href="` + prefix + `pages/hoodie.html"><div>Hoodie</div></a>
                                                    <a href="` + prefix + `pages/mousepad.html"><div>Mousepad</div></a>
                                                    <a href="` + prefix + `pages/cap.html"><div>Cap</div></a>
                                                    <a href="` + prefix + `pages/mug.html"><div>Mug</div></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- navbar dropdown Voting-->
                                    <div class="dropdown">
                                        <!-- navbar dropdown button -->
                                        <button class="clean-button normal-colors">
                                            <span>Voting</span>
                                            <i class="fa fa-caret-down"></i>
                                        </button>
                                        <!-- navbar dropdown menu -->
                                        <div class="dropdown_menu left dropdown_menu--animated navbar-dropdown_menu">
                                            <div class="navbar-dropdown-parent">
                                                <!-- navbar dropdown menu box -->
                                                <div class="navbar-dropdown-child">
                                                    <h5>For Men</h2>
                                                        <ul>
                                                            <li>Hoodies</li>
                                                            <li>Hoodies</li>
                                                        </ul>
                                                </div>
                                                <!-- navbar dropdown menu box -->
                                                <div class="navbar-dropdown-child">
                                                    <h5>For Men</h2>
                                                        <ul>
                                                            <li>Hoodies</li>
                                                            <li>Hoodies</li>
                                                        </ul>
                                                </div>
                                            </div>
                                        </div>
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
                    <i class="fa fa-shopping-cart"></i>
                </button>
                <button class="clean-button normal-colors navbar-mobile-right-buttons" type="submit">
                    <i class="fa fa-user"></i>
                </button>
            </div>
        </div>
    </div>`
}