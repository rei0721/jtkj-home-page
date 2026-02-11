export default function Structure() {
  const departments = [
    { name: '董事会', level: 0 },
    { name: '总裁办', level: 1 },
    { name: '研发中心', level: 2 },
    { name: '生产制造中心', level: 2 },
    { name: '市场营销中心', level: 2 },
    { name: '供应链管理中心', level: 2 },
    { name: '财务管理中心', level: 2 },
    { name: '人力资源中心', level: 2 },
  ];

  return (
    <div className="animate-fade-in-up">
      <div className="mb-16 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">组织架构</h2>
        <div className="w-20 h-1 bg-accent mx-auto rounded-full mb-6"></div>
        <p className="text-lg text-slate-500 max-w-2xl mx-auto">高效协同，扁平化管理</p>
      </div>

      <div className="flex flex-col items-center gap-6 max-w-4xl mx-auto">
        {/* Level 0 - Board */}
        <div className="px-10 py-5 bg-gradient-to-r from-slate-800 to-slate-700 text-white rounded-xl text-xl font-bold shadow-lg">
          {departments[0].name}
        </div>
        <div className="w-0.5 h-8 bg-slate-300"></div>

        {/* Level 1 - President */}
        <div className="px-10 py-5 bg-gradient-to-r from-accent to-accent/80 text-white rounded-xl text-xl font-bold shadow-lg">
          {departments[1].name}
        </div>
        <div className="w-0.5 h-8 bg-slate-300"></div>

        {/* Level 2 - Departments */}
        <div className="w-full">
          <div className="relative">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[85%] h-0.5 bg-slate-200"></div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-6">
            {departments.slice(2).map((dept) => (
              <div
                key={dept.name}
                className="relative flex flex-col items-center"
              >
                <div className="w-0.5 h-6 bg-slate-200 mb-2"></div>
                <div className="px-4 py-4 bg-white border-2 border-slate-100 rounded-xl text-center hover:border-accent/50 hover:shadow-lg transition-all duration-300 w-full">
                  <span className="text-sm md:text-base font-semibold text-slate-700">{dept.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
