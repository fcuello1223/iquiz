import { useEffect, useState } from "react";
import axios from "axios";

const useCategories = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [categories, setCategories] = useState([]);

  const getCategories = async () => {
    setIsLoading(true);

    try {
      const response = await axios.get("/api/categories");

      setCategories(response.data);

      setIsLoading(false);
    } catch (error) {
      console.log("Error Fetching Categories: ", error);
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  return { isLoading, categories };
};

export default useCategories;
