import { motion } from "motion/react";
import { Check } from "lucide-react";

export function Pricing() {
  const pricingPlans = [
    {
      name: "Starter",
      price: "49€",
      period: "+ KM / kuu",
      description: "",
      features: [
        "1 kanal (veebileht või WordPress)",
        "Kuni 500 sõnumit kuus",
        "FAQ + lehesisu põhine teadmistebaas",
        "Email tugi tööpäeviti",
      ],
      highlighted: false,
      cta: "Alusta Starteriga",
    },
    {
      name: "Growth",
      price: "99€",
      period: "+ KM / kuu",
      description: "",
      features: [
        "Mitme kanali tugi (veeb + Messenger/WhatsApp)",
        "Kuni 1500 sõnumit kuus",
        "Lead routing ja kontaktide suunamine e-postile",
        "Igakuine optimeerimine ja raport",
      ],
      highlighted: true,
      cta: "Vali Growth",
    },
    {
      name: "Scale",
      price: "Alates 199€",
      period: "+ KM / kuu",
      description: "",
      features: [
        "Piiramatu kanalite arhitektuur",
        "Kohandatud töövood ja API integratsioonid",
        "SLA tase + prioriteetne tugi",
        "Quarterly AI strateegia workshop",
      ],
      highlighted: false,
      cta: "Räägi Scale lahendusest",
    },
  ];

  return (
    <div className="relative min-h-screen pt-20 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-[#41e3a4]/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#4af0b8]/10 rounded-full blur-3xl animate-pulse delay-1000" />

        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `linear-gradient(#41e3a4 1px, transparent 1px), linear-gradient(90deg, #41e3a4 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-2 mb-6 rounded-full bg-gradient-to-r from-[#41e3a4]/20 to-[#4af0b8]/20 border border-[#41e3a4]/30"
          >
            <span className="text-[#41e3a4] font-semibold">TURTLO AI HINNAKIRI</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl md:text-6xl mb-6 pb-2 leading-tight bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent"
          >
            Selge, informeeriv ja skaleeruv paketivalik
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-gray-400 max-w-2xl mx-auto"
          >
            Vali enda ettevõtte etapile sobiv pakett. Kõik plaanid sisaldavad tuge, turvalist seadistust ja tulemusmõõdikuid.
          </motion.p>
        </motion.div>

        {/* Trial Offer */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="backdrop-blur-xl bg-gradient-to-r from-[#41e3a4]/10 to-[#4af0b8]/10 border border-[#41e3a4]/30 rounded-2xl p-8 md:p-10 mb-12 text-center"
        >
          <h2 className="text-3xl font-bold text-white mb-4">14 päeva tasuta prooviperiood</h2>
          <p className="text-gray-300 mb-6 max-w-3xl mx-auto">
            Proovi Turtlo lahendust 14 päeva tasuta. Seadistame esmase chatboti ja saad enne otsustamist päris kasutuses tulemusi hinnata.
          </p>
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-3 bg-gradient-to-r from-[#41e3a4] to-[#4af0b8] text-[#0a0f1c] rounded-lg font-semibold shadow-lg shadow-[#41e3a4]/30"
          >
            Alusta tasuta prooviperioodiga
          </motion.a>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              className={`relative rounded-2xl p-8 backdrop-blur-xl ${
                plan.highlighted
                  ? "bg-gradient-to-br from-[#41e3a4]/10 via-[#0a0f1c]/90 to-[#4af0b8]/10 border-2 border-[#41e3a4]/50 shadow-2xl shadow-[#41e3a4]/20"
                  : "bg-white/5 border border-white/10"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-[#41e3a4] to-[#4af0b8] rounded-full">
                  <span className="text-sm font-bold text-[#0a0f1c]">Populaarseim</span>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-2xl font-bold text-white">{plan.name}</h3>
              </div>

              <div className="mb-8">
                <div className="flex items-baseline flex-wrap">
                  <span className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#41e3a4] to-[#4af0b8] bg-clip-text text-transparent">
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span className="ml-2 text-gray-400 text-sm">{plan.period}</span>
                  )}
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#41e3a4]/20 flex items-center justify-center mt-0.5 mr-3">
                      <Check className="w-3 h-3 text-[#41e3a4]" />
                    </div>
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <motion.a
                href="/contact"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`block w-full py-3 px-6 rounded-lg font-semibold text-center transition-all ${
                  plan.highlighted
                    ? "bg-gradient-to-r from-[#41e3a4] to-[#4af0b8] text-[#0a0f1c] shadow-lg shadow-[#41e3a4]/30"
                    : "bg-white/5 text-white border border-white/20 hover:bg-white/10"
                }`}
              >
                {plan.cta}
              </motion.a>
            </motion.div>
          ))}
        </div>

        {/* What's Included Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12 text-center"
        >
          <h2 className="text-3xl font-bold text-white mb-4">Mida hind sisaldab?</h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Kõik paketid sisaldavad turvaseadistust, esmast konfiguratsiooni, teadmistebaasi ühendamist ja kasutusmõõdikute jälgimist.
          </p>

          <div className="mt-8 pt-8 border-t border-white/10">
            <p className="text-gray-400 mb-4">Vajad personaalset lahendust?</p>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-8 py-3 bg-gradient-to-r from-[#41e3a4] to-[#4af0b8] text-[#0a0f1c] rounded-lg font-semibold shadow-lg shadow-[#41e3a4]/30"
            >
              Võta meiega ühendust
            </motion.a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
