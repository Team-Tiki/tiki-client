import { HttpResponse, http } from 'msw';

export const workspaceHandler = [
  http.post('/team', () => {
    return HttpResponse.json({
      success: true,
      message: '팀 생성 성공',
      data: null,
    });
  }),
];
