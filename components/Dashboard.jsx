'use client';

import { motion } from "framer-motion";
import { HomeIcon } from "lucide-react";
import Todos from "@/components/Todos";

export default function Dashboard({ fetchedUser }) {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 px-6 py-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mx-auto max-w-5xl bg-white rounded-3xl shadow-xl p-10"
      >
        <header className="mb-10 text-center">
          <div className="flex justify-center items-center gap-2 mb-4">
            <HomeIcon className="w-8 h-8 text-blue-600" />
            <h1 className="text-4xl font-extrabold text-gray-800">
              Bienvenue, {fetchedUser.firstName} 👋
            </h1>
          </div>
          <p className="text-gray-500 text-lg">
            Gérez vos tâches efficacement depuis votre tableau de bord.
          </p>
        </header>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <Todos todos={fetchedUser.todos} user={fetchedUser} />
        </motion.section>
      </motion.div>
    </main>
  );
}
