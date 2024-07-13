import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

export default async function MainPage() {
  const session = await getServerSession();
  if (!session) {
    redirect('/');
  }
}
