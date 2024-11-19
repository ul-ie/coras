module.exports = {
  content: [
    './inc/**/*.{html,md,svg,twig,js}',
    './content/**/*.{html,md}'
  ],
  blocklist: [
    'block'
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
        l2: '#2A7050',
        l1: '#186142',
        d1: '#01442B',
        d2: '#013621'
      },
      modern: {
        DEFAULT: '#00B140',
        l2: '#42D260',
        l1: '#2BC150',
        d1: '#02A039',
        d2: '#008F32'
      },
      heritage: {
        DEFAULT: '#003726',
        l2: '#21523F',
        l1: '#114432',
        d1: '#00291C',
        d2: '#001C12'
      },
      shannon: {
        DEFAULT: '#00A3E0',
        l2: '#49C3FF',
        l1: '#2AB3F1',
        d1: '#0193CB',
        d2: '#0083B6'
      },
      sky: {
        DEFAULT: '#007DBA',
        l2: '#379CDB',
        l1: '#228CCA',
        d1: '#016EA4',
        d2: '#016090'
      },
      stone: {
        DEFAULT: '#2D5980',
        l2: '#49769F',
        l1: '#3B678F',
        d1: '#1F4B71',
        d2: '#0F3D62'
      },
      marine: {
        DEFAULT: '#13294B',
        l2: '#2C4368',
        l1: '#1F3659',
        d1: '#071C3D',
        d2: '#001030'
      },
      marigold: {
        DEFAULT: '#FFC72C',
        l2: '#FFE2A1',
        l1: '#FFD572',
        d1: '#EEB701',
        d2: '#DBA800'
      },
      golden: {
        DEFAULT: '#FFA300',
        l2: '#FFC785',
        l1: '#FFB55A',
        d1: '#EA9500',
        d2: '#D68800'
      },
      pumpkin: {
        DEFAULT: '#D45D00',
        l2: '#F77D37',
        l1: '#E56D23',
        d1: '#BE5300',
        d2: '#A94800'
      },
      munster: {
        DEFAULT: '#CB333B',
        l2: '#EF5658',
        l1: '#DD4549',
        d1: '#B91E2D',
        d2: '#A6011F'
      },
      salmon: {
        DEFAULT: '#E31C79',
        l2: '#FF5596',
        l1: '#F53688',
        d1: '#CE006B',
        d2: '#B7005E'
      },
      autumnal: {
        DEFAULT: '#6F263D',
        l2: '#8F4258',
        l1: '#7F344A',
        d1: '#601730',
        d2: '#500724'
      },
      copper: {
        DEFAULT: '#89532F',
        l2: '#A8704C',
        l1: '#99613D',
        d1: '#7A4521',
        d2: '#6A3711'
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
        DEFAULT: {
          css: {
            'code::before' : {
              content: 'none'
            },
            'code::after' : {
              content: 'none'
            }
          }
        },
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
            '--tw-prose-code': theme('colors.granite[d3]'),
            '--tw-prose-pre-code': theme('colors.granite[l3]'),
            '--tw-prose-pre-bg': theme('colors.granite[d3]'),
            '--tw-prose-th-borders': theme('colors.granite[l2]'),
            '--tw-prose-td-borders': theme('colors.granite[l3]'),
            '--tw-prose-invert-body': theme('colors.granite[l2]'),
            '--tw-prose-invert-headings': theme('colors.granite[l3]'),
            '--tw-prose-invert-lead': theme('colors.granite[l1]'),
            '--tw-prose-invert-links': theme('colors.granite[l4]'),
            '--tw-prose-invert-counters': theme('colors.granite[l1]'),
            '--tw-prose-invert-bullets': theme('colors.granite[d1]'),
            '--tw-prose-invert-hr': theme('colors.granite[d2]'),
            '--tw-prose-invert-quotes': theme('colors.granite[l4]'),
            '--tw-prose-invert-quote-borders': theme('colors.granite[d2]'),
            '--tw-prose-invert-captions': theme('colors.granite[l1]'),
            '--tw-prose-invert-pre-code': theme('colors.granite[l2]'),
            '--tw-prose-invert-pre-bg': theme('colors.granite[d4]'),
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
