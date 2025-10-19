import React from "react";
import { motion } from "framer-motion";
import { Menu, Mail, Phone, MapPin } from "lucide-react";
import { Card, CardContent } from "./components/ui/card";
import { Button } from "./components/ui/button";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white text-slate-900 antialiased">
      <header className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-slate-900 text-white flex items-center justify-center font-semibold">TR</div>
          <div>
            <h1 className="text-lg font-semibold">Treatly Labs</h1>
            <p className="text-xs text-slate-500">Fast. Friendly. Above & Beyond.</p>
          </div>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm text-slate-700">
          <a href="#features" className="hover:underline">Features</a>
          <a href="#pricing" className="hover:underline">Pricing</a>
          <a href="#about" className="hover:underline">About</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </nav>
        <div className="md:hidden">
          <button aria-label="menu" className="p-2 rounded-md bg-slate-100">
            <Menu size={18} />
          </button>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <section className="space-y-6">
          <motion.h2
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="text-4xl md:text-5xl font-extrabold leading-tight"
          >
            Build fast. Delight customers. Grow your brand.
          </motion.h2>

          <p className="text-lg text-slate-600">
            A clean, modern starter website you can customize and ship quickly. Built with accessibility, performance, and a minimal design system in mind.
          </p>

          <div className="flex gap-3">
            <Button>Get started</Button>
            <Button asChild>
              <a href="#contact" className="inline-block">Contact sales</a>
            </Button>
          </div>

          <div className="mt-6 grid grid-cols-3 gap-4">
            <Card>
              <CardContent className="text-sm">
                <div className="font-semibold">99.9%</div>
                <div className="text-xs text-slate-500">Uptime</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="text-sm">
                <div className="font-semibold">24/7</div>
                <div className="text-xs text-slate-500">Support</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="text-sm">
                <div className="font-semibold">Fast</div>
                <div className="text-xs text-slate-500">Deploy time</div>
              </CardContent>
            </Card>
          </div>
        </section>

        <section aria-hidden className="hidden md:block">
          <div className="rounded-2xl p-8 shadow-lg bg-white">
            <div className="h-64 bg-gradient-to-br from-rose-50 to-amber-50 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <div className="text-2xl font-bold">Your product, shining</div>
                <div className="text-sm text-slate-500 mt-2">Replace this area with a hero image or product screenshot.</div>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <div className="text-xs text-slate-500">Feature</div>
                <div className="font-medium">Subscription boxes</div>
              </div>
              <div className="space-y-2">
                <div className="text-xs text-slate-500">Feature</div>
                <div className="font-medium">Customizable meals</div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <section id="features" className="max-w-6xl mx-auto px-6 py-12">
        <h3 className="text-2xl font-bold mb-6">How it works</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-white rounded-2xl shadow-sm">
            <div className="font-semibold">01 — Choose a plan</div>
            <p className="text-sm text-slate-500 mt-2">Pick a plan that fits your needs. Upgrade or pause anytime.</p>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow-sm">
            <div className="font-semibold">02 — Customize meals</div>
            <p className="text-sm text-slate-500 mt-2">Tailor boxes based on dietary profile and preferences.</p>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow-sm">
            <div className="font-semibold">03 — Delivered</div>
            <p className="text-sm text-slate-500 mt-2">Freshly packed and shipped straight to your doorstep.</p>
          </div>
        </div>
      </section>

      <section id="pricing" className="max-w-6xl mx-auto px-6 py-12">
        <h3 className="text-2xl font-bold mb-6">Pricing</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 border rounded-2xl">
            <div className="font-semibold">Starter</div>
            <div className="text-3xl font-bold mt-4">$9</div>
            <div className="text-sm text-slate-500 mt-2">Per box</div>
            <div className="mt-4"><Button>Choose</Button></div>
          </div>

          <div className="p-6 border-2 border-slate-900 rounded-2xl bg-slate-50">
            <div className="font-semibold">Popular</div>
            <div className="text-3xl font-bold mt-4">$19</div>
            <div className="text-sm text-slate-500 mt-2">Per box</div>
            <div className="mt-4"><Button>Choose</Button></div>
          </div>

          <div className="p-6 border rounded-2xl">
            <div className="font-semibold">Pro</div>
            <div className="text-3xl font-bold mt-4">$39</div>
            <div className="text-sm text-slate-500 mt-2">Per box</div>
            <div className="mt-4"><Button>Choose</Button></div>
          </div>
        </div>
      </section>

      <section id="about" className="max-w-6xl mx-auto px-6 py-12">
        <h3 className="text-2xl font-bold mb-4">About</h3>
        <p className="text-slate-600 max-w-3xl">Treatly Labs is an example brand used to demonstrate a clean landing page. Swap text, replace images, and connect to your favorite headless CMS or e‑commerce provider.</p>
      </section>

      <section id="contact" className="max-w-6xl mx-auto px-6 py-12">
        <h3 className="text-2xl font-bold mb-6">Get in touch</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <form className="space-y-4 bg-white p-6 rounded-2xl shadow-sm">
              <div>
                <label className="text-sm">Name</label>
                <input className="mt-1 w-full border rounded-md p-2" placeholder="Your name" />
              </div>
              <div>
                <label className="text-sm">Email</label>
                <input className="mt-1 w-full border rounded-md p-2" placeholder="you@example.com" />
              </div>
              <div>
                <label className="text-sm">Message</label>
                <textarea className="mt-1 w-full border rounded-md p-2" rows={5} placeholder="Tell us about your project" />
              </div>
              <div>
                <Button type="submit">Send message</Button>
              </div>
            </form>
          </div>

          <aside className="space-y-4">
            <div className="p-6 bg-white rounded-2xl shadow-sm">
              <div className="flex items-center gap-3"><Mail size={16} /><div className="text-sm">hello@treatly.example</div></div>
              <div className="flex items-center gap-3 mt-4"><Phone size={16} /><div className="text-sm">(555) 123-4567</div></div>
              <div className="flex items-center gap-3 mt-4"><MapPin size={16} /><div className="text-sm">Harrisburg, PA</div></div>
            </div>

            <div className="p-6 bg-white rounded-2xl shadow-sm text-sm text-slate-500">
              <div className="font-semibold">Hours</div>
              <div className="mt-2">Mon–Fri: 9am–6pm</div>
            </div>
          </aside>
        </div>
      </section>

      <footer className="border-t mt-12">
        <div className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between text-sm text-slate-500">
          <div>© {new Date().getFullYear()} Treatly Labs</div>
          <div>Built with care • <a href="#about" className="underline">Privacy</a></div>
        </div>
      </footer>
    </div>
  );
}