// =============================================================================
// THE ASCEND — French Translations
// =============================================================================
//
// This file contains ALL French UI text for the website.
// Used for market: FR (France).
//
// TODO: Update any text that changes for your business.
// TODO: If adding a new section/page, add its keys here AND in es.ts.
// TODO: Have a professional French speaker review the translations.
//
// Key structure mirrors es.ts exactly.
// =============================================================================

import { SITE } from '../data/site';

export const fr = {
  // ---------------------------------------------------------------------------
  // SEO
  // ---------------------------------------------------------------------------
  seo: {
    home: {
      title: 'The Ascend — Transformation Numérique pour votre Entreprise',
      metaDesc: 'Design web premium, SEO local, chatbots IA et automatisations pour restaurants, cliniques, avocats et petites entreprises en France, Espagne et Pérou.'
    }
  },

  // ---------------------------------------------------------------------------
  // NAVIGATION
  // ---------------------------------------------------------------------------
  nav: {
    services:   'Services',
    portfolio:  'Portfolio',
    process:    'Notre méthode',
    pricing:    'Tarifs',
    about:      'À propos',
    founder:    'Fondateur',
    contact:    'Contact',
    ctaPrimary: 'Planifier un appel',
    menuOpen:   'Ouvrir le menu',
    menuClose:  'Fermer le menu',
    skipToContent: 'Aller au contenu principal',
  },

  // ---------------------------------------------------------------------------
  // HERO (Homepage)
  // ---------------------------------------------------------------------------
  hero: {
    badge:     'Transformation numérique pour les vraies entreprises',
    title:     'Votre business mérite\nune présence digitale\nqui impressionne.',
    subtitle:  'Nous concevons des sites web, automatisons vos processus et implémentons l\'IA pour que restaurants, cliniques, avocats et petites entreprises de France, Espagne et Pérou rivalisent avec les grands.',
    ctaPrimary:   'Planifier un appel gratuit',
    ctaSecondary: 'Voir notre travail',
    proof: {
      projects:      '+40',
      projectsLabel: 'Projets livrés',
      countries:     '3',
      countriesLabel: 'Pays',
      satisfaction:  '98%',
      satisfactionLabel: 'Satisfaction',
    },
  },

  // ---------------------------------------------------------------------------
  // COMMON / SHARED
  // ---------------------------------------------------------------------------
  common: {
    learnMore:          'En savoir plus',
    viewAll:            'Voir tout',
    seeProject:         'Voir l\'étude de cas',
    requestQuote:       'Demander un devis',
    scheduleCall:       'Planifier un appel',
    freeQuote:          'Devis gratuit',
    noCommitment:       'Sans engagement',
    send:               'Envoyer la demande',
    sending:            'Envoi en cours...',
    readMore:           'Lire la suite',
    viewPortfolio:      'Voir tous les projets',
    backToHome:         'Retour à l\'accueil',
    featuredLabel:      'À la une',
    allRightsReserved:  'Tous droits réservés.',
    by:                 'par',
    duration:           'Durée',
    idealFor:           'Idéal pour',
    years:              'ans',
    months:             'mois',
    weeks:              'semaines',
    days:               'jours',
    resultsLabel:       'Résultats',
    processLabel:       'Méthode',
    sectionLabel: {
      portfolio:    'Portfolio',
      services:     'Services',
      process:      'Notre méthode',
      testimonials: 'Témoignages',
      pricing:      'Tarifs',
      faq:          'Questions fréquentes',
      about:        'À propos de nous',
      markets:      'Nos marchés',
      contact:      'Contact',
    },
  },

  // ---------------------------------------------------------------------------
  // SERVICES (Section on homepage + full Services page)
  // ---------------------------------------------------------------------------
  services: {
    sectionLabel: 'Services',
    title:        'Tout ce dont votre entreprise a besoin pour grandir en ligne.',
    subtitle:     'Du design web à l\'automatisation par IA. Chaque service est conçu pour les petites et moyennes entreprises.',
    ctaViewAll:   'Voir tous nos services',

    categories: {
      web:       'Développement Web',
      marketing: 'Marketing Digital',
      ia:        'Intelligence Artificielle',
      branding:  'Identité Visuelle',
    },

    // TODO: Update French service descriptions as needed
    items: {
      'desarrollo-web': {
        name:        'Développement Web',
        tagline:     'Votre présence digitale, impeccable.',
        description: 'Nous concevons et développons des sites web sur mesure qui transmettent le professionnalisme dès la première seconde. Rapides, sécurisés et optimisés pour convertir les visiteurs en clients.',
        features:    ['Design personnalisé et unique', 'Optimisé pour mobile', 'Vitesse de chargement supérieure', 'Panneau d\'administration simple', 'Intégration Google Analytics', 'Formulaires de contact fonctionnels'],
        idealFor:    ['Restaurants', 'Cliniques', 'Avocats', 'Architectes', 'Hôtels'],
        duration:    '2–3 semaines',
      },
      'shopify': {
        name:        'Boutiques Shopify',
        tagline:     'Vendez en ligne sans complications.',
        description: 'Nous créons votre boutique en ligne sur Shopify avec un design premium et une configuration professionnelle pour que vous puissiez vendre dès le premier jour.',
        features:    ['Design de boutique personnalisé', 'Configuration produits et variantes', 'Passerelles de paiement intégrées', 'Gestion des stocks', 'Emails automatiques de commandes', 'Optimisation pour la conversion'],
        idealFor:    ['Commerces locaux', 'Coiffeurs', 'Boutiques', 'Artisans'],
        duration:    '2–4 semaines',
      },
      'branding': {
        name:        'Branding Express',
        tagline:     'Une identité qui inspire confiance.',
        description: 'Nous créons l\'identité visuelle de votre entreprise : logo, palette de couleurs, typographie et guide de marque. Tout ce dont vous avez besoin pour être reconnu et mémorable.',
        features:    ['Logo professionnel dans tous les formats', 'Palette de couleurs corporate', 'Typographie sélectionnée', 'Guide de marque basique', 'Carte de visite digitale', 'Application sur les réseaux sociaux'],
        idealFor:    ['Nouvelles entreprises', 'Rebranding', 'Coiffeurs', 'Restaurants'],
        duration:    '1–2 semaines',
      },
      'seo-local': {
        name:        'SEO Local',
        tagline:     'Apparaissez en premier quand on vous cherche.',
        description: 'Nous positionnons votre entreprise sur Google pour que les clients de votre zone vous trouvent avant vos concurrents. Des résultats mesurables en quelques semaines.',
        features:    ['Optimisation de Google Business Profile', 'Mots-clés locaux stratégiques', 'Optimisation on-page complète', 'Création de contenu local', 'Gestion des avis', 'Rapport mensuel de résultats'],
        idealFor:    ['Dentistes', 'Restaurants', 'Avocats', 'Hôtels', 'Cliniques'],
        duration:    'Service mensuel',
      },
      'whatsapp': {
        name:        'WhatsApp Business',
        tagline:     'Accueillez vos clients là où ils sont.',
        description: 'Nous configurons et automatisons votre WhatsApp Business pour que vous ne manquiez plus aucune demande. Messages automatiques, catalogue et flux d\'assistance.',
        features:    ['Configuration professionnelle du profil', 'Messages de bienvenue et d\'absence', 'Catalogue de produits/services', 'Réponses rapides configurées', 'Intégration sur votre site web', 'Formation pour votre équipe'],
        idealFor:    ['Coiffeurs', 'Restaurants', 'Commerces', 'Cliniques'],
        duration:    '3–5 jours',
      },
      'chatbot': {
        name:        'Chatbots IA',
        tagline:     'Votre employé virtuel, 24h/24.',
        description: 'Nous déployons des assistants virtuels avec intelligence artificielle qui répondent aux questions, captent des leads et réservent des rendez-vous pendant que vous vous reposez.',
        features:    ['Configuration selon votre activité', 'Réponses en plusieurs langues', 'Intégration web et WhatsApp', 'Capture automatique de leads', 'Transfert vers un humain si nécessaire', 'Tableau de bord des conversations'],
        idealFor:    ['Cliniques', 'Hôtels', 'Avocats', 'Dentistes'],
        duration:    '1–2 semaines',
      },
      'automatizaciones': {
        name:        'Automatisations IA',
        tagline:     'Votre business tourne tout seul.',
        description: 'Nous concevons des flux d\'automatisation qui éliminent les tâches répétitives : confirmations de rendez-vous, relances clients, rapports automatiques et bien plus.',
        features:    ['Analyse de vos processus actuels', 'Flux d\'automatisation personnalisés', 'Intégration avec vos outils existants', 'Notifications automatiques', 'Rapports programmés', 'Support et ajustements continus'],
        idealFor:    ['Toute entreprise avec des tâches répétitives'],
        duration:    '2–3 semaines',
      },
      'rediseno': {
        name:        'Refonte Web',
        tagline:     'Votre site actuel, transformé.',
        description: 'Si votre site actuel ne reflète pas le niveau de votre entreprise, nous le rénovons entièrement. Meilleur design, meilleure vitesse, meilleure conversion.',
        features:    ['Audit du site actuel', 'Nouveau design moderne et professionnel', 'Migration du contenu existant', 'Amélioration de la vitesse', 'Optimisation mobile complète', 'Redirections SEO préservées'],
        idealFor:    ['Toute entreprise avec un site obsolète'],
        duration:    '2–3 semaines',
      },
      'movil': {
        name:        'Optimisation Mobile',
        tagline:     'Parfait sur tous les écrans.',
        description: '70% de vos clients vous visitent depuis leur mobile. Nous nous assurons que leur expérience est impeccable sur tout appareil.',
        features:    ['Audit de l\'expérience mobile', 'Correction du design responsive', 'Optimisation de la vitesse mobile', 'Amélioration des formulaires tactiles', 'Tests sur différents appareils', 'Certification Core Web Vitals'],
        idealFor:    ['Toute entreprise avec un site existant'],
        duration:    '1 semaine',
      },
      'multiidioma': {
        name:        'Multilingue',
        tagline:     'Parlez la langue de vos clients.',
        description: 'Nous développons votre activité sur de nouveaux marchés avec des sites web entièrement adaptés à différentes langues et cultures. Traductions professionnelles, pas automatiques.',
        features:    ['Traduction professionnelle du contenu', 'Architecture technique multilingue', 'URLs localisées (SEO)', 'Sélecteur de langue élégant', 'Adaptation culturelle du message', 'Jusqu\'à 3 langues incluses'],
        idealFor:    ['Hôtels', 'Restaurants', 'Agences', 'Entreprises exportatrices'],
        duration:    '2–3 semaines',
      },
      'menu-digital': {
        name:        'Menu Digital (QR Menu)',
        tagline:     'Votre carte en ligne, accessible avec un QR code.',
        description: 'Nous créons votre carte digitale avec QR code pour que vos clients puissent voir le menu depuis leur mobile. Facile à mettre à jour, sans app, avec photos et boutons WhatsApp et Google Maps.',
        features:    ['QR Menu personnalisé', 'Optimisé pour mobile', 'Mises à jour simples', 'Photos de plats et produits', 'Bouton WhatsApp intégré', 'Bouton Google Maps intégré'],
        idealFor:    ['Restaurants', 'Cafés', 'Bars', 'Boulangeries', 'Petits commerces alimentaires'],
        duration:    '3–5 jours',
      },
      'google-business': {
        name:        'Google Business Profile',
        tagline:     'Apparaissez sur Google quand on vous cherche.',
        description: 'Nous créons et optimisons votre fiche Google Business pour que votre entreprise apparaisse sur Google Maps et les recherches locales. Plus de visibilité, plus de clients.',
        features:    ['Création du Google Business Profile', 'Optimisation de la fiche', 'Catégories et attributs', 'Photos professionnelles', 'Horaires d\'ouverture configurés', 'Intégration WhatsApp', 'Lien vers votre site web', 'Améliorations SEO local'],
        idealFor:    ['Commerces locaux', 'Restaurants', 'Cliniques', 'Boutiques', 'Professionnels'],
        duration:    '2–3 jours',
      },
    },

    // Services page specific
    page: {
      title:    'Services',
      heading:  'Tout ce dont vous avez besoin pour grandir en ligne.',
      subtitle: 'Nous ne vendons pas des services. Nous vendons des résultats mesurables pour votre entreprise.',
      allServices: 'Tous nos services',
      duration: 'Durée estimée',
      idealFor: 'Idéal pour',
      features: 'Ce qui est inclus',
      requestService: 'Demander ce service',
      startingFrom: 'À partir de',
      includedIn: 'Inclus dans',
      includedStartingFrom: 'Inclus à partir de',
      ctaTitle:    'Vous ne savez pas ce dont vous avez besoin ?',
      ctaSubtitle: 'Parlez-moi de votre entreprise et je vous dirai exactement ce qu\'il vous faut. Sans jargon, sans pression.',
    },
  },

  // ---------------------------------------------------------------------------
  // PORTFOLIO
  // ---------------------------------------------------------------------------
  portfolio: {
    sectionLabel: 'Portfolio',
    title:        'Des projets qui parlent\nd\'eux-mêmes.',
    subtitle:     'Chaque projet est une entreprise transformée. Des résultats réels, mesurables et documentés.',
    ctaViewAll:   'Voir tous les projets',
    seeCase:      'Voir l\'étude de cas',

    page: {
      title:   'Portfolio',
      heading: 'Projets réels.\nRésultats mesurables.',
      subtitle: 'Chaque étude de cas documente le défi, la solution et les résultats obtenus.',
    },

    stats: {
      industriesNumber: '7',
      industriesLabel: 'Industries',
      satisfactionLabel: 'Clients satisfaits',
    },

    // TODO: Update French portfolio descriptions as needed
    items: {
      'restaurant-paris': {
        industry:    'Restaurant',
        description: 'Site web élégant pour un restaurant familial français avec système de réservation intégré et SEO local.',
        challenge:   'Le restaurant était pratiquement invisible sur Google et dépendait à 100% du bouche-à-oreille.',
        solution:    'Nous avons conçu un site web premium avec menu digital, galerie de plats et système de réservation en ligne, optimisé pour les recherches locales à Lyon.',
        results:     ['+120% de réservations dans les 3 premiers mois', '#1 sur Google pour "restaurant français Lyon"', '40% des réservations provenant du site'],
      },
      'clinica-dental-madrid': {
        industry:    'Santé',
        description: 'Site web médical professionnel avec chatbot IA pour la gestion des rendez-vous et des consultations 24h/24.',
        challenge:   'La clinique perdait des patients potentiels car elle ne pouvait pas répondre aux demandes en dehors des heures de bureau.',
        solution:    'Nous avons déployé un chatbot IA formé avec les informations de la clinique, intégré au site et à WhatsApp, capable de répondre aux questions et de capturer des contacts.',
        results:     ['+85 leads/mois capturés en dehors des heures', 'Réduction de 60% du temps dédié aux consultations basiques', '#2 sur Google pour "dentiste Madrid centre"'],
      },
      'bufete-barcelona': {
        industry:    'Juridique',
        description: 'Site web d\'avocats premium qui transmet autorité, confiance et convertit les visites en consultations.',
        challenge:   'Le cabinet n\'avait pas de présence digitale et perdait des clients face à des concurrents avec une meilleure image en ligne.',
        solution:    'Nous avons développé un site web premium au design sobre et élégant, avec un blog d\'articles juridiques pour le SEO et un formulaire de consultation urgente.',
        results:     ['+200% de consultations en ligne en 60 jours', '#3 sur Google pour "avocats Barcelone"', 'Image de marque renforcée'],
      },
      'hotel-marseille': {
        industry:    'Hôtellerie',
        description: 'Site hôtelier multilingue avec réservations directes pour éliminer les commissions des OTAs.',
        challenge:   'L\'hôtel payait jusqu\'à 25% de commission à des plateformes comme Booking.com pour chaque réservation.',
        solution:    'Nous avons créé un site multilingue (FR/EN/ES) avec moteur de réservation direct, galerie premium et intégration avec le système PMS de l\'hôtel.',
        results:     ['35% de réservations directes en 2 mois', 'Économie de 2 400€/mois en commissions', '+4.8★ sur Google Maps'],
      },
      'peluqueria-lima': {
        industry:    'Beauté',
        description: 'Système de rendez-vous automatisé avec WhatsApp Business et site web optimisé pour Lima.',
        challenge:   'Le salon perdait des clients en ne répondant pas à temps sur WhatsApp et n\'avait pas de système de rendez-vous.',
        solution:    'Nous avons mis en place WhatsApp Business automatisé avec un agenda en ligne intégré et un site local optimisé pour le SEO à Lima.',
        results:     ['40% de croissance de la clientèle en 2 mois', '0 rendez-vous manqués faute de réponse', 'Économie de 3h/jour en gestion de rendez-vous'],
      },
      'arquitecto-paris': {
        industry:    'Architecture',
        description: 'Portfolio digital premium pour capter des clients haut de gamme à Paris.',
        challenge:   'L\'architecte dépendait exclusivement des recommandations pour obtenir de nouveaux projets.',
        solution:    'Nous avons conçu un portfolio digital à fort impact visuel avec des présentations cinématographiques de projets et du SEO pour les recherches d\'architectes à Paris.',
        results:     ['3 nouveaux projets décrochés en 30 jours', 'Positionnement sur les recherches locales d\'architecture', 'Portfolio consulté par 800+ clients potentiels/mois'],
      },
    },
  },

  // ---------------------------------------------------------------------------
  // TESTIMONIALS
  // ---------------------------------------------------------------------------
  testimonials: {
    sectionLabel: 'Témoignages',
    title:        'Ce que disent\nnos clients.',
    subtitle:     'Des résultats réels d\'entreprises réelles. Sans filtre.',
    pauseHint:    'Survolez pour mettre en pause',
  },

  // ---------------------------------------------------------------------------
  // PROCESS
  // ---------------------------------------------------------------------------
  process: {
    sectionLabel: 'Notre méthode',
    title:        'Simple, transparent\net sans surprises.',
    subtitle:     'Chaque projet suit le même processus éprouvé. Vous savez exactement où nous en sommes à chaque instant.',
    ctaStart:     'Commencer maintenant',

    steps: {
      'consulta': {
        title:       'Consultation initiale',
        description: 'Vous nous parlez de votre activité, de vos objectifs et de vos besoins. Sans longs formulaires, sans jargon technique. Juste une conversation.',
        duration:    '1 jour',
        details:     ['Analyse de votre situation actuelle', 'Compréhension de vos objectifs', 'Identification des opportunités', 'Proposition initiale sans engagement'],
      },
      'propuesta': {
        title:       'Proposition personnalisée',
        description: 'Nous préparons une proposition détaillée avec stratégie, périmètre, délais et budget. Sans surprises.',
        duration:    '1–2 jours',
        details:     ['Stratégie digitale adaptée à votre activité', 'Périmètre détaillé du projet', 'Planning de livraison', 'Budget détaillé'],
      },
      'diseno': {
        title:       'Design & développement',
        description: 'Notre équipe travaille sur votre projet avec des mises à jour régulières. Vous validez, nous exécutons.',
        duration:    '1–4 semaines',
        details:     ['Design visuel personnalisé', 'Développement technique professionnel', 'Points d\'avancement hebdomadaires', 'Révisions incluses à chaque étape'],
      },
      'revision': {
        title:       'Révision & ajustements',
        description: 'Nous présentons le résultat et peaufinons chaque détail jusqu\'à ce que vous soyez entièrement satisfait.',
        duration:    '3–5 jours',
        details:     ['Présentation du projet complet', 'Jusqu\'à 3 tours de révisions inclus', 'Ajustements design et contenu', 'Tests sur tous les appareils'],
      },
      'lanzamiento': {
        title:       'Mise en ligne',
        description: 'Nous publions votre projet, configurons tout et vous formons pour que vous puissiez le gérer.',
        duration:    '1–2 jours',
        details:     ['Publication en production', 'Configuration analytics et SEO', 'Formation basique à l\'administration', 'Documentation des accès'],
      },
      'soporte': {
        title:       'Support & croissance',
        description: 'Nous ne disparaissons pas après la mise en ligne. Nous restons disponibles pour le support, les améliorations et continuer à grandir ensemble.',
        duration:    '1–6 mois inclus',
        details:     ['Support technique inclus', 'Monitoring des performances', 'Suggestions d\'amélioration continues', 'Accès prioritaire pour les nouveaux projets'],
      },
    },

    page: {
      title:    'Notre méthode',
      heading:  'Voici comment nous travaillons.',
      subtitle: 'Un processus clair, sans friction, conçu pour que chaque projet soit un succès.',
      guarantee: {
        label:    'Garantie',
        title:    'Votre satisfaction, garantie.',
        subtitle: 'Si le résultat ne correspond pas à ce qui a été convenu dans la proposition initiale, nous révisons sans frais supplémentaires jusqu\'à votre satisfaction.',
        items: [
          '3 tours de révision inclus dans tous les projets',
          'Livraison dans les délais convenus ou remboursement de l\'acompte',
          '30 jours de support gratuit après la mise en ligne',
          'Communication directe avec l\'équipe tout au long du projet',
        ],
      },
    },
  },

  // ---------------------------------------------------------------------------
  // PRICING
  // ---------------------------------------------------------------------------
  pricing: {
    sectionLabel: 'Tarifs',
    title:        'Des tarifs transparents.\nSans surprises.',
    subtitle:     'Nous avons choisi de ne pas avoir de checkout automatique. Parce que chaque entreprise est unique et mérite une proposition sur mesure. On parle d\'abord, on facture après.',
    currencyNote: 'Prix en euros (€) TTC. Devis gratuit, sans engagement.',

    enterprise: {
      title:       'Projet sur mesure ?',
      description: 'Si votre entreprise a des besoins spécifiques qui dépassent ces formules, parlons-en. Chaque projet est unique et mérite une proposition personnalisée.',
      cta:         'Planifier une consultation',
    },

    paymentFlow: {
      sectionLabel: 'Comment fonctionne le paiement ?',
      title:        '100% humain.\nSans pression.',
      subtitle:     'Nous ne vous demanderons jamais de payer avant de vous avoir parlé. Le processus commence toujours par une conversation.',
      steps: [
        'Vous demandez un devis via le formulaire ou WhatsApp.',
        'Nous discutons de votre projet sans aucun engagement.',
        'Nous analysons votre cas et préparons une proposition personnalisée.',
        'Si vous êtes convaincu, nous vous envoyons le lien de paiement.',
        'Vous payez et nous commençons à travailler immédiatement.',
      ],
    },

    faqTitle: 'Questions sur nos tarifs',
    faq: {
      paymentProcess: {
        question: 'Comment fonctionne le processus de paiement ?',
        answer: 'Le processus est entièrement humain : nous parlons d\'abord, analysons votre projet, préparons une proposition et convenons des détails. Une fois tout clair, nous vous envoyons le lien de paiement. Pas de checkout automatique ni de pression.'
      },
      paymentMethods: {
        question: 'Quels moyens de paiement acceptez-vous ?',
        answer: 'Nous acceptons les cartes de crédit/débit, les virements bancaires et PayPal. Les paiements sont gérés de manière sécurisée via LemonSqueezy.'
      },
      upfront: {
        question: 'Faut-il tout payer d\'avance ?',
        answer: 'Non. Nous travaillons généralement avec 50% au démarrage du projet et 50% à la livraison. Pour les projets importants, nous pouvons convenir d\'un plan de paiement en 3 fois.'
      },
      freeQuote: {
        question: 'Le devis est-il gratuit ?',
        answer: 'Oui, toujours. Analyser votre projet et vous préparer une proposition détaillée n\'a aucun coût. Nous commençons à facturer uniquement lorsque vous décidez de nous engager.'
      }
    }
  },

  // ---------------------------------------------------------------------------
  // FAQ
  // ---------------------------------------------------------------------------
  faq: {
    sectionLabel: 'Questions fréquentes',
    title:        'Nous répondons à\ntoutes vos questions.',
    subtitle:     'Si vous ne trouvez pas ce que vous cherchez, écrivez-nous directement.',
    ctaContact:   'Nous contacter directement',

    categories: {
      general:  'Général',
      proceso:  'Notre processus',
      precios:  'Tarifs et paiements',
      tecnico:  'Aspects techniques',
      soporte:  'Support et maintenance',
    },

    // TODO: Review and update French FAQ answers as needed
    items: {
      'que-es-the-ascend': {
        question: 'Qu\'est-ce que The Ascend ?',
        answer:   'The Ascend est une entreprise spécialisée dans la transformation numérique des petites et moyennes entreprises. Nous ne créons pas seulement des sites web : nous concevons des stratégies complètes de présence digitale incluant design, SEO, automatisation et intelligence artificielle pour aider votre entreprise à se développer.',
      },
      'donde-trabajan': {
        question: 'Dans quels pays travaillez-vous ?',
        answer:   'Nous travaillons principalement avec des entreprises en France, Espagne et Pérou, mais nous accompagnons aussi des clients dans toute l\'Amérique latine et l\'Europe. Toutes nos communications se font en français ou en espagnol, et nous travaillons 100% à distance.',
      },
      'tipos-empresa': {
        question: 'Pour quel type d\'entreprises travaillez-vous ?',
        answer:   'Nous sommes spécialisés dans les petites et moyennes entreprises : restaurants, cliniques, dentistes, avocats, architectes, coiffeurs, hôtels, commerces locaux et toute entreprise souhaitant avoir une présence digitale professionnelle.',
      },
      'necesito-conocimientos': {
        question: 'Ai-je besoin de connaissances techniques pour travailler avec vous ?',
        answer:   'Absolument pas. Nous nous occupons de tout le processus technique. Vous avez juste besoin de nous parler de votre activité et de vos objectifs. Nous expliquons tout clairement, sans jargon technique.',
      },
      'como-empieza': {
        question: 'Comment démarre le processus ?',
        answer:   'Très simplement : vous demandez un devis via notre formulaire, WhatsApp ou email. Nous vous recontactons en moins de 24 heures, analysons votre projet ensemble et vous envoyons une proposition détaillée sans engagement.',
      },
      'cuanto-tiempo': {
        question: 'Combien de temps prend un projet ?',
        answer:   'Cela dépend du projet : un site web basique prend entre 1 et 2 semaines. Un projet complet avec SEO, chatbot et automatisations peut prendre entre 3 et 5 semaines. Nous vous donnons toujours une date estimée de livraison avant de commencer.',
      },
      'necesito-contenido': {
        question: 'Dois-je avoir le contenu prêt avant de commencer ?',
        answer:   'Ce n\'est pas obligatoire, mais cela aide. Si vous n\'avez pas de textes ou d\'images, nous vous orientons sur ce dont vous avez besoin et, dans certaines formules, nous incluons la rédaction de contenu basique. Nous travaillons avec ce que vous avez et vous guidons pour le reste.',
      },
      'revisiones': {
        question: 'Combien de révisions sont incluses dans le projet ?',
        answer:   'Tous les projets incluent jusqu\'à 3 tours de révisions sans coût supplémentaire. Notre méthodologie est conçue pour minimiser les corrections grâce à un briefing détaillé en début de projet.',
      },
      'como-se-paga': {
        question: 'Comment fonctionne le processus de paiement ?',
        answer:   'Le processus est entièrement humain : nous parlons d\'abord, analysons votre projet, préparons une proposition et convenons des détails. Une fois tout clair, nous vous envoyons le lien de paiement. Pas de checkout automatique ni de pression.',
      },
      'que-metodos-pago': {
        question: 'Quels moyens de paiement acceptez-vous ?',
        answer:   'Nous acceptons les cartes de crédit/débit, les virements bancaires et PayPal. Les paiements sont gérés de manière sécurisée via LemonSqueezy.',
      },
      'pago-adelanto': {
        question: 'Faut-il tout payer d\'avance ?',
        answer:   'Non. Nous travaillons généralement avec 50% au démarrage du projet et 50% à la livraison. Pour les projets importants, nous pouvons convenir d\'un plan de paiement en 3 fois.',
      },
      'presupuesto-gratis': {
        question: 'Le devis est-il gratuit ?',
        answer:   'Oui, toujours. Analyser votre projet et vous préparer une proposition détaillée n\'a aucun coût. Nous commençons à facturer uniquement lorsque vous décidez de nous engager.',
      },
      'hosting': {
        question: 'L\'hébergement et le nom de domaine sont-ils inclus ?',
        answer:   'L\'hébergement et le domaine ne sont pas inclus dans le prix de base, mais nous vous conseillons sur les meilleurs prestataires pour votre cas et configurons tout pour vous. Les coûts d\'hébergement sont généralement entre 5€ et 20€/mois selon le projet.',
      },
      'mantenimiento': {
        question: 'Le site a-t-il besoin de maintenance ?',
        answer:   'Tout site web nécessite des mises à jour et une maintenance périodique pour maintenir la sécurité et les performances. Nous proposons des plans de maintenance mensuelle, bien que de nombreux clients gèrent eux-mêmes les mises à jour basiques sans problème.',
      },
      'seo-garantias': {
        question: 'Garantissez-vous des résultats SEO ?',
        answer:   'Personne ne peut garantir des positions exactes sur Google, car l\'algorithme est externe. Ce que nous garantissons, c\'est que nous mettons en œuvre toutes les meilleures pratiques SEO et travaillons jusqu\'à obtenir des résultats mesurables.',
      },
      'que-pasa-despues': {
        question: 'Que se passe-t-il après la livraison du projet ?',
        answer:   'Selon la formule choisie, vous bénéficiez de 1 à 6 mois de support inclus. Durant cette période, vous pouvez nous soumettre des questions, demander de petits ajustements et recevoir des conseils. Après le support, vous pouvez souscrire à un plan de maintenance mensuelle.',
      },
      'puedo-editar': {
        question: 'Pourrai-je modifier mon site moi-même ?',
        answer:   'Oui. Tous les projets incluent un panneau d\'administration simple. Nous vous dispensons une formation basique pour que vous puissiez mettre à jour textes, images et contenu sans avoir besoin de connaissances techniques.',
      },
    },
  },

  // ---------------------------------------------------------------------------
  // ABOUT (À propos)
  // ---------------------------------------------------------------------------
  about: {
    sectionLabel: 'À propos de nous',
    title:        'Nous ne sommes pas une agence.\nNous sommes votre équipe digitale.',
    subtitle:     'The Ascend est né d\'une conviction simple : les petites entreprises méritent le même niveau de qualité numérique que les grandes marques. Sans budgets astronomiques. Sans processus interminables. Sans jargon inutile.',

    philosophy: {
      title: 'Notre philosophie',
      items: [
        {
          label: 'Ce que nous croyons',
          title: 'Chaque entreprise mérite de briller.',
          body: 'Un restaurant de quartier, une clinique familiale ou un avocat local méritent la même présence numérique que n\'importe quelle grande entreprise. La technologie doit être un égalisateur, pas une barrière.',
        },
        {
          label: 'Comment nous travaillons',
          title: 'Clair, humain et sans détours.',
          body: 'Nous ne parlons pas d\'API, de frameworks ou de stacks technologiques. Nous parlons de clients, de ventes et de croissance. Notre travail consiste à traduire la technologie en résultats que vous pouvez voir et mesurer.',
        },
        {
          label: 'Notre engagement',
          title: 'Votre succès est notre portfolio.',
          body: 'Nous ne sommes pas des fournisseurs qui livrent et disparaissent. Nous sommes des partenaires à long terme. Votre croissance est notre meilleure carte de visite.',
        },
      ]
    },

    mission: {
      label:  'Mission',
      title:  'Notre mission',
      text:   'Aider les petites et moyennes entreprises à se développer grâce au design moderne, à l\'automatisation et à l\'intelligence artificielle. Nous ne vendons pas des sites web. Nous vendons la transformation numérique.',
    },

    story: {
      label:  'Histoire',
      title:  'Notre histoire',
      text:   'The Ascend est né d\'une observation simple : les meilleurs restaurants, cliniques et petits commerces ont souvent la pire présence digitale. Non pas parce qu\'ils ne le méritent pas, mais parce que les agences traditionnelles étaient trop chères ou trop lentes pour eux.',
      text2:  'Nous avons décidé de créer une entreprise différente : agile, honnête et spécialisée dans les vraies entreprises. Nous travaillons avec des restaurants à Lyon, des cliniques à Madrid, des architectes à Paris et des coiffeurs à Lima. Chaque projet nous rend meilleurs.',
    },

    values: {
      label: 'Valeurs',
      title: 'Ce qui nous définit',
      items: [
        { title: 'Honnêteté radicale',       description: 'Si vous n\'avez pas besoin de quelque chose, nous vous le disons. Nous n\'inflatons pas les budgets ni ne vendons des services inutiles.' },
        { title: 'Résultats, pas promesses',  description: 'Chaque projet inclut des métriques de succès claires. Nous ne livrons pas tant que le résultat n\'est pas à la hauteur.' },
        { title: 'Design sans compromis',     description: 'Nous croyons que le design premium n\'est pas un luxe. C\'est un outil business qui génère du retour sur investissement.' },
        { title: 'Processus humain',          description: 'Pas de bots, pas de formulaires impossibles. Juste des personnes réelles qui comprennent votre activité.' },
        { title: 'Technologie accessible',    description: 'L\'IA et l\'automatisation ne sont pas réservées aux grandes entreprises. Nous vous les rendons accessibles.' },
        { title: 'Relations sur le long terme', description: '70% de nos clients reviennent. Nous ne cherchons pas des transactions, nous cherchons des partenaires.' },
      ],
    },

    markets: {
      label:    'Nos marchés',
      title:    'Où nous sommes.',
      subtitle: 'Nous opérons sur trois marchés avec des caractéristiques et des besoins différents. Nous connaissons les particularités de chacun.',
      items: [
        {
          country:     'France',
          description: 'Notre marché principal. Spécialistes des entreprises dans l\'hôtellerie, la restauration et les services professionnels dans les principales villes françaises.',
          focus:       ['Restaurants et hôtellerie', 'Architecture et design', 'Professions libérales', 'Commerce local'],
        },
        {
          country:     'Espagne',
          description: 'Notre deuxième marché. Cliniques, cabinets d\'avocats, agences et commerces locaux à Madrid, Barcelone et autres villes.',
          focus:       ['Cliniques et santé', 'Cabinets d\'avocats', 'Immobilier', 'E-commerce local'],
        },
        {
          country:     'Pérou',
          description: 'Marché émergent à fort potentiel. Nous aidons les entreprises péruviennes à franchir le cap du digital avec une technologie de premier plan.',
          focus:       ['Coiffeurs et beauté', 'Restaurants et gastronomie', 'Services locaux', 'Entreprises familiales'],
        },
      ],
    },

    team: {
      label:    'Équipe',
      title:    'Les personnes derrière The Ascend',
      subtitle: 'Une équipe réduite, pluridisciplinaire et passionnée par ce qu\'elle fait.',
    },

    page: {
      title:    'À propos',
      metaDesc: 'Découvrez l\'équipe de The Ascend. Agence de transformation numérique pour les PME en France, Espagne et Pérou.',
    },
  },

  // ---------------------------------------------------------------------------
  // CONTACT
  // ---------------------------------------------------------------------------
  contact: {
    sectionLabel: 'Contact',
    title:        'Parlez-nous de\nvotre projet.',
    subtitle:     'Le devis est entièrement gratuit. Nous vous répondons en moins de 24 heures.',

    form: {
      title:        'Demander un devis',
      subtitle:     'Remplissez le formulaire et nous vous contactons en moins de 24 heures.',
      name:         'Nom',
      namePlaceholder: 'Votre nom',
      email:        'Email',
      emailPlaceholder: 'votre@email.com',
      phone:        'Téléphone (optionnel)',
      phonePlaceholder: '+33 6 00 00 00 00',
      business:     'Nom de votre entreprise (optionnel)',
      businessPlaceholder: 'Restaurant Le Petit Coin',
      businessOptions: {
        select: 'Sélectionnez...',
        restaurant: 'Restaurant / Hôtellerie',
        clinic: 'Clinique / Santé',
        lawyer: 'Avocat / Conseil',
        architect: 'Architecte / Design',
        salon: 'Coiffeur / Beauté',
        hotel: 'Hôtel / Hébergement',
        store: 'Boutique / Commerce',
        other: 'Autre',
      },
      service:      'Quel service vous intéresse ?',
      serviceDefault: 'Sélectionnez un service...',
      serviceOptions: {
        notSure: 'Je ne sais pas encore, j\'ai besoin de conseils',
      },
      budget:       'Budget approximatif',
      budgetOptions: {
        select: 'Sélectionnez une fourchette...',
        tier1: 'Moins de 500€',
        tier2: '500€ – 1 000€',
        tier3: '1 000€ – 2 000€',
        tier4: 'Plus de 2 000€',
        notSure: 'Je ne sais pas encore',
      },
      message:      'Parlez-nous de votre projet',
      messagePlaceholder: 'De quoi avez-vous besoin ? Avez-vous déjà un site web ? Quels sont vos objectifs ? Plus vous nous en direz, mieux nous pourrons vous aider.',
      privacy:      'J\'ai lu et j\'accepte la ',
      privacyLink:  'Politique de Confidentialité',
      submit:       'Envoyer la demande',
      sending:      'Envoi en cours...',
      required:     'Champ requis',
    },

    success: {
      title:    'Message envoyé !',
      text:     'Merci de nous avoir contactés. Nous vous répondons en moins de 24 heures ouvrables.',
      subtext:  'En attendant, vous pouvez explorer notre portfolio ou en savoir plus sur notre méthode de travail.',
    },

    error: {
      title: 'Erreur d\'envoi',
      text:  'Une erreur s\'est produite. Veuillez réessayer ou nous contacter directement par email ou WhatsApp.',
    },

    info: {
      directContact: 'Contact direct',
      email:         'Email',
      whatsapp:      'WhatsApp',
      responseTimeTitle: 'Quand répondons-nous ?',
      fast:          'Rapide',
      normal:        'Normal',
      emailForm:     'Email / Formulaire',
      time1:         '1–3 heures',
      time2:         'Moins de 24h',
      afterContactTitle: 'Après avoir contacté...',
      step1:         'Nous vous répondons avec quelques questions pour mieux comprendre votre projet.',
      step2:         'Nous préparons une proposition personnalisée sans engagement.',
      step3:         'Si vous êtes convaincu, nous validons les détails et commençons.',
      response:      'Temps de réponse',
      responseValue: '< 24 heures',
      location:      'Emplacement',
      locationValue: 'France · Espagne · Pérou',
      schedule:      'Horaires d\'ouverture',
      scheduleValue: 'Lun–Ven, 9:00–19:00',
      howItWorks:    'Comment ça marche',
      steps: [
        'Vous remplissez le formulaire',
        'Nous vous contactons en < 24h',
        'On discute de votre projet',
        'Vous recevez une proposition personnalisée',
      ],
    },
  },

  // ---------------------------------------------------------------------------
  // FOOTER
  // ---------------------------------------------------------------------------
  footer: {
    tagline: 'Transformation numérique pour les entreprises qui veulent grandir.',
    columnsTitle: {
      company:  'L\'entreprise',
      services: 'Services',
      contact:  'Contact',
    },
    links: {
      about:     'À propos',
      founder:   'Fondateur',
      process:   'Notre méthode',
      portfolio: 'Portfolio',
      contact:   'Contact',
      privacy:   'Politique de confidentialité',
      terms:     'Conditions d\'utilisation',
      faq:       'FAQ',
    },
    ctaTitle: 'Prêt à commencer ?',
    ctaText: 'Parlez-nous de votre projet. Sans engagement, sans pression.',
    ctaButton: 'Demander un devis',
    whatsapp: 'Écrivez-moi sur WhatsApp',
    markets:   'France · Espagne · Pérou',
    copyright: (year: number) => `© ${year} The Ascend. Tous droits réservés.`,
  },

  // ---------------------------------------------------------------------------
  // CTA BANNER
  // ---------------------------------------------------------------------------
  cta: {
    primary:   'Planifier un appel gratuit',
    secondary: 'Voir notre travail',
    schedule:  'Planifier un appel gratuit',
    contact:   'Contacter maintenant',
    whatsapp:  'Parlons sur WhatsApp',
    bannerTitle: 'Prêt à transformer votre entreprise ?',
    bannerSubtitle: 'Parlez-nous de votre projet. La consultation initiale est gratuite et sans engagement. Nous répondons en moins de 24 heures.',
    trust: [
      'Consultation gratuite',
      'Réponse en <24h',
      'Sans engagement',
      'Payez seulement quand vous êtes convaincu',
    ]
  },

  // ---------------------------------------------------------------------------
  // 404 PAGE
  // ---------------------------------------------------------------------------
  notFound: {
    code:     '404',
    title:    'Page introuvable',
    subtitle: 'La page que vous recherchez n\'existe pas ou a été déplacée.',
    cta:      'Retour à l\'accueil',
  },

  // ---------------------------------------------------------------------------
  // LEGAL PAGES
  // ---------------------------------------------------------------------------
  legal: {
    privacy: {
      title:       'Politique de confidentialité',
      metaDesc:    'Politique de confidentialité de The Ascend.',
      lastUpdated: 'Dernière mise à jour',
      content: `
        <h2>1. Responsable du traitement</h2>
        <p>
          <strong>${SITE.name}</strong><br />
          Email de contact : <a href="mailto:${SITE.email}">${SITE.email}</a>
        </p>

        <h2>2. Données que nous collectons</h2>
        <p>Nous collectons les données suivantes lorsque vous utilisez nos services :</p>
        <ul>
          <li><strong>Données de contact :</strong> nom, email, téléphone (lorsque vous les fournissez dans les formulaires)</li>
          <li><strong>Données d'utilisation :</strong> pages visitées, temps passé sur le site, appareil utilisé (via Google Analytics)</li>
          <li><strong>Données de communication :</strong> contenu des messages que vous nous envoyez</li>
        </ul>

        <h2>3. Finalité du traitement</h2>
        <p>Nous utilisons vos données pour :</p>
        <ul>
          <li>Répondre à vos demandes d'informations ou de devis</li>
          <li>Gérer la relation commerciale si vous souscrivez à nos services</li>
          <li>Améliorer notre site web et nos services (analyses anonymisées)</li>
          <li>Vous envoyer des communications liées à votre projet (uniquement si vous nous avez contactés)</li>
        </ul>

        <h2>4. Base légale du traitement</h2>
        <p>Le traitement de vos données est basé sur :</p>
        <ul>
          <li><strong>Consentement :</strong> lorsque vous remplissez nos formulaires et acceptez cette politique</li>
          <li><strong>Intérêt légitime :</strong> pour améliorer nos services et prévenir la fraude</li>
          <li><strong>Obligation contractuelle :</strong> lorsqu'il y a une relation commerciale active</li>
        </ul>

        <h2>5. Conservation des données</h2>
        <p>
          Nous conservons vos données pendant le temps nécessaire aux fins décrites :
        </p>
        <ul>
          <li>Données de contact : maximum 3 ans depuis le dernier contact</li>
          <li>Données des clients actifs : pendant la durée du contrat + 5 ans</li>
          <li>Données d'analyse : 26 mois (configuration standard de GA4)</li>
        </ul>

        <h2>6. Services tiers</h2>
        <p>Nous utilisons les services suivants qui peuvent traiter vos données :</p>
        <ul>
          <li><strong>Google Analytics 4 :</strong> Analyse du trafic web. <a href="https://policies.google.com/privacy" target="_blank" rel="noopener">Politique de Google</a></li>
          <li><strong>Resend :</strong> Plateforme d'envoi d'emails. <a href="https://resend.com/privacy" target="_blank" rel="noopener">Politique de Resend</a></li>
          <li><strong>Cloudflare :</strong> Hébergement et sécurité. <a href="https://www.cloudflare.com/privacypolicy/" target="_blank" rel="noopener">Politique de Cloudflare</a></li>
        </ul>

        <h2>7. Vos droits</h2>
        <p>Conformément au RGPD (Europe) et aux réglementations applicables, vous avez le droit de :</p>
        <ul>
          <li><strong>Accès :</strong> demander une copie des données que nous détenons à votre sujet</li>
          <li><strong>Rectification :</strong> corriger des données inexactes ou incomplètes</li>
          <li><strong>Suppression :</strong> demander l'effacement de vos données ("droit à l'oubli")</li>
          <li><strong>Portabilité :</strong> recevoir vos données dans un format structuré</li>
          <li><strong>Opposition :</strong> vous opposer au traitement dans certaines circonstances</li>
          <li><strong>Limitation :</strong> demander la restriction du traitement</li>
        </ul>
        <p>
          Pour exercer l'un de ces droits, contactez-nous à l'adresse :
          <a href="mailto:${SITE.email}">${SITE.email}</a>
        </p>

        <h2>8. Cookies</h2>
        <p>Ce site web utilise des cookies techniques nécessaires à son fonctionnement et des cookies d'analyse (Google Analytics) pour comprendre comment les visiteurs utilisent le site. Vous pouvez gérer les cookies depuis les paramètres de votre navigateur.</p>

        <h2>9. Sécurité</h2>
        <p>Nous mettons en œuvre des mesures techniques et organisationnelles pour protéger vos données contre l'accès non autorisé, la perte ou la divulgation, y compris la transmission cryptée (HTTPS) et l'accès restreint aux données.</p>

        <h2>10. Modifications de cette politique</h2>
        <p>Nous pouvons mettre à jour cette politique occasionnellement. Nous vous informerons des changements significatifs en publiant la nouvelle version sur cette page avec la date de mise à jour.</p>

        <h2>11. Contact</h2>
        <p>
          Si vous avez des questions concernant cette politique de confidentialité ou la manière dont nous traitons vos données, contactez-nous :<br />
          📧 <a href="mailto:${SITE.email}">${SITE.email}</a>
        </p>
      `
    },
    terms: {
      title:       'Conditions d\'utilisation',
      metaDesc:    'Conditions générales d\'utilisation de The Ascend.',
      lastUpdated: 'Dernière mise à jour',
      content: `
        <h2>1. Identification du prestataire</h2>
        <p>
          <strong>${SITE.name}</strong> fournit des services de transformation numérique,
          de conception web, de SEO, d'automatisation et d'intelligence artificielle pour les entreprises.<br />
          Email : <a href="mailto:${SITE.email}">${SITE.email}</a>
        </p>

        <h2>2. Services proposés</h2>
        <p>${SITE.name} propose des services numériques comprenant, entre autres : le développement web, le design graphique, le SEO local, la mise en œuvre de chatbots avec IA, l'automatisation des processus et la gestion d'outils de marketing numérique.</p>

        <h2>3. Processus de souscription</h2>
        <p>
          Tous les projets commencent par une demande de devis.
          Le processus est le suivant :
        </p>
        <ol>
          <li>Le client demande un devis via les canaux disponibles (formulaire, email ou WhatsApp)</li>
          <li>${SITE.name} prépare une proposition personnalisée gratuite</li>
          <li>Le client accepte la proposition et reçoit le lien de paiement correspondant</li>
          <li>Le paiement déclenche le début du projet</li>
        </ol>
        <p>Il n'y a pas de processus de paiement automatique. Tout accord commercial est préalable au paiement.</p>

        <h2>4. Conditions de paiement</h2>
        <ul>
          <li>Le paiement sera effectué selon les conditions convenues dans la proposition</li>
          <li>Le paiement initial (50 %) déclenche le début du travail</li>
          <li>Le paiement final (50 %) est effectué lors de la livraison et de l'approbation du projet</li>
          <li>Les paiements sont traités de manière sécurisée via LemonSqueezy</li>
          <li>Les prix en euros incluent/excluent la TVA comme indiqué dans chaque proposition</li>
        </ul>

        <h2>5. Livraison et délais</h2>
        <p>Les délais de livraison sont spécifiés dans chaque proposition individuelle. ${SITE.name} s'engage à respecter les délais convenus. Les retards causés par un manque d'informations ou l'approbation du client ne relèvent pas de la responsabilité de ${SITE.name}.</p>

        <h2>6. Révisions</h2>
        <p>Chaque projet comprend jusqu'à 3 séries de révisions sans frais supplémentaires. Les révisions supplémentaires ou les modifications en dehors du cadre convenu peuvent entraîner des frais supplémentaires, qui seront communiqués et convenus au préalable.</p>

        <h2>7. Propriété intellectuelle</h2>
        <p>Une fois le projet intégralement payé, le client reçoit la pleine propriété des livrables convenus. ${SITE.name} se réserve le droit de présenter le projet dans son portfolio, sauf indication contraire explicite du client.</p>

        <h2>8. Garanties et limitations</h2>
        <ul>
          <li>${SITE.name} garantit que le travail livré est conforme aux spécifications convenues</li>
          <li>Aucune position spécifique dans les moteurs de recherche (SEO) n'est garantie</li>
          <li>Aucun résultat commercial spécifique n'est garanti</li>
          <li>La responsabilité maximale de ${SITE.name} est limitée au montant payé pour le projet</li>
        </ul>

        <h2>9. Support après livraison</h2>
        <p>Le support inclus dans chaque forfait couvre les corrections de bogues et les questions opérationnelles. Il n'inclut pas de nouvelles fonctionnalités ou des modifications de portée imprévues.</p>

        <h2>10. Annulation</h2>
        <p>Le client peut annuler le projet à tout moment. Le montant facturé correspondra au travail déjà effectué. Le dépôt initial n'est pas remboursable si le travail a déjà commencé.</p>

        <h2>11. Loi applicable</h2>
        <p>Ces conditions sont régies par la loi applicable. Pour les utilisateurs en Espagne : loi espagnole. Pour les utilisateurs en France : loi française.</p>

        <h2>12. Contact</h2>
        <p>
          Pour toute question concernant ces conditions :<br />
          📧 <a href="mailto:${SITE.email}">${SITE.email}</a>
        </p>
      `
    },
  },

  // ---------------------------------------------------------------------------
  // PROCESS TEASER (Homepage section)
  // ---------------------------------------------------------------------------
  processTeaser: {
    sectionLabel: 'Notre méthode',
    title:        'Simple, transparent\net sans surprises.',
    subtitle:     'Chaque projet suit le même processus éprouvé. Vous savez exactement où nous en sommes à chaque instant.',
    cta:          'Voir la méthode complète',
  },

  // ---------------------------------------------------------------------------
  // PROCESS PAGE
  // ---------------------------------------------------------------------------
  process: {
    page: {
      title: 'Voici comment nous travaillons.\nSimple et clair.',
      subtitle: 'Sans jargon, sans mystère. Chaque étape est transparente et vous savez toujours exactement où nous en sommes.',
      trustTitle: 'Nos engagements envers vous.',
    },
    items: {
      consulta: {
        title: 'Consultation initiale',
        description: 'Vous nous parlez de votre entreprise, de vos objectifs et de ce dont vous avez besoin. Pas de longs formulaires, pas de jargon technique. Juste une conversation.',
        duration: '1 jour',
        details: [
          'Analyse de votre situation actuelle',
          'Compréhension de vos objectifs',
          'Identification des opportunités',
          'Proposition initiale sans engagement'
        ]
      },
      propuesta: {
        title: 'Proposition personnalisée',
        description: 'Nous préparons une proposition détaillée avec la stratégie, la portée, les délais et le budget. Sans surprises.',
        duration: '1–2 jours',
        details: [
          'Stratégie digitale adaptée à votre entreprise',
          'Portée détaillée du projet',
          'Calendrier de livraison',
          'Budget détaillé'
        ]
      },
      diseno: {
        title: 'Conception et développement',
        description: 'Notre équipe travaille sur votre projet avec des mises à jour régulières. Vous approuvez, nous exécutons.',
        duration: '1–4 semaines',
        details: [
          'Conception visuelle personnalisée',
          'Développement technique professionnel',
          'Mises à jour hebdomadaires',
          'Révisions incluses à chaque étape'
        ]
      },
      revision: {
        title: 'Révision et ajustements',
        description: 'Nous présentons le résultat et peaufinons chaque détail jusqu\'à ce que vous soyez entièrement satisfait.',
        duration: '3–5 jours',
        details: [
          'Présentation du projet complet',
          'Jusqu\'à 3 séries de révisions incluses',
          'Ajustements de conception et de contenu',
          'Tests sur tous les appareils'
        ]
      },
      lanzamiento: {
        title: 'Lancement',
        description: 'Nous publions votre projet, tout est configuré et nous vous offrons une formation de base pour que vous puissiez le gérer.',
        duration: '1–2 jours',
        details: [
          'Publication en production',
          'Configuration des analyses et du SEO',
          'Formation de base à l\'administration',
          'Documentation d\'accès'
        ]
      },
      soporte: {
        title: 'Support et croissance',
        description: 'Nous ne disparaissons pas après le lancement. Nous sommes disponibles pour le support, les améliorations et pour continuer à grandir ensemble.',
        duration: '1–6 mois inclus',
        details: [
          'Support technique inclus',
          'Surveillance des performances',
          'Suggestions d\'amélioration continue',
          'Accès prioritaire pour de nouveaux projets'
        ]
      }
    },
    trust: [
      {
        title: 'Communication constante',
        desc: 'Mises à jour hebdomadaires. Vous ne serez jamais dans l\'ignorance quant à l\'état de votre projet.'
      },
      {
        title: 'Délais respectés',
        desc: 'Si nous convenons d\'une date de livraison, nous la respectons. Si quelque chose survient, nous vous prévenons à l\'avance.'
      },
      {
        title: 'Révisions incluses',
        desc: 'Jusqu\'à 3 séries de révisions sans frais supplémentaires. Votre satisfaction fait partie du projet.'
      },
      {
        title: 'Sans surprises',
        desc: 'Le budget convenu est le prix final. Nous n\'ajoutons pas de coûts cachés ni de suppléments non convenus.'
      }
    ]
  },

  // ---------------------------------------------------------------------------
  // SERVICES OVERVIEW (Homepage section)
  // ---------------------------------------------------------------------------
  servicesOverview: {
    sectionLabel: 'Services',
    title:        'Tout ce dont votre entreprise\na besoin pour grandir en ligne.',
    subtitle:     'Du design web à l\'automatisation par IA. Chaque service est conçu pour les petites et moyennes entreprises.',
    cta:          'Voir tous nos services',
  },

  // ---------------------------------------------------------------------------
  // FAQ TEASER (Homepage section)
  // ---------------------------------------------------------------------------
  faqTeaser: {
    sectionLabel: 'FAQ',
    title:        'Vos questions, nos réponses.',
    subtitle:     'Les questions les plus fréquentes, avec les réponses.',
    cta:          'Voir toutes les questions',
  },

} as const;
