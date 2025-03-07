import Icons from '../Icons/Icons'

const PopularItem = (props) => {
  // eslint-disable-next-line react/prop-types
  const { title, image, rate } = props;
  return (
    <div className="pt-[22px]">
      <div className="flex flex-col w-[180px] " >
        <img src={image} className=" " alt="Food Image" />
      </div>
      <div className="flex felx-row justify-center">
        <p className="text-dark-600 font-bold text-[18px]">{title}</p>
      </div>
      <div className="flex flex-row gap-[8px]">
        <p className="text-white-600 font-bold justify-start  text-primary text-[14px] "> Western Food  </p>
        <Icons type='star-filled' color='orange' />
        <p className="text-[#FC6011]  font-bold  text-[12px] ">{rate}</p>
      </div>
    </div>
  );
};

export default PopularItem;
