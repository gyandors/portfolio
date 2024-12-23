import { useEffect } from "react";

export default function Loading() {
  useEffect(() => {
    document.body.classList.add("loading");
    return () => {
      document.body.classList.remove("loading");
    };
  }, []);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 overflow-hidden">
      <div className="bg-white p-4 rounded-lg shadow-lg flex flex-col items-center">
        <div className="w-12 h-12 border-4 border-gray-200 border-t-blue-500 rounded-full animate-spin"></div>
        <p className="mt-4 text-gray-700">Loading...</p>
      </div>
    </div>
  );
}
