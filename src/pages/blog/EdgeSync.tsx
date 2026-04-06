import { ArrowLeft, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { SEO, articleSchema } from "@/components/SEO";

// ─── Helper components ────────────────────────────────────────────────────────

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
      {children}
    </span>
  );
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return <h2 className="mt-14 text-2xl font-semibold text-foreground">{children}</h2>;
}

function SubHeading({ children }: { children: React.ReactNode }) {
  return <h3 className="mt-8 text-lg font-semibold text-foreground">{children}</h3>;
}

function Prose({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-4 space-y-4 text-muted-foreground leading-relaxed">{children}</div>
  );
}

function CodeBlock({ lang, children }: { lang: string; children: React.ReactNode }) {
  return (
    <div className="relative mt-6 rounded-lg overflow-hidden border border-border/50">
      <div className="flex items-center bg-[#161b22] px-4 py-2 border-b border-border/50">
        <span className="text-xs font-mono text-[#8b949e]">{lang}</span>
      </div>
      <pre className="overflow-x-auto bg-[#0d1117] p-4 text-sm text-[#e6edf3] font-mono leading-relaxed">
        <code>{children}</code>
      </pre>
    </div>
  );
}

function Callout({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="mt-6 rounded-lg border-l-4 border-primary bg-primary/5 px-5 py-4">
      <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-2">{label}</p>
      <div className="text-sm text-foreground leading-relaxed">{children}</div>
    </div>
  );
}

function InlineCode({ children }: { children: React.ReactNode }) {
  return (
    <code className="text-xs font-mono bg-muted px-1 py-0.5 rounded">{children}</code>
  );
}

// ─── Tables ──────────────────────────────────────────────────────────────────

