// 相册列表；暂无个人照片，保留现有图片资源与相册接口。
export interface Photo { url: string; caption?: string; }
export interface Album { id: string; title: string; description: string; cover: string; date: string; photos: Photo[]; }

export const albums: Album[] = [];