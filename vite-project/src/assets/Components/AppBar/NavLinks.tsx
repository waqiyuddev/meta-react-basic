import NavItem from "./NavItem";

function NavLinks() {
    return (
        <>
            <NavItem to="/" label="Homepage" />
            <NavItem to="/about" label="About Little Lemon" />
            <NavItem to="/contact" label="Contact" />
        </>
    );
}

export default NavLinks;
