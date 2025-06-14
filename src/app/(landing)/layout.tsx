import { ReactNode } from "react"
import { Navbar } from "../../components/navbar"

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  )
}

export default Layout