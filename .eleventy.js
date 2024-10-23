const vite = require('@11ty/eleventy-plugin-vite');
const twig = require('twig');
const yaml = require('js-yaml');
const path = require('path');
const fs = require('fs');

module.exports = function(eleventyConfig) {

  eleventyConfig.addPlugin(vite);

  eleventyConfig.addPassthroughCopy({ 'inc/assets': '/' });

  eleventyConfig.addDataExtension('yml', (contents) => {
    return yaml.load(contents);
  });

  eleventyConfig.addTemplateFormats('twig');

  eleventyConfig.addExtension('twig', {
    compile: async (inputContent, inputPath) => {
      const template = twig.twig({
        data: inputContent,
        path: `./${inputPath}`,
        namespaces: {
          assets: './inc/assets',
          templates: './inc/templates',
          components: './inc/components',
          icons: './node_modules/@awesome.me/kit-0dc973fac8/icons'
        },
      });
      return async (data) => {
        return template.render(data);
      };
    },
  });

  twig.cache(false);

  twig.extendFunction('get_year', () => {
    let date = new Date();
    return date.getFullYear();
  });

  twig.extendFunction('get_file', (filePath) => {
    return fs.readFileSync(path.resolve(__dirname, filePath), 'utf8');
  });

  twig.extendFunction('get_object_key', (obj, key) => {
    return Object.keys(obj)[key];
  });

  twig.extendFunction('get_yml', (filePath) => {
    let file = fs.readFileSync(path.resolve(__dirname, filePath), 'utf8');
    return yaml.load(file);
  });

  twig.extendFunction('json_decode', (json) => {
    return JSON.parse(json);
  });

  twig.extendFunction('html', (str) => {
    return str.replace(/[&<>"']/g, ($0) => {
      let chars = { "&":"amp", "<":"lt", ">":"gt", '"':"quot", "'":"#39" }[$0];
      return `&${chars};`;
    });
  });

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