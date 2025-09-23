import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Pagination } from "swiper/modules";
import ProductSlideItem from "../Slide/ProductSlideItem";
import "./_ProductSwiper.scss";

const slideData = [
    {
        id: 1,
        imageSrc: "/hermes/img/product_section_photo_1.png",
        productName: "벨트",
    },
    {
        id: 2,
        imageSrc: "/hermes/img/product_section_photo_2.png",
        productName: "남성복",
    },
    {
        id: 3,
        imageSrc: "/hermes/img/product_section_photo_3.png",
        productName: "스카프",
    },
    {
        id: 4,
        imageSrc: "/hermes/img/product_section_photo_4.png",
        productName: "오브제",
    },
    {
        id: 5,
        imageSrc: "/hermes/img/product_section_photo_5.png",
        productName: "향수",
    },
    {
        id: 6,
        imageSrc: "/hermes/img/product_section_photo_6.png",
        productName: "주얼리",
    },
    {
        id: 7,
        imageSrc: "/hermes/img/product_section_photo_7.png",
        productName: "슈즈",
    },
    {
        id: 8,
        imageSrc: "/hermes/img/product_section_photo_8.png",
        productName: "반려견 용품",
    },
    {
        id: 9,
        imageSrc: "/hermes/img/product_section_photo_9.png",
        productName: "더보기",
    },
];

const ProductSwiper = () => {
    return (
        <Swiper
            className="product_swiper"
            modules={[Pagination]}
            spaceBetween={50}
            slidesPerView={1}
            pagination={{ clickable: true }}
            breakpoints={{
                768: {
                    slidesPerView: 8,
                    spaceBetween: 0,
                    pagination: false,
                },
            }}
        >
            {slideData.map(slide => {
                return (
                    <SwiperSlide key={slide.id}>
                        <ProductSlideItem
                            imageSrc={slide.imageSrc}
                            productName={slide.productName}
                        />
                    </SwiperSlide>
                );
            })}
        </Swiper>
    );
};

export default ProductSwiper;
