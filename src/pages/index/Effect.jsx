import React from 'react';
import Section from '@/components/Section';
import QueueAnim from 'rc-queue-anim';
import { Row, Col } from 'antd';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import { request } from 'umi';
import './less/Effect.less';

// 功能作用
class Effect extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      dataList: [],
    };
  }
  componentDidMount() {
    this.getDataList();
  }
  render() {
    const props = this.props;
    return (
      <Section
        className={props.className}
        id={props.id}
        title="客户案例"
        titleContent="在这里用一段话介绍服务的案例情况"
      >
        <OverPack playScale="0.3" className="">
          <QueueAnim type="bottom" key="block" leaveReverse component={Row}>
            {this.getChildrenToRender()}
          </QueueAnim>
        </OverPack>
      </Section>
    );
  }
  getChildrenToRender() {
    let sourceCoces = [],
      dataList = this.state.dataList;
    sourceCoces = dataList.map(function (item, i) {
      let iToStr = i.toString(),
        name = 'effect:' + iToStr;
      return (
        <Col key={iToStr} name={name} md={8} xs={24} className="content-block">
          <div className="content-block-item">
            <div name="image" className="content-block-icon">
              <img src={item.img_url} alt="img" />
            </div>
            <h1 name="title" className="content-block-title">
              {item.title}
            </h1>
            <div name="content">{item.content}</div>
          </div>
        </Col>
      );
    });
    return sourceCoces;
  }
  getDataList() {
    let _this = this;
    request('/effect/list', {
      skipErrorHandler: true,
    }).then(function (res) {
      _this.setState({ dataList: res.data.data.items });
    });
  }
}

export default Effect;
