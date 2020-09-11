# stickyboard-markdown

Markdown component for StickyBoard

[![Version](https://img.shields.io/npm/v/@stickyboard/markdown.svg)](https://npmjs.org/package/@stickyboard/markdown)
[![Downloads/week](https://img.shields.io/npm/dw/@stickyboard/markdown.svg)](https://npmjs.org/package/@stickyboard/markdown)
[![License](https://img.shields.io/npm/l/@stickyboard/markdown.svg)](https://github.com/soaple/@stickyboard/markdown/blob/master/package.json)

# Webpack watch

```bsh
$ npm start
```

# Build

```bsh
$ npm run build
```

# Basic usage

```javascript
import { Markdown } from '@stickyboard/markdown';

function MarkdownUsage() {
    const content = '# header1\n## header2\n### header3';

    return (
        <Markdown
            editable
            content={content}
            onSave={(content) => {
                // TODO: Save your content
            }}
        />
    );
}
```

# License

This project is licenced under the [MIT License](http://opensource.org/licenses/mit-license.html).
