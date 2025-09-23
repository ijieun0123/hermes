import "./_Footer.scss";

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="logo_sns_box">
                    <a href="#">
                        <img src="/hermes/img/logo.png" alt="에르메스 로고" />
                    </a>
                    <ul className="sns">
                        <li>
                            <a href="#" target="_blank" title="새창">
                                <img
                                    src="/hermes/img/footer_sns_youtube.png"
                                    alt="유투브"
                                />
                            </a>
                        </li>
                        <li>
                            <a href="#" target="_blank" title="새창">
                                <img
                                    src="/hermes/img/footer_sns_instagram.png"
                                    alt="인스타그램"
                                />
                            </a>
                        </li>
                        <li>
                            <a href="#" target="_blank" title="새창">
                                <img
                                    src="/hermes/img/footer_sns_facebook.png"
                                    alt="페이스북"
                                />
                            </a>
                        </li>
                    </ul>
                </div>
                <address>
                    <ul>
                        <li>
                            <p>주소 및 연락처</p>
                            <p>서울시 강남구 도산대로45길 7 (02)-542-6622</p>
                        </li>
                        <li>
                            <p>대표자명</p>
                            <p>한승헌</p>
                        </li>
                        <li>
                            <p>사업자 등록번호</p>
                            <p>120-81-71453</p>
                        </li>
                        <li>
                            <p>메일문의</p>
                            <p>contact.kr@hermes.com</p>
                        </li>
                        <li>
                            <p>호스팅 서비스</p>
                            <p>에르메스 셀리에</p>
                        </li>
                        <li>
                            <p>통신판매업 신고번호</p>
                            <p>제2020-서울강남-02965호</p>
                        </li>
                    </ul>
                </address>
                <p className="copyright">
                    © Hermès 2025. 무단 전재와 무단 복제를 금함
                </p>
            </div>
        </footer>
    );
};

export default Footer;
