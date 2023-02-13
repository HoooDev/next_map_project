import Map from './Map';

const MapSection = () => {
  return (
    <Map
      onLoad={() => {
        console.log('load!');
      }}
    ></Map>
  );
};

export default MapSection;
