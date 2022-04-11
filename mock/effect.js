// import mockjs from 'mockjs';
import { setData } from './utils';
const listData = {
  items: [
    {
      img_url:
        'https://zos.alipayobjects.com/rmsportal/WBnVOjtIlGWbzyQivuyq.png',
      title: '一站式业务接入',
      content: '支付、结算、核算接入产品效率翻四倍',
    },
    {
      img_url:
        'https://zos.alipayobjects.com/rmsportal/YPMsLQuCEXtuEkmXTTdk.png',
      title: '一站式事中风险监控',
      content: '在所有需求配置环节事前风险控制和质量控制能力',
    },
    {
      img_url:
        'https://zos.alipayobjects.com/rmsportal/EkXWVvAaFJKCzhMmQYiX.png',
      title: '一站式数据运营',
      content: '沉淀产品接入效率和运营小二工作效率数据',
    },
  ],
};

export default {
  'GET /effect/list': {
    error: 0,
    msg: '操作成功',
    data: setData(listData),
  },
};
