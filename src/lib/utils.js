import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs))
} 


export const isIframe = window.self !== window.top;

export function createPageUrl(pageName) {
  const routes = {
    Home: "/",
    Services: "/servicios", // Asegúrate de que coincida con tus rutas en App.jsx
    Contact: "/contacto",
    Projects: "/proyectos"
  };
  return routes[pageName] || "/";
}
