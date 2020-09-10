# stickyboard-markdown
Markdown component for StickyBoard

[![Version](https://img.shields.io/npm/v/@stickyboard/markdown.svg)](https://npmjs.org/package/@stickyboard/markdown)
[![Downloads/week](https://img.shields.io/npm/dw/@stickyboard/markdown.svg)](https://npmjs.org/package/@stickyboard/markdown)
[![License](https://img.shields.io/npm/l/@stickyboard/markdown.svg)](https://github.com/soaple/@stickyboard/markdown/blob/master/package.json)

# Basic usage
```javascript
import { Markdown } from '@stickyboard/markdown';

function MarkdownUsage(){
  const input = "# header1 \n\n ## header2 \n\n ### header3";
  
  return (
    <Markdown 
      content={input} 
      editActive
      onSave={(c) => {
        console.log(c);
      }} />
  );
}
```

# Webpack watch
```bsh
$ npm start
```

# Build
```bsh
$ npm run build
```

# Publish to npm
```bsh
$ npm run publish
```

# License
This project is licenced under the [MIT License](http://opensource.org/licenses/mit-license.html).
