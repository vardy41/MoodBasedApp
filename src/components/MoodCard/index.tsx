import type { MoodCardProps } from "../../types/types";
import "./index.scss";

export const MoodCard = ({ text, emoticon, color, onClick }: MoodCardProps) => {
	return (
		<li className={`card_item ${color}`} onClick={onClick}>
			<span className="card_item__emoticon">{emoticon}</span>
			<p className="card_item__text">{text}</p>
		</li>
	);
};
