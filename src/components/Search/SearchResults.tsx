import { useState, useMemo, useEffect, useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search, Clock, ArrowRight } from 'lucide-react';
import { generateNewsData } from '@/data/news/newsData';
import { generatePartyData } from '@/data/party/partyData';
import { DATA_STORE } from '@/data/products/productStore';
import { usePagination } from '@/hooks/usePagination';
import Pagination from '@/components/UI/Pagination';

/* ── unified search item types ── */

interface ArticleResult {
  id: string;
  title: string;
  date: string;
  category: string;
  summary: string;
  image: string;
}

interface ProductResult {
  id: string;
  name: string;
  image: string;
  categoryLabel: string;
  features: string[];
}

/* ── build searchable data once ── */

const allArticles: ArticleResult[] = (() => {
  const news = generateNewsData().map((n) => ({
    id: `news-${n.id}`,
    title: n.title,
    date: n.date,
    category:
      n.category === 'Tender'
        ? '招标公告'
        : n.category === 'Industry'
          ? '行业动态'
          : '公司新闻',
    summary: n.summary,
    image: n.image,
  }));

  const party = generatePartyData().map((p) => ({
    id: `party-${p.id}`,
    title: p.title,
    date: p.date,
    category: '党建动态',
    summary: p.summary,
    image: p.image,
  }));

  return [...news, ...party].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
})();

const allProducts: ProductResult[] = (() => {
  const products: ProductResult[] = [];
  Object.entries(DATA_STORE).forEach(([, cat]) => {
    cat.products.forEach((p) => {
      products.push({
        id: `product-${p.id}`,
        name: p.name,
        image: p.image,
        categoryLabel: cat.title,
        features: p.features,
      });
    });
  });
  return products;
})();

/* ── helpers ── */

function matchKeyword(text: string, keyword: string) {
  return text.toLowerCase().includes(keyword.toLowerCase());
}

function formatDay(dateStr: string) {
  const d = new Date(dateStr);
  return String(d.getDate()).padStart(2, '0');
}

function formatYearMonth(dateStr: string) {
  const d = new Date(dateStr);
  return `${d.getFullYear()}.${String(d.getMonth() + 1).padStart(2, '0')}`;
}

function formatFullDate(dateStr: string) {
  return dateStr; // already YYYY-MM-DD
}

/* ── component ── */

type Tab = 'articles' | 'products';

