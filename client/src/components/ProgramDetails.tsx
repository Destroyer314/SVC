import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Book, Users, Building2, ChartBar } from "lucide-react";

const features = [
  {
    icon: Book,
    title: "Health Literacy Education",
    description: "Comprehensive multilingual workshops covering essential healthcare topics and terminology."
  },
  {
    icon: Users,
    title: "Patient Advocacy",
    description: "Training on effectively communicating with healthcare providers and understanding patient rights."
  },
  {
    icon: Building2,
    title: "System Navigation",
    description: "Guidance on navigating healthcare systems, insurance, and appointment scheduling."
  },
  {
    icon: ChartBar,
    title: "Measurable Impact",
    description: "Track progress and outcomes through our comprehensive monitoring system."
  }
];

export function ProgramDetails() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Program Components</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our comprehensive approach ensures that participants gain the knowledge and confidence 
            needed to make informed healthcare decisions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardHeader>
                  <feature.icon className="h-10 w-10 text-primary mb-4" />
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
