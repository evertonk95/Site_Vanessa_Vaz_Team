import { Hero } from "@/components/home/hero";
import { Services } from "@/components/home/services";
import { Plans } from "@/components/home/plans";
import { About } from "@/components/home/about";
import { Contact } from "@/components/home/contact";

export default function Home() {
    return (
        <>
            <Hero />
            <Services />
            <About />
            <Plans />
            <Contact />
        </>
    );
}
