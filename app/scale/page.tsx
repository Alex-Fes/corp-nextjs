import scaleImg from '@/public/scale.jpg';
import Hero from "@/src/components/Hero";

export default function ScalePage() {
    return (
        <Hero
            imgData={scaleImg}
            imgAlt="steel factory"
            title="Scale your business to infinity"
        />
    )
}