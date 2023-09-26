import { Field } from 'formik';
import { styled } from 'styled-components';

export const FieldTextArea = styled(Field)`
  display: block;
  width: 335px;
  height: 184px;
  padding: 16px 18px;

  color: #f3f3f380;

  background-color: transparent;
  border: 1px solid #f3f3f380;
  border-radius: 14px;
  overflow: visible;

  &:focus {
    border: 1px solid #fff;
  }

  &::placeholder {
    overflow: visible;
    color: #f3f3f380;
  }

  &:focus::placeholder {
    position: absolute;
    top: -40px;

    z-index: 999;
  }
`;

export const FieldWrapper = styled.div`
  position: relative;
  overflow: visible;

  h3 {
    margin-bottom: 40px;
  }
`;
