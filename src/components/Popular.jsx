import React, { useState, useEffect } from "react";
import axios from "axios";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const Popular = () => {
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    const check = localStorage.getItem("popular");

    if (check) {
      setPopular(JSON.parse(check)); //convert string into object
    } else {
      axios
        .get(
          `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`
        )
        .then((res) =>
          localStorage.setItem(
            "popular",
            JSON.stringify(res.data.recipes), //convert object into string
            setPopular(res.data.recipes)
          )
        );
    }
  }, []);

  console.log(popular);

  return (
    <div>
      <Splide
        options={{
          perPage: 4,
          arrows: false,
          pagination: false,
          drag: "free",
          gap: "5rem",
        }}
      >
        {popular.map((recipe) => (
          <SplideSlide key={recipe.id}>
            <h3>{recipe.title}</h3>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default Popular;
