import { Link } from "react-router-dom";

type NavItemProps = {
    to: string;
    label: string;
};

function NavItem({ to, label }: NavItemProps) {
    return (
        <Link to={to} className="nav-item">
            {label}
        </Link>
    );
}

export default NavItem;
