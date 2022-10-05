import styled from 'styled-components';

export const Container = styled.div`
  width: 1200px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 30px;
`;

export const Card = styled.div`
  width: 400px;
  padding: 15px;

  background-color: ${p => p.theme.colors.primary};
  border-radius: ${p => p.theme.radii.primary}px;
  box-shadow: ${p => p.theme.shadows.shadow};
`;

export const Title = styled.h1`
  margin-bottom: ${p => p.theme.space[3]}px;
`;
