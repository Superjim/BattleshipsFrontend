import axios from "axios";

const API_URL = "https://battleshipsbackend.azurewebsites.net/api";

//Players

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

//Games

export const fetchGames = async () => {
  try {
    const response = await axios.get(`${API_URL}/Game`);
    return response.data;
  } catch (error) {
    console.error("Failed to fetch games", error);
    throw error;
  }
};

export const addGame = async (playerId: string) => {
  try {
    const response = await axios.post(
      `${API_URL}/Game`,
      JSON.stringify(playerId),
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Failed to create game", error);
    throw error;
  }
};

export const addPlayerToGame = async (playerId: string, gameId: string) => {
  try {
    const response = await axios.post(
      `${API_URL}/Game/${gameId}/join`,
      JSON.stringify(playerId),
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Failed to join game", error);
    throw error;
  }
};
