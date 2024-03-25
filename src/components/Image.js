import React from "react";
import styled from "styled-components";

const Container = styled.img`
    width: 100%;
    height: 450px;
    box-shadow: 4px 7px 8px gray;
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.4s;
    &:hover {
        transform: scale(1.05);
    }
`

export default function Image({src}) {
    return (
        <Container src={src} alt="Photo" />
    )
}