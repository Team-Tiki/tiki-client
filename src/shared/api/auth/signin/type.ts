export interface PostLoginRequestBody {
  email: string;
  password: string;
}

export interface PostLoginResonse {
  data: {
    accessToken: string;
    refreshToken: string;
  };
}
