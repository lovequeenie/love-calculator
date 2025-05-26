import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogClose,
} from "./motion-primitives/dialog";
import Image from "next/image";

interface ImageDialogProps {
	imageUrl: string;
	isOpen: boolean;
	title: string;
	onOpenChange: (open: boolean) => void;
}

export function ImageDialog({
	imageUrl,
	isOpen,
	onOpenChange,
	title,
}: ImageDialogProps) {
	return (
		<>
			<button
				onClick={() => onOpenChange(true)}
				type="button"
				className="text-sm p-2 cursor-help w-full"
				aria-label="Open information dialog"></button>

			<Dialog open={isOpen} onOpenChange={onOpenChange}>
				<DialogContent className="w-full sm:max-w-7xl bg-white p-6 dark:bg-zinc-900">
					<DialogHeader>
						<DialogTitle className="text-zinc-900 dark:text-white">
							{title}{" "}
						</DialogTitle>
					</DialogHeader>

					<div className="relative mt-6 w-full aspect-video">
						<Image
							src={`/imgs/${imageUrl}`}
							fill
							alt="Information image"
							className="object-cover min-h-full min-w-full"
							sizes="(min-width:1200px) 100vw, 100vw"
						/>
					</div>

					<DialogClose />
				</DialogContent>
			</Dialog>
		</>
	);
}
