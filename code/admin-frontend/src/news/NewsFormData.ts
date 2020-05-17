import { http } from '../http';

export interface PostNewsData {
  image: string;
  header: string;
  listViewContent: string;
  detailedViewContent: string;
  isUrgent: boolean;
  tags: string[];
}

export interface NewsDetailedPostResponse {
  id: string;
  image: string;
  header: string;
  detailedViewContent: string;
}

export const postNews = async (data: PostNewsData): Promise<NewsDetailedPostResponse | undefined> => {
  try {
    const result = await http<PostNewsData, NewsDetailedPostResponse>({
      path: '/detailed',
      method: 'post',
      body: data,
    });
    if (result.ok && result.parsedBody) {
      return result.parsedBody;
    } else {
      return undefined;
    }
  } catch (ex) {
    console.log(ex);
    return undefined;
  }
};
