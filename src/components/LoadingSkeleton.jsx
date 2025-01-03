import React from "react";
import { motion } from "framer-motion";

const LoadingSkeleton = () => {
  return (
    <div className="bg-[#F9EBCC] min-h-screen w-full flex justify-center items-center">
      <motion.div
        className="border shadow rounded-md p-4 max-w-sm w-full mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="animate-pulse flex space-x-4">
          <div className="rounded-full bg-slate-700 h-10 w-10"></div>
          <div className="flex-1 space-y-6 py-1">
            <div className="h-2 bg-slate-700 rounded"></div>
            <div className="space-y-3">
              <div className="grid grid-cols-3 gap-4">
                <div className="h-2 bg-slate-700 rounded col-span-2"></div>
                <div className="h-2 bg-slate-700 rounded col-span-1"></div>
              </div>
              <div className="h-2 bg-slate-700 rounded"></div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default LoadingSkeleton;
