"use client";
import React, { useState } from "react";

import useCategories from "./useCategories";

const GlobalContext = React.createContext();

export const GlobalContextProvider = ({ children }) => {
  const { isLoading, categories } = useCategories();

  const [quizSetup, setQuizSetup] = useState({
    questionCount: 1,
    category: null,
    difficulty: null,
  });

  const [selectedQuiz, setSelectedQuiz] = useState(null);
  const [quizResponses, setQuizResponses] = useState([]);

  return (
    <GlobalContext.Provider
      value={{
        isLoading,
        categories,
        quizSetup,
        setQuizSetup,
        selectedQuiz,
        setSelectedQuiz,
        quizResponses,
        setQuizResponses,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  return React.useContext(GlobalContext);
};
