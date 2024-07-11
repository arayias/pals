export default function BlogCard() {
  return (
    <div className="bg-slate-100 dark:bg-gray-700 shadow-lg rounded-lg hover:bg-slate-300 dark:hover:bg-gray-800 transition duration-200 ">
      <div className="p-4">
        <h1 className="text-xl font-semibold">Blog</h1>
        <p className="text-gray-500">This is a blog post</p>
        <span className="text-blue-500 hover:border-b-8 cursor-pointer">
          View Post
        </span>
      </div>
    </div>
  );
}
