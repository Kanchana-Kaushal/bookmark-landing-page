function DownLoadExtension() {
  return (
    <>
      <section className="font-rubik mx-auto mt-25 w-8/10 text-center md:mt-50">
        <h2 className="text-custom-Blue-950 text-2xl font-bold md:text-4xl">
          Download the extension
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-sm text-gray-400 md:text-lg">
          We’ve got more browsers in the pipeline. Please do let us know if
          you’ve got a favourite you’d like us to prioritize.
        </p>

        <div className="my-12 items-center justify-center gap-12 space-y-12 md:my-0 md:flex md:space-y-0">
          <div className="rounded-2xl bg-white shadow-xl md:max-w-xs">
            <div className="p-8">
              <img
                src="/logo-chrome.svg"
                alt="chrome logo"
                className="mx-auto"
              />
              <h3 className="mt-6 text-xl font-semibold">Add to Chrome</h3>
              <p className="text-sm text-gray-400">Minimum version 62</p>
            </div>

            <img src="/bg-dots.svg" className="w-full" />

            <button className="bg-custom-Blue-600 text-custom-Grey-50 ring-custom-Blue-600 hover:text-custom-Blue-600 m-6 cursor-pointer rounded-md px-6 py-3 transition hover:bg-white hover:ring-1">
              Add & Install Extension
            </button>
          </div>

          <div className="rounded-2xl bg-white shadow-xl md:mt-16 md:max-w-xs">
            <div className="p-8">
              <img
                src="/logo-firefox.svg"
                alt="firefox logo"
                className="mx-auto"
              />
              <h3 className="mt-6 text-xl font-semibold">Add to Firefox</h3>
              <p className="text-sm text-gray-400">Minimum version 55</p>
            </div>

            <img src="/bg-dots.svg" className="w-full" />

            <button className="bg-custom-Blue-600 text-custom-Grey-50 ring-custom-Blue-600 hover:text-custom-Blue-600 m-6 cursor-pointer rounded-md px-6 py-3 transition hover:bg-white hover:ring-1">
              Add & Install Extension
            </button>
          </div>

          <div className="rounded-2xl bg-white shadow-xl md:mt-32 md:max-w-xs">
            <div className="p-8">
              <img src="/logo-opera.svg" alt="opera logo" className="mx-auto" />
              <h3 className="mt-6 text-xl font-semibold">Add to Opera</h3>
              <p className="text-sm text-gray-400">Minimum version 46</p>
            </div>

            <img src="/bg-dots.svg" className="w-full" />

            <button className="bg-custom-Blue-600 text-custom-Grey-50 ring-custom-Blue-600 hover:text-custom-Blue-600 m-6 cursor-pointer rounded-md px-6 py-3 transition hover:bg-white hover:ring-1">
              Add & Install Extension
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default DownLoadExtension;
