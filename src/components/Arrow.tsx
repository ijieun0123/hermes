interface ArrowProps {
    width: number;
}

const Arrow = ({ width }: ArrowProps) => {
    return (
        <svg
            width={width}
            height="12"
            viewBox="0 0 117 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="right_arrow"
        >
            <path d="M0.5 1H114L105.5 10.5" stroke="#BA4C27" stroke-width="2" />
        </svg>
    );
};

export default Arrow;
