import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineConfig({
  branch,
  clientId: "6f93c909-6622-4d21-b0c8-cf59474224bb", // Get this from tina.io
  token: "4a19dd1339e2089fc82454eeb8361ec0799d0944", // Get this from tina.io

  build: {
    outputFolder: "admin",
    publicFolder: "_site",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "_site",
    },
  },
  schema: {
    collections: [
      {
        name: "post",
        label: "Posts",
        path: "posts",
        fields: [
          {
            type: "string",
            name: "layout",
            label: "Page layout",
            defaultItem: "layouts/post.njk",
            required: true,
          },
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "description",
            label: "Description",
            required: true,
          },
          {
            type: "datetime",
            name: "date",
            label: "Published date",
            required: true,
          },
          {
            type: "string",
            name: "tags",
            label: "Tags",
            list: true,
            required: true,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
      },
    ],
  },
});
