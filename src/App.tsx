function App() {
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
            />
          </div>
        </div>
        <div className="mt-6 text-center">
          <button
            type="button"
            onClick={() => {}}
            className="px-6 py-3 rounded-xl bg-sky-600 text-white font-medium hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-300 shadow-md transition"
          >
            Highlight differences
          </button>
        </div>
      </section>
    </div>
  );
}

export default App;
