import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  justify-content: center;
  margin-bottom: ${p => p.theme.space[3]}px;
`;

export const Item = styled.li`
  :not(:last-child) {
    margin-right: ${p => p.theme.space[2]}px;
  }
`;

export const Button = styled.button`
  padding: ${p => p.theme.space[1]}px ${p => p.theme.space[4]}px;
  font-weight: 500;
  font-size: ${p => p.theme.space[3]}px;

  color: ${p => p.theme.colors.primary};
  background-color: ${p => p.theme.colors.accent};
  border: none;
  border-radius: ${p => p.theme.radii.primary}px;
  cursor: pointer;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover {
    background-color: ${p => p.theme.colors.hover};
    box-shadow: ${p => p.theme.shadows.shadow};
  }
`;
