import styled from "styled-components";
// import { getImageUrl } from "../../utils/utils.ts";

interface ProductSlideItemProps {
    imageSrc: string;
    productName: string;
}

const SlideItem = styled.a`
    position: relative;
    display: inline-block;
    width: 100%;
    height: 334px;

    @media (min-width: 768px) {
    }
`;

const ProductImg = styled.div<{ $imageSrc: string }>`
    width: 100%;
    height: 100%;
    background: url(${props => props.$imageSrc}) no-repeat center/cover;
`;

const ProductName = styled.p`
    position: absolute;
    left: 10px;
    bottom: 10px;
    font-size: 18px;
    letter-spacing: -0.03em;
    font-family: "Nanum Myeongjo", serif;
    color: var(--black-color);
`;

const ProductSlideItem = ({ imageSrc, productName }: ProductSlideItemProps) => {
    // const imageUrl = getImageUrl(imageSrc);

    return (
        <SlideItem href="#">
            <ProductImg $imageSrc={imageSrc} />
            <ProductName>{productName}</ProductName>
        </SlideItem>
    );
};

export default ProductSlideItem;
