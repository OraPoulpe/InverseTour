'use client';
import styles from './ui.module.scss';
import { useState } from 'react';
import { LinkButton } from '@/entities/buttons/linkButton/ui/ui';
import { useRouter } from 'next/navigation';

const menuItems = [
  { label: 'Мероприятия', path: '/admin/event' },
  { label: 'Маршруты', path: '/admin/routes' },
  { label: 'Аналитика', path: '/admin/analytics' },
];

export const NavBarElements = () => {
  const router = useRouter();
  const [eventItemState, setEventItemState] = useState<boolean>(true);
  const [routesItemState, setRoutesItemState] = useState<boolean>(false);
  const [analyticsItemState, setAnalyticsItemState] = useState<boolean>(false);
  const [sightsItemState, setSightsItemState] = useState<boolean>(false);

  const EventHandleClick = () => {
    setEventItemState(true);
    setRoutesItemState(false);
    setAnalyticsItemState(false);
    setSightsItemState(false);
    router.push('/admin/event');
  };
  const RoutesHandleClick = () => {
    setEventItemState(false);
    setRoutesItemState(true);
    setAnalyticsItemState(false);
    setSightsItemState(false);
    router.push('/admin/routes');
  };
  const AnalyticsHandleClick = () => {
    setEventItemState(false);
    setRoutesItemState(false);
    setAnalyticsItemState(true);
    setSightsItemState(false);
    router.push('/admin/analytics');
  };
  const SightsHandleClick = () => {
    setEventItemState(false);
    setRoutesItemState(false);
    setAnalyticsItemState(false);
    setSightsItemState(true);
    router.push('/admin/sights');
  };
  return (
    <>
      <div className={styles.wrap}>
        <LinkButton isActive={eventItemState} onClick={EventHandleClick}>
          Мероприятия
        </LinkButton>
        <LinkButton isActive={sightsItemState} onClick={SightsHandleClick}>
          Дстопримечательности
        </LinkButton>
        <LinkButton isActive={routesItemState} onClick={RoutesHandleClick}>
          Маршруты
        </LinkButton>
        <LinkButton isActive={analyticsItemState} onClick={AnalyticsHandleClick}>
          Аналитика
        </LinkButton>
      </div>
    </>
  );
};
