import { motion } from "motion/react";
import {
  Brain,
  Languages,
  BarChart3,
  Workflow,
  Clock,
  Users,
  Settings,
  Sparkles,
  MessageSquare,
  Zap,
  Shield,
  Globe,
  Headphones,
  TrendingUp,
} from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Features() {
  const features = [
    {
      icon: Brain,
      title: "Arukad AI-mudelid",
      description:
        "Kaasaegsed keelemudelid, mis mõistavad konteksti ja keerulisi päringuid.",
    },
    {
      icon: Languages,
      title: "Mitmekeelne tugi",
      description:
        "Suhtlus 100+ keeles automaatse tõlke ja lokaliseerimisega.",
    },
    {
      icon: BarChart3,
      title: "Analüütika ja ülevaated",
      description:
        "Jälgi vestlusi, mõõda rahulolu ja hangi tegevusandmeid teenuse parandamiseks.",
    },
    {
      icon: Workflow,
      title: "Lihtne integratsioon",
      description:
        "Sujuv integratsioon olemasolevate tööriistade ja platvormidega läbi API.",
    },
    {
      icon: Clock,
      title: "24/7 kättesaadavus",
      description:
        "Ära jäta ühtegi kliendipäringut vahele. AI-assistent töötab ööpäevaringselt.",
    },
    {
      icon: Users,
      title: "Inimesele üleandmine",
      description:
        "Sujuv üleminek inimtöötajale koos kogu kontekstiga keeruliste teemade puhul.",
    },
    {
      icon: Settings,
      title: "Kohandatav",
      description:
        "Kohanda vastuseid, isikupära ja käitumist täpselt oma brändi järgi.",
    },
    {
      icon: Sparkles,
      title: "Pidev õppimine",
      description:
        "AI areneb aja jooksul, õppides igast suhtlusest, et teenindada sind paremini.",
    },
    {
      icon: MessageSquare,
      title: "Loomulik vestlus",
      description:
        "Inimlikud vestlused, mis mõistavad emotsioone ja konteksti.",
    },
    {
      icon: Zap,
      title: "Välkkiire reaktsioon",
      description:
        "Kliendid saavad vastuse vähem kui 3 sekundiga. Reaalajas töötlemine.",
    },
    {
      icon: Shield,
      title: "Turvaline ja usaldusväärne",
      description:
        "Enterprise-tasemel turvalisus 99.9% tööajagarantiiga. Andmed on kaitstud.",
    },
    {
      icon: Globe,
      title: "Omnikanaalne",
      description:
        "Koduleht, sotsiaalmeedia, e-post - kõik ühes vaates hallatavad.",
    },
  ];

  const benefits = [
    {
      title: "Vähenda rutiinset koormust",
      description:
        "Lase AI-assistendil vastata korduvatele küsimustele ning suuna keerulisemad teemad õigel hetkel inimesele.",
      stats: [
        { label: "Korduvad päringud", value: "70%", desc: "automaatselt lahendatud" },
        { label: "Vastamisaeg", value: "-85%", desc: "kiirem reageerimine" },
        { label: "Tiimi koormus", value: "-60%", desc: "vähem rutiini" },
      ],
    },
    {
      title: "Parenda kliendikogemust",
      description:
        "Paku klientidele kiiret, täpset ja isikupärastatud abi igal ajal ja igas kanalis.",
      stats: [
        { label: "Kliendirahulolu", value: "+45%", desc: "parem NPS skoor" },
        { label: "Kättesaadavus", value: "24/7", desc: "ööpäevaringne tugi" },
        { label: "Keeled", value: "100+", desc: "toetatud keelt" },
      ],
    },
  ];

  return (
    <div className="bg-[#0a0f1c] text-white pt-20">
      {/* Animated Grid Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(65,227,164,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(65,227,164,0.03)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,black,transparent)]" />
      </div>

      {/* Hero Section */}
      <section className="relative py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-block px-4 py-2 rounded-full bg-[#41e3a4]/10 border border-[#41e3a4]/20 mb-6">
              <span className="text-sm font-medium text-[#41e3a4]">VÕIMALUSED</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                Võimsad funktsioonid
              </span>
              <br />
              <span className="bg-gradient-to-r from-[#41e3a4] to-[#4af0b8] bg-clip-text text-transparent">
                kaasaegsetele ettevõtetele
              </span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Kõik, mida vajad erakordsete kliendikogemuste loomiseks
              AI-toega vestluste abil.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.03 }}
                className="group p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 hover:border-[#41e3a4]/30 transition-all hover:scale-105"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#41e3a4]/20 to-[#4af0b8]/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-6 h-6 text-[#41e3a4]" />
                </div>
                <h3 className="font-bold mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Showcase */}
      <section className="relative py-32 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {benefits.map((benefit, idx) => (
            <div
              key={benefit.title}
              className={`grid lg:grid-cols-2 gap-16 items-center ${
                idx > 0 ? "mt-32" : ""
              }`}
            >
              <motion.div
                initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className={idx % 2 === 1 ? "lg:order-2" : ""}
              >
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  {benefit.title}
                </h2>
                <p className="text-xl text-gray-400 leading-relaxed mb-8">
                  {benefit.description}
                </p>
                <div className="grid grid-cols-3 gap-4">
                  {benefit.stats.map((stat, i) => (
                    <div
                      key={i}
                      className="p-4 rounded-xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10"
                    >
                      <div className="text-3xl font-bold text-[#41e3a4] mb-1">
                        {stat.value}
                      </div>
                      <div className="text-xs text-gray-500 mb-1">{stat.label}</div>
                      <div className="text-xs text-gray-400">{stat.desc}</div>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: idx % 2 === 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className={idx % 2 === 1 ? "lg:order-1" : ""}
              >
                <div className="relative rounded-2xl overflow-hidden border border-white/10">
                  <ImageWithFallback
                    src={
                      idx === 0
                        ? "https://images.unsplash.com/photo-1764336312138-14a5368a6cd3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXR1cmlzdGljJTIwdGVjaG5vbG9neSUyMG5ldXJhbCUyMG5ldHdvcmt8ZW58MXx8fHwxNzczNzQ4MTkyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                        : "https://images.unsplash.com/photo-1766066014237-00645c74e9c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXN0b21lciUyMHN1cHBvcnQlMjBtb2Rlcm4lMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzczNzY1OTE1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    }
                    alt={benefit.title}
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1c]/80 to-transparent" />
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </section>

      {/* Platform Integrations */}
      <section className="relative py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-block px-4 py-2 rounded-full bg-[#41e3a4]/10 border border-[#41e3a4]/20 mb-6">
              <span className="text-sm font-medium text-[#41e3a4]">INTEGRATSIOONID</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Töötab kõikjal, kus sina
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Turtlo integreerib sujuvalt sinu olemasolevate tööriistade ja
              platvormidega.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                title: "WordPress & Shopify",
                description:
                  "Turtlo toetab mõlemat platvormi ja suudab ühendada ka kataloogide ning vormidega.",
                icon: Globe,
              },
              {
                title: "E-post ja Slack",
                description:
                  "Päringud saab suunata e-postile või Slacki, sõltuvalt sinu töövoost.",
                icon: Headphones,
              },
            ].map((platform, i) => (
              <motion.div
                key={platform.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2, duration: 0.6 }}
                className="p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 hover:border-[#41e3a4]/30 transition-all"
              >
                <platform.icon className="w-12 h-12 text-[#41e3a4] mb-4" />
                <h3 className="text-2xl font-bold mb-3">{platform.title}</h3>
                <p className="text-gray-400">{platform.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative py-32 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-block px-4 py-2 rounded-full bg-[#41e3a4]/10 border border-[#41e3a4]/20 mb-6">
              <span className="text-sm font-medium text-[#41e3a4]">KKK</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Korduma kippuvad küsimused
            </h2>
          </motion.div>

          <div className="space-y-4">
            {[
              {
                q: "Kuidas Turtlo chatbot erineb tavalisest live-chatist?",
                a: "Turtlo chatbot kasutab sinu ettevõtte sisu ja protsesse, et anda sisukamaid vastuseid, mitte ainult vestlust edasi suunata.",
              },
              {
                q: "Kas Turtlo töötab WordPressi ja Shopifyga?",
                a: "Jah. Turtlo toetab mõlemat platvormi ja suudab ühendada ka kataloogide ning vormidega.",
              },
              {
                q: "Kui kiiresti saame lahendusega alustada?",
                a: "Tavaliselt teeme esmase auditi 1–2 tööpäevaga ja paigaldus algab kohe pärast kinnitust.",
              },
              {
                q: "Kas Turtlo toetab mitut keelt?",
                a: "Jah, saab teenindada mitmes keeles ning kuvada külastajale sobiva keele automaatselt.",
              },
              {
                q: "Kas Turtlo saab saata päringud e-postile või tiimikanalisse?",
                a: "Jah, päringud saab suunata e-postile või Slacki, sõltuvalt sinu töövoost.",
              },
            ].map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 hover:border-[#41e3a4]/20 transition-all"
              >
                <h3 className="font-bold mb-3 text-[#41e3a4]">{faq.q}</h3>
                <p className="text-gray-400">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
