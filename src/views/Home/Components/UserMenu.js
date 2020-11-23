import "./UserMenu.scss"

import lang from "../../../lang/"

function UserMenu() {
	return (
		<div id="userMenu">
			<h1>Pablo</h1>
			<ul>
				<li>
					{lang.Home.userMenu.btnReverseKeys}:
					<input type="checkbox" />
				</li>
				<li>{lang.Home.userMenu.btnChangeWallpaper}</li>
				<li>{lang.Home.userMenu.btnChangeUser}</li>
			</ul>
		</div>
	)
}

export default UserMenu
