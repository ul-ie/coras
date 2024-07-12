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
        l2: '#11DC54',
        l1: '#01C247',
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
        DEFAULT: '#78716C',
        l5: '#FAFAF9',
        l4: '#F5F5F4',
        l3: '#E7E5E4',
        l2: '#D6D3D1',
        l1: '#A8A29E',
        d1: '#57534E',
        d2: '#44403C',
        d3: '#292524',
        d4: '#1C1917',
        d5: '#0C0A09'
      },
      pebble: {
        DEFAULT: '#737373',
        l5: '#FAFAFA',
        l4: '#F5F5F5',
        l3: '#E5E5E5',
        l2: '#D4D4D4',
        l1: '#A3A3A3',
        d1: '#525252',
        d2: '#404040',
        d3: '#262626',
        d4: '#171717',
        d5: '#0A0A0A'
      },
      granite: {
        DEFAULT: '#71717A',
        l5: '#FAFAFB',
        l4: '#F4F4F5',
        l3: '#E4E4E7',
        l2: '#D4D4D8',
        l1: '#A1A1AA',
        d1: '#52525B',
        d2: '#3F3F46',
        d3: '#27272A',
        d4: '#18181B',
        d5: '#09090B'
      },
      slate: {
        DEFAULT: '#6B7280',
        l5: '#F9FAFB',
        l4: '#F3F4F6',
        l3: '#E5E7EB',
        l2: '#D1D5DB',
        l1: '#9CA3AF',
        d1: '#4B5563',
        d2: '#374151',
        d3: '#1F2937',
        d4: '#111827',
        d5: '#030712'
      },
      white: '#FFF',
      transparent: '#0000'
    },
    extend: { 
      typography: ({ theme }) => ({
        granite: {
          css: {
            '--tw-prose-body': theme('colors.granite[d2]'),
            '--tw-prose-headings': theme('colors.green[DEFAULT]'),
            '--tw-prose-lead': theme('colors.granite[l1]'),
            '--tw-prose-links': theme('colors.green[DEFAULT]'),
            '--tw-prose-bold': theme('colors.granite[d4]'),
            '--tw-prose-counters': theme('colors.granite[DEFAULT]'),
            '--tw-prose-bullets': theme('colors.granite[l2]'),
            '--tw-prose-hr': theme('colors.granite[l3]'),
            '--tw-prose-quotes': theme('colors.granite[d4]'),
            '--tw-prose-quote-borders': theme('colors.granite[l3]'),
            '--tw-prose-captions': theme('colors.granite[DEFAULT]'),
            '--tw-prose-kbd': theme('colors.granite[d4]'),
            '--tw-prose-code': theme('colors.granite[d2]'),
            '--tw-prose-pre-code': theme('colors.granite[l3]'),
            '--tw-prose-pre-bg': theme('colors.granite[d3]'),
            '--tw-prose-th-borders': theme('colors.granite[l2]'),
            '--tw-prose-td-borders': theme('colors.granite[l3]'),
            '--tw-prose-invert-body': theme('colors.granite[l2]'),
            '--tw-prose-invert-headings': theme('colors.granite[l3]'),
            '--tw-prose-invert-lead': theme('colors.granite[l1]'),
            '--tw-prose-invert-counters': theme('colors.granite[l1]'),
            '--tw-prose-invert-bullets': theme('colors.granite[d1]'),
            '--tw-prose-invert-hr': theme('colors.granite[d2]'),
            '--tw-prose-invert-quotes': theme('colors.granite[l4]'),
            '--tw-prose-invert-quote-borders': theme('colors.granite[d2]'),
            '--tw-prose-invert-captions': theme('colors.granite[l1]'),
            '--tw-prose-invert-pre-code': theme('colors.granite[l2]'),
            '--tw-prose-invert-th-borders': theme('colors.granite[d1]'),
            '--tw-prose-invert-td-borders': theme('colors.granite[d2]')
          }
        }
      })
    }
  },
  plugins: [
    require('@tailwindcss/typography')
  ]
}
