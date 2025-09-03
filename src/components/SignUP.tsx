import { useRef, useState } from "react";

function SignUp() {
  const [isEmailValid, setIsEmailValid] = useState<boolean>(true);

  const emailInputRef = useRef<HTMLInputElement>(null);

  const onSubmit = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailInputRef.current) {
      const email: string = emailInputRef.current.value;

      if (emailRegex.test(email)) {
        setIsEmailValid(true);
      } else {
        setIsEmailValid(false);
      }
    }
  };

  return (
    <>
      {" "}
      <section className="bg-custom-Blue-600">
        <div className="mx-auto w-8/10 py-16 text-center text-white">
          <p className="text-sm font-semibold tracking-widest uppercase">
            35,000+ already joined
          </p>
          <h2 className="mx-auto my-4 max-w-lg text-2xl font-bold md:text-4xl">
            Stay up-to-date with what we're doing
          </h2>

          <div className="mx-auto max-w-lg items-baseline gap-4 md:flex">
            <div
              className={`${!isEmailValid && "bg-custom-Red-400"} my-4 mt-6 w-full rounded-md p-0.5`}
            >
              <div className="relative">
                <input
                  type="text"
                  className="w-full rounded-sm bg-white p-2.5 text-black outline-none"
                  placeholder="Enter your email address"
                  ref={emailInputRef}
                />

                <img
                  src="/bookmark-landing-page/icon-error.svg"
                  alt="error-icon"
                  className={`${isEmailValid ? "hidden" : "absolute"} top-1/2 right-2.5 -translate-y-1/2`}
                />
              </div>
              {!isEmailValid && (
                <p className="px-3 py-1 text-left text-xs italic">
                  Whoops, make sure it's an email
                </p>
              )}
            </div>

            <button
              className="bg-custom-Red-400 ring-custom-Red-400 hover:text-custom-Red-400 w-full min-w-35 cursor-pointer rounded-md p-2 text-lg font-semibold transition hover:bg-white hover:ring-1 md:w-fit"
              onClick={onSubmit}
            >
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default SignUp;
