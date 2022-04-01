import React from 'react';
import TweenOne from 'rc-tween-one';
import { Menu } from 'antd';
import { getChildrenToRender } from '@/utils/utils';

const { Item, SubMenu } = Menu;

const sourceData = {
  className: 'home-page',
  gutter: 0,
  children: [
    {
      name: 'block0',
      xs: 24,
      md: 6,
      className: 'block',
      title: {
        className: 'logo',
        children: 'https://zos.alipayobjects.com/rmsportal/qqaimmXZVSwAhpL.svg',
      },
      childWrapper: {
        className: 'slogan',
        children: [
          {
            name: 'content0',
            children: 'Animation specification and components of Ant Design.',
          },
        ],
      },
    },
    {
      name: 'block1',
      xs: 24,
      md: 6,
      className: 'block',
      title: { children: '产品' },
      childWrapper: {
        children: [
          { name: 'link0', href: '#', children: '产品更新记录' },
          { name: 'link1', href: '#', children: 'API文档' },
          { name: 'link2', href: '#', children: '快速入门' },
          { name: 'link3', href: '#', children: '参考指南' },
        ],
      },
    },
    {
      name: 'block2',
      xs: 24,
      md: 6,
      className: 'block',
      title: { children: '关于' },
      childWrapper: {
        children: [
          { href: '#', name: 'link0', children: 'FAQ' },
          { href: '#', name: 'link1', children: '联系我们' },
        ],
      },
    },
    {
      name: 'block3',
      xs: 24,
      md: 6,
      className: 'block',
      title: { children: '资源' },
      childWrapper: {
        children: [
          { href: '#', name: 'link0', children: 'Ant Design' },
          { href: '#', name: 'link1', children: 'Ant Motion' },
        ],
      },
    },
  ],
};

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      phoneOpen: undefined,
    };
  }

  phoneClick = () => {
    const phoneOpen = !this.state.phoneOpen;
    this.setState({
      phoneOpen,
    });
  };

  render() {
    const { phoneOpen } = this.state;
    const navData = dataSource.children;
    const navChildren = navData.map((item) => {
      const { children: a, subItem, ...itemProps } = item;
      if (subItem) {
        return (
          <SubMenu
            key={item.name}
            {...itemProps}
            title={
              <div {...a} className={`header-item-block ${a.className}`.trim()}>
                {a.children.map(getChildrenToRender)}
              </div>
            }
            popupClassName="header-item-child"
          >
            {subItem.map(($item, ii) => {
              const { children: childItem } = $item;
              const child = childItem.href ? (
                <a {...childItem}>
                  {childItem.children.map(getChildrenToRender)}
                </a>
              ) : (
                <div {...childItem}>
                  {childItem.children.map(getChildrenToRender)}
                </div>
              );
              return (
                <Item key={$item.name || ii.toString()} {...$item}>
                  {child}
                </Item>
              );
            })}
          </SubMenu>
        );
      }
      return (
        <Item key={item.name} {...itemProps}>
          <a {...a} className={`header-item-block ${a.className}`.trim()}>
            {a.children.map(getChildrenToRender)}
          </a>
        </Item>
      );
    });
    const moment = phoneOpen === undefined ? 300 : null;
    return (
      <TweenOne
        component="header"
        animation={{ opacity: 0, type: 'from' }}
        className="header home-page-wrapper"
      >
        <div className={`${phoneOpen ? ' open home-page' : ' home-page'}`}>
          <TweenOne
            animation={{ x: -30, type: 'from', ease: 'easeOutQuad' }}
            className="header-logo"
          >
            <img
              width="100%"
              src="https://os.alipayobjects.com/rmsportal/mlcYmsRilwraoAe.svg"
              alt="img"
            />
          </TweenOne>
          <div
            className="header-mobile-menu"
            onClick={() => {
              this.phoneClick();
            }}
          >
            <em />
            <em />
            <em />
          </div>

          <TweenOne
            className="header-menu"
            animation={{
              height: 0,
              duration: 300,
              onComplete: (e) => {
                if (this.state.phoneOpen) {
                  e.target.style.height = 'auto';
                }
              },
              ease: 'easeInOutQuad',
            }}
            moment={moment}
            reverse={!!phoneOpen}
          >
            <Menu mode="inline" defaultSelectedKeys={['sub0']} theme="dark">
              {navChildren}
            </Menu>
          </TweenOne>
        </div>
      </TweenOne>
    );
  }
}

export default Header;
