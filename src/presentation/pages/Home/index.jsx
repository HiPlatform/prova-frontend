import React from "react";
import { List } from "./components";

import Services from "../../../data/services";

const Home = () => {
	const data = new Services();
	return <List data={data.getData()} />;
};

export default Home;
