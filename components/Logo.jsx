import Image from 'next/image';

export default function Logo() {
  return (
    <a href="/#top" className="brand" aria-label="NexVora home">
      <Image className="brand-image" src="/logo.png" alt="" width={68} height={68} />
    </a>
  );
}
