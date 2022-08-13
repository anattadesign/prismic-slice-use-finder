import { fetchAllPages } from "./fetchAllPages";

type Page = {
  url: string;
  title: any;
  id: string;
};

export const getAllPages = async (sliceQuery: string) => {
  try {
    const allPages: any = await fetchAllPages();

    const slicePages: Page[] = [];

    allPages.map((page: any) => {
      const { id, lang, data } = page;

      data?.body?.forEach((slice: any) => {
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

          if (!hasPageAddedBefore) {
            slicePages.push({
              url,
              title: data.title,
              id,
            });
          }
        }
      });
    });

    return slicePages;
  } catch (err) {
    return [];
  }
};