function ScoringTable() {
  const rows = [
    { outcome: "Failure", priority: "1.0", range: "1.0 – 1.05", highlight: true },
    { outcome: "Novel state", priority: "0.75", range: "0.75 – 0.80", highlight: false },
    { outcome: "Sensor anomaly", priority: "0.5", range: "0.5 – 0.55", highlight: false },
    { outcome: "Unknown", priority: "0.4", range: "0.4 – 0.45", highlight: false },
    { outcome: "Routine success", priority: "0.0", range: "0.0 – 0.05", highlight: false },
  ];
  return (
    <div className="mt-6 overflow-x-auto rounded-lg border border-border/50">
      <table className="w-full border-collapse text-sm">
        <thead>
          <tr className="bg-muted">
            <th className="px-4 py-3 text-left font-semibold text-foreground">Outcome</th>
            <th className="px-4 py-3 text-left font-semibold text-foreground">Tier score</th>
            <th className="px-4 py-3 text-left font-semibold text-foreground">Composite range</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr
              key={i}
              className={
                row.highlight
                  ? "bg-primary/5 font-medium text-foreground"
                  : i % 2 === 0
                  ? "bg-card text-muted-foreground"
                  : "bg-muted/30 text-muted-foreground"
              }
            >
              <td className="px-4 py-3">{row.outcome}</td>
              <td className="px-4 py-3 font-mono text-xs">{row.priority}</td>
              <td className="px-4 py-3 font-mono text-xs">{row.range}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function BaselineTable() {
  const rows = [
    { outcome: "Failure", total: "60", synced: "60", survival: "100%", highlight: true },
    { outcome: "Novel", total: "40", synced: "11", survival: "28%", highlight: false },
    { outcome: "Sensor anomaly", total: "20", synced: "4", survival: "20%", highlight: false },
    { outcome: "Routine", total: "80", synced: "24", survival: "30%", highlight: false },
  ];
  return (
    <div className="mt-6 overflow-x-auto rounded-lg border border-border/50">
      <table className="w-full border-collapse text-sm">
        <thead>
          <tr className="bg-muted">
            <th className="px-4 py-3 text-left font-semibold text-foreground">Outcome</th>
            <th className="px-4 py-3 text-left font-semibold text-foreground">Total</th>
            <th className="px-4 py-3 text-left font-semibold text-foreground">Synced</th>
            <th className="px-4 py-3 text-left font-semibold text-foreground">Survival</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr
              key={i}
              className={
                row.highlight
                  ? "bg-primary/5 font-medium text-foreground"
                  : i % 2 === 0
                  ? "bg-card text-muted-foreground"
                  : "bg-muted/30 text-muted-foreground"
              }
            >
              <td className="px-4 py-3">{row.outcome}</td>
              <td className="px-4 py-3 font-mono text-xs">{row.total}</td>
              <td className="px-4 py-3 font-mono text-xs">{row.synced}</td>
              <td className="px-4 py-3 font-mono text-xs">
                {row.highlight ? (
                  <span className="text-primary font-semibold">{row.survival}</span>
                ) : (
                  row.survival
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function ScenarioComparisonTable() {
  const rows = [
    { scenario: "Baseline (100MB, 5s LTE, 20s dead)", synced: "99", dropped: "101", failureSurvival: "100%", highlight: false },
    { scenario: "Tight buffer (50MB)", synced: "73", dropped: "127", failureSurvival: "65%", highlight: true },
    { scenario: "Large buffer (200MB)", synced: "200", dropped: "0", failureSurvival: "100%", highlight: false },
    { scenario: "Long LTE (15s)", synced: "200", dropped: "0", failureSurvival: "100%", highlight: false },
    { scenario: "Short dead zone (5s)", synced: "200", dropped: "0", failureSurvival: "100%", highlight: false },
    { scenario: "Always connected", synced: "200", dropped: "0", failureSurvival: "100%", highlight: false },
  ];
  return (
    <div className="mt-6 overflow-x-auto rounded-lg border border-border/50">
      <table className="w-full border-collapse text-sm">
        <thead>
          <tr className="bg-muted">
            <th className="px-4 py-3 text-left font-semibold text-foreground">Scenario</th>
            <th className="px-4 py-3 text-left font-semibold text-foreground">Synced</th>
            <th className="px-4 py-3 text-left font-semibold text-foreground">Dropped</th>
            <th className="px-4 py-3 text-left font-semibold text-foreground">Failure survival</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr
              key={i}
              className={
                row.highlight
                  ? "bg-destructive/5 text-foreground"
                  : i % 2 === 0
                  ? "bg-card text-muted-foreground"
                  : "bg-muted/30 text-muted-foreground"
              }
            >
              <td className="px-4 py-3 text-xs">{row.scenario}</td>
              <td className="px-4 py-3 font-mono text-xs">{row.synced}</td>
              <td className="px-4 py-3 font-mono text-xs">{row.dropped}</td>
              <td className="px-4 py-3 font-mono text-xs font-semibold">{row.failureSurvival}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function ThreadTable() {
  const rows = [
    { thread: "FileWatcher", purpose: "Detects .done sentinels", lock: "_processing_lock" },
    { thread: "Scorer-0, Scorer-1", purpose: "Score episodes, insert into buffer", lock: "buffer_write_lock" },
    { thread: "Uploader", purpose: "Chunked upload loop", lock: "None during I/O" },
    { thread: "ResourceMonitor", purpose: "RSS checks every 10s", lock: "None" },
    { thread: "Rescorer", purpose: "Re-score UNKNOWN episodes", lock: "None" },
  ];
  return (
    <div className="mt-6 overflow-x-auto rounded-lg border border-border/50">
      <table className="w-full border-collapse text-sm">
        <thead>
          <tr className="bg-muted">
            <th className="px-4 py-3 text-left font-semibold text-foreground">Thread</th>
            <th className="px-4 py-3 text-left font-semibold text-foreground">Purpose</th>
            <th className="px-4 py-3 text-left font-semibold text-foreground">Lock held</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr
              key={i}
              className={i % 2 === 0 ? "bg-card text-muted-foreground" : "bg-muted/30 text-muted-foreground"}
            >
              <td className="px-4 py-3 font-mono text-xs">{row.thread}</td>
              <td className="px-4 py-3 text-xs">{row.purpose}</td>
              <td className="px-4 py-3 font-mono text-xs">{row.lock}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function EdgeSync() {
  return (
    <Layout>
      <SEO
        title="Edge Sync: Offline-First Data Pipeline for Field Robots | Baselyne Systems"
        description="How we built an offline-first sync daemon for field robots — priority scoring, bounded buffer eviction, and resumable upload over intermittent connectivity. 100% failure data survival while dropping half of all episodes."
        keywords="edge sync, offline-first robot data, field robotics data pipeline, robot data upload, edge data management, physical AI edge, intermittent connectivity robot, priority data sync, robot failure data"
        canonical="https://baselynesystems.com/blog/edge-sync"
        ogType="article"
        publishedTime="2026-04-05"
        author="Achyuth Samudrala"
        structuredData={articleSchema({
          title: "Edge Sync: Offline-First Data Pipeline for Field Robots",
          description: "How we built an offline-first sync daemon for field robots — priority scoring, bounded buffer eviction, and resumable upload over intermittent connectivity.",
          url: "https://baselynesystems.com/blog/edge-sync",
          datePublished: "2026-04-05",
          keywords: ["edge sync", "offline-first", "field robotics", "robot data pipeline", "physical AI", "edge data management", "intermittent connectivity"],
        })}
      />

      <article className="bg-layer-1 py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-3xl">

            {/* Back link */}
            <Link
              to="/blog"
              className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft className="h-4 w-4" />
              Blog
            </Link>

            {/* Post header */}
            <div className="mt-8">
              <div className="flex flex-wrap gap-2">
                <Tag>Case Study</Tag>
                <Tag>Physical AI</Tag>
              </div>
              <h1 className="mt-5 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Edge Sync: Offline-First Data Sync for Field Robots
              </h1>
              <p className="mt-3 text-xl text-muted-foreground">
                100% failure data survival while dropping half of all episodes — priority scoring, bounded eviction, and resumable upload over intermittent connectivity
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-4">
                <span className="text-sm text-muted-foreground">April 2026</span>
              </div>
              <div className="mt-8 border-t border-border" />
            </div>

            {/* ── Why we built this ── */}
            <SectionHeading>Why we built this</SectionHeading>
            <Prose>
              <p>
                Construction sites have no internet. Warehouse robots saturate 5Gbps pipes.
                A 15-second stereo camera clip generates 3GB of data. Every field robotics
                team hits the same wall: the robot collects far more data than it can upload,
                and the most valuable recordings — task failures, novel states, sensor
                anomalies — are exactly the ones most likely to be lost.
              </p>
              <p>
                The common solution is random sampling: store 1% of everything and hope the
                interesting data survives. It doesn't. Random sampling treats a grasping failure
                the same as a routine plate transfer. The failure is worth 50x more for
                retraining, but random sampling doesn't know that.
              </p>
              <p>
                We built Edge Sync as an offline-first data sync daemon that runs alongside
                the robot's policy on the same hardware. It scores every episode by training
                value, manages a bounded local buffer with priority eviction, and uploads
                the most valuable data first over whatever connectivity is available. When
                the buffer fills, routine successes get dropped. Failures survive.
              </p>
            </Prose>

            <Callout label="Key results">
              <strong>100% failure survival</strong> with a 100MB buffer while dropping 101
              of 200 episodes · <strong>Priority ordering preserved</strong> across all 6
              benchmark scenarios · <strong>100% drop record completeness</strong> — nothing
              disappears without an audit trail · <strong>9 race conditions</strong> identified
              and mitigated · Resumable chunked upload with two-phase completion
            </Callout>

            {/* ── Architecture ── */}
            <SectionHeading>Architecture</SectionHeading>
            <Prose>
              <p>
                The daemon has four concurrent components sharing state through SQLite:
              </p>
            </Prose>

            <CodeBlock lang="ascii — component architecture">
{`Recording process
       |
       v
  File Watcher ──> Scorer ──> Buffer Manager ──> Uploader ──> Cloud
  (watchdog)       (thread     (eviction,         (chunked,    (FastAPI
                    pool)       locking)            resumable)   or S3)`}
            </CodeBlock>

            <Prose>
              <p>
                <strong>File Watcher</strong> monitors a directory for{" "}
                <InlineCode>.done</InlineCode> sentinel files. The sentinel contract is
                simple: the recording process writes the MCAP file, calls fsync, then writes
                a <InlineCode>.done</InlineCode> file. The daemon never touches an MCAP
                without a matching sentinel — no partial file processing.
              </p>
              <p>
                <strong>Scorer</strong> reads the MCAP file, extracts the task outcome, computes
                an embedding from camera frames via a pluggable encoder, and produces a composite
                score. Higher scores mean higher training value.
              </p>
              <p>
                <strong>Buffer Manager</strong> holds scored episodes in a priority queue. When
                the buffer is full, it evicts the lowest-scored episode that isn't currently being
                uploaded. Every eviction writes a drop record before deleting the file — nothing
                disappears silently.
              </p>
              <p>
                <strong>Uploader</strong> dequeues the highest-priority episode and uploads in
                1MB chunks. It checks connectivity between chunks and saves byte offsets for
                resumability. Upload completion uses a two-phase protocol: the local DB marks{" "}
                <InlineCode>synced_pending_ack</InlineCode> before the cloud confirms, so a
                power cut between send and acknowledge doesn't lose the episode.
              </p>
            </Prose>

            {/* ── Scoring ── */}
            <SectionHeading>Scoring: what data is worth keeping</SectionHeading>
            <Prose>
              <p>
                Every episode gets a composite score from independent signals combined as a
                weighted sum. The primary signal is the task outcome, extracted from
                the <InlineCode>/task/result</InlineCode> topic in the MCAP file. Additional
                signals — sensor quality, novelty detection, policy uncertainty — can be
                plugged in without changing the scorer.
              </p>
            </Prose>

            <CodeBlock lang="python — composite scoring">
{`score = outcome_weight * outcome_score
     + sum(signal.weight * signal.score for each enabled signal)`}
            </CodeBlock>

            <ScoringTable />

            <Prose>
              <p>
                The tier invariant is the key design constraint: the outcome signal's weight
                (1.0) and tier spacing (0.25 between adjacent tiers) ensure that all other
                signals combined (max total weight 0.2) cannot cross tier boundaries. A routine
                success with maximum novelty and maximum sensor anomaly still scores below an
                unknown episode. The scorer validates this invariant on initialization and warns
                if signal weights could violate it.
              </p>
              <p>
                Two signals ship by default: <InlineCode>OutcomeSignal</InlineCode> reads the
                task result from MCAP, and <InlineCode>SensorQualitySignal</InlineCode> detects
                camera frame dropouts using interval consistency checks. Additional signals
                like novelty detection (embedding distance from training distribution) and
                policy uncertainty require a trained encoder and calibration data — they're
                documented but disabled by default, because a random encoder against random
                centroids produces noise, not useful scores.
              </p>
              <p>
                If scoring takes longer than 10 seconds (large MCAP file, slow encoder), the
                episode is assigned <InlineCode>UNKNOWN</InlineCode> at score 0.4 and
                inserted into the buffer immediately. A background thread re-scores it when
                the scorer pool is idle.
              </p>
            </Prose>

            {/* ── Buffer ── */}
            <SectionHeading>Buffer eviction: what gets dropped and why</SectionHeading>
            <Prose>
              <p>
                When a new episode arrives and the buffer is full, the eviction algorithm runs:
              </p>
            </Prose>

            <CodeBlock lang="text — eviction sequence">
{`1. Select lowest-scored episode not currently being uploaded
2. Mark as DROPPED in SQLite (under buffer_write_lock)
3. Write drop record: episode ID, score, outcome, reason, size, timestamp
4. Delete file on background thread (outside lock)
5. Repeat until there's room for the new episode`}
            </CodeBlock>

            <Prose>
              <p>
                File deletion runs outside the lock because{" "}
                <InlineCode>os.unlink()</InlineCode> on slow storage (NVMe under heavy write
                load on a Jetson) can take 10-100ms. Holding the buffer lock during deletion
                blocks all other inserts and uploads. By marking the episode as dropped in
                SQLite first (~5ms under lock), then deleting the file on a background thread,
                other threads proceed immediately.
              </p>
            </Prose>

            {/* ── Concurrency ── */}
            <SectionHeading>Concurrency: four threads, four locks, no nesting</SectionHeading>
            <Prose>
              <p>
                The daemon runs 5-7 threads depending on configuration. The concurrency
                model is designed for a Jetson Orin sharing CPU and RAM with the robot's
                policy stack — no thread pool explosion, no unbounded queues.
              </p>
            </Prose>

            <ThreadTable />

            <Prose>
              <p>
                There are four locks in the system. The critical invariant:{" "}
                <strong>no thread ever holds two locks simultaneously</strong>. This eliminates
                deadlock by construction, not by careful ordering. Each lock protects one
                concern: buffer writes, database access, processing dedup, and cloud state.
              </p>
              <p>
                We identified 9 race conditions during design — episode arriving during eviction,
                upload/eviction collision, simultaneous arrivals, connectivity returning during
                eviction, scoring timeout, power loss mid-upload, manifest divergence, partial
                MCAP write, and crash before scoring completes. Each has a specific mitigation
                documented and tested.
              </p>
            </Prose>

            {/* ── Benchmark ── */}
            <SectionHeading>Benchmark: 6 scenarios, 200 episodes</SectionHeading>
            <Prose>
              <p>
                200 synthetic MCAP episodes — 60 failures, 40 novel states, 20 sensor anomalies,
                80 routine successes — totaling 234.5 MB. Each scenario varies the buffer size,
                LTE connectivity duration, and dead zone length. Connectivity follows a three-phase
                schedule: LTE connected → dead zone (no connectivity) → dock WiFi reconnected.
              </p>
            </Prose>

            <SubHeading>Baseline: 100MB buffer, 5s LTE, 20s dead zone</SubHeading>
            <Prose>
              <p>
                The interesting scenario — enough data pressure to force evictions, but enough
                connectivity to upload the highest-priority episodes.
              </p>
            </Prose>

            <BaselineTable />

            <Prose>
              <p>
                99 synced, 101 dropped. Every failure episode survived — 100% survival for the
                highest-value tier. The 20-second dead zone creates sustained pressure: episodes
                arrive at 10/sec but no uploads can happen, so the buffer fills to capacity and
                evictions begin. The scoring algorithm ensures that when something has to go,
                it's a routine success, not a failure.
              </p>
            </Prose>

            <SubHeading>All scenarios compared</SubHeading>

            <ScenarioComparisonTable />

            <Prose>
              <p>
                The tight buffer scenario is the stress test — halving the buffer to 50MB drops
                failure survival from 100% to 65%. The buffer can hold about 25 failure-sized
                episodes at 2MB each, but 60 failures compete for space during the dead zone.
                Even under this extreme pressure, the priority gradient holds: failures still
                survive at a higher rate than every other tier.
              </p>
              <p>
                The remaining four scenarios show no evictions — the buffer, connectivity, or
                both are sufficient to absorb all 200 episodes. These serve as control cases:
                they prove the upload mechanism works correctly when buffer pressure is absent.
              </p>
            </Prose>

            {/* ── Upload ── */}
            <SectionHeading>Upload: resumable, two-phase, connectivity-aware</SectionHeading>
            <Prose>
              <p>
                Each episode uploads in 1MB chunks. Between chunks, the uploader checks
                connectivity. On disconnect: save byte offset to SQLite, reset episode
                to <InlineCode>QUEUED</InlineCode>. On resume: seek to saved offset, continue
                from that chunk number.
              </p>
              <p>
                The 1MB chunk size balances three concerns. At 5 Mbps (LTE), one chunk takes
                1.6 seconds — connectivity is checked every 1.6s with at most 1MB of wasted
                transfer on disconnect. At 100 Mbps (dock WiFi), one chunk takes 0.08s —
                per-chunk overhead is about 10% of transfer time, which is acceptable.
              </p>
              <p>
                Completion uses a two-phase protocol. After all chunks are sent, the daemon
                writes <InlineCode>synced_pending_ack</InlineCode> to local SQLite, then
                sends a completion request to the cloud. If power is cut between these
                steps, the next reconciliation resolves it: the cloud confirms receipt and
                the local status updates to <InlineCode>synced</InlineCode>. No re-upload.
              </p>
            </Prose>

            {/* ── Reconciliation ── */}
            <SectionHeading>Reconciliation after extended dropout</SectionHeading>
            <Prose>
              <p>
                After a long connectivity loss (hours or days on a construction site), the
                daemon and cloud may have diverged. The reconciler handles this:
              </p>
            </Prose>

            <CodeBlock lang="text — reconciliation protocol">
{`1. Daemon builds manifest: all episode IDs with sync status, score, size
2. POST /sync/reconcile sends manifest to cloud
3. Cloud returns:
   - cloud_has: episodes it received successfully
   - cloud_missing: episodes in manifest it doesn't have (excluding dropped)
   - agent_unknown: episodes cloud has that aren't in the manifest
4. Daemon processes the diff:
   - synced_pending_ack confirmed by cloud → mark synced
   - Missing episodes still on disk → re-queue for upload
   - Unknown episodes → record as reconciled_from_cloud`}
            </CodeBlock>

            {/* ── Episode lifecycle ── */}
            <SectionHeading>Episode lifecycle</SectionHeading>
            <Prose>
              <p>
                Every episode follows a deterministic state machine from detection to final
                disposition. There are no ambiguous states — at any point, the system knows
                exactly where every episode is and why.
              </p>
            </Prose>

            <CodeBlock lang="text — state machine">
{`.done sentinel detected
       |
       v
  [SCORING]  ──timeout──>  PRIORITY_UNKNOWN assigned
       |                          |
       v                          v
  score + outcome          insert into buffer
  computed                 (re-scored later)
       |
       v
  QUEUED in buffer
       |
       |── buffer full? ──> lowest-score DROPPED
       |                    (drop record written)
       v
  Uploader dequeues (highest score first)
       |
       v
  IN_FLIGHT
       |
       |── connectivity lost? ──> offset saved, back to QUEUED
       |
       v
  SYNCED_PENDING_ACK
       |
       v
  cloud ACK → SYNCED`}
            </CodeBlock>

            <Prose>
              <p>
                On crash recovery, the daemon checkpoints SQLite WAL, finds episodes stuck
                in <InlineCode>IN_FLIGHT</InlineCode> (checks if the file and partial cloud
                upload exist for resume), and scans for unprocessed sentinels that were
                detected but never scored. Every state has a defined recovery path.
              </p>
            </Prose>

            {/* ── Drop records ── */}
            <SectionHeading>Nothing disappears without a record</SectionHeading>
            <Prose>
              <p>
                Every evicted episode has a corresponding drop record: episode ID, score,
                outcome, reason, file size, and timestamp. This is enforced by the eviction
                algorithm — <InlineCode>mark_dropped()</InlineCode> writes the drop record
                in the same database transaction that updates the episode status. The file
                is deleted afterward on a background thread.
              </p>
              <p>
                Across all 6 benchmark scenarios, drop record completeness is 100%. This
                matters for two reasons: audit (you can explain to a safety review exactly
                what data was lost and why) and debugging (if a model regresses, you can check
                whether the training set was missing failure data that the edge agent dropped).
              </p>
            </Prose>

            {/* ── Divider ── */}
            <div className="mt-16 border-t border-border" />

            {/* ── Footer CTA ── */}
            <div className="mt-12 rounded-lg bg-layer-2 px-8 py-10 text-center border border-border/50">
              <p className="text-sm font-medium uppercase tracking-wider text-primary">Work with us</p>
              <h2 className="mt-3 text-2xl font-semibold text-foreground">
                Building data infrastructure for field robots?
              </h2>
              <p className="mt-3 text-muted-foreground">
                We build offline-first data pipelines, sensor data lakes, and evaluation
                infrastructure for physical AI teams. Book a 30-minute call to talk through
                your data architecture.
              </p>
              <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button asChild size="lg">
                  <a
                    href="https://calendly.com/achyuthsamudrala/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2"
                  >
                    Book a Call
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>

          </div>
        </div>
      </article>
    </Layout>
  );
}
