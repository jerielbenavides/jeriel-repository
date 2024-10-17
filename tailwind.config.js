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
            'prussianBlue': '#0D324D',
            'powder': '#F9F7F3',
            'chocolate': '#561D25',
            'imperialRed': '#F71735',
            'verdigris': '#28AFB0',
            'black':'#020202',
        },
    },
    plugins: [],
};
