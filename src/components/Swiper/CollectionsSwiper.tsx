import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Pagination } from "swiper/modules";
import CollectionsSlideItem from "../Slide/CollectionsSlideItem";
import "./_CollectionsSwiper.scss";

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
];

const CollectionsSwiper = () => {
    return (
        <Swiper
            className="product_swiper"
            modules={[Pagination]}
            spaceBetween={50}
            slidesPerView={1}
            pagination={{ clickable: true }}
            breakpoints={{
                768: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                },
            }}
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
