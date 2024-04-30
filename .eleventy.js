const navigationPlugin = require('@11ty/eleventy-navigation');
const vitePlugin = require('@11ty/eleventy-plugin-vite');

module.exports = function(eleventyConfig) {

  eleventyConfig.addPlugin(navigationPlugin);
  eleventyConfig.addPlugin(vitePlugin);

  eleventyConfig.addPassthroughCopy({ 'inc/assets': '/' });

  eleventyConfig.addShortcode('getYear', function() {
    let date = new Date();
    return date.getFullYear();
  });

  return {
    templateFormats: [
      'html',
      'md'
    ],
    dir: { 
      input: 'content',
      output: 'dist',
      includes: '../inc'
    }
  };
  
};