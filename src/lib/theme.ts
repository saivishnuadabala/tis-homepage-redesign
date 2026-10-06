export type Theme = "light" | "dark";

export const THEME_STORAGE_KEY = "tis-theme";

/**
 * Runs inline in <head> before first paint so the saved (or system) theme is
 * applied without a flash. Kept as a string because it executes before React.
 */
export const themeInitScript = `(function(){try{var t=localStorage.getItem("${THEME_STORAGE_KEY}");if(t!=="light"&&t!=="dark")t=matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light";document.documentElement.classList.toggle("dark",t==="dark")}catch(e){}})()`;
