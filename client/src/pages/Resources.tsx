import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { FileText, Video, Headphones, Globe, Book, Users, Building2, ChartBar } from "lucide-react";

const plannedResources = [
  {
    icon: FileText,
    title: "Multilingual Health Guides",
    description: "Coming soon: Comprehensive guides covering essential healthcare topics in multiple languages.",
    status: "In Development"
  },
  {
    icon: Video,
    title: "Interactive Video Series",
    description: "Upcoming: Visual tutorials on navigating healthcare systems and understanding medical procedures.",
    status: "Planning"
  },
  {
    icon: Book,
    title: "Healthcare Dictionary",
    description: "Future resource: Simplified explanations of medical terms in multiple languages.",
    status: "Planning"
  },
  {
    icon: Users,
    title: "Community Forum",
    description: "Planned feature: Connect with others and share experiences in a moderated environment.",
    status: "Upcoming"
  },
  {
    icon: Building2,
    title: "Provider Directory",
    description: "In progress: Curated list of healthcare providers with language support information.",
    status: "In Development"
  },
  {
    icon: ChartBar,
    title: "Progress Tracking Tools",
    description: "Future feature: Track your health literacy journey and set learning goals.",
    status: "Planning"
  }
];

export default function Resources() {
  return (
    <main>
      <section className="pt-20 py-16 bg-primary/5">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl font-bold mb-6">Upcoming Resources</h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-3xl">
              We are actively developing a comprehensive suite of health literacy resources. 
              Here's what you can look forward to in our upcoming releases.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {plannedResources.map((resource, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <resource.icon className="h-8 w-8 text-primary" />
                      <span className="text-sm font-medium text-primary/80">
                        {resource.status}
                      </span>
                    </div>
                    <CardTitle>{resource.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{resource.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}