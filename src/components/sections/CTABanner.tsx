import Link from "next/link";


interface CTABannerProps {
    heading: string;
    subtext: string;
    cta: string;
};

const CTABanner: React.FC<CTABannerProps> = ({ heading, subtext, cta }) => {
  return (
    <section className="py-6 bg-background dark:bg-foreground text-foreground dark:text-background">
      <div className="container">
        <div className="grid grid-cols-2 gap-5 p-8 rounded-3xl shadow shadow-foreground dark:shadow-background">
            <div className="flex flex-col items-center sm:items-start gap-y-5 col-span-full md:col-span-1 text-center md:text-left">
                <h2 className="capitalize font-bold text-3xl">{heading}</h2>
                <p>{subtext}</p>
                <Link
                    className="btn btn-md btn-primary w-full sm:w-max capitalize" 
                    href="/contact"
                >
                    {cta}
                </Link>
            </div>
        </div>
      </div>
    </section>
  )
}

export default CTABanner
