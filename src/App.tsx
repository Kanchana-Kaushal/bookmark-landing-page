import DownLoadExtension from "./components/Download";
import FAQ from "./components/FAQ";
import Features from "./components/Features";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import SignUp from "./components/SignUP";

import BookMarkLogo from "./assets/logo-bookmark.svg?react";
import FaceBookLogo from "./assets/icon-facebook.svg?react";
import TwitterLogo from "./assets/icon-twitter.svg?react";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <DownLoadExtension />
      <FAQ />
      <SignUp />

      <footer className="bg-[#242946]">
        <div className="mx-auto w-8/10 items-center justify-between p-8 text-center text-gray-300 md:flex">
          <ul className="gap-12 space-y-4 uppercase md:flex md:space-y-0">
            <li>
              <BookMarkLogo className="text-custom-Grey-50 mx-auto mb-8 fill-current md:mb-0" />
            </li>
            <li className="hover:text-custom-Red-400 cursor-pointer">
              Features
            </li>
            <li className="hover:text-custom-Red-400 cursor-pointer">
              Pricing
            </li>
            <li className="hover:text-custom-Red-400 cursor-pointer">
              Contact
            </li>
          </ul>

          <div className="flex items-center justify-center gap-8 fill-current pt-8 text-gray-300 md:pt-0">
            <FaceBookLogo className="hover:text-custom-Red-400 cursor-pointer" />
            <TwitterLogo className="hover:text-custom-Red-400 cursor-pointer" />
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
