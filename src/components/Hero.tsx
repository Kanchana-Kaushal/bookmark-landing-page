function Hero() {
  return (
    <>
      <section className="font-rubik relative mt-8 flex-row-reverse items-center justify-between md:flex">
        <div className="relative md:w-1/2">
          <img
            src="/illustration-hero.svg"
            alt=""
            className="mx-auto w-9/10 md:mx-0"
          />
          <div className="bg-custom-Blue-600 absolute top-3/12 right-0 -z-50 min-h-8/10 w-8/10 rounded-l-full" />
        </div>

        <article className="mt-12 items-center justify-center md:mt-0 md:flex md:w-1/2">
          <div className="mx-auto w-8/10 space-y-6 text-center md:max-w-md md:space-y-8 md:text-left">
            <h1 className="text-custom-Blue-950 text-2xl font-semibold md:text-5xl">
              A simple Bookmark Manager
            </h1>

            <p className="text-sm text-gray-400 md:text-lg">
              A clean and simple interface to organize your favourite websites.
              Open a new browser tab and see your sites load instantly. Try it
              for free.
            </p>

            <div className="flex items-center justify-center gap-4 text-xs md:justify-start md:text-base">
              <button className="bg-custom-Blue-600 text-custom-Grey-50 ring-custom-Blue-600 hover:text-custom-Blue-600 drop-shadow-custom-Blue-600 cursor-pointer rounded-md px-3 py-3 drop-shadow-sm transition hover:bg-white hover:ring-1">
                Get it on Chrome
              </button>
              <button className="bg-custom-Grey-50 cursor-pointer rounded-md px-3 py-3 text-gray-600 shadow-md ring-gray-600 transition hover:bg-white hover:ring-1">
                Get it on Firefox
              </button>
            </div>
          </div>
        </article>
      </section>
    </>
  );
}

export default Hero;
