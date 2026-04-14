export default function CompanyIntro() {
  return (
    <div className="animate-fade-in-up">
      <div className="mb-12 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-8">致力成为全球领先的光电新材料服务商</h2>
        <div className="w-20 h-1 bg-accent mx-auto rounded-full mb-8"></div>
        <p className="text-lg md:text-xl text-slate-600 leading-relaxed text-justify md:text-center">
          四川江天科技有限公司成立于 2021 年 4 月
          注册资本 5.5亿元，项目一期总投资10亿元，占地103亩，公司位于达州市东部经济开发区
          公司主营2D和3D的车载、笔电、智能家具、商显等显示屏产品一体化解决方案，为终端客户提供设计、生产与销售一站式服务
          达州工业史上落地时间最短、投资额度最大、科技含量最高、推进速度最快的重大产业项目
        </p>
      </div>

      <div className="relative w-full h-[500px] md:h-[600px] rounded-2xl overflow-hidden shadow-2xl group">
        <img
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1920&auto=format&fit=crop"
          alt="Company Office Environment"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500 flex items-center justify-center">
          <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center cursor-pointer hover:bg-white/40 transition-all">
            <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[18px] border-l-white border-b-[10px] border-b-transparent ml-1"></div>
          </div>
        </div>
        <div className="absolute bottom-8 left-8 text-white">
          <h3 className="text-2xl font-bold mb-2">智能化办公环境</h3>
          <p className="opacity-90">激发创新灵感，汇聚行业精英</p>
        </div>
      </div>
    </div>
  );
}
