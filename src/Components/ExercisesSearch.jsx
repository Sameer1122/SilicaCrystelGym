import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { fetchData, exerciseOptions } from "../util/fetchdata.";
import HorizontalScrollbar from "./HorizontalScrollbar";

const ExercisesSearch = ({ setExercises, setBodyPart, bodyPart }) => {
  const [search, setSearch] = useState("");

  const [bodyParts, setBodyParts] = useState([]);
  useEffect(() => {
    const fetchExerciseData = async () => {
      const bodyPartsData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
        exerciseOptions
      );
      setBodyParts(["all", ...bodyPartsData]);
    };
    fetchExerciseData();
  }, []);
  const handleSearch = async () => {
    if (search) {
      const exerciseData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises",
        exerciseOptions
      );
      const searched = exerciseData.filter(
        (ex) =>
          ex.name.toLowerCase().includes(search) ||
          ex.name.toLowerCase().includes(search) ||
          ex.target.toLowerCase().includes(search) ||
          ex.equipment.toLowerCase().includes(search) ||
          ex.bodyPart.toLowerCase().includes(search)
      );
      setSearch("");
      setExercises(searched);
    }
  };
  return (
    <Stack alignItems={"center"} mt="37px" justifyContent={"center"} p="20px">
      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: "44px", xs: "30px" } }}
        mb="50px"
        textAlign={"center"}
      >
        Awesome Exercises You <br /> Should Know
      </Typography>
      <Box positon="relative" mb="72px">
        <TextField
          sx={{
            input: { fontSize: "700 ", border: "none", borderRadius: "4px" },
            width: { lg: "800px", xs: "350px" },
            backgroundColor: "#fff",
            borderRadius: "40px",
          }}
          height="76px"
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder="Search Exercises"
          type="text"
        />
        <Button
          className="search-btn"
          onClick={handleSearch}
          sx={{
            bgcolor: "#FF2625",
            color: "#ffff",
            textTransform: "none",
            width: { lg: "175px", xs: "80px" },
            fontSize: { lg: "20px", xs: "14px" },
            height: "56px",
            position: "absolute",
          }}
        >
          Search
        </Button>
      </Box>
      <Box sx={{ position: "relative", width: "100%", p: "20px" }}>
        <HorizontalScrollbar
          bodyParts
          data={bodyParts}
          setBodyPart={setBodyPart}
          bodyPart={bodyPart}
        />
      </Box>
    </Stack>
  );
};

export default ExercisesSearch;
