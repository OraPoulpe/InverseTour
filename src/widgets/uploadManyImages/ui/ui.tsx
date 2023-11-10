'use client';
import { useState } from 'react';
import { UploadImage } from './../../../features/uploadImage/ui';
import { AddManyFileButton } from '@/entities/buttons/addManyFileButton';

export const UploadManyImages = () => {
  const [files, setFiles] = useState<File[]>([]);

  const onImageChange = (selectedFiles: File[]) => {
    setFiles(selectedFiles);
  };

  const handlerDel = (id: number) => {
    setFiles([...files.filter((file, index) => id !== index)]);
  };

  return (
    <div style={{ width: '100%' }} className="w-77">
      <div className="mb-2">
        <AddManyFileButton
          title="Фотографии мероприятия"
          text="Прикрепите 3-5 файлов формата jpg,
        минимальный размер 1280*812"
          onChange={onImageChange}
        />
      </div>
      <div style={{ width: '100%' }} className="flex flex-wrap">
        {files.map((image, index) => (
          <UploadImage
            key={index}
            src={URL.createObjectURL(image)}
            width={235}
            height={148}
            name={image.name}
            id={index}
            handlerDel={handlerDel}
          />
        ))}
      </div>
    </div>
  );
};
