import React from "react";
import Link from "next/link";

const ProjectLogo: React.FC = () => {
  return (
    <Link href="/" passHref>
      <div className="flex items-center space-x-2 p-1 bg-transparent rounded-md shadow-sm hover:shadow-md transition-shadow cursor-pointer">
        <div className="w-8 h-8 flex items-center justify-center bg-gradient-to-r from-blue-400 to-purple-500 rounded-full shadow-sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="white"
            className="w-5 h-5"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
          </svg>
        </div>
        <div>
          <h1 className="text-lg font-bold text-gray-900 dark:text-white">Career Insight AI</h1>
          <p className="text-xs text-gray-600 dark:text-gray-300 italic">Elevate Your Career Path</p>
        </div>
      </div>
    </Link>
  );
};

export default ProjectLogo;