const Feedback = () => {
	return (
		<div>
			<div className="   rounded-xl border  border-[#CBEC5E] p-6">
				<h2 className="text-lg font-bold mb-1 border-b border-gray-300 pb-1">
					Feedback
				</h2>

				<h3 className="text-md font-semibold mt-4 mb-1">Maria T.'s feedback</h3>
				<div className="flex items-center mb-1">
					<span className="text-yellow-500 text-sm mr-1">★★★★★</span>
					<span className="text-sm font-semibold">5.0</span>
				</div>
				<p className="text-sm leading-relaxed">
					Great experience working with Maria S! She provided clear
					instructions, timely feedback, and were very professional throughout
					the project. The communication was smooth, and they valued quality
					work. I would love to collaborate again in the future!
				</p>

				<h3 className="text-md font-semibold mt-4 mb-1">Eleni C.'s feedback</h3>
				<div className="flex items-center mb-1">
					<span className="text-yellow-500 text-sm mr-1">★★★★★</span>
					<span className="text-sm font-semibold">5.0</span>
				</div>
				<p className="text-sm leading-relaxed">
					The hairstylist was amazing! She created the perfect bridal updo that
					lasted all day. Professional, friendly, and truly talented!
				</p>
			</div>
		</div>
	);
};

export default Feedback;
