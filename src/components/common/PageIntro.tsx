import Container from "@/components/layout/Container";
export default function PageIntro({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <header className="surface-grid relative overflow-hidden border-b border-sky-100 bg-sky-50/60 py-12 sm:py-16 md:py-22">
      <div
        aria-hidden="true"
        className="absolute -right-12 top-1/2 h-40 w-40 -translate-y-1/2 rotate-12 rounded-[32%] border-[20px] border-sky-200/40 sm:right-10 sm:h-56 sm:w-56"
      />
      <Container className="relative">
        <p className="mb-4 text-sm font-bold uppercase tracking-[.2em] text-sky-600">
          {eyebrow}
        </p>
        <h1 className="max-w-4xl text-4xl font-black leading-[1.08] tracking-tight text-slate-950 sm:text-5xl md:text-6xl">
          {title}
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:mt-6 sm:text-lg sm:leading-8">
          {description}
        </p>
      </Container>
    </header>
  );
}
