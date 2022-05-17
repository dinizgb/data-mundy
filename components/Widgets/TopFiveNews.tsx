import * as React from 'react';
import styled from 'styled-components';
import { H2 } from 'components/Texts/Typographies';
import SmallHorizontalCard from '../Cards/SmallHorizontalCard';

const TopFiveNewsWrapper = styled.div<TopFiveNewsWrapperProps>`
    width: 100%;
    position: relative;
    margin: ${(props) => props.margin};
    background: ${({ theme }) => theme.colors.secondary};
    border-radius: 8px;
    padding: 20px 0;
    @media (max-width: ${({ theme }) => theme.breakpoints.sm}px){
      margin: ${(props) => props.xsMargin};
    }
`;

const TopFiveNewsContainer = styled.div`
    width: 90%;
    position: relative;
    margin: 0 auto;
`;

type TopFiveNewsWrapperProps = {
  margin?: any;
  xsMargin?: any;
}

export default function TopFiveNews(props) {
  return (
    <TopFiveNewsWrapper margin={props.margin} xsMargin={props.xsMargin}>
        <TopFiveNewsContainer>
          <H2
            fontColor={({ theme }) => theme.colors.text_4}
            fontWeight={600}
            fontSize={20}
            lineHeight={21}
            xsFontSize={21}
            xsLineHeight={24}
            margin={0}
            >
            Latest News
          </H2>
          <SmallHorizontalCard margin={0} />
          <SmallHorizontalCard margin={0} />
          <SmallHorizontalCard margin={0} />
          <SmallHorizontalCard margin={0} />
          <SmallHorizontalCard margin={0} />
        </TopFiveNewsContainer>
    </TopFiveNewsWrapper>
  );
}