import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui";
import Container from "@/components/layout/Container";

export default function CTASection() {
  const navigate = useNavigate();

  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-indigo-600 to-indigo-500 py-24 text-center text-white">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-white blur-3xl"></div>
      </div>
      <Container className="max-w-3xl">
        <h2 className="mb-6 text-4xl font-bold">
          Have an idea in mind?
        </h2>

        <p className="mb-10 text-lg text-indigo-100">
          Let’s turn it into a real product and ship it.
        </p>

        <Button
            onClick={() => navigate("/contact")}
            className="!bg-white !text-indigo-600 hover:!bg-indigo-50 px-8 py-4 text-lg font-semibold transition-all hover:scale-[1.03]"
        >
            Start a Project
        </Button>
      </Container>
    </section>
  );
}
