import { ArrowRight, Database, Filter, FlaskConical, Rocket, ShieldCheck, Target } from "lucide-react";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SEO } from "@/components/SEO";

type Solution = {
  stage: string;
  duration: string;
  icon: typeof Database;
  title: string;
  audience: string;
  outcome: string;
  build: string[];
  dontDo: string[];
  ctaLabel: string;
};

const entryPoint: Solution = {
  stage: "ENTRY POINT",
  duration: "2–3 weeks",
  icon: Target,
  title: "Iteration Velocity Assessment",
  audience: "For teams who want a sharp outside view before committing to a bigger engagement.",
  outcome:
    "Know where your iteration cycle actually breaks — specific bottlenecks, their cost, and a prioritized path to fixing them.",
  build: [
    "Bottleneck map — where your cycle time is actually going",
    "Cost of each bottleneck (cycle time, engineering hours, GPU waste)",
    "Prioritized recommendations with estimated impact",
    "Scoped follow-on engagement options, if you want them",
  ],
  dontDo: ["Implement fixes in this engagement — diagnostic only"],
  ctaLabel: "Start with an assessment",
};

const solutions: Solution[] = [
  {
    stage: "CAPTURE",
    duration: "6–8 weeks",
    icon: Database,
    title: "Fleet Data Capture",
    audience:
      "For teams that just deployed their first robots and don't know what to do with the data streaming back.",
    outcome:
      "Turn teleop interventions, failures, and routine operations into a queryable dataset your ML team can actually use.",
    build: [
      "Multi-format sensor data ingestion (MCAP, RLDS, LeRobot, HDF5)",
      "Unified schema across your robot fleet",
      "Event tagging for interventions, failures, successes",
      "Episode-centric query interface",
    ],
    dontDo: [
      "Modify your robot's on-device code — your engineers integrate against our ingestion API",
    ],
    ctaLabel: "Discuss data capture",
  },
  {
    stage: "CURATE",
    duration: "4–6 weeks",
    icon: Filter,
    title: "Retrain-Ready Curation",
    audience:
      "For teams with fleet data who realize retraining on everything is infeasible and retraining on random 1% is losing the signal.",
    outcome:
      "Score which episodes matter — failures, edge cases, novel states — and export curated training slices to your fine-tuning workflow.",
    build: [
      "Declarative scoring policies (diversity, outcome, novelty, difficulty)",
      "Curated training set export in your preferred format",
      "Integration with your fine-tuning workflow (Pi-0, OpenVLA, or custom)",
      "Reproducible slice definitions tied to model versions",
    ],
    dontDo: ["Fine-tune the model — your ML engineers run the actual training"],
    ctaLabel: "Discuss curation",
  },
  {
    stage: "EXPERIMENT",
    duration: "6–8 weeks",
    icon: FlaskConical,
    title: "Training Experimentation",
    audience:
      "For teams running multiple training configurations who lose track of which run did what and can't systematically compare them.",
    outcome:
      "Run experiments against your curated data. Compare training approaches head-to-head. Know which wins before you ship.",
    build: [
      "Track every experiment with full context (data slice, config, eval results)",
      "Re-run any past experiment exactly",
      "Compare training approaches head-to-head on the same eval set",
      "Run parameter sweeps without writing orchestration code",
      "Integrate with PyTorch, JAX, or your custom training stack",
    ],
    dontDo: [
      "Write your training loop or build custom architectures",
      "Manage your GPU cluster — uses your existing infrastructure",
    ],
    ctaLabel: "Discuss experimentation",
  },
  {
    stage: "SHIP",
    duration: "6–8 weeks",
    icon: Rocket,
    title: "Ship-Safe Deployment",
    audience:
      "For teams whose retrained model looks better in eval but keeps regressing in production.",
    outcome:
      "Block regressions before they reach the fleet. Automated comparison gates, canary deployment, and rollback on regression.",
    build: [
      "Config-driven eval pipeline with statistical comparison",
      "Regression suite that grows from production failures",
      "Canary deployment with per-robot version management",
      "Automatic rollback on eval regression",
    ],
    dontDo: [
      "Build simulation environments from scratch — we integrate with your existing sim or offline eval on real data",
    ],
    ctaLabel: "Discuss deployment gates",
  },
  {
    stage: "TRACE",
    duration: "6–10 weeks",
    icon: ShieldCheck,
    title: "Audit-Ready Lineage",
    audience:
      'For teams whose enterprise customers, compliance teams, or regulators ask "why did the robot do that?"',
    outcome:
      "End-to-end trace from sensor input → training data → model version → deployment → physical action. Queryable.",
    build: [
      "Immutable lineage graph across your training pipeline",
      "Decision-to-data traceability",
      "Evidence export formatted for audit use",
      "Integration with existing logging and deployment systems",
    ],
    dontDo: [
      "Certify compliance with EU AI Act or ISO 42001 — we build the evidence; your compliance team certifies",
    ],
    ctaLabel: "Discuss audit lineage",
  },
];

