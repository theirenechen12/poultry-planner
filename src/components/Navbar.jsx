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
          Network ▾
        </DropdownButton>

        <SubMenu>
          <SubNavLink to="networks/winglee">
            Wing Lee Farms
          </SubNavLink>

          <SubNavLink to="/networks/vikon">
            Vikon Farms
          </SubNavLink>

          <SubNavLink to="/networks/wingon">
            Wing On Poultry
          </SubNavLink>

          <SubNavLink to="/networks/highland">
            Highland Live Poultry
          </SubNavLink>

          <SubNavLink to="/networks/shanglee">
            Shang Lee Poultry
          </SubNavLink>

          <SubNavLink to="/networks/imperial">
            Imperial Poultry
          </SubNavLink>

          <SubNavLink to="/networks/dakao">
            Dakao Poultry
          </SubNavLink>

          <SubNavLink to="/networks/baladi">
            Baladi Poultry
          </SubNavLink>

          <SubNavLink to="/networks/hinglee">
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