# Changelog

All notable changes to this project will be documented in this file.

## [1.1.0]  - (Apr 16, 2026)

### Fixed

- Changed ANSI reset code from `\x1b[0m` to `\x1b[39m`.

This allows background colors (from tools like chalk or lolcat) to persist through the tree output instead of being stripped by a global reset.


## [1.0.1] - (Oct 7, 2024)

### Changed
- Small fix for regex pattern to ensure all bulbs are correctly coloured.
  - See commit [here](https://github.com/MarketingPipeline/ctree.js/commit/190a897cef7bdd5775914d8c6eac58a31117699f)

## [1.0.0] - (Oct 7, 2024)

Initial release of `ctree.js`

<!--
These Markdown anchors provide a link to the diff for each release. They should be
updated any time a new release is cut.
-->
[1.1.0]: https://github.com/MarketingPipeline/ctree.js/releases/v1.0.1
[1.0.1]: https://github.com/MarketingPipeline/ctree.js/releases/v1.0.1
[1.0.0]: https://github.com/MarketingPipeline/ctree.js/releases/v1.0.0
