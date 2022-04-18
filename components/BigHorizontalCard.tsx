import * as React from 'react';
import styled from 'styled-components';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { H3, H4, A } from 'components/Typographies';
import Avatar from '@mui/material/Avatar';
import Image from 'next/image';

type BigHorizontalCardProps = {
    margin?: any;
}

const BigHorizontalCardWrapper = styled.div<BigHorizontalCardProps>`
    width: 100%;
    position: relative;
    margin: ${(props) => props.margin};
    background: ${({ theme }) => theme.colors.secondary};
    border-radius: 8px;
    &:hover{
        background: ${({ theme }) => theme.colors.secondary_hover};
    }
`;

const BigHorizontalCardText = styled.div`
    @media (max-width: ${({ theme }) => theme.breakpoints.sm}px){
        width: 90%;
        margin-top: 0;
        margin-left: auto;
        margin-right: auto;
        h3{ 
            margin-top: 20px;
            margin-left: 0;
        }
        h4{
            margin-left: 0;
        }
    }
`;

const BigHorizontalCardAuthor = styled.div`
    width: 100%;
    margin-top: 20px;
    margin-left: 40px;
    margin-bottom: 30px;
    display: flex;
    @media (max-width: ${({ theme }) => theme.breakpoints.sm}px){
        width: 90%;
        margin-top: 20px;
        margin-left: 0;
    }
`;

const BigHorizontalCardThumb = styled.div`
    width: 90%;
    height: 250px;
    position: relative;
    margin-top: 40px;
    margin-bottom: 40px;
    background: #222;
    img{
        border-radius: 8px;
    }
    @media (max-width: ${({ theme }) => theme.breakpoints.sm}px){
        width: 90%;
        margin-top: 0;
        margin-bottom: 25px;
        margin-left: auto;
        margin-right: auto;
    }
`;

export default function BigHorizontalCard(props) {
    return (
        <a href="https://www.google.com/">
            <BigHorizontalCardWrapper margin={props.margin}>
                <Box sx={{ width: '100%' }}>
                    <Grid container columnSpacing={{ xs: 1, sm: 3, md: 4 }}>
                        <Grid item xs={12} sm={6} md={6}>
                            <BigHorizontalCardText>
                                <Grid container>
                                    <Grid item xs={12}>
                                        <H3
                                        fontColor={({ theme }) => theme.colors.text_4}
                                        fontWeight={400}
                                        fontSize={21}
                                        lineHeight={36}
                                        xsFontSize={21}
                                        xsLineHeight={36}
                                        margin={`40px 0 0 40px`}
                                        >
                                            Data Mundy releases a website to users to help them find the best data sources
                                        </H3>
                                        <H4
                                        fontColor={({ theme }) => theme.colors.text_2}
                                        fontWeight={400}
                                        fontSize={16}
                                        lineHeight={30}
                                        xsFontSize={16}
                                        xsLineHeight={30}
                                        margin={`10px 0 0 40px`}
                                        >
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent fringilla dignissim quam. 
                                            Integer lobortis vel eros vel placerat. Sed erat nibh, iaculis id sapien id, lacinia condimentum neque.
                                        </H4>
                                    </Grid>
                                    <Grid item xs={12} sm={6} md={6}>
                                        <BigHorizontalCardAuthor>
                                            <Avatar alt="Autor Avatar" src="/images/dm-logo.jpg" />
                                            <A
                                            fontColor={({ theme }) => theme.colors.text_4}
                                            hoverColor={({ theme }) => theme.colors.text_3}
                                            fontWeight={400}
                                            fontSize={15}
                                            lineHeight={24}
                                            xsFontSize={15}
                                            xsLineHeight={24}
                                            margin={`5px 0 0 10px`}
                                            padding={0}
                                            borderBottom={`none`}
                                            href="https://datamundy.com/about"
                                            >Data Mundy Staff</A>
                                        </BigHorizontalCardAuthor>
                                    </Grid>
                                </Grid>
                            </BigHorizontalCardText>
                        </Grid>
                        <Grid item xs={12} sm={6} md={6}>
                            <BigHorizontalCardThumb>
                                <Image
                                    src={"/images/image-placeholder.jpg"}
                                    alt={`Card Alt`}
                                    layout="fill"
                                    objectFit="cover"
                                />
                            </BigHorizontalCardThumb>
                        </Grid>
                    </Grid>
                </Box>
            </BigHorizontalCardWrapper>
        </a>
    );
}