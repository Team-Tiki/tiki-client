export type File = {
  fileId: string | number;
  title: string;
  volume: number;
  createdAt: string;
  type: 'pdf' | 'jpeg' | 'png' | 'jpg' | 'ppt' | 'word';
};

export type Folder = File[] & {
  title: string;
};
