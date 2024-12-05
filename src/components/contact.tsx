// react
import { FormEvent, useRef } from "react";

// email
import emailjs from "@emailjs/browser";

// images
import Image from "/images/light-girl.webp";

// translation
import { useTranslation } from "react-i18next";

// ui
import { Toaster } from "@/components/ui/sonner";
import { toast } from "sonner";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

export const Contact = () => {
  const { t } = useTranslation();
  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: FormEvent) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(
          "service_c2yvj8r",
          "template_0awiyst",
          form.current,
          "UzhmqBoR2CxAIhQuc"
        )
        .then(
          () => {
            toast.success(t("success_message"));
            form.current?.reset();
          },
          (error) => {
            toast.error(t("error_message"));
            console.log(error);
          }
        );
    }
  };

  return (
    <div id="contact" className="pt-4">
      <div className="text-center">
        <h2 className="my-5 text-2xl uppercase tracking-widest lg:text-4xl">
          Contact
        </h2>
        <div className="space-y-2">
          <p className="text-xl">{t("idea")}</p>
          <p>{t("send_email")}</p>
        </div>
      </div>

      <form
        ref={form}
        onSubmit={sendEmail}
        className="max-w-6xl mx-auto flex items-center p-10 rounded-lg lg:space-x-10"
      >
        <div className="relative w-1/2 bg-slate-900 rounded-full dark:bg-none hidden lg:flex">
          <img
            src={Image}
            width={100}
            height={100}
            className="w-full object-cover blur-2xl dark:blur-lg"
            loading="lazy"
            alt="image floutée d'une femme en 3d tenant une ampoule allumé dans chaque main"
          />
          <img
            src={Image}
            width={100}
            height={100}
            className="absolute inset-0 w-full object-cover p-5"
            loading="eager"
            alt="image d'une femme en 3d tenant une ampoule allumé dans chaque main"
          />
        </div>
        <div className="grid grid-cols-2 gap-3 lg:gap-5 w-full border-2 border-dashed p-5 md:p-10 border-blue-600 rounded-lg dark:border-amber-500">
          <div>
            <label className="hidden">{t("name")}</label>
            <Input
              type="text"
              name="to_name"
              className="dark:bg-amber-50"
              placeholder={t("name")}
              required
            />
          </div>
          <div>
            <label className="hidden">Email</label>
            <Input
              type="email"
              name="from_name"
              className="dark:bg-amber-50"
              placeholder="Email"
              required
            />
          </div>
          <div className="col-span-2">
            <label className="hidden">Message</label>
            <Textarea
              name="message"
              placeholder="Message"
              className="h-20 dark:bg-amber-50"
              required
            />
          </div>
          <div className="flex justify-end col-span-2">
            <Button type="submit">{t("send_button")}</Button>
            <Toaster />
          </div>
        </div>
      </form>
    </div>
  );
};
