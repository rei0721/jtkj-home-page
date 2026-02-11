export default function CompanyIntro() {
  return (
    <div className="animate-fade-in-up">
      <div className="mb-12 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-8">致力成为全球领先的光电新材料服务商</h2>
        <div className="w-20 h-1 bg-accent mx-auto rounded-full mb-8"></div>
        <p className="text-lg md:text-xl text-slate-600 leading-relaxed text-justify md:text-center">
          光电新材料股份有限公司成立于2010年，是一家专注于光电显示领域核心材料研发、生产与销售的高新技术企业。
          公司坐落于深圳高新技术产业园，占地面积超800亩，拥有国际一流的千级无尘净化车间和全自动化生产线。
          我们始终秉承"技术驱动，品质为先"的经营理念，为全球消费电子、智能汽车、工控医疗等领域的客户提供
          具有竞争力的触控显示一体化解决方案。
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
