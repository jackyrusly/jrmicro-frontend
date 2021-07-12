import dynamic from 'next/dynamic';
import Link from 'next/link';

const RemoteHeader = dynamic(() => import('jrcommon/components/header'), {
  ssr: false,
});

const RemoteFooter = dynamic(() => import('jrcommon/components/footer'), {
  ssr: false,
});

const RemoteCard = dynamic(() => import('jrcommon/components/card'), {
  ssr: false,
});

const Index = () => {
  return (
    <>
      <style jsx>{`
        .margin {
          margin: 1em 0;
        }
      `}</style>

      <RemoteHeader />

      <div className="margin">
        <RemoteCard>
          <h2>Card Example</h2>
        </RemoteCard>
      </div>

      <div>
        <Link href="/about">About</Link>
      </div>

      <div>
        <Link href="/privacy-policy">Privacy Policy</Link>
      </div>

      <RemoteFooter />
    </>
  );
};

export default Index;
