import type { MoodCardProps } from "../../types/types";
import "./index.scss";

export const MoodCard = ({ text, emoticon, color }: MoodCardProps) => {
	return (
		<li className={`card_item ${color}`}>
			<span className="card_item__emoticon">{emoticon}</span>
			<p className="card_item__text">{text}</p>
		</li>
	);
};
