import { Box } from "@mui/material";
import React, { useState } from "react";
import Exercises from "../Components/Exercises";
import ExercisesSearch from "../Components/ExercisesSearch";
import HeroBanner from "../Components/HeroBanner";

const Home = () => {
  const [bodyPart, setBodyPart] = useState("all");
  const [exercises, setExercises] = useState([]);
  return (
    <Box>
      <HeroBanner />
      <ExercisesSearch
        setExercises={setExercises}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
      />
      <Exercises
        exercises={exercises}
        setExercises={setExercises}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
      />
    </Box>
  );
};

export default Home;
