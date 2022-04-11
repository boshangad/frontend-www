import React from 'react';
import { Button } from 'antd';
import QueueAnim from 'rc-queue-anim';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// import { DownOutlined } from '@ant-design/icons';
// import TweenOne, { TweenOneGroup } from 'rc-tween-one';

import './less/Banner.less';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

// 轮播图
class Banner extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <section className="banner" {...this.props}>
        {this.childrenToRender()}
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
      itemsLength = items ? items.length : 0;
    if (itemsLength === 0) {
      return;
    }
    return (
      <Swiper
        slidesPerView={1}
        loop={true}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {items.map(function (item, i) {
          let key = i.toString();
          return (
            <SwiperSlide key={key}>
              <img
                height={300}
                src="https://zos.alipayobjects.com/rmsportal/xHxWkcvaIcuAdQl.jpg"
                width="100%"
                alt="img"
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    );
  }
}

export default Banner;
