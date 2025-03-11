import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Program() {
  return (
    <main className="pt-20">
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl font-bold mb-6">Program Details</h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-3xl">
              Our comprehensive health literacy program is designed to empower immigrant communities
              with the knowledge and skills needed to navigate the healthcare system effectively.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Curriculum Overview</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  <li>• Understanding Medical Terminology</li>
                  <li>• Navigating Healthcare Systems</li>
                  <li>• Patient Rights and Advocacy</li>
                  <li>• Insurance and Payment Systems</li>
                  <li>• Preventive Care and Wellness</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Implementation Strategy</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  <li>• Bilingual Workshop Sessions</li>
                  <li>• One-on-One Mentoring</li>
                  <li>• Interactive Learning Materials</li>
                  <li>• Community Support Networks</li>
                  <li>• Progress Tracking Systems</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </main>
  );
}
