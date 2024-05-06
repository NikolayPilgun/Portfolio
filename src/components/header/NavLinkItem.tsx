import { FC } from "react";
import { NavLink } from "react-router-dom";

interface NavLinkItemProps {
	link: { name: string; path: string };
}

const NavLinkItem: FC<NavLinkItemProps> = ({ link }) => {
	return (
		<li key={link.name}>
			<NavLink className="relative group text-base" to={link.path}>
				{link.name}
				<span className="absolute left-0 -bottom-2 h-[2px] w-full inline-block text-center">
					<span className="inline-block w-0 h-[2px] transition-[width] ease-linear duration-300 group-hover:w-[90%] bg-slate-900">
						&nbsp;
					</span>
				</span>
			</NavLink>
		</li>
	);
};

export default NavLinkItem;
