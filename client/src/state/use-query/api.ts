import axios from "axios";
import Repository  from "./Types";
import URL from "./URL";


async function getUsers(): Promise<Repository[]> {
  
  const response = await axios.get<Repository[]>(`${URL}/get-data`);
  
  return response.data;
}

async function getCount(): Promise<Repository[]> {
  
  const response = await axios.get<Repository[]>(`${URL}/get-count`);
  
  return response.data;
}


export const api = {
  getUsers,
  getCount
}