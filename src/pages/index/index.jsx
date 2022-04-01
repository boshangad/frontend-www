/* eslint no-undef: 0 */
/* eslint arrow-parens: 0 */
import React from 'react';

import Banner from './components/Banner';

import Banner0 from './Banner0';
import Content0 from './Content0';
import Content5 from './Content5';
import Content3 from './Content3';

import {
  Banner01DataSource,
  Content00DataSource,
  Content50DataSource,
  Content30DataSource,
} from './data.source';
import './less/antMotionStyle.less';

let isMobile = false;

export default class Home extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const children = [
      <Banner></Banner>,
      <Content0
        id="Content0_0"
        key="Content0_0"
        dataSource={Content00DataSource}
        isMobile={isMobile}
      />,
      <Content5
        id="Content5_0"
        key="Content5_0"
        dataSource={Content50DataSource}
        isMobile={isMobile}
      />,
      <Content3
        id="Content3_0"
        key="Content3_0"
        dataSource={Content30DataSource}
        isMobile={isMobile}
      />,
    ];
    return (
      <div
        className="templates-wrapper"
        ref={(d) => {
          this.dom = d;
        }}
      >
        {children}
      </div>
    );
  }
}
