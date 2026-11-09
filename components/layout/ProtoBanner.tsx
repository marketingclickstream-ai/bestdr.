import { SampleChip } from "../ui/SampleChip";
import styles from "./ProtoBanner.module.css";

/** Top banner for the prototype. Hidden when NEXT_PUBLIC_PROTOTYPE_BANNER=off. */
export function ProtoBanner() {
  return (
    <div className={styles.proto}>
      <div className="wrap">
        <b>Prototype: sample data, not for publication.</b>{" "}
        <span className={styles.pm}>
          Not indexed, forms send only what you submit. <SampleChip /> marks every sample price, time, name and date.
        </span>
      </div>
    </div>
  );
}
