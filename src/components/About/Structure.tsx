import type { CSSProperties } from 'react';

type NodeVariant = 'executive' | 'leader' | 'unit' | 'dashed';

type DesktopNode = {
  id: string;
  label: string;
  x: number;
  y: number;
  width: number;
  height: number;
  variant?: NodeVariant;
  vertical?: boolean;
};

type Line = {
  x: number;
  y: number;
  width?: number;
  height?: number;
};

type Branch = {
  title: string;
  chain?: string[];
  departments: string[];
  dashedDepartments?: string[];
  nestedTitle?: string;
  nestedDepartments?: string[];
  nestedDashedDepartments?: string[];
};

const directDepartments = ['法务监察部', '财务部'];

const branches: Branch[] = [
  {
    title: '行政副总经理',
    departments: ['市场部', '综合管理部', '采购部'],
  },
  {
    title: '技术副总经理',
    chain: ['技术管理中心', '技术研发部'],
    departments: ['盖板技术组'],
    dashedDepartments: ['黄光技术组', '模组技术组'],
  },
  {
    title: '生产副总经理',
    departments: ['PMC', '品质部', '装备动力部'],
    nestedTitle: '生产部',
    nestedDepartments: ['盖板制造部'],
    nestedDashedDepartments: ['黄光制造部', '模组制造部'],
  },
];

const desktopNodes: DesktopNode[] = [
  { id: 'executive', label: '执行董事', x: 570, y: 12, width: 180, height: 56, variant: 'executive' },
  { id: 'admin', label: '行政副总经理', x: 306, y: 130, width: 168, height: 56, variant: 'leader' },
  { id: 'tech', label: '技术副总经理', x: 576, y: 130, width: 168, height: 56, variant: 'leader' },
  { id: 'tech-mgmt', label: '技术管理中心', x: 576, y: 228, width: 168, height: 50, variant: 'leader' },
  { id: 'tech-rd', label: '技术研发部', x: 576, y: 302, width: 168, height: 54, variant: 'leader' },
  { id: 'production', label: '生产副总经理', x: 926, y: 130, width: 168, height: 56, variant: 'leader' },

  { id: 'legal', label: '法务监察部', x: 84, y: 420, width: 64, height: 180, vertical: true },
  { id: 'finance', label: '财务部', x: 204, y: 420, width: 64, height: 180, vertical: true },

  { id: 'market', label: '市场部', x: 288, y: 420, width: 64, height: 180, vertical: true },
  { id: 'general', label: '综合管理部', x: 358, y: 420, width: 64, height: 180, vertical: true },
  { id: 'procurement', label: '采购部', x: 428, y: 420, width: 64, height: 180, vertical: true },

  { id: 'cover-tech', label: '盖板技术组', x: 508, y: 420, width: 64, height: 180, vertical: true },
  { id: 'yellow-tech', label: '黄光技术组', x: 628, y: 420, width: 64, height: 180, vertical: true, variant: 'dashed' },
  { id: 'module-tech', label: '模组技术组', x: 748, y: 420, width: 64, height: 180, vertical: true, variant: 'dashed' },

  { id: 'pmc', label: 'PMC', x: 838, y: 420, width: 64, height: 180, vertical: true },
  { id: 'quality', label: '品质部', x: 928, y: 420, width: 64, height: 180, vertical: true },
  { id: 'equipment', label: '装备动力部', x: 1018, y: 420, width: 64, height: 180, vertical: true },
  { id: 'production-dept', label: '生产部', x: 1070, y: 420, width: 160, height: 56, variant: 'leader' },

  { id: 'cover-manufacturing', label: '盖板制造部', x: 1058, y: 548, width: 64, height: 180, vertical: true },
  { id: 'yellow-manufacturing', label: '黄光制造部', x: 1118, y: 548, width: 64, height: 180, vertical: true, variant: 'dashed' },
  { id: 'module-manufacturing', label: '模组制造部', x: 1178, y: 548, width: 64, height: 180, vertical: true, variant: 'dashed' },
];

const desktopLines: Line[] = [
  { x: 660, y: 68, height: 32 },
  { x: 160, y: 100, width: 850 },

  { x: 160, y: 100, height: 220 },
  { x: 116, y: 320, width: 120 },
  { x: 116, y: 320, height: 100 },
  { x: 236, y: 320, height: 100 },

  { x: 390, y: 100, height: 30 },
  { x: 390, y: 186, height: 182 },
  { x: 320, y: 368, width: 140 },
  { x: 320, y: 368, height: 52 },
  { x: 390, y: 368, height: 52 },
  { x: 460, y: 368, height: 52 },

  { x: 660, y: 100, height: 30 },
  { x: 660, y: 186, height: 42 },
  { x: 660, y: 278, height: 24 },
  { x: 660, y: 356, height: 32 },
  { x: 540, y: 388, width: 240 },
  { x: 540, y: 388, height: 32 },
  { x: 660, y: 388, height: 32 },
  { x: 780, y: 388, height: 32 },

  { x: 1010, y: 100, height: 30 },
  { x: 1010, y: 186, height: 182 },
  { x: 870, y: 368, width: 280 },
  { x: 870, y: 368, height: 52 },
  { x: 960, y: 368, height: 52 },
  { x: 1050, y: 368, height: 52 },
  { x: 1150, y: 368, height: 52 },

  { x: 1150, y: 476, height: 40 },
  { x: 1090, y: 516, width: 120 },
  { x: 1090, y: 516, height: 32 },
  { x: 1150, y: 516, height: 32 },
  { x: 1210, y: 516, height: 32 },
];

