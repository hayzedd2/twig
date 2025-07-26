import type { Block, BlockContent, Mark } from "./types";
import { validateBlock } from "./validator";

const renderTwig = (content: BlockContent[]) => {
  return content
    .map((span) => {
      let html = span.text;
      if (span.marks.includes("bold"))
        html = `<strong class="bold">${html}</strong>`;
      if (span.marks.includes("italic"))
        html = `<em class="twig-italic">${html}</em>`;
      if (span.marks.includes("underline"))
        html = `<span class="twig-underline">${html}</span>`;
      if (span.marks.includes("strikethrough"))
        html = `<s class="twig-strikethrough">${html}</s>`;
      return html;
    })
    .join("");
};

const renderMark = (mark: Mark[], text: string) => {
  if (mark.includes("bold")) {
    return `<strong class="bold">${text}</strong>`;
  }
  if (mark.includes("italic")) {
    return `<em class="twig-italic">${text}</em>`;
  }
  if (mark.includes("underline")) {
    return `<span class="twig-underline">${text}</span>`;
  }
  if (mark.includes("strikethrough")) {
    return `<s class="twig-strikethrough">${text}</s>`;
  }
  return text;
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
        case "list":
          return `<${validatedBlock.listType}>
          ${validatedBlock.listItems
            .map((item) => {
              return item.content
                .map((content) => {
                  return `<li>${renderMark(content.marks, content.text)}</li>`;
                })
                .join("");
            })
            .join("")}
          </${validatedBlock.listType}>`;
        default:
          return "";
      }
    })
    .join("\n");
};
