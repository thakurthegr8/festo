import Landing from "@/src/pages/Landing";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();
  return <Landing/>
}
Home.auth = false;
