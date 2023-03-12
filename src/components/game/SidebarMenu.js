import {
  Sidebar,
  Menu,
  MenuItem,
  SubMenu,
  useProSidebar,
  ProSidebar,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";

export default () => {

  return (
    <div>
      <Sidebar>
        <Menu>
          <MenuItem> Calendar</MenuItem>
          <SubMenu></SubMenu>
          <MenuItem> E-commerce</MenuItem>
        </Menu>
      </Sidebar>
      <main>
        <button className="btn">Collapse</button>
      </main>
    </div>
  );
};
