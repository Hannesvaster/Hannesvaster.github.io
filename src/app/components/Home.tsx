import { Link } from "react-router";
import { motion } from "motion/react";
import { ArrowRight, Sparkles, Clock, Languages, BarChart3, Shield, Zap, Users } from "lucide-react";

export function Home() {
  return (
    <div className="bg-[#0a0f1c] text-white pt-20">
      {/* Animated Grid Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(65,227,164,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(65,227,164,0.03)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,black,transparent)]" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#41e3a4]/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#4a64aa]/10 rounded-full blur-[120px]" />
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-block"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#41e3a4]/10 border border-[#41e3a4]/20 mb-8">
                <Sparkles className="w-4 h-4 text-[#41e3a4]" />
                <span className="text-sm font-medium text-[#41e3a4]">
                  TEHISINTELLEKT, MIS TUGEVDAB KLIENDITUGE
                </span>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-6xl md:text-7xl lg:text-8xl font-bold mb-8"
            >
              <span className="bg-gradient-to-r from-white via-white to-gray-400 bg-clip-text text-transparent">
                AI ja inimtoe
              </span>
              <br />
              <span className="bg-gradient-to-r from-[#41e3a4] via-[#4af0b8] to-[#41e3a4] bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
                nutikas koostöö
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto"
            >
              Paku kiiremat abi ja sujuvamat kliendikogemust.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Link
                to="/contact"
                className="group relative px-8 py-4 bg-gradient-to-r from-[#41e3a4] to-[#4af0b8] text-[#0a0f1c] rounded-xl font-bold text-lg overflow-hidden transition-all hover:shadow-2xl hover:shadow-[#41e3a4]/40 hover:scale-105"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Räägime projektist
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#4af0b8] to-[#41e3a4] opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>

              <Link
                to="/features"
                className="px-8 py-4 rounded-xl font-semibold text-lg border border-white/20 hover:border-[#41e3a4]/50 hover:bg-white/5 transition-all backdrop-blur-sm"
              >
                Vaata teenuseid
              </Link>
            </motion.div>

            {/* Floating elements */}
            <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-[#41e3a4] rounded-full animate-pulse" />
            <div className="absolute bottom-1/3 right-1/3 w-3 h-3 bg-[#4af0b8] rounded-full animate-pulse delay-100" />
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="w-1.5 h-1.5 bg-[#41e3a4] rounded-full mt-2"
            />
          </div>
        </motion.div>
      </section>

      {/* Reduce Burden Section */}
      <section className="relative py-32 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-block px-4 py-2 rounded-full bg-[#41e3a4]/10 border border-[#41e3a4]/20 mb-6">
                <span className="text-sm font-medium text-[#41e3a4]">TÕHUSUS</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Vähenda rutiinset koormust
              </h2>
              <p className="text-xl text-gray-400 leading-relaxed">
                Lase AI-assistendil vastata korduvatele küsimustele ning suuna
                keerulisemad teemad õigel hetkel inimesele. Nii saab Teie tiim
                keskenduda sellele, kus päriselt väärtust luuakse.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-2 gap-6"
            >
              {[
                { icon: Clock, label: "24/7 tugi", value: "Alati valmis" },
                { icon: Zap, label: "Kiire vastus", value: "<3 sek" },
                { icon: Languages, label: "Mitu keelt", value: "100+" },
                { icon: BarChart3, label: "Kokkuhoid", value: "70%" },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 backdrop-blur-sm hover:border-[#41e3a4]/30 transition-all group"
                >
                  <stat.icon className="w-8 h-8 text-[#41e3a4] mb-4 group-hover:scale-110 transition-transform" />
                  <div className="text-2xl font-bold mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Multi-Channel Section */}
      <section className="relative py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <div className="inline-block px-4 py-2 rounded-full bg-[#41e3a4]/10 border border-[#41e3a4]/20 mb-6">
              <span className="text-sm font-medium text-[#41e3a4]">OMNIKANAALNE</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ole kliendile olemas igas kanalis
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Virtuaalne assistent aitab kliente kodulehel ja sõnumikanalites,
              hoides kogu suhtluse ühes vaates.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                icon: Sparkles,
                title: "Loomuliku vestlusstiiliga AI-assistent",
                description:
                  "Automatiseerib suure osa kliendisuhtlusest ilma isiklikku lähenemist kaotamata.",
              },
              {
                icon: Shield,
                title: "Turvaline ja usaldusväärne",
                description:
                  "Enterprise-tasemel turvalisus ja andmekaitse. Sinu klientide andmed on alati kaitstud.",
              },
              {
                icon: Users,
                title: "Sujuv inimesele üleandmine",
                description:
                  "Kui vaja, suunatakse vestlus automaatselt päris inimesele koos kogu kontekstiga.",
              },
            ].map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2, duration: 0.6 }}
                className="group p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 hover:border-[#41e3a4]/30 transition-all hover:scale-105"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#41e3a4]/20 to-[#4af0b8]/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-7 h-7 text-[#41e3a4]" />
                </div>
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-[#41e3a4]/10 to-[#4af0b8]/10 border border-[#41e3a4]/20"
          >
            <h3 className="text-2xl font-bold text-[#41e3a4] mb-4">
              Kaasaegne klienditugi algab siit
            </h3>
            <ul className="grid md:grid-cols-3 gap-4">
              {[
                "Kiirem teenindus ja lühem vastamisaeg",
                "Väiksem töökoormus Teie tiimile",
                "Parem kliendirahulolu igas vestluses",
              ].map((benefit, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#41e3a4]" />
                  <span className="text-gray-300">{benefit}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 inline-block px-4 py-2 rounded-full bg-[#41e3a4]/20 border border-[#41e3a4]/30">
              <span className="text-sm font-semibold text-[#41e3a4]">
                Saadaval 24/7. Mitmes keeles. Lihtne kasutusele võtta.
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#41e3a4]/10 to-[#4af0b8]/10" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSg2NSwgMjI3LCAxNjQsIDAuMSkiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-30" />
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Valmis järgmiseks tasemeks?
            </h2>
            <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
              Liitu ettevõtetega, kes kasutavad Turtlo'd, et pakkuda erakordset
              kliendikogemust.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-[#41e3a4] to-[#4af0b8] text-[#0a0f1c] rounded-xl font-bold text-xl hover:shadow-2xl hover:shadow-[#41e3a4]/40 transition-all hover:scale-105"
            >
              Alusta täna
              <ArrowRight className="w-6 h-6" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
