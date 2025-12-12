const twig = require('twig');
const yaml = require('js-yaml');
const path = require('path');
const fs = require('fs');

module.exports = async function(eleventyConfig) {

  eleventyConfig.addPassthroughCopy({ 'inc/assets/img': '/img' });
  eleventyConfig.addPassthroughCopy({ 'inc/assets/fonts': '/fonts' });
  eleventyConfig.addPassthroughCopy({ 'inc/assets/video': '/video' });

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
          img: './inc/assets/img',
          layouts: './inc/layouts',
          components: './inc/components'
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

  /**
   * An icon function to mirror the Drupal icon API.
   */
  twig.extendFunction('icon', (type, name, settings = { id: '', classes: 'w-5', aria_hidden: false }) => {
    // Map the icon types.
    const iconTypes = {
      line: 'sharp-light',
      social: 'brands',
      solid: 'sharp-solid',
      twotone: 'sharp-duotone-solid'
    }

    // Create the attributes to inject into the SVG.
    const classes = `class="${settings.classes}"`;
    const id = settings.id ? `id="${settings.id}"` : '';
    const ariaHidden = settings.aria_hidden ? 'aria-hidden="true"' : '';
    const svgAttributes = [classes, id, ariaHidden].join(' ');

    // Get the requested file based on name and type.
    const filePath = `inc/assets/icons/${iconTypes[type]}/${name}.svg`;
    const file = path.resolve(__dirname, filePath);

    // Attempt to read the SVG file. Return error otherwise.
    let svg;
    try {
      svg = fs.readFileSync(file, { encoding: 'utf8', flag: 'r' });
    } catch (error) {
      return `<small title="${error}">Icon not found</small>`;
    }

    // Remove the colour defaults, comments and inject the attributes.
    svg = svg.replace(/fill="(.*?)"/gs, '');
    svg = svg.replace(/<!--(.*)-->/s, '');
    svg = svg.replace(/<svg([^>]*)>/, `<svg$1 ${svgAttributes}>`);

    // Return the modified SVG.
    return svg;
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