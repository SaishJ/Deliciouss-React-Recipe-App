import React, { useState, useEffect } from "react";
import axios from "axios";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { Card, CardMedia, Typography } from "@mui/material";

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
      <h3>Popular Picks</h3>
      <Splide
        options={{
          perPage: 4,
          arrows: false,
          pagination: false,
          drag: "free",
          gap: "3rem",
        }}
      >
        {popular.map((recipe) => (
          <SplideSlide key={recipe.id}>
            <Card
              sx={{
                position: "relative",
                zIndex: "3",
                borderRadius: "10px",
              }}
            >
              <CardMedia
                component="img"
                height="180"
                image={recipe.image}
                alt={recipe.title}
              />
            </Card>
            <Typography
              variant="subtitle2"
              component="p"
              sx={{
                position: "absolute",
                zIndex: 10,
                left: "50%",
                bottom: "0%",
                transform: "translate(-50%, 0%)",
                width: "100%",
                color: "#fff",
                fontFamily: "Poppins",
                textAlign: "center",
              }}
            >
              {recipe.title}
            </Typography>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default Popular;
