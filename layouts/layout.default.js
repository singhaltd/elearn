import FooterDefault from "../components/footer/default";
import NavbarDefault from "../components/header/default";

export default function LayoutDefault({ children }) {
  return (
    <>
      <NavbarDefault/>
      <main>{children}</main>
      <FooterDefault/>
    </>
  )
}