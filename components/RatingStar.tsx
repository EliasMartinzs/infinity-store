"use client";
import { Rating } from "@mui/material";
import React from "react";

export default function RatingStar({ rating }: { rating: number }) {
  return <Rating value={rating} readOnly size="small" />;
}
