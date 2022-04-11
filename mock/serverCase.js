// import mockjs from 'mockjs';
import { setData } from './utils';
const listData = {
  title: '',
  content: '',
  items: [
    {
      img_url:
        'https://t.alipayobjects.com/images/rmsweb/T11aVgXc4eXXXXXXXX.svg',
      title: 'Ant Design',
      content: 'Ant Design',
    },
    {
      img_url: 'https://zos.alipayobjects.com/rmsportal/faKjZtrmIbwJvVR.svg',
      title: 'Ant Motion',
      content: 'Ant Motion',
    },
    {
      img_url:
        'https://t.alipayobjects.com/images/rmsweb/T11aVgXc4eXXXXXXXX.svg',
      title: '一站式数据运营',
      content: '沉淀产品接入效率和运营小二工作效率数据',
    },
    {
      img_url: 'https://zos.alipayobjects.com/rmsportal/faKjZtrmIbwJvVR.svg',
    },
    {
      img_url:
        'https://t.alipayobjects.com/images/rmsweb/T11aVgXc4eXXXXXXXX.svg',
    },
    {
      img_url: 'https://zos.alipayobjects.com/rmsportal/faKjZtrmIbwJvVR.svg',
    },
    {
      img_url:
        'https://t.alipayobjects.com/images/rmsweb/T11aVgXc4eXXXXXXXX.svg',
    },
    {
      img_url: 'https://zos.alipayobjects.com/rmsportal/faKjZtrmIbwJvVR.svg',
    },
  ],
};

export default {
  'GET /server-case/list': {
    error: 0,
    msg: '操作成功',
    data: setData(listData),
  },
};
