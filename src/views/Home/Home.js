import ChapterSelect from "./Components/ChapterSelect"
import MangaList from "./Components/MangaList"
import TopMenu from "./Components/TopMenu"
import UserMenu from "./Components/UserMenu"

function Home() {
	return (
		<div id="Home" className="generalWindow">
			<TopMenu />
			<MangaList />
			<ChapterSelect />
			<UserMenu />
		</div>
	)
}

export default Home
