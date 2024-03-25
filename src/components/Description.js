import React from "react";
import styled from "styled-components";

const Title = styled.h1`
    font-family: Inter, sans-serif;
    text-align: center;
    font-size: 65px;
    color: white;
    letter-spacing: 0ch;
`
const TextSection = styled.div`
    font-family: Inter, sans-serif;
    padding: 0 50px 50px 50px;
    font-size: large;
    line-height: 4ch;
    letter-spacing: 0.1ch;
    color: white;
    display: flex;
    flex-direction: column;
    gap: 50px;
`

export default function Description({title, texts}) {
    return (
        <>
            <Title>{title}</Title>
            <TextSection>
                {texts?.map((text, index) => (
                    <p key={index}>{text.text}</p>
                ))}
            </TextSection>
        </>
    )
}