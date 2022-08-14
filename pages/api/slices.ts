import { NextApiResponse, NextApiRequest } from "next";
import { Slices, RequestSlice } from "../../src/types";
import { client } from "../../src/utils/client";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Slices>
) {
  try {
    const { lang: locale } = req.query;

    const result = await client.dangerouslyGetAll({ lang: locale as string });

    /**
     * Result will be a list of all the published documents.
     */

    /**
     * From the above result pull out all the slices and return.
     */

    let sliceTypes: Slices = [];

    result.map(({ data }) => {
      data?.body?.forEach((slice: RequestSlice) => {
        const sliceType = slice.slice_type;

        const hasSliceAlreadyAdded = sliceTypes.find(
          (slice) => slice.name === sliceType
        );

        if (hasSliceAlreadyAdded) return;

        sliceTypes.push({
          name: sliceType,
          id: slice.id,
        });
      });
    });

    res.status(200).json(sliceTypes);
  } catch (err) {
    /**
     * On-error return empty array as that code won't break.
     */
    return res.status(200).json([]);
  }
}
