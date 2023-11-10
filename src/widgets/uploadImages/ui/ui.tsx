'use client';
import { useState } from 'react';
import { UploadImage } from './../../../features/uploadImage/ui';
import { AddFileButton } from '@/entities/buttons/addFileButton';
import { TextInput } from '@/entities/inputs/textInput';
import { MainButton } from '@/entities/buttons/mainButton';
import NoneFiles from '../../../../public/img/noneFiles.svg';
import { ThemeFactory, ThemeContext, Input } from '@skbkontur/react-ui';
import styles from './ui.module.scss';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
export const UploadImages = () => {
  const [file, setFile] = useState<File | null>(null);
  const [link, setLink] = useState<string>('');
  const router = useRouter();
  const onImageChange = (selectedFiles: File | null) => {
    setFile(selectedFiles);
  };

  const handlerDel = (id: number) => {
    setFile(null);
  };

  return (
    <>
      <ThemeContext.Provider value={myTheme}>
        <div className={styles.layout}>
          <AddFileButton
            title="Обложка мероприятия"
            text="Прикрепите файл формата jpg,
        минимальный размер 1280*812"
            onChange={onImageChange}
          />
          {file ? (
            <UploadImage
              src={URL.createObjectURL(file)}
              width={477}
              height={303}
              name={file.name}
              handlerDel={handlerDel}
            />
          ) : (
            <div className={styles.noneFiles}>
              <Image src={NoneFiles} alt="Нет файлов" width={160} height={160} />
              <p className={styles.text}> Нет файлов</p>
            </div>
          )}
          <Input
            value={link}
            onValueChange={setLink}
            width="100%"
            size="medium"
            placeholder="Ссылка на тизер"
          />
          <MainButton
            width="fit-content"
            height="large"
            bgColor="#7AAC5C"
            textColor="white"
            onClick={() => {}}
            isActive={false}>
            Опубликовать
          </MainButton>

          <MainButton
            width="fit-content"
            height="large"
            bgColor="#F8F8FA"
            textColor="black"
            onClick={() => router.back()}>
            Назад
          </MainButton>
        </div>
      </ThemeContext.Provider>
    </>
  );
};
const myTheme = ThemeFactory.create({
  inputBorderRadiusMedium: '4px',
  textareaBorderRadius: '4px',
  selectBorderRadiusMedium: '4px',
  borderColorFocus: '#7AAC5C',
});
