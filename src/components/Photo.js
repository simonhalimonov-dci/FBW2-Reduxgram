import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Photo = props => {
  const { display_src, likes, comments, increment, key, code, id } = props;

  return (
    <PhotoGridItem key={key}>
      <Link to={"/s/" + code}>
        <PhotoGridImage src={display_src} />
      </Link>
      <div className="wrapper">
        <PhotoGridLike onClick={_ => increment(id)}>
          {likeSVG} {likes}
        </PhotoGridLike>

        <PhotoGridComment>
          {commentSVG}
          <div>{comments === undefined ? "0" : comments.length}</div>
        </PhotoGridComment>
      </div>
    </PhotoGridItem>
  );
};

export default Photo;

const PhotoGridItem = styled.div`
  position: relative;
  box-sizing: border-box;
  width: 33.3333%;
  padding: 16px;

  .wrapper {
    z-index: 10;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0.5;
    transition: opacity 0.25s ease;

    &:hover {
      opacity: 1;
    }

    svg {
      padding: 8px;
    }
  }
`;

const PhotoGridImage = styled.div`
  width: 100%;
  padding-top: 100%;
  background-image: url(${props => props.src});
  background-size: cover;
`;

const likeSVG = (
  <svg
    className="feather feather-heart sc-dnqmqq jxshSx"
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="true"
    data-reactid="631"
  >
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
  </svg>
);

const PhotoGridLike = styled.div`
  padding: 16px;
  display: flex;
  align-items: center;
`;

const commentSVG = (
  <svg
    className="feather feather-message-circle sc-dnqmqq jxshSx"
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="true"
  >
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
  </svg>
);

const PhotoGridComment = styled.div`
  padding: 16px;
  display: flex;
  align-items: center;
`;
