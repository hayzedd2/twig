import type { Block, BlockContent, Mark } from "./types";
import { validateBlock } from "./validator";

export const renderTwig = (content: BlockContent[]) => {
  return content
    .map((span) => {
      let html = span.text;
      if (span.marks.includes("bold"))
        html = `<strong class="bold">${html}</strong>`;
      if (span.marks.includes("italic"))
        html = `<em class="twig-italic">${html}</em>`;
      if (span.marks.includes("underline"))
        html = `<span class="twig-underline">${html}</span>`;
      return html;
    })
    .join("");
};

const renderMark = (mark: Mark[], text: string) => {
  mark.map((m) => {
    switch (m) {
      case "bold":
        return `<strong class="bold">${text}</strong>`;
      case "italic":
        return `<em class="twig-italic">${text}</em>`;
      case "underline":
        return `<span class="twig-underline">${text}</span>`;
      case "strikethrough":
        return `<s class="twig-strikethrough">${text}</s>`;
    }
  });
};

export const renderTwigToHtml = (blocks: Block[]): string => {
  return blocks
    .map((block) => {
      const validatedBlock = validateBlock(block);
      if (!validatedBlock) {
        throw new Error("Invalid block");
      }
      switch (validatedBlock.type) {
        case "paragraph":
          return `<p>${renderTwig(validatedBlock.content)}</p>`;
        case "heading":
          return `<h${validatedBlock.level}>${renderTwig(
            validatedBlock.content
          )}</h${validatedBlock.level}>`;
        // case "list":
        //   return `<${validatedBlock.listType}>${validatedBlock.listItems
        //     .map((item) =>
        //       item.content
        //         .map((content) => renderMark(content.marks, content.text))
        //         .join("")
        //     )
        //     .join("")}</${validatedBlock.listType}>`;
        default:
          return "";
      }
    })
    .join("\n");
};

