import { renderTwigToHtml } from "./renderer";


export { renderTwigToHtml } from "./renderer";
export type { 
  Block, 
  BlockContent, 
  ListBlock, 
  Mark, 
  HeadingLevel, 
  ListType, 
  SupportedBlockType,
  ParagraphBlock,
  HeadingBlock,
  CodeBlock,
  QuoteBlock,
  ListItem
} from "./types";


if (import.meta.main) {
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
      level: 1,
      content: [
        {
          type: "text",
          text: "Main Title - Heading 1 (No marks)",
          marks: [],
        },
      ],
    },
    {
      type: "heading",
      level: 2,
      content: [
        {
          type: "text",
          text: "Section Title - Heading 2 with Bold",
          marks: ["bold"],
        },
      ],
    },
    {
      type: "heading",
      level: 3,
      content: [
        {
          type: "text",
          text: "Subsection - Heading 3 with Italic",
          marks: ["italic"],
        },
      ],
    },
    {
      type: "heading",
      level: 4,
      content: [
        {
          type: "text",
          text: "Minor Section - Heading 4 with Underline",
          marks: ["underline"],
        },
      ],
    },
    {
      type: "heading",
      level: 5,
      content: [
        {
          type: "text",
          text: "Small Section - Heading 5 with Strikethrough",
          marks: ["strikethrough"],
        },
      ],
    },
    {
      type: "heading",
      level: 6,
      content: [
        {
          type: "text",
          text: "Tiny Section - Heading 6 with Multiple Marks",
          marks: ["bold", "italic", "underline"],
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
          text: "Linked Heading - Heading 2 with Link and Bold",
          marks: ["bold"],
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
      type: "list",
      listType: "ol",
      listItems: [
        {
          type: "listItem",
          content: [{ type: "text", text: "Ordered Item 1", marks: ["bold"] }],
        },
        {
          type: "listItem",
          content: [{ type: "text", text: "Ordered Item 2", marks: ["italic"] }],
        },
        {
          type: "listItem",
          content: [{ type: "text", text: "Ordered Item 3", marks: ["underline"] }],
        },
      ],
    },
    {
      type: "quote",
      quote: "This is a famous quote with important wisdom!",
    },
  ];

  const wrapper = (blocks: any[]): string => {
    return `<div class="twig-wrapper">${renderTwigToHtml(blocks)}</div>`;
  };

  // Check if we're in a browser environment
  if (typeof document !== 'undefined') {
    const renderer = document.getElementById("renderer")!;
    if (renderer) {
      renderer.innerHTML = wrapper(testBlocks);
    }
  } else {
    // Node.js environment - just log the output
    console.log(wrapper(testBlocks));
  }
}