const nodeClassMap: Record<NodeVariant, string> = {
  executive: 'border-slate-900 bg-slate-900 text-white shadow-lg shadow-slate-900/10',
  leader: 'border-slate-300 bg-white text-slate-900 shadow-sm',
  unit: 'border-slate-300 bg-white text-slate-800 shadow-sm',
  dashed: 'border-slate-400 bg-slate-50/90 text-slate-700 shadow-none border-dashed',
};

function Connector({ x, y, width, height }: Line) {
  const style: CSSProperties = {
    left: `${x}px`,
    top: `${y}px`,
    width: width ? `${width}px` : '2px',
    height: height ? `${height}px` : '2px',
  };

  return <span className="absolute rounded-full bg-slate-300" style={style} aria-hidden="true" />;
}

function VerticalLabel({ label }: { label: string }) {
  return (
    <span className="flex h-full flex-col items-center justify-center gap-1.5 text-[17px] font-semibold leading-none tracking-[0.08em]">
      {label.split('').map((char, index) => (
        <span key={`${label}-${index}`}>{char}</span>
      ))}
    </span>
  );
}

function OrgNode({ label, x, y, width, height, vertical = false, variant = 'unit' }: DesktopNode) {
  const style: CSSProperties = {
    left: `${x}px`,
    top: `${y}px`,
    width: `${width}px`,
    height: `${height}px`,
  };

  return (
    <div
      className={`absolute flex items-center justify-center rounded-2xl border text-center ${nodeClassMap[variant]} ${
        vertical ? 'px-2 py-4' : 'px-4 py-3 text-lg font-semibold'
      }`}
      style={style}
    >
      {vertical ? <VerticalLabel label={label} /> : <span>{label}</span>}
    </div>
  );
}

function MobileTag({ label, dashed = false }: { label: string; dashed?: boolean }) {
  return (
    <span
      className={`inline-flex items-center rounded-full border px-4 py-2 text-sm font-medium ${
        dashed ? 'border-dashed border-slate-400 bg-slate-50 text-slate-600' : 'border-slate-200 bg-white text-slate-700'
      }`}
    >
      {label}
    </span>
  );
}

export default function Structure() {
  return (
    <div className="animate-fade-in-up">
      <div className="mb-16 text-center">
        <h2 className="mb-6 text-3xl font-bold text-slate-900 md:text-5xl">组织架构</h2>
        <div className="mx-auto mb-6 h-1 w-20 rounded-full bg-accent"></div>
        <p className="mx-auto max-w-2xl text-lg text-slate-500">依据提供的组织关系图，对公司各管理线和部门层级进行结构化映射。</p>
      </div>

      <div className="space-y-8 lg:hidden">
        <div className="rounded-3xl border border-slate-200 bg-slate-900 px-6 py-5 text-center text-white shadow-lg shadow-slate-900/10">
          <p className="text-xl font-bold">执行董事</p>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="mb-4 flex items-center justify-between gap-4">
            <h3 className="text-lg font-bold text-slate-900">直属部门</h3>
            <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-500">按原图映射</span>
          </div>
          <div className="flex flex-wrap gap-3">
            {directDepartments.map((department) => (
              <MobileTag key={department} label={department} />
            ))}
          </div>
        </div>

        {branches.map((branch) => (
          <div key={branch.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-bold text-slate-900">{branch.title}</h3>

            {branch.chain && (
              <div className="mt-5 flex flex-col gap-3">
                {branch.chain.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-center text-sm font-semibold text-slate-700"
                  >
                    {item}
                  </div>
                ))}
              </div>
            )}

            <div className="mt-5 flex flex-wrap gap-3">
              {branch.departments.map((department) => (
                <MobileTag key={department} label={department} />
              ))}
              {branch.dashedDepartments?.map((department) => (
                <MobileTag key={department} label={department} dashed />
              ))}
            </div>

            {branch.nestedTitle && (
              <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <div className="mb-4 rounded-2xl border border-slate-300 bg-white px-4 py-3 text-center text-sm font-semibold text-slate-800">
                  {branch.nestedTitle}
                </div>
                <div className="flex flex-wrap gap-3">
                  {branch.nestedDepartments?.map((department) => (
                    <MobileTag key={department} label={department} />
                  ))}
                  {branch.nestedDashedDepartments?.map((department) => (
                    <MobileTag key={department} label={department} dashed />
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="hidden lg:block">
        <div className="overflow-x-auto pb-4">
          <div className="mx-auto w-[1320px] rounded-[32px] border border-slate-200 bg-gradient-to-b from-slate-50 via-white to-white p-8 shadow-[0_24px_60px_-36px_rgba(15,23,42,0.35)]">
            <div className="relative h-[740px]">
              {desktopLines.map((line, index) => (
                <Connector key={`${line.x}-${line.y}-${index}`} {...line} />
              ))}
              {desktopNodes.map((node) => (
                <OrgNode key={node.id} {...node} />
              ))}
            </div>
          </div>
        </div>
        <p className="mt-4 text-center text-sm text-slate-400">虚线边框节点已按原图样式保留展示。</p>
      </div>
    </div>
  );
}
