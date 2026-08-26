// Design note: Contemporary Digital Atelier — a calm, compact enquiry surface with clear validation and an honest boundary around public-form security.
import { ArrowUpRight, CheckCircle2, Send } from "lucide-react";
import { FormEvent, useState } from "react";

type Status = "idle" | "sending" | "sent" | "error" | "not-configured";

const PROJECT_AREAS = ["Website or storefront", "WordPress or Elementor", "Funnel or customer journey", "AI / Automation", "Remote work conversation", "Other"] as const;
type ProjectArea = (typeof PROJECT_AREAS)[number];
type FormValues = { name: string; email: string; company: string; projectType: ProjectArea; message: string; consent: boolean; website: string };

const initialValues: FormValues = { name: "", email: "", company: "", projectType: "Website or storefront", message: "", consent: false, website: "" };
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function EnquiryForm() {
  const [values, setValues] = useState(initialValues);
  const [status, setStatus] = useState<Status>("idle");
  const [notice, setNotice] = useState("");

  const update = <Key extends keyof FormValues>(key: Key, value: FormValues[Key]) => setValues((current) => ({ ...current, [key]: value }));

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setNotice("");
    if (values.website) { setStatus("sent"); return; }
    if (!values.name.trim() || !emailPattern.test(values.email.trim()) || values.message.trim().length < 20 || !values.consent) {
      setStatus("error");
      setNotice("Please add your name, a valid work email, a message of at least 20 characters, and consent to a reply.");
      return;
    }
    if (!PROJECT_AREAS.includes(values.projectType)) {
      setStatus("error");
      setNotice("Please choose a valid project area.");
      return;
    }

    const url = import.meta.env.VITE_SUPABASE_URL;
    const key = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY || import.meta.env.VITE_SUPABASE_ANON_KEY;
    if (!url || !key) {
      setStatus("not-configured");
      setNotice("The private enquiry form is ready for activation. Add the Supabase public configuration described in the project setup guide.");
      return;
    }

    setStatus("sending");
    try {
      const response = await fetch(`${url.replace(/\/$/, "")}/rest/v1/enquiries`, {
        method: "POST",
        headers: { apikey: key, Authorization: `Bearer ${key}`, "Content-Type": "application/json", Prefer: "return=minimal" },
        body: JSON.stringify({
          name: values.name.trim(), email: values.email.trim(), company: values.company.trim() || null,
          project_type: values.projectType, message: values.message.trim(), consent: true, source: "portfolio-site",
        }),
      });
      if (!response.ok) throw new Error("Submission rejected");
      setStatus("sent");
      setNotice("Thank you. Your enquiry has been received.");
      setValues(initialValues);
    } catch {
      setStatus("error");
      setNotice("The form could not send your enquiry. Please use email or WhatsApp instead.");
    }
  }

  return (
    <form id="enquiry" onSubmit={handleSubmit} className="enquiry-form" noValidate>
      <div className="form-heading"><span><i className="form-field-note" />Project dossier / private receipt</span><span className="form-heading-index">Form / 01 <ArrowUpRight className="h-4 w-4" aria-hidden="true" /></span></div>
      <div className="form-grid">
        <label>Full name<input name="name" value={values.name} onChange={(event) => update("name", event.target.value)} autoComplete="name" maxLength={80} placeholder="Your name" aria-invalid={status === "error" && !values.name.trim()} /></label>
        <label>Work email<input name="email" type="email" value={values.email} onChange={(event) => update("email", event.target.value)} autoComplete="email" inputMode="email" maxLength={254} placeholder="you@company.com" aria-invalid={status === "error" && !emailPattern.test(values.email.trim())} /></label>
        <label className="form-field"><span className="form-field-label">Company or brand <small>Optional</small></span><input name="company" value={values.company} onChange={(event) => update("company", event.target.value)} autoComplete="organization" maxLength={120} placeholder="Company name" /></label>
        <label className="form-field"><span className="form-field-label">Project area <small>Required</small></span><select name="project-area" value={values.projectType} onChange={(event) => update("projectType", event.target.value as ProjectArea)}>{PROJECT_AREAS.map((area) => <option key={area} value={area}>{area}</option>)}</select></label>
        <label className="message-field">What are you looking to improve?<textarea name="project-message" value={values.message} onChange={(event) => update("message", event.target.value)} maxLength={3000} placeholder="The context, main goal, timeline, and useful links or references." aria-invalid={status === "error" && values.message.trim().length < 20} /></label>
        <label className="honeypot" aria-hidden="true">Website<input name="website" tabIndex={-1} autoComplete="off" value={values.website} onChange={(event) => update("website", event.target.value)} /></label>
      </div>
      <label className="consent-row"><input name="consent" type="checkbox" checked={values.consent} onChange={(event) => update("consent", event.target.checked)} /><span>I agree that Dev Yeasin may use these details to reply to this enquiry. Read the <a href="/privacy">Privacy Policy</a>.</span></label>
      <div className="form-submit-row"><button type="submit" disabled={status === "sending"} className="form-submit">{status === "sending" ? "Sending…" : "Send enquiry"}<Send className="h-4 w-4" aria-hidden="true" /></button>{notice && <p id="form-feedback" role={status === "error" ? "alert" : "status"} aria-live="polite" className={status === "sent" ? "form-success" : "form-notice"}>{status === "sent" && <CheckCircle2 className="h-4 w-4" aria-hidden="true" />}{notice}</p>}</div>
    </form>
  );
}
