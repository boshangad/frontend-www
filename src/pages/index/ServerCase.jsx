import React from 'react';
import { Row, Col } from 'antd';
import Section from '@/components/Section';
import { TweenOneGroup } from 'rc-tween-one';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import { request } from 'umi';

// 服务案例
class ServerCase extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      dataList: props.dataList || [],
    };
  }
  componentDidMount() {
    this.getDataList();
  }
  getChildrenToRender() {
    return this.state.dataList.map(function (item, i) {
      let iToStr = i.toString(),
        name = 'serverCase:' + iToStr;
      return (
        <Col key={iToStr} name={name} className="block" md={6} xs={24}>
          <a className="content-block-content">
            <span>
              <img src={item.img_url} alt="img" height="100%" />
            </span>
            <p>{item.content}</p>
          </a>
        </Col>
      );
    });
  }
  render() {
    return (
      <Section title="客户案例" titleContent="在这里用一段话介绍服务的案例情况">
        <OverPack className="content-template" playScale={0.3}>
          <TweenOneGroup
            component={Row}
            key="ul"
            enter={{
              y: '+=30',
              opacity: 0,
              type: 'from',
              ease: 'easeInOutQuad',
            }}
            leave={{ y: '+=30', opacity: 0, ease: 'easeInOutQuad' }}
            className="content-img-wrapper"
            gutter={16}
          >
            {this.getChildrenToRender()}
          </TweenOneGroup>
        </OverPack>
      </Section>
    );
  }
  getDataList() {
    let _this = this;
    request('/server-case/list', {
      skipErrorHandler: true,
    }).then(function (res) {
      _this.setState({ dataList: res.data.data.items });
    });
  }
}

export default ServerCase;
