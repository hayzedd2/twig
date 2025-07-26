import type { Block, BlockContent, ListBlock } from "./types";

const renderTwig = (content: BlockContent[]) => {
  const MARK_RENDERERS = {
    bold: (text: string) => `<strong class="twig-bold">${text}</strong>`,
    italic: (text: string) => `<em class="twig-italic">${text}</em>`,
    underline: (text: string) => `<span class="twig-underline">${text}</span>`,
    strikethrough: (text: string) =>
      `<s class="twig-strikethrough">${text}</s>`,
  } as const;

  const renderSpan = (span: BlockContent) => {
    let html = span.text;
    for (const mark of span.marks) {
      const renderer = MARK_RENDERERS[mark];
      if (renderer) {
        html = renderer(html);
      }
    }
    switch (span.type) {
      case "text":
        return html;
      case "link":
        return `<a href="${span.url}" class="twig-link">${html}</a>`;
      default:
        return html;
    }
  };

  return content.map(renderSpan).join("");
};

const renderListBlock = (block: ListBlock): string => {
  const tag = block.listType === "ul" ? "ul" : "ol";
  const className = `twig-${block.listType}`;
  const items = block.listItems
    .map((listItem) => {
      const itemContent = renderTwig(listItem.content);
      return `<li class="twig-list-item">${itemContent}</li>`;
    })
    .join("");
  return `<${tag} class="${className}">${items}</${tag}>`;
};

export const renderTwigToHtml = (blocks: Block[]): string => {
  return blocks
    .map((block) => {
      switch (block.type) {
        case "paragraph":
          return `<p>${renderTwig(block.content)}</p>`;
        case "heading":
          const level = block.level;
          return `<h${level}>${renderTwig(block.content)}</h${level}>`;
        case "list":
          return renderListBlock(block);

        default:
          return "";
      }
    })
    .join("\n");
};
