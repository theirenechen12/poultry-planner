import {
  Nav,
  NavLink,
  NavMenu,
  Dropdown,
  DropdownButton,
  SubMenu,
  SubNavLink,
} from "./NavbarElements.js";

export default function Navbar() {
  return (
    <Nav>
      <NavMenu>
        <NavLink to="/" end>
          Home
        </NavLink>

        <Dropdown>
        <DropdownButton type="button">
          Franchises ▾
        </DropdownButton>

        <SubMenu>
          <SubNavLink to="franchises/winglee">
            Wing Lee Farms
          </SubNavLink>

          <SubNavLink to="/franchises/wingon">
            Wing On Poultry
          </SubNavLink>

          <SubNavLink to="/franchises/hinglee">
            Hinglee Farm Market
          </SubNavLink>
        </SubMenu>
      </Dropdown>

        <NavLink to="/about">
          About
        </NavLink>
      </NavMenu>
    </Nav>
  );
}