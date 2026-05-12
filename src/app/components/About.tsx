import { motion } from "motion/react";
import { Target, Eye, Heart, Award, Rocket, Users, Zap, Shield } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function About() {
  const values = [
    {
      icon: Target,
      title: "Missioonipõhine",
      description:
        "Meie missioon on muuta AI kättesaadavaks ja kasulikuks igale ettevõttele.",
    },
    {
      icon: Eye,
      title: "Läbipaistev",
      description:
        "Selge suhtlus, aus hinnakujundus ja avatus tehnoloogia toimimise osas.",
    },
    {
      icon: Heart,
      title: "Klient esmalt",
      description:
        "Iga otsus, mida teeme, seab esikohale klientide edu ja rahulolu.",
    },
    {
      icon: Award,
      title: "Tipptase",
      description:
        "Pühendunud kõrgeima kvaliteediga AI-lahenduste ja pideva innovatsiooni pakkumisele.",
    },
  ];

  const stats = [
    { value: "2024", label: "Asutatud", icon: Rocket },
    { value: "5+", label: "Klienti", icon: Users },
    { value: "1K+", label: "Vestlust", icon: Zap },
    { value: "99.9%", label: "Uptime", icon: Shield },
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
              <span className="text-sm font-medium text-[#41e3a4]">MEIST</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                Ehitame
              </span>
              <br />
              <span className="bg-gradient-to-r from-[#41e3a4] to-[#4af0b8] bg-clip-text text-transparent">
                tuleviku kliendisuhtlust
              </span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              AI tehnoloogia, mis on võimas, kättesaadav ja inimkeskne.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="relative py-20 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Meie lugu</h2>
              <p className="text-lg text-gray-400 mb-4 leading-relaxed">
                Turtlo asutati 2024. aastal lihtsast tähelepanekust: ettevõtted
                vajavad paremaid viise oma klientidega suhtlemiseks, ja kuigi
                AI-tehnoloogia arenes kiiresti, ei kohtunud need kaks maailma.
              </p>
              <p className="text-lg text-gray-400 mb-4 leading-relaxed">
                Otsustasime seda lünka täita. Meie AI-teadlaste, inseneride ja
                kliendikogemus ekspertide meeskond tuli kokku, et luua chatbot
                lahendusi, mis ei ole mitte ainult tehnoloogiliselt arenenud, vaid
                ka tõeliselt kasulikud ja lihtsalt rakendatavad.
              </p>
              <p className="text-lg text-gray-400 leading-relaxed">
                Täna teenindame ettevõtteid üle maailma, alates idufirmadest
                kuni suurettevõteteni, aidates neil pakkuda erakordseid
                kliendikogemusi mastaabis.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden border border-white/10">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1770233621425-5d9ee7a0a700?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBSSUyMGRpZ2l0YWwlMjBicmFpbiUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzczNzY1OTE0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="AI Technology"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1c]/60 to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 hover:border-[#41e3a4]/30 transition-all group"
              >
                <stat.icon className="w-10 h-10 text-[#41e3a4] mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <div className="text-4xl lg:text-5xl font-bold mb-2 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="relative py-32 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-block px-4 py-2 rounded-full bg-[#41e3a4]/10 border border-[#41e3a4]/20 mb-6">
              <span className="text-sm font-medium text-[#41e3a4]">VÄÄRTUSED</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Meie põhimõtted</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Põhimõtted, mis juhivad kõike, mida Turtlo's teeme.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 hover:border-[#41e3a4]/30 transition-all hover:scale-105"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#41e3a4]/20 to-[#4af0b8]/20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <value.icon className="text-[#41e3a4]" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-center">{value.title}</h3>
                <p className="text-gray-400 text-center">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="relative py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-block px-4 py-2 rounded-full bg-[#41e3a4]/10 border border-[#41e3a4]/20 mb-6">
              <span className="text-sm font-medium text-[#41e3a4]">MEESKOND</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ehitatud ekspertide poolt
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-12">
              Meie mitmekesine meeskond toob kokku aastakümneid kogemust
              AI-teaduses, tarkvarainsenerias, tootedesainis ja klienditeeninduses.
            </p>
            <div className="relative rounded-2xl overflow-hidden border border-white/10 max-w-4xl mx-auto">
              <div className="p-12 bg-gradient-to-br from-[#41e3a4]/10 to-[#4af0b8]/10">
                <p className="text-lg text-gray-300 mb-6">
                  Otsime alati kirglikke, andekaid inimesi, kes soovivad liituda
                  meie missiooniga. Kui Teid huvitab AI ja kliendikogemuse ristumiskoht,
                  tahaksime Teilt kuulda.
                </p>
                <a
                  href="mailto:careers@turtlo.com"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#41e3a4] to-[#4af0b8] text-[#0a0f1c] rounded-xl font-bold hover:shadow-lg hover:shadow-[#41e3a4]/30 transition-all"
                >
                  Liitu meeskonnaga
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="relative py-32 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center p-12 rounded-3xl bg-gradient-to-br from-[#41e3a4]/10 to-[#4af0b8]/10 border border-[#41e3a4]/20"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="bg-gradient-to-r from-[#41e3a4] to-[#4af0b8] bg-clip-text text-transparent">
                "Meie visioon on maailm, kus iga ettevõte saab kasutada AI võimsust,
                et pakkuda erakordseid kliendikogemusi."
              </span>
            </h2>
            <p className="text-gray-400">— Turtlo meeskond</p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
