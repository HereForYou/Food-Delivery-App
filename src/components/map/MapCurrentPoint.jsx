import CurrentPoint from "/assets/img/map/map-current-point.svg";

const MapCurrentPoint = (props) => {
  // eslint-disable-next-line react/prop-types
  const { top, left } = props;
  return (
    <div className="absolute" style={{ top: top, left: left }}>
      <img src={CurrentPoint} />
    </div>
  );
};

export default MapCurrentPoint;
