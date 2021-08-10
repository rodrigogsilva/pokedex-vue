import { AxiosResponse } from "axios";

import { api } from "./api";

interface Pokemon {
  name: string;
  url: string;
}

export interface AllResponse {
  next: string;
  previous: string;
  results: Pokemon[];
}

export const getAll = async (offset = 0, limit = 10): Promise<AllResponse> => {
  const { data }: AxiosResponse<AllResponse> = await api.get(
    `?offset=${offset}&limit=${limit}`
  );

  return data;
};

export const getPokemon = async (pokemon: string | number): Promise<any> => {
  const { data } = await api.get(`/${pokemon}`);
  return data;
};
