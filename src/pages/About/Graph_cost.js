import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { Column } from "@ant-design/charts";
import axios from "axios";
import baseURL from "../api/baseURL";

// 이전 코드 생략...

const DemoColumn = ({ flat }) => {
  const [dataPoints, setDataPoints] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${baseURL}/api/data/${flat}`);
        setDataPoints(response.data);
        console.log("response.data:", response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [flat]);

  useEffect(() => {
    // 데이터 포인트를 올바르게 구성합니다.
    const filteredDataPoints = Object.entries(dataPoints)
      .filter(([key]) => key !== "userTotal")
      .reduce((obj, [key, value]) => {
        obj[key] = value;
        return obj;
      }, {});

    const data = Object.entries(filteredDataPoints)
      .filter(([, value]) => value > 0) // count 값이 0보다 큰 데이터만 선택합니다.
      .map(([key, value]) => {
        const [start, end] = key.slice(1).split("e"); // key 값을 분할하여 시작과 끝 값을 추출합니다.
        const range = `${start}~${end}만원`; // "key(1)만원~key(2)만원" 형식으로 range 값을 생성합니다.

        return {
          range,
          count: value,
        };
      });
    const config = {
      data: data,
      xField: "range",
      yField: "count",
      columnWidthRatio: 0.2, // 막대의 너비 비율을 조정합니다.
      color: "#5B8FF9", // 막대 색상을 파란색으로 설정합니다.
      label: {
        position: "top",
        style: {
          fill: "#FFFFFF",
        },
      },
    };

    // 그래프를 그리는 부분은 데이터가 업데이트될 때만 실행됩니다.
    if (data.length > 0) {
      ReactDOM.render(<Column {...config} />, document.getElementById("chart"));
    }
  }, [dataPoints]);

  return <div id="chart" />;
};

export default DemoColumn;
