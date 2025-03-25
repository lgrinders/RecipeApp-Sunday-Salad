import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/",
  build: {
<<<<<<< HEAD
    outDir: "dist",
=======
    outDir: "dist", // Ensures Vercel picks up the correct output folder
>>>>>>> 4eed7e595f8fe8d88364d1f3cc9c43a75d0d9076
  },
});
