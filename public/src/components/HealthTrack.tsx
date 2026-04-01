// deps

// externals
import React from "react";

// locals
import styles from "./HealthTrack.module.css";

export type HealthBoxState = {
  /** Number of damages in the box (0-3). */
  traits: number;
};

export type HealthStage = {
  label: string;
  boxes: HealthBoxState[];
  /** Wound penalty printed under the level label (empty for Bruised/Incapacitated). */
  penalty?: string;
};

export type HealthTrackProps = {
  /** Number of health levels marked from Bruised to Incapacitated. */
  dammages: number;
  stages?: HealthStage[];
  className?: string;
};

// consts

const TRAITS_PER_BOX = 3;

const DEFAULT_STAGES: HealthStage[] = [
  { label: "Bruised", boxes: [{ traits: 0 }], penalty: "" },
  { label: "Hurt", boxes: [{ traits: 0 }], penalty: "-1" },
  { label: "Injured", boxes: [{ traits: 0 }], penalty: "-1" },
  { label: "Wounded", boxes: [{ traits: 0 }], penalty: "-2" },
  { label: "Mauled", boxes: [{ traits: 0 }], penalty: "-2" },
  { label: "Crippled", boxes: [{ traits: 0 }], penalty: "-5" },
  { label: "Incapacitated", boxes: [{ traits: 0 }], penalty: "" },
];

// module

function clampTraits(n: number) {
  return Math.min(Math.max(0, Math.floor(n)), TRAITS_PER_BOX);
}

function countSlots(stages: HealthStage[]) {
  return stages.reduce(
    (acc, stage) => acc + Math.max(1, stage.boxes.length) * TRAITS_PER_BOX,
    0,
  );
}

/** Mark health slots left-to-right to mirror the printed VTM sheet strip. */
function applyDamage(template: HealthStage[], totalDamage: number): HealthStage[] {
  let remaining = Math.max(0, Math.floor(totalDamage));
  remaining = Math.min(remaining, countSlots(template));

  return template.map((stage) => ({
    ...stage,
    boxes: (stage.boxes.length > 0 ? stage.boxes : [{ traits: 0 }]).map((box) => {
      const assigned = Math.min(TRAITS_PER_BOX, remaining);
      remaining = Math.max(0, remaining - assigned);
      return { ...box, traits: assigned };
    }),
  }));
}

function BoxCell({ traits }: { traits: number }) {
  const level = clampTraits(traits);

  return (
    <div
      className={styles.marker}
      role="group"
      aria-label={`Health box with ${level} of ${TRAITS_PER_BOX} damages`}
    >
      <div className={styles.traits} aria-hidden>
        {Array.from({ length: TRAITS_PER_BOX }, (_, i) => (
          <span
            key={i}
            className={i < level ? styles.traitOn : styles.traitOff}
          />
        ))}
      </div>
    </div>
  );
}

/** Classic health strip with wound penalties matching the official PDF order. */
export function HealthTrack({
  dammages,
  stages = DEFAULT_STAGES,
  className,
}: HealthTrackProps): React.JSX.Element {
  const normalizedStages = stages.map((stage) => ({
    ...stage,
    boxes: stage.boxes.length > 0 ? stage.boxes : [{ traits: 0 }],
  }));
  const rendered = applyDamage(normalizedStages, dammages);
  const maxDamage = countSlots(normalizedStages);
  const filled = Math.min(Math.max(0, Math.floor(dammages)), maxDamage);

  return <section
    className={ styles.wrap }
    aria-label={`Health track, ${filled} of ${maxDamage} levels marked`}
  >

      <h3 className={styles.title}>Health</h3>

      <div className={styles.table}>
        {rendered.map((stage) => (
          <div key={stage.label} className={styles.row}>
            <div className={styles.stageLabel}>{stage.label}</div>
            <div className={styles.penalty}>{stage.penalty ?? ""}</div>
            <div className={styles.markerRow}>
              {stage.boxes.map((box, i) => (
                <BoxCell key={`${stage.label}-${i}`} traits={box.traits} />
              ))}
            </div>
          </div>
        ))}
      </div>

    </section>;

}

export { TRAITS_PER_BOX };
