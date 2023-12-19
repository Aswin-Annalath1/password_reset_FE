//Here we use custom React Hook useFindUser to fetch user information from a server..

import axios from "axios";
import { useEffect, useState } from "react";

const useFindUser = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const getUser = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/user`, { withCredentials: true });
      if (response.data.success) {
        // Update the user state with the received user data
        setUser(response.data.user);
        // Set loading to false since the data has been successfully loaded
        setLoading(false);
      }
    } catch (error) {
      console.log("Error: ", error);
      setLoading(false);
    }
  };
// useEffect hook runs after the component renders
  useEffect(() => {
    // Call the getUser function when the component mounts
    getUser();
  }, []);

  return [user, setUser, loading];
};

export default useFindUser;