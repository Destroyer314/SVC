import { Switch, Route } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import { Navigation } from "@/components/Navigation";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Program from "@/pages/Program";
import Resources from "@/pages/Resources";
import Contact from "@/pages/Contact";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/program" component={Program} />
      <Route path="/resources" component={Resources} />
      <Route path="/contact" component={Contact} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Navigation />
      <Router />
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;