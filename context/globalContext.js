"use client";
import React, { useEffect, useState } from "react";

import useCategories from "./useCategories";
import { useUser } from "@clerk/nextjs";
import axios from "axios";

const GlobalContext = React.createContext();

export const GlobalContextProvider = ({ children }) => {
  const { isLoading, categories } = useCategories();

  const { user, isLoaded } = useUser();

  const [quizSetup, setQuizSetup] = useState({
    questionCount: 1,
    category: null,
    difficulty: null,
  });

  const [selectedQuiz, setSelectedQuiz] = useState(null);
  const [quizResponses, setQuizResponses] = useState([]);

  useEffect(() => {
    if (!isLoaded || !user?.emailAddresses[0]?.emailAddress) {
      return;
    }

    const registerUser = async () => {
      try {
        await axios.post("/api/user/register");
      } catch (error) {
        console.log("Error Registering User: ", error);
      }
    };

    if (user?.emailAddresses[0]?.emailAddress) {
      registerUser();
    }
  }, [user, isLoaded]);

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
