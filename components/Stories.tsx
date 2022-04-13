
import React from 'react';
import styled from 'styled-components';
import ScrollContainer from 'react-indiana-drag-scroll';

const StoriesWrapper = styled.div`
  width: 100%;
  padding: 10px 0;
  display: -moz-box;
  display: -webkit-box;
  top: 0;
`;

const StoriesItem = styled.div`
  width: 170px;
  height: 250px;
  margin: 0 20px 0 0;
  padding: 4px;
  cursor: pointer;
  border-radius: 8px;
  position: relative;
  background: url('${(props) => `${props.img}`}');
  background-repeat: no-repeat;
  background-size: cover;
  a{
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }
`;

export default function Stories() {
    return (
        <>
            <StoriesWrapper>
                <ScrollContainer component={StoriesWrapper}>
                  <StoriesItem img={`https://classic.exame.com/wp-content/uploads/2021/05/2021-04-22T130447Z_1_LYNXMPEH3L0R9_RTROPTP_4_CLIMATE-CHANGE-EU-LAW-1-1.jpg?quality=70&strip=info&w=1024`}>
                      <a href="https://www.google.com/"></a>
                  </StoriesItem>
                  <StoriesItem img={`https://classic.exame.com/wp-content/uploads/2021/05/2021-04-22T130447Z_1_LYNXMPEH3L0R9_RTROPTP_4_CLIMATE-CHANGE-EU-LAW-1-1.jpg?quality=70&strip=info&w=1024`}>
                      <a href="https://www.google.com/"></a>
                  </StoriesItem>
                  <StoriesItem img={`https://classic.exame.com/wp-content/uploads/2021/05/2021-04-22T130447Z_1_LYNXMPEH3L0R9_RTROPTP_4_CLIMATE-CHANGE-EU-LAW-1-1.jpg?quality=70&strip=info&w=1024`}>
                      <a href="https://www.google.com/"></a>
                  </StoriesItem>
                  <StoriesItem img={`https://classic.exame.com/wp-content/uploads/2021/05/2021-04-22T130447Z_1_LYNXMPEH3L0R9_RTROPTP_4_CLIMATE-CHANGE-EU-LAW-1-1.jpg?quality=70&strip=info&w=1024`}>
                      <a href="https://www.google.com/"></a>
                  </StoriesItem>
                  <StoriesItem img={`https://classic.exame.com/wp-content/uploads/2021/05/2021-04-22T130447Z_1_LYNXMPEH3L0R9_RTROPTP_4_CLIMATE-CHANGE-EU-LAW-1-1.jpg?quality=70&strip=info&w=1024`}>
                      <a href="https://www.google.com/"></a>
                  </StoriesItem>
                  <StoriesItem img={`https://classic.exame.com/wp-content/uploads/2021/05/2021-04-22T130447Z_1_LYNXMPEH3L0R9_RTROPTP_4_CLIMATE-CHANGE-EU-LAW-1-1.jpg?quality=70&strip=info&w=1024`}>
                      <a href="https://www.google.com/"></a>
                  </StoriesItem>
                  <StoriesItem img={`https://classic.exame.com/wp-content/uploads/2021/05/2021-04-22T130447Z_1_LYNXMPEH3L0R9_RTROPTP_4_CLIMATE-CHANGE-EU-LAW-1-1.jpg?quality=70&strip=info&w=1024`}>
                      <a href="https://www.google.com/"></a>
                  </StoriesItem>
                </ScrollContainer>
            </StoriesWrapper>
        </>
    );
}