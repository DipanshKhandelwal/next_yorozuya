import Link from "next/link";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { SolanaLogo } from "./SolanaLogo";

export default function Navbar() {
  return (
    <div className={"container mx-auto max-w-6xl p-4 2xl:px-0"}>
      <div className="navbar mb-2 shadow-lg bg-black text-neutral-content rounded-box">
        <div className="flex-1">
          <div className="text-left leading-3 px-2 mr-5">
            <span className="text-lg font-bold">
              <Link href="/">
                <a>HOME</a>
              </Link>
            </span>
          </div>
          <div className="text-left px-2 mr-5">
            <span className="text-lg font-bold">
              <Link href="/transfer">
                <a>Payment Transfer</a>
              </Link>
            </span>
          </div>
          <div className="text-left px-2 mr-5">
            <span className="text-lg font-bold">
              <Link href="/fee">
                <a>Fee</a>
              </Link>
            </span>
          </div>
          <div className="text-left px-2 mr-5">
            <span className="text-lg font-bold">
              <Link href="/qa">
                <a>Q&A</a>
              </Link>
            </span>
          </div>
        </div>
        
        <div className="flex-none">
          <SolanaLogo />
          <WalletMultiButton className="" />
        </div>
      </div>
    </div>
  );
}
