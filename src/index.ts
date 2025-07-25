import { renderTwigToHtml } from "./renderer";
import type { Block } from "./types";

const testBlocks = [
  {
    type: "paragraph",
    content: [
      {
        type: "text",
        text: "This is some ",
        marks: [],
      },
      {
        type: "text",
        text: "bold",
        marks: ["bold"],
      },
      {
        type: "text",
        text: " and ",
        marks: [],
      },
      {
        type: "text",
        text: "italic",
        marks: ["italic"],
      },
      {
        type: "text",
        text: " text.",
        marks: [],
      },
    ],
  },
  {
    type: "heading",
    level: 5,
    content: [
      {
        type: "text",
        text: "This is a Heading",
        marks: [],
      },
    ],
  },
  { 
    type: "list",
    listType: "ol",
    listItems: [
      {
        type: "listItem",
        content: [
          { type: "text", text: "Item 1", marks: ["bold"] },
          { type: "text", text: "Item 2", marks: ["italic"] },
        ],
      },
      {
        type: "listItem",
        content: [
          { type: "text", text: "Pawpaw", marks: [] },
          { type: "text", text: "Orange", marks: [] },
        ],
      },
    ],
  },
];

console.log(renderTwigToHtml(testBlocks as unknown as Block[]));