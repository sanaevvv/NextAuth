'use client';
import { useSession, signOut, signIn } from 'next-auth/react';
import React from 'react';
import { UserCard } from './UserCard';

export const Login = () => {
  const { data: session } = useSession();

  if (session) {
    return (
      <>
        <button onClick={() => signOut()} style={{marginRight:10}}>Sign Out</button>
        <UserCard user={session?.user} />
      </>
    );
  } else {
    return (
      <>
        <button onClick={() => signIn()}>Sign In</button>
      </>
    );
  }
};
