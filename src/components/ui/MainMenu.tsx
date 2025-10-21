import { Link } from "react-router"


const MainMenu = () => {
  return (
    <ul className="flex gap-x-4">
        <li> <Link to="/"> Home </Link> </li>
        <li> <Link to="/blogs"> Blogs </Link> </li>
        <li> <Link to="/contact"> Contact </Link> </li>
        <li> <Link to="/about"> About </Link> </li>
    </ul>
  )
}

export default MainMenu
