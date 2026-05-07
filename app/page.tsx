import { SquareArrowOutUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";

interface Product {
    name: string;
    logo: string;
    description: string;
    website: string;
    github?: string;
    discord?: string;
}

const products: Product[] = [
    {
        name: "Arthveda",
        logo: "/arthveda.svg",
        description:
            "Arthveda is a trading journal that shows why you're losing money and how to fix it. Works with Zerodha, Groww, Angel One and more.",
        website: "https://arthveda.app",
    },
    {
        name: "Grahak",
        logo: "/grahak.svg",
        description:
            "Grahak lets your customers give feedback without leaving your product while helping teams stay on top of them.",
        website: "https://grahak.dev",
    },
    {
        name: "Resurface",
        logo: "/resurface.svg",
        description:
            "Resurface helps you capture, organise, and follow up on DMs and comments in one place.",
        website: "https://resurface.to",
    },
    {
        name: "Bodhveda",
        logo: "/bodhveda.svg",
        description:
            "Bodhveda is a notification platform for sending direct or broadcast notifications at scale, while respecting each user’s preferences.",
        website: "https://bodhveda.com",
    },
];

export default function ProductsShowcase() {
    return (
        <div className="min-h-screen flex flex-col">
            {/* Main Content */}
            <main className="flex-grow">
                <section className="px-8 py-16 max-w-6xl mx-auto">
                    <div className="flex items-end justify-center gap-4 mb-8">
                        <Image
                            src="/mudgal.svg"
                            alt="Mudgal Labs Logo"
                            width={32}
                            height={32}
                        />
                        <h1 className="text-xl">Mudgal Labs</h1>
                    </div>

                    {/* Tagline */}
                    <p className="text-2xl md:text-3xl font-medium text-center mb-12 text-muted-foreground">
                        Building software that is worthwhile
                    </p>

                    {/* Cards */}
                    <div className="grid md:grid-cols-2 gap-8">
                        {products.map((product) => (
                            <div
                                key={product.name}
                                className="bg-card border border-border rounded-md shadow-sm hover:shadow-md transition-shadow p-6 flex flex-col"
                            >
                                {/* Logo + Name */}
                                <div className="flex items-start gap-4 mb-4">
                                    <Image
                                        src={product.logo}
                                        alt={`${product.name} logo`}
                                        width={36}
                                        height={36}
                                    />
                                    <Link
                                        href={product.website}
                                        target="_blank"
                                        className="group flex items-start gap-2 text-foreground hover:no-underline"
                                        aria-label={`Visit ${product.name} website`}
                                    >
                                        <h3 className="text-4xl font-medium transition-colors group-hover:text-primary">
                                            {product.name}
                                        </h3>
                                        <SquareArrowOutUpRight className="mt-1 h-4 w-4 text-muted-foreground transition-colors group-hover:text-primary" />
                                    </Link>
                                </div>

                                {/* Description */}
                                <p className="text-muted-foreground flex-grow">
                                    {product.description}
                                </p>

                                {(product.github || product.discord) && (
                                    <div className="flex gap-4 mt-6">
                                        {product.github && (
                                            <Link
                                                href={product.github}
                                                target="_blank"
                                                className="flex-x"
                                            >
                                                <SquareArrowOutUpRight className="w-4 h-4" />
                                                GitHub
                                            </Link>
                                        )}

                                        {product.discord && (
                                            <Link
                                                href={product.discord}
                                                target="_blank"
                                                className="flex-x"
                                            >
                                                <SquareArrowOutUpRight className="w-4 h-4" />
                                                Discord
                                            </Link>
                                        )}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className="bg-background border-t border-border p-8 w-full">
                <div className="mx-auto flex max-w-6xl flex-col gap-6 text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-sm">Mudgal Labs · © 2025</p>

                    <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
                        <Link
                            href="https://github.com/MudgalLabs"
                            target="_blank"
                            className="flex-x"
                        >
                            GitHub
                        </Link>

                        <Link
                            href="https://www.linkedin.com/company/mudgallabs"
                            target="_blank"
                            className="flex-x"
                        >
                            LinkedIn
                        </Link>

                        <ThemeToggle />
                    </div>
                </div>
            </footer>
        </div>
    );
}
