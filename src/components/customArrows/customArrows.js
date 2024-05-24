const NextArrow = (props) => {
    const { onClick } = props;
    return (
        <div
        className="bg-transparent  rounded-full w-8 h-8 flex items-center justify-center absolute top-1/2 transform -translate-y-1/2 right-2 z-10 cursor-pointer text-white p-3 text-3xl"
            onClick={onClick}
        >
            &#10095;
        </div>
    );
};

const PrevArrow = (props) => {
    const { onClick } = props;
    return (
        <div
        className="bg-transparent  rounded-full w-8 h-8 flex items-center justify-center absolute top-1/2 transform -translate-y-1/2 left-2 z-10 cursor-pointer text-white p-3 text-3xl"
            onClick={onClick}
        >
            &#10094;
        </div>
    );
};


export { NextArrow, PrevArrow };
