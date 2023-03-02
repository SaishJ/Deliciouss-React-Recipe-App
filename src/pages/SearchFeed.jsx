import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import {
  Box,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

const SearchFeed = () => {
  const [feed, setFeed] = useState([]);
  const { searchTerm } = useParams();

  useEffect(() => {
    const check = localStorage.getItem(searchTerm.search);

    if (check) {
      setFeed(JSON.parse(check));
    } else {
      axios
        .get(
          `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${searchTerm}`
        )
        .then((res) =>
          localStorage.setItem(
            searchTerm,
            JSON.stringify(res.data.results),
            setFeed(res.data.results)
          )
        );
    }
  }, [searchTerm]);

  console.log("Feed", feed);
  console.log("Term", searchTerm);

  return (
    <Box>
      <h3>Search Result for: {searchTerm}</h3>
      <Grid container spacing={2}>
        {feed.map((feed) => (
          <Grid item xs={2} md={3} lg={4} key={feed.id}>
            <Link to={`/recipe/${feed.id}`}>
              <Card sx={{ borderRadius: 0 }}>
                <CardMedia
                  component="img"
                  height="180"
                  image={feed.image}
                  title={feed.title}
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
                    sx={{
                      fontFamily: "Poppins",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      display: "-webkit-box",
                      WebkitLineClamp: "2",
                      WebkitBoxOrient: "vertical",
                      textAlign: "center",
                    }}
                  >
                    {feed.title}
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

export default SearchFeed;
