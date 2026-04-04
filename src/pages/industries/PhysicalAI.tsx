import { ArrowRight, Database, GitBranch, Cpu, Radio, Shield, BarChart3, Wifi, AlertTriangle, FileCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SEO, physicalAIServiceSchema } from "@/components/SEO";

const challenges = [
  {
    icon: Database,
    title: "Everything is custom-built because nothing fits",
    description:
      "Every team we've spoken to — from warehouse fleets to construction robots to autonomous kitchens — has built core data infrastructure in-house. Recording catalogs, format converters, training pipelines, evaluation scripts. Not because custom is better, but because nothing on the market fits the robotics workflow.",
  },
  {
    icon: Wifi,
    title: "Getting data off the robot is the real bottleneck",
    description:
      "Construction sites have no internet. Warehouse robots saturate 5Gbps pipes. A 15-second stereo camera clip is 3GB. Teams store 1% of data through random sampling — and systematically lose the most valuable recordings: failures, edge cases, and rare states.",
  },
  {
    icon: AlertTriangle,
    title: "Failure data is the most valuable and hardest to capture",
    description:
      "When a robot fails, the last 5 minutes of sensor data is worth more than the last 5 hours of routine operation. But failure recording is ad hoc — manual triggers, inconsistent formats, no structured metadata about what went wrong or why. The highest-value training data is the least well-managed.",
  },
  {
    icon: BarChart3,
    title: "No systematic evaluation or regression testing",
    description:
      "Evaluating a policy means deploying it on one robot, manually running 20-50 trials, watching the video, and counting successes. Fleet versioning is tracked in spreadsheets. There's no CI/CD for policies — no way to automatically block a regression before it reaches a robot.",
  },
];

const capabilities = [
  {
    icon: Database,
    title: "Sensor Data Lake",
    description:
      "Multi-format ingestion into Apache Iceberg — RLDS, LeRobot, MCAP, HDF5 normalized into one episode-centric, queryable schema. Cross-format queries in milliseconds. Modality-separated storage so joint-state queries never scan image data.",
  },
  {
    icon: GitBranch,
    title: "Training Data Pipeline",
    description:
      "From data lake to training loop. Curated episode selection by task, outcome, robot, and environment. Export to any training format your team uses. The bridge between 'data exists' and 'data is ready to train on.'",
  },
  {
    icon: Shield,
    title: "Evaluation & Policy Gating",
    description:
      "Automated evaluation pipelines that gate deployment. Regression test suites that grow from production failures. Statistical comparison across policy versions. The infrastructure to answer 'is this policy safe to deploy?' with evidence, not intuition.",
  },
  {
    icon: FileCheck,
    title: "Compliance & Audit Trail",
    description:
      "Immutable data lineage from sensor input to model decision to physical action. When an auditor asks why the robot made that choice, you can trace it to the exact model version, training data, and sensor state. Built for EU AI Act, ISO 42001, and safety certification.",
  },
  {
    icon: Radio,
    title: "Edge Data Management",
    description:
      "Intelligent on-device data filtering and prioritized sync for robots with limited connectivity. Failure data uploaded first, routine operations downsampled. Offline-first architecture that works on construction sites, farms, and warehouses.",
  },
  {
    icon: Cpu,
    title: "Fleet Operations",
    description:
      "Per-robot policy versioning, deployment monitoring, and performance tracking. Which policy version is running on which robot, when it was last updated, and how it's performing. Not a spreadsheet — a system.",
  },
  {
    icon: BarChart3,
    title: "Failure-to-Improvement Loop",
    description:
      "The closed-loop pipeline from production failure to improved policy: failure detection, intervention recording, structured data capture, retraining set curation, evaluation, and redeployment. Compressing this loop from weeks to hours.",
  },
];

export default function PhysicalAI() {
  return (
    <Layout>
      <SEO
        title="Physical AI Data Infrastructure | Baselyne Systems"
        description="Data infrastructure for robotics, autonomous systems, and embodied AI. Sensor data pipelines, evaluation, fleet operations, and the failure-to-improvement loop — from raw recordings to deployed policies."
        keywords="physical AI data infrastructure, robot data pipeline, robotics data lake, robot evaluation infrastructure, robot fleet management, autonomous vehicle data, embodied AI infrastructure, sensor data pipeline, robot episode storage, MCAP pipeline, ROS 2 data infrastructure, robot policy evaluation"
        canonical="https://baselynesystems.com/physical-ai"
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
              The infrastructure layer for physical AI is missing
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Models are getting better. Deployment, evaluation, and data management
              are getting harder. We build the infrastructure underneath — from sensor
              data pipelines to evaluation gates to the failure-to-improvement loop
              that closes the gap between 99.9% and 99.999%.
            </p>
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Button asChild size="lg">
                <a
                  href="https://calendly.com/achyuthsamudrala/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2"
                >
                  Discuss Your Infrastructure
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

      {/* Thesis */}
      <section className="bg-layer-2 py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-wider text-primary">
              The Shift
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-foreground sm:text-4xl">
              Better models make engineering harder, not easier
            </h2>
            <div className="mt-8 space-y-6 text-muted-foreground">
              <p>
                VLAs can follow language instructions across tasks. Diffusion policies
                handle multi-modal action distributions. Open-source foundation models are
                approaching proprietary ones. The models are getting good enough. The
                bottleneck has shifted.
              </p>
              <p>
                Larger models need inference infrastructure — distillation, quantization,
                dual-system runtimes. More general-purpose models need evaluation across
                open-ended task spaces. More training data needs pipelines that scale to
                terabytes from robot fleets. Wider deployment needs operations: monitoring,
                failure detection, rollback, versioning.
              </p>
              <p>
                As models commoditize, the value shifts from "who has the best model" to
                "who can deploy, monitor, and continuously improve it reliably." This is
                the same pattern from every previous ML wave — and it's where we operate.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Challenges */}
      <section className="bg-layer-1 py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-medium uppercase tracking-wider text-primary">
              What We've Heard
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-foreground sm:text-4xl">
              The same problems from every team we've talked to
            </h2>
            <p className="mt-4 text-muted-foreground">
              From warehouse fleets to construction robots to autonomous kitchens — the
              infrastructure pain is consistent.
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
      <section className="bg-layer-2 py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-medium uppercase tracking-wider text-primary">
              What We Build
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-foreground sm:text-4xl">
              Infrastructure for the full physical AI lifecycle
            </h2>
          </div>
          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
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
      <section className="bg-layer-1 py-20 lg:py-28">
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
                petabyte-scale pipelines, training data systems, model serving at 100M+ QPS.
                The same patterns apply to physical AI: format normalization, episode-centric
                storage, evaluation-gated deployment, and closed-loop data pipelines.
              </p>
              <p>
                The difference is the domain. We've spent the last several months going
                deep — building open-source tools for robot data, talking to teams at
                companies deploying physical AI from warehouse floors to construction sites,
                and understanding the domain-specific challenges that make this infrastructure
                different from web-scale ML.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="bg-layer-2 py-20 lg:py-28">
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
                LeRobot, MCAP, and HDF5 into Apache Iceberg tables, making 5,121 episodes
                across 3 formats and 3 robot types queryable via SQL.
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
              Building physical AI infrastructure?
            </h2>
            <p className="mt-4 text-muted-foreground">
              We start with a technical conversation about your data architecture,
              evaluation pipeline, and deployment workflow. No pitch deck — just a
              conversation about what's not working and what would.
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
