const OrderItem = (props) => {
  // eslint-disable-next-line react/prop-types
  const { goodName, goodPrice } = props;
  return (
    <div className="flex justify-between items-center h-[45px] border-b-1px border-opacity-10 border-[#707070]">
      <p className="text-[13px] text-primary">{goodName}</p>
      <p className="text-[13px] text-primary font-bold">{goodPrice}</p>
    </div>
  );
};

export default OrderItem;
