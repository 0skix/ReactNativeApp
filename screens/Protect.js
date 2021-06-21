import React, { useContext } from "react";
import { FlatList } from "react-native";
import { Card } from "react-native-elements";
import { CheckBox } from "react-native-elements/dist/checkbox/CheckBox";
import { CoursesContext } from "../contexts/CoursesContext";
import { StyledText1 } from "./Welcome";
const Protect = () => {
	const { progress, setProgress, cProtect, setcProtect } =
		useContext(CoursesContext);

	const text = [
		"• Nie reaguj na podejrzane wiadomości mailowe, pochodzące z nieznanych domen, takie jak prośby o podanie danych osobowych. W szczególności nie należy pobierać załączników czy otwierać linków URL nieznanego pochodzenia",
		"• Nie przyjmuj zaproszeń do grona znajomych od osób, których nie znasz, na przykład w mediach społecznościowych",
		"• Ochraniaj swoje hasła przy pomocy specjalnych, sprawdzonych programów. Warto pamiętać o tym, żeby w każdym miejscu mieć inne, najlepiej bardzo złożone hasło, składające się z różnych znaków (małych i wielkich liter, cyfr i znaków interpunkcyjnych). Dzięki temu w sytuacji, w którym dojdzie do kradzieży czy wycieku danych w jednej domenie, przestępcy nie będą mogli zalogować się na inne konta",
		"• Dodatkowo warto stworzyć dodatkowe konto bankowe, które będzie używane w celu zakupów online czy kupowania dostępu, na przykład do serwisów takich jak Netflix. Coraz częściej niezbędne jest podawanie danych takich jak numer konta bankowego i kod CVV – warto mieć dodatkowe konto z niewielką ilością środków, służące jedynie w celu kupowania usług czy produktów online. Dzięki temu nawet w sytuacji wycieku danych Twoje konto bankowe, na którym gromadzisz środki, będzie bezpieczne.",
	];
	return (
		<FlatList
			data={text}
			renderItem={({ item, index }) => (
				<>
					<Card>
						<StyledText1 style={{ marginBottom: 5 }}>{item}</StyledText1>
						<CheckBox
							center
							title="Odznacz sekcje"
							checkedIcon="dot-circle-o"
							uncheckedIcon="circle-o"
							iconRight
							checked={cProtect[index]}
							onPress={() => {
								if (cProtect[index] === false) {
									setcProtect((prevState) => {
										let result = prevState;
										result[index] = true;
										return [...result];
									});
									setProgress((prevState) => {
										let result = prevState;
										result[6] = cProtect.reduce(
											(acc, curr) => (curr === true ? acc + 0.25 : acc),
											0
										);
										return [...result];
									});
								} else if (cProtect[index] === true) {
									setcProtect((prevState) => {
										let result = prevState;
										result[index] = false;
										return [...result];
									});
									setProgress((prevState) => {
										let result = prevState;
										result[6] = cProtect.reduce(
											(acc, curr) => (curr === true ? acc + 0.25 : acc),
											0
										);
										return [...result];
									});
								}
							}}
						/>
					</Card>
				</>
			)}
			keyExtractor={(item) => item.id}
		/>
	);
};

export default Protect;
