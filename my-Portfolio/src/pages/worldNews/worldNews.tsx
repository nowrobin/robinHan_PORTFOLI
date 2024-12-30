import styled from "styled-components";
import World from "../../components/globe";
import { useEffect, useRef, useState } from "react";
import useResize from "../../util/useResize";
import SideBar from "../../components/sidebar/sidebar";


export default function WorldNews() {
  const globeContainerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({
    width: 0,
    height: 0,
  });
  const { width, height } = useResize()
  useEffect(() => {
    const updateDimensions = () => {
      if (globeContainerRef.current) {
        const { offsetWidth, offsetHeight } = globeContainerRef.current;
        setDimensions({ width: offsetWidth, height: offsetHeight });
      }
    };
    updateDimensions()
  }, [width, height])


  return (
    <GlobeContainer ref={globeContainerRef}>
      <SideBar />
      <World width={dimensions.width} height={dimensions.height} />
    </GlobeContainer>
  )
}

const GlobeContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
`