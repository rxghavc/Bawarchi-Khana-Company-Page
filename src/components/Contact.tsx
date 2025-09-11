"use client";
import { FormEvent, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function Contact() {
	const [status, setStatus] = useState<"idle"|"loading"|"success"|"error">("idle");
	const [errorMsg, setErrorMsg] = useState<string>("");

	const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (status === "loading") return;
		setStatus("loading");
		setErrorMsg("");

		const form = e.currentTarget;
		const formData = new FormData(form);
		const payload = Object.fromEntries(formData.entries());

		try {
			const res = await fetch("/api/contact", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(payload),
			});
			const data = await res.json();
			if (!res.ok || !data.ok) {
				throw new Error(data.error || "Failed to send message");
			}
			setStatus("success");
			form.reset();
			setTimeout(() => setStatus("idle"), 4000);
		} catch (err: any) {
			setStatus("error");
			setErrorMsg(err.message || "Something went wrong");
			setTimeout(() => setStatus("idle"), 6000);
		}
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

					{status === "error" && (
						<div className="text-center text-sm text-red-600 font-medium">
							{errorMsg}
						</div>
					)}
					{status === "success" && (
						<div className="text-center text-sm text-green-600 font-medium">
							Message sent successfully!
						</div>
					)}

					<div className="flex justify-center">
						<button
							type="submit"
							disabled={status === "loading"}
							className="inline-flex items-center justify-center rounded-md bg-[var(--brown-var,#A87634)] px-5 py-2.5 text-white font-semibold shadow-sm hover:opacity-90 active:scale-95 disabled:opacity-60 disabled:cursor-not-allowed"
						>
							{status === "loading" ? "Sending..." : "Send Message"}
						</button>
					</div>
				</form>
			</div>
		</section>
	);
}
