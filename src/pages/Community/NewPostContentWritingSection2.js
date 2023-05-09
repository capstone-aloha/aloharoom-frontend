import React, { useState } from "react";
import styled from "styled-components";
import PostTitleSection from "../newpostpage/newpostcontentwritingcomponents/PostTitleSection";
import PostContentSection from "../newpostpage/newpostcontentwritingcomponents/PostContentSection";
import ImageUploadSection from "../newpostpage/newpostcontentwritingcomponents/ImageUploadSection";
import ImageSwiperSection from "../newpostpage/newpostcontentwritingcomponents/ImageSwiperSection";
import PostButtonSection from "../newpostpage/newpostcontentwritingcomponents/PostButtonSection";

const NewPostContentWritingDiv = styled.div`
  width: 80%;
  height: 95%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const NewPostContentWritingArea = styled.div`
  border-style: solid;
  border-color: #bbbbbb;
  border-radius: 1rem;
  width: 100%;
  height: 68%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const NewPostContentImageArea = styled.div`
  width: 100%;
  height: 32%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const NewPostContentWritingSection2 = ({
  setTitle,
  setContents,
  setImgFiles,
  PostInfoSubmit,
}) => {
  const [previewImages, setPreviewImages] = useState([]);

  const handleImageFilesInputChange = (e) => {
    setImgFiles(e.target.files);
    const files = e.target.files;
    const images = [];
    for (let i = 0; i < files.length; i++) {
      const reader = new FileReader();
      reader.onload = () => {
        images.push(reader.result);
        if (images.length === files.length) {
          setPreviewImages(images);
        }
      };
      reader.readAsDataURL(files[i]);
    }
  };

  return (
    <NewPostContentWritingDiv>
      <NewPostContentWritingArea>
        <PostTitleSection setTitle={setTitle} />
        <PostContentSection setContents={setContents} />
      </NewPostContentWritingArea>
      <NewPostContentImageArea>
        <ImageUploadSection
          handleImageFilesInputChange={handleImageFilesInputChange}
        />
        <ImageSwiperSection previewImages={previewImages} />
        <PostButtonSection PostInfoSubmit={PostInfoSubmit} />
      </NewPostContentImageArea>
    </NewPostContentWritingDiv>
  );
};

export default NewPostContentWritingSection2;