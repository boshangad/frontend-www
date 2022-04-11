import { request } from 'umi';

function getServiceList() {
  return request('/service/list', {
    skipErrorHandler: true,
  });
}
