'use client';

import { UploadImages } from '@/widgets/uploadImages/ui/ui';
import { UploadManyImages } from '@/widgets/uploadManyImages/ui/ui';
import { FC } from 'react';
import styles from './ui.module.scss';
export const EventImageForm: FC = () => {
  return (
    <div className={styles.layout}>
      <div style={{ width: '45%' }}>
        <UploadImages />
      </div>
      <div style={{ width: '50%' }}>
        <UploadManyImages />
      </div>
    </div>
  );
};
