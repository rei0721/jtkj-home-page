import { useParams, useNavigate } from 'react-router-dom';
import { Calendar, ArrowLeft } from 'lucide-react';
import { getNewsById, generateNewsData } from '@/data/news/newsData';
import { Link } from 'react-router-dom';

const categoryLabel: Record<string, string> = {
  Company: '公司新闻',
  Industry: '行业动态',
  Tender: '招标公告',
};

export default function NewsArticle() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const article = getNewsById(Number(id));

  if (!article) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">文章未找到</h2>
          <button onClick={() => navigate('/news')} className="text-accent font-semibold hover:underline">
            返回新闻中心
          </button>
        </div>
      </div>
    );
  }

  const allNews = generateNewsData();
  const currentIndex = allNews.findIndex((item) => item.id === article.id);
  const prevArticle = currentIndex > 0 ? allNews[currentIndex - 1] : null;
  const nextArticle = currentIndex < allNews.length - 1 ? allNews[currentIndex + 1] : null;

  const contentParagraphs = (article.content || article.summary).split('\n').filter((p: string) => p.trim());

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Banner */}
      <div className="relative h-[400px] md:h-[500px] w-full overflow-hidden">
        <img src={article.image} alt={article.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-slate-900/70 bg-gradient-to-t from-slate-950/90 to-slate-900/50"></div>
        <div className="absolute inset-0 flex items-end">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-16">
            <button
              onClick={() => navigate('/news')}
              className="flex items-center text-white/80 hover:text-white mb-8 transition-colors"
            >
              <ArrowLeft size={18} className="mr-2" />
              返回新闻中心
            </button>
            <span className="inline-block px-3 py-1 bg-accent text-white text-sm font-bold tracking-wide rounded mb-4">
              {categoryLabel[article.category] || article.category}
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight max-w-4xl">
              {article.title}
            </h1>
            <div className="flex items-center gap-6 mt-6 text-white/70">
              <div className="flex items-center">
                <Calendar size={16} className="mr-2" />
                <span>{article.date}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-3xl mx-auto">
          <article className="prose prose-lg prose-slate max-w-none">
            {contentParagraphs.map((paragraph: string, index: number) => (
              <p key={index} className="text-lg text-slate-700 leading-relaxed mb-6">
                {paragraph}
              </p>
            ))}
          </article>

          {/* Article Footer */}
          <div className="mt-16 pt-8 border-t border-slate-200">
            <div className="flex items-center text-slate-400 text-sm">
              <Calendar size={16} className="mr-2" />
              发布时间：{article.date}
            </div>
          </div>

          {/* Prev / Next Navigation */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
            {prevArticle ? (
              <Link
                to={`/news/article/${prevArticle.id}`}
                className="group p-6 rounded-xl border border-slate-200 hover:border-accent/30 hover:bg-sky-50/50 transition-all"
              >
                <span className="text-sm text-slate-400">上一篇</span>
                <p className="text-slate-800 font-semibold mt-1 group-hover:text-accent transition-colors line-clamp-1">
                  {prevArticle.title}
                </p>
              </Link>
            ) : (
              <div />
            )}
            {nextArticle && (
              <Link
                to={`/news/article/${nextArticle.id}`}
                className="group p-6 rounded-xl border border-slate-200 hover:border-accent/30 hover:bg-sky-50/50 transition-all text-right"
              >
                <span className="text-sm text-slate-400">下一篇</span>
                <p className="text-slate-800 font-semibold mt-1 group-hover:text-accent transition-colors line-clamp-1">
                  {nextArticle.title}
                </p>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}