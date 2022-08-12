import { fetchAllPages } from "./fetchAllPages";

type Page = {
  url: string;
  title: any;
};

export const getAllPages = async (sliceQuery: string) => {
  try {
    const allPages: any = await fetchAllPages();

    const slicePages: Page[] = [];

    allPages.map((page: any) => {
      const { id, lang, data } = page;

      console.log({ data: data.title });

      data?.body?.forEach((slice: any) => {
        const { slice_type } = slice;

        if (slice_type === sliceQuery) {
          // Construct a URL for the document in the Prismic editor
          let url = `https://${process.env.REPO_NAME}.prismic.io/documents~b=working&c=published&l=${lang}/${id}/`;

          slicePages.push({
            url,
            title: data.title,
          });
        }
      });
    });

    return slicePages;
  } catch (err) {
    return [];
  }
};
