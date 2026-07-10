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

export const fr = {

  // ---------------------------------------------------------------------------
  // NAVIGATION
  // ---------------------------------------------------------------------------
  nav: {
    services:   'Services',
    portfolio:  'Portfolio',
    process:    'Notre méthode',
    pricing:    'Tarifs',
    about:      'À propos',
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
      ctaTitle:    'Vous ne savez pas ce dont vous avez besoin ?',
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
    sectionLabel: 'À propos',
    title:        'Nous ne sommes pas\nune agence comme les autres.',
    subtitle:     'Nous sommes votre équipe digitale. Nés pour démocratiser l\'accès à la technologie de qualité pour les petites entreprises qui méritent de rivaliser avec les grands.',

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
      label:    'Où nous sommes',
      title:    'Présents dans 3 pays.',
      subtitle: 'Nous travaillons entièrement à distance avec une pleine efficacité. Nous connaissons les marchés locaux parce que nous y vivons et respirons.',
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
      service:      'Service souhaité',
      serviceDefault: 'Sélectionnez un service',
      message:      'Parlez-nous de votre projet',
      messagePlaceholder: 'De quoi avez-vous besoin ? Quel est votre objectif principal ? Avez-vous une date limite ?',
      privacy:      'J\'ai lu et j\'accepte la ',
      privacyLink:  'politique de confidentialité',
      submit:       'Envoyer la demande',
      sending:      'Envoi en cours...',
      required:     'Champ obligatoire',
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
      response:      'Délai de réponse',
      responseValue: '< 24 heures',
      email:         'Email',
      whatsapp:      'WhatsApp',
      location:      'Localisation',
      locationValue: 'France · Espagne · Pérou',
      schedule:      'Heures d\'ouverture',
      scheduleValue: 'Lun–Ven, 9h00–19h00',
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
      process:   'Notre méthode',
      portfolio: 'Portfolio',
      contact:   'Contact',
      privacy:   'Politique de confidentialité',
      terms:     'Conditions d\'utilisation',
      faq:       'FAQ',
    },
    markets:   'France · Espagne · Pérou',
    copyright: (year: number) => `© ${year} The Ascend. Tous droits réservés.`,
  },

  // ---------------------------------------------------------------------------
  // CTA BANNER
  // ---------------------------------------------------------------------------
  cta: {
    primary:   'Planifier un appel gratuit',
    secondary: 'Voir le portfolio',
    schedule:  'Planifier un appel gratuit',
    contact:   'Nous contacter',
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
    },
    terms: {
      title:       'Conditions d\'utilisation',
      metaDesc:    'Conditions générales d\'utilisation de The Ascend.',
      lastUpdated: 'Dernière mise à jour',
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
