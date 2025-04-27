// src/services/apiService.ts
import { API_BASE_URL } from "../utils/constants"; // Update the import path

// Function to fetch data from an API
export const fetchData = async (endpoint: string) => {
  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      method: "GET", // HTTP method
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json(); // Parse the JSON from the response
    return data;
  } catch (error) {
    console.error("Error fetching data: ", error);
    throw new Error("Failed to fetch data");
  }
};

// Function to post data to an API
export const postData = async (endpoint: string, data: any) => {
  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      method: "POST", // HTTP method
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data), // Convert the data to JSON string
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const responseData = await response.json(); // Parse the JSON from the response
    return responseData;
  } catch (error) {
    console.error("Error posting data: ", error);
    throw new Error("Failed to post data");
  }
};
