import type { DefaultSession } from 'next-auth';
import type { FC } from 'react';

type Prop = {
  user: DefaultSession['user'];
};

export const UserCard: FC<Prop> = ({ user }) => {
  return <span>{user?.name}さん、こんにちは！</span>;
};
