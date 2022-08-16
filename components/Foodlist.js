import React from "react";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import FoodData from "./ListData.json";
import Pagination from "../components/Pagination";
import CardFood from "./CardFood";

const Foodlist = (props) => {
  const [inputText, setInputText] = useState("");

  const [posts, setPosts] = useState([]);
  const pageSize = 10;
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  let inputHandler = (e) => {
    //convert input text to lower case
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };

  const filteredData = FoodData.filter((el) => {
    if (inputText === "") {
      return el;
    } else {
      console.log(el);
      return el.FoodItem?.toLowerCase().includes(inputText);
    }
  });
  return (
    <div id="calorie">
      <div className="flex flex-col items-center mb-32 px-8 gap-3">
        <h1 className="text-4xl lg:text-3xl mb-5 "></h1>

        <h1 className="text-4xl lg:text-3xl mb-5  font-Poppins text-[#2DAE77]">
          <b>Search{"\u00a0\u00a0"}Food</b>
        </h1>
        <div className="main">
          <div className="search">
            <TextField
              id="outlined-basic"
              onChange={inputHandler}
              variant="outlined"
              fullWidth
              label="Search"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-8">
        <div className="flex flex-wrap gap-8 mx-10 justify-center">
          {filteredData.slice(
            currentPage * pageSize - pageSize,
            currentPage * pageSize
          ).map((food) => (
            <CardFood
              key={food.FoodItem}
              FoodItem={food.FoodItem}
              Cals_per100grams={food.Cals_per100grams}
            />
          ))}
        </div>
        <Pagination
          items={FoodData.length}
          pageSize={pageSize}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
        </div>
    </div>
  );
};

export default Foodlist;
