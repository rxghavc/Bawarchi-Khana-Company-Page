"use client"

import React, { useState } from "react";
import { navlinks } from "../data/navlinks";
import Sidebar from "./Sidebar";
const Navbar = () => {
	const [menuOpen, setMenuOpen] = useState(false);
		return (
			<nav className="w-full flex justify-center">
				<div
					className="w-full max-w-[1440px] flex items-center px-4 sm:px-10 md:px-16 lg:px-20 py-7 lg:py-14 h-[90px] lg:h-[164px] box-border gap-0 lg:gap-[358px]"
				>
					{/* Title left */}
					<div className="flex-1 flex items-center">
						<div className="text-[20px] font-medium leading-[150%] text-[var(--brown-var,#A87634)] whitespace-nowrap select-none font-['Edu_NSW_ACT_Cursive',cursive]">
							Bawarchi Khana
						</div>
					</div>
					{/* Hamburger center for md (iPad) and below */}
					<div className="flex-1 flex justify-center lg:hidden">
						<button
							className="flex flex-col justify-center items-center w-10 h-10 focus:outline-none z-50"
							aria-label="Toggle menu"
							onClick={() => setMenuOpen((v) => !v)}
						>
							<span className={`block w-7 h-0.5 bg-[var(--brown-var,#A87634)] transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
							<span className={`block w-7 h-0.5 bg-[var(--brown-var,#A87634)] my-1 transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}></span>
							<span className={`block w-7 h-0.5 bg-[var(--brown-var,#A87634)] transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
						</button>
					</div>
					{/* Contact Us right for md (iPad) only */}
					<div className="flex-1 hidden md:flex lg:hidden justify-end">
						<a
							href="#contact"
							className="bg-[var(--brown-var,#A87634)] text-white px-8 py-3 rounded-lg font-medium text-[1.05rem] font-inter shadow transition-transform duration-200 hover:scale-110 hover:-rotate-1.5 hover:shadow-lg focus:scale-110 focus:-rotate-1.5 focus:shadow-lg inline-block border-0 cursor-pointer"
						>
							Contact Us
						</a>
					</div>
					{/* Desktop nav (lg and up) */}
					<ul
						className="hidden lg:flex items-center gap-[48px] w-[695px] justify-end list-none m-0 p-0"
					>
						{navlinks.map((link) => (
							<li key={link.name}>
								<a
									href={link.href}
									className="relative font-medium text-[1.08rem] text-[#222] font-inter transition-colors duration-200 py-[0.2rem] px-0 hover:text-[var(--brown-var,#A87634)] focus:text-[var(--brown-var,#A87634)] after:content-[''] after:block after:h-0.5 after:w-0 after:bg-[var(--brown-var,#A87634)] after:transition-all after:duration-300 after:rounded after:mt-[3px] hover:after:w-full focus:after:w-full"
								>
									{link.name}
								</a>
							</li>
						))}
						<li>
							<a
								href="#contact"
								className="ml-6 bg-[var(--brown-var,#A87634)] text-white px-8 py-[0.7rem] rounded-lg font-medium text-[1.05rem] font-inter shadow transition-transform duration-200 hover:scale-110 hover:-rotate-1.5 hover:shadow-lg focus:scale-110 focus:-rotate-1.5 focus:shadow-lg inline-block border-0 cursor-pointer"
								style={{marginLeft: 24}}
							>
								Contact Us
							</a>
						</li>
					</ul>
					{/* Sidebar for mobile and iPad */}
					<Sidebar
						open={menuOpen}
						onClose={() => setMenuOpen(false)}
						showContact={window.innerWidth < 768}
					/>
				</div>
			</nav>
		);
};

export default Navbar;
