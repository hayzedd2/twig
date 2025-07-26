import { renderTwigToHtml } from "./renderer";
import type { Block } from "./types";

const testBlocks: Block[] = [
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
    level: 1,
    content: [
      {
        type: "text",
        text: "This is a Heading 1",
        marks: [],
      },
    ],
  },
  {
    type: "heading",
    level: 4,
    content: [
      {
        type: "text",
        text: "This is a Heading with strikethrough",
        marks: ["strikethrough"],
      },
    ],
  },
  {
    type: "heading",
    level: 2,
    content: [
      {
        type: "text",
        text: "This is a Heading 2 with underline",
        marks: ["underline"],
      },
    ],
  },
  {
    type: "list",
    listType: "ul",
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

const wrapper = (blocks: Block[]): string => {
  return `<div class="twig-wrapper">${renderTwigToHtml(blocks)}</div>`;
};
if (typeof document !== "undefined") {
  const renderer = document.getElementById("renderer")!;
  if (renderer) {
    renderer.innerHTML = wrapper(testBlocks);
  }
} else {
  console.log(wrapper(testBlocks));
}
