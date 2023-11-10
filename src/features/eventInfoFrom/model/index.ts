import { instanceLogged } from '@/shared/api/axios';

export const Get = async (link: string) => {
  try {
    const data: any = await instanceLogged.get(`${link}`);
    return data.data;
  } catch (error) {
    return [];
  }
};
