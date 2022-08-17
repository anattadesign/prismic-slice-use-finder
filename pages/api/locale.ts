import { NextApiResponse, NextApiRequest } from "next";
import { Locales } from "../../src/types";
import { client } from "../../src/utils/prismic-client";

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse<Locales>
) {
  try {
    const response = await client.getRepository();

    const locales = response.languages;

    res.status(200).json(locales);
  } catch (err) {
    /**
     * On-error return empty array as that code won't break.
     */

    return res.status(200).json([]);
  }
}
