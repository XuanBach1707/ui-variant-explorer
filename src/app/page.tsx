export default function IndexPage() {
  const variants = [
    { id: "v1", label: "Variant 1" },
    { id: "v2", label: "Variant 2" },
    { id: "v3", label: "Variant 3" },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-6 bg-slate-50">
      <h1 className="text-2xl font-bold text-slate-900">UI Variant Explorer</h1>
      <p className="text-sm text-slate-500">Chọn variant để xem</p>
      <div className="flex gap-4">
        {variants.map((v) => (
          <a
            key={v.id}
            href={`/${v.id}`}
            className="px-6 py-3 bg-white border border-slate-200 rounded-lg text-sm font-medium text-slate-700 hover:border-slate-400 hover:shadow-sm transition-all"
          >
            {v.label} →
          </a>
        ))}
      </div>
    </div>
  );
}
