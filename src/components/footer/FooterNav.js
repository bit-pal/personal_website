import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const Navbar = styled.div`
    padding: 24px 0px 28px;
    font-weight: 700;
    font-size: 14px;
    font-family: Inter, sans-serif;
    letter-spacing: .08em;
    text-align: center;
    text-transform: uppercase;
    user-select: none;
`
const Nav = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 50px;

    .vertical-line:after {
        content:""; 
        background: white; 
        position: absolute; 
        bottom: 0; 
        right: -25px; 
        height: 100%; 
        width: 1.5px;
    }
`
const NavItem = styled.li`
    color: #AAAAAA;
    display: block;
    padding: 8px 16px;
    width: 150px;
    text-decoration: none;
    transition: all .2s linear;
    cursor: pointer;
    position: relative;
    &:hover {
        background: rgba(128, 128, 128, .3);
        border-radius: 6.4px;
    }
`
const ContetnSection = styled.div`
    max-width: 750px;
    width: 750px;
    height: 400px;
`
const Content = styled.div`
    margin: 0 auto;
    padding: 15px;   
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
`
const Header = styled.div`
    padding-bottom: 10px;
    font-size: 28px;
    color: #FFF;
    font-family: Inter, sans-serif;
    border-bottom: dotted 1px #DDD;
    width: 100%;
    text-align: center;
    box-sizing: border-box;
`
const Details = styled.div`
    display: flex;
    algn-items: center;
    width: 100%;
    height: 100%;
`
const Description = styled.div`
    width: 60%;
    display: flex;
    flex-direction: column;
    justify-content: center;
`
const Text = styled.p`
    color: white;
    font-family: Inter, sans-serif;
    line-height: 28px;
`
const TextLink = styled.a`
    font-family: Inter, sans-serif;
    line-height: 28px;
    text-decoration: underline;
    color: white;
`
const ImageSection = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`
const Image = styled.img`
    margin-right: 1rem;
`
const ThirdContent = styled.div`
    margin: 0 auto;
    padding: 15px;   
    display: flex;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
`
const ThirdDetailSection = styled.div`
    display: flex;
    flex-direction: column;
    width: 40%;
`
const ThirdImageSection = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 60%;
`
const ThirdText = styled.div`
    color: white;
    font-family: Inter, sans-serif;
    line-height: 22px;
`
const ThirdDescription = styled.div`
    width: 60%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
`
export default function FooterNav() {
    const [selectedNav, setSelectedNav] = useState('start');
    return (
        <Container>
            <Navbar>
                <Nav>
                    <NavItem className="vertical-line" style={selectedNav === "start" ? {color: 'white'} : {}} onClick={() => setSelectedNav("start")}>
                        Start
                    </NavItem>
                    <NavItem className="vertical-line" style={selectedNav === "kontakt" ? {color: 'white'} : {}} onClick={() => setSelectedNav("kontakt")}>
                        Kontakt
                    </NavItem>
                    <NavItem style={selectedNav === "impressum" ? {color: 'white'} : {}} onClick={() => setSelectedNav("impressum")}>
                        Impressum
                    </NavItem>
                </Nav>
            </Navbar>
            <ContetnSection>
                {selectedNav === 'start' && (
                    <Content>
                        <Header>Axel Ganter - Diplom Informatiker</Header>
                        <Details>
                            <Description>
                                <Text>
                                    <strong>IT-Projektleiter</strong>
                                </Text>
                                <Text>Webanwendungen mit PHP/mySQL</Text>
                                <Text>Webanwendungen mit node.js/mongoDB</Text>
                            </Description>
                            <ImageSection>
                                <Image src="assets/images/intro-pic.png" alt="Image" width={250} height={250} />
                            </ImageSection>
                        </Details>
                    </Content>
                )}
                {selectedNav === 'kontakt' && (
                    <Content>
                        <Header>Kontakt</Header>
                        <Details>
                            <Description>
                                <TextLink href="https://www.xing.com/profile/Axel_Ganter" target="blank">XING</TextLink>
                                <Text>
                                    <strong>E-Mail</strong>
                                    <br />
                                    mail@axelganter.de
                                </Text>
                            </Description>
                            <ImageSection>
                                <Image src="assets/images/Axel_MG_1220sw.jpg" alt="Image" />
                            </ImageSection>
                        </Details>
                    </Content>
                )}
                {selectedNav === 'impressum' && (
                    <ThirdContent>
                        <ThirdImageSection>
                            <Image src="assets/images/discovered.png" alt="Image" width={250} height={400} />
                        </ThirdImageSection>
                        <ThirdDetailSection>
                            <Header>Impressum</Header>
                            <Details>
                                <ThirdDescription>
                                    <ThirdText>
                                        <strong>Anschrift</strong>
                                        <br />
                                        Axel Ganter
                                        <br />
                                        Walter-Bothe-Str.12
                                        <br />
                                        68169 Mannheim
                                    </ThirdText>
                                    <ThirdText>
                                        <strong>Telefon: </strong>
                                        0621 31 888 50
                                    </ThirdText>
                                    <ThirdText>
                                        <strong>E-Mail</strong>
                                        <br />
                                        mail@axelganter.de
                                    </ThirdText>
                                    <ThirdText>
                                        <strong>Umsatzsteuer-Id</strong>
                                        <br />
                                        DE 204 454 839
                                    </ThirdText>
                                </ThirdDescription>
                            </Details>
                        </ThirdDetailSection>
                    </ThirdContent>
                )}
            </ContetnSection>
        </Container>
    )
}