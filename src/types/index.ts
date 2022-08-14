export type Locale = {
  id: string;
  name: string;
};

export type Locales = Locales[];

export type Slice = {
  name: string;
  id: string;
};

export type Slices = Slice[];

export type SlicePage = {
  url: string;
  title: any;
  id: string;
  occurrences?: number;
};

export type RequestSlice = Slice & { slice_type: string };
