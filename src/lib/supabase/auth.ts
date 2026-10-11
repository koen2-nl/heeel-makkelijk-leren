import { createClient } from '@/lib/supabase/client';
import type { UserRole } from '@/types';

export async function getCurrentProfile() {
  const supabase = createClient();
  const { data: userData } = await supabase.auth.getUser();

  if (!userData.user) {
    return null;
  }

  const { data } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', userData.user.id)
    .maybeSingle();

  return data;
}

export async function getCurrentRole(): Promise<UserRole | null> {
  const profile = await getCurrentProfile();
  return profile?.role ?? null;
}

export async function isAdminUser() {
  const role = await getCurrentRole();
  return role === 'admin';
}

export async function signOutUser() {
  const supabase = createClient();
  await supabase.auth.signOut();
}
