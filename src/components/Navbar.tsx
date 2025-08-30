"use client"

import React, { useState } from "react";
import { navlinks } from "../data/navlinks";
const Navbar = () => {
	const [menuOpen, setMenuOpen] = useState(false);
	return (
		<nav className="w-full flex justify-center">
			<div
				className="w-full max-w-[1440px] flex items-center justify-between md:justify-center px-[5vw] md:px-20 py-7 md:py-14 h-[90px] md:h-[164px] box-border gap-0 md:gap-[358px]"
			>
				{/* Title */}
				<div className="text-[20px] font-medium leading-[150%] text-[var(--brown-var,#A87634)] font-[\'Edu NSW ACT Cursive\',cursive] whitespace-nowrap select-none md:mr-0">
					Bawarchi Khana
				</div>
				{/* Hamburger for mobile */}
				<button
					className="md:hidden flex flex-col justify-center items-center w-10 h-10 focus:outline-none z-50"
					aria-label="Toggle menu"
					onClick={() => setMenuOpen((v) => !v)}
				>
					<span className={`block w-7 h-0.5 bg-[var(--brown-var,#A87634)] transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
					<span className={`block w-7 h-0.5 bg-[var(--brown-var,#A87634)] my-1 transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}></span>
					<span className={`block w-7 h-0.5 bg-[var(--brown-var,#A87634)] transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
				</button>
				{/* Desktop nav */}
				<ul
					className="hidden md:flex items-center gap-[48px] w-[695px] justify-end list-none m-0 p-0"
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
				{/* Mobile menu overlay */}
				{menuOpen && (
					<div className="fixed inset-0 z-40 bg-black/40 md:hidden" onClick={() => setMenuOpen(false)}></div>
				)}
				{/* Mobile menu */}
				<ul
					className={`fixed top-0 right-0 z-50 h-full w-64 bg-white shadow-lg flex flex-col items-start pt-24 px-8 gap-8 transition-transform duration-300 md:hidden ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}
				>
					{navlinks.map((link) => (
						<li key={link.name} className="w-full">
							<a
								href={link.href}
								className="block w-full py-2 text-lg font-medium text-[#222] font-inter border-b border-gray-100 hover:text-[var(--brown-var,#A87634)] focus:text-[var(--brown-var,#A87634)]"
								onClick={() => setMenuOpen(false)}
							>
								{link.name}
							</a>
						</li>
					))}
					<li className="w-full">
						<a
							href="#contact"
							className="block w-full mt-2 bg-[var(--brown-var,#A87634)] text-white px-6 py-3 rounded-lg font-medium text-lg font-inter shadow transition-transform duration-200 hover:scale-105 hover:-rotate-1.5 hover:shadow-lg focus:scale-105 focus:-rotate-1.5 focus:shadow-lg"
							onClick={() => setMenuOpen(false)}
						>
							Contact Us
						</a>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
