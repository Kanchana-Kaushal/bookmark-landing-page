import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Logo from "../assets/logo-bookmark.svg?react";

function Navbar() {
  const [isMenuShown, setIsMenuShown] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!menuRef.current) return;

    if (isMenuShown) {
      // make sure it's visible before animating
      menuRef.current.style.display = "block";
      document.body.style.overflow = "hidden";

      gsap.fromTo(
        menuRef.current,
        { x: "-100%", opacity: 0 },
        { x: "0%", opacity: 1, duration: 0.6, ease: "power3.out" },
      );
    } else {
      gsap.to(menuRef.current, {
        x: "-100%",
        opacity: 0,
        duration: 0.3,
        ease: "power3.in",
        onComplete: () => {
          if (menuRef.current) {
            menuRef.current.style.display = "none";
            document.body.style.overflow = "auto"; // hide after animating out
          }
        },
      });
    }

    return () => {
      document.body.style.overflow = "auto"; //cleans up use effect
    };
  }, [isMenuShown]);

  return (
    <nav className="font-rubik mx-auto flex w-8/10 items-center justify-between py-8">
      <Logo
        className={`z-20 fill-current ${isMenuShown && "text-white"}`}
        fill="currentColor"
      />

      {isMenuShown ? (
        <img
          src="/bookmark-landing-page/icon-close.svg"
          className="z-20 cursor-pointer md:hidden"
          onClick={() => setIsMenuShown(false)}
        />
      ) : (
        <img
          src="/bookmark-landing-page/icon-hamburger.svg"
          className="cursor-pointer md:hidden"
          onClick={() => setIsMenuShown(true)}
        />
      )}

      {/* Desktop nav */}
      <div className="hidden items-center gap-8 md:flex">
        <ul className="text-custom-Blue-950 hidden gap-8 uppercase md:flex">
          <li className="hover:text-custom-Red-400 cursor-pointer transition">
            features
          </li>
          <li className="hover:text-custom-Red-400 cursor-pointer transition">
            pricing
          </li>
          <li className="hover:text-custom-Red-400 cursor-pointer transition">
            contact
          </li>
        </ul>

        <button className="bg-custom-Red-400 text-custom-Grey-50 ring-custom-Red-400 hover:text-custom-Red-400 hidden cursor-pointer rounded-sm px-6 py-2 uppercase drop-shadow-lg transition hover:bg-white hover:ring-1 md:flex">
          login
        </button>
      </div>

      {/* Mobile menu: always in DOM, GSAP handles show/hide */}
      <div
        ref={menuRef}
        style={{ display: "none" }}
        className="absolute inset-0 z-10 bg-[#242946]/95 md:hidden"
      >
        <ul className="mx-auto mt-25 w-8/10">
          <li className="border-gray-600 py-4 text-center font-semibold text-gray-300 uppercase odd:border-y-1">
            features
          </li>
          <li className="border-gray-600 py-4 text-center font-semibold text-gray-300 uppercase odd:border-y-1">
            pricing
          </li>
          <li className="border-gray-600 py-4 text-center font-semibold text-gray-300 uppercase odd:border-y-1">
            contact
          </li>
        </ul>

        <button className="mx-auto my-8 block w-8/10 rounded-md py-2 font-semibold text-gray-300 ring-2 ring-gray-300">
          LOGIN
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
