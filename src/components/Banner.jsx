import React from 'react';
import { Button } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import QueueAnim from 'rc-queue-anim';
import BannerAnim, { Element } from 'rc-banner-anim';
import TweenOne, { TweenOneGroup } from 'rc-tween-one';

import './less/banner.less';

// 轮播图
class Banner extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <section className="banner" {...this.props}>
        {childrenToRender()}
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
      </section>
    );
  }
  imageToRender(item) {
    //   background-image: url('https://zos.alipayobjects.com/rmsportal/gGlUMYGEIvjDOOw.jpg');
    //   .bg0 {
    //   background: url("https://zos.alipayobjects.com/rmsportal/hzPBTkqtFpLlWCi.jpg") center;
    // }
    // .bg1 {
    //   background: url("https://zos.alipayobjects.com/rmsportal/xHxWkcvaIcuAdQl.jpg") center;
    // }
    return (
      <>
        <Element key="bg" className="bg" />
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
      </>
    );
  }
  childrenToRender() {
    let _this = this,
      items = this.props.items,
      itemsLength = items.length;
    if (itemsLength === 0) {
      return;
    }
    if (itemsLength === 1) {
      return this.imageToRender(items[0]);
    }
    return (
      <TweenOneGroup
        key="bannerGroup"
        enter={{ opacity: 0, type: 'from' }}
        leave={{ opacity: 0 }}
        component=""
      >
        <div className="banner-wrapper" key="wrapper">
          <BannerAnim key="BannerAnim">
            {items.map(function (item, i) {
              let key = i.toString();
              return (
                <Element
                  key={key}
                  className="banner-user-elem"
                  prefixCls="banner-user-elem"
                >
                  {_this.imageToRender(item)}
                </Element>
              );
            })}
          </BannerAnim>
        </div>
      </TweenOneGroup>
    );
  }
}

export default Banner;
