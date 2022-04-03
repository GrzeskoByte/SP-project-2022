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

  const decrementedIndex = index - 1 < 0 ? images.length - 1 : index - 1;
  const incrementedIndex = index === images.length - 1 ? 0 : index + 1;

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
          <div className="mainImage">
            <img
              src={urlFor(images[index]).url()}
              key={index}
              index={index}
              alt="building"
            />
          </div>

          <SliderImagesContainer>
            {/* <FontAwesomeIcon
              icon={faArrowLeft}
              onClick={() =>
                dispatch({
                  type: "setIndex",
                  index: decrementedIndex,
                })
              }
            /> */}

            <img
              src={`${urlFor(images[decrementedIndex]).url()}`}
              alt="previousImage"
              index={decrementedIndex}
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
              src={`${urlFor(images[incrementedIndex]).url()}`}
              alt="nextImage"
              index={incrementedIndex}
              onClick={handleShowImage}
            />

            {/* <FontAwesomeIcon
              icon={faArrowRight}
              onClick={() => {
                dispatch({
                  type: "setIndex",
                  index: incrementedIndex,
                });
              }}
            /> */}
          </SliderImagesContainer>
        </dialog>
      ) : null}
    </>
  );
};

export default Slider;
