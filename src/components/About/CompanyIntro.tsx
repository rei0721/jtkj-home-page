export default function CompanyIntro() {
  return (
    <div className="animate-fade-in-up">
      <div className="mb-12 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-8">四川江天科技有限公司</h2>
        <div className="w-20 h-1 bg-accent mx-auto rounded-full mb-8"></div>
        <p className="text-lg md:text-xl text-slate-600 leading-relaxed text-justify md:text-center">
          四川江天科技有限公司，位于达州东部经济开发区，为县属国有企业，成立于2021年4月，注册资本5.5亿元，规划投资10亿元，占地面积103亩；
          作为达州开江工业史上落地最快、投资最大、科技含量最高的标杆项目，致力于打造川渝地区光电新材料产业核心基地；已成功获评国家高新技术企业、
          省企业技术中心、专精特新企业、科技型企业，市级工程技术研究中心和重点实验室。
          <br />
          公司设有盖板、黄光两个核心事业部。盖板事业部主营 2D、2.5D 、3D的车载、笔电、商显等显示屏以及中大尺寸玻璃盖板的设计、生产与销售，拥有3A全制程能力(含3A贴膜)。
          黄光事业部专注于触控及显示器件精密制造，掌握全国领先的微米/纳米级玻璃表面及ITO线路处理技术。
          公司能够为客户提供一站式的优质产品与服务解决方案，满足不同领域、不同客户的多样化需求。
        </p>
      </div>

      <div className="relative w-full h-[500px] md:h-[600px] rounded-2xl overflow-hidden shadow-2xl group">
        <img
          src="images/about/CompanyIntro.jpg"
          alt="Company Office Environment"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500 flex items-center justify-center">
          <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center cursor-pointer hover:bg-white/40 transition-all">
            <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[18px] border-l-white border-b-[10px] border-b-transparent ml-1"></div>
          </div>
        </div>
        <div className="absolute bottom-8 left-8 text-white">
          <h3 className="text-2xl font-bold mb-2">江天智造产业园</h3>
          <p className="opacity-90">以创新驱动发展，以品质赢得未来</p>
        </div>
      </div>
    </div>
  );
}
