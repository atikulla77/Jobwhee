import { useEffect, useState } from 'react';
import { getSession } from 'next-auth/react';
import { jwtDecode } from 'jwt-decode';

interface IUser {
    email: string,
    id: number,
    role: string,
    firstName: string,
    lastName: string,
    country: string,
    iat: number,
    exp: number
}


export const useUser = () => {
  const [user, setUser] = useState<IUser | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      const session = await getSession();
      const token = session?.accessToken;
      if (token) {
        const decodedUser = jwtDecode(token) as IUser;
        setUser(decodedUser);
      }
    };

    fetchUser();
  }, []);

  return user;
};
