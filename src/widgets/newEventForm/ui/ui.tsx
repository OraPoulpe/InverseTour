'use client';

import { EventImageForm } from '@/features/eventImageFrom/ui/ui';
import { EventInfoForm } from '@/features/eventInfoFrom';
import { ProgressNavBar } from '@/features/progressNavBar';
import { EventData } from '@/shared/interfaces/event';
import { UploadImages } from '@/widgets/uploadImages/ui/ui';
import { UploadManyImages } from '@/widgets/uploadManyImages/ui/ui';
import { FC, useState } from 'react';

export const NewEventForm: FC = () => {
  const [isActiveInfo, setIsActiveInfo] = useState<boolean>(true);
  console.log(isActiveInfo);
  // const [eventData, setEventData] = useState<EventData> ({})

  return (
    <>
      <ProgressNavBar act={setIsActiveInfo} title={'Создание мероприятия'} />{' '}
      <div className="px-14">
        {isActiveInfo ? <EventInfoForm setIsActiveInfo={setIsActiveInfo} /> : <EventImageForm />}
      </div>
    </>
  );
};
