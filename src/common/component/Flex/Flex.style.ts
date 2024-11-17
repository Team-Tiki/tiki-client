import { css } from '@emotion/react';

export interface FlexStyle {
  direction?: 'row' | 'column';
  align?:
    | 'normal'
    | 'normal'
    | 'stretch'
    | 'center'
    | 'start'
    | 'end'
    | 'flex-start'
    | 'flex-end'
    | 'self-start'
    | 'self-end'
    | 'baseline'
    | 'inherit'
    | 'initial'
    | 'unset';
  justify?:
    | 'center'
    | 'start'
    | 'flex-start'
    | 'end'
    | 'flex-end'
    | 'left'
    | 'right'
    | 'normal'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'
    | 'stretch'
    | 'inherit'
    | 'initial'
    | 'revert'
    | 'unset';
  gap?: string;

  wrap?: 'nowrap' | 'wrap' | 'wrap-reverse' | 'inherit' | 'initial';
  basis?: 0 | 'auto' | '200px';
  grow?: string;
  shrink?: number;

  position?: 'static' | 'absolute' | 'relative' | 'fixed' | 'sticky' | 'inherit';
  top?: string;
  right?: string;
  bottom?: string;
  left?: string;

  width?: string;
  height?: string;
  maxWidth?: string;
  maxHeight?: string;

  margin?: string;
  marginRight?: string;
  marginTop?: string;
  marginLeft?: string;
  marginBottom?: string;
  padding?: string;
  paddingTop?: string;
  paddingRight?: string;
  paddingBottom?: string;
  paddingLeft?: string;
}

export const getFlexStyle = ({
  direction = 'row',
  align = 'flex-start',
  justify = 'flex-start',
  gap = '0px',
  position = 'static',
  top = '',
  right = '',
  bottom = '',
  left = '',
  wrap = 'nowrap',
  basis = 'auto',
  grow = '0',
  shrink = 0,
  width = '',
  height = '',
  maxWidth = '',
  maxHeight = '',
  margin = '0',
  marginRight = '',
  marginTop = '',
  marginLeft = '',
  marginBottom = '',
  padding = '',
  paddingTop = '',
  paddingRight = '',
  paddingBottom = '',
  paddingLeft = '',
}: FlexStyle) =>
  css({
    display: 'flex',
    position,
    top,
    right,
    bottom,
    left,
    flexWrap: wrap,
    flexBasis: basis,
    flexGrow: grow,
    flexShrink: shrink,
    flexDirection: direction,
    alignItems: align,
    justifyContent: justify,
    gap,
    width,
    height,
    maxWidth,
    maxHeight,
    margin,
    marginRight,
    marginLeft,
    marginTop,
    marginBottom,
    padding,
    paddingTop,
    paddingRight,
    paddingBottom,
    paddingLeft,
  });
