import {
  type ComputedFields,
  defineDocumentType,
  makeSource,
} from "contentlayer/source-files";
import remarkGfm from "remark-gfm";

const computedFields = {
  slug: {
    type: "string",
    resolve: (doc) => `/${doc._raw.flattenedPath}`,
  },
  slugAsParams: {
    type: "string",
    resolve: (doc) => doc._raw.flattenedPath.split("/").slice(1).join("/"),
  },
} satisfies ComputedFields;

export const SCP = defineDocumentType(() => ({
  name: "SCP",
  filePathPattern: "id/**/*.mdx",
  contentType: "mdx",
  fields: {
    id: {
      type: "string",
      required: true,
    },
    objectClass: {
      type: "string",
      required: true,
    },
    alias: {
      type: "string",
      required: true,
    },
    summary: { type: "string", required: true },
  },
  computedFields,
}));

export const OrientationPage = defineDocumentType(() => ({
  name: "OrientationPage",
  filePathPattern: "orientation/**/*.mdx",
  contentType: "mdx",
  fields: {
    part: {
      type: "number",
      required: true,
    },
    title: {
      type: "string",
      required: true,
    },
  },
  computedFields,
}));

export default makeSource({
  contentDirPath: "./content",
  documentTypes: [SCP, OrientationPage],
  mdx: {
    remarkPlugins: [remarkGfm],
  },
});
