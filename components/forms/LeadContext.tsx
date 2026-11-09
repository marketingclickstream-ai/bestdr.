"use client";

import { useEffect } from "react";
import { setLeadContext, type LeadContextValue } from "@/lib/lead-context";

/** Renders nothing. Tells the call-back sheet which treatment and city this page is about. */
export function LeadContext(props: LeadContextValue) {
  const { treatment, city, label } = props;
  useEffect(() => { setLeadContext({ treatment, city, label }); }, [treatment, city, label]);
  return null;
}
