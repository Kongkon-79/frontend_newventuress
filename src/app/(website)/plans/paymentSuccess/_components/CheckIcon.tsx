import { motion } from "framer-motion";

export default function CheckIcon(props: any) {
    return (
      <svg
        {...props}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={3}
      >
        <motion.path
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            delay: props?.delay || 0.2,
            type: "tween",
            ease: "easeOut",
            duration: 0.3,
          }}
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M5 13l4 4L19 7"
        />
      </svg>
    );
  }