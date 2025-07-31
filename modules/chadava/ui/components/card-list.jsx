
export default function ChadhavaCardList({title, subtitle, events, description, price}) {
  return (
    <div className="px-4 py-6 max-w-5xl mx-auto space-y-6">
        <div
          className={`border rounded-xl p-4 flex flex-col md:flex-row items-start md:items-center justify-between bg-gradient-to-r from-pink-50 to-white`}
        >
          <div className="flex-1">
            <h2 className={`text-lg font-semibold text-pink-600`}>
              {title}
            </h2>

            <p className="font-bold text-black mt-1">{subtitle}</p>

              <ul className="text-sm text-gray-600 mt-2 space-y-1">
                {events.map((event, i) => (
                  <li key={i} className="flex gap-2 items-center">
                    <span className="font-medium">{event.item}</span>
                    <span>•</span>
                    <span>{event.details}</span>
                    <span>•</span>
                    <span>{event.date}</span>
                  </li>
                ))}
              </ul>

            {description && (
              <p className="text-gray-600 text-sm mt-2">{description}</p>
            )}

            <p className="text-green-700 font-semibold text-lg mt-3">₹{price}</p>
          </div>

          {/* Image + Add Button */}
          <div className="mt-4 md:mt-0 md:ml-4 flex-shrink-0 text-center">
            <button className="mt-2 px-4 py-1 border border-green-500 text-green-600 font-semibold rounded hover:bg-green-50">
              + Add
            </button>
          </div>
        </div>
    </div>
  )
}