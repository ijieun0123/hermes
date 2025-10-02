import "./_Header.scss";
import { useState } from "react";

const Header = () => {
    const [isNavActive, setIsNavActive] = useState(false);
    const [isMenuActive, setIsMenuActive] = useState(false);

    const handleMenuClick = () => {
        setIsNavActive(!isNavActive);
        setIsMenuActive(!isMenuActive);
    };

    return (
        <header>
            <div className="container">
                <h1 className="logo">
                    <a href="#">
                        <img
                            src="/hermes/img/header_logo.png"
                            alt="에르메스 로고"
                        />
                    </a>
                </h1>
                <button
                    className={isMenuActive ? "menu_btn active" : "menu_btn"}
                    onClick={handleMenuClick}
                >
                    <span className="sr_only">메뉴 버튼</span>
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                <nav className={isNavActive ? "active" : ""}>
                    <h2 className="sr_only">메인 네비게이션</h2>
                    <ul>
                        <li>
                            <a href="#">Brand</a>
                        </li>
                        <li>
                            <a href="#">Collections</a>
                        </li>
                        <li>
                            <a href="#">Product</a>
                        </li>
                        <li>
                            <a href="#">News</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
