import React from "react";
import { motion } from "framer-motion";

export default function Blob() {
  return (
    <motion.svg id="visual" viewBox="0 0 900 600" width="900" height="600">
      <g transform="translate(300 320)">
        <path
          d="M181.1 -166.4C220.8 -141.4 229.4 -70.7 220.8 -8.6C212.2 53.5 186.3 107 146.7 137.2C107 167.3 53.5 174.2 -8.4 182.5C-70.2 190.9 -140.5 200.8 -186.1 170.6C-231.8 140.5 -252.9 70.2 -239 13.9C-225.1 -42.4 -176.2 -84.9 -130.5 -109.9C-84.9 -134.9 -42.4 -142.4 14.1 -156.6C70.7 -170.7 141.4 -191.4 181.1 -166.4"
          fill="#29344F"
        ></path>
      </g>
    </motion.svg>
  );
}
