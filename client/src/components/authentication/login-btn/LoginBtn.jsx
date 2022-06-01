import { Button, Link } from '@mui/material';
import { useSession, signIn, signOut } from "next-auth/react";

export default function Component() {
  const { status } = useSession({ required: true })
  
  if (status === 'loading') {
    return (
      <>
        <Button        
        size="large"
        variant="text"
      >
        Loading...
      </Button>
      </>
    )
  }

  if (status) {
    return (
      <>
        <Button
        component={Link}
        href="/me/profile"
        target="_self"
        size="large"
        variant="text"
      >
        Profile
      </Button>
      </>
    )
  } else 
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