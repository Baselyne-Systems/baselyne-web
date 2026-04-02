import { ArrowRight, Database, GitBranch, Cpu, Radio, Box, BarChart3 } from "lucide-react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SEO, physicalAIServiceSchema } from "@/components/SEO";

const challenges = [
  {
    icon: Database,
    title: "Data in four formats, no unified query layer",
    description:
      "RLDS from Open X-Embodiment, LeRobot from HuggingFace, MCAP from your ROS 2 fleet, HDF5 from ALOHA. Each format has its own schema, its own tooling, and its own assumptions about episode boundaries. Finding 'all failed grasps from last month' means writing four separate scripts.",
  },
  {
    icon: Radio,
    title: "Sensor data at different rates with no sync",
    description:
      "Cameras at 30Hz, IMU at 1kHz, force sensors at 500Hz, joint states at 50Hz. Each sensor has its own clock with drift and transmission delay. Naive timestamp matching produces misaligned observation-action pairs that silently degrade policy learning.",
  },
  {
    icon: Box,
    title: "Episode boundaries are best-effort",
    description:
      "RLDS has explicit markers. LeRobot has episode indices. MCAP recordings from the field have no episode markers at all — you're guessing from temporal gaps. Setup and teardown motion leaks into episodes, corrupting demonstrations.",
  },
  {
    icon: BarChart3,
    title: "No way to curate what you train on",
    description:
      "Teams with 10,000 episodes sample randomly. The highest-value data — failures, edge cases, novel states — is systematically underrepresented. Training on everything wastes compute. Training on a random subset wastes the best data.",
  },
];

const capabilities = [
  {
    icon: Database,
    title: "Sensor Data Pipelines",
    description:
      "Multi-format ingestion into Apache Iceberg — RLDS, LeRobot, MCAP, HDF5 into one queryable schema. Episode-centric storage with modality separation. Cross-format queries in milliseconds.",
  },
  {
    icon: GitBranch,
    title: "Training Data Infrastructure",
    description:
      "From data lake to training loop. Curated episode selection, WebDataset shard export, PyTorch DataLoader integration. Support for behavioral cloning, offline RL, and action-chunking architectures.",
  },
  {
    icon: Cpu,
    title: "Fleet Data Management",
    description:
      "Ingestion pipelines for robot fleets generating terabytes of recordings. Per-robot, per-environment, per-task queryability. Provenance tracking from raw recording to trained policy.",
  },
];

export default function PhysicalAI() {
  return (
    <Layout>
      <SEO
        title="Physical AI Data Infrastructure | Baselyne Systems"
        description="Data infrastructure for robotics, autonomous systems, and embodied AI. Sensor data pipelines, episode storage, training data curation — from raw recordings to trained policies."
        keywords="physical AI data infrastructure, robot data pipeline, robotics data lake, autonomous vehicle data, embodied AI infrastructure, sensor data pipeline, robot episode storage, MCAP pipeline, ROS 2 data infrastructure"
        canonical="https://baselynesystems.com/industries/physical-ai"
        structuredData={physicalAIServiceSchema}
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-layer-1 to-layer-2 py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-medium uppercase tracking-wider text-primary">
              Physical AI Infrastructure
            </p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Data infrastructure for robots, autonomous systems, and embodied AI
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Your team has thousands of recordings in mixed formats, no unified query
              layer, and training pipelines held together with custom scripts. We build
              the data infrastructure underneath — from sensor ingestion to training-ready
              datasets.
            </p>
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Button asChild size="lg">
                <a
                  href="https://calendly.com/achyuthsamudrala/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2"
                >
                  Discuss Your Data Architecture
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/blog/robot-data-lake">Read the Case Study</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Challenges */}
      <section className="bg-layer-2 py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-medium uppercase tracking-wider text-primary">
              The Problem
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-foreground sm:text-4xl">
              Every physical AI team builds data infrastructure from scratch
            </h2>
            <p className="mt-4 text-muted-foreground">
              The ML research is cutting-edge. The data infrastructure underneath it is
              custom scripts, ad hoc metadata CSVs, and Jupyter notebooks that break when
              the file layout changes.
            </p>
          </div>
          <div className="mt-16 grid gap-6 sm:grid-cols-2">
            {challenges.map((item) => (
              <Card key={item.title} className="border-border/50 bg-card/50">
                <CardContent className="p-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-destructive/10">
                    <item.icon className="h-5 w-5 text-destructive" />
                  </div>
                  <h3 className="mt-4 font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="bg-layer-1 py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-medium uppercase tracking-wider text-primary">
              What We Build
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-foreground sm:text-4xl">
              Production data infrastructure for physical AI
            </h2>
          </div>
          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {capabilities.map((capability) => (
              <Card key={capability.title} className="border-border/50 bg-card">
                <CardContent className="p-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <capability.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="mt-4 font-semibold text-foreground">{capability.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{capability.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Background */}
      <section className="bg-layer-2 py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-wider text-primary">
              Why Us
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-foreground sm:text-4xl">
              Infrastructure experience applied to physical AI
            </h2>
            <div className="mt-8 space-y-6 text-muted-foreground">
              <p>
                We spent a decade building data infrastructure at Meta and Alphabet —
                petabyte-scale pipelines, systems handling 100M+ QPS, GDPR-compliant
                data platforms. The same infrastructure patterns that power web-scale ML
                apply to physical AI: format normalization, episode-centric storage,
                modality-separated partitioning, and training data export pipelines.
              </p>
              <p>
                The difference is the domain. Sensor data has time-sync problems that
                clickstream data doesn't. Episode boundaries are ambiguous in ways that
                web sessions aren't. Image data is orders of magnitude larger. We've
                spent the last several months going deep on these domain-specific
                challenges — building open-source tools, talking to teams at funded
                physical AI companies, and understanding what the infrastructure layer
                actually needs to support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="bg-layer-1 py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-medium uppercase tracking-wider text-primary">
              Technical Writing
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-foreground sm:text-4xl">
              From our Physical AI blog
            </h2>
          </div>
          <div className="mt-12 mx-auto max-w-3xl">
            <Link
              to="/blog/robot-data-lake"
              className="block rounded-lg border border-border bg-card p-8 transition-colors hover:border-primary/50 hover:bg-accent/50"
            >
              <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                Case Study
              </span>
              <h3 className="mt-4 text-xl font-semibold text-foreground">
                The Robot Data Lake
              </h3>
              <p className="mt-2 text-muted-foreground">
                How we built a format-agnostic data lake for physical AI — ingesting RLDS,
                LeRobot, MCAP, and HDF5 into Apache Iceberg tables, making 4,321 episodes
                across 3 formats queryable via SQL in under 5ms.
              </p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm text-primary">
                Read the case study
                <ArrowRight className="h-3.5 w-3.5" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-layer-3 py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-semibold text-foreground sm:text-4xl">
              Building a physical AI data platform?
            </h2>
            <p className="mt-4 text-muted-foreground">
              We start with a technical conversation about your data architecture — what
              formats you're dealing with, how your training pipelines consume data, and
              where the bottlenecks are. No pitch deck.
            </p>
            <Button asChild size="lg" className="mt-8">
              <a
                href="https://calendly.com/achyuthsamudrala/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2"
              >
                Schedule a Call
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
