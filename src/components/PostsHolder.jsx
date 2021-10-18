import React from "react";
import styled from "styled-components";

export const Container = styled.div`
  /* width: 900px; */
  background-color: white;
  border: 1px solid rgba(0, 0, 0, 0.3);
  grid-area: posts;

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 80px 1fr 100px;
  grid-template-areas:
    "menuTop"
    "post"
    "menuBottom";
  /* row-gap: 20px; */
`;

const PostsHolder = () => {
  return (
    <Container>
      <div
        style={{
          gridArea: "menuTop",
          backgroundColor: "black",
          display: "flex",
          alignItems: "center",
          paddingLeft: "20px",
          color: "white",
        }}
      >
        {/* <img src="" alt="" /> */}
        <div
          style={{
            backgroundColor: "yellow",
            width: "50px",
            height: "50px",
            borderRadius: "25px",
            marginRight: "10px",
          }}
        ></div>
        <h3>Profile Name</h3>
      </div>
      <div style={{ gridArea: "post", backgroundColor: "green" }}></div>
      <div style={{ gridArea: "menuBottom", backgroundColor: "red" }}></div>
    </Container>
  );
};

export default PostsHolder;
