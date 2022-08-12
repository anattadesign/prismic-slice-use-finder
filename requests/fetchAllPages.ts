import { client } from "./client";

export const fetchAllPages = async () => {
  try {
    const result: any = await client.dangerouslyGetAll();

    return result;
  } catch (err) {
    return [];
  }
};
