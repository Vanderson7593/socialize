import { color, compose, textAlign, textShadow, typography } from 'styled-system';

// eslint-disable-next-line import/prefer-default-export
export const ComposedTypography = compose(color, textAlign, textShadow, typography);
