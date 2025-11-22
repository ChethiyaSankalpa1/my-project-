export async function generateStaticParams() {
  return [
    { id: 'ella-day' },
    { id: '5d4n' },
    { id: 'haputale-day' },
    { id: '7d6n' },
    { id: '10d9n' },
    { id: '14d13n' }
  ];
}

export default function PackageLayout({ children }) {
  return children;
}
