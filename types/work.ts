export interface WorkMeta {
  id: string;
  slug: string;
  title: string;
  category: string[];
  description: string;
  version: string;
  createdAt: string;
  updatedAt: string;
  preview: {
    thumbnail: string;
    screenshot: string;
  };
  modes?: string[];
  features?: string[];
}

export interface Work {
  meta: WorkMeta;
  path: string;
}
