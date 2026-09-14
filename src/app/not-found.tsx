import { Section, SectionHeader } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <Section>
      <SectionHeader eyebrow="404" title="That page isn't here" lede="The address may have changed during our site update. The links below cover what most visitors are looking for." as="h1" />
      <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
        <Button href="/">Home</Button>
        <Button href="/becsys5-controls/" variant="secondary">BECSys5 Controls</Button>
        <Button href="/pulsar-precision-feeders/" variant="secondary">Pulsar Precision</Button>
        <Button href="/contact/" variant="secondary">Contact</Button>
      </div>
    </Section>
  );
}
