import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, Users2, Target, Shield } from "lucide-react";

const implementationDetails = [
  {
    icon: Building2,
    title: "Primary Partnership",
    description: "Collaboration with Camino Health Center, a trusted bilingual clinic serving the greater Charlotte area, providing infrastructure and medical expertise."
  },
  {
    icon: Users2,
    title: "Community Integration",
    description: "Partnership with UNC Charlotte Sustainable Development Club for volunteer recruitment, fundraising, and community engagement."
  },
  {
    icon: Target,
    title: "ESL Integration",
    description: "Working with local ESL programs to incorporate health literacy into existing educational frameworks."
  },
  {
    icon: Shield,
    title: "Professional Oversight",
    description: "Guided by healthcare professionals and faculty members at Camino Health to ensure medical accuracy and relevance."
  }
];

export default function About() {
  return (
    <main>
      <section className="pt-20 py-16 bg-primary/5">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl font-bold mb-6">About Our Initiative</h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
              Our health literacy program addresses critical gaps in healthcare access for immigrant 
              populations through strategic partnerships and community-centered approaches.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardHeader>
                <CardTitle>Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  To empower immigrant communities in the Charlotte area by providing culturally relevant, 
                  accessible education that enables individuals to navigate the healthcare system effectively, 
                  understand medical terminology, and advocate for their health needs.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Creating a future where language and cultural barriers no longer prevent individuals 
                  from accessing quality healthcare, fostering healthier and more resilient communities 
                  across North Carolina.
                </p>
              </CardContent>
            </Card>
          </div>

          <h2 className="text-2xl font-bold mb-6">Implementation Strategy</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {implementationDetails.map((detail, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-[280px] flex flex-col">
                  <CardHeader className="flex-none">
                    <detail.icon className="h-10 w-10 text-primary mb-4" />
                    <CardTitle className="text-xl">{detail.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow flex items-center">
                    <p className="text-muted-foreground">{detail.description}</p>
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
