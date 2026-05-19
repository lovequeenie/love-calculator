"use client";

import { useState } from "react";
import Image from "next/image";

export default function Generate() {
	const images = Array.from(
		{ length: 39 },
		(_, i) =>
			`https://kovt9fkbhvmfdlcu.public.blob.vercel-storage.com/tile_${i}.png`,
	);

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

		setRemainingImages(available.filter((_, i) => i !== randomIndex));
	};
	return (
		<div
			className=" relative flex flex-col min-h-screen aspect-[3508/4961]
 overflow-x-hidden z-0 love-parade-text bg-[url('/imgs/generateurgarden.jpg')] bg-cover bg-center">
			<button
				className="right-[38%] w-3/12 top-[5%]  absolute aspect-[1225/345] bg-[url('/imgs/generate-button.jpg')] bg-cover bg-center cursor-pointer rounded-2xl hover:shadow-2xl hover:shadow-blue-200"
				onClick={showRandomImage}></button>
			<div className=" right-[44%]  w-3/12 top-[15%]  z-10 absolute aspect-[1/1] bg-[url('/imgs/generatedImageCover.png')] bg-cover bg-center shadow-2xl shadow-gray-500/40 items-center justify-center  flex">
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
		</div>
	);
}
