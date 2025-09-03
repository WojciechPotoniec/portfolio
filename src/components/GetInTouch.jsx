import { useForm, ValidationError } from "@formspree/react";

export default function GetInTouch() {
  const [state, handleSubmit] = useForm("xvgbweaw");

  // Funzione helper per verificare se un campo ha un errore
  const hasError = (field) => state.errors && state.errors[field];

  if (state.succeeded) {
    return (
      <div className="text-center animate-fade-in-up">
        <h2 className="text-3xl font-bold tracking-widest mb-4">Grazie!</h2>
        <p className="text-lg text-gray-300">
          Il tuo messaggio è stato inviato. Ti risponderò il prima possibile.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full max-w-lg mx-auto animate-fade-in-up">
      <h1 className="text-4xl font-bold tracking-widest mb-8 text-center uppercase">
        Contattami
      </h1>
      <p className="text-center text-gray-300 mb-10">
        Hai un'idea o un progetto in mente? Scrivimi!
      </p>

      <form noValidate onSubmit={handleSubmit} className="space-y-4"> 
        {/* Campo Nome */}
        <div className="flex flex-col">
          <label
            htmlFor="name"
            className="mb-2 text-sm tracking-widest text-gray-400"
          >
            Nome
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            // 1. Classi condizionali per il bordo rosso
            className={`bg-white/10 p-3 rounded-md border transition-all duration-300 w-full focus:outline-none focus:ring-2 
              ${hasError('name') 
                ? 'border-red-500 focus:ring-red-500' 
                : 'border-transparent focus:ring-white/50'
              }`}
          />
          {/* 2. Contenitore a altezza fissa per il messaggio di errore */}
          <div className="h-6">
            <ValidationError
              prefix="Name"
              field="name"
              errors={state.errors}
              className="text-red-500 text-sm mt-1"
            />
          </div>
        </div>

        {/* Campo Email */}
        <div className="flex flex-col">
          <label
            htmlFor="email"
            className="mb-2 text-sm tracking-widest text-gray-400"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            // 1. Classi condizionali per il bordo rosso
            className={`bg-white/10 p-3 rounded-md border transition-all duration-300 w-full focus:outline-none focus:ring-2 
              ${hasError('email') 
                ? 'border-red-500 focus:ring-red-500' 
                : 'border-transparent focus:ring-white/50'
              }`}
          />
          {/* 2. Contenitore a altezza fissa per il messaggio di errore */}
          <div className="h-6">
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
              className="text-red-500 text-sm mt-1"
            />
          </div>
        </div>

        {/* Campo Messaggio */}
        <div className="flex flex-col">
          <label
            htmlFor="message"
            className="mb-2 text-sm tracking-widest text-gray-400"
          >
            Messaggio
          </label>
          <textarea
            id="message"
            name="message"
            rows="5"
            required
            // 1. Classi condizionali per il bordo rosso
            className={`bg-white/10 p-3 rounded-md border transition-all duration-300 resize-none w-full focus:outline-none focus:ring-2 
              ${hasError('message') 
                ? 'border-red-500 focus:ring-red-500' 
                : 'border-transparent focus:ring-white/50'
              }`}
          ></textarea>
          {/* 2. Contenitore a altezza fissa per il messaggio di errore */}
          <div className="h-6">
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
              className="text-red-500 text-sm mt-1"
            />
          </div>
        </div>

        {/* Bottone di Invio */}
        <div className="pt-2"> {/* Aggiunto un po' di spazio sopra il bottone */}
          <button
            type="submit"
            disabled={state.submitting}
            className="w-full bg-white/90 text-black font-bold py-3 rounded-md tracking-widest uppercase hover:bg-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {state.submitting ? 'Invio in corso...' : 'Invia Messaggio'}
          </button>
        </div>
      </form>
    </div>
  );
}
