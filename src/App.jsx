import { useRef, useEffect } from "react";
import { randomBlob } from "./hooks/randomBlob";
function App() {
  const blobRef = useRef(null);

  useEffect(() => {
    const blob = blobRef.current;
    const handleResize = () => {
      randomBlob(blobRef);
    };

    // Randomize the initial position
    randomBlob(blobRef);

    window.addEventListener("resize", handleResize);

    const intervalId = setInterval(() => {
      randomBlob(blobRef);
    }, 4000);

    return () => {
      clearInterval(intervalId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <section className="p-6 dark:text-gray-100 dark:bg-blue-gray-900 duration-100 min-h-screen w-full">
      {/* Blurry background */}
      <div
        ref={blobRef}
        className="blob overflow-x-hidden"
        style={{ filter: "blur(80px)" }}
      ></div>
     
      <div
      ref={blobRef}
      className="blob2 overflow-x-hidden -bottom-20 left-[50%]"
      style={{ filter: "blur(80px)" }}
    ></div>
 {/* Blurry background ends */}
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
