#### *sesh-thunderball-framework-idgenerator*
---
## Generates a universally unique ID.

**Useage:**

    `const gen = require('xxxx');`
    `const newId = gen.generate();`

**Switches:**

    - int-only-id:
        The generate() function accepts a single optional
        parameter of type bool. 
        If set to TRUE, the function will return a numeric ID.
        If set of FALSE or omitted, the ID returned may include
        non-numeric characters.