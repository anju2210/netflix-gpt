import { GoogleGenerativeAI } from "@google/generative-ai";
import { GEMINIAI_KEY } from "./constants";

const genAI = new GoogleGenerativeAI(GEMINIAI_KEY);

export default genAI;
