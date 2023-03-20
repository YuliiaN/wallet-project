import { Field } from 'formik';

import styled from 'styled-components';

export const StyledField = styled(Field)`
  display: block;
  margin: 0 auto;
  position: relative;
  width: 280px;
  margin-bottom: 40px;
  padding-left: 54px;
  height: 36px;

  outline: none;
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.color.text_grey_secondary};
`;

export const InputLabel = styled.label`
  position: relative;
  display: block;
  width: 280px;
  margin: 0 auto;
  min-height: 70px;

  @media (min-width: 768px) {
    width: 410px;
  }
`;

export const InputBox = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 5px;
  & svg {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 10px;
    z-index: 2;
    color: #bdbdbd;
  }
`;

export const Label = styled.span`
  display: block;

  text-align: left;
`;

export const Input = styled.input`
  /* @include font-circe-small; */
  display: flex;
  background-color: ${({ theme }) => theme.color.bg_white};
  padding-left: 50px;
  width: 100%;
  height: 36px;

  outline: none;
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.color.text_grey_secondary};
  color: ${({ theme }) => theme.color.text_dark};

  &::placeholder {
    color: #bdbdbd;
  }
`;

export const ErrorMessage = styled.div`
  text-align: right;

  font-size: 12px;
  color: ${({ theme }) => theme.color.text_pink};
`;
