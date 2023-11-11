'use client';

import infoIcon from '../../../../public/icon/ic-info-active.svg';
import { FC } from 'react';
import styles from './ui.module.scss';
import { ComeBack } from '@/entities/comeBack';

interface ProgressNavBar {
  title: string;
  act: (bl: boolean) => void;
}

export const ProgressNavBar: FC<ProgressNavBar> = ({ title, act }) => {
  return (
    <div className={styles.layout}>
      <ComeBack setIsActiveInfo={act} title={'Создание мероприятия'} />
      <div className={styles.line} />
      <div>
        <div>
          <i
            onClick={() => {}}
            className={styles.icon}
            style={{ backgroundImage: `url(${infoIcon.src})` }}
            draggable="false"
          />
          <span className="mr-7 mont font-semibold text-gray leading-none">Общая Информация</span>
        </div>
      </div>
    </div>
  );
};
