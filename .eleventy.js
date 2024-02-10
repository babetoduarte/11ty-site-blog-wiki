// Eleventy configuration file
module.exports = function(eleventyConfig) {

  // Use yaml files to define common frontmatter
  eleventyConfig.setFrontMatterParsingOptions({
    "language": "yaml"
  });

  // Add public assets to the website when rendered
  eleventyConfig.addPassthroughCopy({"assets/css/style.css": "/assets/css/style.css"});
  eleventyConfig.addPassthroughCopy({"assets/js/script.js": "/assets/js/script.js"});
  eleventyConfig.addPassthroughCopy({"assets/img/favicon.ico": "/favicon.ico"});

  // Filter dates for nice formatting
  eleventyConfig.addFilter("postDate", require("./_filters/date.js"));

  // Return your Object options:
  return {
    dir: {
      input: ".",
      data: "_data",
      includes: "_includes",
      output: "_site"
    }
  };
};
