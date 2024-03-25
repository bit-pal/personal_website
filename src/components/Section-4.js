import React from "react";
import styled from "styled-components";
import Image from "./Image";
import Description from "./Description";

const Page = styled.div`
    margin: 0 auto;
    max-width: 1500px;
    height: 100vh;
    overflow: hidden;
    color: white;
    padding-top: 57px;
    display: flex;
    align-items: center;
    box-sizing: border-box;
`
const Container = styled.div`
    width: 100%;
    height: 90vh;
    background-color: rgba(43, 57, 43, 0.16);
    border-radius: 10px;
    display: flex;
    align-item: center;
`
const ImageSection = styled.div`
    width: 53%;
    padding: 30px;
    display: flex;
    align-items: center;
`
const DescriptionSection = styled.div`
    width: 47%;
    padding: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
`
export default function Section4() {
    const content = {
        title: "Technologien & Vernetzung",
        texts: [
            {
                text: "als Architekt berate ich zu Methoden, Technologien und der Vernetzung mit anderen Systemen"
            }
        ]
    }
    return (
        <Page>
            <Container>
                <DescriptionSection>
                    <Description title={content.title} texts={content.texts} />
                </DescriptionSection>
                <ImageSection>
                    <Image src="assets/images/image4.png" />
                </ImageSection>
            </Container>
        </Page>
    )
}