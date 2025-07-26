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
        type: "link",
        url: "https://www.google.com",
        text: "This is a Heading 2 with underline and link",
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
          {
            type: "link",
            url: "https://www.google.com",
            text: "Go to google",
            marks: ["bold"],
          },
        ],
      },
      {
        type: "listItem",
        content: [{ type: "text", text: "Item 2", marks: ["italic"] }],
      },
      {
        type: "listItem",
        content: [{ type: "text", text: "Item 3", marks: [] }],
      },
      {
        type: "listItem",
        content: [
          {
            type: "link",
            url: "https://www.google.com",
            text: "Item 4",
            marks: [],
          },
        ],
      },
    ],
  },
  {
    type: "quote",
    quote: "I said this!",
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
