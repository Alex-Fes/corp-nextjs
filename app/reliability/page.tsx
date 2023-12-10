import reliabilityImg from '@/public/reliability.jpg';
import Hero from "@/src/components/Hero";

export default function ReliabilityPage() {
    return (
        <Hero
            imgData={reliabilityImg}
            imgAlt="welding"
            title="Super high reliability hosting"
        />
    )
}