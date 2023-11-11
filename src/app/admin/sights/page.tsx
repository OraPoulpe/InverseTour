'use client';

import { Gapped } from '@/shared/gapped/ui/ui';
import { NewEventForm } from '@/widgets/newEventForm';
export default function Sights() {
  return (
    <>
      <Gapped style={{ width: '100%', display: 'flex' }} vertical gap="0px">
        <NewEventForm />
      </Gapped>
    </>
  );
}
