
import ClientHome from './components/ClientHome';
import { motion } from "framer-motion";
import { getUser, isUserAuthenticated } from '../actions/auth';
import Link from 'next/link';
import { Divider } from 'reablocks';
import { Count } from '@/components/utils/Count/Count';

export default async function Home() {
  const user = await getUser();
  const isAuthenticated = await isUserAuthenticated();


  return <ClientHome user={user} isAuthenticated={isAuthenticated} />;
}
