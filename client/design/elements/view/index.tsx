import styled from '@emotion/styled';
import {
  border,
  color,
  compose,
  flexbox,
  grid,
  gridGap,
  gridTemplateColumns,
  layout,
  position,
  shadow,
  space,
  typography,
} from 'styled-system';

import { ViewProps } from '../elements.types';

const View = styled('div')<ViewProps>(
  compose(
    border,
    color,
    flexbox,
    grid,
    gridGap,
    gridTemplateColumns,
    layout,
    position,
    shadow,
    space,
    typography
  )
);

export default View;
