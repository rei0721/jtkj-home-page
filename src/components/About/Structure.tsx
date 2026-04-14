import type { CSSProperties } from 'react';

type NodeVariant = 'executive' | 'leader' | 'unit' | 'highlight';

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
  directDepartments?: string[];
  businessUnit?: string;
  businessDepartments?: string[];
};

const directDepartments = ['内控内审部', '工会', '财务部'];

const branches: Branch[] = [
  {
    title: '行政副总',
    directDepartments: ['综合管理部', '采购部', '市场部'],
  },
  {
    title: '生产副总',
    businessUnit: '盖板事业部',
    businessDepartments: ['技术研发部', '生产部', '品质部'],
  },
  {
    title: '生产副总',
    businessUnit: '黄光事业部',
    businessDepartments: ['技术研发部', '生产部', '品质部'],
  },
];

const desktopNodes: DesktopNode[] = [
  { id: 'executive', label: '执行董事', x: 560, y: 34, width: 220, height: 56, variant: 'executive' },

  { id: 'gm', label: '总经理', x: 760, y: 145, width: 150, height: 56, variant: 'leader' },

  { id: 'admin-vp', label: '行政副总', x: 540, y: 290, width: 150, height: 56, variant: 'leader' },
  { id: 'prod-vp-1', label: '生产副总', x: 790, y: 290, width: 150, height: 56, variant: 'leader' },
  { id: 'prod-vp-2', label: '生产副总', x: 1040, y: 290, width: 150, height: 56, variant: 'leader' },

  { id: 'cover-bu', label: '盖板事业部', x: 785, y: 398, width: 160, height: 52, variant: 'highlight' },
  { id: 'yellow-bu', label: '黄光事业部', x: 1035, y: 398, width: 160, height: 52, variant: 'highlight' },

  { id: 'audit', label: '内控内审部', x: 118, y: 520, width: 56, height: 208, vertical: true },
  { id: 'union', label: '工会', x: 238, y: 520, width: 56, height: 208, vertical: true },
  { id: 'finance', label: '财务部', x: 358, y: 520, width: 56, height: 208, vertical: true },

  { id: 'general', label: '综合管理部', x: 490, y: 560, width: 56, height: 168, vertical: true },
  { id: 'purchase', label: '采购部', x: 585, y: 560, width: 56, height: 168, vertical: true },
  { id: 'market', label: '市场部', x: 680, y: 560, width: 56, height: 168, vertical: true },

  { id: 'cover-rd', label: '技术研发部', x: 790, y: 595, width: 56, height: 133, vertical: true },
  { id: 'cover-prod', label: '生产部', x: 885, y: 595, width: 56, height: 133, vertical: true },
  { id: 'cover-quality', label: '品质部', x: 980, y: 595, width: 56, height: 133, vertical: true },

  { id: 'yellow-rd', label: '技术研发部', x: 1065, y: 595, width: 56, height: 133, vertical: true },
  { id: 'yellow-prod', label: '生产部', x: 1160, y: 595, width: 56, height: 133, vertical: true },
  { id: 'yellow-quality', label: '品质部', x: 1255, y: 595, width: 56, height: 133, vertical: true },
];

const desktopLines: Line[] = [
  // 执行董事 -> 顶部主干线
  { x: 670, y: 90, height: 26 },

  // 顶部主干线
  { x: 140, y: 116, width: 670 },

  // 左侧直属部门三根下引线
  { x: 140, y: 116, height: 404 },
  { x: 260, y: 116, height: 404 },
  { x: 380, y: 116, height: 404 },

  // 顶部主干线 -> 总经理
  { x: 810, y: 116, width: 25 },
  { x: 835, y: 116, height: 29 },

  // 总经理 -> 下方主横线
  { x: 835, y: 201, height: 58 },
  { x: 470, y: 259, width: 665 },

  // 主横线 -> 三位副总
  { x: 615, y: 259, height: 31 },
  { x: 865, y: 259, height: 31 },
  { x: 1115, y: 259, height: 31 },

  // 行政副总 -> 三部门
  { x: 615, y: 346, height: 48 },
  { x: 520, y: 394, width: 200 },
  { x: 520, y: 394, height: 166 },
  { x: 615, y: 394, height: 166 },
  { x: 710, y: 394, height: 166 },

  // 生产副总1 -> 盖板事业部
  { x: 865, y: 346, height: 52 },
  { x: 865, y: 450, height: 38 },
  { x: 818, y: 488, width: 190 },
  { x: 818, y: 488, height: 107 },
  { x: 913, y: 488, height: 107 },
  { x: 1008, y: 488, height: 107 },

  // 生产副总2 -> 黄光事业部
  { x: 1115, y: 346, height: 52 },
  { x: 1115, y: 450, height: 38 },
  { x: 1093, y: 488, width: 190 },
  { x: 1093, y: 488, height: 107 },
  { x: 1188, y: 488, height: 107 },
  { x: 1283, y: 488, height: 107 },
];

