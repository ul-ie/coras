const vitePlugin = require('@11ty/eleventy-plugin-vite');
const twig = require('twig');
const yaml = require('js-yaml');
const fs = require('fs');

module.exports = function(eleventyConfig) {

  eleventyConfig.addTemplateFormats('twig');

  eleventyConfig.addExtension('twig', {
    compile: async (inputContent, inputPath) => {
      const template = twig.twig({
        data: inputContent,
        path: `./${inputPath}`,
        namespaces: { components: './inc/components' },
      });
      return async (data) => {
        return template.render(data);
      };
    },
  });

  twig.cache(false);

  twig.extendFunction('getYear', () => {
    let date = new Date();
    return date.getFullYear();
  });

  twig.extendFunction('getFile', (filePath) => {
    return fs.readFileSync(filePath, 'utf8');
  });

  eleventyConfig.addDataExtension('yml', (contents) => {
    return yaml.load(contents);
  });

  eleventyConfig.addPlugin(vitePlugin);

  eleventyConfig.addPassthroughCopy({ 'inc/assets': '/' });

  return {
    markdownTemplateEngine: 'twig',
    htmlTemplateEngine: 'twig',
    templateFormats: [
      'twig',
      'html',
      'md'      
    ],
    dir: {
      input: 'content',
      output: 'dist',
      includes: '../inc',
      data: '../data'
    }
  };
  
};