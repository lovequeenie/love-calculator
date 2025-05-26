"use client";
import { useState } from "react";
import { Popover } from "react-tiny-popover";
import {
	Dialog,
	DialogDescription,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogClose,
} from "./components/motion-primitives/dialog";
import Image from "next/image";
import { ImageDialog } from "./components/ImageDialog";

export default function Home() {
	const [result, setResult] = useState("");
	const [name1, setName1] = useState("");
	const [name2, setName2] = useState("");
	const [isPopoverOpen, setIsPopoverOpen] = useState(false);
	const [isHomeDialogOpen, setIsHomeDialogOpen] = useState(false);
	const [isRaddichDialogOpen, setIsRaddichDialogOpen] = useState(false);

	const ShowResult = () => {
		setResult(`${name1} ❤️ ${name2} 100% love!`);
	};
	return (
		<div
			className=" relative w-screen h-[506.25vw] 
             bg-[url(/imgs/background.jpg)] bg-no-repeat 
             bg-[length:100%_auto] overflow-x-hidden z-0">
			<div className="absolute left-1/3 top-[25%] z-10 flex flex-col w-1/3 space-y-4 items-center justify-center m-10 ">
				<h1 className="text-4xl lg:text-8xl">Love Calculator</h1>
				<div className=" flex flex-col space-y-4 ">
					<input
						type="text"
						id="name1"
						placeholder="Name 1"
						className="text-4xl lg:text-6xl p-4 border-2 rounded-lg"
						value={name1}
						onChange={(e) => setName1((e.target as HTMLInputElement).value)}
					/>
					<input
						type="text"
						id="name2"
						placeholder="Name 2"
						className="md:text-4xl lg:text-6xl p-4 border-2 rounded-lg"
						value={name2}
						onChange={(e) => setName2((e.target as HTMLInputElement).value)}
					/>
					<button
						className="text-4xl lg:text-6xl p-4 my-10 hover:bg-red-600 cursor-pointer rounded-lg bg-red-500 "
						onClick={ShowResult}>
						CALCULATE
					</button>
				</div>
				<p className="w-full justify-center text-4xl lg:text-6xl mx-auto my-2">
					{result}
				</p>
			</div>
			<div className="absolute right-[4%] w-2/12 top-[34.5%] z-10 flex flex-col  space-y-4 items-center justify-center m-10 ">
				<ImageDialog
					imageUrl="ChatHowDoIGetAHouse.jpg"
					title="Get YOUR HOME"
					isOpen={isHomeDialogOpen}
					onOpenChange={setIsHomeDialogOpen}
					key={1}
				/>
			</div>
			<div className="absolute left-1/3 top-[65%] z-10 flex flex-row w-1/3 space-y-4 items-center justify-center m-10 space-x-4">
				<p className="  w-1/2 text-xl lg:text-4xl px-10 py-5 italic text-blue-600 bg-[#FE58F1]">
					Will we get our garden?
				</p>

				<Popover
					isOpen={isPopoverOpen}
					positions={["top", "bottom", "left", "right"]}
					content={<div className="text-6xl">Yes !</div>}>
					<button
						onClick={() => setIsPopoverOpen(!isPopoverOpen)}
						className=" cursor-grab bg-gray-300 text-xl text-[#FE58F1] border-2 border-blue-600 lg:text-4xl px-2 py-5">
						{" "}
						Click to Find out
					</button>
				</Popover>
			</div>
		</div>
	);
}
