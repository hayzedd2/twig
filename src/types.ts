
export type SupportedBlockType =
  | "paragraph"
  | "heading"
  | "list"
  | "code"
  | "quote";
export type Mark = "bold" | "italic" | "underline" | "strikethrough";
export type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;
export type ListType = "ul" | "ol";

interface BaseContentType {
  text: string;
  marks: Mark[];
}
export interface BlockContent extends BaseContentType {
  type: "text";
}
export interface ListItem {
  type: "listItem";
  content: BlockContent[];
}

export interface Block {
  type: SupportedBlockType;
  content?: BlockContent[];
  level?: HeadingLevel;
  listItems?: ListItem[];
  listType?: ListType;
}
