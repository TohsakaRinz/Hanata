// 友链数据；保留已有《明日方舟》主题 PRTS 链接作为站点元素。
export interface Friend { id: string; name: string; url: string; description: string; avatar: string; themeColor: string; }

export const friendsData: Friend[] = [
  {
    "id": "amiya",
    "name": "罗德岛 PRTS",
    "description": "记录泰拉大陆的各项数据与前文明遗迹，愿源石的阴霾早日散去。",
    "avatar": "https://bu.dusays.com/2026/03/24/69c1e38b4c370.jpg",
    "url": "https://prts.wiki/",
    "themeColor": "rgba(16, 185, 129, 0.5)"
  },
];