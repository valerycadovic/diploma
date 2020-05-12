import { wait } from '../core/http';

export interface NewsGridItemData {
  image: string;
  header: string;
  text: string;
  id: number;
  isUrgent: boolean;
  itemInfo?: ItemInfo;
}

export interface ItemInfo {
  commentsCount: number;
  userName?: string;
}

export const getGridNews = async (): Promise<NewsGridItemData[]> => {
  await wait(1000);
  return gridNews;
};

const itemInfo: ItemInfo = {
  commentsCount: 53,
  userName: 'Valery Chadovich',
};

const gridNews: NewsGridItemData[] = [
  {
    id: 0,
    image: 'https://s5o.ru/storage/simple/ru/edt/d3/db/63/07/rue3022a47d04.jpg',
    header: 'Слуцк',
    text: 'Лидер чемпионата Беларуси',
    isUrgent: true,
    itemInfo: itemInfo,
  },
  {
    id: 1,
    image: 'https://s5o.ru/storage/simple/ru/edt/28/43/8f/14/rue04d151a259.jpg',
    header: 'В России не увидели половину финала «Ливерпуль» – «Алавес».',
    text: 'РТР включился на 63-й минуте уже при 3:3',
    isUrgent: false,
  },
  {
    id: 2,
    image: 'https://therepublikofmancunia.com/wp-content/uploads/2015/05/cached.png',
    header: 'Луи сорвал куш.',
    text: 'Ван Гал позвал кипера в «Аякс», узнав про него за картами',
    isUrgent: true,
    itemInfo: itemInfo,
  },
  {
    id: 3,
    image:
      'https://cdn.tribuna.com/fetch/?url=https%3A%2F%2Fss.sport-express.ru%2Fuserfiles%2Fmaterials%2F53%2F539155%2Flarge.jpg',
    header: 'Эрик Кантона мог перейти в Ливерпуль',
    text:
      'Легенда "Ливерпуля" Грэм Сунесс рассказал, что Эрик Кантона может перейти в мерсисайдский клуб до того, как оказался в "Манчестер Юнайтед".',
    isUrgent: false,
    itemInfo: itemInfo,
  },
  {
    id: 4,
    image:
      'https://cdn.tribuna.com/fetch/?url=https%3A%2F%2Fmanutd.one%2Fuploads%2Fposts%2F2020-05%2F1589206417_paul-pogba-manchester-united-2019-20_yd2vj5ib8q351si0bk4mt6m8v.jpg',
    header: 'Франк Лебеф: «Погба играет слишком нестабильно»',
    text:
      'Бывший футболист сборной Франции Франк Лебеф считает, что игре Поля Погба в «Манчестер Юнайтед» не хватает стабильности.',
    isUrgent: true,
    itemInfo: itemInfo,
  },
  {
    id: 5,
    image:
      'https://cdn.tribuna.com/fetch/?url=https%3A%2F%2Fimg.playbuzz.com%2Fimage%2Fupload%2Far_1.5%2Cc_crop%2Fq_auto%3Agood%2Cf_auto%2Cfl_lossy%2Cw_640%2Cc_limit%2Fv1588258748%2Fb3vfc7wuqszllvtpxcmk.png',
    header: 'Стерлинг – мусульманин? А Джеко?',
    text:
      '18 неожиданных вопросов – в новом еженедельном тесте 18 неожиданных вопросов – в новом еженедельном тесте 18 неожиданных вопросов – в новом еженедельном тесте 18 неожиданных вопросов – в новом еженедельном тесте 18 неожиданных вопросов – в новом еженедельном тесте 18 неожиданных вопросов – в новом еженедельном тесте 18 неожиданных вопросов – в новом еженедельном тесте 18 неожиданных вопросов – в новом еженедельном тесте 18 неожиданных вопросов – в новом еженедельном тесте',
    isUrgent: false,
  },
  {
    id: 6,
    image:
      'https://cdn.tribuna.com/fetch/?url=https%3A%2F%2Fss.sport-express.ru%2Fuserfiles%2Fmaterials%2F53%2F539155%2Flarge.jpg',
    header: 'Слуцк',
    text: 'Лидер чемпионата Беларуси',
    isUrgent: false,
    itemInfo: itemInfo,
  },
];

export interface NewsDetailedData {
  titleImage: string;
  header: string;
  text: string;
}
