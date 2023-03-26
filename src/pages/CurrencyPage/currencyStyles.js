import styled from 'styled-components';

export const StyledCurrencyThumb = styled.div`
  position: relative;
  margin-top: 28px;
  background-color: ${p => p.theme.color.text_blue};
  background-image: linear-gradient(
    rgba(255, 255, 255, 0.2) 50px,
    #4a56e2 50px
  );
  height: 184px;
  width: 280px;

  color: ${p => p.theme.color.text_light};
  font-size: ${({ theme }) => theme.fontSizes.s};
  font-weight: ${({ theme }) => theme.fontWeights.normal};
  line-height: ${({ theme }) => theme.lineHeights.body};

  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: ${({ theme }) => theme.radii.large};

  & svg {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
  }
  @media screen and (min-width: 768px) {
    margin-top: 32px;
    width: 336px;
    height: 182px;
  }

  @media (min-width: 1280px) {
    width: 393px;
    height: 300px;
    padding-top: 17px;
    background-image: linear-gradient(
      rgba(255, 255, 255, 0.2) 60px,
      #4a56e2 60px
    );
  }
`;

export const StyledCurrencyTable = styled.table`
  grid-template-rows: repeat(2, 1fr);
  width: 100%;
  height: 100%;
`;

export const StyledCurrencyThead = styled.thead`
  height: 50px;
  @media (min-width: 1280px) {
    height: 60px;
  }
`;

export const StyledCurrencyTr = styled.tr`
  font-size: ${({ theme }) => theme.fontSizes.m};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  height: 50px;
  align-items: center;

  @media (min-width: 1280px) {
    height: 60px;
    align-items: initial;
  }
`;

export const StyledBodyTr = styled.tr`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  text-align: center;
  padding-top: 12px;
  z-index: 2;
  position: relative;
`;
