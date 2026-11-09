"use client";

import { useState } from "react";

/**
 * Filter buttons for the guides index. Every guide is already in the HTML (no JS needed to read
 * them); the buttons only hide cards whose data-topic does not match. Nothing is stored or sent.
 */
export function TopicFilter({ topics, listId }: { topics: { id: string; label: string; count: number }[]; listId: string }) {
  const [active, setActive] = useState("all");

  function choose(id: string) {
    setActive(id);
    document.querySelectorAll<HTMLElement>(`#${listId} [data-topic]`).forEach((el) => {
      el.hidden = id !== "all" && el.dataset.topic !== id;
    });
  }

  return (
    <div className="topics" role="group" aria-label="Filter guides by topic">
      {topics.map((t) => (
        <button key={t.id} type="button" className="chipbtn" aria-pressed={active === t.id} onClick={() => choose(t.id)}>
          {t.label} <span>({t.count})</span>
        </button>
      ))}
    </div>
  );
}
