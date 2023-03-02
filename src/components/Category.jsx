import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Avatar, Chip, Stack } from "@mui/material";
import { categories } from "../utils/constant";

const Category = () => {
  const location = useLocation();
  console.log("Location", location);

  return (
    <Stack
      direction="row"
      spacing={{ xs: 1, sm: 2 }}
      justifyContent="center"
      alignItems="center"
      sx={{ margin: "1rem 0" }}
      flexWrap="wrap"
    >
      {categories.map((category) => (
        <NavLink to={`/cuisine/${category.name}`}>
          <Chip
            style={{ cursor: "pointer", marginBottom: "5px" }}
            variant={
              `/cuisine/${category.name}` === location.pathname
                ? "contained"
                : "outlined"
            }
            avatar=<Avatar>{category.icon}</Avatar>
            label={category.name}
            key={category.name}
          />
        </NavLink>
      ))}
    </Stack>
  );
};

export default Category;
