import { useState } from 'react';
import { ChevronDown, MapPin, Clock, Briefcase } from 'lucide-react';
import { jobsData } from '@/data/jobs/jobsData';
import PageHero from '@/components/Layout/PageHero';
import ScrollAnimation from '@/components/UI/ScrollAnimation';

export default function Jobs() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      <PageHero
        title="光电新材料产业"
        subtitle="为国家自主创新、自立自强、实现高质量发展增添助力"
        backgroundImage="https://images.unsplash.com/photo-1581093588402-4a1195681407?q=80&w=2069&auto=format&fit=crop"
        overlayClassName="bg-slate-900/60 bg-gradient-to-r from-blue-900/80 to-slate-900/60"
        accentBarClassName="bg-accent shadow-[0_0_15px_rgba(2,132,199,0.5)]"
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-20">
        <ScrollAnimation>
          <div className="bg-white rounded-t-3xl shadow-xl p-8 md:p-12 min-h-[500px]">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">招贤纳士</h2>
              <p className="text-slate-500">加入我们，共同探索光电科技的无限可能</p>
            </div>

            <div className="space-y-6">
              {jobsData.map((job) => (
                <div
                  key={job.id}
                  className={`border rounded-2xl transition-all duration-300 overflow-hidden ${
                    expandedId === job.id
                      ? 'border-accent shadow-[0_10px_30px_-10px_rgba(2,132,199,0.2)] bg-slate-50/50'
                      : 'border-slate-200 hover:border-accent/50 hover:shadow-md bg-white'
                  }`}
                >
                  <div onClick={() => toggleExpand(job.id)} className="p-6 md:p-8 cursor-pointer flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <div className="flex-grow">
                      <div className="flex items-center gap-4 mb-2">
                        <h3 className={`text-xl md:text-2xl font-bold transition-colors ${expandedId === job.id ? 'text-accent' : 'text-slate-800'}`}>{job.title}</h3>
                        {expandedId !== job.id && (
                          <span className="hidden md:inline-block px-3 py-1 bg-slate-100 text-slate-500 text-xs rounded-full font-medium">{job.department}</span>
                        )}
                      </div>
                      <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-slate-500">
                        <div className="flex items-center gap-1"><Briefcase size={16} /><span>{job.department}</span></div>
                        <div className="flex items-center gap-1"><MapPin size={16} /><span>{job.location}</span></div>
                        <div className="flex items-center gap-1"><Clock size={16} /><span>{job.date} 发布</span></div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between w-full md:w-auto">
                      <span className={`md:hidden px-3 py-1 text-xs rounded-full font-medium ${expandedId === job.id ? 'bg-accent text-white' : 'bg-slate-100 text-slate-500'}`}>
                        {expandedId === job.id ? '收起详情' : '查看详情'}
                      </span>
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ml-4 ${expandedId === job.id ? 'bg-accent text-white rotate-180' : 'bg-slate-100 text-slate-400'}`}>
                        <ChevronDown size={20} />
                      </div>
                    </div>
                  </div>

                  <div className={`transition-all duration-500 ease-in-out ${expandedId === job.id ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
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
}
