import React from "react";
import { Quote } from "lucide-react";
import { visionStyles } from "./styles";

const Theme37VisionStatement = () => {
  return (
    <section style={visionStyles.section}>
      <div style={visionStyles.container}>
        <Quote style={visionStyles.icon} size={48} />
        <blockquote style={visionStyles.quote}>
          "Technology is not just about innovation; it's about creating
          meaningful impact that transforms societies and empowers people to
          achieve their full potential."
        </blockquote>
        <cite style={visionStyles.cite}>— Pannerselvam Madanagopal</cite>
      </div>
    </section>
  );
};

export default Theme37VisionStatement;
