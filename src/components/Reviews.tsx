"use client";
import { useMemo, useState } from "react";
import { FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { reviews } from "../data/reviews";

type CardProps = {
	rating: number;
	quote: string;
	name: string;
	location: string;
};

function ReviewCard({ rating, quote, name, location }: CardProps) {
	return (
		<div className="min-w-[280px] sm:min-w-[320px] lg:min-w-[360px] rounded-xl border border-black/10 bg-white p-6 shadow-sm">
			<div className="flex items-center gap-1 text-yellow-400 mb-4" aria-label={`${rating} out of 5 stars`}>
				{Array.from({ length: 5 }).map((_, i) => (
					<FaStar key={i} className={i < rating ? "fill-yellow-400" : "fill-gray-200 text-gray-200"} size={18} />
				))}
			</div>
			<blockquote className="text-xl font-semibold text-[#222] mb-4">“{quote}”</blockquote>
			<div className="text-sm">
				<div className="text-[#222] font-semibold">{name}</div>
				<div className="text-gray-500">{location}</div>
			</div>
		</div>
	);
}

export default function Reviews() {
	// Mobile carousel index
	const [index, setIndex] = useState(0);
	// Desktop/tablet marquee pause state
	const [paused, setPaused] = useState(false);
	const count = reviews.length;
	const prev = () => setIndex((i) => (i - 1 + count) % count);
	const next = () => setIndex((i) => (i + 1) % count);

	const trackStyle = useMemo<React.CSSProperties>(() => ({
		animation: "marquee-right 35s linear infinite",
		animationPlayState: paused ? "paused" : "running",
	}), [paused]);

	return (
		<section className="w-full flex justify-center py-12 lg:py-16">
			<div className="w-full max-w-[1440px] px-4 sm:px-10 md:px-16 lg:px-20">
					<h2 className="text-3xl md:text-4xl font-bold text-[#222] mb-6 md:mb-8 text-center md:text-center lg:text-left">
							<span className="md:hidden">What Customers Say</span>
							<span className="hidden md:inline">What Our Customers Say</span>
						</h2>

				{/* Desktop/Tablet: continuous marquee moving left->right, pauses on hover */}
						<div className="hidden md:block">
							<div
								className="marquee overflow-hidden relative"
								onMouseEnter={() => setPaused(true)}
								onMouseLeave={() => setPaused(false)}
							>
								<div className="marquee-track flex gap-6 will-change-transform" style={trackStyle}>
							{[...reviews, ...reviews].map((r, i) => (
								<ReviewCard key={i} {...r} />
							))}
						</div>
					</div>
				</div>

				{/* Mobile: arrow carousel like Menu Specials */}
				<div className="md:hidden relative">
					<div className="flex items-center justify-between">
						<button
							aria-label="Previous review"
							onClick={prev}
							className="p-2 rounded-full border border-black/10 shadow-sm bg-white active:scale-95"
						>
							<FaChevronLeft />
						</button>
						<div className="w-[85%] xs:w-[88%] sm:w-[90%]">
							<ReviewCard {...reviews[index]} />
						</div>
						<button
							aria-label="Next review"
							onClick={next}
							className="p-2 rounded-full border border-black/10 shadow-sm bg-white active:scale-95"
						>
							<FaChevronRight />
						</button>
					</div>
				</div>
			</div>
		</section>
	);
}
