'use client';

import { useState, useEffect, useRef } from "react";
// https://dev.to/kunalukey/how-to-add-dark-mode-toggle-in-reactjs-tailwindcss-daisyui-1af9

// https://www.freecodecamp.org/news/how-to-build-a-dark-mode-switcher-with-tailwind-css-and-flowbite/


export function ThemeSwitcher() {
  const defaultTheme = "light";
  const themeStateRef = useRef(defaultTheme);
  // use theme from local storage if available or set light theme
  const [theme, setTheme] = useState<string>( defaultTheme );

  // update state on toggle
  const handleToggle = (e: React.ChangeEvent<HTMLInputElement> | null) => {
    const newState = (theme === "light") ? "dark" : "light";
    themeStateRef.current = newState;
    setTheme( newState );
  };

  // set theme state in localstorage on mount & also update localstorage on state change
  useEffect(() => {

    console.log("Loading theme: ", theme);

    if (global?.window !== undefined) {
    // Light is the default theme
    const localTheme = localStorage.getItem("theme") || theme;

    // add custom data-theme attribute to html tag required to update theme using DaisyUI
    document.querySelector("html")?.setAttribute("data-theme", themeStateRef.current);
    // Set the theme as a class on the body
    document.body.className = themeStateRef.current;

    if (localTheme !== theme) {
      setTheme(themeStateRef.current);
    }
      
  }
    
  }, [theme]);

  return (
    <>
        <button className="btn btn-square btn-ghost">
            <label className="swap swap-rotate w-12 h-12">
            <input
                type="checkbox"
                onChange={handleToggle}
                // show toggle image based on localstorage theme
                checked={theme == "dark"}
            />
                <svg
                id="theme-toggle-dark-icon"
                className="w-5 h-5 hidden"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
                >
                <path
                d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"
                ></path>
                </svg>
                <svg
                id="theme-toggle-light-icon"
                className="w-8 h-8 swap-off"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
                >
                <path
                d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                fillRule="evenodd"
                clipRule="evenodd"
                ></path>
                </svg>

            </label>
        </button>
    </>

  );
};
