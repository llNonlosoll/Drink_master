import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const RegistrationPageStyled = styled.section`
  display: flex;
  flex-direction: column;
  max-width: 100%;
  height: 100%;

  background-image: url('src/assets/start/start_mobile@1x.jpg');

  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  @media (max-width: 767.98px) and (min-device-pixel-ratio: 2),
    (max-width: 767.98px) and (-webkit-min-device-pixel-ratio: 2),
    (max-width: 767.98px) and (min-resolution: 192dpi),
    (max-width: 767.98px) and (min-resolution: 2dppx) {
    background-image: url('src/assets/start/start_mobile@2x.jpg');
  }

  @media (min-width: 768px) {
    background-image: url('src/assets/start/start_tablet@1x.jpg');
  }
  @media (min-width: 768px) and (min-device-pixel-ratio: 2),
    (min-width: 768px) and (-webkit-min-device-pixel-ratio: 2),
    (min-width: 768px) and (min-resolution: 192dpi),
    (min-width: 768px) and (min-resolution: 2dppx) {
    background-image: url('src/assets/start/start_tablet@2x.jpg');
  }
  @media (min-width: 1440px) {
    align-content: center;
    background-image: url('src/assets/start/start@1x.jpg');
  }
  @media (min-width: 1440px) and (min-device-pixel-ratio: 2),
    (min-width: 1440px) and (-webkit-min-device-pixel-ratio: 2),
    (min-width: 1440px) and (min-resolution: 192dpi),
    (min-width: 1440px) and (min-resolution: 2dppx) {
    background-image: url('src/assets/start/start@2x.jpg');
  }
`;

export const Container = styled.div`
  margin: auto;
  width: 335px;
  padding: 0 20px;

  @media (min-width: 768px) {
    width: 640px;
    padding: 0 64px;
  }

  @media (min-width: 1440px) {
    width: 1240px;
    padding: 0 100px;
  }
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    width: 400px;
  }
`;

export const Title = styled.h1`
  font-size: 28px;
  font-weight: 500;
  letter-spacing: -0.02;
  line-height: 1.14;
  color: #fafafa;
  margin-bottom: 28px;

  @media (min-width: 768px) {
    font-size: 40px;
    line-height: 1.1;
  }
`;

export const StyledLink = styled(Link)`
  margin-left: auto;
  margin-right: auto;
  text-decoration: underline;
  color: #f3f3f3;
  font-size: 12px;
  font-weight: 500;
  line-height: 1.33;

  cursor: pointer;

  &:hover {
    /* color: #161f37; */
  }

  @media (min-width: 768px) {
    font-size: 14px;
    line-height: 1.28;
  }
`;