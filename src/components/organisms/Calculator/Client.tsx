'use client'

import { useState, useRef, FormEvent, ChangeEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ReCAPTCHA from 'react-google-recaptcha';
import { PopupButton } from "react-calendly";

type StepKey = 'Q1' | 'Q2' | 'Q3' | 'Q4' | 'Q5' | 'Q6' | 'Q7' | 'Q8' | 'Q9' | 'Q10' | 'E1' | 'E2' | 'E3' | 'E4' | 'E5';

interface Option {
  label: string;
  value: string;
  next: StepKey;
}

interface Question {
  key: StepKey;
  question?: string;
  type: 'select' | 'multi-select' | 'range' | 'answer';
  options?: Option[];
  min?: number;
  max?: number;
  step?: number;
  next?: StepKey;
  title?: string;
  text?: string;
  form?: boolean;
  buttons?: Array<{
    label: string;
    action: string;
  }>;
}

interface Flow {
  [key: string]: Question;
}

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface Answers {
  [key: string]: string | string[] | number;
}

interface CalculatorClientProps {
  flow: Flow;
}

// Ajout d'une vérification pour la clé reCAPTCHA
const RECAPTCHA_SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
if (!RECAPTCHA_SITE_KEY) {
  throw new Error('NEXT_PUBLIC_RECAPTCHA_SITE_KEY is not defined');
}

const CalculatorClient: React.FC<CalculatorClientProps> = ({ flow }) => {
  const [step, setStep] = useState<StepKey>('Q1');
  const [answers, setAnswers] = useState<Answers>({});
  const [formData, setFormData] = useState<FormData>({ name: '', email: '', message: '' });
  const [responseMsg, setResponseMsg] = useState('');
  const [emailStepDone, setEmailStepDone] = useState(false);
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const current = flow[step];

  const handleAnswer = (value: string | string[] | number) => {
    const currentAnswer = Array.isArray(value) ? value : [value];

    let nextStep: StepKey | undefined;
    if (current.options && Array.isArray(current.options)) {
      nextStep = current.options.find(
        (opt) => value === opt.value || currentAnswer.includes(opt.value)
      )?.next;
    } else if (current.next) {
      nextStep = current.next;
    }

    setAnswers((prev) => ({ ...prev, [step]: value }));

    if (nextStep) {
      setStep(nextStep);
    }
  };

  const handleRestart = () => {
    setStep('Q1');
    setAnswers({});
  };

  const replacePlaceholders = () => {
    // Récupération des réponses de l'utilisateur
    const nbPages = Number(answers['Q10']) || 1;
    const hasMockup = answers['Q7'] === "oui" ? "avec des maquettes" : "sans maquettes";
    const siteType = flow['Q8']?.options?.find(opt => opt.value === answers['Q8'])?.label;

    const specs = Array.isArray(answers['Q9'])
      ? `et avec ${answers['Q9'].length > 1 ? 'les options' : 'l\'option'} : <ul>${answers['Q9'].map(answer => {
          const option = flow['Q9']?.options?.find(opt => opt.value === answer);
          return `<li class="list-disc list-inside py-4 font-semibold">${option?.label || ''}</li>`;
        }).join("")}</ul>`
      : null;

    // Calcul du tarif estimé
    let basePrice = 600;
    if (nbPages > 3) basePrice = 400;

    let total = basePrice * nbPages;
    if (hasMockup === "avec des maquettes") total += 300;

    if (siteType === 'Un site marchand') total += 1000;

    // Vérification des spécificités
    const specsArray = Array.isArray(answers['Q9']) ? answers['Q9'] : [];
    if (specsArray.includes('blog')) total += 800;
    if (specsArray.includes('api')) total += 800;
    if (specsArray.includes('multilingue')) total += 800;

    const newText = `D'après les estimations, pour ${siteType?.toLowerCase() || ''} de ${nbPages} pages, ${hasMockup} ${specs || ""}il faut compter : <span class="block text-tertiary text-4xl font-bold">${total}€</span>
    Bien sûr, ceci n'est qu'une estimation. Si vous souhaitez approfondir le sujet, prenez un rendez-vous sur mon Calendly ou me contacter directement par message, je serai ravi d'en discuter.`;

    return newText;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const token = recaptchaRef.current?.getValue();

    if (!token) {
      setResponseMsg('Veuillez valider le reCAPTCHA.');
      return;
    }

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BACK_URL}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...formData, answers, token }),
      });

      const data = await response.json();
      setEmailStepDone(true);

      if (response.ok) {
        setResponseMsg(data.success || 'Message envoyé avec succès !');
        recaptchaRef.current?.reset();
        setFormData({ name: '', email: '', message: '' });
      } else {
        setResponseMsg(data.error || 'Erreur inconnue.');
      }
    } catch (error) {
      setResponseMsg('Une erreur est survenue.');
      console.error(error);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };


  const renderEnding = (el: Question) => {
    const rootElement = document.getElementById("root")
    // On ne montre le résultat que si l'email est rempli
    if (el.key === 'E5' && !emailStepDone) {
      return (
        <div className="text-center">
          <h2 className="text-xl font-bold mb-4">Avant de voir le résultat, entrez votre email</h2>
          <form className="space-y-4" method="POST" onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Votre nom" className="w-full border p-2 rounded" required onChange={handleChange} value={formData.name} />
            <input type="email" name="email" placeholder="Votre email" className="w-full border p-2 rounded" required onChange={handleChange} value={formData.email} />
            <textarea name="message" placeholder="Avez-vous autre chose à ajouter ?" className="w-full border p-2 rounded h-32" onChange={handleChange} value={formData.message} />
            {RECAPTCHA_SITE_KEY && (
              <ReCAPTCHA
                sitekey={RECAPTCHA_SITE_KEY}
                ref={recaptchaRef}
              />
            )}
            <button type="submit" className="bg-primary text-secondary font-semibold px-4 py-2 rounded hover:bg-tertiary hover:text-primary transition cursor-pointer">Envoyer</button>
            {responseMsg && <p>{responseMsg}</p>}
          </form>
        </div>
      );
    }

    // Affichage final du résultat
    if (el.key === 'E5') {
      const dynamicText = replacePlaceholders();

      return (
        <div className="text-center">
          <h2 className="text-xl font-bold mb-4">{el.title}</h2>
          <div
            className="mb-4 whitespace-pre-line calculator__answer-container"
            dangerouslySetInnerHTML={{ __html: dynamicText }}
          ></div>
          <div className="flex gap-4 flex-wrap items-center justify-center mt-4 md:mt-0 flex-row md:flex-col lg:flex-nowrap lg:flex-row">
            <button
              onClick={handleRestart}
              className="lg:whitespace-nowrap btn-contact bg-primary text-tertiary font-semibold px-6 py-3 rounded-lg shadow hover:bg-secondary transition cursor-pointer"
            >
              Recommencez une estimation
            </button>
            <div className='btn-contact btn-calendly whitespace-nowrap bg-secondary text-tertiary font-semibold rounded-lg hover:bg-primary transition cursor-pointer'>
              {rootElement &&
                <PopupButton
                  url="https://calendly.com/guerric-sant"
                  rootElement={rootElement}
                  text="Prendre rendez-vous"
                />
              }
            </div>
          </div>
        </div>
      );
    }

    // Cas générique
    return (
      <div className="text-center">
        <h2 className="text-xl font-bold mb-4">{el.title}</h2>
        <p className="mb-4 whitespace-pre-line">{el.text}</p>
        {el.form && (
          <>
            <form className="space-y-4 py-4" method="POST" onSubmit={handleSubmit}>
              <input type="text" name="name" placeholder="Votre nom" className="w-full border p-2 rounded" required onChange={handleChange} value={formData.name} />
              <input type="email" name="email" placeholder="Votre email" className="w-full border p-2 rounded" required onChange={handleChange} value={formData.email} />
              <textarea name="message" placeholder="Avez-vous autre chose à ajouter ?" required className="w-full border p-2 rounded h-32" onChange={handleChange} value={formData.message} />
              {RECAPTCHA_SITE_KEY && (
                <ReCAPTCHA
                  sitekey={RECAPTCHA_SITE_KEY}
                  ref={recaptchaRef}
                />
              )}
              <button
                type="submit"
                onClick={() => {
                  setTimeout(() => {
                    window.location.href = '/';
                  }, 2000);
                }}
                className="bg-primary text-secondary font-semibold px-4 py-2 rounded hover:bg-tertiary hover:text-primary transition cursor-pointer"
              >
                Envoyer
              </button>
            </form>
            {responseMsg && <div className='absolute inset-0 bg-black/50 z-100 flex items-center justify-center'><div className='bg-white m-2 p-6 rounded-xl w-full max-w-lg relative'><p>{responseMsg}</p><p>Vous allez être redirigé vers la page d&apos;accueil</p></div></div>}
          </>
        )}
        <div className="flex gap-4 flex-wrap items-center justify-center mt-4 md:mt-0 flex-row md:flex-col lg:flex-nowrap lg:flex-row">
          <button
            onClick={handleRestart}
            className="lg:whitespace-nowrap btn-contact bg-primary text-tertiary font-semibold px-6 py-3 rounded-lg shadow hover:bg-secondary transition cursor-pointer"
          >
            Recommencez une estimation
          </button>
          <div className='btn-contact btn-calendly whitespace-nowrap bg-secondary text-tertiary font-semibold rounded-lg hover:bg-primary transition'>
          {rootElement &&
            <PopupButton
              url="https://calendly.com/guerric-sant"
              rootElement={rootElement}
              text="Prendre rendez-vous"
            />
          }
          </div>
        </div>
      </div>
    );
  };


  return (
    <section className="calculator container mx-auto max-w-xl py-10 px-4">
      <div className="bg-white rounded-xl shadow-lg p-8 min-h-[300px] flex items-center justify-center relative overflow-hidden">
      <AnimatePresence mode="wait">
        {step && flow[step] ? (
          current.type === "answer" ? (
            <motion.div
              key="result"
              initial={{ x: 200, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -200, opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="w-full"
            >
              {renderEnding(current)}
            </motion.div>
          ) : (
            <motion.div
              key={step}
              initial={{ x: 200, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -200, opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="w-full"
            >
              <h2 className="text-xl font-bold mb-6 text-gray-800">{current.question}</h2>
              <div className="flex flex-col gap-4">
                {current.type === 'multi-select' ? (
                  current.options?.map((opt) => (
                    <label key={opt.value} className="flex items-center gap-2 cursor-pointer">
                      <input
                        className='calculator__checkbox checked:bg-primary checked:text-tertiary cursor-pointer'
                        type="checkbox"
                        value={opt.value}
                        checked={(answers[step] as string[] || []).includes(opt.value)}
                        onChange={(e) => {
                          const value = answers[step] as string[] || [];
                          const newValue = e.target.checked
                            ? [...value, opt.value]
                            : value.filter((v) => v !== opt.value);
                          setAnswers((prev) => ({ ...prev, [step]: newValue }));
                        }}
                      />
                      {opt.label}
                    </label>
                  ))
                ) : current.type === 'range' ? (
                  <div className="relative w-full">
                    <input
                      type="range"
                      min={current.min ? current.min : 0}
                      max={current.max ? current.max : 10}
                      step={current.step || 1}
                      value={answers[step] !== undefined ? Number(answers[step]) : current.min}
                      onChange={(e) => {
                        const numericValue = Number(e.target.value);
                        setAnswers((prev) => ({ ...prev, [step]: numericValue }));
                      }}
                      className="w-full range-slider"
                      style={{background: `linear-gradient(to right, var(--tertiary_color) 0%, var(--tertiary_color) ${(answers[step] ? (Number(answers[step]) -1) : 0) / ((current.max ? current.max : 10) -1) * 100}%, var(--primary_color) ${((answers[step] ? (Number(answers[step]) -1) : 0) / ((current.max ? current.max : 10) -1) * 100)}%, var(--primary_color) 100%)` }}
                    />
                    <div className="text-sm text-orange-600 font-semibold mt-2 text-center">
                      {answers[step] === current.max
                        ? `${answers[step]}+ pages`
                        : `${answers[step] ?? current.min} ${answers[step] === 1 ? 'page' : 'pages'}`}
                    </div>
                  </div>
                ) : (
                  current.options?.map((opt) => (
                    <button
                      key={opt.value}
                      className="px-4 py-2 rounded-lg bg-secondary font-semibold text-primary hover:bg-primary hover:text-tertiary transition cursor-pointer"
                      onClick={() => handleAnswer(opt.value)}
                    >
                      {opt.label}
                    </button>
                  ))
                )}

                {(current.type === 'multi-select' || current.type === 'range') && (
                  <button
                    className="whitespace-nowrap px-6 py-3 bg-secondary text-tertiary font-semibold rounded-lg hover:bg-primary transition cursor-pointer"
                    onClick={() => handleAnswer(answers[step] || [])}
                  >
                    Continuer
                  </button>
                )}
              </div>
            </motion.div>
          )
        ) : null}
      </AnimatePresence>

      </div>
    </section>
  );
}

export default CalculatorClient;
