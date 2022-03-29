import sanityClient from "../../../client";

const fetchAll = async (setContainerForImages, setContainerForCaptions) => {
  let images = [];
  let captions = [];

  await sanityClient.fetch(`*[_type=='galleryImage']`).then((res) => {
    return res.map((item) => {
      captions.push(item.caption);
      return item.images.map((item) => {
        return images.push(item.asset._ref);
      });
    });
  });

  setContainerForImages(images);
  setContainerForCaptions(captions);
};

export default fetchAll;
