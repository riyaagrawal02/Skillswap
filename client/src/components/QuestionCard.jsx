const QuestionCard = ({ title, tags, author, replies }) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm border p-5 hover:shadow-md transition">
      <h2 className="font-semibold text-lg">{title}</h2>

      <div className="flex gap-2 mt-2 flex-wrap">
        {tags.map((tag, i) => (
          <span
            key={i}
            className="text-xs bg-indigo-50 text-indigo-600 px-2 py-1 rounded-full"
          >
            #{tag}
          </span>
        ))}
      </div>

      <div className="flex justify-between items-center mt-4 text-sm text-gray-500">
        <span>{author}</span>
        <span>{replies} replies</span>
      </div>
    </div>
  );
};

export default QuestionCard;
