import { FC, ReactNode, createContext, useState } from 'react';

export const MapContext = createContext([undefined, () => {}]);
export const MapProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [mapInstance, setMapInstance] = useState<any>();

  return (
    <MapContext.Provider value={[mapInstance, setMapInstance]}>{children}</MapContext.Provider>
  );
};
