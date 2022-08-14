import { client } from "./client";

export const getAllLocales = async () => {
  try {
    const result: any = await client.getRepository();

    return result.languages;
  } catch (err) {
    return [];
  }
};
