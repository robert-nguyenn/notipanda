import Link from "next/link"
import { MaxWidthWrapper } from "./max-width-wrapper"
import { SignOutButton } from "@clerk/nextjs"
import { Button, buttonVariants } from "./ui/button"
import { ArrowRight } from "lucide-react"

export const Navbar = () => {
  const user = false

  return (
    <nav className="sticky z-[100] h-16 inset-x-0 top-0 w-full border-b border-gray-200 bg-white/80 backdrop-blur-lg transition-all">
      <MaxWidthWrapper>
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex z-40 font-semibold">
            Noti<span className="text-brand-700">Panda</span>
          </Link>

          <div className="h-full flex items-center space-x-4">
            {user ? (
              <>
                <SignOutButton>
                  <Button size="sm" variant="ghost">
                    Sign Out
                  </Button>
                </SignOutButton>

                <Link href="/dashboard" className={buttonVariants({
                  size: "sm",
                  className: "flex items-center gap-1",
                })}>
                  DashBoard <ArrowRight className="ml-1.5 size-4" />
                </Link>
              </>
            ) : (
              <>
                <Link href="/dashboard" className={buttonVariants({
                  size: "sm",
                  variant: "ghost"
                })}>
                  Pricing
                </Link>
                <Link href="/sign-in" className={buttonVariants({
                  size: "sm",
                  variant: "ghost"
                })}>
                  Sign In
                </Link>
                <Link href="/sign-up" className={buttonVariants({
                  size: "sm",
                  className: "flex items-center gap-1.5",
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
