import type { Technology } from "../type/Technology";

interface TechnologyCardProps {
  technology: Technology;
  selectedTechnologies: Technology[];
  onAdd: (technology: Technology) => void;
}

const TechnologyCard = ({
  technology,
  selectedTechnologies,
  onAdd,
}: TechnologyCardProps) => {
  const isAdded = selectedTechnologies.some((item) => item.id === technology.id);

  return (
    <div className="border border-gray-100 rounded-2xl p-6 bg-white shadow-sm hover:shadow-md transition flex flex-col justify-between h-full text-left">
      <div>
        {/* Icon & Badge */}
        <div className="flex items-center justify-between min-h-[40px]">
          <img
            src={technology.icon}
            alt={technology.name}
            className="w-10 h-10 object-contain"
          />
          {technology.badge && (
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-pink-50 text-pink-500 border border-pink-100">
              {technology.badge}
            </span>
          )}
        </div>

        {/* Name */}
        <h3 className="text-xl font-bold text-gray-900 mt-4">
          {technology.name}
        </h3>

        {/* Description */}
        <p className="text-sm text-gray-500 mt-2 leading-relaxed min-h-[60px]">
          {technology.description}
        </p>
      </div>

      <div className="mt-6">
        {/* Metadata (Clean Spacing without dots) */}
        <div className="flex items-center justify-between text-xs font-medium border-t border-gray-50 pt-4 mb-4">
          <span className="px-2.5 py-1 rounded-md bg-gray-100 text-gray-700 font-medium">
            {technology.category}
          </span>
          <span className="text-gray-500">{technology.difficulty}</span>
          <span className="text-gray-700 font-semibold flex items-center gap-1">
            <span className="text-amber-400">★</span> {technology.rating}
          </span>
        </div>

        
        {/* Action Button */}
        <button
          onClick={() => onAdd(technology)}
          disabled={isAdded}
          className={`w-full py-3 rounded-xl text-sm font-semibold transition ${
            isAdded
              ? "bg-gray-200 text-gray-500 cursor-not-allowed"
              : "bg-slate-900 text-white hover:bg-slate-800"
          }`}
        >
          
          {isAdded ? "✓ Added to Stack" : "Add to Stack"}
        </button>
      </div>
    </div>
  );
};

export default TechnologyCard;
