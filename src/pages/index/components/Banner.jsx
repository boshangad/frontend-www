import React from 'react';
import { Button } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';

import './banner.less';

class Banner extends React.PureComponent {
  render() {
    return (
      <div className="banner">
        <QueueAnim
          key="QueueAnim"
          type={['bottom', 'top']}
          delay={200}
          className="banner-text-wrapper"
        >
          <div key="title" className="banner-title">
            <img
              src="https://zos.alipayobjects.com/rmsportal/HqnZZjBjWRbjyMr.png"
              width="100%"
              alt="img"
            />
          </div>
          <div key="content" className="banner-content">
            一个高效的页面动画解决方案
          </div>
          <Button ghost key="button" className="banner-button">
            Learn More
          </Button>
        </QueueAnim>
        <TweenOne
          animation={{
            y: '-=20',
            yoyo: true,
            repeat: -1,
            duration: 1000,
          }}
          className="banner-icon"
          key="icon"
        >
          <DownOutlined />
        </TweenOne>
      </div>
    );
  }
}
export default Banner;
