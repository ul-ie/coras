module.exports = {
  content: [
    './inc/**/*.{html,md,svg,twig,js}',
    './content/**/*.{html,md}'
  ],
  darkMode: 'selector',
  theme: {
    container: {
      center: true,
    },
    fontFamily: {
      'sans': 'Inter, Helvetica, ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
      'serif': 'Saol, "Cormorant Garamond", ui-serif, Georgia, Cambria, "Times New Roman", Times, serif',
      'mono': 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
      'display': '"Formula Condensed", "Roboto Condensed"'
    },
    colors: {
      green: {
        DEFAULT: '#005335',
        l2: '#00CC81',
        l1: '#008F5A',
        d1: '#003824',
        d2: '#001910'
      },
      modern: {
        DEFAULT: '#00B140',
        l2: '#11dc54',
        l1: '#01c247',
        d1: '#029033',
        d2: '#027829'
      },
      heritage: {
        DEFAULT: '#003726',
        l2: '#00A873',
        l1: '#00704D',
        d1: '#001911',
        d2: '#000A07'
      },
      shannon: {
        DEFAULT: '#00A3E0',
        l2: '#52D1FF',
        l1: '#1AC2FF',
        d1: '#0083B3',
        d2: '#006185'
      },
      sky: {
        DEFAULT: '#007DBA',
        l2: '#3DBEFF',
        l1: '#00A7FA',
        d1: '#006394',
        d2: '#004B70'
      },
      stone: {
        DEFAULT: '#2D5980',
        l2: '#4E8BC1',
        l1: '#3971A2',
        d1: '#1E3D57',
        d2: '#0F1D2A'
      },
      marine: {
        DEFAULT: '#13294B',
        l2: '#28589F',
        l1: '#1E4176',
        d1: '#091425',
        d2: '#050B14'
      },
      marigold: {
        DEFAULT: '#FFC72C',
        l2: '#FFDD80',
        l1: '#FFD257',
        d1: '#F0B000',
        d2: '#B38300'
      },
      golden: {
        DEFAULT: '#FFA300',
        l2: '#FFC766',
        l1: '#FFB433',
        d1: '#CC8100',
        d2: '#996100'
      },
      pumpkin: {
        DEFAULT: '#D45D00',
        l2: '#FF8E38',
        l1: '#FF7105',
        d1: '#9E4500',
        d2: '#6B2E00'
      },
      munster: {
        DEFAULT: '#CB333B',
        l2: '#DD797E',
        l1: '#D4545A',
        d1: '#97262C',
        d2: '#661A1D'
      },
      salmon: {
        DEFAULT: '#E31C79',
        l2: '#EC69A6',
        l1: '#E7408E',
        d1: '#AC155C',
        d2: '#710E3C'
      },
      autumnal: {
        DEFAULT: '#6F263D',
        l2: '#BA4067',
        l1: '#943352',
        d1: '#481928',
        d2: '#260D15'
      },
      copper: {
        DEFAULT: '#89532F',
        l2: '#C37E50',
        l1: '#AB683B',
        d1: '#5B371F',
        d2: '#2E1C10'
      },
      limestone: {
        DEFAULT: '#919D9D',
        l6: '#F7F8F8',
        l5: '#ECEEEE',
        l4: '#D9DDDD',
        l3: '#C9CFCF',
        l2: '#B6BEBE',
        l1: '#A3ADAD',
        d1: '#6A7777',
        d2: '#485151',
        d3: '#242828',
        d4: '#111313'
      },
      pebble: {
        DEFAULT: '#707372',
        l6: '#F2F2F2',
        l5: '#E8E8E8',
        l4: '#D1D2D1',
        l3: '#B7B9B8',
        l2: '#9FA2A1',
        l1: '#888B8A',
        d1: '#535555',
        d2: '#373938',
        d3: '#1C1C1C',
        d4: '#0F0F0F'
      },
      granite: {
        DEFAULT: '#505759',
        l6: '#EFF0F1',
        l5: '#E1E4E4',
        l4: '#C4C9CA',
        l3: '#A6ADAF',
        l2: '#869092',
        l1: '#6A7476',
        d1: '#3C4243',
        d2: '#292D2E',
        d3: '#131515',
        d4: '#0A0B0B'
      },
      slate: {
        DEFAULT: '#373A36',
        l6: '#EFF0EF',
        l5: '#DDDFDD',
        l4: '#BCBFBA',
        l3: '#9A9F98',
        l2: '#787F76',
        l1: '#585C56',
        d1: '#2B2D2A',
        d2: '#1C1D1B',
        d3: '#0F100F',
        d4: '#080807'
      },
      white: '#FFF',
      transparent: '#0000'
    },
    extend: { 
      typography: ({ theme }) => ({
        slate: {
          css: {
            '--tw-prose-body': theme('colors.slate[d2]'),
            '--tw-prose-headings': theme('colors.slate[d3]'),
            '--tw-prose-lead': theme('colors.slate[d1]'),
            '--tw-prose-links': theme('colors.slate[d3]'),
            '--tw-prose-bold': theme('colors.slate[d3]'),
            '--tw-prose-counters': theme('colors.slate[DEFAULT]'),
            '--tw-prose-bullets': theme('colors.slate[l2]'),
            '--tw-prose-hr': theme('colors.slate[l3]'),
            '--tw-prose-quotes': theme('colors.slate[d3]'),
            '--tw-prose-quote-borders': theme('colors.slate[l3]'),
            '--tw-prose-captions': theme('colors.slate[d1]'),
            '--tw-prose-code': theme('colors.slate[d3]'),
            '--tw-prose-pre-code': theme('colors.slate[l5]'),
            '--tw-prose-pre-bg': theme('colors.slate[d3]'),
            '--tw-prose-th-borders': theme('colors.slate[l3]'),
            '--tw-prose-td-borders': theme('colors.slate[l4]'),
            '--tw-prose-invert-body': theme('colors.slate[l4]'),
            '--tw-prose-invert-headings': theme('colors.white'),
            '--tw-prose-invert-lead': theme('colors.slate[l3]'),
            '--tw-prose-invert-links': theme('colors.white'),
            '--tw-prose-invert-bold': theme('colors.white'),
            '--tw-prose-invert-counters': theme('colors.slate[l2]'),
            '--tw-prose-invert-bullets': theme('colors.slate[DEFAULT]'),
            '--tw-prose-invert-hr': theme('colors.slate[d1]'),
            '--tw-prose-invert-quotes': theme('colors.slate[l5]'),
            '--tw-prose-invert-quote-borders': theme('colors.slate[d1]'),
            '--tw-prose-invert-captions': theme('colors.slate[l2]'),
            '--tw-prose-invert-code': theme('colors.white'),
            '--tw-prose-invert-pre-code': theme('colors.slate[l3]'),
            '--tw-prose-invert-pre-bg': 'rgb(0 0 0 / 50%)',
            '--tw-prose-invert-th-borders': theme('colors.slate[DEFAULT]'),
            '--tw-prose-invert-td-borders': theme('colors.slate[d1]'),
          },
        },
      })
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ]
}
