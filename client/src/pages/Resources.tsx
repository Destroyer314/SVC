import { ResourceDownload } from "@/components/ResourceDownload";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { FileText, Video, Headphones, Globe } from "lucide-react";

const resourceCategories = [
  {
    icon: FileText,
    title: "Written Guides",
    description: "Comprehensive PDF guides covering various healthcare topics in multiple languages."
  },
  {
    icon: Video,
    title: "Video Tutorials",
    description: "Step-by-step video guides for navigating healthcare systems and processes."
  },
  {
    icon: Headphones,
    title: "Audio Resources",
    description: "Podcast-style educational content for learning on the go."
  },
  {
    icon: Globe,
    title: "Translation Tools",
    description: "Medical terminology translation guides and language assistance resources."
  }
];

export default function Resources() {
  return (
    <main className="pt-20">
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl font-bold mb-6">Resources</h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-3xl">
              Access our comprehensive collection of health literacy materials, educational resources,
              and program documentation. All resources are available in multiple languages and formats
              to ensure accessibility for all community members.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {resourceCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card>
                  <CardContent className="pt-6">
                    <category.icon className="h-8 w-8 text-primary mb-4" />
                    <h3 className="text-lg font-semibold mb-2">{category.title}</h3>
                    <p className="text-muted-foreground">{category.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ResourceDownload />
    </main>
  );
}