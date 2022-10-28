import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import Images from '../Img/IndexImg';

const BodyWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    top: 0;
    font: 
`;

const MainBox = styled.div`
    width: 100%;
    height: 600px;
    overflow: hidden;

        @media (min-width: 1000px) {
          
        }
`;

const MainPhotoBox = styled.div`
    width: 100%;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const MainPhoto = styled.img`
    transform: translateX(-70px);
        @media (min-width: 800px) {
            transform: translateX(0);;
        }
        @media (min-width: 1050px) {
            width: 100%;
            
        }
        @media (min-width: 1300px) {
            width: 100%;
            transform: translateY(-70px);
        }
`;

const MainTitle = styled(motion.div)`
    display: flex;
    flex-direction: column;
    font-weight: 800;
    text-shadow: 3px 5px 3px rgba(0, 0, 0, 20%);
    transform: translateY(-30px);
`;
const MainTitleUpper = styled(motion.div)`
    
`;
const UpperText = styled(motion.p)`
    color: rgba(248, 249, 251, 100%);
    font-size: 48px;
    text-align: center;
        @media (min-width: 500px) {
            font-size: 68px;
        }
`;
const MainTitleDown = styled(motion.div)``;
const DownText = styled(motion.p)`
    color: rgba(254, 131, 1, 100%);
    font-size: 58px;
    text-align: right;
    transform: translateX(50px);
    @media (min-width: 500px) {
        font-size: 78px;
    }
`;

const InfoWrapper = styled.div`
    margin-top: 100px;
    margin-bottom: 100px;
`;

const InfoBox = styled.div`
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-shadow: 3px 5px 3px rgba(0, 0, 0, 20%);
    font-weight: 700;
`;

const InfoPhotoFrame = styled.div`
    width: 100%;
`;

const InfoPhotoLeft = styled.img`
    width: 100%;
    transform: translateX(-20px);
`;

const InfoPhotoRight = styled.img`
    width: 100%;
    transform: translateX(20px);
`;

const InfoTextBox1 = styled(motion.div)`
    width: 100%;
    margin-right: 10px;
    transform: translateY(-35px);
`;

const InfoTextBox2 = styled(motion.div)`
    width: 100%;
    margin-left: 10px;
    transform: translateY(35px);
`;

const InfoTextBox3 = styled(InfoTextBox1)`
`;

const InfoTextBox4 = styled(InfoTextBox2)`
`;

const InfoTextBox5 = styled(InfoTextBox1)`
`;

const InfoTextUpperRight = styled(motion.p)`
    color: rgba(248, 249, 251, 100%);
    font-size: 48px;
    text-align: right;
`;

const InfoTextUpperLeft = styled(InfoTextUpperRight)`
    text-align: left;
`;

const InfoTextDownRight = styled(motion.p)`
    color: rgba(254, 131, 1, 100%);
    font-size: 48px;
    text-align: right;
`;

const InfoTextDownLeft = styled(InfoTextDownRight)`
    text-align: left;
`;



function Home() {
    return (
        <BodyWrapper>
           <MainBox>
                <MainPhotoBox>
                    <MainPhoto src={Images.main} />
                </MainPhotoBox>
           </MainBox>
           <MainTitle>
                <MainTitleUpper>
                    <UpperText>restaurant</UpperText>
                </MainTitleUpper>
                <MainTitleDown>
                    <DownText>bada</DownText>
                </MainTitleDown>
           </MainTitle>

           <InfoWrapper>
                <InfoBox>
                        <InfoPhotoFrame>
                            <InfoPhotoLeft src={Images.chef} />
                        </InfoPhotoFrame>
                        <InfoTextBox1>
                            <InfoTextUpperRight>worldclass</InfoTextUpperRight>
                            <InfoTextDownRight>chefs</InfoTextDownRight>
                        </InfoTextBox1>
                </InfoBox>
           </InfoWrapper>
        </BodyWrapper>
    );
}

export default Home;