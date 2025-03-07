import { useNavigate } from "react-router";

import Icons from "../Icons/Icons";

const Navbar = (props) => {
  // eslint-disable-next-line react/prop-types
  const { back, shop } = props;
  const navigate = useNavigate();
  const onHandlePreviousClick = () => {
    window.history.back();
  };
  return (
    <div className="flex items-center justify-between mt-[30px]">
      <div className="flex items-center gap-5">
        {back ? (
          <div className="hover:cursor-pointer" onClick={() => onHandlePreviousClick()}>
            {" "}
            <Icons type="arrow-left" color="gray" />
          </div>
        ) : (
          ""
        )}
        <span className="text-2xl text-primary font-semibold capitalize">
          {/* eslint-disable-next-line react/prop-types */}
          {props.text}
        </span>
      </div>

      {shop ? (
        <div className="hover:cursor-pointer" onClick={() => navigate("/more/order")}>
          <Icons type="shopping-cart" color="gray" />{" "}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Navbar;
