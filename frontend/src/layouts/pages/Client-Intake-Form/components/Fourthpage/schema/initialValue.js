import moment from "moment";
const initialValues = {
  page8: [
    {
      formCreatedDate: moment().format("DD-MM-YYYY"),
      meditations: "",
      dose: "",
      noradrenergic: [
        {
          name: "remeron",
          noradrenergiccheck: false,
        },
        {
          name: "norset",
          noradrenergiccheck: false,
        },
        {
          name: "zispin",
          noradrenergiccheck: false,
        },
        {
          name: "remergil",
          noradrenergiccheck: false,
        },
        {
          name: "avanza",
          noradrenergiccheck: false,
        },
        {
          name: "axit",
          noradrenergiccheck: false,
        },
      ],
      tricyclic: [
        {
          name: "Elavil®",
          tricycliccheck: false,
        },
        {
          name: "Prothiaden®",
          tricycliccheck: false,
        },
        {
          name: "Endep®",
          tricycliccheck: false,
        },
        {
          name: "Adapin®",
          tricycliccheck: false,
        },
        {
          name: "Tryptanol®",
          tricycliccheck: false,
        },
        {
          name: "Sinequan®",
          tricycliccheck: false,
        },
        {
          name: "Trepiline®",
          tricycliccheck: false,
        },
        {
          name: "Tofranil®",
          tricycliccheck: false,
        },
        {
          name: "Asendin®",
          tricycliccheck: false,
        },
        {
          name: "Janamine®",
          tricycliccheck: false,
        },
        {
          name: "Asendis®",
          tricycliccheck: false,
        },
        {
          name: "Gamanil®",
          tricycliccheck: false,
        },
        {
          name: "Defanyl®",
          tricycliccheck: false,
        },
        {
          name: "Aventyl®",
          tricycliccheck: false,
        },
        {
          name: "Demolox®",
          tricycliccheck: false,
        },
        {
          name: "Pamelor®",
          tricycliccheck: false,
        },
        {
          name: "Moxadil®",
          tricycliccheck: false,
        },
        {
          name: "Opipramol®",
          tricycliccheck: false,
        },
        {
          name: "Anafranil®",
          tricycliccheck: false,
        },
        {
          name: "Vivactil®",
          tricycliccheck: false,
        },
        {
          name: "Norpramin®",
          tricycliccheck: false,
        },
        {
          name: "Rhotrimine®",
          tricycliccheck: false,
        },
        {
          name: "Pertofrane®",
          tricycliccheck: false,
        },
        {
          name: "Surmontil®",
          tricycliccheck: false,
        },
        {
          name: "Thadentm",
          tricycliccheck: false,
        },
        {
          name: "Norpramin®",
          tricycliccheck: false,
        },
      ],
      serotonin: [
        {
          name: "Paxil®",
          serotonincheck: false,
        },
        {
          name: "Seromex®",
          serotonincheck: false,
        },
        {
          name: "Zoloft®",
          serotonincheck: false,
        },
        {
          name: "Seronil®",
          serotonincheck: false,
        },
        {
          name: "Prozac®",
          serotonincheck: false,
        },
        {
          name: "Sarafem®",
          serotonincheck: false,
        },
        {
          name: "Celexa®",
          serotonincheck: false,
        },
        {
          name: "Fluctin®",
          serotonincheck: false,
        },
        {
          name: "Lexapro®",
          serotonincheck: false,
        },
        {
          name: "Faverin®",
          serotonincheck: false,
        },
        {
          name: "Esertia®",
          serotonincheck: false,
        },
        {
          name: "Seroxat®",
          serotonincheck: false,
        },
        {
          name: "Luvox®",
          serotonincheck: false,
        },
        {
          name: "Aropax®",
          serotonincheck: false,
        },
        {
          name: "Cipramil®",
          serotonincheck: false,
        },
        {
          name: "Deroxat®",
          serotonincheck: false,
        },
        {
          name: "Emocal®",
          serotonincheck: false,
        },
        {
          name: "Rexetin®",
          serotonincheck: false,
        },
        {
          name: "Seropram®",
          serotonincheck: false,
        },
        {
          name: "Paroxat®",
          serotonincheck: false,
        },
        {
          name: "Cipralex®",
          serotonincheck: false,
        },
        {
          name: "Lustral®",
          serotonincheck: false,
        },
        {
          name: "Fontex®",
          serotonincheck: false,
        },
        {
          name: "Serlain®",
          serotonincheck: false,
        },
        {
          name: "Priligy®",
          serotonincheck: false,
        },
      ],
      snris: [
        {
          name: "Effexor®",
          snrischeck: false,
        },
        {
          name: "Pristiq®",
          snrischeck: false,
        },
        {
          name: "Meridia®",
          snrischeck: false,
        },
        {
          name: "Serzone®",
          snrischeck: false,
        },

        {
          name: "Dalcipran®",
          snrischeck: false,
        },
        {
          name: "Cymbalta®",
          snrischeck: false,
        },
      ],
      ssres: [
        {
          name: "Stablon®",
          ssrescheck: false,
        },
        {
          name: "Coaxil®",
          ssrescheck: false,
        },
        {
          name: "Tatinol®",
          ssrescheck: false,
        },
      ],
      maois: [
        {
          name: "Marplan®",
          maoischeck: false,
        },
        {
          name: "Marsilid®",
          maoischeck: false,
        },
        {
          name: "Aurorix®",
          maoischeck: false,
        },
        {
          name: "Iprozid®",
          maoischeck: false,
        },
        {
          name: "Manerix®",
          maoischeck: false,
        },
        {
          name: "Ipronid®",
          maoischeck: false,
        },
        {
          name: "Moclodura®",
          maoischeck: false,
        },
        {
          name: "Rivivol®",
          maoischeck: false,
        },
        {
          name: "Nardil®",
          maoischeck: false,
        },
        {
          name: "Propilniazida®",
          maoischeck: false,
        },
        {
          name: "Adeline®",
          maoischeck: false,
        },
        {
          name: "Zyvox®",
          maoischeck: false,
        },
        {
          name: "Eldepryl®",
          maoischeck: false,
        },
        {
          name: "Zyvoxid®",
          maoischeck: false,
        },
        {
          name: "Azilect®",
          maoischeck: false,
        },
      ],
      dopamine: [
        {
          name: "Mirapex®",
          dopaminecheck: false,
        },
        {
          name: "Sifrol®",
          dopaminecheck: false,
        },
        {
          name: "Requip®",
          dopaminecheck: false,
        },
      ],
      ndris: [
        {
          name: "Wellbutrin XL®",
          ndrischeck: false,
        },
      ],
      antipsychotics: [
        {
          name: "Thorazine®",
          antipsychoticscheck: false,
        },
        {
          name: "Acuphase®",
          antipsychoticscheck: false,
        },
        {
          name: "Prolixin®",
          antipsychoticscheck: false,
        },
        {
          name: "Haldol®",
          antipsychoticscheck: false,
        },
        {
          name: "Trilafon®",
          antipsychoticscheck: false,
        },
        {
          name: "Orap®",
          antipsychoticscheck: false,
        },
        {
          name: "Compazine®",
          antipsychoticscheck: false,
        },
        {
          name: "Clozaril®",
          antipsychoticscheck: false,
        },
        {
          name: "Mellaril®",
          antipsychoticscheck: false,
        },
        {
          name: "Zyprexa®",
          antipsychoticscheck: false,
        },
        {
          name: "Stelazine®",
          antipsychoticscheck: false,
        },
        {
          name: "Zydis®",
          antipsychoticscheck: false,
        },
        {
          name: "Vesprin®",
          antipsychoticscheck: false,
        },
        {
          name: "Seroquel XR®",
          antipsychoticscheck: false,
        },
        {
          name: "Nozinan®",
          antipsychoticscheck: false,
        },
        {
          name: "Geodon®",
          antipsychoticscheck: false,
        },
        {
          name: "Depixol®",
          antipsychoticscheck: false,
        },
        {
          name: "Solian®",
          antipsychoticscheck: false,
        },
        {
          name: "Navane®",
          antipsychoticscheck: false,
        },
        {
          name: "Invega®",
          antipsychoticscheck: false,
        },
        {
          name: "Fluanxol®",
          antipsychoticscheck: false,
        },
        {
          name: "Abilify®",
          antipsychoticscheck: false,
        },
        {
          name: "Clopixol®",
          antipsychoticscheck: false,
        },
      ],
      gaba: [
        {
          name: "Romazicon®",
          gabacheck: false,
        },
      ],
      benzodiazepines: [
        {
          name: "Xanax®",
          benzodiazepinescheck: false,
        },
        {
          name: "Dalmane®",
          benzodiazepinescheck: false,
        },
        {
          name: "Lexotanil®",
          benzodiazepinescheck: false,
        },
        {
          name: "Ativan®",
          benzodiazepinescheck: false,
        },
        {
          name: "Lexotan®",
          benzodiazepinescheck: false,
        },
        {
          name: "Loramet®",
          benzodiazepinescheck: false,
        },
        {
          name: "Librium®",
          benzodiazepinescheck: false,
        },
        {
          name: "Sedoxil®",
          benzodiazepinescheck: false,
        },
        {
          name: "Klonopin®",
          benzodiazepinescheck: false,
        },
        {
          name: "Dormicum®",
          benzodiazepinescheck: false,
        },
        {
          name: "Valium®",
          benzodiazepinescheck: false,
        },
        {
          name: "Serax®",
          benzodiazepinescheck: false,
        },
        {
          name: "Prosom®",
          benzodiazepinescheck: false,
        },
        {
          name: "Restoril®",
          benzodiazepinescheck: false,
        },
        {
          name: "Rohypnol®",
          benzodiazepinescheck: false,
        },
        {
          name: "Halcion®",
          benzodiazepinescheck: false,
        },
        {
          name: "Magadon®",
          benzodiazepinescheck: false,
        },
      ],
      //   last
      nonbenzodiazepines: [
        {
          name: "Ambien CR®",
          nonbenzodiazepinescheck: false,
        },
        {
          name: "Sonata®",
          nonbenzodiazepinescheck: false,
        },
        {
          name: "Lunesta®",
          nonbenzodiazepinescheck: false,
        },
        {
          name: "Imovane®",
          nonbenzodiazepinescheck: false,
        },
      ],
      acetylcholine: [
        {
          name: "Urecholine®",
          acetylcholinecheck: false,
        },
        {
          name: "Isopto®",
          acetylcholinecheck: false,
        },
        {
          name: "Evoxac®",
          acetylcholinecheck: false,
        },
        {
          name: "Nicotone",
          acetylcholinecheck: false,
        },
        {
          name: "Salagen®",
          acetylcholinecheck: false,
        },
      ],
      antimuscarinic: [
        {
          name: "AtroPen®",
          antimuscariniccheck: false,
        },
        {
          name: "Atrovent®",
          antimuscariniccheck: false,
        },
        {
          name: "Scopace®",
          antimuscariniccheck: false,
        },
        {
          name: "Spiriva®",
          antimuscariniccheck: false,
        },
      ],
      ganglionic: [
        {
          name: "Inversine®",
          ganglioniccheck: false,
        },
        {
          name: "Hexamethonium",
          ganglioniccheck: false,
        },
        {
          name: "Nicotine (high doses)",
          ganglioniccheck: false,
        },
        {
          name: "Arfonad®",
          ganglioniccheck: false,
        },
      ],
      neuromuscular: [
        {
          name: "Tracrium®",
          neuromuscularcheck: false,
        },
        {
          name: "Zemuron®",
          neuromuscularcheck: false,
        },
        {
          name: "Nimbex®",
          neuromuscularcheck: false,
        },
        {
          name: "Anectine®",
          neuromuscularcheck: false,
        },
        {
          name: "Nuromax®",
          neuromuscularcheck: false,
        },
        {
          name: "Tubocurarine®",
          neuromuscularcheck: false,
        },
        {
          name: "Metubine®",
          neuromuscularcheck: false,
        },
        {
          name: "Norcuron®",
          neuromuscularcheck: false,
        },
        {
          name: "Mivacron®",
          neuromuscularcheck: false,
        },
        {
          name: " Hemicholinium-3®",
          neuromuscularcheck: false,
        },
        {
          name: "Pavulon®",
          neuromuscularcheck: false,
        },
      ],
      acetylcholinesterase: [
        {
          name: "Protopam®",
          acetylcholinesterasecheck: false,
        },
      ],
      reversible: [
        {
          name: "Aricept®",
          reversiblecheck: false,
        },
        {
          name: "Enlon®",
          reversiblecheck: false,
        },
        {
          name: "Razadyne®",
          reversiblecheck: false,
        },
        {
          name: "Prostigmin®",
          reversiblecheck: false,
        },
        {
          name: "Exelon®",
          reversiblecheck: false,
        },
        {
          name: "Antilirium®",
          reversiblecheck: false,
        },
        {
          name: "Cognex®",
          reversiblecheck: false,
        },
        {
          name: "Mestinon®",
          reversiblecheck: false,
        },
        {
          name: "THC",
          reversiblecheck: false,
        },
        {
          name: "Carbamate insecticides",
          reversiblecheck: false,
        },
      ],
      irreversible: [
        {
          name: "Echothiophate",
          irreversiblecheck: false,
        },
        {
          name: "Isoflurophate",
          irreversiblecheck: false,
        },
        {
          name: "Organophosphate insecticides",
          irreversiblecheck: false,
        },
        {
          name: "Organophosphate-containing nerve agents",
          irreversiblecheck: false,
        },
      ],
    },
  ],
};

export default initialValues;
