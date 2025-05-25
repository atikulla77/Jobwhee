import { useEffect, useState } from 'react';
import useSWR from 'swr';
import { getSession } from 'next-auth/react';
import { getTalentProfileById } from '@/lib/api/talent/talentById/getProfileById';

export function useTalentProfile() {
  const [talentIdNumber, setTalentIdNumber] = useState<number | null>();
  const { data, error, mutate, isLoading } = useSWR(
    talentIdNumber ? `userProfile/${talentIdNumber}` : null,
    () => (talentIdNumber ? getTalentProfileById(talentIdNumber) : null)
  );

  useEffect(() => {
    const fetchData = async () => {
      const session = await getSession();
      if (session?.id) {
        setTalentIdNumber(parseInt(session.id, 10));
      }
    };
    fetchData();
  }, []);

  return {
    talentIdNumber,
    user: data?.data,
    error,
    mutate,
    isLoading: !data && !error,
  };
}
