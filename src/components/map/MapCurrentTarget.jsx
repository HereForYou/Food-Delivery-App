import CurrentTarget from "/assets/img/map/current-location-target.svg";

const MapCurrentTarget = (props) => {
  // eslint-disable-next-line react/prop-types
  const { top, left } = props;
  return (
    <div className="absolute" style={{ top: top, left: left }}>
      <img src={CurrentTarget} />
    </div>
  );
};

export default MapCurrentTarget;
