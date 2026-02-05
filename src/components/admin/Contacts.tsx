import DeleteButton from "./DeleteButton";

export default function Contacts({
  contactMessages,
}: {
  contactMessages?: {
    _id: string;
    name: string;
    email: string;
    message: string;
  }[];
}) {
  return (
    <div className="p-4 md:p-8 text-white">
      <h1 className="text-lg font-semibold mb-4">Contact Messages</h1>
      {contactMessages && contactMessages.length > 0 ? (
        <div className="overflow-x-auto rounded-lg border border-gray-700">
          <table className="w-full">
            <thead className="bg-gray-900 border-b border-gray-700">
              <tr>
                <th className="px-3 md:px-6 py-3 text-left text-sm font-semibold text-cyan-400">
                  Name
                </th>
                <th className="px-3 md:px-6 py-3 text-left text-sm font-semibold text-cyan-400">
                  Email
                </th>
                <th className="px-3 md:px-6 py-3 text-left text-sm font-semibold text-cyan-400">
                  Message
                </th>
                <th className="px-3 md:px-6 py-3 text-left text-sm font-semibold text-cyan-400">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {contactMessages.map((contact, index) => (
                <tr
                  key={contact._id}
                  className={`${
                    index % 2 === 0 ? "bg-gray-950" : "bg-gray-900"
                  } border-b border-gray-700 hover:bg-gray-900 transition-colors`}
                >
                  <td className="px-3 md:px-6 py-4 text-sm">{contact.name}</td>
                  <td className="px-3 md:px-6 py-4 text-sm text-blue-400">
                    <a href={"mailto:" + contact.email}>{contact.email}</a>
                  </td>
                  <td className="px-3 md:px-6 py-4 text-sm max-w-md">
                    {contact.message}
                  </td>
                  <td className="px-3 md:px-6 py-4 text-sm">
                    <DeleteButton id={contact._id} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-gray-400">No contact messages to display.</p>
      )}
    </div>
  );
}