export default function SearchResults() {
  const [searchParams, setSearchParams] = useSearchParams();
  const queryFromUrl = searchParams.get('q') || '';
  const [inputValue, setInputValue] = useState(queryFromUrl);
  const [activeTab, setActiveTab] = useState<Tab>('articles');

  // sync input when url changes (e.g. browser back)
  useEffect(() => {
    setInputValue(queryFromUrl);
  }, [queryFromUrl]);

  const handleSearch = useCallback(
    (value: string) => {
      const trimmed = value.trim();
      setSearchParams(trimmed ? { q: trimmed } : {});
    },
    [setSearchParams],
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSearch(inputValue);
  };

  /* ── filter results ── */

  const filteredArticles = useMemo(() => {
    if (!queryFromUrl) return allArticles;
    return allArticles.filter(
      (a) =>
        matchKeyword(a.title, queryFromUrl) ||
        matchKeyword(a.summary, queryFromUrl) ||
        matchKeyword(a.category, queryFromUrl),
    );
  }, [queryFromUrl]);

  const filteredProducts = useMemo(() => {
    if (!queryFromUrl) return allProducts;
    return allProducts.filter(
      (p) =>
        matchKeyword(p.name, queryFromUrl) ||
        matchKeyword(p.categoryLabel, queryFromUrl) ||
        matchKeyword(p.features.join(' '), queryFromUrl),
    );
  }, [queryFromUrl]);

  const currentItems: (ArticleResult | ProductResult)[] =
    activeTab === 'articles' ? filteredArticles : filteredProducts;
  const totalCount = currentItems.length;

  const { currentPage, totalPages, displayedItems, goToPage, resetPage } = usePagination(
    currentItems,
    4,
  );

  // reset page when tab or query changes
  useEffect(() => {
    resetPage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeTab, queryFromUrl]);

  const handlePageChange = (page: number) => {
    goToPage(page);
    window.scrollTo({ top: 300, behavior: 'smooth' });
  };

  const tabs: { id: Tab; label: string }[] = [
    { id: 'articles', label: '文章' },
    { id: 'products', label: '产品' },
  ];

  return (
    <div className="min-h-screen bg-white pt-24">
      {/* ── Title ── */}
      <div className="text-center pt-12 pb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900">搜索结果</h1>
      </div>

      {/* ── Search Input ── */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl pb-10">
        <form onSubmit={handleSubmit} className="relative">
          <Search
            size={22}
            className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400"
          />
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="请输入"
            className="w-full pl-14 pr-6 py-4 border border-slate-200 rounded-full text-lg focus:outline-none focus:border-accent transition-colors"
          />
        </form>
      </div>

      {/* ── Tabs ── */}
      <div className="border-b border-slate-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="flex justify-center gap-16">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative pb-4 text-lg font-medium transition-colors ${
                    isActive ? 'text-slate-900' : 'text-slate-400 hover:text-slate-600'
                  }`}
                >
                  {tab.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-slate-900" />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* ── Results ── */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl py-8">
        <p className="text-sm text-slate-500 mb-8">
          为您找到{totalCount}个结果
        </p>

        {activeTab === 'articles' ? (
          <ArticleList items={displayedItems as ArticleResult[]} />
        ) : (
          <ProductList items={displayedItems as ProductResult[]} />
        )}

        <div className="mt-12">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </div>
      </div>
    </div>
  );
}

/* ── Article list ── */

function ArticleList({ items }: { items: ArticleResult[] }) {
  if (items.length === 0) {
    return <EmptyState text="暂无相关文章" />;
  }

  return (
    <div className="space-y-0 divide-y divide-slate-100">
      {items.map((item) => (
        <div
          key={item.id}
          className="flex gap-6 py-8 group cursor-pointer"
        >
          {/* image with date overlay */}
          <div className="relative flex-shrink-0 w-52 h-36 rounded-lg overflow-hidden bg-slate-100">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute top-3 left-3 bg-accent text-white px-2.5 py-1 rounded leading-none">
              <span className="block text-xl font-bold">{formatDay(item.date)}</span>
              <span className="block text-xs mt-0.5">{formatYearMonth(item.date)}</span>
            </div>
          </div>

          {/* content */}
          <div className="flex-1 min-w-0 flex flex-col justify-between">
            <div>
              <span className="inline-block text-xs font-medium text-accent border border-accent/30 bg-accent/5 px-2 py-0.5 rounded mb-2">
                {item.category}
              </span>
              <h3 className="text-lg font-bold text-slate-900 group-hover:text-accent transition-colors line-clamp-1 mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed line-clamp-2">
                {item.summary}
              </p>
            </div>
            <div className="flex items-center justify-between mt-3">
              <div className="flex items-center text-xs text-slate-400 gap-1">
                <Clock size={14} />
                <span>发布时间：{formatFullDate(item.date)}</span>
              </div>
              <span className="text-sm text-accent font-medium flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                阅读全文 <ArrowRight size={14} />
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

/* ── Product list ── */

function ProductList({ items }: { items: ProductResult[] }) {
  if (items.length === 0) {
    return <EmptyState text="暂无相关产品" />;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      {items.map((item) => (
        <div
          key={item.id}
          className="group flex gap-4 p-4 rounded-xl border border-slate-100 hover:shadow-lg hover:border-accent/20 transition-all cursor-pointer"
        >
          <div className="flex-shrink-0 w-28 h-28 rounded-lg overflow-hidden bg-slate-50">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <div className="flex-1 min-w-0 flex flex-col justify-center">
            <span className="text-xs text-accent font-medium mb-1">{item.categoryLabel}</span>
            <h3 className="text-base font-bold text-slate-900 group-hover:text-accent transition-colors line-clamp-1 mb-1">
              {item.name}
            </h3>
            <p className="text-sm text-slate-400 line-clamp-1">
              {item.features.join(' / ')}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

/* ── Empty state ── */

function EmptyState({ text }: { text: string }) {
  return (
    <div className="text-center py-20">
      <div className="bg-slate-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
        <Search size={32} className="text-slate-300" />
      </div>
      <h3 className="text-xl font-bold text-slate-700 mb-2">{text}</h3>
      <p className="text-slate-500">请尝试更换关键词搜索</p>
    </div>
  );
}
