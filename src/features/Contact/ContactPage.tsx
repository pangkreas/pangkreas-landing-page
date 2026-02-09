import { useState } from "react";
import { Button, Card, CardContent, Input, Textarea, Badge } from "@/components/ui";

type FormState = {
  name: string;
  email: string;
  message: string;
};

const initialForm: FormState = {
  name: "",
  email: "",
  message: "",
};

export default function ContactPage() {
  const [formData, setFormData] = useState<FormState>(initialForm);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors((prev) => {
        const copy = { ...prev };
        delete copy[name];
        return copy;
      });
    }
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const fakeSubmit = () => new Promise((r) => setTimeout(r, 1000));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    await fakeSubmit();

    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData(initialForm);
  };

  return (
    <section className="flex min-h-[calc(100vh-64px)] items-center justify-center bg-slate-50 px-6 py-12">
      <div className="grid w-full max-w-4xl grid-cols-1 items-center gap-12 lg:grid-cols-2">
        
        {/* Left content */}
        <div>
          <Badge className="mb-4 border-indigo-100 bg-indigo-50 text-indigo-700">
            Get in touch
          </Badge>

          <h1 className="mb-6 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
            Tell us about your <span className="text-indigo-600">next project.</span>
          </h1>

          <p className="mb-8 text-lg leading-relaxed text-slate-600">
            We are currently accepting new projects and partnerships.
          </p>

          <p className="font-medium text-slate-600">
            hello@pangkreas.com
          </p>
        </div>

        {/* Form card */}
        <Card className="border-slate-200 shadow-xl shadow-slate-200/50">
          <CardContent className="p-8">
            {isSubmitted ? (
              <SuccessState onReset={() => setIsSubmitted(false)} />
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <Input
                  label="Name"
                  name="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  error={errors.name}
                  required
                />

                <Input
                  label="Email"
                  name="email"
                  type="email"
                  placeholder="name@company.com"
                  value={formData.email}
                  onChange={handleChange}
                  error={errors.email}
                  required
                />

                <div className="flex flex-col gap-1">
                  <label className="text-sm font-medium text-gray-700">Message</label>
                  <Textarea
                    name="message"
                    className={`min-h-[150px] ${
                      errors.message ? "border-red-500 ring-red-500" : ""
                    }`}
                    placeholder="Briefly describe your idea..."
                    value={formData.message}
                    onChange={handleChange}
                  />
                  {errors.message && (
                    <span className="text-xs text-red-600">{errors.message}</span>
                  )}
                </div>

                <Button type="submit" className="h-12 w-full text-base font-bold" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Submit Inquiry"}
                </Button>
              </form>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

/* Extract success UI */
function SuccessState({ onReset }: { onReset: () => void }) {
  return (
    <div className="py-8 text-center">
      <h3 className="mb-2 text-2xl font-bold text-slate-900">Inquiry Sent 🎉</h3>
      <p className="mb-6 text-slate-600">We’ll get back to you soon.</p>
      <Button variant="outline" className="w-full" onClick={onReset}>
        Send Another
      </Button>
    </div>
  );
}
