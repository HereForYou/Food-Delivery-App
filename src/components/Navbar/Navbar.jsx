import Icons from "../Icons/Icons";

const Navbar = (props) => {
    const { back } = props;
    return (
        <div className="flex items-center justify-between">
            <div className="flex items-center gap-5">
                {back ? <Icons type="arrow-right" color="gray" /> : ""}
                <span className="text-2xl text-primary font-semibold">{props.text}</span>
            </div>
            <Icons type="shopping-cart" color="gray" />
        </div>
    );
}

export default Navbar;