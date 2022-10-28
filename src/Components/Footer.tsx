import styled from 'styled-components';

const FooterBox = styled.div`
    margin-top: 150px;
    width: 100%;
    height: 200px;
    background-color: rgba(126,165,177, 0.8);
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
`;

const InnerBox = styled.div`
    margin-bottom: 25px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: rgba(255, 255, 255, 1);
`;

function Footer() {
    return (
        <FooterBox>
            <InnerBox>
                <p>restaurant bada</p>
                <p>'bada' means sea in Korean</p>
            </InnerBox>
            <InnerBox>
                <p>&copy;2022 Lucy Nam 남화정. All rights reserved.</p>
            </InnerBox>            
        </FooterBox>
    );
}

export default Footer;