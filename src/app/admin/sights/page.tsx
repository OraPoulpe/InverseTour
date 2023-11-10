'use client';

import { Gapped } from '@/shared/gapped/ui/ui';
export default function Home() {
  return (
    <>
      <Gapped style={{ width: '100%', display: 'flex' }} vertical gap="0px">
        Привет
      </Gapped>
    </>
  );
}
