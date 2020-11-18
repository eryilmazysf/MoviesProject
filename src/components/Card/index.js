import React, { useState } from "react";
import { StyledCardWrapper, StyledText, StyledMovieImage } from "./Card.style";
import { useHistory } from "react-router-dom";
import axios from "axios";
import ModalVideo from "react-modal-video";
import "../../../node_modules/react-modal-video/scss/modal-video.scss";

export const Card = ({ title, imgSrc, id, youtube }) => {
  const history = useHistory();
  const [isOpen, setOpen] = useState(false);
  const [trail, setTrail] = useState();
  const video = () =>
    axios.get(youtube).then((res) => {
      var trailer = res.data.results[0]
        ? res.data.results[0]["key"]
        : "_mrdWNcoLYo";

      setTrail(trailer);
      setOpen(true);
    });

  return (
    <StyledCardWrapper onDoubleClick={() => history.push(`/detail/${id}`)}>
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId={trail}
        onClose={() => setOpen(false)}
      />

      <StyledMovieImage src={imgSrc} alt={"Movie Poster"} />
      <button
        style={{ fontSize: 20, backgroundColor: "greenyellow", margin: 5 }}
        onClick={() => video()}
      >
        ▶️
      </button>
      <StyledText>{title}</StyledText>
    </StyledCardWrapper>
  );
};
