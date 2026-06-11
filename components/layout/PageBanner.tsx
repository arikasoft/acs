interface Props {
  title: string;
  subtitle?: string;
}

export default function PageBanner({
  title,
  subtitle,
}: Props) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-slate-900 via-blue-900 to-sky-700 py-24">
      <div className="container mx-auto px-6 text-center">

        <h1 className="text-5xl font-bold text-white">
          {title}
        </h1>

        {subtitle && (
          <p className="mt-4 text-blue-100">
            {subtitle}
          </p>
        )}

      </div>
    </section>
  );
}