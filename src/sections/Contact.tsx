import Link from "next/link";

const ContactSection = () => {
  return (
    <section id="contact" className="py-16 section">
      <header className="mb-8 text-center">
        <h2 className="text-4xl font-bold leading-snug capitalize">
          <span className="uppercase text-sm text-main-500">
            Contact Me
          </span> <br />
          Let&apos;s Have A Coffee
        </h2>
      </header>
      <div className="container flex items-start gap-8">
        <div className="flex-1 flex flex-col gap-4">
          <p>
            I look forward to hearing from you and discussing how we can collaborate to bring your digital vision to life. Whether you have a specific project in mind or simply want to explore the possibilities every conversation is a step towards turning ideas into extraordinary digital experiences. Feel free to reach out through any of the channels below:
          </p>
          <div className="wrapper">
            <span>Email Icon</span> <br />
            <Link href="mailto:contact@natesoul.com">reachnatesoul.dev@gmail.com</Link>
          </div>
          <div className="wrapper">
            <span>Phone Icon</span> <br />
            <Link href="tel:+234708675038">+234 708 675 2038</Link>
          </div>
          <div className="wrapper">
            <span>Address</span> <br />
            <address>
              Port Harcourt, Rivers, Nigeria.
            </address>
          </div>
          <div className="wrapper">
            <span>Follow Me</span> <br />
            <div className="flex items-center gap-3">
              <Link href="https://linkedin.com/in/nathanael-ukpong">LinkedIn</Link>
              <Link href="https://twitter.com/@nathanael-ukpong">X</Link>
              <Link href="https://linkedin.com/in/nathanael-ukpong">Upwork</Link>
              <Link href="https://linkedin.com/in/nathanael-ukpong">Github</Link>
            </div>
          </div>
          <p>
          </p>
        </div>
        <div className="flex-1 flex flex-col gap-4 p-5 bg-white rounded-3xl shadow">
          <p>
            Whether you're ready to kickstart a new project or just want to connect, I&apos;m here to make it easy. Let's connect and create something remarkable!
          </p>
          <form className="grid grid-cols-12 gap-4">
            <div className="col-span-12 flex flex-col gap-3">
              <label htmlFor="name">Your Full Name</label>
              <input type="text" name="name" id="name" className="bg-main-50 border-none rounded-2xl outline-none py-2 px-3" />
            </div>
            <div className="col-span-6 flex flex-col gap-3">
              <label htmlFor="name">Email Address</label>
              <input type="email" name="email" id="email" className="bg-main-50 border-none rounded-2xl outline-none py-2 px-3" />
            </div>
            <div className="col-span-6 flex flex-col gap-3">
              <label htmlFor="phone">Phone Number</label>
              <input type="tel" name="phone" id="phone" className="bg-main-50 border-none rounded-2xl outline-none py-2 px-3" />
            </div>
            <div className="col-span-12 flex flex-col gap-3">
              <label htmlFor="message">Your Message</label>
              <textarea name="message" id="message" cols={30} rows={5} className="bg-main-50 border-none rounded-2xl outline-none py-2 px-3"></textarea>
            </div>
          </form>
        </div>
      </div>
  </section>
  )
}

export default ContactSection
