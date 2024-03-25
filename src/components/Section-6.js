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
export default function Section6() {
    const content = {
        title: "The Stack",
        texts: [
            {
                text: "Egal ob Maurer, Maler oder Entwickler. Sie alle haben nicht nur eine mehrjährige Ausbildung in ihrem Fach, sondern auch viel Erfahrung. Experten bearbeiten Details. Für ein neues Projekt braucht man aber zuerst einen Plan. Das gilt im Bau und auch in der Web-Entwicklung. Mit Stack meinen wir die Schichten der Anwendung. Full-Stack-Entwickler beginnen bei der UI, bauen ein Backend auf und sprechen Datenbanken an In der Baubranche entspricht das dem Bau-Unternehmer, der ein Haus nach Plan baut. Der Architekt beginnt aber früher und “denkt die Lösung” über den gesamten Lebenszyklus (Deployment, Usability, Datensicherheit, Performance)"
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
                        <Image src="assets/images/image6.png" />
                    </ImageSection>
                </Container>
            
        </Page>
    )
}