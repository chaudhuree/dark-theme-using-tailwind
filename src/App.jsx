import { useState, useEffect } from "react";

function App() {
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
    <section className="p-6 dark:text-gray-100 dark:bg-blue-gray-900 duration-100">
      {/*
      theme toggler button starts
    */}
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
      {/* 
      theme toggler button ends
   */}
      <div className="container mx-auto">
        <h1 className="text-4xl font-extrabold text-center pt-12">
          Dark Theme Toggler with Pure Tailwind css
        </h1>

        <div className="text-xl text-justify mt-20 flex flex-col gap-3">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum
            distinctio, necessitatibus quibusdam cum fugiat illum suscipit
            assumenda provident quae, quas asperiores voluptas atque non et rem
            magni quam ab, minima eius. Ad error facilis dolores dolore
            repudiandae minus natus omnis, illo assumenda nulla, temporibus
            atque et accusamus totam? Asperiores, quae.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis maxime
            quaerat voluptatum rerum culpa sapiente perferendis blanditiis
            aliquid nobis, architecto ipsa distinctio animi ipsam voluptate
            saepe facere porro nam obcaecati!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad rem
            eligendi, quasi minus tempore iure tenetur quibusdam pariatur,
            obcaecati magni inventore voluptatem, libero quisquam porro suscipit
            architecto nihil. Reiciendis dolor voluptatum deleniti vitae cumque
            repellat accusantium beatae, ipsam maiores tenetur!
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum
            distinctio, necessitatibus quibusdam cum fugiat illum suscipit
            assumenda provident quae, quas asperiores voluptas atque non et rem
            magni quam ab, minima eius. Ad error facilis dolores dolore
            repudiandae minus natus omnis, illo assumenda nulla, temporibus
            atque et accusamus totam? Asperiores, quae.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis maxime
            quaerat voluptatum rerum culpa sapiente perferendis blanditiis
            aliquid nobis, architecto ipsa distinctio animi ipsam voluptate
            saepe facere porro nam obcaecati!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad rem
            eligendi, quasi minus tempore iure tenetur quibusdam pariatur,
            obcaecati magni inventore voluptatem, libero quisquam porro suscipit
            architecto nihil. Reiciendis dolor voluptatum deleniti vitae cumque
            repellat accusantium beatae, ipsam maiores tenetur!
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum
            distinctio, necessitatibus quibusdam cum fugiat illum suscipit
            assumenda provident quae, quas asperiores voluptas atque non et rem
            magni quam ab, minima eius. Ad error facilis dolores dolore
            repudiandae minus natus omnis, illo assumenda nulla, temporibus
            atque et accusamus totam? Asperiores, quae.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis maxime
            quaerat voluptatum rerum culpa sapiente perferendis blanditiis
            aliquid nobis, architecto ipsa distinctio animi ipsam voluptate
            saepe facere porro nam obcaecati!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad rem
            eligendi, quasi minus tempore iure tenetur quibusdam pariatur,
            obcaecati magni inventore voluptatem, libero quisquam porro suscipit
            architecto nihil. Reiciendis dolor voluptatum deleniti vitae cumque
            repellat accusantium beatae, ipsam maiores tenetur!
          </p>
        </div>
      </div>
    </section>
  );
}

export default App;
