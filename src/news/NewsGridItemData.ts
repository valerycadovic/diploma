import { wait } from '../core/http';

export interface NewsGridItemData {
  image: string;
  header: string;
  text: string;
  id: number;
}

export const getGridNews = async (): Promise<NewsGridItemData[]> => {
  await wait(1000);
  return gridNews;
};

const gridNews: NewsGridItemData[] = [
  {
    id: 0,
    image: 'https://s5o.ru/storage/simple/ru/edt/d3/db/63/07/rue3022a47d04.jpg',
    header: 'Слуцк',
    text: 'Лидер чемпионата Беларуси',
  },
  {
    id: 1,
    image: 'https://s5o.ru/storage/simple/ru/edt/28/43/8f/14/rue04d151a259.jpg',
    header: 'В России не увидели половину финала «Ливерпуль» – «Алавес».',
    text: 'РТР включился на 63-й минуте уже при 3:3',
  },
  {
    id: 2,
    image: 'https://s5o.ru/storage/simple/ru/edt/52/37/cf/ea/rue36e87b132e.36.jpg',
    header: 'Луи сорвал куш.',
    text: 'Ван Гал позвал кипера в «Аякс», узнав про него за картами',
  },
  {
    id: 3,
    image:
      'https://cdn.tribuna.com/fetch/?url=https%3A%2F%2Fss.sport-express.ru%2Fuserfiles%2Fmaterials%2F53%2F539155%2Flarge.jpg',
    header: 'Эрик Кантона мог перейти в Ливерпуль',
    text:
      'Легенда "Ливерпуля" Грэм Сунесс рассказал, что Эрик Кантона может перейти в мерсисайдский клуб до того, как оказался в "Манчестер Юнайтед".',
  },
  {
    id: 4,
    image:
      'https://cdn.tribuna.com/fetch/?url=https%3A%2F%2Fmanutd.one%2Fuploads%2Fposts%2F2020-05%2F1589206417_paul-pogba-manchester-united-2019-20_yd2vj5ib8q351si0bk4mt6m8v.jpg',
    header: 'Франк Лебеф: «Погба играет слишком нестабильно»',
    text:
      'Бывший футболист сборной Франции Франк Лебеф считает, что игре Поля Погба в «Манчестер Юнайтед» не хватает стабильности.',
  },
  {
    id: 5,
    image:
      'https://cdn.tribuna.com/fetch/?url=https%3A%2F%2Fimg.playbuzz.com%2Fimage%2Fupload%2Far_1.5%2Cc_crop%2Fq_auto%3Agood%2Cf_auto%2Cfl_lossy%2Cw_640%2Cc_limit%2Fv1588258748%2Fb3vfc7wuqszllvtpxcmk.png',
    header: 'Стерлинг – мусульманин? А Джеко?',
    text:
      '18 неожиданных вопросов – в новом еженедельном тесте 18 неожиданных вопросов – в новом еженедельном тесте 18 неожиданных вопросов – в новом еженедельном тесте 18 неожиданных вопросов – в новом еженедельном тесте 18 неожиданных вопросов – в новом еженедельном тесте 18 неожиданных вопросов – в новом еженедельном тесте 18 неожиданных вопросов – в новом еженедельном тесте 18 неожиданных вопросов – в новом еженедельном тесте 18 неожиданных вопросов – в новом еженедельном тесте',
  },
  {
    id: 6,
    image:
      'https://cdn.tribuna.com/fetch/?url=https%3A%2F%2Fss.sport-express.ru%2Fuserfiles%2Fmaterials%2F53%2F539155%2Flarge.jpg',
    header: 'Слуцк',
    text: 'Лидер чемпионата Беларуси',
  },
  {
    id: 7,
    image: 'https://s5o.ru/storage/simple/ru/edt/d3/db/63/07/rue3022a47d04.jpg',
    header: 'Слуцк',
    text: 'Лидер чемпионата Беларуси',
  },
  {
    id: 8,
    image: 'https://s5o.ru/storage/simple/ru/edt/d3/db/63/07/rue3022a47d04.jpg',
    header: 'Слуцк',
    text: 'Лидер чемпионата Беларуси',
  },
];
