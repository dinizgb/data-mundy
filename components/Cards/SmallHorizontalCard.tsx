import * as React from 'react';
import styled from 'styled-components';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { H3, H4 } from 'components/Texts/Typographies';
import Image from 'next/image';

const SmallHorizontalCardWrapper = styled.div<SmallHorizontalCardProps>`
    width: 100%;
    position: relative;
    margin: ${(props) => props.margin};
    background: ${({ theme }) => theme.colors.secondary};
`;

const SmallHorizontalCardThumb = styled.div`
    width: 100%;
    height: 100px;
    position: relative;
    margin-top: 25px;
    background: #222;
    img{
        border-radius: 8px;
    }
`;

type SmallHorizontalCardProps = {
    margin?: any;
}

export default function SmallHorizontalCard(props) {
    return (
        <a href="https://www.google.com/">
            <SmallHorizontalCardWrapper margin={props.margin}>
                <Box sx={{ width: '100%' }}>
                    <Grid container columnSpacing={{ xs: 1, sm: 2, md: 2 }}>
                        <Grid item xs={12} sm={6} md={5}>
                            <SmallHorizontalCardThumb>
                                <Image
                                    src={"/images/image-placeholder.jpg"}
                                    alt={`Card Alt`}
                                    layout="fill"
                                    objectFit="cover"
                                />
                            </SmallHorizontalCardThumb>
                        </Grid>
                        <Grid item xs={12} sm={6} md={7}>
                            <Grid container>
                                <Grid item xs={12}>
                                    <H3
                                    fontColor={({ theme }) => theme.colors.text_4}
                                    fontWeight={600}
                                    fontSize={16}
                                    lineHeight={24}
                                    xsFontSize={16}
                                    xsLineHeight={24}
                                    margin={`20px 0 0 0`}
                                    >
                                        Data Mundy releases a website to users to help them find the best data sources
                                    </H3>
                                    <H4
                                    fontColor={({ theme }) => theme.colors.text_2}
                                    fontWeight={400}
                                    fontSize={13}
                                    lineHeight={24}
                                    xsFontSize={13}
                                    xsLineHeight={24}
                                    margin={`5px 0 0 0`}
                                    >
                                        Lorem ipsum dolor sit amet...
                                    </H4>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Box>
            </SmallHorizontalCardWrapper>
        </a>
    );
}