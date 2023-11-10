'use client';

import { useState, FC, useEffect } from 'react';
import { Input, ThemeContext, ThemeFactory, Textarea, Select } from '@skbkontur/react-ui';
import styles from './ui.module.scss';
import { Category, Platform } from '@/shared/interfaces/event';
import { Get } from '../model';

interface EventInfoFormProps {
  setIsActiveInfo: (state: boolean) => void;
}

export const EventInfoForm: FC<EventInfoFormProps> = ({ setIsActiveInfo }) => {
  const selectPushkinItem = ['Есть', 'Нет'];
  const agePermissions = ['0+', '6+', '12+', '16+', '18+'];
  const permissions = ['По билетам', 'Свободный вход'];
  const [categories, setCategories] = useState<Category[]>([]);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    date: '',
    time: '',
    payment: '',
    platform: '',
    ageRestriction: '',
    category: '',
    conditions: '',
    ticketCount: '',
    ticketPrice: '',
  });
  const [platform, setPlatform] = useState<Platform[]>([]);
  const getSelectInfo = async () => {
    const category: Category[] = await Get('/events/categories/');
    const platform: Platform[] = await Get('/events/platforms/');
    setPlatform(platform);
    setCategories(category);
  };
  const handleInputChange = (name: string, value: string) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  useEffect(() => {
    getSelectInfo();
  }, []);
  return (
    <>
      <ThemeContext.Provider value={myTheme}>
        <div className={styles.layout}>
          <section className={styles.form}>
            <Input
              onChange={(e) => handleInputChange('title', e.target.value)}
              value={formData.title}
              width={'100%'}
              placeholder="Название"
              size="medium"
            />
            <Textarea
              onChange={(e) => handleInputChange('description', e.target.value)}
              value={formData.description}
              width={'100%'}
              placeholder="Описание"
              autoResize
              size="medium"
            />
            <Input
              onChange={(e) => handleInputChange('date', e.target.value)}
              value={formData.date}
              width={'100%'}
              type="date"
              size="medium"
            />
            <Input
              onChange={(e) => handleInputChange('time', e.target.value)}
              value={formData.time}
              width={'100%'}
              type="time"
              size="medium"
            />
            <Select
              placeholder="Оплата по “Пушкинской”"
              width={'100%'}
              items={selectPushkinItem}
              size="medium"
            />
          </section>
          <section className={styles.form}>
            <Select
              width={'100%'}
              items={platform.map((item) => item.name)}
              search
              placeholder="Площадка"
              size="medium"
            />
            <Select
              width={'100%'}
              placeholder="Возрастные ограничения"
              items={agePermissions}
              size="medium"
            />
            <Select
              width={'100%'}
              items={categories.map((item) => item.name)}
              placeholder="Категория"
              size="medium"
            />
            <Select width={'100%'} items={permissions} placeholder="Условия" size="medium" />
            <Input
              onChange={(e) => handleInputChange('ticketCount', e.target.value)}
              value={formData.ticketCount}
              width={'100%'}
              placeholder="Количество билетов"
              type="number"
              size="medium"
            />
            <Input
              onChange={(e) => handleInputChange('ticketPrice', e.target.value)}
              value={formData.ticketPrice}
              width={'100%'}
              placeholder="Цена билета в рублях"
              type="number"
              size="medium"
            />
          </section>
        </div>
      </ThemeContext.Provider>
    </>
  );
};
const myTheme = ThemeFactory.create({
  borderColorFocus: '#7AAC5C',
  btnBorderRadiusLarge: '8px',
  btnPrimaryBg: '#7AAC5C',
  btnPrimaryHoverBg: '#90C86F',
  btnPrimaryActiveBg: '#7AAC5C',
  btnPrimaryTextColor: '#fff',
  btnDisabledBg: '#FF9A4299',
  btnDisabledTextColor: '#fff',
  menuItemHoverBg: '#90C86F',
  inputBorderRadiusMedium: '4px',
  textareaBorderRadius: '4px',
  selectBorderRadiusMedium: '4px',
});
