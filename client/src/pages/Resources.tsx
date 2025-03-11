import { ResourceDownload } from "@/components/ResourceDownload";

export default function Resources() {
  return (
    <main className="pt-20">
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-6">Resources</h1>
          <p className="text-lg text-muted-foreground mb-8 max-w-3xl">
            Access our comprehensive collection of health literacy materials, educational resources,
            and program documentation.
          </p>
        </div>
      </section>
      <ResourceDownload />
    </main>
  );
}
