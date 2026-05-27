import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogClose,
} from "./motion-primitives/dialog";

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
				className="text-xl  p-28 cursor-help h-full w-full"
				aria-label="Open information dialog"></button>

			<Dialog open={isOpen} onOpenChange={onOpenChange}>
				<DialogContent className="max-w-[95vw] max-h-[95vh] flex items-center justify-center">
					<DialogHeader>
						<DialogTitle className="text-zinc-900 dark:text-white">
							{title}{" "}
						</DialogTitle>
					</DialogHeader>

					<div className="relative mt-6  w-auto h-[90vh] aspect-[2480/3508]">
						<img
							src={`/imgs/${imageUrl}`}
							alt={title}
							className="w-full h-full object-contain"
						/>
					</div>

					<DialogClose />
				</DialogContent>
			</Dialog>
		</>
	);
}
