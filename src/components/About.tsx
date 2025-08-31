import Image from "next/image";
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaYoutube, FaArrowRight } from "react-icons/fa";

const About = () => {
  return (
    <section id="about" className="w-full flex justify-center py-10 lg:py-16">
  <div className="w-full max-w-[1440px] px-4 sm:px-10 md:px-16 lg:px-20 grid grid-cols-1 md:grid-cols-2 gap-x-3 gap-y-4 md:gap-x-5 md:gap-y-5 lg:gap-x-7 lg:gap-y-7 items-start">
        {/* Row 1: Heading (left) */}
  <h2 className="order-2 md:order-1 text-3xl md:text-4xl font-bold text-[#222] mb-2 lg:mb-0 md:col-start-1">
          About the Cook
        </h2>

        {/* Row 1: Socials (right) */}
        <div className="order-1 md:order-2 flex items-center justify-start md:justify-end gap-4 md:col-start-2">
          <div className="inline-flex items-center gap-2 text-[var(--brown-var,#A87634)] font-semibold tracking-wide text-lg md:text-xl">
            <span className="md:hidden lg:inline">View our Socials</span>
            <span className="hidden md:inline lg:hidden">View Socials</span>
            <FaArrowRight className="translate-y-[1px]" />
          </div>
          <div className="flex items-center gap-4 text-[#222]">
            <a href="#facebook" aria-label="Facebook" className="hover:opacity-80 transition-opacity">
              <FaFacebookF size={20} />
            </a>
            <a href="#linkedin" aria-label="LinkedIn" className="hover:opacity-80 transition-opacity">
              <FaLinkedinIn size={20} />
            </a>
            <a href="#instagram" aria-label="Instagram" className="hover:opacity-80 transition-opacity">
              <FaInstagram size={20} />
            </a>
            <a href="#youtube" aria-label="YouTube" className="hover:opacity-80 transition-opacity">
              <FaYoutube size={22} />
            </a>
          </div>
        </div>

        {/* Row 2: Paragraphs (left) */}
  <div className="order-3 md:order-3 text-[#222] leading-relaxed space-y-4 text-[15px] md:text-base md:col-span-2 lg:col-span-1 lg:col-start-1">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut non dui maximus, dictum lorem eu, ornare lacus. Mauris ut mi ac ex egestas bibendum eu a quam.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus luctus metus eget arcu lacinia, sit amet mattis dolor maximus. Nam blandit ultrices tincidunt.
          </p>
          <p>
            Morbi ullamcorper ac erat feugiat iaculis. Quisque quis dolor dolor. Vestibulum vitae neque vitae elit eleifend rhoncus non eget nunc. Quisque vitae ornare leo.
            Praesent ultrices dui et felis pretium aliquet. Duis sit amet massa metus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
          </p>
        </div>

        {/* Row 2: Image (right) */}
        <div className="order-4 md:order-4 m-0 p-0 leading-none inline-block md:col-span-2 lg:col-span-1 lg:col-start-2 lg:justify-self-end shrink-0 lg:w-[493px] lg:h-[262px] lg:-mt-2">
      <Image
            src="/hygiene_rating.jpg"
            alt="Food hygiene rating: Very Good"
      width={493}
      height={262}
      className="block w-full h-full md:w-full md:h-auto lg:w-full lg:h-full object-contain m-0 p-0"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default About;
