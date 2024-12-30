import { useRef, useState } from "react"
import styled from "styled-components"

export default function ProjectSection() {
  const dragItem = useRef(0); // 드래그할 아이템의 인덱스
  const dragOverItem = useRef(0); // 드랍할 위치의 아이템의 인덱스
  const [list, setList] = useState([
    "Item 1",
    "Item 2",
    "Item 3",
    "Item 4",
    "Item 5",
    "Item 6"
  ]);



  const dragEnter = (e: React.DragEvent<HTMLDivElement>, position: number) => {
    dragOverItem.current = position;
    //console.log(e.target.innerHTML);
  };


  // 드래그 시작될 때 실행
  const dragStart = (e: React.DragEvent<HTMLDivElement>, position: number) => {
    dragItem.current = position;
    // console.log(e.target.innerHTML);
  };


  // 드랍 (커서 뗐을 때)
  const drop = (e: React.DragEvent<HTMLDivElement>) => {
    const newList = [...list];
    const dragItemValue = newList[dragItem.current];
    newList.splice(dragItem.current, 1);
    newList.splice(dragOverItem.current, 0, dragItemValue);
    dragItem.current = 0;
    dragOverItem.current = 0;
    setList(newList);
    console.log(e)
  };

  return (
    <Container>
      {list &&
        list.map((item, idx) => (
          <ContentItems
            key={idx}
            className="card"
            draggable
            onDragStart={(e) => dragStart(e, idx)}
            onDragEnter={(e) => dragEnter(e, idx)}
            onDragEnd={drop}
            onDragOver={(e) => e.preventDefault()}
          >
            {item}
          </ContentItems>
        ))}
    </Container>
  )
}

const Container = styled.div`
    display:flex;
    flex-wrap: wrap;
    flex-direction:column;
    width: 100vw;
    height: 150px;
    gap: 10px;
    &:hover > .card:not(:hover) {
    filter: blur(4px);
    }

    `
const ContentItems = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  background-color: gray;
    &:hover{
      text-decoration: underline;
      text-underline-offset: 10px;
    }
  transition: filter 0.3s ease; 
  `