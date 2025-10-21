import Logo from '@/components/ui/Logo'
import MainMenu from '@/components/ui/MainMenu'
import { Button } from '@/components/ui/button'

const Navbar = () => {
  return (
    <div className="min-h-screen bg-muted">
      <nav className="fixed top-6 inset-x-4 h-16 bg-background border dark:border-slate-700/70 max-w-(--breakpoint-xl) mx-auto rounded-full">
        <div className="h-full flex items-center justify-between mx-auto px-4">
          <Logo />
          {/* Desktop Menu */}
          {/* <NavMenu className="hidden md:block" /> */}
          <div className="flex items-center gap-3">
            <Button variant="outline" className="hidden sm:inline-flex rounded-full"> Sign In </Button>
            <Button className="rounded-full"> Get Started </Button>
            {/* Mobile Menu */}
            <div className="md:hidden">
              <MainMenu />
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
