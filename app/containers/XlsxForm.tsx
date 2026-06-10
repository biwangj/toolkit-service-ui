export default function XlsxForm({ author, setAuthor, projName, setProjName, env, setEnv, darkMode }: any) {

  const inputField = (darkMode: boolean) => 
  `w-full rounded-xl px-3 py-2
             ${darkMode ? "bg-gray-600 border placeholder:text-gray-400" 
                        : "bg-white border placeholder:text-gray-500"}`
  
  return (
    <div className="mb-6">

      <label className="block text-sm font-medium mb-2">
        Environment <span className="text-red-500">*</span>
      </label>

      <div className="space-y-2 mb-4">
        {["SIT", "UAT"].map((val) => (
          <label key={val} className="flex items-center gap-2">
            <input
              type="radio"
              name="env"
              checked={env === val}
              onChange={() => setEnv(val)}
            />
            {val.replace("-", "")}
          </label>
        ))}
      </div>

      Project Name <span className="text-red-500">*</span>
      <input
        className={`${inputField(darkMode)} mb-2`}
        value={projName}
        onChange={(e) => setProjName(e.target.value)}
        placeholder="e.g. MCL-DMCT"
      />
      
      Your Name <span className="text-red-500">*</span>
      <input
        className={`${inputField(darkMode)}`}
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
    </div>
  );
}