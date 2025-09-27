import "./_Homes.scss";
import MoreBtn from "../../components/Button/MoreBtn";
import ProductSwiper from "../../components/Swiper/ProductSwiper";
import CollectionsSwiper from "../../components/Swiper/CollectionsSwiper";

const Home = () => {
    return (
        <main>
            <section className="intro_section">
                <div
                    className="bg_photo"
                    data-aos="fade-right"
                    data-aos-delay="300"
                    data-aos-duration="2000"
                ></div>
                <div className="container">
                    <div className="text_box">
                        <div
                            className="title_box"
                            data-aos="fade-right"
                            data-aos-delay="0"
                        >
                            <h2 className="sr_only">visual</h2>
                            <span>SINCE 1837</span>
                            <h3>HERMES</h3>
                        </div>
                        <a
                            href="#"
                            className="get_started_btn"
                            data-aos="fade-right"
                            data-aos-delay="600"
                        >
                            GET STARTED
                            <div className="right_arrow"></div>
                        </a>
                    </div>
                </div>
            </section>
            <section className="story_section">
                <div className="brown_box" data-aos="fade-left"></div>
                <div
                    className="bg_photo"
                    data-aos="fade-left"
                    data-aos-delay="300"
                    data-aos-duration="2000"
                ></div>
                <span className="artisanship">Artisanship</span>
                <div className="gray_box">
                    <div
                        className="text_box"
                        data-aos="fade-left"
                        data-aos-delay="600"
                    >
                        <h2 className="title">Our Story</h2>
                        <p className="paragraph paragraph1">
                            에르메스는 장인 정신과 휴머니스트적 가치에
                            충실해왔습니다. 창작의 자유와 가장 아름다운 소재에
                            대한 끊임없는 탐구, 그리고 오래 지속되면서
                            실용적이며 우아한 오브제를 만들어내는 뛰어난
                            노하우의 계승이 에르메스의 독창성을 구축해온
                            원동력입니다.
                        </p>
                        <p className="paragraph">
                            가족 경영, 자립적 운영, 책임감 있는 회사를 추구하는
                            에르메스는 45개 국가의 293개의 매장을 기반으로 국제
                            유통 네트워크 개발을 진행하면서도, 제품 제작은 주로
                            프랑스 내의 60개 생산지 및 교육기관에서 집중적으로
                            이루어지는 방식을 고수합니다.
                        </p>
                    </div>
                </div>
            </section>
            <section className="collections_section">
                <div className="container">
                    <div className="title_box" data-aos="fade-up">
                        <span className="line before"></span>
                        <h2 className="title">COLLECTIONS</h2>
                        <span className="line after"></span>
                    </div>
                    <CollectionsSwiper
                        data-aos="fade-up"
                        data-aos-delay="300"
                    />
                </div>
            </section>
            <section className="introduce_section">
                <div className="container">
                    <div className="title_box" data-aos="fade-up">
                        <span className="line before"></span>
                        <h2 className="title">INTRODUCE HERMES</h2>
                        <span className="line after"></span>
                    </div>
                    <div className="img_text_box">
                        <div className="entrepreneurship_box">
                            <div className="img_box">
                                <div
                                    className="bg_photo first"
                                    data-aos="fade"
                                    data-aos-delay="200"
                                ></div>
                                <div
                                    className="bg_photo second"
                                    data-aos="fade"
                                    data-aos-delay="400"
                                ></div>
                                <div
                                    className="bg_photo third"
                                    data-aos="fade"
                                    data-aos-delay="600"
                                ></div>
                            </div>
                            <div
                                className="text_box"
                                data-aos="fade-right"
                                data-aos-delay="800"
                            >
                                <span className="caption">기업가 정신</span>
                                <h3 className="title">Entrepreneurship</h3>
                                <p className="paragraph">
                                    6세대에 걸쳐, 프랑스 가문의 소유로 독립적
                                    운영을
                                    <br className="hide_on_mobile" /> 유지해온
                                    에르메스는 장인 정신, 창의성, 혁신 그리고
                                    <br className="hide_on_mobile" />{" "}
                                    책임감이라는 기업가 정신을 비즈니스
                                    <br className="hide_on_mobile" /> 모델로
                                    삼고 있습니다.
                                </p>
                            </div>
                        </div>
                        <div className="freedom_box">
                            <div
                                className="text_box"
                                data-aos="fade-left"
                                data-aos-delay="0"
                            >
                                <span className="caption">창작의 자유</span>
                                <h3 className="title">Creative Freedom</h3>
                                <p className="paragraph">
                                    16개의 메띠에가 자율성, 창의력, 장인의
                                    노하우를
                                    <br className="hide_on_mobile" /> 결합시켜
                                    에르메스의 컬렉션들을 탄생시키고 있습니다.
                                    <br className="hide_on_mobile" /> 계속해서
                                    변화하는 라이프스타일에 적합한
                                    <br className="hide_on_mobile" /> 지속성
                                    있는 오브제들을 디자인합니다.
                                </p>
                            </div>
                            <div
                                className="img_box"
                                data-aos="fade-right"
                                data-aos-delay="0"
                            >
                                <div className="bg_photo"></div>
                            </div>
                        </div>
                        <div className="brand_box">
                            <div
                                className="img_box"
                                data-aos="fade-left"
                                data-aos-delay="0"
                            >
                                <div className="bg_photo"></div>
                            </div>
                            <div
                                className="text_box"
                                data-aos="fade-right"
                                data-aos-delay="0"
                            >
                                <span className="caption">브랜드</span>
                                <h3 className="title">Brand</h3>
                                <p className="paragraph">
                                    에르메스는 장인의 세계에 기반을 둔
                                    휴머니스트적
                                    <br className="hide_on_mobile" /> 가치에
                                    따라 회사의 발전을 이어갑니다. 따라서,
                                    자원을
                                    <br className="hide_on_mobile" /> 보존하고,
                                    공방 운영 지역을 지원하며, 최고의 기술을
                                    <br className="hide_on_mobile" /> 계승하기
                                    위해 항상 노력하고 있습니다.
                                </p>
                            </div>
                        </div>
                        <div className="network">
                            <div
                                className="text_box"
                                data-aos="fade-left"
                                data-aos-delay="0"
                            >
                                <span className="caption">네트워크</span>
                                <h3 className="title">Network</h3>
                                <p className="paragraph">
                                    45개국의 293개 에르메스 매장은 모두
                                    에르메스의 정체성과
                                    <br className="hide_on_mobile" />
                                    현지 문화를 결합시킨 각각의 ‘오브제
                                    하우스’로서
                                    <br className="hide_on_mobile" /> 고객들에게
                                    특별한 경험을 제공하고 있습니다.
                                </p>
                            </div>
                            <div
                                className="img_box"
                                data-aos="fade-right"
                                data-aos-delay="0"
                            >
                                <div className="bg_photo"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="heart_section">
                <div className="container">
                    <span className="hermes" data-aos="fade-left">
                        Hermes
                    </span>
                    <h2
                        className="created_by_the_heart"
                        data-aos="fade"
                        data-aos-delay="800"
                        data-aos-duration="3000"
                    >
                        created by the heart
                    </h2>
                    <p data-aos="fade-left" data-aos-delay="600">
                        모든 작품은 스케치에서 시작됩니다. <br />
                        에르메스의 장인정신은 작은 <br />
                        선에서부터 이야기를 만들어냅니다.
                        <br /> 수많은 시간과 정성이 깃들어
                        <br /> 영원한 가치를 지닙니다.
                    </p>
                    <div className="bg_box">
                        <div
                            className="bg_photo_woman"
                            data-aos="fade-left"
                            data-aos-delay="200"
                        ></div>
                        <div
                            className="bg_photo_man"
                            data-aos="fade-left"
                            data-aos-delay="400"
                        ></div>
                    </div>
                </div>
            </section>
            <section className="development_section">
                <div className="container">
                    <div className="title_box">
                        <span data-aos="fade-up">SUSTAINALBE</span>
                        <h2
                            className="title"
                            data-aos="fade-up"
                            data-aos-delay="300"
                        >
                            Development
                        </h2>
                    </div>
                    <div
                        className="text_box"
                        data-aos="fade-up"
                        data-aos-delay="600"
                    >
                        <b>지속 가능한 오브제, 고용, 전략, 협업</b>
                        <p className="paragraph">
                            1837년 설립된 가족 경영 기반의 독립적 장인 기업
                            에르메스는 수선을 통해 다음 세대로 대물림될 수 있는
                            <br className="show_on_tablet_desktop" />
                            아름답고 기능적인 오브제를 선보이고 있습니다. 오랜
                            세월 전해 내려온 장인의 특별한 노하우와
                            <br className="show_on_tablet_desktop" />
                            최고의 소재가 결합되어, 시대를 초월하는 우아함을
                            지닌 오브제에 긴 생명을 불어넣습니다.
                            <br className="show_on_tablet_desktop" />
                            휴머니스트적 가치와 장인 정신을 소중히 여기는
                            에르메스는 25,000명 이상의 직원을 고용한 기업으로서
                            <br className="show_on_tablet_desktop" />
                            책임감 있는 경영 활동에 앞장서고 있습니다. 제품을
                            제작하고 회사의 발전을 이루기 위해 언제나
                            <br className="show_on_tablet_desktop" /> 최고
                            품질의 가치를 우선시하는 모습은 문화, 사회 및 환경
                            분야에 대한 적극적인 참여를 통해 엿볼 수 있습니다.
                        </p>
                        <MoreBtn children="Learn More" />
                    </div>
                </div>
            </section>
            <section className="product_section">
                <div className="container">
                    <div className="title_box" data-aos="fade-up">
                        <span className="line before"></span>
                        <h2 className="title">PRODUCT</h2>
                        <span className="line after"></span>
                    </div>
                    <ProductSwiper data-aos="fade-up" data-aos-delay="300" />
                    <MoreBtn
                        children="View More"
                        data-aos="fade-up"
                        data-aos-delay="600"
                    />
                </div>
            </section>
        </main>
    );
};

export default Home;
