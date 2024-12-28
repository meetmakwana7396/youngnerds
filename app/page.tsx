import Services from "./components/services";
import Team from "./components/team";

export default function Page() {
  return (
    <div className="space-y-10">
      <section>
        {/* <a href={socialLinks.twitter} target="_blank">
        <Image
          src="/profile.png"
          alt="Profile photo"
          className="rounded-full bg-gray-100 block lg:mt-5 mt-0 lg:mb-5 mb-10 mx-auto sm:float-right sm:ml-5 sm:mb-5 grayscale hover:grayscale-0"
          unoptimized
          width={160}
          height={160}
          priority
        />
      </a> */}

        <h1 className="mb-8 text-2xl font-medium tracking-tight">
          Your Friendly Freelance Team for All Your Tech Needs!
        </h1>

        <div className="prose prose-neutral dark:prose-invert">
          <p>
            Welcome to Youngnerds! We&apos;re a team of passionate tech
            enthusiasts from India, combining expertise in frontend development,
            full-stack solutions, backend systems, DevOps, and AI to deliver
            exceptional results. Our strengths lie in crafting seamless user
            experiences, building robust infrastructures, and integrating
            cutting-edge technologies to meet modern demands. Together, we bring
            creativity, precision, and dedication to every project, ensuring
            solutions that are innovative, efficient, and tailored to your
            unique needs. Let’s collaborate and turn your ideas into reality!
          </p>
        </div>
      </section>
      <Services />
      <Team />
    </div>
  );
}
