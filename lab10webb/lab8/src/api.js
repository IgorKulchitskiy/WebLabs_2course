import axios from "axios";

const BASE_URL = "http://localhost:8000";
const RESOURCE_URL = `${BASE_URL}/aircrafts`;

const baseRequest = async ({ urlPath = "", method = "GET", data = null }) => {
  try {
    const url = `${RESOURCE_URL}${urlPath}`;
    if (method === "GET") {
      const response = await axios.get(url);
      return response.data;
    } else if (method === "POST") {
      const response = await axios.post(url, data, {
        headers: { "Content-Type": "application/json" },
      });
      return response.data;
    }
  } catch (error) {
    console.error("HTTP ERROR: ", error);
    throw error;
  }
};

export const getAllHelis = async () => {
  return await axios
    .get(RESOURCE_URL, {
      params: {},
    })
    .then((response) => response.data);
};

export const searchHelis = async (searchTerm) => {
  return await axios
    .get(RESOURCE_URL, {
      params: {
        search: searchTerm,
      },
    })
    .then((response) => response.data);
};

export const getSortHelis = async (sort, searchTerm) => {
  return await axios
    .get(RESOURCE_URL, {
      params: {
        order_by: sort,
        search: searchTerm,
      },
    })
    .then((response) => response.data);
};


export const getHeliById = async (id) => {
  return await axios
    .get(RESOURCE_URL, {
      params: {
        id: id,
      },
    })
    .then((response) => response.data);
};
