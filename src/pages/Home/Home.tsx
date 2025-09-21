import "./_Homes.scss";
import Arrow from "../../components/Arrow";

const Home = () => {
    return (
        <main>
            <section className="intro_section">
                <div className="bg_photo"></div>
                <div className="container">
                    <div className="text_box">
                        <div className="title_box">
                            <span>since 1837</span>
                            <h2>HERMES</h2>
                        </div>
                        <button>
                            GET STARTED
                            <Arrow width={117} />
                        </button>
                    </div>
                    <div className="bg_photo"></div>
                </div>
            </section>
            <section className="story_section">
                <div className="brown_box"></div>
                <div className="bg_photo"></div>
                <div className="container">
                    <span className="artisanship">Artisanship</span>
                    <div className="gray_box">
                        <div className="text_box">
                            <h2 className="title">Our Story</h2>
                            <p className="paragraph paragraph1">
                                에르메스는 장인 정신과 휴머니스트적 가치에
                                충실해왔습니다. 창작의 자유와 가장 아름다운
                                소재에 대한 끊임없는 탐구, 그리고 오래
                                지속되면서 실용적이며 우아한 오브제를 만들어내는
                                뛰어난 노하우의 계승이 에르메스의 독창성을
                                구축해온 원동력입니다.
                            </p>
                            <p className="paragraph">
                                가족 경영, 자립적 운영, 책임감 있는 회사를
                                추구하는 에르메스는 45개 국가의 293개의 매장을
                                기반으로 국제 유통 네트워크 개발을 진행하면서도,
                                제품 제작은 주로 프랑스 내의 60개 생산지 및
                                교육기관에서 집중적으로 이루어지는 방식을
                                고수합니다.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="collections_section">
                <div className="container">
                    <div className="title_box">
                        <span className="line"></span>
                        <h2 className="title">COLLECTIONS</h2>
                        <span className="line"></span>
                    </div>
                    <div className="swiper">
                        <div className="swiper_wraper">
                            <div className="slider">
                                <div className="slide">
                                    <div className="bg_photo"></div>
                                    <h3>벨트가 만드는 곡선</h3>
                                    <p>
                                        벨트는 가벼운 굴레처럼 도시적인 스타일을
                                        연출합니다.
                                    </p>
                                    <a href="#">앙상블 마스터하기</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="introduce_section">
                <div className="container">
                    <div className="title_box">
                        <span className="line"></span>
                        <h2 className="title">INTRODUCE HERMES</h2>
                        <span className="line"></span>
                    </div>
                    <div className="entrepreneurship_box">
                        <div className="img_box">
                            <div className="bg_photo"></div>
                            <div className="bg_photo"></div>
                            <div className="bg_photo"></div>
                        </div>
                        <div className="text_box">
                            <span>기업가 정신</span>
                            <h3 className="title">Entrepreneurship</h3>
                            <p className="paragraph">
                                6세대에 걸쳐, 프랑스 가문의 소유로 독립적 운영을
                                유지해온 에르메스는 장인 정신, 창의성, 혁신
                                그리고 책임감이라는 기업가 정신을 비즈니스
                                모델로 삼고 있습니다.
                            </p>
                        </div>
                    </div>
                    <div className="freedom_box">
                        <div className="img_box">
                            <div className="bg_photo"></div>
                        </div>
                        <div className="text_box">
                            <span>창작의 자유</span>
                            <h3 className="title">Creative Freedom</h3>
                            <p className="paragraph">
                                16개의 메띠에가 자율성, 창의력, 장인의 노하우를
                                결합시켜 에르메스의 컬렉션들을 탄생시키고
                                있습니다. 계속해서 변화하는 라이프스타일에
                                적합한 지속성 있는 오브제들을 디자인합니다.
                            </p>
                        </div>
                    </div>
                    <div className="brand_box">
                        <div className="img_box">
                            <div className="bg_photo"></div>
                        </div>
                        <div className="text_box">
                            <span>브랜드</span>
                            <h3 className="title">Brand</h3>
                            <p className="paragraph">
                                에르메스는 장인의 세계에 기반을 둔 휴머니스트적
                                가치에 따라 회사의 발전을 이어갑니다. 따라서,
                                자원을 보존하고, 공방 운영 지역을 지원하며,
                                최고의 기술을 계승하기 위해 항상 노력하고
                                있습니다.
                            </p>
                        </div>
                    </div>
                    <div className="network">
                        <div className="img_box">
                            <div className="bg_photo"></div>
                        </div>
                        <div className="text_box">
                            <span>네트워크</span>
                            <h3 className="title">Network</h3>
                            <p className="paragraph">
                                45개국의 293개 에르메스 매장은 모두 에르메스의
                                정체성과 현지 문화를 결합시킨 각각의 ‘오브제
                                하우스’로서 고객들에게 특별한 경험을 제공하고
                                있습니다.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="heart_section">
                <div className="container">
                    <span className="hermes">Hermes</span>
                    <span className="created_by_the_heart">
                        created by the heart
                    </span>
                    <p>
                        모든 작품은 스케치에서 시작됩니다. 에르메스의 장인정신은
                        작은 선에서부터 이야기를 만들어냅니다. 수많은 시간과
                        정성이 깃들어 영원한 가치를 지닙니다.
                    </p>
                    <div className="bg_box">
                        <div className="bg_photo_woman"></div>
                        <div className="bg_photo_man"></div>
                    </div>
                </div>
            </section>
            <section className="development_section">
                <div className="title_box">
                    <span>SUSTAINALBE</span>
                    <h2 className="title">Development</h2>
                </div>
                <div className="text_box">
                    <b>지속 가능한 오브제, 고용, 전략, 협업</b>
                    <p className="paragraph">
                        1837년 설립된 가족 경영 기반의 독립적 장인 기업
                        에르메스는 수선을 통해 다음 세대로 대물림될 수 있는
                        아름답고 기능적인 오브제를 선보이고 있습니다. 오랜 세월
                        전해 내려온 장인의 특별한 노하우와 최고의 소재가
                        결합되어, 시대를 초월하는 우아함을 지닌 오브제에 긴
                        생명을 불어넣습니다. 휴머니스트적 가치와 장인 정신을
                        소중히 여기는 에르메스는 25,000명 이상의 직원을 고용한
                        기업으로서 책임감 있는 경영 활동에 앞장서고 있습니다.
                        제품을 제작하고 회사의 발전을 이루기 위해 언제나 최고
                        품질의 가치를 우선시하는 모습은 문화, 사회 및 환경
                        분야에 대한 적극적인 참여를 통해 엿볼 수 있습니다.
                    </p>
                    <a href="#" className="more_btn">
                        Learn More
                    </a>
                </div>
            </section>
            <div className="product_section">
                <div className="title_box">
                    <span className="line"></span>
                    <h2 className="title"></h2>
                    <span className="line"></span>
                </div>
                <ul className="product_box">
                    <li>
                        <a href="#">
                            <div className="bg_photo"></div>
                            <p></p>
                        </a>
                    </li>
                </ul>
                <a href="#" className="more_btn">
                    View More
                </a>
            </div>
        </main>
    );
};

export default Home;
