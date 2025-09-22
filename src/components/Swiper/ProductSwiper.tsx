import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Pagination, Navigation } from "swiper/modules";
import ProductSlideItem from "../Slide/ProductSlideItem";

const slideData = [
    {
        id: 1,
        imageSrc: "/img/product_section_photo_1.png",
        productName: "product",
    },
];

const ProductSwiper = () => {
    return (
        <Swiper
            className="product_swiper"
            modules={[Pagination, Navigation]}
            spaceBetween={50}
            slidesPerView={1}
            pagination={{ clickable: true }}
            navigation={true}
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
