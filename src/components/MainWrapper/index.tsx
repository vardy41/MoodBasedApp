import { moodCardsData } from "../../data/moodCardsData";
import { MoodCard } from "../MoodCard";
import "./index.scss";

export const MainWrapper = () => {
	return (
		<main className="main">
			<h2 className="main_heading">Jak się dziś czujesz ?</h2>
			<ul className="main_list">
				{moodCardsData.map((cardObj, index) => (
					<MoodCard
						key={index}
						color={cardObj.color}
						text={cardObj.text}
						emoticon={cardObj.emoticon}
					/>
				))}
			</ul>
		</main>
	);
};
