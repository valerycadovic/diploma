export interface SubItem {
  text: string;
  id: string;
}

export interface TopItem {
  text: string;
  id?: string;
  subItems?: SubItem[];
}

export const getHeaderData = (): TopItem[] => {
  return headerData;
};

const headerData: TopItem[] = [
  {
    text: 'Home',
    id: 'home',
  },
  {
    text: 'Belarus',
    subItems: [
      { text: 'National Team', id: 'belarus-national-team' },
      { text: 'Major League', id: 'belarus-major-league' },
      { text: 'National Cup', id: 'belarus-cup' },
      { text: '1st League', id: 'belarus-1-league' },
      { text: '2nd League', id: 'belarus-2-league' },
      { text: 'Regions', id: 'belarus-regions' },
      { text: 'Ours Abroad', id: 'belarus-ours-abroad' },
    ],
  },
  {
    text: 'International Competitions',
    subItems: [
      { text: 'UEFA Champions League', id: 'uefa-champions-league' },
      { text: 'UEFA Europa League', id: 'uefa-europa-league' },
      { text: 'FIFA Clubs World Cup', id: 'fifa-clubs-world-cup' },
      { text: 'UEFA Regions Cup', id: 'uefa-regions-league' },
    ],
  },
  {
    text: 'National Teams',
    subItems: [
      { text: 'Euro 2021', id: 'uefa-euro-2021' },
      { text: 'UEFA Nations League', id: 'uefa-nations-league' },
      { text: 'FIFA World Cup 2022', id: 'fifa-world-cup-2022' },
      { text: 'Out of Europe', id: 'national-out-of-europe' },
    ],
  },
  {
    text: 'Football Abroad',
    subItems: [
      { text: 'England', id: 'england' },
      { text: 'Spain', id: 'spain' },
      { text: 'Germany', id: 'germany' },
      { text: 'Italy', id: 'italy' },
      { text: 'France', id: 'france' },
      { text: 'Russia', id: 'russia' },
      { text: 'Ukraine', id: 'ukraine' },
      { text: 'Other', id: 'other' },
    ],
  },
];
