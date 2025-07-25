

import type { Block, BlockContent, HeadingLevel, ListItem, ListType } from "./types";
/**
 * Validates a block and returns a validated block
 * @param block - The block to validate
 * @returns The validated block or null if the block is invalid
 */
export const validateBlock = (block: Block) => {
  if (block.type === "paragraph") {
    if (!block.content) {
      throw new Error("Content is required for paragraph");
    }
    return { ...block, content: block.content } as Block & { type: "paragraph"; content: BlockContent[] };
  }
  
  if (block.type === "heading") {
    if (!block.content) {
      throw new Error("Content is required for heading");
    }
    const level = block.level || 1;
    return { ...block, content: block.content, level } as Block & { type: "heading"; content: BlockContent[]; level: HeadingLevel };
  }

  if (block.type === "list") {
    if (!block.listItems) {
      throw new Error("List items are required for list");
    }
    if (!block.listType) {
      throw new Error("List type is required for list");
    }
    return { ...block, listItems: block.listItems, listType: block.listType } as Block & { type: "list"; listItems: ListItem[]; listType: ListType };
  }
  
  return null;
};
