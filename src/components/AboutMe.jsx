export default function AboutMe() {
  return (
    <div className="relative text-left rounded-lg overflow-hidden bg-black/20 p-8 animate-fade-in-up">
      <h1 className="font-heading text-4xl font-bold tracking-widest mb-4 uppercase">
        Su di me
      </h1>
      <p className="font-body text-lg leading-relaxed">
        Sin da quando ero bambino ho sviluppato una forte affinità con la
        tecnologia, ed è per questo che ho scelto di percorrere la mia carriera
        nell’ambito sviluppo web. Le esperienze lavorative maturate nel corso
        degli anni mi hanno dato l’opportunità di incrementare le mie conoscenze
        in diversi ambiti inerenti al mondo tech. Inoltre, ho avuto la
        possibilità di collaborare e gestire un team di risorse e
        interfacciandomi con più colleghi ho sviluppato grandi capacità di
        osservazione e comunicazione. Mi definisco una persona ambiziosa che
        cerca di dare sempre il massimo, infatti, sono fermamente convinto che
        il confronto con chi ha più esperienza sia il miglior modo per poter
        trarre insegnamento da ciò che si osserva.
        <br />
        <br />
        Quando non scrivo codice, puoi trovarmi a giocare ai VideoGames.
      </p>
      <img className="mt-4 rounded-md" src="./IntoDeep.gif" alt="Web Game Developer" />
    </div>
  );
}
