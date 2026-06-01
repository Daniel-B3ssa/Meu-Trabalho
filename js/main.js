/* Olio Theme Scripts - Daniel Bessa Portfolio */
(function ($) {
  "use strict";

  function hidePreloader() {
    if (document.body) {
      document.body.classList.add("loaded");
    }
  }

  // Remove a tela de carregamento mesmo se algum plugin demorar ou falhar.
  $(document).ready(hidePreloader);
  $(window).on("load", hidePreloader);
  setTimeout(hidePreloader, 2500);

  /*=========================================================================
    Sticky Header
  =========================================================================*/
  $(function () {
    var header = $("#header"),
      yOffset = 0,
      triggerPoint = 80;

    $(window).on("scroll", function () {
      yOffset = $(window).scrollTop();

      if (yOffset >= triggerPoint) {
        header.addClass("navbar-fixed-top");
      } else {
        header.removeClass("navbar-fixed-top");
      }
    });
  });

  /*=========================================================================
    Language Switcher + Hero Rotator
  =========================================================================*/
  var translations = {
    "pt-BR": {
      pageTitle: "Daniel Bessa | Editor de Vídeo & Especialista em IA",
      metaDescription: "Portfólio de Daniel Bessa, editor de vídeo especialista em IA, edições cinematográficas e conteúdo para redes sociais.",
      navHome: "Início",
      navAbout: "Sobre",
      navServices: "Serviços",
      navWorks: "Portfólio",
      navContact: "Contato",
      heroSubtitle: "Editor de Vídeo & Especialista em IA",
      heroRotator: ["Edições Criativas", "Vídeos com IA", "Conteúdo Cinematográfico"],
      heroRotatorText: "Edições Criativas",
      heroDescription: "Crio edições de vídeo de alto impacto que prendem a atenção.<br />Especialista em visuais com IA, conteúdo para redes sociais e narrativa cinematográfica.",
      scrollDown: "Rolar",
      aboutTitle: "Sobre Mim",
      aboutP1: "Sou Daniel Bessa, editor de vídeo focado em criar conteúdos de alta retenção para redes sociais, YouTube, Reels, Shorts e projetos visuais com IA.",
      aboutP2: "Meu trabalho combina ritmo cinematográfico, storytelling, motion effects, sound design e ferramentas de IA para transformar ideias simples em vídeos profissionais.",
      aboutButton: "Ver Portfólio",
      servicesTitle: "Serviços",
      servicesDescription: "Serviços de edição de vídeo focados em retenção, visual cinematográfico e conteúdo com IA.",
      serviceLongTitle: "Edição de Vídeos Longos",
      serviceLongDesc: "Edição profissional para vídeos do YouTube, podcasts e conteúdos de marca.",
      serviceMotionTitle: "Motion Graphics",
      serviceMotionDesc: "Textos dinâmicos, efeitos, transições e elementos animados.",
      serviceRetentionTitle: "Edição para Retenção",
      serviceRetentionDesc: "Edições focadas em manter o público assistindo por mais tempo, com ritmo forte, hooks e dinâmica visual.",
      serviceShortTitle: "Vídeos Curtos",
      serviceShortDesc: "Edições de alta retenção para Reels, TikTok e YouTube Shorts.",
      serviceDeliveryTitle: "Entrega Profissional",
      serviceDeliveryDesc: "Entrega rápida e profissional com qualidade, organização e atenção aos detalhes.",
      serviceAiTitle: "Criação de Vídeos com IA",
      serviceAiDesc: "Cenas com IA, transições, prompts e conceitos visuais cinematográficos.",
      portfolioTitle: "Portfólio",
      businessCategoryTitle: "Vídeos para Empresa",
      businessCategoryDesc: "Vídeos profissionais para marcas, empresas e redes sociais.",
      businessVideo1Title: "Edição Corporativa",
      businessVideo2Title: "Conteúdo de Marca",
      businessVideo3Title: "Anúncio para Redes Sociais",
      businessVideoType: "Vídeo Empresarial",
      aiCategoryTitle: "Vídeos com IA",
      aiCategoryDesc: "Vídeos cinematográficos, cenas com IA, transições e conceitos visuais.",
      aiVideo1Title: "Cena Cinematográfica com IA",
      aiVideo2Title: "Conceito Visual com IA",
      aiVideo3Title: "Transição com IA",
      aiVideoType: "Vídeo com IA",
      realEstateCategoryTitle: "Vídeos Imobiliários",
      realEstateCategoryDesc: "Vídeos de imóveis, tours de casas e conteúdo imobiliário para redes sociais.",
      realEstateVideo1Title: "Tour de Imóvel",
      realEstateVideo2Title: "Casa de Luxo",
      realEstateVideo3Title: "Apresentação de Apartamento",
      realEstateVideoType: "Imobiliário",
      contactTitle: "Vamos trabalhar juntos",
      contactDescription: "Me envie uma mensagem e vamos criar conteúdos de vídeo profissionais.",
      footerText: "&copy; 2026 Daniel Bessa. Todos os direitos reservados."
    },
    en: {
      pageTitle: "Daniel Bessa | Video Editor & AI Specialist",
      metaDescription: "Portfolio of Daniel Bessa, video editor specialized in AI, cinematic edits and social media content.",
      navHome: "Home",
      navAbout: "About",
      navServices: "Services",
      navWorks: "Works",
      navContact: "Contact",
      heroSubtitle: "Video Editor & AI Specialist",
      heroRotator: ["Creative Edits", "AI Videos", "Cinematic Content"],
      heroRotatorText: "Creative Edits",
      heroDescription: "I create high-impact video edits that capture attention.<br />Specialized in AI-powered visuals, social media content and cinematic storytelling.",
      scrollDown: "Scroll Down",
      aboutTitle: "About Me",
      aboutP1: "I’m Daniel Bessa, a video editor focused on creating high-retention content for social media, YouTube, Reels, Shorts and AI-powered visual projects.",
      aboutP2: "My work combines cinematic pacing, strong storytelling, motion effects, sound design and AI tools to transform simple ideas into professional videos.",
      aboutButton: "See My Works",
      servicesTitle: "Services",
      servicesDescription: "Video editing services focused on retention, cinematic visuals and AI-powered content.",
      serviceLongTitle: "Long-Form Editing",
      serviceLongDesc: "Professional editing for YouTube videos, podcasts and branded content.",
      serviceMotionTitle: "Motion Graphics",
      serviceMotionDesc: "Dynamic text, effects, transitions and animated elements.",
      serviceRetentionTitle: "Retention Editing",
      serviceRetentionDesc: "Edits focused on keeping viewers watching longer with strong pacing, hooks and visual rhythm.",
      serviceShortTitle: "Short-Form Videos",
      serviceShortDesc: "High-retention edits for Reels, TikTok and YouTube Shorts.",
      serviceDeliveryTitle: "Video Delivery",
      serviceDeliveryDesc: "Fast and professional video delivery with quality, organization and attention to detail.",
      serviceAiTitle: "AI Video Creation",
      serviceAiDesc: "AI-powered scenes, transitions, prompts and cinematic visual concepts.",
      portfolioTitle: "Portfolio",
      businessCategoryTitle: "Business Videos",
      businessCategoryDesc: "Professional videos for brands, companies and social media.",
      businessVideo1Title: "Corporate Edit",
      businessVideo2Title: "Brand Content",
      businessVideo3Title: "Social Media Ad",
      businessVideoType: "Business Video",
      aiCategoryTitle: "AI Videos",
      aiCategoryDesc: "Cinematic videos, AI scenes, transitions and visual concepts.",
      aiVideo1Title: "AI Cinematic Scene",
      aiVideo2Title: "AI Motion Concept",
      aiVideo3Title: "AI Transition",
      aiVideoType: "AI Video",
      realEstateCategoryTitle: "Real Estate Videos",
      realEstateCategoryDesc: "Property videos, house tours and real estate social content.",
      realEstateVideo1Title: "Property Tour",
      realEstateVideo2Title: "Luxury House Edit",
      realEstateVideo3Title: "Apartment Showcase",
      realEstateVideoType: "Real Estate",
      contactTitle: "Let’s work together",
      contactDescription: "Send me a message and let’s create professional video content.",
      footerText: "&copy; 2026 Daniel Bessa. All rights reserved."
    },
    es: {
      pageTitle: "Daniel Bessa | Editor de Video & Especialista en IA",
      metaDescription: "Portafolio de Daniel Bessa, editor de video especializado en IA, ediciones cinematográficas y contenido para redes sociales.",
      navHome: "Inicio",
      navAbout: "Sobre mí",
      navServices: "Servicios",
      navWorks: "Portafolio",
      navContact: "Contacto",
      heroSubtitle: "Editor de Video & Especialista en IA",
      heroRotator: ["Ediciones Creativas", "Videos con IA", "Contenido Cinematográfico"],
      heroRotatorText: "Ediciones Creativas",
      heroDescription: "Creo ediciones de video de alto impacto que capturan la atención.<br />Especialista en visuales con IA, contenido para redes sociales y narrativa cinematográfica.",
      scrollDown: "Bajar",
      aboutTitle: "Sobre Mí",
      aboutP1: "Soy Daniel Bessa, editor de video enfocado en crear contenido de alta retención para redes sociales, YouTube, Reels, Shorts y proyectos visuales con IA.",
      aboutP2: "Mi trabajo combina ritmo cinematográfico, storytelling, motion effects, diseño sonoro y herramientas de IA para transformar ideas simples en videos profesionales.",
      aboutButton: "Ver Portafolio",
      servicesTitle: "Servicios",
      servicesDescription: "Servicios de edición de video enfocados en retención, visual cinematográfico y contenido con IA.",
      serviceLongTitle: "Edición de Videos Largos",
      serviceLongDesc: "Edición profesional para videos de YouTube, podcasts y contenidos de marca.",
      serviceMotionTitle: "Motion Graphics",
      serviceMotionDesc: "Textos dinámicos, efectos, transiciones y elementos animados.",
      serviceRetentionTitle: "Edición para Retención",
      serviceRetentionDesc: "Ediciones enfocadas en mantener al público mirando por más tiempo, con buen ritmo, hooks y dinámica visual.",
      serviceShortTitle: "Videos Cortos",
      serviceShortDesc: "Ediciones de alta retención para Reels, TikTok y YouTube Shorts.",
      serviceDeliveryTitle: "Entrega Profesional",
      serviceDeliveryDesc: "Entrega rápida y profesional con calidad, organización y atención a los detalles.",
      serviceAiTitle: "Creación de Videos con IA",
      serviceAiDesc: "Escenas con IA, transiciones, prompts y conceptos visuales cinematográficos.",
      portfolioTitle: "Portafolio",
      businessCategoryTitle: "Videos para Empresas",
      businessCategoryDesc: "Videos profesionales para marcas, empresas y redes sociales.",
      businessVideo1Title: "Edición Corporativa",
      businessVideo2Title: "Contenido de Marca",
      businessVideo3Title: "Anuncio para Redes Sociales",
      businessVideoType: "Video Empresarial",
      aiCategoryTitle: "Videos con IA",
      aiCategoryDesc: "Videos cinematográficos, escenas con IA, transiciones y conceptos visuales.",
      aiVideo1Title: "Escena Cinematográfica con IA",
      aiVideo2Title: "Concepto Visual con IA",
      aiVideo3Title: "Transición con IA",
      aiVideoType: "Video con IA",
      realEstateCategoryTitle: "Videos Inmobiliarios",
      realEstateCategoryDesc: "Videos de propiedades, recorridos de casas y contenido inmobiliario para redes sociales.",
      realEstateVideo1Title: "Recorrido de Propiedad",
      realEstateVideo2Title: "Casa de Lujo",
      realEstateVideo3Title: "Presentación de Apartamento",
      realEstateVideoType: "Inmobiliario",
      contactTitle: "Trabajemos juntos",
      contactDescription: "Envíame un mensaje y creemos contenido de video profesional.",
      footerText: "&copy; 2026 Daniel Bessa. Todos los derechos reservados."
    }
  };

  var currentLanguage = localStorage.getItem("portfolioLanguage") || "pt-BR";
  var heroRotationIndex = 0;
  var heroRotationTimer = null;

  function getTranslationSet(lang) {
    return translations[lang] || translations["pt-BR"];
  }

  function updateHeroRotator() {
    var rotateElement = document.querySelector(".rotate");
    if (!rotateElement) return;

    var items = getTranslationSet(currentLanguage).heroRotator || [];
    if (!items.length) return;

    rotateElement.textContent = items[heroRotationIndex % items.length];
    heroRotationIndex += 1;
  }

  function startHeroRotator() {
    if (heroRotationTimer) {
      clearInterval(heroRotationTimer);
    }

    heroRotationIndex = 0;
    updateHeroRotator();
    heroRotationTimer = setInterval(updateHeroRotator, 2000);
  }

  function applyLanguage(lang) {
    currentLanguage = translations[lang] ? lang : "pt-BR";
    var selectedTranslations = getTranslationSet(currentLanguage);

    document.documentElement.setAttribute("lang", currentLanguage);
    document.title = selectedTranslations.pageTitle;

    var metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", selectedTranslations.metaDescription);
    }

    document.querySelectorAll("[data-i18n]").forEach(function (element) {
      var key = element.getAttribute("data-i18n");
      if (selectedTranslations[key]) {
        element.textContent = selectedTranslations[key];
      }
    });

    document.querySelectorAll("[data-i18n-html]").forEach(function (element) {
      var key = element.getAttribute("data-i18n-html");
      if (selectedTranslations[key]) {
        element.innerHTML = selectedTranslations[key];
      }
    });

    document.querySelectorAll(".language-btn").forEach(function (button) {
      button.classList.toggle("active", button.getAttribute("data-lang") === currentLanguage);
    });

    localStorage.setItem("portfolioLanguage", currentLanguage);
    startHeroRotator();
  }

  $(document).ready(function () {
    applyLanguage(currentLanguage);

    document.querySelectorAll(".language-btn").forEach(function (button) {
      button.addEventListener("click", function () {
        applyLanguage(button.getAttribute("data-lang"));
      });
    });
  });

  /*=========================================================================
    Mobile Menu
  =========================================================================*/
  if ($.fn.slicknav && $(".menu-wrap ul.nav").length) {
    $(".menu-wrap ul.nav").slicknav({
      prependTo: ".header-section .navbar",
      label: "",
      allowParentLinks: true
    });
  }

  /*=========================================================================
    Active Venobox
  =========================================================================*/
  if ($.fn.venobox && $(".img-popup").length) {
    $(".img-popup").venobox({
      numeratio: true,
      infinigall: true
    });
  }

  /*=========================================================================
    YouTube Embed Helper
  =========================================================================*/
  function getYoutubeVideoId(url) {
    if (!url) return null;

    var cleanUrl = String(url).trim();

    if (/^[a-zA-Z0-9_-]{11}$/.test(cleanUrl)) {
      return cleanUrl;
    }

    var patterns = [
      /youtube\.com\/watch\?v=([a-zA-Z0-9_-]{11})/,
      /youtube\.com\/embed\/([a-zA-Z0-9_-]{11})/,
      /youtube\.com\/shorts\/([a-zA-Z0-9_-]{11})/,
      /youtu\.be\/([a-zA-Z0-9_-]{11})/
    ];

    for (var i = 0; i < patterns.length; i += 1) {
      var match = cleanUrl.match(patterns[i]);
      if (match && match[1]) {
        return match[1];
      }
    }

    return null;
  }

  function setupYoutubeEmbeds() {
    document.querySelectorAll(".youtube-video[data-youtube-url]").forEach(function (iframe) {
      var videoId = getYoutubeVideoId(iframe.getAttribute("data-youtube-url"));

      if (!videoId) return;

      iframe.setAttribute(
        "src",
        "https://www.youtube.com/embed/" + videoId + "?rel=0&modestbranding=1"
      );
    });
  }

  $(document).ready(setupYoutubeEmbeds);

  /*=========================================================================
    Portfolio YouTube Carousel
  =========================================================================*/
  if ($.fn.owlCarousel && $(".portfolio-video-carousel").length) {
    $(".portfolio-video-carousel").each(function () {
      var portfolioCarousel = $(this);

      function updatePortfolioDepth() {
        portfolioCarousel
          .find(".owl-item")
          .removeClass("depth-prev depth-next depth-back");

        var centerItem = portfolioCarousel.find(".owl-item.center");

        centerItem.prev(".owl-item").addClass("depth-prev");
        centerItem.next(".owl-item").addClass("depth-next");
        centerItem.prev(".owl-item").prev(".owl-item").addClass("depth-back");
        centerItem.next(".owl-item").next(".owl-item").addClass("depth-back");
      }

      function stopYoutubeVideos() {
        portfolioCarousel.find("iframe").each(function () {
          var iframe = this;
          var currentSrc = iframe.getAttribute("src");

          if (currentSrc) {
            iframe.setAttribute("src", currentSrc);
          }
        });
      }

      portfolioCarousel
        .on(
          "initialized.owl.carousel translated.owl.carousel refreshed.owl.carousel resized.owl.carousel",
          updatePortfolioDepth
        )
        .on("translate.owl.carousel", stopYoutubeVideos)
        .owlCarousel({
          loop: true,
          center: true,
          items: 1,
          margin: 12,
          stagePadding: 42,
          nav: true,
          dots: false,
          autoplay: false,
          smartSpeed: 750,
          navSpeed: 750,
          navText: [
            '<span aria-hidden="true">‹</span>',
            '<span aria-hidden="true">›</span>'
          ],
          responsive: {
            0: {
              items: 1,
              stagePadding: 45,
              margin: 15
            },
            768: {
              items: 1,
              stagePadding: 35,
              margin: 12
            },
            1200: {
              items: 1,
              stagePadding: 42,
              margin: 12
            }
          }
        });
    });
  }

  /*=========================================================================
    Initialize Smooth Scroll Plugin
  =========================================================================*/
  if (window.smoothScroll) {
    smoothScroll.init({
      offset: 60
    });
  }

  /*=========================================================================
    Scroll To Top
  =========================================================================*/
  $(window).on("scroll", function () {
    if ($(this).scrollTop() > 100) {
      $("#scroll-to-top").fadeIn();
    } else {
      $("#scroll-to-top").fadeOut();
    }
  });

  /*=========================================================================
    WOW Active
  =========================================================================*/
  if (window.WOW) {
    new WOW().init();
  }
})(jQuery);