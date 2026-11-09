"use client";

import { useState } from "react";
import { SampleChip } from "../ui/SampleChip";

type Grade = "s" | "l" | "u";
type Room = "d" | "n" | "u";

const GRADE_NOTE: Record<Grade, string> = {
  s: "Smaller grades usually need less theatre time, so ask whether your quote sits at the lower end.",
  l: "Larger grades or loose skin usually need more theatre time and sometimes skin removal, so ask whether your quote sits at the upper end.",
  u: "The surgeon sets the grade at the examination, so the full range applies until then.",
};
const ROOM_NOTE: Record<Room, string> = {
  d: "Day care keeps the facility fee lower.",
  n: "One night in a room adds to the facility fee.",
  u: "Day care or one night is the surgeon's call.",
};

/**
 * Two questions, then the dated range from the price table plus what usually moves a quote up
 * or down. It adds no numbers of its own and is not a quote. Nothing is sent anywhere.
 */
export function CostChecker({ rangeText, chipLabel }: { rangeText: string; chipLabel: string | null }) {
  const [grade, setGrade] = useState<Grade>("u");
  const [room, setRoom] = useState<Room>("u");
  const [shown, setShown] = useState<{ g: Grade; r: Room } | null>(null);

  return (
    <form id="chk" onSubmit={(e) => { e.preventDefault(); setShown({ g: grade, r: room }); }}>
      <fieldset>
        <legend>What do you think your grade is?</legend>
        <div className="chips">
          {([["s", "Small (I or II)"], ["l", "Larger, or loose skin (III or IV)"], ["u", "Not sure"]] as const).map(([v, label]) => (
            <label key={v}><input type="radio" name="g" value={v} checked={grade === v} onChange={() => setGrade(v)} /><span>{label}</span></label>
          ))}
        </div>
      </fieldset>
      <fieldset>
        <legend>Home the same day, or one night in a room?</legend>
        <div className="chips">
          {([["d", "Same day"], ["n", "One night"], ["u", "Not sure"]] as const).map(([v, label]) => (
            <label key={v}><input type="radio" name="r" value={v} checked={room === v} onChange={() => setRoom(v)} /><span>{label}</span></label>
          ))}
        </div>
      </fieldset>
      <button className="btn btn-cta" type="submit">Show the range</button>
      <div className="res" id="res" role="status" aria-live="polite">
        {shown && (
          <>
            <b>Rs {rangeText}</b>
            {GRADE_NOTE[shown.g]} {ROOM_NOTE[shown.r]} Taken from the price table above, not a quote. {chipLabel && <SampleChip label={chipLabel} />} A surgeon sets the real figure after examining you.
          </>
        )}
      </div>
    </form>
  );
}
