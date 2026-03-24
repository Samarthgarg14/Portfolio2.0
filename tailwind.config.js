/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                dark: '#000000',
                primary: '#ffffff',
                secondary: '#86868b',
                glass: 'rgba(255, 255, 255, 0.02)',
                'glass-hover': 'rgba(255, 255, 255, 0.05)',
                accent: '#2997ff', // Apple blue for subtle links/accents if needed
            },
            fontFamily: {
                sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
                heading: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'], // Use Inter everywhere for max minimalism
            },
            animation: {
                'spin-slow': 'spin 10s linear infinite',
                'float': 'float 6s ease-in-out infinite',
                'fade-in': 'fadeIn 0.5s ease-out forwards',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-12px)' },
                },
                fadeIn: {
                    '0%': { opacity: '0', transform: 'translateY(10px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                }
            }
        },
    },
    plugins: [],
}
