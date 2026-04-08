import { ArrowRight, Building2, Database, Linkedin, Shield, Users, Zap } from "lucide-react";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SEO, organizationSchema } from "@/components/SEO";

const experience = [
  {
    icon: Database,
    metric: "Petabyte-scale",
    title: "Data platforms",
    description: "Designed and operated data infrastructure handling petabytes of data across distributed systems.",
  },
  {
    icon: Zap,
    metric: "100M+ QPS",
    title: "High-throughput systems",
    description: "Built and maintained systems serving hundreds of millions of queries per second at Meta.",
  },
  {
    icon: Shield,
    metric: "GDPR compliance",
    title: "Regulatory readiness",
    description: "Led data platform work for GDPR readiness and compliance at Meta, handling complex data governance requirements.",
  },
  {
    icon: Building2,
    metric: "Nearly a decade",
    title: "Engineering depth",
    description: "Infrastructure experience including six years at Meta and Alphabet, building systems that serve billions of users.",
  },
];

export default function About() {
  return (
    <Layout>
      <SEO
        title="About Baselyne Systems | Physical AI & Data Infrastructure"
        description="Founder-led physical AI and ML infrastructure firm. Fixed-outcome engagements delivered by an engineer with a decade at Meta and Alphabet."
        keywords="AI infrastructure consulting firm, MLOps consultants, data engineering experts, ML platform consulting, machine learning infrastructure company"
        canonical="https://baselynesystems.com/about"
        structuredData={organizationSchema}
      />
      {/* Hero */}
      <section className="bg-gradient-to-b from-layer-1 to-layer-2 py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              About Baselyne Systems
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              A founder-led infrastructure firm focused on physical AI and ML systems. We take on hard engineering problems and deliver defined outcomes in fixed timelines.
            </p>
          </div>
        </div>
      </section>

      {/* Background */}
      <section className="bg-layer-1 py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-wider text-primary">
              Background
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-foreground sm:text-4xl">
              Built at scale, delivered at your scale
            </h2>
            
            <div className="mt-8 space-y-6 text-muted-foreground">
              <p>
                Baselyne Systems takes on infrastructure problems that don't have off-the-shelf solutions. We scope every engagement around a specific, measurable outcome — reducing data-to-model cycle time, scaling training pipelines, building evaluation infrastructure — and deliver it in a fixed timeline at a fixed price.
              </p>
              <p>
                The founder brings nearly a decade of infrastructure engineering experience, including six years at Meta and Alphabet working on the kind of systems most companies only read about: petabyte-scale data platforms, systems handling 100M+ queries per second, and the complex data governance work required for GDPR compliance at Meta.
              </p>
              <p>
                When we recommend an architecture, it's because we've seen what works and what breaks at scale. When we suggest a particular approach to monitoring or governance, it's grounded in real operational experience.
              </p>
              <p>
                We apply that experience to companies building physical AI and production ML — helping them solve the specific infrastructure problem that's blocking them, with a defined outcome and a handover that leaves their team independent.
              </p>
              <a
                href="https://www.linkedin.com/in/achyuthsamudrala/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 text-primary transition-colors hover:text-primary/80"
              >
                <Linkedin className="h-5 w-5" />
                <span>Connect with the founder on LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Grid */}
      <section className="bg-layer-2 py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-medium uppercase tracking-wider text-primary">
              Operating Experience
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-foreground sm:text-4xl">
              Engineering credibility that transfers
            </h2>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {experience.map((item) => (
              <Card key={item.title} className="border-border/50 bg-card">
                <CardContent className="p-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                  <p className="mt-4 text-2xl font-bold text-foreground">{item.metric}</p>
                  <h3 className="mt-1 font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="bg-layer-1 py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-wider text-primary">
              Philosophy
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-foreground sm:text-4xl">
              Systems thinking
            </h2>
            
            <div className="mt-8 space-y-6 text-muted-foreground">
              <p>
                We approach every engagement as systems engineers. That means thinking about failure modes, operational burden, and long-term maintainability—not just whether something works in a demo.
              </p>
              <p>
                The goal is never to be clever. It's to build systems that are boring in the best way: predictable, observable, and recoverable. Systems that let your team sleep through the night and focus on work that matters.
              </p>
              <p>
                Every engagement is scoped around a specific outcome — a measurable improvement to your infrastructure, delivered in a fixed timeline at a fixed price. We work best with teams that have real infrastructure challenges and engineers who want to own what we build together.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-layer-3 py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-semibold text-foreground sm:text-4xl">
              Let's talk about your infrastructure
            </h2>
            <p className="mt-4 text-muted-foreground">
              We'll discuss your infrastructure challenges and scope an outcome. Typical engagements run 6-12 weeks.
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