const journeyStages = ["Capture", "Curate", "Experiment", "Ship", "Trace"];

function SolutionCard({ solution, highlighted = false }: { solution: Solution; highlighted?: boolean }) {
  const Icon = solution.icon;
  return (
    <Card className={`h-full ${highlighted ? "border-primary/40 bg-primary/5" : "border-border/50 bg-card"}`}>
      <CardContent className="flex h-full flex-col gap-5 p-6">
        <div className="flex items-center justify-between text-xs font-medium uppercase tracking-wider">
          <span className="text-primary">{solution.stage}</span>
          <span className="text-muted-foreground">{solution.duration}</span>
        </div>
        <div className="flex items-start gap-4">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
            <Icon className="h-5 w-5 text-primary" />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-foreground">{solution.title}</h3>
            <p className="mt-2 text-sm italic text-muted-foreground">{solution.audience}</p>
          </div>
        </div>
        <p className="text-sm font-medium text-foreground">{solution.outcome}</p>
        <div>
          <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">What we build</p>
          <ul className="mt-2 space-y-1.5">
            {solution.build.map((item) => (
              <li key={item} className="flex gap-2 text-sm text-muted-foreground">
                <span className="text-primary">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">What we don't do</p>
          <ul className="mt-2 space-y-1.5">
            {solution.dontDo.map((item) => (
              <li key={item} className="flex gap-2 text-sm text-muted-foreground">
                <span className="text-muted-foreground/60">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-auto">
          <Button asChild className="w-fit">
            <a
              href="https://calendly.com/achyuthsamudrala/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2"
            >
              {solution.ctaLabel}
              <ArrowRight className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

export default function Solutions() {
  return (
    <Layout>
      <SEO
        title="Solutions | Baselyne Systems"
        description="Fixed-scope engagements for physical AI teams — capture, curate, experiment, ship, and trace. Each stage is a standalone engagement."
        keywords="physical AI consulting engagements, robot data infrastructure, training pipeline consulting, eval gates, fleet deployment, audit lineage, iteration velocity"
        canonical="https://baselynesystems.com/solutions"
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-layer-1 to-layer-2 py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-medium uppercase tracking-wider text-primary">Solutions</p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Where you are, what we build
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Fixed-scope engagements for the physical AI iteration loop. Each stage is a standalone engagement — enter at the one that matches your current bottleneck, not necessarily the beginning.
            </p>
            <Button asChild size="lg" className="mt-10">
              <a
                href="https://calendly.com/achyuthsamudrala/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2"
              >
                Book a scoping call
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Journey map */}
      <section className="border-y border-border/50 bg-layer-2 py-12">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <p className="text-center text-xs font-medium uppercase tracking-wider text-muted-foreground">
              Typical flow
            </p>
            <div className="mt-4 flex items-center justify-center gap-3 overflow-x-auto pb-2 lg:gap-6">
              {journeyStages.map((stage, i) => (
                <div key={stage} className="flex flex-shrink-0 items-center gap-3 lg:gap-6">
                  <span className="text-sm font-semibold uppercase tracking-wider text-foreground">{stage}</span>
                  {i < journeyStages.length - 1 && (
                    <ArrowRight className="h-4 w-4 shrink-0 text-muted-foreground/50" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Entry point card */}
      <section className="bg-layer-1 pt-16 lg:pt-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-2xl">
            <p className="text-center text-sm font-medium uppercase tracking-wider text-primary">
              Start here if you're not sure where to start
            </p>
            <div className="mt-6">
              <SolutionCard solution={entryPoint} highlighted />
            </div>
          </div>
        </div>
      </section>

      {/* Solutions grid */}
      <section className="bg-layer-1 py-16 lg:py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="flex flex-wrap justify-center gap-6">
              {solutions.map((solution) => (
                <div key={solution.title} className="w-full md:w-[calc(50%-12px)]">
                  <SolutionCard solution={solution} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-layer-2 py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-semibold text-foreground sm:text-3xl">
              Don't see the right fit?
            </h2>
            <p className="mt-4 text-muted-foreground">
              Some teams aren't sure which stage applies. Others have a specific problem that doesn't map cleanly to these five. Either way — book a 30-minute scoping call. We'll walk through your pipeline and scope whatever makes sense. No obligation.
            </p>
            <Button asChild size="lg" className="mt-8">
              <a
                href="https://calendly.com/achyuthsamudrala/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2"
              >
                Book a scoping call
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
