import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from "@/components/ui/navigation-menu";
import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";

export function Navigation() {
  const [location] = useLocation();

  return (
    <nav className="w-full bg-white/95 backdrop-blur-sm fixed top-0 z-50 border-b">
      <div className="container mx-auto px-4">
        <NavigationMenu className="py-4">
          <NavigationMenuList className="gap-6">
            {[
              { href: "/", label: "Home" },
              { href: "/about", label: "About" },
              { href: "/program", label: "Program Details" },
              { href: "/resources", label: "Resources" },
              { href: "/contact", label: "Contact" }
            ].map((item, index) => (
              <NavigationMenuItem key={item.href}>
                <Link href={item.href}>
                  <a
                    className={cn(
                      "nav-link",
                      location === item.href && "active"
                    )}
                    style={{
                      animationDelay: `${index * 0.2}s`,
                      animation: "slideIn 1s ease-in-out forwards"
                    }}
                  >
                    {item.label}
                  </a>
                </Link>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </nav>
  );
}