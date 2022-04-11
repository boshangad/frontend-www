import * as React from 'react';
import { OverPack } from 'rc-scroll-anim';

export interface IProps<T> extends React.HTMLAttributes<T> {
  title?: string;
  titleContent?: string;
  overPack: typeof OverPack;
}

export default class Section<T> extends React.Component<IProps<T>> {}
