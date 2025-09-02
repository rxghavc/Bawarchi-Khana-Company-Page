"use client";
import { FaYoutube, FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
	const scrollToTop = () => {
		if (typeof window !== "undefined") {
			window.scrollTo({ top: 0, behavior: "smooth" });
		}
	};

	return (
		<footer className="w-full flex justify-center border-t border-black/10 mt-10">
			<div className="w-full max-w-[1440px] px-4 sm:px-10 md:px-16 lg:px-20 py-8 flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-4">
				{/* Left: Brand + small print */}
			<div className="flex-1 w-full md:w-auto text-center md:text-left">
					<div className="text-[22px] md:text-[24px] leading-[150%] text-[var(--brown-var,#A87634)] whitespace-nowrap select-none font-['Edu_NSW_ACT_Cursive',cursive]">
						Bawarchi Khana
					</div>
					<div className="mt-1 text-sm text-gray-600">
						<div>All rights reserved.</div>
						<div>©{new Date().getFullYear()} Bawarchi Khana</div>
					</div>
				</div>

				{/* Middle: Back to Top link style */}
				<div className="flex-1 w-full md:w-auto flex justify-center">
					<button
						onClick={scrollToTop}
						className="text-[#222] text-sm md:text-base hover:text-[var(--brown-var,#A87634)] transition flex items-center gap-1"
						aria-label="Back to top"
					>
						Back to Top <span aria-hidden>↑</span>
					</button>
				</div>

				{/* Right: Social icons */}
				<div className="flex-1 w-full md:w-auto flex justify-center md:justify-end gap-4">
					<a
						href="#youtube"
						aria-label="YouTube"
						className="text-gray-500 hover:text-[var(--brown-var,#A87634)] transition inline-flex"
					>
						<FaYoutube size={20} />
					</a>
					<a
						href="https://www.instagram.com/bawarchi.khana65?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
						aria-label="Instagram"
						className="text-gray-500 hover:text-[var(--brown-var,#A87634)] transition inline-flex"
					>
						<FaInstagram size={20} />
					</a>
					<a
						href="https://chat.whatsapp.com/FZjAdvHCQ5aKOy4J0A2L5r"
						aria-label="WhatsApp"
						className="text-gray-500 hover:text-[var(--brown-var,#A87634)] transition inline-flex"
					>
						<FaWhatsapp size={20} />
					</a>
				</div>
			</div>
		</footer>
	);
}
