import { lazy, Suspense } from "react";
import { Header } from "../components/Header";
export const Layout = () => {
	const MainWrapper = lazy(() => import("../components/MainWrapper/index"));
	return (
		<>
			<Header />
			<Suspense fallback={<div>Ładowanie...</div>}>
				<MainWrapper />
			</Suspense>
		</>
	);
};
