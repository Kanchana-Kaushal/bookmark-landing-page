import Logo from "../assets/logo-bookmark.svg?react";

function Navbar() {
  return (
    <>
      <nav className="font-rubik mx-auto flex w-8/10 items-center justify-between py-8">
        <Logo className="fill-current text-red-500" />

        <div className="flex items-center gap-8">
          <img src="/icon-hamburger.svg" className="md:hidden" />

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
      </nav>
    </>
  );
}

export default Navbar;
