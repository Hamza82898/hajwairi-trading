import { Button } from "@/components/ui";

export default function HeroButtons() {
    return (
        <div className="flex flex-wrap gap-4">
            <Button variant="primary">
                Shop Now
            </Button>

            <Button variant="secondary">
                View Offers
            </Button>

        </div>
    );
}