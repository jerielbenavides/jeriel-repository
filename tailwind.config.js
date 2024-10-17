import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./resources/**/*.blade.php",
        "./resources/js/Pages/Pages/Components/*.{js,jsx,ts,tsx}",
        "./resources/js/Pages/Pages/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
            },
        },
        colors: {
            transparent: 'transparent',
            current: 'currentColor',
            'deepOcean': '#003135',
            'white': '#C1CFDA',
            'paleSkyBlue': '#AFDDE5',
            'Rosewood': '#3a0104',
            'forrestTeal': '#024950',
            'tropicalCyan': '#0fa4af',
            'black':'#020202',
        },

    },
    plugins: [],
};
