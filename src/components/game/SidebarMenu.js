import {
  Sidebar,
  Menu,
  MenuItem,
  SubMenu,
  //   useProSidebar,
  //   ProSidebar,
  //   SidebarHeader,
  //   SidebarFooter,
  //   SidebarContent,
} from "react-pro-sidebar";

export default () => {
  return (
    <div>
      <Sidebar>
        <Menu>
          <SubMenu label="Charts">
            <MenuItem> Pie charts </MenuItem>
            <MenuItem> Line charts </MenuItem>
          </SubMenu>
          <MenuItem> Documentation </MenuItem>
          <MenuItem> Calendar </MenuItem>
        </Menu>
      </Sidebar>
      {/* <main>
        <button className="btn">Collapse</button>
      </main> */}
    </div>
  );
};
