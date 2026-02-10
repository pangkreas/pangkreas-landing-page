import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui";

export default function CTASection() {
  const navigate = useNavigate();

  return (
    <section className="bg-indigo-600 px-6 py-24 text-center text-white md:px-12">
      <div className="mx-auto max-w-3xl">
        <h2 className="mb-6 text-4xl font-bold">
          Have an idea in mind?
        </h2>

        <p className="mb-10 text-lg text-indigo-100">
          Let’s turn it into a real product together.
        </p>

        <Button
            onClick={() => navigate("/contact")}
            className="!bg-white !text-indigo-600 hover:!bg-indigo-50 px-8 py-4 text-lg font-semibold"
        >
            Start a Project
        </Button>
      </div>
    </section>
  );
}
