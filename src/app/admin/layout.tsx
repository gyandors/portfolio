import { cookies } from "next/headers";
import { verify } from "jsonwebtoken";

import LoginForm from "@/components/admin/LoginForm";
import { MdWavingHand } from "react-icons/md";

interface User {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}

export default async function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  let user: User | null = null;

  try {
    const cookieStore = await cookies();
    const token = cookieStore.get("token");

    if (token) {
      const decoded = verify(token?.value!, process.env.SECRET_KEY!);
      user = decoded as User;
    }
  } catch (error) {
    console.error(error);
  }

  return (
    <>
      {user && (
        <header className="fixed top-0 w-full flex items-center justify-between text-white py-6 px-4 md:px-8 border-b border-gray-400">
          <h1 className="text-xl">
            Hi
            <MdWavingHand className="size-6 inline-block text-amber-200" />{" "}
            <span className="font-semibold">
              {user.firstName} {user.lastName}
            </span>
          </h1>
        </header>
      )}
      <main className="min-h-[100dvh] bg-gradient-to-b from-black via-gray-950 to-sky-950">
        {user ? children : <LoginForm />}
      </main>
    </>
  );
}
