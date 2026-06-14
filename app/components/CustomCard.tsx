import type { ElementType } from "react";

type FeatureCardProps = {
  title: string;
  description: string;
  icon: ElementType;
  onClick: () => void;
  darkMode: boolean;
};

export default function CustomCard({
  title,
  description,
  icon: Icon,
  onClick,
  darkMode
}: FeatureCardProps) {

  return (
    <div
      onClick={onClick}
      className={`mb-4 flex flex-col rounded-2xl overflow-hidden shadow-gray-600 w-full max-w-[380] min-h-[200px]
                    hover:cursor-pointer transition-all ease-in-out duration-200 hover:-translate-y-4 hover:shadow-2xl p-6
                    ${darkMode ? "bg-green-600 border-1 border-green-900 hover:border-blue-900" 
                    : "text-black bg-gray-100 border-1 border-gray-700 hover:border-gray-700"}`}>

        <div className="flex items-center gap-2 mb-2">
          <Icon className="h-10 w-10 text-gray-700 mr-3" />
          <h2 className={`text-xl font-bold ${darkMode ? "text-white" : "text-black"}`}>
            {title}
          </h2>
        </div>
        <p className="opacity-75 leading-relaxed mt-4">
          {description}
        </p>
    </div>
  );
}
