import styled from 'styled-components';

export const ModalWrap = styled.div`
position: relative;
`;

export const UserLogoWrapper = styled.span`
  display: block;
  width: 32px;
  height: 32px;

  @media (min-width: 768px) {
    width: 44px;
    height: 44px;
  }

  @media (min-width: 1280px) {
  }
`;
export const UserLogoImg = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 32px;
  @media (min-width: 768px) {
    width: 44px;
    height: 44px;
    border-radius: 44px;
  }
`;

export const Button = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin-right: 2px;
  padding-top: 0;
  padding-bottom: 0;

  background-color: transparent;
  border: none;

  color: var(--button-color);
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;

  @media (min-width: 375px) {
    margin-right: 14px;
  }

  @media (min-width: 768px) {
    gap: 14px;
    margin-right: 24px;
  }
  @media (min-width: 1280px) {
    gap: 14px;
    margin-right: 0px;
  }
`;
