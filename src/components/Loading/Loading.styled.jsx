import styled from 'styled-components';

export const Backdrop = styled.div`
  position: fixed;
  z-index: 2000;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${(props) => props.bgc || 'var(--loader-background-color)'};
  backdrop-filter: blur(4px);
`;

export const WrapperForLoader = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
