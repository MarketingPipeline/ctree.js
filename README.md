# ctree.js

<p align="center">
  <img height="400" alt="Banner for ctree.js repo" src="https://i.imgur.com/IkywicO.png" />
</p>
 
A lightweight JavaScript library that generates a festive, colored Christmas tree using ANSI escape codes for terminal output. 
 
Perfect for adding some holiday cheer to your command-line interface!

## Features

- Generates a festive Christmas tree directly in the terminal.
- Adds vibrant colors using ANSI escape codes for a visually appealing output.
- Randomly assigns colors to the tree's ornaments for a unique design every time.

## Example and usage

**How to use ctree.js:**

```js
import ctree from 'https://esm.sh/gh/MarketingPipeline/ctree.js/';

console.log(ctree()) // Returns the tree in your console output.
```

**Another example:**

```js
import ctree from 'https://esm.sh/gh/MarketingPipeline/ctree.js/';

// Example function to repeatedly log the colored tree
function logTree() {
  console.clear(); // Clear the console
  console.log(ctree()); // Returns the tree in your console output
}

// Call logTree every 3 seconds (3000 milliseconds)
setInterval(logTree, 3000);
```


## Acknowledgments
- This library was originally written in GoLang by [Matt Gleich](https://github.com/gleich/ctree).

## Contributing ![GitHub](https://img.shields.io/github/contributors/MarketingPipeline/ctree.js)

Contributions are welcome! If you have suggestions for improvements or features, feel free to create a pull request.

See also the list of
[contributors](https://github.com/MarketingPipeline/ctree.js/graphs/contributors) who
participate in this project.

## License ![GitHub](https://img.shields.io/github/license/MarketingPipeline/ctree.js)
This library is open-source and available under the MIT License. See the [LICENSE](https://github.com/MarketingPipeline/ctree.js/blob/main/LICENSE) file for more details.
