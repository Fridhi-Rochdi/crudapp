import { currentUser } from "@clerk/nextjs/server";
import { getUser, addUser } from "@/actions/userActions";
import Dashboard from "@/components/Dashboard";

export default async function Home() {
  const user = await currentUser();

  if (!user) {
    return (
      <main className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-100 to-gray-200">
        <p className="text-center text-red-600 text-lg font-medium">
          Utilisateur non connecté
        </p>
      </main>
    );
  }

  const dbUser = await getUser(user.id);

  if (!dbUser) {
    await addUser({
      clerkId: user.id,
      email: user.emailAddresses[0].emailAddress,
      name: user.username || user.firstName || "",
      firstName: user.firstName || "",
      lastName: user.lastName || "",
      photo: user.imageUrl || "",
    });
  }

  const fetchedUser = await getUser(user.id);

  if (!fetchedUser) {
    return (
      <main className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-100 to-gray-200">
        <p className="text-center text-red-600 text-lg font-medium">
          Utilisateur non trouvé
        </p>
      </main>
    );
  }

  // Passer les données à un composant client
  return <Dashboard fetchedUser={fetchedUser} />;
}
