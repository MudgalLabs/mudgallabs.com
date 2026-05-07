"use client";

import { Monitor, Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

type Theme = "light" | "dark" | "system";

const themes: Theme[] = ["dark", "system", "light"];
const themeLabels: Record<Theme, string> = {
    light: "Light",
    dark: "Dark",
    system: "System",
};

function applyTheme(theme: Theme) {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const shouldUseDark = theme === "dark" || (theme === "system" && prefersDark);

    document.documentElement.classList.toggle("dark", shouldUseDark);
}

export function ThemeToggle() {
    const [theme, setTheme] = useState<Theme>("system");

    useEffect(() => {
        const storedTheme = window.localStorage.getItem("theme") as Theme | null;
        const initialTheme = storedTheme && themes.includes(storedTheme) ? storedTheme : "system";

        setTheme(initialTheme);
        applyTheme(initialTheme);
    }, []);

    useEffect(() => {
        if (theme !== "system") {
            return;
        }

        const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
        const handleChange = () => applyTheme("system");

        mediaQuery.addEventListener("change", handleChange);

        return () => mediaQuery.removeEventListener("change", handleChange);
    }, [theme]);

    function selectTheme(nextTheme: Theme) {
        setTheme(nextTheme);
        window.localStorage.setItem("theme", nextTheme);
        applyTheme(nextTheme);
    }

    const icons: Record<Theme, typeof Sun> = {
        light: Sun,
        dark: Moon,
        system: Monitor,
    };

    return (
        <div className="flex rounded-full border border-border bg-secondary p-1 shadow-sm">
            {themes.map((themeOption) => {
                const Icon = icons[themeOption];
                const isActive = themeOption === theme;

                return (
                    <button
                        key={themeOption}
                        type="button"
                        onClick={() => selectTheme(themeOption)}
                        className={`rounded-full p-2 transition-colors ${
                            isActive
                                ? "bg-primary text-primary-foreground"
                                : "text-muted-foreground hover:text-foreground"
                        }`}
                        aria-label={`Use ${themeLabels[themeOption]} theme`}
                        aria-pressed={isActive}
                    >
                        <Icon className="h-4 w-4" />
                    </button>
                );
            })}
        </div>
    );
}
