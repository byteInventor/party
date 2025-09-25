import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";

const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);

const AboutSectionOne = () => {
  const List = ({ text }) => (
    <p className="text-body-color mb-5 flex items-center text-lg font-medium">
      <span className="bg-primary/10 text-primary mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md">
        {checkIcon}
      </span>
      {text}
    </p>
  );

  return (
    <section id="about" className="pt-26 md:pt-20 lg:pt-38">
      <div className="container">
        <div className="border-body-color/[.15] border-b pb-16 md:pb-20 lg:pb-28 dark:border-white/[.15]">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2">
              <SectionTitle
                title="Echo Farm School:"
                paragraph=" Echoing Nature's Wisdom in Moinabad, Ranga Reddy Dist. Founded to teach children sustainable farming and joyful health habits on our lush 5-acre paradise."
                mb="4px"
              />
              <p className="text-body-color text-base leading-relaxed! md:text-lg">
                {
                  "From 75 exotic fruits to a buzzing pet zoo with Kadaknath birds and rabbits, we've crafted a safe, immersive world. Explore our agro museum, biogas wonders, and solar innovations – all QR-coded for instant learning!"
                }
              </p>
              <div
                className="mt-8 mb-12 max-w-[570px] lg:mb-0"
                data-wow-delay=".15s"
              >
                <h2 className="mb-4 text-3xl leading-tight! font-bold text-black sm:text-4xl md:text-[45px] dark:text-white">
                  {"Facilities"}
                </h2>
                <div className="mx-[-12px] flex flex-wrap">
                  <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                    <List text="14 Cozy Bedrooms" />
                    <List text="40-Seater Theatre" />
                    <List text="Box Cricket Pitch" />
                  </div>

                  <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                    <List text="Half-Acre Paddies" />
                    <List text="Animal Meadows" />
                    {/* <List text="Developer friendly" /> */}
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full px-4 lg:w-1/2">
              <div className="relative mx-auto aspect-25/24 max-w-[600px] lg:mr-0">
                <Image
                  src="/images/about/about-image.jpeg"
                  alt="about-image"
                  fill
                  className="drop-shadow-three mx-auto max-w-full lg:mr-0 dark:hidden dark:drop-shadow-none"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionOne;
