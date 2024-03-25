import React from "react";
import styled from "styled-components";
import FooterNav from "./FooterNav";

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relaptive;
    overflow-y: none;
`
const FooterLogo = styled.div`
    display: flex;
    align-items: center;
    opacity: 0.75;
    cursor: pointer;
    &:hover {
        opacity: 1;
    }
`
const TitleSection = styled.div`
    display: flex;
    flex-direction: column;
`
const Title = styled.div`
    color: #fff;
    font-size: 30px;
    font-family: Inter, sans-serif;
`
const Tagline = styled.div`
    color: #ccc;
    font-size: 14px;
    font-family: Inter, sans-serif;
`
const Text = styled.div`
    font-size: 12px;
    text-align: center;
    font-family: Inter, sans-serif;
    color: #fff;
    position: absolute;
    bottom: 50px;
`
export default function Footer() {
    return (
        <Container>
            <FooterLogo>
                <img src="assets/images/logo.png" alt="Footer Logo" />
                <TitleSection>
                    <Title>Axel Ganter</Title>
                    <Tagline>Diplom Informatiker</Tagline>
                </TitleSection>
            </FooterLogo>
            <FooterNav />
            <Text>
                © 2020 Axel Ganter | (Loc:Frankfurt)
            </Text>
        </Container>
    )
}