import { useState } from "react";
import { Button, Card, CardContent, Input, Textarea, Badge, Select } from "@/components/ui";
import Container from "@/components/layout/Container";
import usePageTitle from "@/hooks/usePageTitle";

type FormState = {
  name: string;
  email: string;
  projectType: string;
  message: string;
};

const initialForm: FormState = {
  name: "",
  email: "",
  projectType: "",
  message: "",
};

export default function ContactPage() {
  const [formData, setFormData] = useState<FormState>(initialForm);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  usePageTitle("Contact");

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

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, projectType: value }));

    if (errors.projectType) {
      setErrors((prev) => {
        const copy = { ...prev };
        delete copy.projectType;
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

    if (!formData.projectType) newErrors.projectType = "Please select project type";

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
    <section className="bg-slate-50 flex flex-1 items-center">
      <Container>
        <div className="grid w-full max-w-4xl grid-cols-1 items-center gap-12 lg:grid-cols-2">
          
          {/* Left content */}
          <div>
            <Badge className="mb-4 border-indigo-100 bg-indigo-50 text-indigo-700">
              Get in touch
            </Badge>

            <h1 className="mb-6 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
              Tell us about your <span className="text-indigo-600">next project.</span>
            </h1>

            <p className="mb-10 text-lg leading-relaxed text-slate-600">
              Share your idea, goals, or challenges. We usually respond within 24 hours.
            </p>

            <div className="space-y-4 text-sm text-slate-600">
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600">
                  ✓
                </div>
                Free consultation
              </div>

              <div className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600">
                  ✓
                </div>
                Transparent pricing
              </div>

              <div className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600">
                  ✓
                </div>
                Friendly & fast response
              </div>
            </div>

            <p className="mt-8 font-medium text-slate-700">
              hello@pangkreas.com
            </p>
          </div>

          {/* Form card */}
          <Card className="border-slate-200 shadow-2xl shadow-slate-200/60">
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
                    <label className="text-sm font-medium text-gray-700">Project Type</label>
                    <Select
                      label="Project Type"
                      value={formData.projectType}
                      onChange={handleSelectChange}
                      options={[
                        { value: "web-app", label: "Web / SaaS App" },
                        { value: "automation", label: "Automation / Bot" },
                        { value: "cms", label: "Internal Tools / CMS" },
                        { value: "other", label: "Not sure yet" },
                      ]}
                    />
                  </div>


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

                  <Button 
                    type="submit" 
                    className="h-12 w-full text-base font-bold transition-all hover:scale-[1.02]" 
                    disabled={isSubmitting}>
                    {isSubmitting ? "Sending..." : "Submit Inquiry"}
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </Container>
    </section>
  );
}

/* Extract success UI */
function SuccessState({ onReset }: { onReset: () => void }) {
  return (
    <div className="py-8 text-center">
      <div className="mb-6 text-5xl">🎉</div>

      <h3 className="mb-2 text-2xl font-bold text-slate-900">
        Inquiry Sent!
      </h3>

      <p className="mb-8 text-slate-600">
        Thanks for reaching out. We’ll reply within 24 hours.
      </p>

      <Button variant="outline" className="w-full" onClick={onReset}>
        Send Another Message
      </Button>
    </div>
  );
}
