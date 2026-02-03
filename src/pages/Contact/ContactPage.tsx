
import React, { useState } from 'react';
import { Button, Card, CardContent, Input, Textarea, Badge } from '../../components/ui';

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-[calc(100vh-64px)] flex items-center justify-center bg-slate-50 py-12 px-6">
      <div className="max-w-4xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <Badge variant="secondary" className="mb-4 text-indigo-700 bg-indigo-50 border-indigo-100">
            Get in touch
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
            Tell us about your <span className="text-indigo-600">next project.</span>
          </h1>
          <p className="text-lg text-slate-600 mb-8 leading-relaxed">
            We are currently accepting new projects and technical partnerships. Fill out the form, and we'll get back to you within one business day.
          </p>
          <div className="space-y-4">
            <div className="flex items-center gap-4 text-slate-600">
              <div className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-indigo-600 shadow-sm">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>
              </div>
              <span className="font-medium">hello@pangkreas.com</span>
            </div>
          </div>
        </div>

        <Card className="border-slate-200 shadow-xl shadow-slate-200/50">
          <CardContent className="p-8">
            {isSubmitted ? (
              <div className="py-8 text-center animate-in fade-in duration-500">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Inquiry Sent</h3>
                <p className="text-slate-600 mb-6">Thanks for reaching out! We will be in touch shortly to discuss details.</p>
                <Button variant="outline" className="w-full" onClick={() => setIsSubmitted(false)}>Send Another</Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <Input 
                  label="Name" 
                  name="name" 
                  placeholder="Your name" 
                  value={formData.name}
                  onChange={handleInputChange}
                  error={errors.name}
                  required
                />
                <Input 
                  label="Email" 
                  name="email" 
                  type="email" 
                  placeholder="name@company.com" 
                  value={formData.email}
                  onChange={handleInputChange}
                  error={errors.email}
                  required
                />
                <div className="flex flex-col gap-1">
                  <label className="text-sm font-medium text-gray-700">Message</label>
                  <Textarea 
                    name="message" 
                    placeholder="Briefly describe what you'd like to build..." 
                    className={`min-h-[150px] ${errors.message ? 'border-red-500 ring-red-500' : ''}`}
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                  />
                  {errors.message && <span className="text-xs text-red-600 mt-1">{errors.message}</span>}
                </div>
                <Button 
                  type="submit" 
                  className="w-full h-12 text-base font-bold" 
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Submit Inquiry'}
                </Button>
              </form>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
