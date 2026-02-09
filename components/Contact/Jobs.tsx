import React, { useState } from 'react';
import { ChevronDown, ChevronUp, MapPin, Clock, Briefcase } from 'lucide-react';
import ScrollAnimation from '../UI/ScrollAnimation';

interface Job {
  id: number;
  title: string;
  department: string;
  location: string;
  date: string;
  type: string;
  responsibilities: string[];
  requirements: string[];
}

const jobsData: Job[] = [
  {
    id: 1,
    title: '光电材料高级研发工程师',
    department: '研发中心',
    location: '深圳/达州',
    date: '2024-05-20',
    type: '全职',
    responsibilities: [
      '负责纳米银线、导电高分子等光电新材料的配方研发与性能优化；',
      '主导新产品的试产导入，解决生产过程中的材料技术难题；',
      '跟踪行业前沿技术动态，撰写专利申请文件与技术报告；',
      '协同工艺部门进行新材料的涂布、印刷等工艺适应性测试。'
    ],
    requirements: [
      '材料科学、化学工程、高分子等相关专业，硕士及以上学历；',
      '5年以上光电材料研发经验，熟悉触控显示材料特性者优先；',
      '具备独立承担研发项目的能力，良好的数据分析与实验设计能力；',
      '英语流利，能阅读及撰写英文技术文献。'
    ]
  },
  {
    id: 2,
    title: '大客户销售经理 (车载显示方向)',
    department: '营销中心',
    location: '上海/深圳',
    date: '2024-05-18',
    type: '全职',
    responsibilities: [
      '负责车载显示类大客户（Tier 1或主机厂）的开发与维护；',
      '挖掘客户需求，推广公司的触控显示一体化解决方案；',
      '负责商务谈判、合同签订及回款管理，完成年度销售目标；',
      '收集市场信息与竞争对手动态，为公司产品规划提供建议。'
    ],
    requirements: [
      '市场营销、电子工程等相关专业本科及以上学历；',
      '3年以上车载电子或显示行业销售经验，有Tier 1客户资源者优先；',
      '具备优秀的商务谈判能力、沟通协调能力及抗压能力；',
      '适应频繁出差。'
    ]
  },
  {
    id: 3,
    title: '自动化设备工程师',
    department: '制造中心',
    location: '达州',
    date: '2024-05-15',
    type: '全职',
    responsibilities: [
      '负责生产线自动化设备的日常维护、保养与故障排除；',
      '参与新设备的选型、安装、调试与验收工作；',
      '针对现有产线进行自动化升级改造，提升生产效率与良率；',
      '编写设备操作规程，对操作人员进行技术培训。'
    ],
    requirements: [
      '机械设计、自动化、机电一体化等相关专业本科及以上学历；',
      '3年以上自动化设备维护或设计经验，熟悉PLC编程者优先；',
      '熟悉机械原理、气动液压及电气控制知识；',
      '动手能力强，具备良好的团队合作精神。'
    ]
  },
  {
    id: 4,
    title: '品质主管 (QA/QC)',
    department: '品质部',
    location: '达州',
    date: '2024-05-10',
    type: '全职',
    responsibilities: [
      '建立健全公司质量管理体系，确保通过ISO9001、IATF16949等认证；',
      '负责来料、制程及出货全过程的质量控制与异常处理；',
      '组织召开质量分析会议，推动质量问题的持续改进；',
      '负责供应商质量管理及客户投诉处理。'
    ],
    requirements: [
      '电子、管理等相关专业本科及以上学历；',
      '5年以上电子制造行业品质管理经验，2年以上同岗位经验；',
      '精通QC七大手法、8D报告、FMEA等质量管理工具；',
      '熟悉IATF16949质量管理体系标准。'
    ]
  }
];

