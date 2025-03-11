import { NavigationMenu, NavigationMenuItem, NavigationMenuList, NavigationMenuLink } from "@/components/ui/navigation-menu";
import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";

export function Navigation() {
  const [location] = useLocation();

  return (
    <nav className="w-full bg-white/95 backdrop-blur-sm fixed top-0 z-50 border-b">
      <div className="container mx-auto px-4">
        <NavigationMenu className="py-4">
          <NavigationMenuList className="gap-6">
            <NavigationMenuItem>
              <Link href="/">
                <NavigationMenuLink className={cn(
                  "text-lg hover:text-primary transition-colors",
                  location === "/" ? "font-semibold text-primary" : ""
                )}>
                  Home
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/program">
                <NavigationMenuLink className={cn(
                  "text-lg hover:text-primary transition-colors",
                  location === "/program" ? "font-semibold text-primary" : ""
                )}>
                  Program Details
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/resources">
                <NavigationMenuLink className={cn(
                  "text-lg hover:text-primary transition-colors",
                  location === "/resources" ? "font-semibold text-primary" : ""
                )}>
                  Resources
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/contact">
                <NavigationMenuLink className={cn(
                  "text-lg hover:text-primary transition-colors",
                  location === "/contact" ? "font-semibold text-primary" : ""
                )}>
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