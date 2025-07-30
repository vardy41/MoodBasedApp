import type { MoodCardProps } from "../../types/types";
import "./index.scss";

export const MoodCard = ({
	text,
	emoticon,
	color,
	onClick,
	onMouseEnter,
}: MoodCardProps) => {
	return (
		<li
			className={`card_item ${color}`}
			onClick={onClick}
			onMouseEnter={onMouseEnter}>
			<span className="card_item__emoticon">{emoticon}</span>
			<p className="card_item__text">{text}</p>
		</li>
	);
};
export default MoodCard;
