import Image from "next/image";
import Link from "next/link";

const CTABanner2 = () => {
  return (
    <section className="py-8 bg-accent text-foreground dark:bg-foreground dark:text-background">
        <div className="container flex flex-col-reverse sm:flex-row items-center justify-center gap-x-8 gap-y-5 sm:gap-y-0">
            <div className="flex flex-col gap-y-4 basis-1/2">
                <hgroup className="flex flex-col gap-y-2">
                    <h3 className="text-2xl md:text-3xl font-semibold">I'm Available For Your New project</h3>
                    <p>Have any project in mind? I&apos;ve got you covered. Let&apos;s start today!</p>
                </hgroup>
                <Link
                    className="btn btn-md btn-primary w-full sm:w-max capitalize" 
                    href="/contact"
                >
                    Let's Build Together
                </Link>
            </div>
            <figure className="basis-1/2">
                <Image src="/assets/images/gallery/man-showing-colleague-laptop.png" height={294} width={350} className="object-contain" alt="collaborating with clients on their projects" />
            </figure>
        </div>
    </section>
  )
}

export default CTABanner2