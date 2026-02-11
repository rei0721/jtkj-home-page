import CountUp from '@/components/UI/CountUp';
import { useCompanyMetrics } from '@/hooks/useCompanyMetrics';
import ScrollAnimation from '@/components/UI/ScrollAnimation';

export default function Stats() {
  const { stats, loading, error } = useCompanyMetrics();

  return (
    <div className="h-full w-full">
      <section className="relative h-full w-full overflow-hidden bg-[#1a2744]">
        {/* 右侧人物图片 - 绝对定位撑满右侧 */}
        <div
          className="absolute inset-0 bg-no-repeat bg-right"
          style={{ backgroundImage: 'url(/images/worker.png)', backgroundSize: 'auto 100%' }}
        />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full relative z-10">
          <div className="flex flex-col lg:flex-row items-center h-full py-12 lg:py-0">
            {/* 左侧内容 - 垂直居中 */}
            <div className="w-full lg:w-1/2 lg:pr-12">
              <ScrollAnimation>
                <div className="mb-8 lg:mb-12">
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 lg:mb-6">
                    中国光电新材料产业
                  </h2>
                  <p className="text-base md:text-lg text-slate-300 leading-relaxed">
                    为国家自主创新、自立自强、实现高质量发展增添助力。
                    <br />
                    面向未来，坚持"艰苦奋斗，创业创新"的精神。
                  </p>
                </div>
              </ScrollAnimation>

              {/* 统计卡片 - 2x2 网格 */}
              <div className="grid grid-cols-2 gap-3 lg:gap-4">
                {loading ? (
                  <div className="col-span-2 flex items-center justify-center py-8">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
                  </div>
                ) : error ? (
                  <div className="col-span-2 text-center text-red-400 py-4">{error}</div>
                ) : (
                  stats.map((stat, index) => (
                    <ScrollAnimation key={stat.id} delay={index * 150}>
                      <div className="group relative p-4 lg:p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 text-center">
                        <div className="flex items-baseline justify-center mb-1 lg:mb-2 font-bold text-white">
                          {stat.prefix && (
                            <span className="text-base md:text-lg mr-1 text-blue-400 font-medium">
                              {stat.prefix}
                            </span>
                          )}
                          <span className="text-2xl md:text-4xl tracking-tight text-white">
                            <CountUp end={stat.value} duration={2500} />
                          </span>
                          <span className="text-sm md:text-base ml-1 text-slate-300 font-medium">
                            {stat.suffix}
                          </span>
                        </div>
                        <h3 className="text-slate-300 text-xs md:text-sm font-medium">
                          {stat.label}
                        </h3>
                      </div>
                    </ScrollAnimation>
                  ))
                )}
              </div>
            </div>

            {/* 移动端图片 */}
            <div className="lg:hidden w-full mt-8">
              <img
                src="/images/worker.png"
                alt="Worker"
                className="w-full h-[250px] object-cover object-center rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
