import { ArrowRight, AlertTriangle, CheckCircle2, Database, Layers, Cpu, TrendingDown, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Layout } from "@/components/Layout";
import { SEO, organizationSchema, professionalServiceSchema } from "@/components/SEO";
import { TextSlider } from "@/components/TextSlider";

const heroTaglines = [
  "Ship AI to production. Cut infrastructure costs in half.",
  "10-100x faster queries. Sub-minute data freshness.",
  "Deploy models in hours, not weeks.",
  "From raw sensor data to trained robot policy. One pipeline.",
];

const failurePoints = [
  {
    icon: Database,
    title: "Data platforms not AI-ready",
    description: "Your Spark jobs write daily Parquet snapshots to S3. Now your ML team needs feature freshness under 15 minutes and your vector store is stale by hours. The batch architecture that works for dashboards is the bottleneck for everything AI.",
  },
  {
    icon: Clock,
    title: "AI stuck in prototypes",
    description: "The model works in a Jupyter notebook with pickle files and hardcoded paths. There's no serving infrastructure, no evaluation pipeline, and no way to A/B test. The gap between 'works on my machine' and production is all infrastructure.",
  },
  {
    icon: TrendingDown,
    title: "Runaway AI costs",
    description: "GPUs sit idle between training runs at 30% utilization. Inference instances are oversized because nobody profiled the workload. There's no per-request cost tracking, so you can't tell which model or use case is driving the bill.",
  },
  {
    icon: AlertTriangle,
    title: "Silent failures",
    description: "Model accuracy degraded 15% over two months and nobody noticed because the only monitoring is 'is the endpoint up.' No tracking for prediction distribution shift, latency percentiles, or input data quality.",
  },
];

const outcomes = [
  {
    icon: Layers,
    title: "Data-to-model cycle in days, not months",
    description: "Unified data lakes that make terabytes of multi-format recordings queryable via SQL. Curated training exports in minutes. Data lineage tracing every model back to its exact training set.",
  },
  {
    icon: Cpu,
    title: "Models deployed with evidence, not hope",
    description: "Evaluation gates that block regressions before deployment. Automated comparison across model versions on the same versioned data. Registry with full audit trail from training data to production.",
  },
  {
    icon: Database,
    title: "Infrastructure that works without internet",
    description: "Edge-first data pipelines for environments with limited or no connectivity. Priority-based sync that preserves failure data while dropping routine recordings. Offline-first by design.",
  },
  {
    icon: CheckCircle2,
    title: "Your team owns it on day one",
    description: "Fixed-outcome engagements with defined deliverables. We build alongside your engineers, document everything, and hand over systems your team can operate and extend independently.",
  },
];

