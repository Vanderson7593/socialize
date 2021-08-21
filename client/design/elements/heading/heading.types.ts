import { TextProps } from '../elements.types';

type HeadingVariant = 'h1' | 'h2' | 'h3' | 'h4';

export type HeadingProps = TextProps & {
  as?: HeadingVariant;
};
