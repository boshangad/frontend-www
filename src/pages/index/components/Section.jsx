import React from 'react';
import './less/Section.less';

class Section extends React.PureComponent {
  render() {
    let props = this.props;
    let className = 'section-page-wrapper section-wrapper ' + props.className;
    return (
      <section className={className} id={props.id}>
        <div className="section-page section">
          {this.getTitleTemplate()}
          {props.children}
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

export default Section;
