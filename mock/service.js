import mockjs from 'mockjs';

function getServiceList() {
  let images = [
    'https://zos.alipayobjects.com/rmsportal/ScHBSdwpTkAHZkJ.png',
    'https://zos.alipayobjects.com/rmsportal/NKBELAOuuKbofDD.png',
    'https://zos.alipayobjects.com/rmsportal/xMSBjgxBhKfyMWX.png',
    'https://zos.alipayobjects.com/rmsportal/MNdlBNhmDBLuzqp.png',
    'https://zos.alipayobjects.com/rmsportal/UsUmoBRyLvkIQeO.png',
    'https://zos.alipayobjects.com/rmsportal/ipwaQLBLflRfUrg.png',
  ];
  let responseByList = {
    error: 0,
    msg: '操作成功',
    data: {
      title: '蚂蚁金融云提供专业的服务',
      content: '基于阿里云强大的基础资源',
      items: [],
    },
  };
  for (let i = 0; i < 6; i++) {
    responseByList.data.items.unshift({
      img_url: images[0],
      title: mockjs.Random.cname(),
      content: mockjs.Random.title(20, 80),
    });
  }
  return responseByList;
}

export default {
  'GET /service/list': getServiceList(),
};
