import {
  type ComputedFields,
  defineDocumentType,
  defineNestedType,
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
    author: { type: "string", default: "Unknown" },
  },
  computedFields,
}));

const Attribution = defineNestedType(() => ({
  name: "Attribution",
  fields: {
    author: { type: "string", default: "Unknown" },
    adapted: { type: "boolean", default: false },
    ogTitle: { type: "string", required: true },
  },
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
    attribution: {
      type: "nested",
      of: Attribution,
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
