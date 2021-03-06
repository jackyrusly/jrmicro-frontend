import { useRouter } from 'next/router';
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
  const router = useRouter();

  return (
    <>
      <style global jsx>{`
        body {
          font-family: Helvetica;
          margin: 0;
        }
      `}</style>

      <style jsx>{`
        .margin {
          margin: 1em 0;
        }
      `}</style>

      <RemoteHeader router={router} />

      <div className="margin">
        <RemoteCard>
          <h2>Card Example</h2>
        </RemoteCard>
      </div>

      <RemoteFooter />
    </>
  );
};

export default Index;
