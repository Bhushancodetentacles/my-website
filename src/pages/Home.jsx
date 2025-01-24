import React from "react";

function Home() {
  return (
    <div>
      <div className="hero">
        <div className="flex items-center justify-center h-full w-[50%] m-auto text-center flex-col text-primary space-y-6">
          <h1 className="text-primary leading-relaxed text-4xl font-light">
            <span className="text-secondary font-bold">Secure returns</span> on{" "}
            <b>stablecoins</b> backed by <b>Real World Assets</b>
          </h1>
          <h3 className="text-xl">Highly Experienced Team</h3>
          <div className="space-x-5">
            <button className="text-primary bg-secondary py-[20px] px-[40px] rounded-[12px] hover:bg-[#1761467A] hover:border-secondary hover:border transition duration-300 text-lg font-navbarfont">
              Launch App
            </button>
            <button className="text-secondary border border-secondary py-[20px] px-[40px] rounded-[12px] group hover:bg-secondary hover:text-primary transition duration-300 text-lg font-navbarfont">
              Explore
            </button>
          </div>
        </div>
      </div>

      {/* ABout Us*/}

      <section className="bg-gradient-to-b from-blue-900 via-purple-900 to-black text-white py-16 px-6 md:px-16 lg:px-32">
        {/* Content Section */}
        <div className="flex flex-wrap justify-between gap-6">
          {/* Left Section */}
          <div className="basis-full md:basis-1/2">
            {/* Title Section */}
            <div className="mb-5">
              <h2 className="text-[37px] font-semibold tracking-wide text-gray-300 ">
                About Us
              </h2>
              <h1 className="text-[68px] font-bold text-white">
                <span className="block">REAL</span>
                <span className="block text-secondary">WORLD</span>
              </h1>
            </div>
            <p className="text-xl text-gray-200 mb-6">
              <span className="text-secondary font-bold font-navbarfont">
                SOIL
              </span>{" "}
              is a fully regulated DeFi protocol ensuring secure returns on
              stablecoins backed by{" "}
              <span className="font-bold text-secondary">
                Real World Assets
              </span>
              .
            </p>
            <button className="border border-secondary text-secondary hover:bg-secondary hover:text-white px-6 py-2 rounded-md transition">
              Meet the team
            </button>
          </div>

          {/* Right Section */}
          <div className="space-y-8 basis-full md:basis-1/4">
            <div className="space-x-4">
              <div className="flex items-end gap-3">
                <span className="text-secondary text-sm font-bold">01.</span>
                <h3 className="text-xl font-semibold text-white">
                  Real-World Asset Backing
                </h3>{" "}
              </div>
              <div>
                <p className="text-gray-300">
                  We stand out by being backed by Real-World Assets, providing
                  stability and a tangible value proposition.
                </p>
              </div>
            </div>
            <div className="space-x-4">
              {" "}
              <div className="flex items-end gap-3">
                <span className="text-secondary text-sm font-bold">02.</span>
                <h3 className="text-xl font-semibold text-white">
                  Regulated Approach
                </h3>{" "}
              </div>
              <div>
                <p className="text-gray-300">
                  Operating within a regulated framework ensures transparency
                  and compliance, bolstering trust in our project.
                </p>
              </div>
            </div>
            <div className="space-x-4">
              {" "}
              <div className="flex items-end gap-3">
                <span className="text-secondary text-sm font-bold">03.</span>
                <h3 className="text-xl font-semibold text-white">
                  Tokenomics Strategy
                </h3>{" "}
              </div>
              <div>
                <p className="text-gray-300">
                  Our tokenomics prioritize sustainable growth, incentivizing
                  users to participate and reinforcing a deflationary model.
                </p>
              </div>
            </div>
            <div className="space-x-4">
              {" "}
              <div className="flex items-end gap-3">
                <span className="text-secondary text-sm font-bold">04.</span>
                <h3 className="text-xl font-semibold text-white">
                  Security and Auditing
                </h3>{" "}
              </div>
              <div>
                <p className="text-gray-300">
                  Our successful security audit reinforces our commitment to
                  maintaining a safe and reliable platform.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
