import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

const Cuisine = () => {
  const [cuisine, setCuisine] = useState([]);
  let params = useParams();

  useEffect(() => {
    const check = localStorage.getItem(params.type);

    if (check) {
      setCuisine(JSON.parse(check));
    } else {
      axios
        .get(
          `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${params.type}`
        )
        .then((res) =>
          localStorage.setItem(
            params.type,
            JSON.stringify(res.data.results),
            setCuisine(res.data.results)
          )
        );
    }
  }, [params.type]);

  console.log("params", params);
  console.log("cusine", cuisine);

  return (
    <Box>
      <Grid container spacing={2}>
        {cuisine.map((recipe) => (
          <Grid item xs={2} md={3} lg={4} key={recipe.id}>
            <Link to={`/recipe/${recipe.id}`}>
              <Card sx={{ borderRadius: 0 }}>
                <CardMedia
                  component="img"
                  height="180"
                  image={recipe.image}
                  title={recipe.title}
                />
                <CardContent
                  sx={{
                    height: "70px",
                    background: "transparent",
                    padding: "10px",
                  }}
                >
                  <Typography
                    variant="subtitle2"
                    color="text.secondary"
                    sx={{
                      fontFamily: "Poppins",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      display: "-webkit-box",
                      WebkitLineClamp: "2",
                      WebkitBoxOrient: "vertical",
                    }}
                  >
                    {recipe.title}
                  </Typography>
                </CardContent>
              </Card>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Cuisine;
