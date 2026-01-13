export default function SectionHeading({ heading }: { heading: string }) {
  return (
    <h1 className="w-full text-2xl font-semibold pb-2 mb-12 border-b-2 border-b-gray-500">
      {heading}
    </h1>
  );
}
