import { load } from '@2gis/mapgl';
import { Directions } from '@2gis/mapgl-directions';
import { ChangeEvent, useCallback, useContext, useEffect, useState } from 'react';
import { MapWrapper } from '../../mapWrapper';
import styles from './ui.module.scss';
import { MapContext } from '../../context/MapContext';
import { Panel } from '../../Panel';
import { API_KEY } from '@/shared/const/map';

export const Map = () => {


  const [hidden, setHidden] = useState(false);

  const [mapInstance, setMapInstance] = useContext<any>(MapContext);

  useEffect(() => {
    let map: any;
    load().then((mapglAPI) => {
      map = new mapglAPI.Map('map-container', {
        center: [32.0401, 54.7818],
        zoom: 13,
        key: API_KEY,
      });

      

      setMapInstance(map);

      if (!hidden) {
        // const directions = new Directions(map, {
        //   directionsApiKey: API_KEY,
        // });
        
        // directions.pedestrianRoute({
        //   points: [
        //     [32.0401, 54.7818],
        //     [32.092861, 54.788326],
        //     [32.046142, 54.781732],
        //     [32.036489, 54.758215],
        //   ],
        // });
      }
    });

    return () => map && map.destroy();
  }, []);

  return (
    <div style={{ width: '100%', height: '85vh', display: 'flex', gap: '15px' }}>
      <MapWrapper />
      <div>
        <Panel />
      </div>
    </div>
  );
};
