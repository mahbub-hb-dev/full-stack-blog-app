import Logo from '@/components/ui/Logo'
import MainMenu from '@/components/ui/MainMenu'
import { Button } from '@/components/ui/button'
import { ModeToggle } from '@/components/ui/mode-toggle'
import { SearchBar } from '@/components/ui/searchbar'
import { Link } from 'react-router'

const Navbar = () => {
  return (
    <div className="bg-white relative z-20">
      <nav className="absolute top-6 inset-x-4 h-16 bg-background border dark:border-slate-700/70 max-w-(--breakpoint-xl) mx-auto rounded-full">
        <div className="h-full flex items-center justify-between mx-auto px-4">
          <Link to={"/"}>
            <Logo />
          </Link>
          {/* Desktop Menu */}
          <MainMenu />
          {/* <NavMenu className="hidden md:block" /> */}
          <div className="flex items-center gap-3">
            <Link to={"/login"}> <Button variant="outline" className="hidden sm:inline-flex rounded-full"> Sign In </Button> </Link>
            <SearchBar />
            <ModeToggle />
            {/* Mobile Menu */}
            
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
