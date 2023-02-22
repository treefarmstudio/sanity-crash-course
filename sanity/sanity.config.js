import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./schemas";
import { structure } from "./src/structure";

export default defineConfig({
  name: "default",
  title: "Sanity Crash Course",

  projectId: "0iczfznl",
  dataset: "production",

  plugins: [
    deskTool({
      structure
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
});
