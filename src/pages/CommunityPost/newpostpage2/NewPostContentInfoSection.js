import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import NewPostContentWritingSection2 from "./NewPostContentWritingSection";
// import PostCodeSection from "../newpostpage/newpostcontentwritingcomponents/PostCodeSection";

const NewPostContentDiv = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
`;

const NewPostContentWritingContainer2 = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const NewPostContentSection = ({ showAddressInfoModal, setAddressData }) => {
  const navigate = useNavigate();
  const [contents, setContents] = useState("");
  const [openChatUrl, setOpenChatUrl] = useState("");
  const [roomCount, setRoomCount] = useState("");
  const [address, setAddress] = useState("");
  const [homeType, setHomeType] = useState("");
  const [tradeType, setTradeType] = useState("");
  const [price, setPrice] = useState("");
  const [deposit, setDeposit] = useState("");
  const [rent, setRent] = useState("");
  const [flat, setFlat] = useState("");
  const [maintenance, setMaintenance] = useState("");
  const [floor, setFloor] = useState("");
  const [totalFloor, setTotalFloor] = useState("");
  const [startDate, setStartDate] = useState("");
  const [x, setX] = useState(null);
  const [y, setY] = useState(null);
  const [ageRange, setAgeRange] = useState([20, 25]);
  const [imgFiles, setImgFiles] = useState([]);
  const [previewImages, setPreviewImages] = useState([]);

  const updateID = useParams().id;
  useEffect(() => {
    if (updateID != null) {
      FetchPostInfoData();
    }
  }, []);

  async function FetchPostInfoData() {
    await axios
      .get(`${baseURL}/api/board/edit/${updateID}`)
      .then((response) => {
        console.log("FetchPostInfoData: ", response.data);
        setAddress(response.data.address);
        setAgeRange(response.data.ageRange);
        setContents(response.data.contents);
        setDeposit(response.data.deposit);
        setFlat(response.data.flat);
        setFloor(response.data.floor);
        setHomeType(response.data.homeType);
        setMaintenance(response.data.maintenance);
        setOpenChatUrl(response.data.openChatUrl);
        setPrice(response.data.price);
        setRent(response.data.rent);
        setRoomCount(response.data.roomCount);
        setStartDate(response.data.startDate);
        setTotalFloor(response.data.totalFloor);
        setTradeType(response.data.tradeType);
        setX(response.data.x);
        setY(response.data.y);
        urlsToFileList(response.data.imgUrls);
      })
      .catch((error) => {
        console.log(" FetchPostInfoData axios error");
      });
  }

  console.log("==============================");
  console.log("contents ", contents);
  console.log("roomCount ", roomCount);
  console.log("address ", address);
  console.log("homeType ", homeType);
  console.log("tradeType ", tradeType);
  console.log("price ", price);
  console.log("deposit ", deposit);
  console.log("rent ", rent);
  console.log("flat ", flat);
  console.log("maintenance ", maintenance);
  console.log("floor ", floor);
  console.log("totalFloor ", totalFloor);
  console.log("startDate ", startDate);
  console.log("x ", x);
  console.log("y ", y);
  console.log("ageRange ", ageRange);
  console.log("imgFiles ", imgFiles);
  console.log("openChatUrl", openChatUrl);
  console.log("==============================");

  const modifyPost = () => {
    const data = {
      contents: contents,
      roomCount: roomCount,
      address: address,
      homeType: homeType,
      tradeType: tradeType,
      price: price,
      deposit: deposit,
      rent: rent,
      flat: flat,
      maintenance: maintenance,
      floor: floor,
      totalFloor: totalFloor,
      startDate: startDate,
      x: x,
      y: y,
      ageRange: ageRange,
      imgUrls: previewImages,
      openChatUrl: openChatUrl,
    };
    const jsonData = JSON.stringify(data);
    const blob = new Blob([jsonData], { type: "application/json" });
    const formData = new FormData();
    formData.append("boardEditDto", blob);
    for (let i = 0; i < imgFiles.length; i++) {
      formData.append("imgFiles", imgFiles[i]);
    }
    axios
      .patch(`${baseURL}/api/board/edit/${updateID}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        navigate(`../postInfoPage/${updateID}`);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const PostInfoSubmit = () => {
    // Check if code exists
    if (!code) {
      console.error("Error: Code is required");
      return;
    }
    const data = {
      contents: contents,
      openChatUrl: openChatUrl,
      roomCount: roomCount,
      address: address,
      homeType: homeType,
      tradeType: tradeType,
      price: price,
      deposit: deposit,
      rent: rent,
      flat: flat,
      maintenance: maintenance,
      floor: floor,
      totalFloor: totalFloor,
      startDate: startDate,
      x: x,
      y: y,
      ageRange: ageRange,
    };
    const jsonData = JSON.stringify(data);
    const blob = new Blob([jsonData], { type: "application/json" });
    const formData = new FormData();
    formData.append("boardAddDto", blob);
    for (let i = 0; i < imgFiles.length; i++) {
      formData.append("imgFiles", imgFiles[i]);
    }
    axios
      .post(`${baseURL}/api/board`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        withCredentials: true,
      })
      .then((response) => {
        navigate(`../postMapPage`);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  async function urlsToFileList(urls) {
    console.log("urls ", urls);
    const files = await Promise.all(
      urls.map(async (url) => {
        const response = await fetch(url, { mode: 'no-cors' });
        const blob = await response.blob();
        const fileName = url.substring(url.lastIndexOf("/") + 1);
        return new File([blob], fileName, { type: blob.type });
      })
    );
    console.log("files ", files);
    setImgFiles(files);
    setPreviewImages(urls);
  }

  return (
    <NewPostContentDiv>
      <NewPostContentWritingContainer2>
        <NewPostContentWritingSection2
          setTitle={setTitle}
          setContents={setContents}
          setImgFiles={setImgFiles}
          setCode={setCode}
          PostInfoSubmit={PostInfoSubmit}
          modifyPost={modifyPost}
        />
      </NewPostContentWritingContainer2>
      {/* <PostCodeSection handleSubmit={PostInfoSubmit} setCode={setCode} /> */}
    </NewPostContentDiv>
  );
};

export default NewPostContentSection;
