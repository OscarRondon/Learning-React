* Session #1: [Projects: 01]
    - Create Project
    - useState 

* Sesion #2: [Projects: 02]
    - components

* Session #3 [Pojects: 03, 04]
    - useEffect
    - customHooks 

* Sesion #4 [Pojects: 05]
    - useRef
    - useMemo
    - useCallback
    - debounce
        .- Dependencies
            > npm install just-debounce-it
            
* Sesion #5 [Projects: 06]
    - sueId
    - useContext
    - useReduce

* Sesion #6 [Projects: 07]
    - lazy loading
    - React Router (own hand made)
    - pat-to-regexp [npm install path-to-regexp -E]
    - publish package as npm package
	
* Sesion #7 [Projects: 08] -> TODO App
	- React + TypeScript

* Sesion #8 [Projects: 08] -> Google translate clone
	- React + TypeScript
    - React Bootstrap [npm install react-bootstrap bootstrap -E]
    - OpenIA [npm install openai -E]
    - testing React test [npm install vitest happy-dom @testing-library/react @testing-library/user-event]
    - own made debounce
    
* Session #9 [Project: 09] -> Crud (redux, tremor, react, ts, rome)
    - tremor (componets for charts and tables) [https://www.tremor.so/]
	- npm add @tremor/react -E <-- Needs tailwind to work
    - tailwind (css styles)	
        - npm add -D tailwindcss postcss autoprefixer
        - npx tailwindcss init -p
        - Modify tailwind.config.js
            /** @type {import('tailwindcss').Config} */
            export default {
                content: [
                    "./index.html",
                    "./src/**/*.{js,ts,jsx,tsx}",
                    "./node_modules/@tremor/**/*.{js,ts,jsx,tsx}",
                ],
                theme: {
                    extend: {},
                },
                plugins: [],
            }
        - Modify file inde.css, delete all content and paste:
            @tailwind base;
            @tailwind components;
            @tailwind utilities;
            
    - Redux toolkit [https://redux-toolkit.js.org/]
        - npm install @reduxjs/toolkit react-redux -E
        - create store
        - create slice
        - create middlewares
        - create custom hook for slice
    - Sonner [Notifications:https://sonner.emilkowal.ski/] <An opinionated toast component for React>
        - npm install sonner
        
* Session #10 [Project: 10] (React Query)
    - TanStack Query (before know as reactQuery) [https://tanstack.com/query/latest]
        . npm install @tanstack/react-query -E
        . npm install @tanstack/react-query-devtools -D

* Session #11 [Project 11] (Zustand)
    - Material UI [https://mui.com/]
    - Zustand [https://docs.pmnd.rs/zustand/getting-started/introduction]
    - React Syntax Highlighter [https://github.com/react-syntax-highlighter/react-syntax-highlighter]
    -Redux DevTools