import React from 'react';
import QueueAnim from 'rc-queue-anim';
import { Row, Col } from 'antd';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import { getChildrenToRender } from '@/utils/utils';

import './less/content.less';

const childrenWrapper = {
  className: 'content-block-wrapper',
  children: [
    {
      name: 'block',
      className: 'content-block',
      md: 8,
      xs: 24,
      children: {
        className: 'content-block-item',
        children: [
          {
            name: 'image',
            className: 'content-block-icon',
            children:
              'https://zos.alipayobjects.com/rmsportal/WBnVOjtIlGWbzyQivuyq.png',
          },
          {
            name: 'title',
            className: 'content-block-title',
            children: '一站式业务接入',
          },
          { name: 'content', children: '支付、结算、核算接入产品效率翻四倍' },
        ],
      },
    },
    {
      name: 'block1',
      className: 'content-block',
      md: 8,
      xs: 24,
      children: {
        className: 'content-block-item',
        children: [
          {
            name: 'image',
            className: 'content-block-icon',
            children:
              'https://zos.alipayobjects.com/rmsportal/YPMsLQuCEXtuEkmXTTdk.png',
          },
          {
            name: 'title',
            className: 'content-block-title',
            children: '一站式事中风险监控',
          },
          {
            name: 'content',
            children: '在所有需求配置环节事前风险控制和质量控制能力',
          },
        ],
      },
    },
    {
      name: 'block2',
      className: 'content-block',
      md: 8,
      xs: 24,
      children: {
        className: 'content-block-item',
        children: [
          {
            name: 'image',
            className: 'content-block-icon',
            children:
              'https://zos.alipayobjects.com/rmsportal/EkXWVvAaFJKCzhMmQYiX.png',
          },
          {
            name: 'title',
            className: 'content-block-title',
            children: '一站式数据运营',
          },
          {
            name: 'content',
            children: '沉淀产品接入效率和运营小二工作效率数据',
          },
        ],
      },
    },
  ],
};

class Content extends React.PureComponent {
  render() {
    const props = this.props;
    return (
      <section className="home-page-wrapper content-wrapper" {...props}>
        <div className="home-page content">
          {this.getTitleTemplate()}
          <OverPack playScale="0.3" className="content-template">
            <QueueAnim type="bottom" key="block" leaveReverse component={Row}>
              {childrenWrapper.children.map((block, i) => {
                const { children: item, ...blockProps } = block;
                return (
                  <Col key={i.toString()} {...blockProps}>
                    <div {...item}>
                      {item.children.map(getChildrenToRender)}
                    </div>
                  </Col>
                );
              })}
            </QueueAnim>
          </OverPack>
        </div>
      </section>
    );
  }
  getTitleTemplate() {
    const props = this.props;
    let title = undefined,
      titleContent = undefined;
    // 标题和标题内容展示
    if (props.title || props.titleContent) {
      // 标题展示的html
      if (props.title) {
        title = <h1 name="title">{props.title}</h1>;
      }
      // 标题内容的html展示
      if (props.titleContent) {
        titleContent = (
          <div className="title-content">{props.titleContent}</div>
        );
      }
      return (
        <div className="title-wrapper">
          {title}
          {titleContent}
        </div>
      );
    }
    return;
  }
}

export default Content;
