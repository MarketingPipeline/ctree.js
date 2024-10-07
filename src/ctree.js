/**
 * Generates a colored Christmas tree with ANSI colors.
 *
 * @returns {string} The colored output string.
 */
export default function ctree() {
  /**
   * Represents an RGB color.
   *
   * @constructor
   * @param {number} r - The red component (0-255).
   * @param {number} g - The green component (0-255).
   * @param {number} b - The blue component (0-255).
   */
  class Color {
    constructor(r, g, b) {
      this.r = r;
      this.g = g;
      this.b = b;
    }

    /**
     * Converts the color to an ANSI escape code for foreground color.
     *
     * @returns {string} The ANSI escape code.
     */
    toAnsi() {
      return `\x1b[38;2;${this.r};${this.g};${this.b}m`;
    }

    /**
     * Resets the ANSI formatting to default.
     *
     * @returns {string} The ANSI reset code.
     */
    reset() {
      return "\x1b[0m";
    }

    /**
     * Formats a character with the color.
     *
     * @param {string} char - The character to format.
     * @returns {string} The formatted string with color.
     */
    format(char) {
      return `${this.toAnsi()}${char}${this.reset()}`;
    }
  }

  const yellow = new Color(255, 255, 0);
  const green = new Color(0, 255, 0);
  const brown = new Color(210, 105, 30);

  /**
   * Applies colors to specified characters in the input string.
   *
   * @param {string} base - The input string to apply colors to.
   * @returns {string} The string with colors applied.
   */
  function applyColors(base) {
    let applied = base;

    applied = applyColorToChars(applied, yellow, "y", [
      "|",
      "-",
      "A",
      "+",
      "*"
    ]);
    applied = applyColorToChars(applied, green, "g", ["/", "\\", "="]);
    applied = applyColorToChars(applied, brown, "b", ["|", "_"]);

    return applied;
  }

  /**
   * Applies a specific color to given characters in a string.
   *
   * @param {string} str - The input string to modify.
   * @param {Color} color - The color to apply.
   * @param {string} charPrefix - The prefix for identifying characters.
   * @param {string[]} chars - The list of characters to color.
   * @returns {string} The modified string with colors applied.
   */
  function applyColorToChars(str, color, charPrefix, chars) {
    let applied = str;
    chars.forEach((char) => {
      const coloredChar = color.format(char);
      applied = applied.split(charPrefix + char).join(coloredChar);
    });
    return applied;
  }

  const input = `
         y|
        y-y+y-
         yA
        g/g=g\\               /\\  /\\    ___  _ __  _ __ __    __
      10g/ y* g\\20            /  \\/  \\  / _ \\| '__|| '__|\\ \\  / /
      g/g=g=g=g=g=g\\           / /\\  /\\ \\|  __/| |   | |    \\ \\/ /
      g/  3O  g\\          \\_\\ \\/ /_/ \\___/|_|   |_|     \\  /
    40g/ 50 y* 60 g\\70                                       / /
    g/g=g=g=g=g=g=g=g=g=g\\        __  __                        /_/    _
    g/  y*   y*  g\\        \\ \\/ /        /\\  /\\    ____  ____  | |
  80g/ y*   90   y* g\\100       \\  /   __   /  \\/  \\  / _  |/ ___\\ |_|
  g/g=g=g=g=g=g=g=g=g=g=g=g=g=g\\       /  \\  |__| / /\\  /\\ \\| (_| |\\___ \\  _
  g/  140   y*   150  g\\      /_/\\_\\      \\_\\ \\/ /_/ \\__,_|\\____/ |_|
160g/ y*   170   180   y* g\\190
g/g=g=g=g=g=g=g=g=g=g=g=g=g=g=g=g=g=g\\
       b|   b|
       b|b_b_b_b|
`;

  /**
   * Generates a random integer up to the specified maximum.
   *
   * @param {number} max - The maximum integer to generate.
   * @returns {number} A random integer between 0 and max-1.
   */
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  /**
   * Generates a random color for the input character.
   *
   * @param {string} input - The input character to color.
   * @returns {string} The formatted colored character.
   */
  function generateColor(input) {
    const selection = getRandomInt(6);
    let color;

    switch (selection) {
      case 0:
        color = new Color(247, 108, 246); // Pink
        break;
      case 1:
        color = new Color(85, 202, 255); // Light Blue
        break;
      case 2:
        color = new Color(100, 0, 255); // Purple
        break;
      case 3:
        color = new Color(236, 21, 0); // Red
        break;
      case 4:
        color = new Color(243, 213, 0); // Orange
        break;
      case 5:
        color = new Color(100, 255, 24); // Light Green
        break;
      default:
        color = new Color(255, 255, 255); // Fallback to white
    }

    return color.format(input);
  }

  /**
   * Applies random colors to digit characters in the input string.
   *
   * @param {string} input - The input string to modify.
   * @returns {string} The string with colors applied to digits.
   */
  function applyColorsToLights(input) {
    const regex = /(\d+)O?/g; // Matches one or more digits followed by optional 'O'
    return input.replace(regex, (match) => generateColor("O"));
  }

  const coloredOutput = applyColors(applyColorsToLights(input));
  return coloredOutput;
}
