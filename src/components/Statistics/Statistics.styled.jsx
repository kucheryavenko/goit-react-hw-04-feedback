import styled from 'styled-components';

export const List = styled.ul`
  padding: ${p => p.theme.space[1]}px;
  border: 2px solid;
  border-radius: ${p => p.theme.radii.primary}px;
`;

export const Item = styled.li`
  :not(:last-child) {
    margin-bottom: ${p => p.theme.space[0]}px;
  }
`;
