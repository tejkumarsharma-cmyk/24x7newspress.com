import { Clock, MapPin, Phone } from 'lucide-react'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'
import { SITE_CONFIG } from '@/lib/site-config'

export const CONTACT_PAGE_OVERRIDE_ENABLED = true

export function ContactPageOverride() {
  return (
    <div className="min-h-screen text-[#1a0f24]">
      <NavbarShell />
      <div className="border-b border-[#36064d]/10 bg-gradient-to-b from-white to-[#f6f1fa]">
        <div className="mx-auto max-w-6xl px-4 py-12 text-center sm:px-6 sm:py-16">
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">Contact us</h1>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-[#5c4d6a] sm:text-base">
            Editorial, distribution, and account questions. Share context so we can route you to the right desk.
          </p>
        </div>
      </div>
      <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-2xl border border-[#e8dff0] bg-white/90 p-6 shadow-sm sm:p-8">
            <h2 className="text-lg font-semibold">Send a message</h2>
            <form className="mt-6 grid gap-4" action="#" method="get">
              <div>
                <label className="text-sm font-medium text-[#5c4d6a]">Name *</label>
                <input
                  className="mt-1.5 w-full rounded-xl border border-[#e8dff0] bg-white px-4 py-2.5 text-sm outline-none ring-[#da4848]/0 transition focus:ring-2 focus:ring-[#da4848]/30"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-[#5c4d6a]">Email *</label>
                <input
                  type="email"
                  className="mt-1.5 w-full rounded-xl border border-[#e8dff0] bg-white px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-[#da4848]/30"
                  placeholder="you@company.com"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-[#5c4d6a]">Phone</label>
                <input
                  className="mt-1.5 w-full rounded-xl border border-[#e8dff0] bg-white px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-[#da4848]/30"
                  placeholder="Optional"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-[#5c4d6a]">Message *</label>
                <textarea
                  className="mt-1.5 min-h-[160px] w-full rounded-xl border border-[#e8dff0] bg-white px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-[#da4848]/30"
                  placeholder="Describe your request (distribution, account, or editorial)."
                />
              </div>
              <p className="text-xs text-[#5c4d6a]">
                By submitting, you agree we may use your information to respond to this inquiry. This demo form is visual-only and does not send data to a server.
              </p>
              <button
                type="button"
                className="h-12 rounded-full bg-[#da4848] px-8 text-sm font-semibold text-white transition hover:bg-[#c23d3d]"
              >
                Send message
              </button>
            </form>
          </div>

          <div className="space-y-6">
            <div className="rounded-2xl border border-[#36064d]/10 bg-[#36064d] p-6 text-white sm:p-8">
              <h2 className="text-lg font-semibold">Desks & hours</h2>
              <p className="mt-2 text-sm text-white/80">
                For {SITE_CONFIG.name} accounts and new distribution inquiries, email is the fastest path.
              </p>
            </div>
            <div className="space-y-4">
              {[
                {
                  icon: Phone,
                  title: 'Toll-free',
                  body: '+1 (800) 000-0000',
                  sub: 'North America, English',
                },
                {
                  icon: Clock,
                  title: 'Live hours',
                  body: 'Mon–Fri, 7:00–19:00 ET',
                  sub: 'Holiday coverage for urgent material',
                },
                {
                  icon: MapPin,
                  title: 'Correspondence',
                  body: 'U.S. mailing address on request for contracts',
                  sub: 'We operate primarily digital-first',
                },
              ].map((row) => (
                <div
                  key={row.title}
                  className="flex gap-4 rounded-2xl border border-[#e8dff0] bg-white/90 p-5"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#f3eff8] text-[#da4848]">
                    <row.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-[#5c4d6a]">{row.title}</p>
                    <p className="mt-1 font-medium text-[#1a0f24]">{row.body}</p>
                    <p className="mt-0.5 text-sm text-[#5c4d6a]">{row.sub}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-sm text-[#5c4d6a]">
              <strong>Email:</strong>{' '}
              <a href="mailto:desk@24x7newspress.com" className="font-semibold text-[#da4848] hover:underline">
                desk@24x7newspress.com
              </a>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
