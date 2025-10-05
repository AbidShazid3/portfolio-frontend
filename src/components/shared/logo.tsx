import Image from 'next/image';
import Link from 'next/link';

const Logo = () => {
    return (
        <Link href="/">
            <div className="relative w-8 h-8">
              <Image
                src="/Abid_Shadat_Noor_log.png"
                alt="asn"
                fill
                priority
                sizes="32px"
                style={{ objectFit: 'contain' }}
              />
            </div>
          </Link>
    );
};

export default Logo;