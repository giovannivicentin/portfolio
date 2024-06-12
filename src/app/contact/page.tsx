'use client';

import { useEffect, useState } from 'react';
import { Label } from '@/components/ui/label';
import { Input } from '../../components/ui/input';
import {
  LinkedInLogoIcon,
  GitHubLogoIcon,
  ExclamationTriangleIcon,
  RocketIcon,
  CheckIcon,
} from '@radix-ui/react-icons';
import { RiWhatsappFill } from 'react-icons/ri';
import { TbMailFilled } from 'react-icons/tb';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';

const ContactPage = () => {
  const [charCount, setCharCount] = useState(0);
  const [hasReachedLimit, setHasReachedLimit] = useState(false);

  // States for email, subject, and message.
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [showFailureAlert, setShowFailureAlert] = useState(false);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setEmail(e.target.value);

  const handleSubjectChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setSubject(e.target.value);

  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const inputValue = e.target.value;
    setMessage(inputValue);
    setCharCount(inputValue.length);
    setHasReachedLimit(inputValue.length >= 200);
    if (inputValue.length > 200) {
      setMessage(inputValue.slice(0, 200));
    }
  };

  const handleSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault();

    const response = await fetch('/api/send', {
      method: 'POST',
      body: JSON.stringify({ email, subject, message }),
    });
    const data = await response.json();

    if (data.success) {
      setShowSuccessAlert(true);
      setEmail('');
      setSubject('');
      setMessage('');
    } else {
      setShowFailureAlert(true);
    }
  };

  useEffect(() => {
    if (showSuccessAlert || showFailureAlert) {
      const timer = setTimeout(() => {
        setShowSuccessAlert(false);
        setShowFailureAlert(false);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [showSuccessAlert, showFailureAlert]);

  return (
    <div className="flex flex-col items-center p-4 md:px-24">
      <div className="fixed bottom-1/4 sm:bottom-0 sm:right-0 m-6 space-y-4">
        {showSuccessAlert && (
          <Alert>
            <CheckIcon className="h-4 w-4" />
            <AlertTitle>Enviado</AlertTitle>
            <AlertDescription>E-mail enviado com sucesso!</AlertDescription>
          </Alert>
        )}
        {showFailureAlert && (
          <Alert variant="destructive">
            <ExclamationTriangleIcon className="h-4 w-4" />
            <AlertTitle>Erro</AlertTitle>
            <AlertDescription>
              Falha no envio do e-mail. Tente mais tarde.
            </AlertDescription>
          </Alert>
        )}
      </div>
      <div className="max-w-4xl w-full py-6">
        <h1 className="text-3xl mb-6 text-center animate-fade">Contato</h1>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col items-center space-y-2">
            <div className="flex flex-col items-start w-full max-w-md animate-fade-right delay-100">
              <Label className="mb-1" htmlFor="email">
                E-mail
              </Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={handleEmailChange}
                placeholder="usuario@dominio.com"
                autoComplete="email"
                required
              />
            </div>
            <div className="flex flex-col items-start w-full max-w-md animate-fade-right delay-200">
              <Label className="mb-1" htmlFor="subject">
                Assunto
              </Label>
              <Input
                id="subject"
                type="text"
                value={subject}
                onChange={handleSubjectChange}
                autoComplete="on"
                placeholder="Escreva o assunto aqui."
              />
            </div>
            <div className="flex flex-col items-start w-full max-w-md animate-fade-right delay-300">
              <Label className="mb-1" htmlFor="message">
                Mensagem
              </Label>
              <Textarea
                className="resize-none leading-relaxed pt-4 pb-20 overflow-hidden"
                id="message"
                value={message}
                onChange={handleMessageChange}
                maxLength={200}
                autoComplete="on"
                placeholder="Escreva sua mensagem aqui."
              />
              <span
                className={
                  hasReachedLimit
                    ? 'text-red-500 text-xs pt-1'
                    : 'text-muted-foreground text-xs pt-1'
                }
              >
                {charCount} / 200
              </span>
            </div>
            <div className="flex flex-col items-start w-full max-w-md animate-fade-right delay-500">
              <Button
                type="submit"
                className="w-full mt-2 font-bold transition-transform transform hover:scale-105 hover:dark:bg-violet-400 hover:bg-violet-700"
              >
                Enviar
              </Button>
            </div>
            <div className="flex pt-8 gap-2">
              <Link
                href="https://github.com/giovannivicentin"
                target="_blank"
                rel="noopener noreferrer"
                className='animate-fade-up delay-500'
              >
                <GitHubLogoIcon className="w-7 h-7 ml-4 transition-transform transform hover:scale-110 hover:dark:text-violet-400 hover:text-violet-700" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/giovannivicentin/"
                target="_blank"
                rel="noopener noreferrer"
                className='animate-fade-up delay-600'

              >
                <LinkedInLogoIcon className="w-7 h-7 ml-4 transition-transform transform hover:scale-110 hover:dark:text-violet-400 hover:text-violet-700" />
              </Link>
              <Link
                href="https://wa.me//5511942010707?text=Olá%20Giovanni"
                target="_blank"
                rel="noopener noreferrer"
                className='animate-fade-up delay-700'

              >
                <RiWhatsappFill className="w-7 h-7 ml-4 transition-transform transform hover:scale-110 hover:dark:text-violet-400 hover:text-violet-700" />
              </Link>
              <Link
                href="mailto:giovannifvicentin@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className='animate-fade-up delay-800'
              >
                <TbMailFilled className="w-7 h-7 ml-4 transition-transform transform hover:scale-110 hover:dark:text-violet-400 hover:text-violet-700" />
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
