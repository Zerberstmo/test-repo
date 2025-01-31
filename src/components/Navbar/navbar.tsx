import { useNavigate } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from "../ui/menubar";

export function Navbar() {
  const navigate = useNavigate();

  return (
    <div className="flex space-x-4">
      <Avatar className="relative left-4 mt-4">
        <AvatarImage src="src/components/pictures/RobbenKing.jpeg" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <Menubar className="relative left-8 mt-4">
        <MenubarMenu>
          <MenubarTrigger>Menu</MenubarTrigger>
          <MenubarContent>
            <MenubarItem onClick={() => navigate("/")}>Home</MenubarItem>
            <MenubarSeparator />
            <MenubarItem onClick={() => navigate("/work")}>Work</MenubarItem>
            <MenubarItem onClick={() => navigate("/about")}>About</MenubarItem>
            <MenubarItem onClick={() => navigate("/blog")}>Blog</MenubarItem>
            <MenubarSeparator />
            <MenubarItem onClick={() => navigate("/shop")}>Shop</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    </div>
  );
}
