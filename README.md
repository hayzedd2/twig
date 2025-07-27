# @xylogeist/twig

A lightweight TypeScript renderer that converts structured block-based content(from an editor) into HTML.

## Installation

```bash
npm install @xylogeist/twig
# or
yarn add @xylogeist/twig
# or
bun add @xylogeist/twig
```

## Features

- **Block-based rendering**: Supports paragraphs, headings, lists, and more
- **Rich text formatting**: Bold, italic, underline, and strikethrough text
- **Type-safe**: Built with TypeScript for better development experience
- **Headless styling**: Zero CSS dependencies - bring your own styles

## Supported Block Types

- **Paragraph** (`paragraph`): Regular text blocks with rich formatting
- **Heading** (`heading`): Headers with levels 1-6
- **List** (`list`): Ordered and unordered lists with list items
- **Code** (`code`): Code blocks (planned)
- **Quote** (`quote`): Blockquotes (planned)

## Text Formatting

Each text block supports the following marks:
- `bold` - **Bold text**
- `italic` - *Italic text*
- `underline` - <u>Underlined text</u>
- `strikethrough` - ~~Strikethrough text~~

## Usage

### Basic Example

```typescript
import { renderTwigToHtml } from "@xylogeist/twig";
import type { Block } from "@xylogeist/twig";

const blocks: Block[] = [
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
    level: 2,
    content: [
      {
        type: "text",
        text: "This is a Heading",
        marks: [],
      },
    ],
  },
];

const html = renderTwigToHtml(blocks);
console.log(html);
```

### Running in Browser

1. Build the project:
```bash
bun build src/index.ts --outdir dist --target browser
```

2. Start the development server:
```bash
bun --hot index.html
```

3. Open your browser and navigate to `http://localhost:3000`



## Roadmap

- [ ] Add support for code blocks
- [ ] Add support for images
- [ ] Add support for links
- [ ] Add support for tables
