import { wait, http } from '../core/http';

export interface NewsGridItemData {
  image: string;
  header: string;
  listViewContent: string;
  id: string;
  isUrgent: boolean;
  createdBy: string;
  createdOn: Date;
  itemInfo?: ItemInfo;
}

export interface NewsGridItemDataFromServer {
  image: string;
  header: string;
  listViewContent: string;
  id: string;
  isUrgent: boolean;
  createdBy: string;
  createdOn: string;
}

export interface ItemInfo {
  commentsCount: number;
  userName?: string;
}

export interface NewsItemDetailedView {
  id: string;
  image: string;
  header: string;
  detailedViewContent: string;
}

export interface PostNewsData {
  image: string;
  header: string;
  listViewContent: string;
  detailedViewContent: string;
  isUrgent: boolean;
  tags: string[];
  created: Date;
}

const mapNewsGridItemData = (fromServer: NewsGridItemDataFromServer): NewsGridItemData => ({
  ...fromServer,
  createdOn: new Date(fromServer.createdOn),
});

export const getGridNews = async (tag: string): Promise<NewsGridItemData[]> => {
  try {
    const result = await http<undefined, NewsGridItemDataFromServer[]>({ path: `/list?tag=${tag}&page=1&size=20` });
    if (result.ok && result.parsedBody) {
      return result.parsedBody.map(mapNewsGridItemData);
    } else {
      return [];
    }
  } catch (ex) {
    console.log();
    return [];
  }
};

export const getDetailedNews = async (newsId: string): Promise<NewsItemDetailedView | null> => {
  try {
    const result = await http<undefined, NewsItemDetailedView>({ path: `/detailed/${newsId}` });
    if (result.ok && result.parsedBody) {
      return result.parsedBody;
    } else {
      return null;
    }
  } catch (ex) {
    console.log(ex);
    return null;
  }
};

export const postNews = async (data: PostNewsData): Promise<NewsItemDetailedView | undefined> => {
  await wait(500);

  const listView: NewsGridItemData = {
    id: gridNews.length.toString(),
    header: data.header,
    listViewContent: data.listViewContent,
    itemInfo,
    image: data.image,
    isUrgent: data.isUrgent,
    createdBy: 'Valera Chadovich',
    createdOn: new Date(),
  };

  const detailedView: NewsItemDetailedView = {
    header: data.header,
    image: data.image,
    detailedViewContent: data.detailedViewContent,
    id: listView.id,
  };

  gridNews.push(listView);
  detailedNews.push(detailedView);

  return detailedView;
};

export const itemInfo: ItemInfo = {
  commentsCount: 53,
  userName: 'Valery Chadovich',
};

const detailedNews: NewsItemDetailedView[] = [];

const gridNews: NewsGridItemData[] = [];
