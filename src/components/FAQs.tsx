"use client";
import { useState } from "react";
import { faqs } from "../data/faqs";
import { FaChevronDown } from "react-icons/fa";

export default function FAQs() {
	const [openIndex, setOpenIndex] = useState<number | null>(null);

	const toggle = (i: number) => {
		setOpenIndex((prev) => (prev === i ? null : i));
	};

	return (
		<section id="faqs" className="w-full flex justify-center py-12 lg:py-16">
			<div className="w-full max-w-[1440px] px-4 sm:px-10 md:px-16 lg:px-20">
				<h2 className="text-3xl md:text-4xl font-bold text-[var(--brown-var,#A87634)] mb-8 md:mb-10">Frequently Asked Questions</h2>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
					{faqs.map((item, i) => {
						const isOpen = openIndex === i;
						return (
							<button
								key={i}
								onClick={() => toggle(i)}
								className="text-left rounded-xl border border-black/10 bg-white p-6 shadow-sm focus:outline-none focus:ring-2 focus:ring-[var(--brown-var,#A87634)]"
								aria-expanded={isOpen}
							>
								<div className="flex items-start justify-between gap-4">
									<h3 className="text-lg md:text-xl font-semibold text-[#222]">{item.question}</h3>
									<FaChevronDown
										className={`mt-1 shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180" : "rotate-0"}`}
									/>
								</div>
								<div
									className={`overflow-hidden transition-[max-height,opacity] duration-300 ease-in-out ${
										isOpen ? "max-h-40 opacity-100 mt-3" : "max-h-0 opacity-0 mt-0"
									}`}
								>
									<p className="text-gray-500 text-base">{item.answer}</p>
								</div>
							</button>
						);
					})}
				</div>
			</div>
		</section>
	);
}
