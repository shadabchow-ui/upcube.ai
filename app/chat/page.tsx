import type { Metadata } from 'next';

import { ChatPage } from 'components/upcube-portal/chat-page';

export const metadata: Metadata = {
  title: 'UpcubeAI Chat',
  description: 'UpcubeAI Chat product overview page.',
};

export default function Page() {
  return <ChatPage />;
}
