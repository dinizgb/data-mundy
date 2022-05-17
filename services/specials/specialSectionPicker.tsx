import styled from 'styled-components';
import Image from 'next/image';
import { theme } from 'pages/_app';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { H3 } from 'components/Texts/Typographies';
import { ContentBody } from 'components/Texts/ContentBody';
import chartPicker from 'services/charts/chartPicker';
import isOddOrEven from 'utils/isOddOrEven';

const SpecialFormatThumb = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    border-radius: 8px;
    background: ${({ theme }) => theme.colors.secondary};
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

export default function specialSectionPicker(item: any, index: number) {
    const backgroundLogic = isOddOrEven(index) == 0 ? '' : theme.colors.oddSection;
    const sectionFormat = (
        item.section_type == 'side_by_side_texts' ?
            <Box sx={{ width: '100%', backgroundColor: backgroundLogic }}>
                <Container maxWidth="xl">
                    <Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }} style={{ marginTop: 50 }}>
                        <Grid item xs={12} sm={12} md={6} style={{ marginTop: 25 }}>
                            <H3
                            fontColor={({ theme }) => theme.colors.text_4}
                            fontWeight={300}
                            fontSize={60}
                            lineHeight={70}
                            xsFontSize={60}
                            xsLineHeight={70}
                            margin={0}
                            >
                            {item.section_headline}
                            </H3>
                        </Grid>
                        <Grid item xs={12} sm={12} md={6}>
                            <ContentBody dangerouslySetInnerHTML={{
                                __html: item.section_excerpt
                            }}
                            />
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        :
        item.section_type == 'side_by_side_text_and_image' ?
            <Box sx={{ width: '100%', backgroundColor: backgroundLogic, paddingTop: 0.4, paddingBottom: 8 }}>
                <Container maxWidth="xl">
                    <Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }} style={{ marginTop: 50 }}>
                        <Grid item xs={12} sm={12} md={6} style={{ marginTop: 25 }}>
                            <H3
                            fontColor={({ theme }) => theme.colors.text_4}
                            fontWeight={300}
                            fontSize={60}
                            lineHeight={70}
                            xsFontSize={60}
                            xsLineHeight={70}
                            margin={0}
                            >
                            {item.section_headline}
                            </H3>
                            <ContentBody dangerouslySetInnerHTML={{
                                __html: item.section_excerpt
                            }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={6}>
                            <SpecialFormatThumb>
                                <Image
                                src={item.section_image}
                                alt={item.section_headline}
                                layout="fill"
                                objectFit="cover"
                                />
                            </SpecialFormatThumb>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        :
        item.section_type == 'row_text_and_image' ?
            <Box sx={{ width: '100%', backgroundColor: backgroundLogic, paddingTop: 0.4, paddingBottom: 8 }}>
                <Container maxWidth="xl">
                    <Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }} style={{ marginTop: 50 }}>
                        <Grid item xs={12} style={{ marginTop: 25 }}>
                            <H3
                            fontColor={({ theme }) => theme.colors.text_4}
                            fontWeight={300}
                            fontSize={60}
                            lineHeight={70}
                            xsFontSize={60}
                            xsLineHeight={70}
                            margin={0}
                            >
                            {item.section_headline}
                            </H3>
                            <ContentBody dangerouslySetInnerHTML={{
                                __html: item.section_excerpt
                            }}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <SpecialFormatThumb>
                                <Image
                                src={item.section_image}
                                alt={item.section_headline}
                                layout="fill"
                                objectFit="cover"
                                />
                            </SpecialFormatThumb>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

        :
        item.section_type == 'side_by_side_text_and_chart' ?
            <Box sx={{ width: '100%', backgroundColor: backgroundLogic, paddingTop: 0.4, paddingBottom: 8 }}>
                <Container maxWidth="xl">               
                    <Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }} style={{ marginTop: 50 }}>
                        <Grid item xs={12} sm={12} md={6} style={{ marginTop: 25 }}>
                            <H3
                            fontColor={({ theme }) => theme.colors.text_4}
                            fontWeight={300}
                            fontSize={60}
                            lineHeight={70}
                            xsFontSize={60}
                            xsLineHeight={70}
                            margin={0}
                            >
                            {item.section_headline}
                            </H3>
                            <ContentBody dangerouslySetInnerHTML={{
                                __html: item.section_excerpt
                            }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={6}>
                            {chartPicker(item)}
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        :
        item.section_type == 'row_text_and_chart' ?
            <Box sx={{ width: '100%', backgroundColor: backgroundLogic, paddingTop: 0.4, paddingBottom: 8 }}>
                <Container maxWidth="xl">
                    <Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }} style={{ marginTop: 50 }}>
                        <Grid item xs={12} style={{ marginTop: 25 }}>
                            <H3
                            fontColor={({ theme }) => theme.colors.text_4}
                            fontWeight={300}
                            fontSize={60}
                            lineHeight={70}
                            xsFontSize={60}
                            xsLineHeight={70}
                            margin={0}
                            >
                            {item.section_headline}
                            </H3>
                            <ContentBody dangerouslySetInnerHTML={{
                                __html: item.section_excerpt
                            }}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            {chartPicker(item)}
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        :
        'A problem occured, we are sorry for the inconvenience. We are working on it.' 
    );

    return sectionFormat;
}