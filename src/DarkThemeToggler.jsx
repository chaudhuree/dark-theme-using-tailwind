import { useState, useEffect } from "react";
export default function DarkThemeToggler() {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "system"
  );
  const element = document.documentElement;
  const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");
  const options = [
    {
      icon: "sunny",
      text: "light",
    },
    {
      icon: "moon",
      text: "dark",
    },
    {
      icon: "desktop-outline",
      text: "system",
    },
  ];
  const onWindowMatch = () => {
    if (
      localStorage.getItem("theme") === "dark" ||
      (!("theme" in localStorage) && darkQuery.matches)
    ) {
      element.classList.add("dark");
    } else {
      element.classList.remove("dark");
    }
  };
  onWindowMatch();
  useEffect(() => {
    switch (theme) {
      case "dark":
        element.classList.add("dark");
        localStorage.setItem("theme", "dark");
        break;
      case "light":
        element.classList.remove("dark");
        localStorage.setItem("theme", "light");
        break;
      default:
        onWindowMatch();
        localStorage.removeItem("theme");
        break;
    }
  }, [theme]);

  darkQuery.addEventListener("change", (e) => {
    if (!("theme" in localStorage)) {
      if (e.matches) {
        element.classList.add("dark");
      } else {
        element.classList.remove("dark");
      }
    }
  });
  return (
    <div className=" fixed top-5 right-10 duration-100 dark:bg-gray-700 bg-[#F3F5F7] rounded">
      {options.map((opt) => (
        <button
          key={opt.text}
          onClick={() => setTheme(opt.text)}
          className={`size-8 leading-9 text-xl rounded-full m-1  ${
            theme === opt.text && "text-cyan-300"
          }`}
        >
          <ion-icon name={opt.icon}></ion-icon>
        </button>
      ))}
    </div>
  );
}
