import { Link } from 'react-router-dom'
import { FC } from 'react'
import { navElements } from '../../HelperInterface/Navigation'
import style from './Nav.module.scss'

interface PropsNav {
	children?: JSX.Element | JSX.Element[]
	navElements: navElements[]
}

export const Nav: FC<PropsNav> = props => {
	return (
		<nav>
			<ul className={style.menu}>
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/all">All Books</Link>
				</li>
				<li>
					<Link to="add">Add Books</Link>
				</li>
			</ul>
		</nav>
	)
}
