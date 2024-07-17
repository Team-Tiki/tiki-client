export interface PostLoginRequestBody {
  email: string;
  password: string;
}

export interface PostLoginResonse {
  success: boolean;
  message: string;
  data: {
    accessToken: string;
  };
}
