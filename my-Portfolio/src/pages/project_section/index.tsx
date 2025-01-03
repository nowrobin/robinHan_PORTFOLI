import { useRef, useState } from "react"
import styled from "styled-components"

export default function ProjectSection() {
  const dragItem = useRef(0); // 드래그할 아이템의 인덱스
  const dragOverItem = useRef(0); // 드랍할 위치의 아이템의 인덱스
  const [users, setUsers] = useState([
    { name: "user 0", order: 0 },
    { name: "user 1", order: 1 },
    { name: "user 2", order: 2 }
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
  };

  const dragOver = (e: React.DragEvent<HTMLDivElement>) => {
    console.log(e.currentTarget)
  }

  const onSortEnd = ({ oldIndex, newIndex }) => {
    setUsers(prevState => {
      const newItems = [...prevState];

      if (oldIndex > newIndex) {
        for (let i = oldIndex - 1; i >= newIndex; i--) {
          newItems[i].order++;
          newItems[oldIndex].order = newIndex;
        }
      } else if (oldIndex < newIndex) {
        for (let i = oldIndex + 1; i <= newIndex; i++) {
          newItems[i].order--;
          newItems[oldIndex].order = newIndex;
        }
      }
      return newItems.sort((a, b) => a.order - b.order);
    });
  };

  const SortableItem = sortableElement(({ user }) => {
    return <div style={itemStyles}>{user.name}</div>;
  });

  const SortableContainer = sortableContainer(({ children }) => {
    return <div className="container">{children}</div>;
  });

  return (
    <Container>
      {/* {users &&
        users.map((item, idx) => (
          <ContentItems
            key={idx}
            index={idx}
            className="card"
            draggable
            onDragStart={(e) => dragStart(e, idx)}
            onDragEnter={(e) => dragEnter(e, idx)}
            onDragEnd={drop}
            onDragOver={(e) => dragOver(e)}
          >
            {item.name}
          </ContentItems>
        ))} */}
      <SortableContainer onSortEnd={onSortEnd}>
        {users.map((user, index) => (
          <SortableItem key={index} index={index} user={user} />
        ))}
      </SortableContainer>
    </Container>
  )
}

const Container = styled.div`
    display:flex;
    flex-wrap: wrap;
    flex-direction:column;
    width: 100%;
    height: auto;
    padding: 20px;
    gap:20px;
    background-color: white;
    /* &:hover > .card:not(:hover) {
    filter: blur(4px);
    } */

    `
const ContentItems = styled.div`
  display: grid;
  gap: 20px;
  background-color: gray;
    &:hover{
      text-decoration: underline;
      text-underline-offset: 10px;
    }
  transition: filter 0.3s ease; 
  `