import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";
import Image from "next/image";

const Hero = () => {
	return (
			<section
				className="w-full max-w-[1440px] h-[420px] md:h-[498px] flex-shrink-0 mx-auto relative flex items-center justify-start"
				style={{ fontFamily: 'Inter, Arial, sans-serif' }}
			>
			{/* Background image */}
					<div className="absolute inset-0 w-full h-full z-0">
						<Image
							src="/hero-image.jpg"
							alt="Hero background"
							fill
							className="object-cover object-center"
							priority
							draggable={false}
						/>
					</div>
				{/* Remove dark overlay for white background */}
				<div className="absolute inset-0 z-10" />
			{/* Content */}
					<div className="relative z-20 flex flex-col items-start justify-center h-full px-4 sm:px-8 md:px-20 w-full">
					<h1 className="text-white text-5xl md:text-7xl font-bold leading-tight md:leading-[1.1] mb-8 sm:mb-10 max-w-full sm:max-w-2xl md:max-w-3xl" style={{ fontFamily: 'Inter, Arial, sans-serif' }}>
						Fresh Home-Cooked Meals, Delivered to Your Door
					</h1>
						<div className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full max-w-xs sm:max-w-none">
							<a
								href="#whatsapp"
								className="flex items-center justify-center gap-2 bg-[var(--brown-var,#A87634)] text-white text-base sm:text-lg font-medium px-5 sm:px-7 py-3 rounded-md shadow hover:scale-105 hover:shadow-lg transition-transform duration-200 w-full sm:w-auto"
								style={{ fontFamily: 'Inter, Arial, sans-serif' }}
							>
								<FaWhatsapp className="text-xl sm:text-2xl" /> WhatsApp Community
							</a>
							<a
								href="#contact"
								className="flex items-center justify-center gap-2 bg-white text-black text-base sm:text-lg font-medium px-5 sm:px-7 py-3 rounded-md shadow border border-gray-200 hover:scale-105 hover:shadow-lg transition-transform duration-200 w-full sm:w-auto"
								style={{ fontFamily: 'Inter, Arial, sans-serif' }}
							>
								<FaPhoneAlt className="text-lg sm:text-xl" /> Contact Us
							</a>
						</div>
					</div>
		</section>
	);
};

export default Hero;
