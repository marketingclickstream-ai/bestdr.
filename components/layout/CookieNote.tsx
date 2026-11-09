"use client";

import { useState } from "react";
import styles from "./Footer.module.css";

/** Footer "Cookie settings" control. The site sets no cookies, so the button says so. */
export function CookieNote() {
  const [shown, setShown] = useState(false);
  return (
    <>
      <button type="button" onClick={() => setShown(true)}>Cookie settings</button>
      <span className={styles.ck} role="status">{shown ? "This site sets no cookies, so there is nothing to change." : ""}</span>
    </>
  );
}
