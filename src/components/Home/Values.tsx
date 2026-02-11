import ScrollAnimation from '@/components/UI/ScrollAnimation';

const values = [
  {
    title: '自主创新',
    description: '坚持核心技术自研，年研发投入超5亿，构建深厚技术护城河',
  },
  {
    title: '高端制造',
    description: '引入工业4.0智能产线，全流程自动化控制，打造标杆级数字化工厂',
  },
  {
    title: '可靠品质',
    description: '通过IATF16949车规认证，建立全生命周期质量追溯体系，品质坚如磐石',
  },
  {
    title: '完善服务',
    description: '构建全球化服务网络，24/7快速响应机制，做您最值得信赖的合作伙伴',
  },
];

export default function Values() {
  return (
    <div className="h-full w-full">
      <section className="relative h-full w-full overflow-hidden">
      {/* 背景图 */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/values-bg.png"
          alt="Values Background"
          className="w-full h-full object-cover object-center"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full relative z-10 flex flex-col">
        {/* 标题区域 */}
        <ScrollAnimation>
          <div className="text-center pt-16 lg:pt-24 mb-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">核心价值主张</h2>
            <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full mb-6"></div>
            <p className="text-white/80 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
              以自主创新为动力，以高端制造为基础，致力于为客户提供卓越品质与完善
            </p>
          </div>
        </ScrollAnimation>

        {/* 底部卡片 */}
        <div className="pb-12 lg:pb-16 mt-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {values.map((item, index) => (
              <ScrollAnimation key={item.title} delay={index * 150}>
                <div className="group p-4 lg:p-6 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <h3 className="text-lg lg:text-xl font-bold text-white mb-2 lg:mb-3">
                    {item.title}
                  </h3>
                  <p className="text-white/70 text-sm lg:text-base leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </div>
      </section>
    </div>
  );
}
