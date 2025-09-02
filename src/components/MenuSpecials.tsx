"use client";

import Image from "next/image";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { menuSpecials, type Dish } from "../data/menuSpecials";

function Card({ dish, className = "" }: { dish: Dish; className?: string }) {
	return (
	<div className={`flex flex-col ${className}`}>
			<div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden shadow-sm">
				<Image
					src={dish.src}
					alt={dish.alt}
					fill
					className="object-cover"
					sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
					priority
				/>
			</div>
			<div className="mt-4">
				<h3 className="text-lg font-semibold text-[#222]">{dish.title}</h3>
				<p className="mt-2 text-[#6b7280]">{dish.body}</p>
			</div>
		</div>
	);
}

export default function MenuSpecials() {
		const [index, setIndex] = useState(0);
		const prev = () => setIndex((i) => (i - 1 + menuSpecials.length) % menuSpecials.length);
		const next = () => setIndex((i) => (i + 1) % menuSpecials.length);

		return (
			<section id="menu" className="w-full flex justify-center pt-8 pb-12 lg:pt-12 lg:pb-16">
			<div className="w-full max-w-[1440px] px-4 sm:px-10 md:px-16 lg:px-20">
				<h2 className="text-center text-3xl md:text-4xl font-bold text-[#222]">Menu Specials</h2>

				{/* Desktop/tablet grid */}
							<div className="hidden sm:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-6">
								{menuSpecials.map((dish, i) => (
									<Card
										key={dish.title}
										dish={dish}
														className={
																			i === 2
																				? "md:col-span-2 md:justify-self-center md:w-[calc(50%_-_0.75rem)] w-full lg:col-span-1 lg:w-auto"
																: ""
														}
									/>
					))}
				</div>

				{/* Mobile carousel */}
					<div className="sm:hidden mt-6 relative">
					  <Card dish={menuSpecials[index]} />

					{/* Arrows */}
					<button
						aria-label="Previous"
						onClick={prev}
						className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 border border-black/10 rounded-full p-2 shadow hover:bg-white"
					>
						<FaChevronLeft />
					</button>
					<button
						aria-label="Next"
						onClick={next}
						className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 border border-black/10 rounded-full p-2 shadow hover:bg-white"
					>
						<FaChevronRight />
					</button>

					{/* Dots */}
					<div className="flex justify-center gap-2 mt-4">
						{menuSpecials.map((_, i) => (
							<span
								key={i}
								onClick={() => setIndex(i)}
								className={`h-2 w-2 rounded-full cursor-pointer ${i === index ? 'bg-[var(--brown-var,#A87634)]' : 'bg-gray-300'}`}
							/>
						))}
					</div>
				</div>

				{/* CTA */}
			<div className="w-full flex justify-center mt-8">
					<a
						href="https://www.instagram.com/bawarchi.khana65?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
						target="_blank"
						rel="noreferrer noopener"
						className="bg-[var(--brown-var,#A87634)] text-white px-6 py-3 rounded-lg font-medium shadow transition-transform duration-200 hover:scale-105"
					>
						View the Full Gallery
					</a>
				</div>
			</div>
		</section>
	);
}

