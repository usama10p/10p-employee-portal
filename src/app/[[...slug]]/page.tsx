import '../../styles/tailwind.css'
import { ClientOnly } from './client'

 
// Generate static params for the dynamic route
export function generateStaticParams() {
  // Define all possible paths
  return [
    { slug: [] },        // For the base route
    { slug: ['user-profile'] } // Add more paths as needed
  ];
}
 
export default function Page() {
  return <ClientOnly />
}