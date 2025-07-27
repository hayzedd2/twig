export type SupportedBlockType =
  | "paragraph"
  | "heading"
  | "list"
  | "code"
  | "quote";
export type Mark = "bold" | "italic" | "underline" | "strikethrough";
export type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;
export type ListType = "ul" | "ol";

export interface BlockContent {
  type: "text" | "link";
  text: string;
  marks: Mark[];
  url?: string;
}
export interface ListItem {
  type: "listItem";
  content: BlockContent[];
}

export type Block =
  | ParagraphBlock
  | HeadingBlock
  | ListBlock
  | CodeBlock
  | QuoteBlock;

export interface ParagraphBlock {
  type: "paragraph";
  content: BlockContent[];
}

export interface HeadingBlock {
  type: "heading";
  level: HeadingLevel;
  content: BlockContent[];
}

export interface ListBlock {
  type: "list";
  listType: ListType;
  listItems: ListItem[];
}

export interface CodeBlock {
  type: "code";
  content: string; 
  language?: string;
}

export interface QuoteBlock {
  type: "quote";
  quote: string;
  
}
