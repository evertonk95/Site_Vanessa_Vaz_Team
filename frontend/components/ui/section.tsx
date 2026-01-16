import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLDivElement> {
    id?: string;
    children: React.ReactNode;
    className?: string;
}

export function Section({ id, children, className, ...props }: SectionProps) {
    return (
        <section
            id={id}
            className={cn("py-20 md:py-28 overflow-hidden", className)}
            {...props}
        >
            {children}
        </section>
    );
}
