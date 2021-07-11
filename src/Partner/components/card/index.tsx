import { PropsWithChildren } from "react";
import ClassInfo from "./classInfo";

interface Props extends PropsWithChildren<any> {
	type: string;
	data: any;
}

const Card = ({ type, data }: Props) => {
	switch (type) {
		case "classInfo":
		default:
			return <ClassInfo {...data} />;
	}
};

export default Card;
