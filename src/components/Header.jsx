import React from 'react';
import TweenOne from 'rc-tween-one';
import { Menu } from 'antd';
import { getChildrenToRender } from '@/utils/utils';

// 加载样式
import './Header.less';

const { Item, SubMenu } = Menu;

const dataSource = {
  className: 'header-menu',
  children: [
    {
      name: 'item',
      className: 'header-item',
      children: {
        href: '#',
        children: [{ children: '导航一', name: 'text' }],
      },
      subItem: [
        {
          name: 'sub0',
          className: 'item-sub',
          children: {
            className: 'item-sub-item',
            children: [
              {
                name: 'image0',
                className: 'item-image',
                children:
                  'https://gw.alipayobjects.com/zos/rmsportal/ruHbkzzMKShUpDYMEmHM.svg',
              },
              {
                name: 'title',
                className: 'item-title',
                children: 'Ant Design',
              },
              {
                name: 'content',
                className: 'item-content',
                children: '企业级 UI 设计体系',
              },
            ],
          },
        },
        {
          name: 'sub1',
          className: 'item-sub',
          children: {
            className: 'item-sub-item',
            children: [
              {
                name: 'image0',
                className: 'item-image',
                children:
                  'https://gw.alipayobjects.com/zos/rmsportal/ruHbkzzMKShUpDYMEmHM.svg',
              },
              {
                name: 'title',
                className: 'item-title',
                children: 'Ant Design',
              },
              {
                name: 'content',
                className: 'item-content',
                children: '企业级 UI 设计体系',
              },
            ],
          },
        },
      ],
    },
    {
      name: 'item1',
      className: 'header0-item',
      children: {
        href: '#',
        children: [{ children: '导航二', name: 'text' }],
      },
    },
    {
      name: 'item2',
      className: 'header-item',
      children: {
        href: '#',
        children: [{ children: '导航三', name: 'text' }],
      },
    },
    {
      name: 'item3',
      className: 'header-item',
      children: {
        href: '#',
        children: [{ children: '导航四', name: 'text' }],
      },
    },
  ],
};

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
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

    return (
      <TweenOne
        component="header"
        animation={{ opacity: 0, type: 'from' }}
        className="header home-page-wrapper"
      >
        <div className="home-page">
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
          <TweenOne className="header-menu">
            <Menu mode="horizontal" defaultSelectedKeys={['sub0']} theme="dark">
              {navChildren}
            </Menu>
          </TweenOne>
        </div>
      </TweenOne>
    );
  }
}

export default Header;
