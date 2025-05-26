"use client";
import { useState } from "react";
import { Popover } from "react-tiny-popover";
import { ImageDialog } from "./components/ImageDialog";

export default function Home() {
	const [result, setResult] = useState("");
	const [name1, setName1] = useState("");
	const [name2, setName2] = useState("");
	const [isHomeDialogOpen, setIsHomeDialogOpen] = useState(false);
	const [isRaddichDialogOpen, setIsRaddichDialogOpen] = useState(false);
	const [isEggplantDialogOpen, setIsEggplantDialogOpen] = useState(false);
	const [isTomatoDialogOpen, setIsTomatoDialogOpen] = useState(false);
	const [isLeekDialogOpen, setIsLeekDialogOpen] = useState(false);
	const [isLettuceDialogOpen, setIsLettuceDialogOpen] = useState(false);
	const [isPepperDialogOpen, setIsPepperDialogOpen] = useState(false);

	const [isClicktoFindOutClicked, setIsClickToFindOutClicked] = useState(false);
	const [showGif, setShowGif] = useState(false);

	const ShowResult = () => {
		setShowGif(true);
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
				{showGif && (
					<div className="flex justify-center my-4">
						<img
							src="/imgs/heart.gif"
							alt="love-gif"
							className="h-32 lg:h-48"
						/>
					</div>
				)}

				<p className="flex w-full justify-center text-4xl lg:text-6xl mx-auto my-2">
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
			<div className="absolute right-[12%] w-1/12 min-h-28 top-[60.5%] z-10 flex flex-col  space-y-4 items-center justify-center m-2 ">
				<ImageDialog
					imageUrl="radicchio.jpg"
					title="Radich recipe"
					isOpen={isRaddichDialogOpen}
					onOpenChange={setIsRaddichDialogOpen}
					key={1}
				/>
			</div>
			<div className="absolute left-[12%] w-2/12 top-[68.5%] min-h-52 z-10 flex flex-col  space-y-4 items-center justify-center m-10 ">
				<ImageDialog
					imageUrl="eggplant.jpg"
					title="Eggplant recipe"
					isOpen={isEggplantDialogOpen}
					onOpenChange={setIsEggplantDialogOpen}
					key={1}
				/>
			</div>
			<div className="absolute left-[1%] w-1/12 top-[66.5%] min-h-10 max-h-12 z-10 flex flex-col  space-y-4 items-center justify-center m-10 ">
				<ImageDialog
					imageUrl="garlicAndOnions.jpg"
					title="Garlic and onions recipe"
					isOpen={isEggplantDialogOpen}
					onOpenChange={setIsEggplantDialogOpen}
					key={1}
				/>
			</div>
			<div className="absolute right-[5%] w-2/12 top-[68.5%] min-h-52 z-10 flex flex-col  space-y-4 items-center justify-center m-10 ">
				<ImageDialog
					imageUrl="leek.jpg"
					title="Leek recipe"
					isOpen={isLeekDialogOpen}
					onOpenChange={setIsLeekDialogOpen}
					key={1}
				/>
			</div>
			<div className="absolute right-[35%] w-2/12 top-[70.5%] min-h-52 z-10 flex flex-col  space-y-4 items-center justify-center m-10 ">
				<ImageDialog
					imageUrl="tomatoes.jpg"
					title="Tomato recipe"
					isOpen={isTomatoDialogOpen}
					onOpenChange={setIsTomatoDialogOpen}
					key={1}
				/>
			</div>
			<div className="absolute right-[38%] w-3/12 top-[80.5%] min-h-52 z-10 flex flex-col  space-y-4 items-center justify-center m-10 ">
				<ImageDialog
					imageUrl="lettuce.jpg"
					title="Lettuce recipe"
					isOpen={isLettuceDialogOpen}
					onOpenChange={setIsLettuceDialogOpen}
					key={1}
				/>
			</div>
			<div className="absolute right-[38%] w-4/12 bottom-[0.2%] min-h-52 z-10 flex flex-col  space-y-4 items-center justify-center m-10 ">
				<ImageDialog
					imageUrl="peppers.jpg"
					title="Peppers recipe"
					isOpen={isPepperDialogOpen}
					onOpenChange={setIsPepperDialogOpen}
					key={1}
				/>
			</div>
			<div className="absolute left-1/3 top-[65%] z-10 flex flex-row w-1/3 space-y-4 items-center justify-center m-10 space-x-4">
				<p className="  w-1/2 text-xl lg:text-4xl px-10 py-5 italic text-blue-600 bg-[#FE58F1]">
					Will we get our garden?
				</p>

				<button
					onClick={() => setIsClickToFindOutClicked(!isClicktoFindOutClicked)}
					className=" cursor-grab bg-gray-300 text-xl text-[#FE58F1] border-2 border-blue-600 lg:text-4xl px-2 py-5">
					{isClicktoFindOutClicked ? "Yes!" : "Click to Find out"}
				</button>
			</div>
		</div>
	);
}
