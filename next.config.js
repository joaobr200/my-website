const withImages = require("next-images");
// eslint-disable-next-line no-undef
module.exports = withImages({
  distDir: "build",
  trailingSlash: true,
});
