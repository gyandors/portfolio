import Contacts from "@/components/admin/Contacts";

export default async function Admin() {
  let contactMessages;

  try {
    const baseUrl = process.env.BASE_URL;

    const response = await fetch(`${baseUrl}/api/contact`);
    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.message);
    }

    const data = result.data;

    contactMessages = data;
  } catch (error) {
    console.error(error);
  }

  return (
    <section className="pt-20">
      <Contacts contactMessages={contactMessages} />
    </section>
  );
}
