import styles from "./EquipmentRoom.module.css";

/**
 * Simplified single-line schematic of a recirculation loop with sensing, control, and feed points.
 * Decorative detail is minimal; the point is to show WHERE measurement, control, and feed happen.
 */
export function EquipmentRoom() {
  return (
    <figure className={styles.fig}>
      <svg viewBox="0 0 880 320" role="img" aria-labelledby="eqr-title eqr-desc" className={styles.svg}>
        <title id="eqr-title">Commercial pool recirculation loop with chemical control points</title>
        <desc id="eqr-desc">Water leaves the pool through the main drain and gutter, passes the pump and filter, is sampled by the controller&apos;s flow cell, receives chemical from the feed system, is heated, and returns to the pool. The controller reads the flow cell and drives the feeder; a remote user views the controller over the network.</desc>
        {/* pool */}
        <rect x="20" y="110" width="150" height="100" rx="4" className={styles.pool} />
        <text x="95" y="165" textAnchor="middle" className={styles.lbl}>Pool</text>
        {/* main loop */}
        <path d="M170 190 H230 V250 H760 V190 H860" className={styles.pipe} />
        <path d="M170 130 H230 V70 H760 V130 H860" className={styles.pipeReturn} />
        <path d="M860 130 V190" className={styles.pipeReturn} />
        {/* pump */}
        <circle cx="300" cy="250" r="22" className={styles.node} />
        <text x="300" y="255" textAnchor="middle" className={styles.lblSm}>Pump</text>
        {/* filter */}
        <rect x="370" y="222" width="70" height="56" rx="4" className={styles.node} />
        <text x="405" y="255" textAnchor="middle" className={styles.lblSm}>Filter</text>
        {/* flow cell sample line */}
        <path d="M480 250 V180 H540" className={styles.sample} />
        <rect x="540" y="160" width="54" height="40" rx="3" className={styles.sensor} />
        <text x="567" y="176" textAnchor="middle" className={styles.lblXs}>Flow cell</text>
        <text x="567" y="190" textAnchor="middle" className={styles.lblXs}>pH · ORP · Cl</text>
        {/* controller */}
        <rect x="600" y="20" width="120" height="70" rx="4" className={styles.controller} />
        <text x="660" y="47" textAnchor="middle" className={styles.lblOnDark}>BECSys5</text>
        <text x="660" y="65" textAnchor="middle" className={styles.lblOnDarkXs}>measure · control · log</text>
        <path d="M594 180 H660 V90" className={styles.signal} />
        {/* feeder */}
        <rect x="640" y="200" width="90" height="70" rx="4" className={styles.feeder} />
        <text x="685" y="230" textAnchor="middle" className={styles.lblSm}>Chemical</text>
        <text x="685" y="246" textAnchor="middle" className={styles.lblSm}>feed</text>
        <text x="685" y="262" textAnchor="middle" className={styles.lblXs}>Pulsar / pumps</text>
        <path d="M720 90 V150 H685 V200" className={styles.signal} />
        <path d="M685 270 V250" className={styles.chem} />
        {/* heater */}
        <rect x="770" y="222" width="70" height="56" rx="4" className={styles.node} />
        <text x="805" y="255" textAnchor="middle" className={styles.lblSm}>Heater</text>
        {/* remote */}
        <rect x="780" y="20" width="80" height="50" rx="4" className={styles.remote} />
        <text x="820" y="41" textAnchor="middle" className={styles.lblXs}>Remote</text>
        <text x="820" y="56" textAnchor="middle" className={styles.lblXs}>BECSys Live</text>
        <path d="M720 45 H780" className={styles.network} />
        {/* legend */}
        <g transform="translate(20 290)">
          <line x1="0" y1="0" x2="28" y2="0" className={styles.pipe} /><text x="36" y="4" className={styles.lblXs}>Recirculation</text>
          <line x1="140" y1="0" x2="168" y2="0" className={styles.sample} /><text x="176" y="4" className={styles.lblXs}>Sample line</text>
          <line x1="270" y1="0" x2="298" y2="0" className={styles.signal} /><text x="306" y="4" className={styles.lblXs}>Control signal</text>
          <line x1="420" y1="0" x2="448" y2="0" className={styles.network} /><text x="456" y="4" className={styles.lblXs}>Network</text>
        </g>
      </svg>
      <figcaption className={styles.cap}>Simplified schematic. Actual sensing points, interlocks, and feed locations are set during design and commissioning for each facility.</figcaption>
    </figure>
  );
}
