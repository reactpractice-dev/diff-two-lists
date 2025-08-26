import { useState } from "react";

const compareLists = (left: string, right: string) => {
  const leftItems = left.split("\n").map((item) => item.trim());
  const rightItems = right.split("\n").map((item) => item.trim());

  const allItems = Array.from(new Set([...leftItems, ...rightItems]));

  return allItems.map((item) => {
    const inLeft = leftItems.includes(item);
    const inRight = rightItems.includes(item);
    return { item, inLeft, inRight };
  });
};

function App() {
  const [leftList, setLeftList] = useState("");
  const [rightList, setRightList] = useState("");

  const comparison = compareLists(leftList, rightList);
  const inBothLists = comparison.filter((c) => c.inLeft && c.inRight);
  const onlyInLeft = comparison.filter((c) => c.inLeft && !c.inRight);
  const onlyInRight = comparison.filter((c) => !c.inLeft && c.inRight);
  return (
    <div>
      <section className="max-w-4xl mx-auto p-6">
        <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 mb-6">
          Enter two lists of items to compare
        </h2>
        <p>Enter one item per line.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div className="flex flex-col">
            <label
              htmlFor="list-left"
              className="mb-2 text-sm font-medium text-slate-700"
            >
              Left List
            </label>
            <textarea
              id="list-left"
              rows={10}
              placeholder="Type items here..."
              className="w-full rounded-xl border border-slate-300 p-3 text-slate-800 placeholder-slate-400 focus:border-sky-500 focus:ring focus:ring-sky-200"
              value={leftList}
              onChange={(e) => setLeftList(e.target.value)}
            />
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="list-right"
              className="mb-2 text-sm font-medium text-slate-700"
            >
              Right List
            </label>
            <textarea
              id="list-right"
              rows={10}
              placeholder="Type items here..."
              className="w-full rounded-xl border border-slate-300 p-3 text-slate-800 placeholder-slate-400 focus:border-sky-500 focus:ring focus:ring-sky-200"
              value={rightList}
              onChange={(e) => setRightList(e.target.value)}
            />
          </div>
        </div>
      </section>
      <section className="max-w-4xl mx-auto p-6">
        <h3 className="text-xl font-semibold text-slate-900 mb-4">
          Comparison Results
        </h3>
        <div className="mb-4">
          <h4 className="text-lg font-medium text-slate-800 mb-2">
            Items in both lists:
          </h4>
          <ul className="list-disc list-inside">
            {inBothLists.map((c) => (
              <li key={c.item} className="text-slate-700">
                {c.item}
              </li>
            ))}
          </ul>
        </div>
        <div className="mb-4">
          <h4 className="text-lg font-medium text-slate-800 mb-2">
            Items in just left list:
          </h4>
          <ul className="list-disc list-inside">
            {onlyInLeft.map((c) => (
              <li key={c.item} className="text-slate-700">
                {c.item}
              </li>
            ))}
          </ul>
        </div>
        <div className="mb-4">
          <h4 className="text-lg font-medium text-slate-800 mb-2">
            Items in just right list:
          </h4>
          <ul className="list-disc list-inside">
            {onlyInRight.map((c) => (
              <li key={c.item} className="text-slate-700">
                {c.item}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}

export default App;
