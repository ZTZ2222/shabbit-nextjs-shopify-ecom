import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import Link from "next/link";
import Separator from "@/components/ui/separator";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdOutlineAccountCircle } from "react-icons/md";
import { RiLoginCircleLine } from "react-icons/ri";
import { IoMdPerson } from "react-icons/io";

const navbar_links: { name: string; link: string }[] = [
  {
    name: "New",
    link: "#",
  },
  {
    name: "Catalog",
    link: "#",
  },
  {
    name: "Best Sellers",
    link: "#",
  },
  {
    name: "Track Order",
    link: "#",
  },
  {
    name: "About Us",
    link: "#",
  },
  {
    name: "FAQ",
    link: "#",
  },
  {
    name: "Terms & Conditions",
    link: "#",
  },
  {
    name: "Privacy Policy",
    link: "#",
  },
  {
    name: "Contact Us",
    link: "#",
  },
];

const SideMenu = () => {
  return (
    <Drawer direction="left">
      <DrawerTrigger className="bg-teal-400 p-1">
        <RxHamburgerMenu fontSize={24} />
      </DrawerTrigger>
      <DrawerContent className="h-full w-[289px] rounded-none" showBar={false}>
        <DrawerHeader className="flex items-center justify-between gap-0 p-2">
          <span className="inline-flex flex-col justify-center pl-1.5 text-start text-xs font-medium">
            Login to unlock exclusive{" "}
            <strong className="font-bold text-red-500">
              {" "}
              Offers and Discounts
            </strong>
          </span>

          {/* Login button */}
          <Button variant="outline" size="sm" className="gap-1 p-2">
            <IoMdPerson fontSize={18} />
            <span>Login</span>
          </Button>
        </DrawerHeader>

        <Separator className="mb-[15px] mt-5" />

        {/* Language and country buttons */}
        {/* <div className="flex items-center justify-between">
          <strong className="text-sm">Language / اللغة</strong>
          <Button
            variant="outline"
            size="sm"
            className="border-custom-red h-[30px] w-[69px] bg-red-600/5 hover:bg-black/5"
          >
            <span className="leading-[21px] tracking-widest">عربي</span>
          </Button>
        </div> */}
        <div className="flex items-center justify-between p-2">
          <span className="text-sm font-medium">Shipping to:</span>
          <Select defaultValue="usd">
            <SelectTrigger className="w-fit gap-1.5">
              <SelectValue placeholder="🇺🇸 USA | USD" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Countries</SelectLabel>
                <SelectItem value="aud">🇦🇺 Australia | AUD</SelectItem>
                <SelectItem value="cad">🇨🇦 Canada | CAD</SelectItem>
                <SelectItem value="euro">🇩🇪 Germany | EUR</SelectItem>
                <SelectItem value="rub">🇷🇺 Russia | RUB</SelectItem>
                <SelectItem value="usd">🇺🇸 USA | USD</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        {/* End of language and country buttons */}

        <Separator className="mt-[17px]" />

        {/* Navigation bar with icons */}
        <div className="p-2">
          {navbar_links.map((item) => (
            <Link
              key={item.name}
              href={item.link}
              className="flex items-center gap-2 py-3.5 hover:bg-black/5 hover:text-accent-foreground hover:underline"
            >
              <span className="text-sm font-medium">{item.name}</span>
              {item.name === "Bulk Order" && (
                <div className="bg-custom-red ml-3 px-1 text-[10px] font-bold uppercase leading-4 text-white">
                  new
                </div>
              )}
            </Link>
          ))}
        </div>
        {/* End of navigation bar */}
      </DrawerContent>
    </Drawer>
  );
};

export default SideMenu;
