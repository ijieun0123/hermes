import styled from "styled-components";
// import { getImageUrl } from "../../utils/utils.ts";

interface CollectionsSlideItemProps {
    imageSrc: string;
    title: string;
    description: string;
    button: string;
}

const SlideItem = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    color: var(--black-color);
`;

const CollectionsImg = styled.div<{ $imageSrc: string }>`
    width: 100%;
    height: 100%;
    background: url(${props => props.$imageSrc}) no-repeat center/cover;
`;

const CollectionsTitle = styled.b`
    display: inline-block;
    margin: 30px 0 10px;
    font-family: "Nanum Myeongjo", serif;
    font-size: 16px;
    font-weight: 700;
    letter-spacing: -0.03em;

    @media (min-width: 768px) {
        font-size: 18px;
    }
`;

const CollectionsDescription = styled.p`
    font-size: 16px;
    letter-spacing: -0.03em;
    line-height: 1.375rem;
    font-family: "Nanum Myeongjo", serif;
    word-break: keep-all;

    @media (min-width: 768px) {
        font-size: 18px;
        line-height: 1.333rem;
    }
`;

const CollectionsBtn = styled.a`
    display: inline-block;
    padding: 9px;
    margin-top: 35px;
    border-bottom: 1px solid var(--black-color);
    font-size: 16px;
    font-weight: 800;
    letter-spacing: -0.03em;
    font-family: "Nanum Myeongjo", serif;

    @media (min-width: 768px) {
        padding: 5px 6px;
        font-size: 18px;
    }
`;

const CollectionsSlideItem = ({
    imageSrc,
    title,
    description,
    button,
}: CollectionsSlideItemProps) => {
    // const imageUrl = getImageUrl(imageSrc);

    return (
        <SlideItem>
            <CollectionsImg $imageSrc={imageSrc}></CollectionsImg>
            <CollectionsTitle>{title}</CollectionsTitle>
            <CollectionsDescription>{description}</CollectionsDescription>
            <CollectionsBtn href="#">{button}</CollectionsBtn>
        </SlideItem>
    );
};

export default CollectionsSlideItem;
