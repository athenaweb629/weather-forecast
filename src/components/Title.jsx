import React from "react";
import { Helmet } from "react-helmet-async";

export default function Title({ title, description }) {
  return (
    <Helmet>
      {/* Standard metadata tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
    </Helmet>
  );
}