const Jobs: React.FC = () => {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      {/* 1. Hero Section */}
      <div className="relative h-[500px] md:h-[650px] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1581093588402-4a1195681407?q=80&w=2069&auto=format&fit=crop"
            alt="Optoelectronic Industry"
            className="w-full h-full object-cover"
          />
          {/* Blue/Tech Overlay */}
          <div className="absolute inset-0 bg-slate-900/60 bg-gradient-to-r from-blue-900/80 to-slate-900/60"></div>
        </div>
        <div className="relative z-10 text-center animate-fade-in-up px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-wider shadow-sm">
            光电新材料产业
          </h1>
          <div className="w-24 h-1.5 bg-accent mx-auto rounded-full mb-8 shadow-[0_0_15px_rgba(2,132,199,0.5)]"></div>
          <p className="mt-4 text-slate-100 text-xl md:text-2xl font-light tracking-widest max-w-4xl mx-auto leading-relaxed">
            为国家自主创新、自立自强、实现高质量发展增添助力
          </p>
        </div>
      </div>

      {/* 2. Job List Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-20">
        <ScrollAnimation>
            <div className="bg-white rounded-t-3xl shadow-xl p-8 md:p-12 min-h-[500px]">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">招贤纳士</h2>
                    <p className="text-slate-500">加入我们，共同探索光电科技的无限可能</p>
                </div>

                <div className="space-y-6">
                    {jobsData.map((job, index) => (
                        <div 
                            key={job.id} 
                            className={`border rounded-2xl transition-all duration-300 overflow-hidden ${
                                expandedId === job.id 
                                ? 'border-accent shadow-[0_10px_30px_-10px_rgba(2,132,199,0.2)] bg-slate-50/50' 
                                : 'border-slate-200 hover:border-accent/50 hover:shadow-md bg-white'
                            }`}
                        >
                            {/* Card Header (Clickable) */}
                            <div 
                                onClick={() => toggleExpand(job.id)}
                                className="p-6 md:p-8 cursor-pointer flex flex-col md:flex-row justify-between items-start md:items-center gap-4"
                            >
                                <div className="flex-grow">
                                    <div className="flex items-center gap-4 mb-2">
                                        <h3 className={`text-xl md:text-2xl font-bold transition-colors ${
                                            expandedId === job.id ? 'text-accent' : 'text-slate-800'
                                        }`}>
                                            {job.title}
                                        </h3>
                                        {expandedId !== job.id && (
                                            <span className="hidden md:inline-block px-3 py-1 bg-slate-100 text-slate-500 text-xs rounded-full font-medium">
                                                {job.department}
                                            </span>
                                        )}
                                    </div>
                                    <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-slate-500">
                                        <div className="flex items-center gap-1">
                                            <Briefcase size={16} />
                                            <span>{job.department}</span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <MapPin size={16} />
                                            <span>{job.location}</span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <Clock size={16} />
                                            <span>{job.date} 发布</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-center justify-between w-full md:w-auto">
                                    <span className={`md:hidden px-3 py-1 text-xs rounded-full font-medium ${
                                        expandedId === job.id ? 'bg-accent text-white' : 'bg-slate-100 text-slate-500'
                                    }`}>
                                        {expandedId === job.id ? '收起详情' : '查看详情'}
                                    </span>
                                    <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ml-4 ${
                                        expandedId === job.id ? 'bg-accent text-white rotate-180' : 'bg-slate-100 text-slate-400 group-hover:bg-accent/10'
                                    }`}>
                                        <ChevronDown size={20} />
                                    </div>
                                </div>
                            </div>

                            {/* Collapsible Content */}
                            <div className={`transition-all duration-500 ease-in-out ${
                                expandedId === job.id ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
                            }`}>
                                <div className="p-6 md:p-8 pt-0 border-t border-slate-200/50 mt-2">
                                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 pt-6 pb-6">
                                        <div>
                                            <h4 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
                                                <div className="w-1.5 h-6 bg-accent rounded-full"></div>
                                                岗位职责
                                            </h4>
                                            <ul className="space-y-3">
                                                {job.responsibilities.map((item, i) => (
                                                    <li key={i} className="flex items-start gap-3 text-slate-600 leading-relaxed">
                                                        <span className="w-1.5 h-1.5 bg-slate-300 rounded-full mt-2.5 flex-shrink-0"></span>
                                                        <span>{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
                                                <div className="w-1.5 h-6 bg-accent rounded-full"></div>
                                                任职要求
                                            </h4>
                                            <ul className="space-y-3">
                                                {job.requirements.map((item, i) => (
                                                    <li key={i} className="flex items-start gap-3 text-slate-600 leading-relaxed">
                                                        <span className="w-1.5 h-1.5 bg-slate-300 rounded-full mt-2.5 flex-shrink-0"></span>
                                                        <span>{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                
                <div className="mt-12 text-center text-slate-400 text-sm">
                    <p>简历投递邮箱：hr@optotech.com &nbsp;|&nbsp; 联系电话：0755-88889999 (转人力资源部)</p>
                </div>
            </div>
        </ScrollAnimation>
      </div>
    </div>
  );
};

export default Jobs;