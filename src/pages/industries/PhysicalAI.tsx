import { ArrowRight, Cpu, Database, GitBranch, Radio, Shield, BarChart3, Wifi, AlertTriangle, FileCheck } from "lucide-react";
import { PHYSICAL_AI_MODE } from "@/config";
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
      "Every team we've spoken to — from warehouse automation to construction sites to autonomous kitchens — has built core data infrastructure in-house. Recording catalogs, format converters, training pipelines, evaluation scripts. Not because custom is better, but because nothing on the market fits the physical AI workflow.",
  },
  {
    icon: Wifi,
    title: "Getting data from the physical world is the real bottleneck",
    description:
      "Construction sites have no internet. Warehouse systems saturate 5Gbps pipes. A 15-second stereo camera clip is 3GB. Teams store 1% of data through random sampling — and systematically lose the most valuable recordings: failures, edge cases, and rare states.",
  },
  {
    icon: AlertTriangle,
    title: "Failure data is the most valuable and hardest to capture",
    description:
      "When an autonomous system fails, the last 5 minutes of sensor data is worth more than the last 5 hours of routine operation. But failure recording is ad hoc — manual triggers, inconsistent formats, no structured metadata about what went wrong or why. The highest-value training data is the least well-managed.",
  },
  {
    icon: BarChart3,
    title: "No systematic evaluation or regression testing",
    description:
      "Evaluating a model means manually running 20-50 trials, watching the video, and counting successes. Versioning is tracked in spreadsheets. There's no CI/CD for physical AI — no way to automatically block a regression before it reaches deployment.",
  },
  {
    icon: GitBranch,
    title: "Training runs can't be traced back to their data",
    description:
      "When a new policy performs worse than the last one, the first question is 'what changed?' Nobody can answer it. The model was trained in a notebook, the data was a folder on someone's machine, and there's no record of which episodes produced which checkpoint. Training history is stored in DVC or not at all.",
  },
  {
    icon: Cpu,
    title: "Fleet deployment is duct tape and spreadsheets",
    description:
      "Which model version is running on which robot? When was it last updated? How is it performing compared to the others? At one of the most advanced deployed fleets in Europe, the answer was an Excel spreadsheet. Inference latency varies by hardware, model updates require downtime, and rollback means SSH-ing into each machine.",
  },
];

const capabilities = [
  {
    icon: Database,
    title: "Sensor Data Lake",
    description:
      "Multi-format ingestion into Apache Iceberg — RLDS, LeRobot, MCAP, HDF5 normalized into one queryable schema. Cross-format SQL queries in milliseconds. Curate by task, outcome, source, and environment. Export to any training format.",
  },
  {
    icon: Shield,
    title: "Evaluation & Policy Gating",
    description:
      "Automated evaluation pipelines that gate deployment. Regression test suites that grow from production failures. Statistical comparison across model versions. Blocks a regression before it reaches deployment.",
  },
  {
    icon: FileCheck,
    title: "Compliance & Audit Trail",
    description:
      "Immutable data lineage from sensor input to model decision to physical action. When an auditor asks why the system made that choice, you can trace it to the exact model version, training data, and sensor state. Built for EU AI Act, ISO 42001, and safety certification.",
  },
  {
    icon: GitBranch,
    title: "Training Infrastructure",
    description:
      "Data lineage tracing every model to its exact training data. Experiment comparison across architectures on the same versioned dataset. Model registry with eval results and reproducibility records. The infrastructure to answer 'what changed between v2 and v3.'",
  },
  {
    icon: Radio,
    title: "Edge Data Management",
    description:
      "Intelligent on-device data filtering and prioritized sync for systems with limited connectivity. Failure data uploaded first, routine operations downsampled. Offline-first architecture that works in disconnected and bandwidth-constrained environments.",
  },
  {
    icon: Cpu,
    title: "Fleet Deployment & Inference",
    description:
      "Per-system model versioning, deployment monitoring, and performance tracking. Inference optimization for edge hardware. Model updates without downtime, instant rollback when something goes wrong. A system, not a spreadsheet.",
  },
];

export default function PhysicalAI() {
  return (
    <Layout>
      <SEO
        title="Physical AI Infrastructure | Baselyne Systems"
        description="Data infrastructure for physical AI — robotics, autonomous systems, embodied agents, and world models. Sensor data pipelines, training infrastructure, evaluation gates, and edge data management."
        keywords="physical AI infrastructure, embodied AI infrastructure, physical AI consulting, sensor data pipeline, training data lineage, model evaluation, edge inference, GPU optimization, fixed-outcome AI engagements, robot data lake, autonomous systems data"
        canonical="https://baselynesystems.com/physical-ai"
        structuredData={physicalAIServiceSchema}
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-layer-1 to-layer-2 py-28 lg:py-40">
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
              are getting harder. We build the infrastructure underneath — sensor
              data pipelines, training systems, evaluation gates, and the data
              layer that connects the physical world to model development.
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
                <Link to="/blog">See Our Work</Link>
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
              Better models create more engineering problems
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
                terabytes from fleets and simulation. Wider deployment needs operations: monitoring,
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
              From warehouse automation to autonomous vehicles to embodied AI research — the
              infrastructure pain is consistent.
            </p>
          </div>
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
                deep — building tools for physical AI data, talking to teams across
                robotics, autonomous systems, and embodied AI, and understanding the
                domain-specific challenges that make this infrastructure different from
                web-scale ML.
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
          <div className="mt-12 mx-auto max-w-3xl space-y-6">
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
                A format-agnostic data lake for physical AI — ingesting RLDS, LeRobot,
                MCAP, and HDF5 into Apache Iceberg tables, making 5,121 episodes across
                3 formats and 3 robot types queryable via SQL.
              </p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm text-primary">
                Read the case study
                <ArrowRight className="h-3.5 w-3.5" />
              </span>
            </Link>
            <Link
              to="/blog/edge-sync"
              className="block rounded-lg border border-border bg-card p-8 transition-colors hover:border-primary/50 hover:bg-accent/50"
            >
              <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                Case Study
              </span>
              <h3 className="mt-4 text-xl font-semibold text-foreground">
                Edge Sync: Offline-First Data Sync for Field Robots
              </h3>
              <p className="mt-2 text-muted-foreground">
                100% failure data survival while dropping half of all episodes — priority
                scoring, bounded buffer eviction, and resumable upload over intermittent
                connectivity.
              </p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm text-primary">
                Read the case study
                <ArrowRight className="h-3.5 w-3.5" />
              </span>
            </Link>
            <Link
              to="/blog/training-pipeline"
              className="block rounded-lg border border-border bg-card p-8 transition-colors hover:border-primary/50 hover:bg-accent/50"
            >
              <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                Case Study
              </span>
              <h3 className="mt-4 text-xl font-semibold text-foreground">
                MLOps for Robot Policies
              </h3>
              <p className="mt-2 text-muted-foreground">
                Data lineage, experiment comparison, and model registry for physical AI —
                3 policy architectures compared on the same versioned dataset with full
                reproducibility records.
              </p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm text-primary">
                Read the case study
                <ArrowRight className="h-3.5 w-3.5" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA — hidden in physical AI mode since footer has one */}
      {!PHYSICAL_AI_MODE && <section className="bg-layer-3 py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-semibold text-foreground sm:text-4xl">
              Building physical AI infrastructure?
            </h2>
            <p className="mt-4 text-muted-foreground">
              Typical engagements run 6-12 weeks with defined deliverables. Most
              start with a 2-week architecture review of your data pipeline,
              training workflow, and deployment process.
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
      </section>}
    </Layout>
  );
}
