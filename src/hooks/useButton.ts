import { useContext } from "react";
import { ButtonValueInterface } from "@/provider/all-button-provider";
import { ButtonContext } from "@/context/ButtonContext";

export const useButton = () => {
	const data: ButtonValueInterface = useContext(ButtonContext);

	return data;
};
