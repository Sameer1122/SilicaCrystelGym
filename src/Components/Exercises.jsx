import { Pagination, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { exerciseOptions, fetchData } from "../util/fetchdata.";
import ExerciseCard from "./ExerciseCard";

const Exercises = ({ exercises, setExercises, bodyPart, setBodyPart }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const exerciseperpage = 9;
  const indexofLast = currentPage * exerciseperpage;
  const indexoffirst = indexofLast - exerciseperpage;
  const currentExercises = exercises.slice(indexoffirst, indexofLast);
  const paginte = (e, value) => {
    setCurrentPage(value);
    window.scrollTo({ top: 1800, behavior: "smooth" });
  };
  useEffect(() => {
    const fetchExercisesData = async () => {
      let exercisesData = [];

      if (bodyPart === "all") {
        exercisesData = await fetchData(
          "https://exercisedb.p.rapidapi.com/exercises",
          exerciseOptions
        );
      } else {
        exercisesData = await fetchData(
          `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,
          exerciseOptions
        );
      }

      setExercises(exercisesData);
    };

    fetchExercisesData();
  }, [bodyPart]);
  return (
    <Box sx={{ mt: { lg: "110px" } }} mt="50px" p="20px">
      <Typography variant="h3" mb="46px">
        Showing Results
      </Typography>
      <Stack
        direction="row"
        sx={{ gap: { lg: "110px", xs: "50px" } }}
        flexWrap="wrap"
        justifyContent={"center"}
      >
        {currentExercises.map((ex, index) => (
          <ExerciseCard key={index} item={ex}>
            {ex.name}
          </ExerciseCard>
        ))}
      </Stack>
      <Stack mt="100px" alignItems="center">
        {exercises.length > exerciseperpage && (
          <Pagination
            color="standard"
            shape="rounded"
            defaultPage={1}
            count={Math.ceil(exercises.length / exerciseperpage)}
            page={currentPage}
            onChange={paginte}
          />
        )}
      </Stack>
    </Box>
  );
};

export default Exercises;
