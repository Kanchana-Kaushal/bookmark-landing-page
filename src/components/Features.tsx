import { useState } from "react";

function Features() {
  const [selectedFeatureIndex, setSelectedFeatureIndex] = useState<number>(0);

  const featureData = [
    {
      title: "Bookmark in one click",
      description:
        "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.",
      image: "/illustration-features-tab-1.svg",
    },
    {
      title: "Intelligent search",
      description:
        "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.",
      image: "/illustration-features-tab-2.svg",
    },
    {
      title: "Share your bookmarks",
      description:
        "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.",
      image: "/illustration-features-tab-3.svg",
    },
  ];

  return (
    <>
      <section className="font-rubik my-20 md:my-25">
        <article className="mx-auto mb-16 w-8/10 space-y-4 text-center">
          <h2 className="text-2xl font-semibold md:text-4xl">Features</h2>

          <p className="mx-auto max-w-xl text-sm text-gray-400 md:text-lg">
            Our aim is to make it quick and easy for you to access your
            favourite websites. Your bookmarks sync between your devices so you
            can access them on the go.
          </p>

          <div className="mx-auto items-center gap-20 border-gray-100 md:flex md:w-fit md:border-b-2">
            {["Simple Bookmarking", "Speedy Searching", "Easy Sharing"].map(
              (feature: string, index) => (
                <div
                  className={`text-custom-Blue-950 border-t-2 border-gray-100 last:border-b-2 md:border-0 md:last:border-0`}
                >
                  <p
                    className={`border-custom-Red-400 hover:text-custom-Red-400 mx-auto w-fit py-3 transition ${selectedFeatureIndex === index ? "border-b-4 text-black" : "text-gray-400"} cursor-pointer md:p-5 md:text-lg`}
                    onClick={() => {
                      setSelectedFeatureIndex(index);
                    }}
                  >
                    {feature}
                  </p>
                </div>
              ),
            )}
          </div>
        </article>

        <article className="text-center md:flex">
          <div className="relative mb-18 flex-1/2 sm:mb-30 md:mb-0">
            <img
              src={featureData[selectedFeatureIndex].image}
              alt={featureData[selectedFeatureIndex].title + " image"}
              className="mx-auto h-full w-8/10 md:mx-0 md:ml-auto"
            />
            <div className="bg-custom-Blue-600 absolute top-2/10 left-0 -z-50 h-full max-h-[550px] w-10/12 rounded-r-full" />
          </div>

          <div className="mx-auto w-8/10 flex-1/2 items-center md:flex md:text-left">
            <div className="mx-auto space-y-4 md:w-8/10 md:max-w-md md:space-y-6">
              <h3 className="text-custom-Blue-950 text-2xl font-semibold md:text-4xl">
                {featureData[selectedFeatureIndex].title}
              </h3>

              <p className="text-sm text-gray-400 md:text-lg">
                {featureData[selectedFeatureIndex].description}
              </p>

              <button className="bg-custom-Blue-600 text-custom-Grey-50 cursor-pointer rounded-md px-6 py-2 md:text-lg">
                More Info
              </button>
            </div>
          </div>
        </article>
      </section>
    </>
  );
}

export default Features;

/* Our aim is to make it quick and easy for you to access your favourite websites. 
  Your bookmarks sync between your devices so you can access them on the go.

  Simple Bookmarking
  Speedy Searching
  Easy Sharing

  Bookmark in one click

  Organize your bookmarks however you like. Our simple drag-and-drop interface 
  gives you complete control over how you manage your favourite sites.

  More Info

  Intelligent search

  Our powerful search feature will help you find saved sites in no time at all. 
  No need to trawl through all of your bookmarks.

  More Info

  Share your bookmarks

  Easily share your bookmarks and collections with others. Create a shareable 
  link that you can send at the click of a button.

  More Info
 */