export default function Home() {
  const combinedSchema = {
    "@context": "https://schema.org",
    "@graph": [organizationSchema, professionalServiceSchema],
  };

  return (
    <Layout>
      <SEO
        title="Physical AI & ML Infrastructure | Fixed-Outcome Engagements | Baselyne Systems"
        description="AI infrastructure, data platforms, and MLOps consulting. Production data pipelines, evaluation-gated deployment, GPU cost optimization, and physical AI data infrastructure."
        keywords="AI infrastructure consulting, MLOps consulting, data infrastructure consulting, reduce AI infrastructure costs, GPU cost optimization, model deployment automation, AI prototype to production, ML production monitoring, data pipeline latency reduction"
        canonical="https://baselynesystems.com"
        structuredData={combinedSchema}
      />
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-layer-1 to-layer-2">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30" />
        <div className="container relative mx-auto px-4 py-24 lg:px-8 lg:py-32">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              <TextSlider
                texts={heroTaglines}
                interval={4000}
              />
            </h1>
            <p className="mt-6 text-lg text-muted-foreground sm:text-xl">
              We build the infrastructure that moves AI from prototype to production — data pipelines, deployment gates, cost controls, and the systems that keep models running reliably.
            </p>
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Button asChild size="lg">
                <a
                  href="https://calendly.com/achyuthsamudrala/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2"
                >
                  Schedule a Conversation
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/services">View Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="bg-layer-2 py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-medium uppercase tracking-wider text-primary">Common Failure Points</p>
            <h2 className="mt-3 text-3xl font-semibold text-foreground sm:text-4xl">
              Where AI projects get stuck
            </h2>
            <p className="mt-4 text-muted-foreground">
              The infrastructure gap is where AI projects stall.
            </p>
          </div>
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {failurePoints.map((item) => (
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

      {/* Outcomes Section */}
      <section className="bg-layer-1 py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-medium uppercase tracking-wider text-primary">What We Deliver</p>
            <h2 className="mt-3 text-3xl font-semibold text-foreground sm:text-4xl">
              Hard infrastructure problems, measurable outcomes
            </h2>
            <p className="mt-4 text-muted-foreground">
              We take on the engineering challenges that don't have off-the-shelf solutions — and deliver defined results in fixed timelines.
            </p>
          </div>
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {outcomes.map((item) => (
              <Card key={item.title} className="border-primary/10 bg-gradient-to-b from-card to-accent/20">
                <CardContent className="p-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="mt-4 font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="bg-layer-3 py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <p className="text-sm font-medium uppercase tracking-wider text-primary">Our Services</p>
              <h2 className="mt-3 text-3xl font-semibold text-foreground sm:text-4xl">
                Fixed-outcome engagements across the AI stack
              </h2>
              <p className="mt-4 text-muted-foreground">
                Every engagement is scoped around a specific result. We agree on the outcome, the timeline, and the deliverables upfront.
              </p>
              <Button asChild className="mt-8">
                <Link to="/services" className="inline-flex items-center gap-2">
                  Explore Services
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="space-y-4">
              <Link to="/physical-ai" className="block rounded-lg border border-primary/30 bg-card p-6 transition-colors hover:border-primary/50 hover:bg-accent/50">
                <h3 className="font-semibold text-foreground">Physical AI</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Sensor data pipelines, training infrastructure, evaluation gates, and edge data management for robotics, autonomous systems, and embodied AI.
                </p>
              </Link>
              <Link to="/services/data-infrastructure-consulting" className="block rounded-lg border border-border bg-card p-6 transition-colors hover:border-primary/50 hover:bg-accent/50">
                <h3 className="font-semibold text-foreground">Data Infrastructure</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Iceberg-based lakehouses, CDC pipelines for sub-minute freshness, and governance that extends through embeddings and model training.
                </p>
              </Link>
              <Link to="/services/mlops-consulting" className="block rounded-lg border border-border bg-card p-6 transition-colors hover:border-primary/50 hover:bg-accent/50">
                <h3 className="font-semibold text-foreground">MLOps & Model Platforms</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Evaluation-gated CI/CD, vLLM-based serving, and prediction distribution monitoring that catches drift before users do.
                </p>
              </Link>
              <Link to="/services/ai-infrastructure-consulting" className="block rounded-lg border border-border bg-card p-6 transition-colors hover:border-primary/50 hover:bg-accent/50">
                <h3 className="font-semibold text-foreground">AI Infrastructure</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  GPU orchestration with fractional allocation, spot-based training with checkpointing, and per-model cost attribution.
                </p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Approach Preview */}
      <section className="bg-layer-1 py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-medium uppercase tracking-wider text-primary">How We Work</p>
            <h2 className="mt-3 text-3xl font-semibold text-foreground sm:text-4xl">
              Engineering-led
            </h2>
            <p className="mt-4 text-muted-foreground">
              Every engagement starts with understanding your system. We assess your current state, identify the critical path, and focus on what matters for production readiness.
            </p>
            <Button asChild variant="outline" className="mt-8">
              <Link to="/approach" className="inline-flex items-center gap-2">
                Learn About Our Approach
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}

