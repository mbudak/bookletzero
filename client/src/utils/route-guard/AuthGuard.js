import PropTypes from 'prop-types';
import { useRouter } from 'next/router';

// Next-Auth
import { useSession, signIn, signOut } from "next-auth/react";

// project imports
// import useAuth from 'hooks/useAuth';
import { useEffect } from 'react';
// ==============================|| AUTH GUARD ||============================== //

/**
 * Authentication guard for routes
 * @param {PropTypes.node} children children element/node
 */
 
const AuthGuard = ({ children }) => {
  // const { data: session } = useSession();
  const isLoggedIn = false;
  
  const router = useRouter();
  useEffect(() => {
    if (!isLoggedIn) {
      router.push('/login');
    }
    // eslint-disable-next-line
  }, [isLoggedIn]);

  return children;
};

AuthGuard.propTypes = {
  children: PropTypes.node
};

export default AuthGuard;
