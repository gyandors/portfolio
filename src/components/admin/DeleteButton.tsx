"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";
import { CgDanger } from "react-icons/cg";
import { MdDelete } from "react-icons/md";
import { RiLoader4Fill } from "react-icons/ri";

export default function DeleteButton({ id }: { id: string }) {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const handleDelete = async () => {
    setLoading(true);
    try {
      const response = await fetch(`/api/contact/${id}`, {
        method: "DELETE",
      });

      const result = await response.json();

      if (!response.ok) throw new Error(result.message);

      setOpen(false);
      router.refresh();
    } catch (error: any) {
      console.error(error);
      alert(error?.message || "Failed to delete");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <button
        type="button"
        aria-label="Delete message"
        onClick={() => setOpen(true)}
        className="text-red-600 hover:text-red-700 rounded text-sm p-1 transition-colors"
        title="Delete"
      >
        <MdDelete className="size-6" />
      </button>

      <AnimatePresence>
        {open && (
          <div className="fixed inset-0 z-50 flex items-center justify-center">
            <motion.div
              className="fixed inset-0 bg-black/50 backdrop-blur-sm"
              onClick={() => setOpen(false)}
              aria-hidden
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            <motion.div
              role="dialog"
              aria-modal="true"
              className="relative z-10 w-full max-w-md mx-4 rounded-lg bg-white text-black shadow-xl overflow-hidden"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <div className="p-4 md:p-6">
                <div className="flex items-cener gap-2 mb-4">
                  <CgDanger className="size-8 shrink-0 text-red-600" />
                  <div>
                    <h3 className="text-lg font-semibold">Delete message?</h3>
                    <p className="text-sm text-gray-600">
                      Are you sure you want to delete this message? This action
                      cannot be undone.
                    </p>
                  </div>
                </div>

                <div className="flex justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => setOpen(false)}
                    className="px-4 py-2 rounded-md bg-gray-100 text-sm text-gray-900 hover:bg-gray-200 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    onClick={handleDelete}
                    disabled={loading}
                    className="px-4 py-2 rounded-md bg-red-600 text-sm text-white hover:bg-red-700 transition-colors disabled:opacity-60"
                  >
                    {loading ? (
                      <RiLoader4Fill className="size-5 animate-spin" />
                    ) : (
                      "Delete"
                    )}
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
