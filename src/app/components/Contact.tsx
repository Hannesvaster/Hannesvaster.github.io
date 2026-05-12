import { motion } from "motion/react";
import { Mail, MapPin, Phone, Send, Clock } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { useState } from "react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Saadan...");

    try {
      const response = await fetch("https://formspree.io/f/xojvgbzz", {
        method: "POST",
        body: new FormData(e.target as HTMLFormElement),
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setStatus("Aitäh! Võtame peagi ühendust.");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("Saatmisel tekkis viga. Proovi uuesti.");
      }
    } catch (error) {
      setStatus("Võrguviga. Proovi uuesti.");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "E-post",
      detail: "hello@turtlo.com",
      link: "mailto:hello@turtlo.com",
    },
    {
      icon: Phone,
      title: "Telefon",
      detail: "+372 508 2466",
      link: "tel:+3725XXXXXXX",
    },
    {
      icon: MapPin,
      title: "Asukoht",
      detail: "Tallinn, Eesti",
      link: null,
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
              <span className="text-sm font-medium text-[#41e3a4]">VÕTA ÜHENDUST</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                Võta meiega
              </span>
              <br />
              <span className="bg-gradient-to-r from-[#41e3a4] to-[#4af0b8] bg-clip-text text-transparent">
                ühendust
              </span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Kui sul on AI-projekt või soovid lihtsalt aru saada, kust alustada,
              siis kirjuta meile. Teeme esialgse plaani ja aitame lahenduse käivitada.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10">
                <h2 className="text-3xl font-bold mb-6">Saada meile sõnum</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name" className="text-gray-300">
                      Nimi *
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="mt-2 bg-[#0a0f1c] border-white/20 text-white focus:border-[#41e3a4] focus:ring-[#41e3a4]"
                      placeholder="Sinu nimi"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-gray-300">
                      E-post *
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="mt-2 bg-[#0a0f1c] border-white/20 text-white focus:border-[#41e3a4] focus:ring-[#41e3a4]"
                      placeholder="GMFBAgency@gmail.com"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-gray-300">
                      Sõnum *
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className="mt-2 bg-[#0a0f1c] border-white/20 text-white focus:border-[#41e3a4] focus:ring-[#41e3a4]"
                      rows={6}
                      placeholder="Kirjelda oma projekti või küsi..."
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-[#41e3a4] to-[#4af0b8] text-[#0a0f1c] hover:shadow-lg hover:shadow-[#41e3a4]/30 transition-all font-bold text-lg py-6"
                  >
                    <Send className="mr-2" size={20} />
                    Saada
                  </Button>

                  {status && (
                    <div
                      className={`text-center p-3 rounded-lg ${
                        status.includes("Aitäh")
                          ? "bg-[#41e3a4]/10 text-[#41e3a4]"
                          : "bg-white/5 text-gray-400"
                      }`}
                    >
                      {status}
                    </div>
                  )}
                </form>
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold mb-6">Kontaktinfo</h2>
                <p className="text-lg text-gray-400 mb-8">
                  On küsimusi? Oleme siin, et aidata. Võta ühendust mõne järgneva
                  kanali kaudu.
                </p>

                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={info.title}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-start p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 hover:border-[#41e3a4]/30 transition-all"
                    >
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#41e3a4]/20 to-[#4af0b8]/20 flex items-center justify-center mr-4 flex-shrink-0">
                        <info.icon className="text-[#41e3a4]" size={24} />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">{info.title}</h3>
                        {info.link ? (
                          <a
                            href={info.link}
                            className="text-gray-400 hover:text-[#41e3a4] transition-colors"
                          >
                            {info.detail}
                          </a>
                        ) : (
                          <p className="text-gray-400">{info.detail}</p>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="p-8 rounded-2xl bg-gradient-to-br from-[#41e3a4]/10 to-[#4af0b8]/10 border border-[#41e3a4]/20">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="w-6 h-6 text-[#41e3a4]" />
                  <h3 className="text-xl font-semibold">Tööaeg</h3>
                </div>
                <div className="space-y-2 text-gray-300">
                  <p>Esmaspäev - Reede: 9:00 - 18:00</p>
                  <p>Laupäev: 10:00 - 16:00</p>
                  <p>Pühapäev: Suletud</p>
                </div>
                <p className="mt-4 text-sm text-[#41e3a4]">
                  Meie AI-assistendid on kättesaadavad 24/7!
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quick Start Section */}
      <section className="relative py-32 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-block px-4 py-2 rounded-full bg-[#41e3a4]/10 border border-[#41e3a4]/20 mb-6">
              <span className="text-sm font-medium text-[#41e3a4]">KIIRSTART</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Kuidas alustada?
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-16">
              Tavaliselt teeme esmase auditi 1–2 tööpäevaga ja paigaldus algab
              kohe pärast kinnitust.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  step: "01",
                  title: "Esimene konsultatsioon",
                  description:
                    "Võtame ühendust ja arutame sinu vajadusi ning eesmärke.",
                },
                {
                  step: "02",
                  title: "Kohandamine",
                  description:
                    "Seadistame AI-assistendi vastavalt sinu ettevõtte spetsiifikale.",
                },
                {
                  step: "03",
                  title: "Käivitamine",
                  description:
                    "Paigaldame lahenduse ja koolitame sinu meeskonda kasutamiseks.",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2, duration: 0.6 }}
                  className="p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 hover:border-[#41e3a4]/30 transition-all"
                >
                  <div className="text-6xl font-bold bg-gradient-to-r from-[#41e3a4] to-[#4af0b8] bg-clip-text text-transparent mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-gray-400">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
