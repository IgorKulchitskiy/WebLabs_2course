// api.js

const BASE_URL = "http://localhost:8000";
const RESOURCE_URL = `${BASE_URL}/aircrafts`; // Замініть на правильний ресурс

const baseRequest = async ({ urlPath = "", method = "GET", body = null }) => {
  try {
    const reqParams = {
      method,
      headers: {
        "Content-Type": "application/json",
      },
    };

    if (body) {
      reqParams.body = JSON.stringify(body);
    }

    const response = await fetch(`${RESOURCE_URL}${urlPath}`, reqParams);
    if (!response.ok) {
      const errorData = await response.json(); // Отримуємо деталі помилки
      throw new Error(`HTTP error! status: ${response.status}, message: ${errorData.message}`);
    }

    return await response.json();
  } catch (error) {
    console.error("HTTP ERROR: ", error);
    throw error; // Перепускаємо помилку для обробки в calling code
  }
};

export const getAllHelis = async () => {
  return await baseRequest({ method: "GET" });
};

export const postHeli = async (body) => {
  return await baseRequest({ method: "POST", body });
};

export const deleteHeli = async (heliId) => {
  return await baseRequest({ urlPath: `/${heliId}`, method: "DELETE" });
};

export const updateHeli = async (heliId, body) => {
  return await baseRequest({ urlPath: `/${heliId}`, method: "PUT", body });
};

export const searchHelis = async (searchTerm) => {
  const queryParams = `?search=${encodeURIComponent(searchTerm)}`;
  return await baseRequest({ urlPath: queryParams, method: "GET" });
};
