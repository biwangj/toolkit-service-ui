export default function DocxForm({
  author,
  setAuthor,
  projName,
  setProjName,
  reviewer,
  setReviewer,
  approver,
  setApprover,
  darkMode
}: any) {

  const inputField = (darkMode: boolean) => 
  `w-full rounded-xl px-3 py-2
             ${darkMode ? "bg-gray-600 border placeholder:text-gray-400" 
                        : "bg-white border placeholder:text-gray-500"}`

  return (
    <div className="space-y-4">
      {/* Row 1 */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-1">
            SR Number + Project Name
            <span className="text-red-500"> *</span>
          </label>
          <input
            className={`${inputField(darkMode)}`}
            value={projName}
            onChange={(e) => setProjName(e.target.value)}
            placeholder="PID-002345"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">
            Your Name
            <span className="text-red-500"> *</span>
          </label>
          <input
            className={`${inputField(darkMode)}`}
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            placeholder="Juan Dela Cruz"
          />
        </div>
      </div>
      {/* Row 2 */}
      <div className="grid grid-cols-2 gap-4 mb-10">
        <div>
          <label className="block text-sm font-medium mb-1">
            Reviewer
            <span className="text-red-500"> *</span>
          </label>
          <input
            className={`${inputField(darkMode)}`}
            value={reviewer}
            onChange={(e) => setReviewer(e.target.value)}
            placeholder="Reviewer Name"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">
            Approver
            <span className="text-red-500"> *</span>
          </label>
          <input
            className={`${inputField(darkMode)}`}
            value={approver}
            onChange={(e) => setApprover(e.target.value)}
            placeholder="Approver Name"
          />
        </div>
      </div>
    </div>
  );
}
