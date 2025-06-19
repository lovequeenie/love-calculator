"use client";
import { useState } from "react";
import { ImageDialog } from "./components/ImageDialog";
import Image from "next/image";
type DialogId =
	| "home"
	| "raddich"
	| "eggplant"
	| "tomato"
	| "leek"
	| "lettuce"
	| "pepper"
	| "garlicAndOnions"
	| "zine"
	| null;
export default function Home() {
	const [name1, setName1] = useState("");
	const [name2, setName2] = useState("");
	const [openDialog, setOpenDialog] = useState<DialogId>(null);

	const [isClicktoFindOutClicked, setIsClickToFindOutClicked] = useState(false);
	const [showResult, setShowResult] = useState(false);
	const loveLetters = [
		"My dearest love, every moment with you feels like a dream. Your smile lights up my world, and I cherish every second by your side. I promise to love you endlessly, through every season of life. You are my heart, my soul, my everything. Forever yours.",
		"Sweetheart, from the moment I met you, my heart knew you were the one. Your laughter is my favorite melody, and your love is my greatest gift. I will hold your hand through every storm and every sunshine. You are my forever love. Always and forever.",
		"My love, you are the reason my heart beats with joy. Every day with you is a blessing I never take for granted. I am so grateful for your love, your kindness, and your beautiful soul. I love you more than words can ever express. Yours forever.",
		"Darling, your love is the most precious thing in my life. I wake up every day grateful to have you by my side. I will love you with all my heart today, tomorrow, and always. Thank you for being my dream come true. Forever in love with you.",
		"Beloved, you are my heart's greatest joy. Your love is the light that guides me through the darkest days. I cherish you beyond words and promise to always stand by your side. No matter what, you will always have my love. Eternally yours.",
	];
	const [loveLetter, setLoveLetter] = useState("");
	const ShowResult = () => {
		setShowResult(true);
	};
	const generateLoveLetter = () => {
		const selectedLetterNumber = Math.floor(Math.random() * loveLetters.length);
		setLoveLetter(loveLetters[selectedLetterNumber]);
	};
	return (
		<div
			className=" relative w-screen h-[403.5vw]  
             bg-[url(/imgs/bgNewest.webp)] bg-no-repeat  
             bg-[length:100%_auto] overflow-x-hidden z-0 love-parade-text">
			<div className=" absolute max-h-[7.5%] md:left-[36.7%]  md:top-[21.5%] xl:left-1/3 xl:top-[21.5%] sm:w-3/12 xl:w-1/3   z-10 flex flex-col  space-y-4 items-center xl:m-2  overflow-hidden">
				<div className=" grid grid-rows-9 space-y-4 overflow-hidden">
					<h1 className="text-xl  md:text-3xl justify-self-center whitespace-nowrap  row-span-1 text-[#6658fe]">
						Love Calculator
					</h1>
					<input
						type="text"
						id="name1"
						placeholder="Name 1"
						className="text-lg w-full xl:text-3xl p-4 max-h-2/4 border-2 rounded-lg row-span-1.5 text-[#6658fe]"
						value={name1}
						onChange={(e) => setName1((e.target as HTMLInputElement).value)}
					/>
					<input
						type="text"
						id="name2"
						placeholder="Name 2"
						className="text-lg xl:text-3xl w-full max-h-2/4 p-4 border-2 rounded-lg row-span-1.5 text-[#6658fe]"
						value={name2}
						onChange={(e) => setName2((e.target as HTMLInputElement).value)}
					/>
					<div className="row-span-4 flex flex-col h-full text-[#6658fe]">
						{" "}
						<button
							className=" h-[60%] md:text-xl md:p-1  cursor-pointer rounded-lg bg-contain bg-no-repeat bg-center aspect-[1/1] self-center "
							style={{
								backgroundImage: "url(imgs/calculateButton.png)",
								height: "100px",
							}}
							onClick={ShowResult}
						/>
						<div className="flex justify-center xl:my-4 h-[40%]">
							<p className="flex w-full justify-center sm:text-xl md:text-2xl xl:text-5xl ">
								{showResult && (
									<>
										<span className="break-all">{name1}</span>&nbsp;
										<img
											src="/imgs/heart.gif"
											alt="love-gif"
											className="h-2/12 lg:h-20"
										/>
										&nbsp;<span className="break-all">{name2} 100% love!</span>
									</>
								)}
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className="absolute right-[4%] w-2/12 top-[28.5%] z-10 flex flex-col  space-y-4 items-center justify-center m-10 ">
				<ImageDialog
					imageUrl="ChatHowDoIGetAHouse.jpg"
					title="Get YOUR home"
					isOpen={openDialog === "home"}
					onOpenChange={(open) => setOpenDialog(open ? "home" : null)}
					key={1}
				/>
			</div>
			<div className="absolute right-[25%] w-2/12 max-h-[5%] top-[30.5%] z-10 flex flex-col  space-y-4 items-center justify-center m-10 ">
				<ImageDialog
					imageUrl="zin.jpg"
					title="Zine"
					isOpen={openDialog === "zine"}
					onOpenChange={(open) => setOpenDialog(open ? "zine" : null)}
					key={1}
				/>
			</div>
			<div className="absolute left-1/3 md:top-[55%] z-10 flex flex-row  space-y-4 items-center justify-center m-10 space-x-4">
				<p className="  w-1/2 text-xl lg:text-4xl px-10 py-5 italic text-blue-600 bg-[#FE58F1]">
					Will we get our garden?
				</p>

				<button
					onClick={() => setIsClickToFindOutClicked(!isClicktoFindOutClicked)}
					className="cursor-grab  text-xl  lg:text-4xl ">
					<Image
						src={`/imgs/${isClicktoFindOutClicked ? "yesButton.png" : "clickToFindOutButton.png"}`}
						alt="Click Button"
						className="w-full h-full object-contain"
						draggable={false}
						width={100}
						height={100}
						quality={100}
					/>
				</button>
			</div>
			<div className="absolute right-[12%] w-1/12 min-h-28 top-[52.5%] z-10 flex flex-col  space-y-4 items-center justify-center m-2 ">
				<ImageDialog
					imageUrl="radicchio.jpg"
					title="Radich recipe"
					isOpen={openDialog === "raddich"}
					onOpenChange={(open) => setOpenDialog(open ? "raddich" : null)}
					key={1}
				/>
			</div>
			<div className="absolute left-[12%] w-2/12 top-[58.5%] min-h-56 z-10 flex flex-col  space-y-4 items-center justify-center m-10 ">
				<ImageDialog
					imageUrl="eggplant.jpg"
					title="Eggplant recipe"
					isOpen={openDialog === "eggplant"}
					onOpenChange={(open) => setOpenDialog(open ? "eggplant" : null)}
					key={1}
				/>
			</div>

			<div className="absolute left-[1%] w-1/12 md:top-[56.5%] min-h-10 max-h-12 z-10 flex flex-col  space-y-4 items-center justify-center m-10 ">
				<ImageDialog
					imageUrl="garlicAndOnions.jpg"
					title="Garlic and onions recipe"
					isOpen={openDialog === "garlicAndOnions"}
					onOpenChange={(open) =>
						setOpenDialog(open ? "garlicAndOnions" : null)
					}
					key={1}
				/>
			</div>
			<div className="absolute right-[5%] w-2/12 md:top-[56.5%] min-h-52 z-10 flex flex-col  space-y-4 items-center justify-center m-10 ">
				<ImageDialog
					imageUrl="leek.jpg"
					title="Leek recipe"
					isOpen={openDialog === "leek"}
					onOpenChange={(open) => setOpenDialog(open ? "leek" : null)}
					key={1}
				/>
			</div>

			<div className="absolute right-[35%] w-2/12 top-[60.5%] min-h-52 z-10 flex flex-col  space-y-4 items-center justify-center m-10 ">
				<ImageDialog
					imageUrl="tomatoes.jpg"
					title="Tomato recipe"
					isOpen={openDialog === "tomato"}
					onOpenChange={(open) => setOpenDialog(open ? "tomato" : null)}
					key={1}
				/>
			</div>
			<div className="absolute right-[38%] w-3/12 top-[69.5%] min-h-52 z-10 flex flex-col  space-y-4 items-center justify-center m-10 ">
				<ImageDialog
					imageUrl="lettuce.jpg"
					title="Lettuce recipe"
					isOpen={openDialog === "lettuce"}
					onOpenChange={(open) => setOpenDialog(open ? "lettuce" : null)}
					key={1}
				/>
			</div>
			<div className="absolute right-[38%] w-4/12 bottom-[12.2%] min-h-52 z-10 flex flex-col  space-y-4 items-center justify-center m-10 ">
				<ImageDialog
					imageUrl="peppers.jpg"
					title="Peppers recipe"
					isOpen={openDialog === "pepper"}
					onOpenChange={(open) => setOpenDialog(open ? "pepper" : null)}
					key={1}
				/>
			</div>
			<div className="absolute  w-1/2  left-[23%] bottom-[2.2%] min-h-72 z-10   space-y-4 items-center justify-center m-10  grid grid-rows-9">
				<button
					onClick={generateLoveLetter}
					className="row-span-3  w-full aspect-[2/1] self-center justify-self-center rounded-xl bg-contain bg-no-repeat bg-center hover:cursor-pointer"
					style={{
						backgroundImage: "url(/imgs/generateLoveLetter.png)",
						height: "130px",
					}}
					aria-label="Generate Love Letter"
				/>

				<p className="w-full m-2 row-span-6">{loveLetter}</p>
			</div>
		</div>
	);
}
