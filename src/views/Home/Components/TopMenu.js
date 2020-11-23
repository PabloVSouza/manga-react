import "./TopMenu.scss"
import lang from "../../../lang"

import downloadIcon from "../../../assets/download-icon.svg"
import userProfile from "../../../assets/user-profile.svg"

function TopMenu() {
	return (
		<div id="TopMenu" className="noSelect">
			<div id="buttonGroupLeft">
				<button title={lang.Home.topMenu.titleDownloadMangas}>
					<img src={downloadIcon} alt="download" />
				</button>
			</div>
			<div id="buttonGroupRight">
				<button id="btnUser" title={lang.Home.topMenu.titleUserMenu}>
					<img src={userProfile} alt="user" />
				</button>
			</div>
		</div>
	)
}

export default TopMenu
