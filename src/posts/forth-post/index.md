---
title: Images and Code Styling
date: '2018-08-04'
---

Needed plugins for images:

* gatsby-remark-images
* gatsby-plugin-sharp
* gatsby-transformer-sharp

Needed plugins for Code Styling:

* gatsby-remark-prismjs
* prismjs

```javascript
resolve: 'gatsby-transformer-remark',
options: {
  excerpt_separator: `<!-- end -->`,
  plugins: [
    {
      resolve: 'gatsby-remark-images',
      options: {
        maxWidth: 650,
        showCaptions: true,
        sizeByPixelDensity: true,
        withWebp: true,
      },
    },
    'gatsby-remark-prismjs',
  ],
}
```

import 'prismjs/themes/prism-tomorrow.css'