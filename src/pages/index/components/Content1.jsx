import React from 'react';
import QueueAnim from 'rc-queue-anim';
import { Row, Col } from 'antd';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import { getChildrenToRender } from '@/utils/utils';

import './less/content.less';

class Content extends React.PureComponent {
  render() {
    return (
      <section className="home-page-wrapper content-wrapper">
        <div className="home-page content">
          <div className="title-wrapper">
            <h1 name="title">产品与服务</h1>
            <div className="title-content">
              我是搜索是杀杀杀是 是是是是是是是是是是是
            </div>
          </div>
          <OverPack playScale="0.3" className="content-template">
            <QueueAnim type="bottom" key="block" leaveReverse component={Row}>
              <Col key={i.toString()} {...blockProps}>
                <div {...item}>{item.children.map(getChildrenToRender)}</div>
              </Col>
            </QueueAnim>
          </OverPack>
        </div>
      </section>
    );
  }
}

export default Content;
