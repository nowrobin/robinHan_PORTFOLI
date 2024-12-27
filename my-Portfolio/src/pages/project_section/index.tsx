import styled from "styled-components"

export default function ProjectSection() {
  return (
    <Container>
      <p>- SULSUL</p>
      <p>- ECRIRE</p>
      <p>- POISON</p>
    </Container>
  )
}

const Container = styled.div`
  display:flex;
  flex-direction:column;
  height: 100px;
`