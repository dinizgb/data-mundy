import * as React from 'react';
import styled from 'styled-components';
import { H2, H3 } from 'components/Typographies';
import { PrimaryButton } from 'components/Buttons';

const DonateWidgetWrapper = styled.div<DonateWidgetWrapperProps>`
    width: 100%;
    position: -webkit-sticky;
    position: sticky;
    display: flex;
    flex-direction: column;
    margin: ${(props) => props.margin};
    background: ${({ theme }) => theme.colors.secondary};
    border-radius: 8px;
    padding: 20px 0;
`;

type DonateWidgetWrapperProps = {
  margin?: any;
}

export default function DonateWidget(props) {
  return (
    <DonateWidgetWrapper margin={props.margin}>
        <H2
            fontColor={({ theme }) => theme.colors.text_4}
            fontWeight={600}
            fontSize={20}
            lineHeight={32}
            xsFontSize={20}
            xsLineHeight={32}
            margin={`0 20px 10px 20px`}
            >
            Help us to keep our website up and running
        </H2>
        <H3
            fontColor={({ theme }) => theme.colors.text_2}
            fontWeight={400}
            fontSize={15}
            lineHeight={24}
            xsFontSize={15}
            xsLineHeight={24}
            margin={`0 20px`}
            >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent fringilla dignissim quam. Integer lobortis vel eros vel placerat. Sed erat nibh, iaculis id sapien id, lacinia condimentum neque.
        </H3>
        <PrimaryButton href="/donate" width={`150px`} padding={`12px 0`} margin={`20px auto 0 auto`} fontSize={18}>Donate</PrimaryButton>
    </DonateWidgetWrapper>
  );
}