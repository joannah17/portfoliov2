import { SocialIconContainer, SocialIcon } from "./Contact"
import styled from "styled-components"
export const ContainerDiv = styled.div`
    margin-inline: auto;
    max-width: 1000px;
    margin-block: 1em;
    width: 90%;
    min-height: calc(100vh - 192px);
`

export const Title = styled.h1`
    max-width: 1000px;
    width: 80%;
    text-align: center;
    margin: 0 auto 0.7em;
    padding-top: 70px;
    @media (max-width: 730px) {
        padding-top: 0px;
        font-size: 1.8em;
    }
    @media (max-width: 450px) {
        font-size: 1.5em;
    }
`

export const Desc = styled.div`
   
    margin-inline: auto;
    margin-bottom: 2em;
    width: 80%;
    font-weight: 500;
    @media(max-width: 500px) {
        width: 100%;
        text-align: center;
    }
`

export const Highlight = styled.span`
    color: #DE3163;
`
export const Skills = styled.span`
    font-weight: 600;
    font-size: 1.2em;
   `

export default function About() {
    return (
        <>
        <ContainerDiv data-aos="zoom-in" data-aos-duration="1500">
            
            <Title>About me</Title>
            <Desc>Hello, thank you for stopping by.  <br/><br/>
            I’m Joannah Marie Cata, 3rd year student im taking a Bachelor of Science in Western Institute of Technology, but people call me "jo",
            an aspiring frontend developer and UI/UX designer, continuously learning and improving my skills every day.
            I really learning new things as I believe learning is growing. 
            <br/><br/>
            <Skills>EDUCATION:</Skills><br></br>
            Elementary - Cabatuan Central Elementary School, 2010–2017<br></br>
            High School - Cabatuan National Comprehensive High School, 2017–2021<br></br>
            Senior High School - Cabatuan National Comprehensive High School, 2021–2023<br></br>
            College - Western Institute of Technology, 2023<br></br>
            <br></br>
            <Skills>GOAL:</Skills><br></br>
            My goal is to keep improving my skills and become a professional developer who builds helpful, efficient, usable, and creative web solutions. <br></br>
            </Desc>
            <SocialIconContainer>
            <a href='https://www.linkedin.com/in/joannah-marie-cata-b99143371/'><SocialIcon src='./images/linkedin.png' /></a>
            <a href='https://github.com/' target="_blank"><SocialIcon src='./images/github.png'/></a>
            <a href='https://www.instagram.com/wannah_rayd?igsh=MTc4NGRzMzVobnptaQ==/' target="_blank"><SocialIcon src='./images/insta.png'/></a>
            <a href='https://www.facebook.com/jmarie.bibanco/' target="_blank"><SocialIcon src='./images/fb.png'/></a>
           
           
            
            </SocialIconContainer>
        </ContainerDiv>
        </>
    )
}