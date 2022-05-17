import { Button, Link } from '@mui/material';

import { useSession, signIn, signOut } from "next-auth/react";

export default function Component() {
  const { data: session } = useSession()
  if (session) {
    return (
      <>
        Signed in as {session.user.email} <br />
        <Button
        component={Link}
        href="#"
        target="_self"
        size="large"
        variant="text"
        onClick={() => signOut()}
      >
        Sign Out
      </Button>
      </>
    )
  }
  return (
        <Button
        component={Link}
        href="#"
        target="_self"
        size="large"
        variant="text"
        onClick={() => signIn()}
      >
        Sign In
      </Button>
  )
}