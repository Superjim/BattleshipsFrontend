import axios from "axios";

const API_URL = "https://battleshipsbackend.azurewebsites.net/api";

export const getPlayers = async () => {
  try {
    const response = await axios.get(`${API_URL}/Player`);
    return response.data;
  } catch (error) {
    console.error("Failed to fetch players", error);
    throw error;
  }
};

export const addPlayer = async (name: string) => {
  try {
    const response = await axios.post(
      `${API_URL}/Player`,
      JSON.stringify(name),
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Failed to add player", error);
    throw error;
  }
};
