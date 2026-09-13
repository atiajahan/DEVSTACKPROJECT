import type { Technology } from "../type/Technology";

interface YourStackProps {
  selectedTechnologies: Technology[];
  onRemove: (id: string) => void;
  onRemoveAll: () => void;
}

const YourStack = ({
  selectedTechnologies,
  onRemove,
  onRemoveAll,
}: YourStackProps) => {
  return (
    <aside className="border border-gray-200 rounded-2xl p-5 bg-white shadow-sm text-left sticky top-24">
      {/* Header */}
      <div className="flex items-center justify-between pb-4 border-b border-gray-100">
        <div>
          <h2 className="text-lg font-bold text-gray-900">Your Stack</h2>
          <p className="text-xs text-gray-500 mt-0.5">
            {selectedTechnologies.length} Technology Selected
          </p>
        </div>

        {selectedTechnologies.length > 0 && (
          <button
            onClick={onRemoveAll}
            className="text-xs font-semibold text-red-500 hover:text-red-600"
          >
            Remove All
          </button>
        )}
      </div>

      {/* Empty State */}
      {selectedTechnologies.length === 0 ? (
        <div className="text-center py-12 border-2 border-dashed border-gray-100 rounded-xl mt-4">
          <p className="text-gray-400 text-sm font-medium">Your stack is empty.</p>
          <p className="text-gray-400 text-xs mt-1">
            Add technologies to build your stack.
          </p>
        </div>
      ) : (
        /* Selected Items List */
        <div className="space-y-3 mt-4 max-h-[500px] overflow-y-auto">
          {selectedTechnologies.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between border border-gray-100 rounded-xl p-3 bg-gray-50"
            >
              <div className="flex items-center gap-3">
                <img src={item.icon} alt={item.name} className="w-7 h-7 object-contain" />
                <div>
                  <h4 className="text-sm font-bold text-gray-800">{item.name}</h4>
                  <p className="text-xs text-gray-400">{item.category}</p>
                </div>
              </div>

              <button
                onClick={() => onRemove(item.id)}
                className="text-gray-400 hover:text-red-500 font-bold p-1"
              >
                ✕
              </button>
            </div>
          ))}
        </div>
      )}
    </aside>
  );
};

export default YourStack;