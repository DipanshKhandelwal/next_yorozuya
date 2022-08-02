import Link from "next/link";
import { SolanaLogo } from "./SolanaLogo";

export default function Footer() {
  return (
    <div className={"container mx-auto max-w-6xl pt-8 2xl:px-0"}>
      <div className="navbar">
        <div className="flex-1">
        <SolanaLogo />
          <div className="text-left leading-10 px-2 mx-2">
            <span className="text-sm font-bold">Powered by Solana Blockchain</span>
          </div>
        </div>
        <div className="flex-none">
          <div className="text-left leading-10 px-2 mx-2">
            <span className="text-sm">© 2022 Yorozuya DAO</span>
          </div>
          <div className="text-left leading-10 px-2 mx-2">
            <span className="text-sm">
              <Link href="/terms">
                <a>Terms of Use</a>
              </Link>
            </span>
          </div>
          <div className="text-left leading-10 px-2 mx-2">
            <span className="text-sm">
              <Link href="https://discord.gg/4kb8fZay">
                <a>Community</a>
              </Link>
            </span>
          </div>
          <div className="text-left leading-10 px-2 mx-2">
            <span className="text-sm">
              <Link href="mailto:yorozuya.app@yahoo.com">
                <a>e-mail</a>
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
