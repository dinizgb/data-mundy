import * as React from 'react';
import styled from 'styled-components';
import BigHorizontalCard from './BigHorizontalCard';

const HorizontalListWrapper = styled.div`
    position: relative;
`;

export default function HorizontalList() {
  return (
    <HorizontalListWrapper>
        <BigHorizontalCard margin={`0 0 30px 0`} />
        <BigHorizontalCard margin={`0 0 30px 0`} />
        <BigHorizontalCard margin={`0 0 30px 0`} />
        <BigHorizontalCard margin={`0 0 30px 0`} />
    </HorizontalListWrapper>
  );
}