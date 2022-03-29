import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTimes,
  faArrowLeft,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";

import { SliderImagesContainer } from "./gallery.styled.js";

const Slider = (props) => {
  const { isModalOpen, images, index, urlFor, dispatch, handleShowImage } =
    props;

  return (
    <>
      {images ? (
        <dialog open={isModalOpen}>
          <FontAwesomeIcon
            icon={faTimes}
            color="white"
            className="closeModal"
            onClick={() =>
              dispatch({ type: "setModal", index: index, isModalOpen: false })
            }
          />

          <img
            src={urlFor(images[index]).url()}
            key={index}
            index={index}
            alt="building"
          />

          <SliderImagesContainer>
            <FontAwesomeIcon
              icon={faArrowLeft}
              onClick={() =>
                dispatch({
                  type: "setIndex",
                  index: index - 1 < 0 ? images.length - 1 : index - 1,
                })
              }
            />

            <img
              src={`${urlFor(
                images[index - 1 < 0 ? images.length - 1 : index - 1]
              ).url()}`}
              alt="previousImage"
              index={index - 1 < 0 ? images.length - 1 : index - 1}
              onClick={handleShowImage}
            />
            <img
              src={`${urlFor(images[index]).url()}`}
              alt="currentImage"
              index={index}
              onClick={handleShowImage}
              style={{ border: "2px solid white" }}
            />

            <img
              src={`${urlFor(
                images[index === images.length - 1 ? 0 : index + 1]
              ).url()}`}
              alt="nextImage"
              index={index === images.length - 1 ? 0 : index + 1}
              onClick={handleShowImage}
            />

            <FontAwesomeIcon
              icon={faArrowRight}
              onClick={() => {
                dispatch({
                  type: "setIndex",
                  index: index === images.length - 1 ? 0 : index + 1,
                });
              }}
            />
          </SliderImagesContainer>
        </dialog>
      ) : null}
    </>
  );
};

export default Slider;
