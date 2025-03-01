import axios from "axios";
import { Match } from "./types";

const apiClient = axios.create({
  baseURL: "https://app.ftoyd.cm/fronttemp-service",
});

export const fetchMatches = async (): Promise<Match[]> => {
  const response = await apiClient.get("/fronttemp");
  return response.data.data.matches;
};
