import React, {useEffect, useState} from "react";
import styled from "styled-components";

const Nav = styled.div`
    top: 0;
    position: fixed;
    padding: 0.5rem 1.5rem 0.5rem 10rem;
    display: flex;
    justify-content: start;
    align-items: center;
    background-color: rgb(36, 34, 34);
    opacity: 0.9;
    margin: auto;
    border-bottom: 1px solid gray;
    width: 100%;
    z-index: 5;
    box-sizing: border-box;
    height: 57px;
`
const Brand = styled.a`
    font-family: Inter, sans-serif;
    font-size: xx-large;
    line-height: 25px;
    text-decoration: none;
    color: white;
    width: 200px;
`
const Menu = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Item = styled.div`
    padding-left: 30px;
    &:hover .item {
        color: white;
    }
`
const ItemTitle = styled.a`
    font-family: Inter, sans-serif;
    line-height: 25px;
    font-size: small;
    padding: 0.5rem;
    text-decoration: none;
    color: grey;
`
const menus = [
    {
        title: "Home",
        link: "#home"
    },
    {
        title: "Vision",
        link: "#vision"
    },
    {
        title: "Requirements",
        link: "#requirements"
    },
    {
        title: "Technologien",
        link: "#technologien"
    },
    {
        title: "Organisation",
        link: "#organisation"
    },
    {
        title: "Stack",
        link: "#stack"
    },
    {
        title: "Vogelperspektive",
        link: "#vogelperspektive"
    }
];

export default function Navbar() {

    const [selectedIndex, setSelectedIndex] = useState(window.location.hash || "#home");

    useEffect(() => {
        const handleHashChange = () => {
            setSelectedIndex(window.location.hash);
        };

        // This effect runs once on mount and then listens for hash changes
        window.addEventListener("hashchange", handleHashChange);

        // Cleanup function to remove the event listener on component unmount
        return () => window.removeEventListener("hashchange", handleHashChange);
    }, []); // Empty dependency array means this effect runs once on mount

    return(
        <Nav>
            <Brand href="#home">Axel Ganter</Brand>
            <Menu>
                {menus.map((menu, index) => (
                    <Item key={index} onClick={() => setSelectedIndex(menu.link)}>
                        <ItemTitle href={menu.link} style={selectedIndex === menu.link ? {color: 'white'} : {}} className="item">
                            {menu.title}
                        </ItemTitle>
                    </Item>
                ))}
            </Menu>
        </Nav>
    )
}