import { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';
import { postContactMessage } from '@/api/contact';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    type: '业务合作',
    name: '',
    phone: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      await postContactMessage({
        type: formData.type,
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        message: formData.message,
        sourcePage: window.location.href,
      });
      setSuccess(true);
      setFormData({
        type: '业务合作',
        name: '',
        phone: '',
        email: '',
        message: '',
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : '提交失败，请稍后重试');
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="w-full bg-white rounded-3xl shadow-xl p-8 md:p-16 border border-slate-100 text-center">
        <div className="flex flex-col items-center gap-6">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
            <CheckCircle size={48} className="text-green-600" />
          </div>
          <h3 className="text-2xl font-bold text-slate-800">提交成功</h3>
          <p className="text-slate-600">感谢您的留言，我们将尽快与您联系！</p>
          <button
            onClick={() => setSuccess(false)}
            className="px-8 py-3 bg-accent text-white rounded-full hover:bg-sky-600 transition-colors"
          >
            继续留言
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full bg-white rounded-3xl shadow-xl p-8 md:p-16 border border-slate-100">
      <form className="space-y-10" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="space-y-3 group">
            <label className="text-lg font-bold text-slate-700 ml-1 group-focus-within:text-accent transition-colors">
              咨询类型
            </label>
            <div className="relative">
              <select
                name="type"
                value={formData.type}
                onChange={handleChange}
                className="w-full px-6 py-5 rounded-xl border border-slate-300 focus:border-accent focus:ring-4 focus:ring-accent/10 outline-none transition-all bg-slate-50 hover:bg-white text-slate-700 text-lg appearance-none cursor-pointer"
              >
                <option>业务合作</option>
                <option>产品咨询</option>
                <option>技术支持</option>
                <option>投资者关系</option>
                <option>招贤纳士</option>
                <option>其他</option>
              </select>
              <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
          <div className="space-y-3 group">
            <label className="text-lg font-bold text-slate-700 ml-1 group-focus-within:text-accent transition-colors">
              姓名
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="请输入您的姓名"
              required
              className="w-full px-6 py-5 rounded-xl border border-slate-300 focus:border-accent focus:ring-4 focus:ring-accent/10 outline-none transition-all bg-slate-50 hover:bg-white text-lg placeholder:text-slate-400"
            />
          </div>
          <div className="space-y-3 group">
            <label className="text-lg font-bold text-slate-700 ml-1 group-focus-within:text-accent transition-colors">
              电话
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="请输入您的联系电话"
              required
              className="w-full px-6 py-5 rounded-xl border border-slate-300 focus:border-accent focus:ring-4 focus:ring-accent/10 outline-none transition-all bg-slate-50 hover:bg-white text-lg placeholder:text-slate-400"
            />
          </div>
          <div className="space-y-3 group">
            <label className="text-lg font-bold text-slate-700 ml-1 group-focus-within:text-accent transition-colors">
              电子邮件
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="example@email.com"
              className="w-full px-6 py-5 rounded-xl border border-slate-300 focus:border-accent focus:ring-4 focus:ring-accent/10 outline-none transition-all bg-slate-50 hover:bg-white text-lg placeholder:text-slate-400"
            />
          </div>
        </div>
        <div className="space-y-3 group">
          <label className="text-lg font-bold text-slate-700 ml-1 group-focus-within:text-accent transition-colors">
            留言内容
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={6}
            placeholder="请详细描述您的需求..."
            required
            className="w-full px-6 py-5 rounded-xl border border-slate-300 focus:border-accent focus:ring-4 focus:ring-accent/10 outline-none transition-all resize-none bg-slate-50 hover:bg-white text-lg placeholder:text-slate-400"
          ></textarea>
        </div>

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-600 px-6 py-4 rounded-xl text-center">
            {error}
          </div>
        )}

        <div className="text-center pt-8">
          <button
            type="submit"
            disabled={loading}
            className="px-16 py-5 bg-accent text-white font-bold text-xl rounded-full shadow-lg shadow-accent/30 hover:bg-sky-600 hover:shadow-xl hover:shadow-accent/40 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center mx-auto gap-3 w-full md:w-auto min-w-[300px] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
          >
            {loading ? (
              <>
                <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
                提交中...
              </>
            ) : (
              <>
                <Send size={24} />
                提交留言
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
