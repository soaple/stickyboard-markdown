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

# Usage example
```javascript
import React, { useState } from 'react';
import { Markdown } from '@stickyboard/markdown';

function SampleMarkdown(props) {
    const [content, setContent] = useState(
        "# Header1\n## Header2\n### Header3"
    );

    return (
        <Markdown
            editable
            content={content}
            onSave={(content) => {
                setContent(content);
            }}
        />
    );
}

export default SampleMarkdown;
```

# License

This project is licenced under the [MIT License](http://opensource.org/licenses/mit-license.html).
