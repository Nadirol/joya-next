const MoveSliderButton = ({ direction }: { direction: "prev" | "next"}) => {
    return (
        <button>{direction}</button>
    )
};

export default MoveSliderButton;