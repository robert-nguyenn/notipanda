import Link from "next/link"
import { MaxWidthWrapper } from "./max-width-wrapper"
import { SignOutButton } from "@clerk/nextjs"
import { Button, buttonVariants } from "./ui/button"
import { ArrowRight } from "lucide-react"
//fix the navbar.tsx
export const Navbar = () => {
  const user = false // Replace with actual user state from Clerk or your auth system
  return (
    <nav className="sticky z-[100] h-16 inset-x-0 top-0 w-full border-b border-gray-200/60 bg-white/95 backdrop-blur-xl transition-all duration-200 shadow-sm">
      <MaxWidthWrapper>
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex z-40 font-bold text-2xl hover:opacity-80 transition-opacity duration-200">
            Noti<span className="text-brand-700 bg-gradient-to-r from-brand-600 to-brand-800 bg-clip-text text-transparent">Panda</span>
          </Link>

          <div className="h-full flex items-center space-x-3">
            {user ? (
              <>
                <SignOutButton>
                  <Button size="sm" variant="ghost" className="text-gray-600 hover:text-gray-900 hover:bg-gray-100/80 transition-all duration-200">
                    Sign Out
                  </Button>
                </SignOutButton>

                <Link href="/dashboard" className={buttonVariants({
                  size: "sm",
                  className: "flex items-center gap-1.5 bg-gradient-to-r from-brand-600 to-brand-700 hover:from-brand-700 hover:to-brand-800 text-white shadow-md hover:shadow-lg transition-all duration-200 transform hover:scale-105",
                })}>
                  Dashboard <ArrowRight className="size-4" />
                </Link>
              </>
            ) : (
              <>
                <Link href="/pricing" className={buttonVariants({
                  size: "sm",
                  variant: "ghost",
                  className: "text-gray-600 hover:text-gray-900 hover:bg-gray-100/80 transition-all duration-200"
                })}>
                  Pricing
                </Link>
                <Link href="/sign-in" className={buttonVariants({
                  size: "sm",
                  variant: "ghost",
                  className: "text-gray-600 hover:text-gray-900 hover:bg-gray-100/80 transition-all duration-200"
                })}>
                  Sign In
                </Link>

                <div className="h-6 w-px bg-gradient-to-b from-gray-200 via-gray-300 to-gray-200"/>

                <Link href="/sign-up" className={buttonVariants({
                  size: "sm",
                  className: "flex items-center gap-1.5 bg-gradient-to-r from-brand-600 to-brand-700 hover:from-brand-700 hover:to-brand-800 text-white shadow-md hover:shadow-lg transition-all duration-200 transform hover:scale-105",
                })}>
                  Sign Up <ArrowRight className="size-4" />  
                </Link>
              </>
            )}
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  )
}
