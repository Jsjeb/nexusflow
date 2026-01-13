import dynamic from 'next/dynamic';

const NexusFlow = dynamic(() => import('@/components/NexusFlow'), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-black">
      <p className="text-white">Loading NexusFlow...</p>
    </div>
  ),
});

export default function Home() {
  return <NexusFlow />;
}
