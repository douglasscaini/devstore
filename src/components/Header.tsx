import Image from "next/image";
import Link from "next/link";
import { CartWidget } from "./CartWidget";
import { SearchForm } from "./SearchForm";

export function Header() {
    return (
        <div className="flex items-center justify-between">
            <div className="flex items-center gap-5">
                <Link href="/" className="text-2xl font-extrabold text-white">
                    devstore
                </Link>

                <SearchForm />
            </div>

            <div className="flex items-center gap-4">
                <CartWidget />

                <div className="w-px h-4 bg-zinc-800" />

                <Link href="/" className="flex items-center gap-2 hover:underline">
                    <span className="text-sm">Account</span>
                    <Image
                        src="https://github.com/douglasscaini.png"
                        alt="Imagem do usuário"
                        width={24}
                        height={24}
                        className="w-6 h-6 rounded-full"
                    />
                </Link>
            </div>
        </div>
    );
}
