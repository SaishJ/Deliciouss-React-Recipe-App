import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Box, Stack, Typography } from "@mui/material";
import Tabs from "../components/Tabs";
import { motion } from "framer-motion";

const RecipeDetail = () => {
  const [recipe, setRecipe] = useState([]);
  const searchTerm = useParams();

  useEffect(() => {
    axios
      .get(
        `https://api.spoonacular.com/recipes/${searchTerm.id}/information?apiKey=${process.env.REACT_APP_API_KEY}`
      )
      .then((res) => setRecipe(res.data));
  }, []);

  console.log("Search Term", searchTerm.id);
  console.log("Recipe", recipe);

  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Typography
        variant="h6"
        sx={{ fontFamily: "Poppins", marginBottom: "1rem" }}
      >
        {recipe.title}
      </Typography>
      <Stack direction="row" spacing={2}>
        <Box sx={{ width: 400, height: 300 }}>
          <img
            src={recipe.image}
            alt={recipe.id}
            style={{ objectFit: "cover", width: "100%" }}
          />
        </Box>
        <Box sx={{ width: 500 }}>
          <Tabs recipe={recipe} />
        </Box>
      </Stack>
    </motion.div>
  );
};

export default RecipeDetail;
