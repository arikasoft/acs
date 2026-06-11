const counters = [
  {
    number: "500+",
    title: "Happy Clients",
  },
  {
    number: "1000+",
    title: "Projects Completed",
  },
  {
    number: "50+",
    title: "NGOs Registered",
  },
  {
    number: "10+",
    title: "Years Experience",
  },
];

export default function CounterSection() {
  return (
    <section className="py-20 bg-slate-900 text-white">
      <div className="container mx-auto px-6">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {counters.map((item, index) => (
            <div
              key={index}
              className="text-center"
            >
              <h3 className="text-5xl font-bold text-amber-400">
                {item.number}
              </h3>

              <p className="mt-3 text-slate-300">
                {item.title}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}