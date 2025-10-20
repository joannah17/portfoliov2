import styled from 'styled-components'
import { ContainerDiv, Desc, Title, Highlight } from './About'
import { SocialIcon, SocialIconContainer } from './Contact'

const TechList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 1em 0 1em 0;
  text-align: left;
`

const TechItem = styled.li`
  margin-bottom: 0.6em;
  position: relative;
  padding-left: 1.2em;

  &::before {
    content: "•";
    color: #DE3163; /* same highlight color */
    position: absolute;
    left: 0;
    top: 0;
  }
`

export default function Technologies() {
  return (
    <>
      <ContainerDiv data-aos="zoom-in" data-aos-duration="1500">
        <Title>Technologies</Title>

        {/* everything inside Desc for perfect alignment */}
        <Desc>
         As a third-year student, I’ve gained hands-on experience with a wide range of tools and technologies.
        While I’m still shaping my specialization, here are some of the technologies and tools i have experienced so far.
          
          <TechList>
            <TechItem>
              <Highlight>Languages:</Highlight> JavaScript, HTML, CSS, Python
            </TechItem>
            <TechItem>
              <Highlight>Frameworks & Libraries:</Highlight> React.js, Tailwind CSS, Node.js, Express
            </TechItem>
            <TechItem>
              <Highlight>Tools:</Highlight> Git, GitHub
            </TechItem>
            <TechItem>
              <Highlight>Design Tools:</Highlight> Figma, Canva
            </TechItem>
            <TechItem>
              <Highlight>Currently Learning:</Highlight> UI/UX design and improving my front-end skills
            </TechItem>
          </TechList>

          I love experimenting with new technologies that make websites more interactive and user-friendly.
          Every tool I learn helps me bring my ideas to life in better ways.
          
        </Desc>

        <SocialIconContainer>
          <a href='https://www.linkedin.com/in/joannah-marie-cata-b99143371/'><SocialIcon src='./images/linkedin.png' /></a>
          <a href='https://github.com/'><SocialIcon src='./images/github.png' /></a>
          <a href='https://www.instagram.com/wannah_rayd?igsh=MTc4NGRzMzVobnptaQ==/'><SocialIcon src='./images/insta.png' /></a>
           <a href='https://www.facebook.com/jmarie.bibanco/'><SocialIcon src='./images/fb.png' /></a>
        </SocialIconContainer>
      </ContainerDiv>
    </>
  )
}
