/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors:{
        jt1:{
          gray1:"#1f1d2b",
          gray2:"#262837",
          gray3:"#5d6c7e",
          green1:"#008c9e",
          modalBg1:"rgba(0,0,0,.85)"
        },
        cs_purple1:"rgba(99,102,241, .8)",
        cs_gray1:'#161616',
        cs_orange1:'#dd8903',
        cs_tr1:'#252323d9',
        cs_alert1:'#f59d9d',
        t1:{
          "gray-100":"#343838",
          "blue-100":"#00DFFC",
          "blue-200":"#00B4CC",
          "blue-300":"#008C9E",
          "blue-400":"#005F6B",
          "red-100":"#f92f60",
          "red-200":"#f04141",
        }
      },
      // padding:{
      //   headerH:16,
      //   sideNavWB:200,
      //   sideNavWL:80,
      // }
    },
  },
  plugins: [],
}
