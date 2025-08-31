"use client";
import { FormEvent } from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function Contact() {
	const onSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		// UI only for now
	};

	return (
		<section id="contact" className="w-full flex justify-center py-12 lg:py-16">
			<div className="w-full max-w-[1440px] px-4 sm:px-10 md:px-16 lg:px-20">
				{/* Title + Subtext */}
				<div className="text-center mb-8 md:mb-10">
					<h2 className="text-3xl md:text-5xl font-bold text-[#111] mb-3">Contact Us!</h2>
					<p className="text-base md:text-lg text-[#222]">
						<span className="text-[var(--brown-var,#A87634)] font-semibold">Big feast or small bite</span>, we’ll make it right!
					</p>
                    <p className="text-base md:text-lg text-[#222]">
                        Simply reach out to <span className="text-[var(--brown-var,#A87634)] font-semibold">place your order</span> and we’ll handle the rest.
                    </p>
					<p className="text-base md:text-lg text-[#222] flex flex-col md:flex-row items-center justify-center gap-1 md:gap-1">
						<span>Alternatively,</span>
                        {/* <span>join the</span> */}
						<a
							href="https://chat.whatsapp.com/"
							target="_blank"
							rel="noopener noreferrer"
							className="font-semibold inline-flex items-center gap-1 hover:underline"
							aria-label="Join our WhatsApp Community"
							title="Join our WhatsApp Community"
						>
							<span>Join the</span>
							<FaWhatsapp className="w-5 h-5 text-green-600" />
							<span className="text-green-600">WhatsApp Community</span>
						</a>
					</p>
				</div>

				{/* Form */}
				<form onSubmit={onSubmit} className="mx-auto w-full md:w-[80%] lg:w-[60%] grid grid-cols-1 gap-5">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-5">
						<div>
							<label htmlFor="name" className="block text-sm font-medium text-[#222] mb-1">Name</label>
							<input
								id="name"
								name="name"
								type="text"
								required
								autoComplete="name"
								className="w-full rounded-lg border border-black/20 bg-white px-4 py-3 text-[15px] md:text-base shadow-sm transition focus:border-[var(--brown-var,#A87634)] focus:ring-2 focus:ring-[var(--brown-var,#A87634)] focus:ring-offset-1 focus:ring-offset-white outline-none hover:border-black/30"
							/>
						</div>
						<div>
							<label htmlFor="email" className="block text-sm font-medium text-[#222] mb-1">Email Address</label>
							<input
								id="email"
								name="email"
								type="email"
								required
								autoComplete="email"
								className="w-full rounded-lg border border-black/20 bg-white px-4 py-3 text-[15px] md:text-base shadow-sm transition focus:border-[var(--brown-var,#A87634)] focus:ring-2 focus:ring-[var(--brown-var,#A87634)] focus:ring-offset-1 focus:ring-offset-white outline-none hover:border-black/30"
							/>
						</div>
					</div>

					<div>
						<label htmlFor="phone" className="block text-sm font-medium text-[#222] mb-1">Phone Number</label>
						<input
							id="phone"
							name="phone"
							type="tel"
							inputMode="tel"
							autoComplete="tel"
							className="w-full rounded-lg border border-black/20 bg-white px-4 py-3 text-[15px] md:text-base shadow-sm transition focus:border-[var(--brown-var,#A87634)] focus:ring-2 focus:ring-[var(--brown-var,#A87634)] focus:ring-offset-1 focus:ring-offset-white outline-none hover:border-black/30"
						/>
					</div>

					<div>
						<label htmlFor="message" className="block text-sm font-medium text-[#222] mb-1">Message</label>
						<textarea
							id="message"
							name="message"
							rows={5}
							required
							maxLength={1000}
							className="w-full rounded-lg border border-black/20 bg-white px-4 py-3 text-[15px] md:text-base shadow-sm transition focus:border-[var(--brown-var,#A87634)] focus:ring-2 focus:ring-[var(--brown-var,#A87634)] focus:ring-offset-1 focus:ring-offset-white outline-none hover:border-black/30"
						/>
					</div>

					<div className="flex justify-center">
						<button
							type="submit"
							className="inline-flex items-center justify-center rounded-md bg-[var(--brown-var,#A87634)] px-5 py-2.5 text-white font-semibold shadow-sm hover:opacity-90 active:scale-95"
						>
							Send Message
						</button>
					</div>
				</form>
			</div>
		</section>
	);
}
