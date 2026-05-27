"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { useReactToPrint } from "react-to-print";

export default function Generate() {
	const images = Array.from(
		{ length: 39 },
		(_, i) =>
			`https://kovt9fkbhvmfdlcu.public.blob.vercel-storage.com/tile_${i}.png`,
	);
	const printRef = useRef<HTMLDivElement>(null);
	const [currentImage, setCurrentImage] = useState<string | null>(null);
	const [remainingImages, setRemainingImages] = useState(images);
	const showRandomImage = () => {
		let available = remainingImages;

		// reset after all used
		if (available.length === 0) {
			available = [...images];
		}

		const randomIndex = Math.floor(Math.random() * available.length);

		const selected = available[randomIndex];

		setCurrentImage(selected);

		//setRemainingImages(available.filter((_, i) => i !== randomIndex));
	};
	const handlePrint = useReactToPrint({
		contentRef: printRef,
		documentTitle: "Generated Image",
		onAfterPrint: () => {
			if (!currentImage) return;

			setRemainingImages((prev) => prev.filter((img) => img !== currentImage));

			setCurrentImage(null);
		},
	});

	return (
		<div
			className=" relative flex flex-col min-h-screen aspect-[3508/4961]
 overflow-x-hidden z-0 love-parade-text bg-[url('/imgs/generateurgarden.jpg')] bg-cover bg-center">
			<button
				className="right-[38%] w-3/12 top-[5%]  absolute aspect-[1225/345] bg-[url('/imgs/generate-button.jpg')] bg-cover bg-center cursor-pointer rounded-2xl hover:shadow-2xl hover:shadow-blue-200"
				onClick={showRandomImage}>
				<span
					className="
				absolute inset-[-20%]
				rounded-full
				bg-[radial-gradient(circle,rgba(120,170,255,0.9),transparent_80%)]
				hover:bg-[radial-gradient(circle,rgba(120,170,255,0.5),transparent_80%)]
				blur-2xl
				-z-10
			"
				/>
			</button>
			<div
				ref={printRef}
				className=" print:static print:w-full print:h-auto right-[38%]  w-3/12 top-[15%]  z-10 absolute aspect-[1/1] bg-[url('/imgs/generatedImageCover.png')] bg-cover bg-center shadow-2xl shadow-gray-500/40 items-center justify-center  flex">
				<div className=" absolute inset-0 bg-gray-500/40 -z-10  blur-md" />
				{currentImage && (
					<div className="relative w-[85%] aspect-square ">
						<Image
							className="p-16 z-10 object-contain  "
							src={currentImage}
							alt="Random tile"
							fill
						/>
					</div>
				)}
			</div>
			{currentImage && (
				<button
					className="right-[38%] w-3/12 top-[35%]  absolute aspect-[1100/550] bg-[url('/imgs/printButton.png')] bg-cover bg-center cursor-pointer rounded-2xl "
					onClick={handlePrint}>
					<span
						className="
				absolute inset-[-20%]
				rounded-full
				bg-[radial-gradient(circle,rgba(180,180,180,0.8),transparent_80%)]
				hover:bg-[radial-gradient(circle,rgba(120,120,120,0.8),transparent_80%)]
				blur-2xl
				-z-10
			"
					/>
				</button>
			)}
		</div>
	);
}