const nodeClassMap: Record<NodeVariant, string> = {
  executive: 'border-neutral-700 bg-white text-neutral-900 shadow-none',
  leader: 'border-neutral-700 bg-white text-neutral-900 shadow-none',
  unit: 'border-neutral-700 bg-white text-neutral-900 shadow-none',
  highlight: 'border-indigo-500 bg-indigo-500 text-white shadow-[0_10px_22px_rgba(99,102,241,0.18)]',
};

function Connector({ x, y, width, height }: Line) {
  const style: CSSProperties = {
    left: `${x}px`,
    top: `${y}px`,
    width: width ? `${width}px` : '2px',
    height: height ? `${height}px` : '2px',
  };

  return <span className="absolute bg-neutral-700" style={style} aria-hidden="true" />;
}

function VerticalLabel({ label }: { label: string }) {
  return (
    <span className="flex h-full flex-col items-center justify-center text-[15px] font-semibold leading-[1.04] tracking-[0.01em]">
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
      className={`absolute flex items-center justify-center border text-center ${nodeClassMap[variant]} ${vertical ? 'px-1 py-2' : 'px-4 py-3 text-lg font-semibold'
        }`}
      style={style}
    >
      {vertical ? <VerticalLabel label={label} /> : <span>{label}</span>}
    </div>
  );
}

function MobileTag({ label, highlight = false }: { label: string; highlight?: boolean }) {
  return (
    <span
      className={`inline-flex items-center rounded-md border px-4 py-2 text-sm font-medium ${highlight ? 'border-indigo-500 bg-indigo-500 text-white' : 'border-neutral-300 bg-white text-neutral-800'
        }`}
    >
      {label}
    </span>
  );
}

export default function Structure() {
  return (
    <div className="animate-fade-in-up">
      <div className="mb-14 text-center">
        <h2 className="mb-5 text-3xl font-bold text-slate-900 md:text-5xl">组织架构</h2>
        <div className="mx-auto mb-5 h-1 w-20 rounded-full bg-accent"></div>
        <p className="mx-auto max-w-2xl text-lg text-slate-500">依据组织关系图对管理层级与部门归属进行可视化展示。</p>
      </div>

      <div className="space-y-6 lg:hidden">
        <div className="border border-neutral-700 bg-white px-6 py-4 text-center">
          <p className="text-xl font-bold text-neutral-900">执行董事</p>
        </div>

        <div className="border border-neutral-700 bg-white px-6 py-4 text-center">
          <p className="text-xl font-bold text-neutral-900">总经理</p>
        </div>

        <div className="border border-neutral-200 bg-white p-5">
          <h3 className="mb-4 text-lg font-bold text-neutral-900">直属部门</h3>
          <div className="flex flex-wrap gap-3">
            {directDepartments.map((department) => (
              <MobileTag key={department} label={department} />
            ))}
          </div>
        </div>

        {branches.map((branch, index) => (
          <div key={`${branch.title}-${index}`} className="border border-neutral-200 bg-white p-5">
            <h3 className="text-lg font-bold text-neutral-900">{branch.title}</h3>

            {branch.directDepartments && (
              <div className="mt-4 flex flex-wrap gap-3">
                {branch.directDepartments.map((department) => (
                  <MobileTag key={department} label={department} />
                ))}
              </div>
            )}

            {branch.businessUnit && (
              <div className="mt-4 space-y-4">
                <div>
                  <MobileTag label={branch.businessUnit} highlight />
                </div>
                <div className="flex flex-wrap gap-3">
                  {branch.businessDepartments?.map((department) => (
                    <MobileTag key={department} label={department} />
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="hidden lg:block">
        <div className="overflow-x-auto pb-4">
          <div className="mx-auto w-[1400px] bg-[#f5f5f5] p-8">
            <div className="relative h-[780px]">
              {desktopLines.map((line, index) => (
                <Connector key={`${line.x}-${line.y}-${index}`} {...line} />
              ))}
              {desktopNodes.map((node) => (
                <OrgNode key={node.id} {...node} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}