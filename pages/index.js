import { useSession, signIn, signOut } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();
  if (session) {
    console.log(session);
    return (
      <>
        Signed in as {session.user.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
        <pre>{JSON.stringify(session, null, 2)}</pre>
      </>
    );
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn("okta")}>Sign in</button>
    </>
  );
}
Home.auth = false;
