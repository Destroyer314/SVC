import { NavigationMenu, NavigationMenuItem, NavigationMenuList, NavigationMenuLink } from "@/components/ui/navigation-menu";
import { Link } from "wouter";

export function Navigation() {
  return (
    <nav className="w-full bg-white/95 backdrop-blur-sm fixed top-0 z-50 border-b">
      <div className="container mx-auto px-4">
        <NavigationMenu className="py-4">
          <NavigationMenuList className="gap-6">
            <NavigationMenuItem>
              <Link href="/">
                <NavigationMenuLink className="text-lg font-semibold hover:text-primary transition-colors">
                  Home
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/program">
                <NavigationMenuLink className="text-lg hover:text-primary transition-colors">
                  Program Details
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/resources">
                <NavigationMenuLink className="text-lg hover:text-primary transition-colors">
                  Resources
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/contact">
                <NavigationMenuLink className="text-lg hover:text-primary transition-colors">
                  Contact
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </nav>
  );
}
