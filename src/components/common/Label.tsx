export default function Label({
  htmlFor,
  label,
}: {
  htmlFor: string;
  label: string;
}) {
  return (
    <label
      htmlFor={htmlFor}
      className="text-sm font-semibold text-gray-300 mb-2 block"
    >
      {label}
      <span className="text-red-500">*</span>
    </label>
  );
}
