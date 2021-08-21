import {
  BorderProps,
  BoxShadowProps,
  ColorProps,
  FlexboxProps,
  GridGapProps,
  GridProps,
  GridTemplateColumnsProps,
  LayoutProps,
  PositionProps,
  ShadowProps,
  SpaceProps,
  TextAlignProps,
  TextShadowProps,
  TypographyProps,
} from 'styled-system';

export type TextProps =
  | ColorProps
  | TextAlignProps
  | TextShadowProps
  | TypographyProps
  | SpaceProps
  | PositionProps;

export interface ViewProps
  extends LayoutProps,
    FlexboxProps,
    TypographyProps,
    SpaceProps,
    ShadowProps,
    BoxShadowProps,
    PositionProps,
    ColorProps,
    GridGapProps,
    GridProps,
    GridTemplateColumnsProps,
    BorderProps {}
