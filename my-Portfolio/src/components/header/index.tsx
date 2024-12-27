import styled from "styled-components"


export default function Header() {
  return (
    <HeaderLayout>
      RobinHan
      <HeaderItemContainer>
        <HeaderItem>Projects</HeaderItem>
        <HeaderItem>Blog</HeaderItem>
        <HeaderItem>Info</HeaderItem>
      </HeaderItemContainer>
    </HeaderLayout>
  )
}

const HeaderLayout = styled.div`
  display:flex ;
  flex-direction: row ;
  font-size: 2rem;
  color: white;
  align-items: center;
  gap:1rem;
`
const HeaderItem = styled.button`
  
`
const HeaderItemContainer = styled.div`
  gap:1rem;
  display:flex;
  flex-direction: row;
`