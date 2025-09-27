import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { EffectCoverflow, Pagination } from "swiper/modules";
import CollectionsSlideItem from "../Slide/CollectionsSlideItem";
import "./_CollectionsSwiper.scss";

interface CollectionsSwiperProps {
    "data-aos"?: string;
    "data-aos-delay"?: string;
}

const slideData = [
    {
        id: 1,
        imageSrc: "/hermes/img/collections_section_photo_1.png",
        title: "바레니아 오 드 퍼퓸 인텐스",
        description: "더 강렬하고, 더 신비로운 바레니아 오 드 퍼퓸 인텐스",
        button: "새로운 강렬함 알아보기",
    },
    {
        id: 2,
        imageSrc: "/hermes/img/collections_section_photo_2.png",
        title: "벨트가 만드는 곡선",
        description: "벨트는 가벼운 굴레처럼 도시적인 스타일을 연출합니다.",
        button: "앙상블 마스터하기",
    },
    {
        id: 3,
        imageSrc: "/hermes/img/collections_section_photo_3.png",
        title: "목을 감싸는 고급스러움",
        description:
            "스타일링의 정점, 넥타이는 정확한 제스처로 룩을 조율합니다.",
        button: "멋진 넥타이 매기",
    },
    {
        id: 4,
        imageSrc: "/hermes/img/collections_section_photo_4.webp",
        title: "아스팔트 위의 가죽",
        description:
            "유기적인 색조에 이끌리는 발걸음은 새로운 발견을 향해 나아갑니다.",
        button: "길을 떠나기",
    },
    {
        id: 5,
        imageSrc: "/hermes/img/collections_section_photo_5.webp",
        title: "남성미의 시너지",
        description:
            "과장을 걷어낸 멋, 주얼리와 자연스럽게 어우러진 모자가 남성적인 매력을 완성합니다.",
        button: "멋을 아는 이유",
    },
];

const CollectionsSwiper = ({ ...rest }: CollectionsSwiperProps) => {
    return (
        <Swiper
            effect={"coverflow"}
            grabCursor={true}
            loop={true}
            centeredSlides={true}
            initialSlide={1}
            slidesPerView={"auto"}
            pagination={true}
            coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 0,
                slideShadows: true,
            }}
            modules={[EffectCoverflow, Pagination]}
            className="mySwiper"
            breakpoints={{
                768: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                    pagination: false,
                },
                1440: {
                    slidesPerView: 3,
                    spaceBetween: 64,
                },
            }}
            {...rest}
        >
            {slideData.map(slide => {
                return (
                    <SwiperSlide key={slide.id}>
                        <CollectionsSlideItem
                            imageSrc={slide.imageSrc}
                            title={slide.title}
                            description={slide.description}
                            button={slide.button}
                        />
                    </SwiperSlide>
                );
            })}
        </Swiper>
    );
};

export default CollectionsSwiper;
