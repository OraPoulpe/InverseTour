import React, { ChangeEvent, useCallback, useContext, useState } from 'react';
import { MapContext } from '../../context/MapContext';
import { Directions } from '@2gis/mapgl-directions';
import { API_KEY } from '@/shared/const/map';
import { load } from '@2gis/mapgl';

import { MainButton } from '@/entities/buttons/mainButton';

import eyeCloseIcon from '../../../../../public/icon/InputEyeIconActiveState.svg';
import eyeOpenIcon from '../../../../../public/icon/InputEyeIconDefaultState.svg';
import { IconButton } from '@/entities/buttons/iconButton';

export const Panel = () => {
  const [mapInstance] = useContext<any>(MapContext);
  const [directions, setDirections] = useState<Directions | null>(null);
  const [markersArray, setMarkersArray] = useState<any[]>([]);

  const [showMarkers, setShowMarkers] = useState(false);

  const attractions = [
    [32.0401, 54.7818],
    [32.092861, 54.788326],
    [32.046142, 54.781732],
    [32.036489, 54.758215],
  ];

  const addMarkers = useCallback(() => {
    setShowMarkers(true);
    console.log('add');
    if (mapInstance) {
      load().then((mapglAPI) => {
        attractions.forEach((marker) => {
          const newMarker = new mapglAPI.Marker(mapInstance, {
            coordinates: marker,
          });
          const newArray: any[] = [...markersArray, newMarker];
          // newMarker.destroy();
          setMarkersArray(newArray);
          // .setPopup(new mapgl.Popup().setText(`Marker ${marker.id}`));
        });
      });
    }
  }, [mapInstance]);

  const toggleMarkers = () => {
    setShowMarkers(!showMarkers);
    clearMarkers();
    if (showMarkers) {
      addMarkers();
    }
  };

  const clearMarkers = useCallback(() => {
    setShowMarkers(false);
    if (mapInstance) {
      markersArray.forEach(function (item, i, arr) {
        // item.remove(mapInstance); // map - ваш объект карты
        item.destroy();

      });

      console.log('remote');

      // mapInstance.removeAllMarkers();
    }
  }, [mapInstance]);

  const addRoute = useCallback(() => {
    console.log('add');
    if (mapInstance) {
      const newDirections = new Directions(mapInstance, {
        directionsApiKey: API_KEY,
      });

      newDirections.pedestrianRoute({
        points: [
          [32.0401, 54.7818],
          [32.092861, 54.788326],
          [32.046142, 54.781732],
          [32.036489, 54.758215],
        ],
      });

      setDirections(newDirections);
    }
  }, [mapInstance]);
  //TODO: fix remote markers
  const remoteRoute = useCallback(() => {
    console.log('remote');
    if (directions) {
      directions.clear();
    }
  }, [directions]);

  return (
    <div className="flex flex-col gap-2">
      <div className="flex gap-4 items-center">
        {showMarkers ? (
          <IconButton
            height="48px"
            width="48px"
            color="#7AAC5C"
            iconSrc={eyeOpenIcon.src}
            onClick={clearMarkers}
          />
        ) : (
          <IconButton
            height="48px"
            width="48px"
            color="#7AAC5C"
            iconSrc={eyeCloseIcon.src}
            onClick={addMarkers}
          />
        )}
        <span>Места</span>
      </div>

      <MainButton
        textColor="white"
        bgColor="#7AAC5C"
        width="small"
        height="large"
        onClick={addRoute}>
        Построить маршрут
      </MainButton>
      <MainButton
        textColor="white"
        bgColor="#C6C6C6"
        width="small"
        height="large"
        onClick={remoteRoute}>
        Отчистить
      </MainButton>
    </div>
  );
};
