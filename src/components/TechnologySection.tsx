import { useEffect, useState } from "react";
import type { Technology } from "../type/Technology";
import TechnologyCard from "./TechnologyCard";
import YourStack from "./YourStack";
import { toast } from "react-toastify";

const TechnologySection = () => {
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [selectedTechnologies, setSelectedTechnologies] = useState<Technology[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/Data.json")
      .then((res) => res.json())
      .then((data: Technology[]) => {
        setTechnologies(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  const handleAdd = (item: Technology) => {
    if (selectedTechnologies.some((t) => t.id === item.id)) {
      toast.warning("This technology is already in your stack!");
      return;
    }
    setSelectedTechnologies([...selectedTechnologies, item]);
    toast.success(`${item.name} added to stack!`);
  };

  const handleRemove = (id: string) => {
    const item = selectedTechnologies.find((t) => t.id === id);
    setSelectedTechnologies(selectedTechnologies.filter((t) => t.id !== id));
    if (item) toast.info(`${item.name} removed!`);
  };

  const handleRemoveAll = () => {
    setSelectedTechnologies([]);
    toast.error("Stack cleared!");
  };

  if (loading) {
    return (
      <div className="py-20 text-center font-medium text-gray-500">
        Loading technologies...
      </div>
    );
  }

  return (
    <section className="max-w-7xl mx-auto px-5 py-12 text-left">
      {/* Title */}
      <div className="mb-8">
        <h2 className="text-3xl font-extrabold text-gray-900">
          Explore the <span className="text-pink-500">Technologies</span>
        </h2>
        <p className="mt-2 text-gray-500 text-sm">
          Pick one technology per category to build your ideal stack.
        </p>
      </div>

      {/* Main Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
        {/* Left: Cards Grid */}
        <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {technologies.map((tech) => (
            <TechnologyCard
              key={tech.id}
              technology={tech}
              selectedTechnologies={selectedTechnologies}
              onAdd={handleAdd}
            />
          ))}
        </div>

        {/* Right: Sidebar */}
        <div className="lg:col-span-1">
          <YourStack
            selectedTechnologies={selectedTechnologies}
            onRemove={handleRemove}
            onRemoveAll={handleRemoveAll}
          />
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;