import React from 'react';

// eslint-disable-next-line react/display-name
export const MapWrapper: React.FC = React.memo(() => {
  return (
    <div id="map-container" style={{ width: '75%', height: '100%', position: 'relative', paddingLeft: '50px' }}></div>
  );
});
