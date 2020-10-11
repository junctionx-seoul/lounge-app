export interface GetExhibitionId {
  req: {
    id: string;
  };
  res: {
    exhibition: {
      background: {
        type: 'default';
        path: 'IMAGE_PATH_UPLOADED_S3';
      };
      hashtag: ['해시', '태그'];
      pieces: [];
      views: 10;
      _id: '5f663623d305dad100cb1830';
      title: '전시회 제asdf목';
      description: '전시회 설명';
      user: '5f4222cd9c987d1a8d057474';
      createdAt: '2020-09-19T16:47:31.866Z';
      updatedAt: '2020-09-19T18:45:33.423Z';
      __v: 0;
    };
    piece: [];
  };
}
export interface PostLogin {
  req: {
    username: string;
    password: string;
  };
  res: {
    accessToken: string;
    message?: string;
  };
}
export interface PostRegister {
  req: {
    username: string;
    password: string;
    name: string;
    birth: string;
    gender: 'M' | 'F';
    zepetoCode: string;
  };
  res: {
    hashtag: string[];
    _id: string;
    username: string;
    password: string;
    name: string;
    birth: string;
    gender: 'M' | 'F';
    zepetoCode: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
  };
}
export interface Resource {
  GetExhibitionId: GetExhibitionId;
  PostLogin: PostLogin;
  PostRegister: PostRegister;
}
