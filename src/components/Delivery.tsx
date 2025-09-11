import { TbTruckDelivery } from "react-icons/tb";
import { deliveryCards } from "../data/delivery";

export default function Delivery() {
	return (
		<section id="delivery" className="w-full flex justify-center py-12 lg:py-16 -mt-6 md:-mt-8">
			<div className="w-full max-w-[1440px] px-4 sm:px-10 md:px-16 lg:px-20">
				{/* Title */}
				<div className="flex items-center justify-center gap-3 mb-8 md:mb-10">
					<TbTruckDelivery className="text-[var(--brown-var,#A87634)]" size={45} />
					<h2 className="text-3xl md:text-5xl font-bold text-[#222] text-center">Delivery & Collection</h2>
				</div>

				{/* Cards */}
				<div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
					{deliveryCards.map((c, idx) => (
						<div key={idx} className="rounded-xl border border-black/10 bg-white p-6 shadow-sm">
							<h3 className="text-lg md:text-xl font-semibold text-[#222] mb-2">{c.title}</h3>
							<p className="text-gray-500 text-base">{c.body}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
