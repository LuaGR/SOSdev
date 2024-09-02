export default function AboutPage() {
  return (
    <div className='flex flex-col gap-12 items-start px-4 max-w-3xl mx-auto'>
      <section className='flex flex-col text-left gap-3'>
        <h1 className='text-3xl font-bold mb-4'>About</h1>
        <p className='text-lg text-default-600 dark:text-default-400 mt-4'>
          Welcome to SOSdev, your go-to resource hub for developers of all
          levels. Our mission is to provide a curated collection of tools,
          libraries, and frameworks that empower you to build amazing
          applications. Whether you're just starting out or you're an
          experienced developer, SOSdev is here to support your journey.
        </p>
        <p className='text-lg text-default-600 dark:text-default-400 mt-4'>
          At SOSdev, we believe that access to high-quality resources should be
          free and accessible to everyone. That’s why we’ve gathered a wide
          range of resources, from UI components and design systems to APIs and
          developer tools, all in one place.
        </p>
        <p className='text-lg text-default-600 dark:text-default-400 mt-4'>
          Our goal is to save you time by connecting you with the best resources
          available, so you can focus on what you do best: coding. We are
          constantly updating our database with new tools and technologies to
          keep you ahead of the curve.
        </p>
        <p className='text-lg text-default-600 dark:text-default-400 mt-4'>
          Thank you for being a part of our community. We’re excited to see what
          you’ll create with the resources available on SOSdev!
        </p>
      </section>
    </div>
  )
}
