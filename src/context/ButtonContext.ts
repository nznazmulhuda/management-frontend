import { ButtonValueInterface } from "@/provider/all-button-provider";
import { createContext } from "react";

export const ButtonContext = createContext<ButtonValueInterface>(null);
