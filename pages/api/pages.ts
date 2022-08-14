import { NextApiResponse, NextApiRequest } from "next";
import { RequestSlice, SlicePage } from "../../src/types";
import { client } from "../../src/utils/client";
import { getCurrentLocale } from "../../src/utils/currentLocale";

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse<SlicePage[]>
) {
  try {
    const { sid: sliceQuery } = _req.query;
    const locale = getCurrentLocale();

    const response = await client.dangerouslyGetAll({ lang: locale });

    /**
     * Response will be a list of all the published documents.
     */

    /**
     * From the above result pull out all the pages
     * which matches the given condition (a given slice).
     */

    let slicePages: SlicePage[] = [];

    response.map((page) => {
      const { id, lang, data } = page;

      data?.body?.forEach((slice: RequestSlice) => {
        const { slice_type } = slice;

        if (slice_type === sliceQuery) {
          // Construct a URL for the document in the Prismic editor
          let url = `https://${process.env.REPO_NAME}.prismic.io/documents~b=working&c=published&l=${lang}/${id}/`;

          /**
           * Like same slice exists multiple times in a document.
           * Making sure even though the above condition satisfies but
           * should not add redundant entries.
           */

          const hasPageAddedBefore = slicePages.find((page) => page.id === id);

          if (hasPageAddedBefore) {
            /**
             * If the page has been added before.
             * Then increase the occurrences.
             */
            const updatedSlicePages = slicePages.map((page) => {
              if (page.id === id) {
                return {
                  ...page,
                  occurrences: page.occurrences ? page.occurrences + 1 : 1,
                };
              }

              return page;
            });

            slicePages = [...updatedSlicePages];
          } else {
            slicePages.push({
              url,
              title: data.title,
              id,
            });
          }
        }
      });
    });

    res.status(200).json(slicePages);
  } catch (err) {
    /**
     * On-error return empty array as that code won't break.
     */
    return res.status(200).json([]);
  }
}
