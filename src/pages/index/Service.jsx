import React from 'react';
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
import { Row, Col } from 'antd';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import Section from '@/components/Section';
import { request } from 'umi';
import './less/Service.less';

// 服务
class Service extends React.PureComponent {
  getDelay = (e, b) => (e % b) * 100 + Math.floor(e / b) * 100 + b * 100;
  constructor(props) {
    super(props);
    this.state = {
      dataList: this.props.items || [],
      title: this.props.title || '',
      content: this.props.content || '',
    };
  }
  componentDidMount() {
    let _this = this;
    request('/service/list', {
      skipErrorHandler: true,
    }).then(function (res) {
      _this.setState({
        title: res.data.title,
        content: res.data.content,
        dataList: res.data.items,
      });
    });
  }
  render() {
    let title = this.state.title,
      content = this.state.content;
    return (
      <Section title={title} content={content}>
        <OverPack playScale="0.3" className="content-template">
          <QueueAnim key="u" type="bottom">
            <Row key="row" className="content-block-wrapper">
              {this.childrenToRender(this.state.dataList)}
            </Row>
          </QueueAnim>
        </OverPack>
      </Section>
    );
  }
  childrenToRender(items) {
    let clearFloatNum = 0,
      _this = this;
    return items.map(function (item, i) {
      let key = i.toString(),
        delay = _this.getDelay(i, 24 / 8),
        liAnim = {
          opacity: 0,
          type: 'from',
          ease: 'easeOutQuad',
          delay,
        },
        childrenAnim = { ...liAnim, x: '+=10', delay: delay + 100 };
      clearFloatNum += 8;
      clearFloatNum = clearFloatNum > 24 ? 0 : clearFloatNum;
      return (
        <TweenOne
          component={Col}
          animation={liAnim}
          key={key}
          componentProps={{ md: 8, xs: 24 }}
          className={
            !clearFloatNum ? `content-block clear-both`.trim() : 'content-block'
          }
        >
          <TweenOne
            animation={{
              x: '-=10',
              opacity: 0,
              type: 'from',
              ease: 'easeOutQuad',
            }}
            key="img"
            className="content-icon"
          >
            <img src={item.img_url} width="100%" alt="img" />
          </TweenOne>
          <div className="content-text">
            <TweenOne
              key="h2"
              animation={childrenAnim}
              component="h2"
              className="content-title"
            >
              {item.title}
            </TweenOne>
            <TweenOne
              key="p"
              animation={{ ...childrenAnim, delay: delay + 200 }}
              component="div"
              className="content-content"
            >
              {item.content}
            </TweenOne>
          </div>
        </TweenOne>
      );
    });
  }

  // 调用外部方法
}

export default Service;
