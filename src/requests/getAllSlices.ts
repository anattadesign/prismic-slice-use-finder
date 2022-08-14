import { fetchAllPages } from "./fetchAllPages";

export const getAllSlices = async () => {
  try {
    const allPages: any = await fetchAllPages();

    const sliceTypes: string[] = [];

    allPages.map((page: any) => {
      page?.data?.body?.forEach((slice: any) => {
        const sliceType = slice.slice_type;

        if (sliceTypes.includes(sliceType)) return;

        sliceTypes.push(sliceType);
      });
    });

    return sliceTypes;
  } catch (err) {
    return [];
  }
};
