import styled from "styled-components";

interface MoreBtnProps {
    children: React.ReactNode;
    "data-aos"?: string;
    "data-aos-delay"?: string;
}

const StyledButton = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 160px;
    height: 50px;
    margin: 0 auto;
    border: 2px solid var(--black-color);

    @media (min-width: 768px) {
        width: 270px;
        height: 70px;
    }
`;

const MoreBtn = ({ children, ...rest }: MoreBtnProps) => {
    return (
        <StyledButton href="#" className="more_btn" {...rest}>
            {children}
        </StyledButton>
    );
};

export default MoreBtn;
