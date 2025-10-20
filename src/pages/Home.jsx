import WhyMe from "../components/WhyMe"
// import Testimonials from "../components/Testimonials"
import Portfolio from "../components/Portfolio"
import styled from 'styled-components'

const IntroSection = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3em;
  padding: 2em;
  flex-wrap: wrap;
  text-align: left;

  @media (max-width: 730px) {
    flex-direction: column;
    height: auto;
    padding-top: 100px;
  }
`

const IntroText = styled.div`
  width: 45%;
  max-width: 500px;

  @media (max-width: 730px) {
    width: 90%;
    text-align: center;
  }
`

const IntroImage = styled.img`
  width: 320px;
  height: 320px;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);

  @media (max-width: 730px) {
    width: 250px;
    height: 250px;
  }
`

const IntroTitleText = styled.p`  
  margin: 0;
  font-size: 1.3em;
  font-weight: 500;
`

const IntroTitle = styled.h1`
  color: #DE3163;
  margin: 0; 
  padding: 0;

  @media(max-width: 500px) {
    font-size: 3em;
  }
  @media(max-width: 440px) {
    font-size: 2em;
  }
`

const IntroDesc = styled.p`
  margin: 0;
  font-size: 1.3em;
  font-weight: 500;

  @media(max-width: 440px) {
    font-size: 1em;
  }
`

export default function Home() {
  return (
    <>
      <IntroSection data-aos="flip-right" data-aos-duration="1000">
        {/* Image on the left */}
        <IntroImage src="/images/wannah.jpg.png" alt="Joannah" />

        {/* Text on the right */}
        <IntroText>
          <IntroTitleText>Heya,</IntroTitleText>
          <IntroTitle> I'm Joannah</IntroTitle>
          <IntroDesc>To know me better explore my simple portfolio.</IntroDesc>
        </IntroText>
      </IntroSection>

      <WhyMe />
      <Portfolio />
      {/* <Testimonials /> */}
    </>
  )
}
