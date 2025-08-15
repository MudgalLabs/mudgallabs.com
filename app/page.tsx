import { SquareArrowOutUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function ProductsShowcase() {
    const products = [
        {
            name: "Arthveda",
            logo: "/arthveda.svg",
            description:
                "Arthveda is an open-source trading journal for the Indian markets that offers seamless broker imports, reveals powerful analytics, and helps you improve.",
            website: "https://arthveda.app",
            github: "https://github.com/MudgalLabs/arthveda",
            discord: "https://discord.gg/RB89u64cWH",
        },
        {
            name: "Bodhveda",
            logo: "/bodhveda.svg",
            description:
                "Bodhveda is an open-source notification platform for sending direct or broadcast notifications at scale, while respecting each user’s preferences.",
            website: "https://bodhveda.com",
            github: "https://github.com/MudgalLabs/bodhveda",
            discord: "https://discord.gg/Wg9ebJSAAG",
        },
    ];

    return (
        <div className="min-h-screen flex flex-col">
            {/* Navbar */}
            <nav className=" bg-background">
                <div className="max-w-6xl mx-auto flex items-end gap-3 px-8 py-4">
                    <Image
                        src="/mudgal.svg"
                        alt="Mudgal Labs Logo"
                        width={36}
                        height={36}
                    />
                </div>
            </nav>

            {/* Main Content */}
            <main className="flex-grow">
                <section className="px-8 py-16 max-w-6xl mx-auto">
                    {/* Tagline */}
                    <h2 className="text-2xl md:text-3xl font-medium text-center mb-12  text-text-muted">
                        Building open source software that are worthwhile
                    </h2>

                    {/* Cards */}
                    <div className="grid md:grid-cols-2 gap-8">
                        {products.map((product) => (
                            <div
                                key={product.name}
                                className="bg-surface-1 border border-border-subtle rounded-md shadow-sm hover:shadow-md transition-shadow p-6 flex flex-col"
                            >
                                {/* Logo + Name */}
                                <div className="flex items-start gap-4 mb-4">
                                    <Image
                                        src={product.logo}
                                        alt={`${product.name} logo`}
                                        width={36}
                                        height={36}
                                    />
                                    <h3 className="text-4xl font-medium">
                                        {product.name}
                                    </h3>
                                </div>

                                {/* Description */}
                                <p className="text-text-muted flex-grow">
                                    {product.description}
                                </p>

                                {/* Links */}
                                <div className="flex gap-4 mt-6">
                                    <Link
                                        href={product.website}
                                        target="_blank"
                                        className="flex-x"
                                    >
                                        <SquareArrowOutUpRight className="w-4 h-4" />
                                        Website
                                    </Link>

                                    <Link
                                        href={product.github}
                                        target="_blank"
                                        className="flex-x"
                                    >
                                        <SquareArrowOutUpRight className="w-4 h-4" />
                                        GitHub
                                    </Link>

                                    <Link
                                        href={product.discord}
                                        target="_blank"
                                        className="flex-x"
                                    >
                                        <SquareArrowOutUpRight className="w-4 h-4" />
                                        Discord
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="flex-center text-text-muted">
                    <div>
                        <p>Shikhar Sharma</p>
                        <p>Founder & CEO, Mudgal Labs</p>

                        <div className="flex-x gap-x-4 mt-2">
                            <Link
                                href="https://www.linkedin.com/in/ceoshikhar"
                                target="_blank"
                                className="flex-x"
                            >
                                <SquareArrowOutUpRight className="w-4 h-4" />
                                LinkedIn
                            </Link>

                            <Link
                                href="https://github.com/ceoshikhar"
                                target="_blank"
                                className="flex-x"
                            >
                                <SquareArrowOutUpRight className="w-4 h-4" />
                                GitHub
                            </Link>
                        </div>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className="bg-background py-8">
                <div className="max-w-6xl mx-auto px-8 py-6 text-center text-sm text-text-muted">
                    © 2025 Mudgal Labs
                </div>
            </footer>
        </div>
    );
}
