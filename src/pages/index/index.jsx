/* eslint no-undef: 0 */
/* eslint arrow-parens: 0 */
import React from 'react';

import Banner from './Banner';
import Effect from './Effect';
import ServerCase from './ServerCase';
import Service from './Service';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const children = [
      <Banner key="banner" items={[{}, {}, {}]}></Banner>,
      <Effect key="effect" id="effect"></Effect>,
      <ServerCase key="ServerCase" id="ServerCase"></ServerCase>,
      <Service key="service"></Service>,
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
