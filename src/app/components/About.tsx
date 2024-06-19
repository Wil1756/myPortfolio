
export default function About() {
    return (
      <section id="about" className="py-16">
        <div className="container mx-auto flex items-center justify-between">
          <div className="max-w-md">
            <h2 className="text-3xl font-bold mb-4">About Us</h2>
            <p className="mb-4">
              At TobiStudio, we are passionate about creating beautiful and
              functional designs for businesses of all sizes.
            </p>
            <p className="mb-4">
              Our team of experienced designers and developers work closely with
              our clients to ensure that every project meets their unique needs
              and exceeds their expectations.
            </p>
          </div>
          <img
            src="/about.jpg"
            alt="About"
            className="rounded-lg shadow-lg max-w-sm"
          />
        </div>
      </section>
    )
  }
