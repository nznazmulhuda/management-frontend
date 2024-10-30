import AddNewSell from "@/components/AddNewSell/AddNewSell";
import { ButtonContext } from "@/context/ButtonContext";
import { ReactNode, useEffect, useState } from "react";

type TButton = boolean;

export type ButtonValueInterface = {
	SellButton: () => void;
	isSellButton: boolean;
} | null;

export const ButtonProvider = ({ children }: { children: ReactNode }) => {
	const [isSellButton, setIsSellButton] = useState<TButton>(false);

	// add new sell data button
	const SellButton = () => {
		setIsSellButton(!isSellButton);
	};

	// all global value
	const ButtonValue = {
		SellButton,
		isSellButton,
	};

	// return provider
	return (
		<ButtonContext.Provider value={ButtonValue}>
			{children}
		</ButtonContext.Provider>
	);
};
