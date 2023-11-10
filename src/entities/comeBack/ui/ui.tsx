'use client';

import { FC } from 'react';
import styles from './ui.module.scss';
import arrowLeftIcon from '../../../../public/icon/ic-arrowleft.svg';
import { useRouter } from 'next/navigation';

interface ComeBackProps {
  title: string;
}

export const ComeBack: FC<ComeBackProps> = ({ title }) => {
  const router = useRouter();
  return (
    <div onClick={() => router.back()} className="flex items-center">
      <i
        className={styles.icon}
        style={{ backgroundImage: `url(${arrowLeftIcon.src})` }}
        draggable="false"
      />
      <span
        style={{ cursor: 'pointer' }}
        className="mr-7 mont font-semibold text-gray leading-none">
        {title}
      </span>
    </div>
  );
};
