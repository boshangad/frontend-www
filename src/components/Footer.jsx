import React from 'react';
import TweenOne from 'rc-tween-one';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import QueueAnim from 'rc-queue-anim';
import { Row, Col } from 'antd';
import { getChildrenToRender, isImg } from '@/utils/utils';

// 底部样式
import './less/Footer.less';

const sourceData = {
  className: 'home-page',
  gutter: 0,
  children: [
    {
      name: 'block0',
      xs: 24,
      md: 6,
      className: 'block',
      title: {
        className: 'logo',
        children: 'https://zos.alipayobjects.com/rmsportal/qqaimmXZVSwAhpL.svg',
      },
      childWrapper: {
        className: 'slogan',
        children: [
          {
            name: 'content0',
            children: 'Animation specification and components of Ant Design.',
          },
        ],
      },
    },
    {
      name: 'block1',
      xs: 24,
      md: 6,
      className: 'block',
      title: { children: '产品' },
      childWrapper: {
        children: [
          { name: 'link0', href: '#', children: '产品更新记录' },
          { name: 'link1', href: '#', children: 'API文档' },
          { name: 'link2', href: '#', children: '快速入门' },
          { name: 'link3', href: '#', children: '参考指南' },
        ],
      },
    },
    {
      name: 'block2',
      xs: 24,
      md: 6,
      className: 'block',
      title: { children: '关于' },
      childWrapper: {
        children: [
          { href: '#', name: 'link0', children: 'FAQ' },
          { href: '#', name: 'link1', children: '联系我们' },
        ],
      },
    },
    {
      name: 'block3',
      xs: 24,
      md: 6,
      className: 'block',
      title: { children: '资源' },
      childWrapper: {
        children: [
          { href: '#', name: 'link0', children: 'Ant Design' },
          { href: '#', name: 'link1', children: 'Ant Motion' },
        ],
      },
    },
  ],
};

class Footer extends React.Component {
  static defaultProps = {
    className: 'footer',
  };

  getLiChildren = (data) =>
    data.map((item, i) => {
      const { title, childWrapper, ...itemProps } = item;
      return (
        <Col key={i.toString()} {...itemProps} title={null} content={null}>
          <h2 {...title}>
            {typeof title.children === 'string' &&
            title.children.match(isImg) ? (
              <img src={title.children} width="100%" alt="img" />
            ) : (
              title.children
            )}
          </h2>
          <div {...childWrapper}>
            {childWrapper.children.map(getChildrenToRender)}
          </div>
        </Col>
      );
    });

  render() {
    const childrenToRender = this.getLiChildren(sourceData.children);
    return (
      <div className="home-page-wrapper footer-wrapper">
        <OverPack className="footer1" playScale="0.2">
          <QueueAnim
            type="bottom"
            key="ul"
            leaveReverse
            component={Row}
            {...sourceData}
          >
            {childrenToRender}
          </QueueAnim>
          <TweenOne
            animation={{ y: '+=30', opacity: 0, type: 'from' }}
            key="copyright"
            className="copyright-wrapper"
          >
            <div className="home-page">
              <div className="copyright">
                <span>
                  ©2018 by <a href="https://motion.ant.design">Ant Motion</a>{' '}
                  All Rights Reserved
                </span>
              </div>
            </div>
          </TweenOne>
        </OverPack>
      </div>
    );
  }
}

export default Footer;
