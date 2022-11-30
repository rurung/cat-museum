import React from "react";
import styled from "styled-components";

function Gallery(props) {
    return(
        <>
        <GalleryComp>
          <h1>고양이 갤러리 입니다.</h1>
        <p>애오옹 애오옹</p>
        </GalleryComp>
        </>
    );
}

export default Gallery;

const GalleryComp = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;

`