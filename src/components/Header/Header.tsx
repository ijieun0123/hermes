const Header = () => {
    return (
        <header>
            <div className="contaier">
                <h1 className="logo">
                    <a href="#">
                        <img src="" alt="에르메스 로고" />
                    </a>
                </h1>
                <button className="menu_btn">
                    <span className="sr_only">메뉴 버튼</span>
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                <nav>
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
