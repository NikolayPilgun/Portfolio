import { NavLink } from "react-router-dom";
export default function Header() {
	return (
		<header className="flex justify-between items-center gap-5 h-28 bg-slate-500">
			<div>
				<h2 className="text-xl text-slate-200">Header</h2>
			</div>

			<nav>
				<ul>
					<li>
						<NavLink to={`/`}>Главная </NavLink>
					</li>
					<li>
						<NavLink to={`aboutMe`}>Обо мне</NavLink>
					</li>
				</ul>
			</nav>
		</header>
	);
}
