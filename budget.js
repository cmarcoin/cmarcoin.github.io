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
            image: '/assets/modeles/citadine.png'
          },
          {
            title: 'Monospace Ancien',
            description: 'Version familiale accessible pour petit budget.',
            mileage: '150 000 - 200 000 km',
            year: '2005 - 2010',
            price: '5000€',
            image: '/assets/modeles/monospace-ancien.png'
          },
          {
            title: "Berline d'Entrée de Gamme",
            description: 'Berline basique, fiable et économique. Parfaite pour les trajets quotidiens.',
            mileage: '120 000 - 160 000 km',
            year: '2012 - 2016',
            price: '5000€',
            image: '/assets/modeles/berline-base.png'
          },
          {
            title: 'SUV Compact Ancien',
            description: 'SUV ancien accessible avec position de conduite haute.',
            mileage: '80 000 - 120 000 km',
            year: '2010 - 2014',
            price: '5000€',
            image: '/assets/modeles/suv-ancien.png'
          }
        ],
        10000: [
          {
            title: 'Citadine récente',
            description: 'Citadine moderne, faible coût d’usage et équipement plus confortable.',
            mileage: '50 000 - 90 000 km',
            year: '2015 - 2018',
            price: '10 000€',
            image: '/assets/modeles/citadine-recente.jpg'
          },
          {
            title: 'Break compact',
            description: 'Format polyvalent pour famille ou longs trajets.',
            mileage: '90 000 - 140 000 km',
            year: '2013 - 2017',
            price: '10 000€',
            image: '/assets/modeles/break.jpg'
          },
          {
            title: 'SUV urbain',
            description: 'Position de conduite haute, gabarit compact, usage quotidien facile.',
            mileage: '100 000 - 140 000 km',
            year: '2014 - 2017',
            price: '10 000€',
            image: '/assets/modeles/suv-urbain.jpg'
          },
          {
            title: 'Berline confort',
            description: 'Bonne routière, idéale pour les trajets réguliers avec plus de confort.',
            mileage: '110 000 - 150 000 km',
            year: '2014 - 2018',
            price: '10 000€',
            image: '/assets/modeles/berline-confort.jpg'
          }
        ],
        15000: [
          {
            title: 'Compacte bien équipée',
            description: 'Bon équilibre entre modernité, équipements et coût global.',
            mileage: '40 000 - 80 000 km',
            year: '2017 - 2020',
            price: '15 000€',
            image: '/assets/modeles/compacte.jpg'
          },
          {
            title: 'SUV compact récent',
            description: 'Polyvalent, rassurant et adapté à un usage familial modéré.',
            mileage: '60 000 - 100 000 km',
            year: '2018 - 2020',
            price: '15 000€',
            image: '/assets/modeles/suv-compact.jpg'
          },
          {
            title: 'Monospace récent',
            description: 'Grand volume intérieur et vraie praticité pour les familles.',
            mileage: '70 000 - 110 000 km',
            year: '2016 - 2019',
            price: '15 000€',
            image: '/assets/modeles/monospace-recent.jpg'
          },
          {
            title: 'Break routier',
            description: 'Parfait pour avaler les kilomètres avec coffre généreux.',
            mileage: '80 000 - 120 000 km',
            year: '2017 - 2020',
            price: '15 000€',
            image: '/assets/modeles/break-routier.jpg'
          }
        ],
        20000: [
          {
            title: 'SUV familial',
            description: 'Compromis solide entre espace, image et polyvalence.',
            mileage: '40 000 - 80 000 km',
            year: '2019 - 2022',
            price: '20 000€',
            image: '/assets/modeles/suv-familial.jpg'
          },
          {
            title: 'Berline récente',
            description: 'Confort de route supérieur avec motorisations plus modernes.',
            mileage: '35 000 - 75 000 km',
            year: '2019 - 2022',
            price: '20 000€',
            image: '/assets/modeles/berline-recente.jpg'
          },
          {
            title: 'Compacte premium',
            description: 'Finition plus valorisante et équipements plus complets.',
            mileage: '45 000 - 85 000 km',
            year: '2018 - 2021',
            price: '20 000€',
            image: '/assets/modeles/compacte-premium.jpg'
          },
          {
            title: 'Break moderne',
            description: 'Solution idéale pour ceux qui veulent du coffre sans SUV.',
            mileage: '50 000 - 90 000 km',
            year: '2019 - 2022',
            price: '20 000€',
            image: '/assets/modeles/break-moderne.jpg'
          }
        ],
        25000: [],
        30000: [],
        35000: [],
        40000: [],
        45000: [],
        50000: []
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
            title: 'Citadine LOA économique',
            description: 'Petit budget mensuel pour accéder à une voiture récente.',
            mileage: 'Très faible',
            year: 'Récent',
            price: '100€/mois',
            image: '/assets/modeles/loa-citadine.jpg'
          },
          {
            title: 'Compacte LOA',
            description: 'Solution simple pour un usage quotidien sans gros achat initial.',
            mileage: 'Très faible',
            year: 'Récent',
            price: '100€/mois',
            image: '/assets/modeles/loa-compacte.jpg'
          },
          {
            title: 'SUV urbain LOA',
            description: 'Format compact avec l’avantage d’un véhicule récent.',
            mileage: 'Très faible',
            year: 'Récent',
            price: '100€/mois',
            image: '/assets/modeles/loa-suv.jpg'
          },
          {
            title: 'Hybride compacte LOA',
            description: 'Accès plus facile à une motorisation moderne.',
            mileage: 'Très faible',
            year: 'Récent',
            price: '100€/mois',
            image: '/assets/modeles/loa-hybride.jpg'
          }
        ],
        200: [
          {
            title: 'SUV compact LOA',
            description: 'Mensualité plus confortable pour viser une voiture mieux équipée.',
            mileage: 'Très faible',
            year: 'Récent',
            price: '200€/mois',
            image: '/assets/modeles/loa-suv-compact.jpg'
          },
          {
            title: 'Berline récente LOA',
            description: 'Confort supérieur avec budget mensuel maîtrisé.',
            mileage: 'Très faible',
            year: 'Récent',
            price: '200€/mois',
            image: '/assets/modeles/loa-berline.jpg'
          },
          {
            title: 'Break familial LOA',
            description: 'Bon compromis famille / budget sans achat direct.',
            mileage: 'Très faible',
            year: 'Récent',
            price: '200€/mois',
            image: '/assets/modeles/loa-break.jpg'
          },
          {
            title: 'Hybride LOA',
            description: 'Accès à une solution plus moderne avec mensualité intermédiaire.',
            mileage: 'Très faible',
            year: 'Récent',
            price: '200€/mois',
            image: '/assets/modeles/loa-hybride-2.jpg'
          }
        ],
        300: [
          {
            title: 'SUV récent LOA +',
            description: 'Mensualité plus haute pour un modèle plus récent et mieux fini.',
            mileage: 'Très faible',
            year: 'Récent',
            price: '300€/mois',
            image: '/assets/modeles/loa-suv-plus.jpg'
          },
          {
            title: 'Grande compacte LOA',
            description: 'Plus d’équipement et de choix de finitions.',
            mileage: 'Très faible',
            year: 'Récent',
            price: '300€/mois',
            image: '/assets/modeles/loa-grande-compacte.jpg'
          },
          {
            title: 'Familiale moderne LOA',
            description: 'Bonne solution pour passer sur une voiture récente sans achat total.',
            mileage: 'Très faible',
            year: 'Récent',
            price: '300€/mois',
            image: '/assets/modeles/loa-familiale.jpg'
          },
          {
            title: 'Hybride bien équipée LOA',
            description: 'Niveau de finition plus élevé avec meilleur lissage budgétaire.',
            mileage: 'Très faible',
            year: 'Récent',
            price: '300€/mois',
            image: '/assets/modeles/loa-hybride-premium.jpg'
          }
        ],
        400: [],
        500: [],
        600: [],
        700: [],
        800: [],
        900: [],
        1000: []
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
        <h3 class="text-[24px] font-bold leading-tight text-brand-text">${card.title}</h3>
        
        <p class="mt-3 text-[16px] leading-relaxed text-brand-text-secondary">
          ${card.description}
        </p>
        
        <div class="mt-4 flex flex-row items-center gap-8">
          <div class="flex items-center gap-2">
            <img src="./assets/icons/kilo.svg" alt="Icone roue" class="h-6 w-6 shrink-0">
            <div class="flex flex-col">
              <span class="text-[15px] font-bold opacity-90 text-brand-text">Kilométrage</span>
              <span style="font-size: 12px;" class="text-brand-text-secondary">${card.mileage}</span>
            </div>
          </div>
          <div class="flex items-center gap-2">
            <img src="./assets/icons/annee.svg" alt="Icone volant" class="h-6 w-6 shrink-0">
            <div class="flex flex-col">
              <span class="text-[15px] font-bold opacity-90 text-brand-text">Année</span>
              <span style="font-size: 12px;" class="text-brand-text-secondary">${card.year}</span>
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