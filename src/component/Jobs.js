import Job from "./Job";
const Jobs = () => {
  return (
    <>
      <div className="grille">
        <Job
          className="carre red"
          title="Full Time Sales Associate - Sidney Boutique"
          country="Australie"
          city="Sidney"
          contractType="CDI"
        />
        <Job
          className="carre green"
          title="Agent de Sécurité - Pantin"
          country="France"
          city="Pantin"
          contractType="CDI"
        />
        <Job
          className="carre yellow"
          title="Responsable d'Atelier (H/F)"
          country="France"
          city="Paris"
          contractType="CDD"
        />
        <Job
          className="carre blue"
          title="Chef de Projets"
          country="France"
          city="Paris"
          contractType="CDD"
        />
        <Job
          className="carre rose"
          title="Développeur React.js"
          country="France"
          city="Paris"
          contractType="CDI"
        />
        <Job
          className="carre red"
          title="Sales Associate Stockholm"
          country="Suède"
          city="Stockholm"
          contractType="CDI"
        />
        <Job
          className="carre green"
          title="Vendeur/se - Crans Montana"
          country="Suisse"
          city="Crans-Montana"
          contractType="CDI"
        />
        <Job
          className="carre yellow"
          title="CRM & Data Quality Analist"
          country="USA"
          city="New-York"
          contractType="CDI"
        />
        <Job
          className="carre blue"
          title="infirmier (H/F)"
          country="France"
          city="Pantin"
          contractType="CDI"
        />
      </div>
    </>
  );
};

export default Jobs;
