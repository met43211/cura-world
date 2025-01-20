import { permanentRedirect } from 'next/navigation';

function NotFound() {
  permanentRedirect('/');
}

export default NotFound;
