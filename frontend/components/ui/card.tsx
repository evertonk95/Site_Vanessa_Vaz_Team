import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
}

export function Card({ children, className, ...props }: CardProps) {
    return (
        <div
            className={cn(
                "bg-zinc-900/50 border border-white/5 rounded-xl p-6 backdrop-blur-sm hover:border-brand-neon/50 transition-colors duration-300",
                className
            )}
            {...props}
        >
            {children}
        </div>
    );
}

export function CardHeader({ children, className, ...props }: CardProps) {
    return (
        <div className={cn("mb-4", className)} {...props}>
            {children}
        </div>
    );
}

export function CardTitle({ children, className, ...props }: CardProps) {
    return (
        <h3 className={cn("text-xl font-bold font-display text-white", className)} {...props}>
            {children}
        </h3>
    );
}

export function CardContent({ children, className, ...props }: CardProps) {
    return (
        <div className={cn("text-zinc-400 text-sm leading-relaxed", className)} {...props}>
            {children}
        </div>
    );
}
