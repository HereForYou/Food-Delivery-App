const Button = (props) => {
  // eslint-disable-next-line react/prop-types
  const { children, onClick } = props;
  return (
    <div>
      <button className="bg-transparent text-main border-main h-[56px] font-semibold border-[1px] py-[16px] rounded-[999px] w-[100%]"
        onClick={() => onClick()}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
