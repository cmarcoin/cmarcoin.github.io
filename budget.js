export function initBudgetSection() {
  const offerData = {
    achat: {
      min: 5000,
      max: 50000,
      step: 5000,
      unit: '€',
      values: {
        5000: [
          {
            title: 'Citadine Compacte',
            description: 'Petite citadine économique, idéale pour la ville. Kilométrage moyen, entretien régulier.',
            mileage: '80 000 - 120 000 km',
            year: '2005 - 2010',
            price: '5000€',
            image: '/assets/modeles/5000/citadine.png'
          },
          {
            title: 'Monospace Ancien',
            description: 'Version familiale accessible pour petit budget.',
            mileage: '150 000 - 200 000 km',
            year: '2005 - 2010',
            price: '5000€',
            image: '/assets/modeles/5000/monospace-ancien.png'
          },
          {
            title: "Berline d'Entrée de Gamme",
            description: 'Berline basique, fiable et économique. Parfaite pour les trajets quotidiens.',
            mileage: '120 000 - 160 000 km',
            year: '2012 - 2016',
            price: '5000€',
            image: '/assets/modeles/5000/berline-base.png'
          },
          {
            title: 'SUV Compact Ancien',
            description: 'SUV ancien accessible avec position de conduite haute.',
            mileage: '80 000 - 120 000 km',
            year: '2010 - 2014',
            price: '5000€',
            image: '/assets/modeles/5000/suv-ancien.png'
          }
        ],
        10000: [
          {
            title: 'Citadine récente',
            description: 'Citadine moderne, faible coût d’usage et équipement plus confortable.',
            mileage: '50 000 - 90 000 km',
            year: '2015 - 2018',
            price: '10 000€',
            image: '/assets/modeles/10000/citadine-recente.png'
          },
          {
            title: 'Monospace Familial',
            description: 'Monospace familial spacieux, idéal pour les familles nombreuses. Kilométrage raisonnable.',
            mileage: '80 000 - 120 000 km',
            year: '2014 - 2018',
            price: '10 000€',
            image: '/assets/modeles/10000/monospace-familial.png'
          },
          {
            title: 'Berline Confortable',
            description: 'Berline confortable avec bon équipement. Parfaite pour les longs trajets.',
            mileage: '60 000 - 100 000 km',
            year: '2015 - 2019',
            price: '10 000€',
            image: '/assets/modeles/10000/berline-confort.png'
          },
          {
            title: 'SUV Compact Récent',
            description: 'SUV compact plus récent, bon compromis entre espace et consommation.',
            mileage: '70 000 - 110 000 km',
            year: '2016 - 2020',
            price: '10 000€',
            image: '/assets/modeles/10000/suv-compact-recent.png'
          }
        ],
        15000: [
          {
            title: 'Citadine Premium',
            description: 'Citadine haut de gamme avec équipements modernes. Faible kilométrage.',
            mileage: '30 000 - 60 000 km',
            year: '2019 - 2021',
            price: '15 000€',
            image: '/assets/modeles/15000/citadine-premium.png'
          },
          {
            title: 'Monospace Premium',
            description: 'Monospace haut de gamme, très spacieux et bien équipé. Idéal pour grandes familles.',
            mileage: '50 000 - 80 000 km',
            year: '2018 - 2021',
            price: '15 000€',
            image: '/assets/modeles/15000/monospace-premium.png'
          },
          {
            title: 'Berline Premium',
            description: 'Berline premium avec équipements haut de gamme. Confort et sécurité optimaux.',
            mileage: '40 000 - 70 000 km',
            year: '2019 - 2022',
            price: '15 000€',
             image: '/assets/modeles/15000/berline-premium.png'
          },
          {
            title: 'SUV Milieu de Gamme',
            description: 'SUV spacieux et confortable, bon équipement. Parfait pour famille et loisirs.',
            mileage: '50 000 - 85 000 km',
            year: '2018 - 2021',
            price: '15 000€',
           image: '/assets/modeles/15000/suv-gamme.png'
          }
        ],
        20000: [
          {
            title: 'Citadine Électrique',
            description: 'Citadine électrique récente, économique et écologique. Autonomie adaptée à la ville.',
            mileage: '20 000 - 50 000 km',
            year: '2020 - 2023',
            price: '20 000€',
                 image: '/assets/modeles/20000/citadine-elec.png'
          },
          {
            title: 'Monospace Luxe',
            description: 'Monospace haut de gamme avec équipements premium. Espace et confort maximaux.',
            mileage: '30 000 - 60 000 km',
            year: '2020 - 2023',
            price: '20 000€',
              image: '/assets/modeles/20000/mono-luxe.png'
          },
          {
            title: 'Berline Luxe',
            description: 'Berline de luxe avec finition premium. Confort, sécurité et technologie de pointe.',
            mileage: '25 000 - 55 000 km',
            year: '2021 - 2023',
            price: '20 000€',
                   image: '/assets/modeles/20000/berline-luxe.png'
          },
          {
            title: 'SUV Premium',
            description: 'SUV premium spacieux, tout-terrain et confortable. Équipements haut de gamme.',
            mileage: '35 000 - 65 000 km',
            year: '2020 - 2023',
            price: '20 000€',
             image: '/assets/modeles/20000/suv-premium.png'
          }
        ],
        25000: [
          {
            title: 'Citadine Électrique Premium',
            description: 'Citadine électrique haut de gamme, grande autonomie et équipements modernes.',
            mileage: '15 000 - 40 000 km',
            year: '2021 - 2024',
            price: '25 000€',
                 image: '/assets/modeles/25000/citadine-elec.png'
          },
          {
            title: 'Monospace Top Gamme',
            description: 'Monospace top gamme, très spacieux avec équipements premium. Idéal pour grandes familles.',
            mileage: '20 000 - 50 000 km',
            year: '2021 - 2024',
            price: '25 000€',
              image: '/assets/modeles/25000/mono-top.png'
          },
          {
            title: 'Berline Executive',
            description: 'Berline executive avec finition luxe. Technologie avancée et confort optimal.',
            mileage: '20 000 - 45 000 km',
            year: '2022 - 2024',
            price: '25 000€',
                   image: '/assets/modeles/25000/berline-executive.png'
          },
          {
            title: 'SUV de Luxe',
            description: 'SUV de luxe, très spacieux et puissant. Équipements premium et tout-terrain.',
            mileage: '25 000 - 55 000 km',
            year: '2021 - 2024',
            price: '25 000€',
             image: '/assets/modeles/25000/suv-luxe.png'
          }


        ],
        30000: [
{
            title: 'Compacte Électrique',
            description: 'Compacte électrique récente, bonne autonomie et équipements modernes.',
            mileage: '10 000 - 35 000 km',
            year: '2022 - 2024',
            price: '30 000€',
                 image: '/assets/modeles/30000/compact-elec.png'
          },
          {
            title: 'Monospace Top Luxe',
            description: 'Monospace top luxe, très spacieux avec équipements premium. Confort maximal.',
            mileage: '15 000 - 40 000 km',
            year: '2023 - 2024',
            price: '30 000€',
              image: '/assets/modeles/30000/mono-top.png'
          },
          {
            title: 'Berline Top Executive',
            description: 'Berline top executive, finition luxe et technologie de pointe. Confort exceptionnel.',
            mileage: '15 000 - 40 000 km',
            year: '2023 - 2024',
            price: '30 000€',
                   image: '/assets/modeles/30000/berline-executive.png'
          },
          {
            title: 'SUV Top Luxe',
            description: 'SUV top luxe, très spacieux et puissant. Équipements premium et performances.',
            mileage: '20 000 - 45 000 km',
            year: '2022 - 2024',
            price: '30 000€',
             image: '/assets/modeles/30000/suv-luxe.png'
          }
          
        ],
        35000: [
{
            title: 'Électrique Premium',
            description: 'Véhicule électrique premium, grande autonomie et équipements haut de gamme.',
            mileage: '8 000 - 30 000 km',
            year: '2023 - 2024',
            price: '35 000€',
             image: '/assets/modeles/30000/suv-luxe.png'
          },
          {
            title: 'Monospace Ultra Luxe',
            description: 'Monospace ultra luxe, espace maximal et équipements premium. Confort exceptionnel.',
            mileage: '10 000 - 35 000 km',
            year: '2023 - 2024',
            price: '35 000€',
             image: '/assets/modeles/30000/suv-luxe.png'
          },
          {
            title: 'Berline Ultra Executive',
            description: 'Berline ultra executive, finition luxe et technologie avancée. Prestige et confort.',
            mileage: '10 000 - 35 000 km',
            year: '2023 - 2024',
            price: '35 000€',
             image: '/assets/modeles/30000/suv-luxe.png'
          },
          {
            title: 'SUV Ultra Luxe',
            description: 'SUV ultra luxe, très spacieux et puissant. Équipements premium et performances exceptionnelles.',
            mileage: '15 000 - 40 000 km',
            year: '2023 - 2024',
            price: '35 000€',
             image: '/assets/modeles/30000/suv-luxe.png'
          }

        ],
        40000: [{
            title: 'Électrique Top Gamme',
            description: 'Véhicule électrique top gamme, autonomie exceptionnelle et équipements premium.',
            mileage: '5 000 - 25 000 km',
            year: '2023 - 2024',
            price: '40 000€',
             image: '/assets/modeles/30000/suv-luxe.png'
          },
          {
            title: 'Monospace Exclusive',
            description: 'Monospace exclusive, espace maximal et équipements ultra premium. Confort exceptionnel.',
            mileage: '8 000 - 30 000 km',
            year: '2023 - 2024',
            price: '40 000€',
             image: '/assets/modeles/30000/suv-luxe.png'
          },
          {
            title: 'Berline Exclusive',
            description: 'Berline exclusive, finition luxe et technologie de pointe. Prestige et élégance.',
            mileage: '8 000 - 30 000 km',
            year: '2023 - 2024',
            price: '40 000€',
             image: '/assets/modeles/30000/suv-luxe.png'
          },
          {
            title: 'SUV Exclusive',
            description: 'SUV exclusive, très spacieux et puissant. Équipements ultra premium et performances.',
            mileage: '12 000 - 35 000 km',
            year: '2023 - 2024',
            price: '40 000€',
             image: '/assets/modeles/30000/suv-luxe.png'
          }],
        45000: [{
            title: 'a faire',
            description: 'lorem',
            mileage: '20 000 - 45 000 km',
            year: '2022 - 2024',
            price: '30 000€',
             image: '/assets/modeles/30000/suv-luxe.png'
          },
          {
            title: 'a faire',
            description: 'lorem',
            mileage: '20 000 - 45 000 km',
            year: '2022 - 2024',
            price: '30 000€',
             image: '/assets/modeles/30000/suv-luxe.png'
          },
          {
            title: 'a faire',
            description: 'lorem',
            mileage: '20 000 - 45 000 km',
            year: '2022 - 2024',
            price: '30 000€',
             image: '/assets/modeles/30000/suv-luxe.png'
          },
          {
            title: 'a faire',
            description: 'lorem',
            mileage: '20 000 - 45 000 km',
            year: '2022 - 2024',
            price: '30 000€',
             image: '/assets/modeles/30000/suv-luxe.png'
          }],
        50000: [{
            title: 'a faire',
            description: 'lorem',
            mileage: '20 000 - 45 000 km',
            year: '2022 - 2024',
            price: '30 000€',
             image: '/assets/modeles/30000/suv-luxe.png'
          },
          {
            title: 'a faire',
            description: 'lorem',
            mileage: '20 000 - 45 000 km',
            year: '2022 - 2024',
            price: '30 000€',
             image: '/assets/modeles/30000/suv-luxe.png'
          },
          {
            title: 'a faire',
            description: 'lorem',
            mileage: '20 000 - 45 000 km',
            year: '2022 - 2024',
            price: '30 000€',
             image: '/assets/modeles/30000/suv-luxe.png'
          },
          {
            title: 'a faire',
            description: 'lorem',
            mileage: '20 000 - 45 000 km',
            year: '2022 - 2024',
            price: '30 000€',
             image: '/assets/modeles/30000/suv-luxe.png'
          }]
      }
    },

    leasing: {
      min: 100,
      max: 1000,
      step: 100,
      unit: '€/mois',
      values: {
        100: [
          {
            title: 'a faire',
            description: 'lorem',
            mileage: '20 000 - 45 000 km',
            year: '2022 - 2024',
            price: '30 000€',
             image: '/assets/modeles/30000/suv-luxe.png'
          },
          {
            title: 'a faire',
            description: 'lorem',
            mileage: '20 000 - 45 000 km',
            year: '2022 - 2024',
            price: '30 000€',
             image: '/assets/modeles/30000/suv-luxe.png'
          },
          {
            title: 'a faire',
            description: 'lorem',
            mileage: '20 000 - 45 000 km',
            year: '2022 - 2024',
            price: '30 000€',
             image: '/assets/modeles/30000/suv-luxe.png'
          },
          {
            title: 'a faire',
            description: 'lorem',
            mileage: '20 000 - 45 000 km',
            year: '2022 - 2024',
            price: '30 000€',
             image: '/assets/modeles/30000/suv-luxe.png'
          }
        ],
        200: [
          {
            title: 'a faire',
            description: 'lorem',
            mileage: '20 000 - 45 000 km',
            year: '2022 - 2024',
            price: '30 000€',
             image: '/assets/modeles/30000/suv-luxe.png'
          },
          {
            title: 'a faire',
            description: 'lorem',
            mileage: '20 000 - 45 000 km',
            year: '2022 - 2024',
            price: '30 000€',
             image: '/assets/modeles/30000/suv-luxe.png'
          },
          {
            title: 'a faire',
            description: 'lorem',
            mileage: '20 000 - 45 000 km',
            year: '2022 - 2024',
            price: '30 000€',
             image: '/assets/modeles/30000/suv-luxe.png'
          },
          {
            title: 'a faire',
            description: 'lorem',
            mileage: '20 000 - 45 000 km',
            year: '2022 - 2024',
            price: '30 000€',
             image: '/assets/modeles/30000/suv-luxe.png'
          }
        ],
        300: [
          {
            title: 'a faire',
            description: 'lorem',
            mileage: '20 000 - 45 000 km',
            year: '2022 - 2024',
            price: '30 000€',
             image: '/assets/modeles/30000/suv-luxe.png'
          },
          {
            title: 'a faire',
            description: 'lorem',
            mileage: '20 000 - 45 000 km',
            year: '2022 - 2024',
            price: '30 000€',
             image: '/assets/modeles/30000/suv-luxe.png'
          },
          {
            title: 'a faire',
            description: 'lorem',
            mileage: '20 000 - 45 000 km',
            year: '2022 - 2024',
            price: '30 000€',
             image: '/assets/modeles/30000/suv-luxe.png'
          },
          {
            title: 'a faire',
            description: 'lorem',
            mileage: '20 000 - 45 000 km',
            year: '2022 - 2024',
            price: '30 000€',
             image: '/assets/modeles/30000/suv-luxe.png'
          }
        ],
        400: [{
            title: 'a faire',
            description: 'lorem',
            mileage: '20 000 - 45 000 km',
            year: '2022 - 2024',
            price: '30 000€',
             image: '/assets/modeles/30000/suv-luxe.png'
          },
          {
            title: 'a faire',
            description: 'lorem',
            mileage: '20 000 - 45 000 km',
            year: '2022 - 2024',
            price: '30 000€',
             image: '/assets/modeles/30000/suv-luxe.png'
          },
          {
            title: 'a faire',
            description: 'lorem',
            mileage: '20 000 - 45 000 km',
            year: '2022 - 2024',
            price: '30 000€',
             image: '/assets/modeles/30000/suv-luxe.png'
          },
          {
            title: 'a faire',
            description: 'lorem',
            mileage: '20 000 - 45 000 km',
            year: '2022 - 2024',
            price: '30 000€',
             image: '/assets/modeles/30000/suv-luxe.png'
          }],
        500: [{
            title: 'a faire',
            description: 'lorem',
            mileage: '20 000 - 45 000 km',
            year: '2022 - 2024',
            price: '30 000€',
             image: '/assets/modeles/30000/suv-luxe.png'
          },
          {
            title: 'a faire',
            description: 'lorem',
            mileage: '20 000 - 45 000 km',
            year: '2022 - 2024',
            price: '30 000€',
             image: '/assets/modeles/30000/suv-luxe.png'
          },
          {
            title: 'a faire',
            description: 'lorem',
            mileage: '20 000 - 45 000 km',
            year: '2022 - 2024',
            price: '30 000€',
             image: '/assets/modeles/30000/suv-luxe.png'
          },
          {
            title: 'a faire',
            description: 'lorem',
            mileage: '20 000 - 45 000 km',
            year: '2022 - 2024',
            price: '30 000€',
             image: '/assets/modeles/30000/suv-luxe.png'
          }],
        600: [{
            title: 'a faire',
            description: 'lorem',
            mileage: '20 000 - 45 000 km',
            year: '2022 - 2024',
            price: '30 000€',
             image: '/assets/modeles/30000/suv-luxe.png'
          },
          {
            title: 'a faire',
            description: 'lorem',
            mileage: '20 000 - 45 000 km',
            year: '2022 - 2024',
            price: '30 000€',
             image: '/assets/modeles/30000/suv-luxe.png'
          },
          {
            title: 'a faire',
            description: 'lorem',
            mileage: '20 000 - 45 000 km',
            year: '2022 - 2024',
            price: '30 000€',
             image: '/assets/modeles/30000/suv-luxe.png'
          },
          {
            title: 'a faire',
            description: 'lorem',
            mileage: '20 000 - 45 000 km',
            year: '2022 - 2024',
            price: '30 000€',
             image: '/assets/modeles/30000/suv-luxe.png'
          }],
        700: [{
            title: 'a faire',
            description: 'lorem',
            mileage: '20 000 - 45 000 km',
            year: '2022 - 2024',
            price: '30 000€',
             image: '/assets/modeles/30000/suv-luxe.png'
          },
          {
            title: 'a faire',
            description: 'lorem',
            mileage: '20 000 - 45 000 km',
            year: '2022 - 2024',
            price: '30 000€',
             image: '/assets/modeles/30000/suv-luxe.png'
          },
          {
            title: 'a faire',
            description: 'lorem',
            mileage: '20 000 - 45 000 km',
            year: '2022 - 2024',
            price: '30 000€',
             image: '/assets/modeles/30000/suv-luxe.png'
          },
          {
            title: 'a faire',
            description: 'lorem',
            mileage: '20 000 - 45 000 km',
            year: '2022 - 2024',
            price: '30 000€',
             image: '/assets/modeles/30000/suv-luxe.png'
          }],
        800: [{
            title: 'a faire',
            description: 'lorem',
            mileage: '20 000 - 45 000 km',
            year: '2022 - 2024',
            price: '30 000€',
             image: '/assets/modeles/30000/suv-luxe.png'
          },
          {
            title: 'a faire',
            description: 'lorem',
            mileage: '20 000 - 45 000 km',
            year: '2022 - 2024',
            price: '30 000€',
             image: '/assets/modeles/30000/suv-luxe.png'
          },
          {
            title: 'a faire',
            description: 'lorem',
            mileage: '20 000 - 45 000 km',
            year: '2022 - 2024',
            price: '30 000€',
             image: '/assets/modeles/30000/suv-luxe.png'
          },
          {
            title: 'a faire',
            description: 'lorem',
            mileage: '20 000 - 45 000 km',
            year: '2022 - 2024',
            price: '30 000€',
             image: '/assets/modeles/30000/suv-luxe.png'
          }],
        900: [{
            title: 'a faire',
            description: 'lorem',
            mileage: '20 000 - 45 000 km',
            year: '2022 - 2024',
            price: '30 000€',
             image: '/assets/modeles/30000/suv-luxe.png'
          },
          {
            title: 'a faire',
            description: 'lorem',
            mileage: '20 000 - 45 000 km',
            year: '2022 - 2024',
            price: '30 000€',
             image: '/assets/modeles/30000/suv-luxe.png'
          },
          {
            title: 'a faire',
            description: 'lorem',
            mileage: '20 000 - 45 000 km',
            year: '2022 - 2024',
            price: '30 000€',
             image: '/assets/modeles/30000/suv-luxe.png'
          },
          {
            title: 'a faire',
            description: 'lorem',
            mileage: '20 000 - 45 000 km',
            year: '2022 - 2024',
            price: '30 000€',
             image: '/assets/modeles/30000/suv-luxe.png'
          }],
        1000: [{
            title: 'a faire',
            description: 'lorem',
            mileage: '20 000 - 45 000 km',
            year: '2022 - 2024',
            price: '30 000€',
             image: '/assets/modeles/30000/suv-luxe.png'
          },
          {
            title: 'a faire',
            description: 'lorem',
            mileage: '20 000 - 45 000 km',
            year: '2022 - 2024',
            price: '30 000€',
             image: '/assets/modeles/30000/suv-luxe.png'
          },
          {
            title: 'a faire',
            description: 'lorem',
            mileage: '20 000 - 45 000 km',
            year: '2022 - 2024',
            price: '30 000€',
             image: '/assets/modeles/30000/suv-luxe.png'
          },
          {
            title: 'a faire',
            description: 'lorem',
            mileage: '20 000 - 45 000 km',
            year: '2022 - 2024',
            price: '30 000€',
             image: '/assets/modeles/30000/suv-luxe.png'
          }]
      }
    }
  };

  const budgetRange = document.getElementById('budgetRange');
  const budgetCardsContainer = document.getElementById('budgetCards');
  const modeToggle = document.getElementById('modeToggle');
  const modeKnob = document.getElementById('modeKnob');
  const purchaseLabel = document.getElementById('purchaseLabel');
  const leasingLabel = document.getElementById('leasingLabel');

  const rangeMinLabel = document.getElementById('rangeMinLabel');
  const rangeMaxLabel = document.getElementById('rangeMaxLabel');
  const rangeCurrentLabel = document.getElementById('rangeCurrentLabel');

  if (
    !budgetRange ||
    !budgetCardsContainer ||
    !modeToggle ||
    !modeKnob ||
    !purchaseLabel ||
    !leasingLabel
  ) {
    console.warn('Elements manquants pour le système budget/switch');
    return;
  }

  let isLeasing = false;

  const formatValue = (value, unit) => `${value}${unit}`;

const cardTemplate = (card) => `
    <article class="flex flex-col overflow-hidden rounded-brand border border-brand-border bg-white shadow-brand h-full text-left">
      <div class="flex h-52 w-full items-center justify-center bg-brand-beige p-6 shrink-0">
        <img
          src="${card.image}"
          alt="${card.title}"
          class="h-full w-auto object-contain"
          onerror="this.style.display='none'; this.parentElement.innerHTML='<div class=&quot;flex h-full items-center justify-center text-brand-text-secondary&quot;>Image manquante</div>';"
        />
      </div>

      <div class="flex flex-col flex-grow p-4 w-full">
        <h3 class="text-[20px] font-bold leading-tight text-brand-text">${card.title}</h3>
        

<p class="mt-2 text-[16px] text-brand-text-secondary fixed-description">
  ${card.description}
</p>
        
        <div class="mt-1 flex flex-row items-center gap-1">
          <div class="flex items-center gap-2">
            <img src="./assets/icons/kilo.svg" alt="Icone roue" class="h-6 w-6 shrink-0">
            <div class="flex flex-col">
              <span class="text-[15px] font-bold opacity-90 text-brand-text">Kilométrage</span>
              <span style="font-size: 11px;" class="text-brand-text-secondary">${card.mileage}</span>
            </div>
          </div>
          <div class="flex items-center gap-2">
            <img src="./assets/icons/annee.svg" alt="Icone volant" class="h-6 w-6 shrink-0">
            <div class="flex flex-col">
              <span class="text-[15px] font-bold opacity-90 text-brand-text">Année</span>
              <span style="font-size: 11px;" class="text-brand-text-secondary">${card.year}</span>
            </div>
          </div>
        </div>

        <p class="mt-auto pt-6 text-[24px] text-brand-text">
          Prix : <span class="font-bold">${card.price}</span>
        </p>
      </div>
    </article>
  `;

  const getCurrentMode = () => (isLeasing ? 'leasing' : 'achat');
  const getCurrentConfig = () => offerData[getCurrentMode()];
  const getCurrentValue = () => Number(budgetRange.value);

  const updateBudgetTrack = () => {
    const min = Number(budgetRange.min);
    const max = Number(budgetRange.max);
    const value = Number(budgetRange.value);
    const progress = ((value - min) / (max - min)) * 100;
    budgetRange.style.setProperty('--progress', `${progress}%`);
  };

  const updateRangeLabels = () => {
    const config = getCurrentConfig();
    const value = getCurrentValue();

    if (rangeMinLabel) rangeMinLabel.textContent = formatValue(config.min, config.unit);
    if (rangeMaxLabel) rangeMaxLabel.textContent = formatValue(config.max, config.unit);
    if (rangeCurrentLabel) rangeCurrentLabel.textContent = formatValue(value, config.unit);
  };

  const renderBudgetCards = () => {
    const config = getCurrentConfig();
    const value = getCurrentValue();
    const cards = config.values[value] || [];

    updateRangeLabels();

    if (!cards.length) {
      budgetCardsContainer.innerHTML = `
        <div class="col-span-full rounded-brand border border-brand-border bg-white p-10 text-center shadow-brand">
          <p class="text-2xl font-bold text-brand-primary">Aucune offre disponible pour ce palier</p>
          <p class="mt-3 text-brand-text-secondary">Ajoute les modèles correspondant à cette tranche.</p>
        </div>
      `;
      return;
    }

    budgetCardsContainer.innerHTML = cards.map(cardTemplate).join('');
  };

  const applyModeConfig = () => {
    const config = getCurrentConfig();

    budgetRange.min = String(config.min);
    budgetRange.max = String(config.max);
    budgetRange.step = String(config.step);
    budgetRange.value = String(config.min);

    updateBudgetTrack();
    updateRangeLabels();
    renderBudgetCards();
  };

  const updateMode = () => {
    modeToggle.setAttribute('aria-pressed', String(isLeasing));
    modeKnob.style.transform = isLeasing ? 'translateX(120px)' : 'translateX(0)';
    purchaseLabel.classList.toggle('opacity-50', isLeasing);
    leasingLabel.classList.toggle('opacity-50', !isLeasing);

    applyModeConfig();
  };

  budgetRange.addEventListener('input', () => {
    updateBudgetTrack();
    renderBudgetCards();
  });

  modeToggle.addEventListener('click', () => {
    isLeasing = !isLeasing;
    updateMode();
  });

  purchaseLabel.addEventListener('click', () => {
    isLeasing = false;
    updateMode();
  });

  leasingLabel.addEventListener('click', () => {
    isLeasing = true;
    updateMode();
  });

  updateMode();
}