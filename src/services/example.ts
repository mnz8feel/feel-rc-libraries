import { request } from 'umi';

export function getXXX(xxx: string): Promise<string[]> {
  return request('/api/xxx/getXXX', {
    method: 'GET',
    params: { xxx },
  }).then((res) => res.data);
}

export function setXXX(xxx: string) {
  return request('/api/xxx/setXXX', {
    method: 'POST',
    data: { xxx },
  });
}
