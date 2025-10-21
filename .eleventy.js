const twig = require('twig');
const yaml = require('js-yaml');
const path = require('path');
const fs = require('fs');

module.exports = async function(eleventyConfig) {

  eleventyConfig.addPassthroughCopy({ 'inc/img': '/img' });
  eleventyConfig.addPassthroughCopy({ 'inc/fonts': '/fonts' });
  eleventyConfig.addPassthroughCopy({ 'inc/js': '/js' });
  eleventyConfig.addPassthroughCopy({ 'inc/video': '/video' });

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
          img: './inc/img',
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
    const date = new Date();
    return date.getFullYear();
  });

  twig.extendFunction('get_file', (filePath) => {
    return fs.readFileSync(path.resolve(__dirname, filePath), 'utf8');
  });

  twig.extendFunction('get_object_key', (obj, key) => {
    return Object.keys(obj)[key];
  });

  twig.extendFunction('get_yml', (filePath) => {
    const file = fs.readFileSync(path.resolve(__dirname, filePath), 'utf8');
    return yaml.load(file);
  });

  twig.extendFunction('json_decode', (json) => {
    return JSON.parse(json);
  });

  twig.extendFunction('sort_object', (unsorted) => {
    const sortedArr = Object.keys(unsorted).sort();
    const sortedObj = sortedArr.reduce((object, key) => { 
      object[key] = unsorted[key]; 
      return object;
    }, {});
    return sortedObj;
  });

  twig.extendFunction('html', (str) => {
    const formattedCode = str.replace(/[&<>"']/g, ($0) => {
      const chars = { "&":"amp", "<":"lt", ">":"gt", '"':"quot", "'":"#39" }[$0];
      return `&${chars};`;
    });
    return formattedCode.trim();
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