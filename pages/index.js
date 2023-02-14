import Landing from "@/src/pages/Landing";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

export default function Home() {
  const { status, data: session } = useSession();
  const router = useRouter();
  if (status === "authenticated")  router.push("/events");
  return <Landing />;
}
Home.auth = false;
