const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");

// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
    apiKey: "AIzaSyB5Nigu5hzO187RL883aBBZdLLq-yWfY8I",
    authDomain: "joblist-bpoulain.firebaseapp.com",
    projectId: "joblist-bpoulain"
  });
  
var db = firebase.firestore();

var jobs =[  
  
    {
      "companyId": "R8jGkZ3prbbDW8BUBD4p6HqTFT63",
      "creatorId": "R8jGkZ3prbbDW8BUBD4p6HqTFT63",
      "description": "L'AGENCE\nKréalid est une agence de communication digitale créée en 2008, dédiée à la stratégie d’expériences digitales. Nous sommes basés à Roubaix, au cœur de la Plaine Images, site d’excellence économique dédié aux images numériques et aux industries créatives. Nous accompagnons nos clients dans la refonte de leurs sites et interfaces, dans la création de leur contenu de marque, dans leur animation e-commerce… \n\n\nVOTRE MISSION\nDans le cadre de son développement, Krealid recherche un développeur Front-End H/F expérimenté \n \nVos missions :\nParticiper au développement des sites web qui nous sont confiés sur des Framework connus comme WordPress, Drupal, Woocommerce, Prestashop, Magento etc… (Modification code source, surcharge, composants).\nSavoir intégrer sur différents devices (desktop, mobile, responsive, LP, NL, Mini jeux…) en respectant les règles en usage.\nMise en conformité avec les normes W3C.\nSavoir utiliser et s’interfacer avec des API/WEB Services.\nTMA (Assurer la maintenance évolutive et corrective de nos applications).\nÉchanger avec les équipes Front End et Back-End et les chefs de projets digitaux.\nTests automatiques et revues de code.\nRédaction de documentations liées aux projets (cahier des Charges, contrats d’interfaces).\nAssurer une veille technologique .\n\nProfil recherché :\nFormation en développement informatique (3 à 5 ans en cursus spécialisé)\nConnaissance ou notions sur les langages de programmation suivants : PHP, JAVASCRIPT, ANGULAR JS, NODE JS, VUE JS, REACT,(BDD  MYSQL)\nMise en Forme : HTML5/CSS3, BOOTSTRAP, LESS/SASS, Responsive Design\nFamilier avec Git\nBonne compréhension des contraintes de développement et des environnements\nSensible aux problématiques de forte charge et de sécurité.\nPrécis, réactif, et autonome\nVous travaillerez au sein d’une équipe où la bienveillance est une valeur essentielle. \n\nSalaire :\nSelon profil et expérience\n\nAvantages :\nTitre-restaurant\nMutuelle fournie par Kréalid\n \nPoste à pourvoir rapidement  ",
      "descriptionPreview": "L'AGENCE Kréalid est une agence de communication digitale créée en 2008, dédiée à la stratégie d’expériences digitales. Nous sommes basés à Roubaix, au cœur de la Plaine Images, site d’excellence économique dédié aux images numériques et aux industries créatives. Nous accompagnons nos clients dans la refonte de leurs sites et interfaces, dans la création de leur contenu de marque, dans leur animat",
      "details": {
        "acceptRemote": "OCCASIONALLY",
        "contract": "permanent",
        "currency": "€",
        "places": {
          "ChIJaYr_9pEow0cRsFlkgT7xCgQ": {
            "position": 0,
            "updatedAt": 1591609760627
          }
        },
        "requiredExperience": 3,
        "requiredExperiencePro": 3,
        "start": "03/05/2021"
      },
      "helmetImageLink": "https://cdn.filestackcontent.com/9pZWWLIXTaG5STSOT4nX",
      "lastUpdate": 1622795906167,
      "publishDate": 1622795906167,
      "seoAlias": "developpeur-front-end-confirme-krealid",
      "skillsList": [
        {
          "id": "-M5CNXKxy9oNYmEz-cSx",
          "name": "AngularJS",
          "tags": ["framework", "javascript"],
          "imageUrl": "https://cdn.filestackcontent.com/z91tv0taRZ6O3HgtDx8g",
          "value": 70
        },
        {
          "id": "-M5CNXKxy9oNYmEz-cT1",
          "name": "Bootstrap",
          "tags": ["css", "framework", "css3"],
          "imageUrl": "https://cdn.filestackcontent.com/KpqfSnDETpWiARvX8goF",
          "value": 70
        },
        {
          "id": "-M5CNXKzkSuZBbUdiuEv",
          "name": "PHP",
          "oldUrl": "https://firebasestorage.googleapis.com/v0/b/jechercheundev.appspot.com/o/devicons%2Ficons%2Fphp.svg?alt=media&token=d86e30c1-dea7-4dd8-956f-8086b3934bb8",
          "tags": ["programming", "language"],
          "imageUrl": "https://cdn.filestackcontent.com/eTxIlJh0RgGuszJ6VBA1",
          "value": 70,
          "versions": {
            "font": ["plain"],
            "svg": ["original", "plain"]
          }
        },
        {
          "id": "-M5CNXKyRIMA4Xys7zuF",
          "name": "Javascript",
          "tags": ["programming", "language"],
          "imageUrl": "https://cdn.filestackcontent.com/6ZrIEmWRgycFn9smUNzN",
          "value": 70
        },
        {
          "id": "-M5CNXKzkSuZBbUdiuEu",
          "name": "NodeJS",
          "oldUrl": "https://firebasestorage.googleapis.com/v0/b/jechercheundev.appspot.com/o/devicons%2Ficons%2Fnodejs.svg?alt=media&token=a2570931-22f4-49dd-9510-e036f3e05e5c",
          "tags": ["javascript", "language"],
          "imageUrl": "https://cdn.filestackcontent.com/7MhNX9D9TnSlvNFxgGWD",
          "value": 70,
          "versions": {
            "font": ["plain", "plain-wordmark"],
            "svg": ["original", "original-wordmark", "plain", "plain-wordmark"]
          }
        },
        {
          "id": "-M5CNXKzkSuZBbUdiuFG",
          "name": "vueJS",
          "oldUrl": "https://firebasestorage.googleapis.com/v0/b/jechercheundev.appspot.com/o/devicons%2Ficons%2Fvuejs.svg?alt=media&token=efe9e5f3-68ef-4a5c-9eb0-7c72c5730651",
          "tags": ["framework"],
          "imageUrl": "https://cdn.filestackcontent.com/DnFx4tSuuLPLZ7irnuWA",
          "value": 70,
          "versions": {
            "font": ["plain", "plain-wordmark", "line", "line-wordmark"],
            "svg": [
              "original",
              "original-wordmark",
              "plain",
              "plain-wordmark",
              "line",
              "line-wordmark"
            ]
          }
        },
        {
          "id": "-M5CNXKzkSuZBbUdiuF0",
          "name": "React",
          "oldUrl": "https://firebasestorage.googleapis.com/v0/b/jechercheundev.appspot.com/o/devicons%2Ficons%2Freact.svg?alt=media&token=b632282e-4e89-49bb-9bf5-23f99bbc6996",
          "tags": ["framework"],
          "imageUrl": "https://cdn.filestackcontent.com/nqg4oH2SlWw2g0gakzQg",
          "value": 70,
          "versions": {
            "font": ["original", "original-wordmark"],
            "svg": ["original", "original-wordmark"]
          }
        },
        {
          "id": "-M5CNXKzkSuZBbUdiuEs",
          "name": "Mysql",
          "oldUrl": "https://firebasestorage.googleapis.com/v0/b/jechercheundev.appspot.com/o/devicons%2Ficons%2Fmysql.svg?alt=media&token=bfc4fc65-f59c-4a9e-9c4b-5632efc6a0d9",
          "tags": ["database", "language"],
          "imageUrl": "https://cdn.filestackcontent.com/piFmcDABRIOHuGYyukUj",
          "value": 70,
          "versions": {
            "font": ["plain", "plain-wordmark"],
            "svg": ["original", "original-wordmark", "plain", "plain-wordmark"]
          }
        },
        {
          "id": "-M5CNXKxy9oNYmEz-cTA",
          "name": "CSS3",
          "tags": ["language", "programming"],
          "imageUrl": "https://cdn.filestackcontent.com/qypr8RXQlOeXRa0zNnw1",
          "value": 70
        },
        {
          "id": "-M5CNXKyRIMA4Xys7zuC",
          "name": "HTML5",
          "tags": ["programming", "language"],
          "imageUrl": "https://cdn.filestackcontent.com/Le6p4xlUQkW189RcHcBT",
          "value": 70
        },
        {
          "id": "-M5CNXKyRIMA4Xys7zuK",
          "name": "Less",
          "oldUrl": "https://firebasestorage.googleapis.com/v0/b/test-project-412e3.appspot.com/o/devicons%2Ficons%2Fless.svg?alt=media&token=c4bdc814-7208-4300-be0a-1c19bb6181f5",
          "tags": ["css", "pre-processor"],
          "imageUrl": "https://cdn.filestackcontent.com/oxnVytTrTQk90uSy11UQ",
          "value": 70,
          "versions": {
            "font": ["plain-wordmark"],
            "svg": ["plain-wordmark"]
          }
        },
        {
          "id": "-M5CNXKzkSuZBbUdiuF4",
          "name": "Sass",
          "oldUrl": "https://firebasestorage.googleapis.com/v0/b/jechercheundev.appspot.com/o/devicons%2Ficons%2Fsass.svg?alt=media&token=76fed637-d23d-4b6a-bd5b-2d9a837866e8",
          "tags": ["pre-processor", "css"],
          "imageUrl": "https://cdn.filestackcontent.com/FyAFa3WzSA2IYyjq5Kq6",
          "value": 70,
          "versions": {
            "font": ["original"],
            "svg": ["original"]
          }
        }
      ],
      "status": "JOB_PUBLISHED",
      "title": "Développeur front-end confirmé",
      "smallCompany": {
        "companyName": "Kréalid",
        "logoImageLink": "https://cdn.filestackcontent.com/FpgaY1IWRSmfetOjLdIC",
        "id": "R8jGkZ3prbbDW8BUBD4p6HqTFT63",
        "seoAlias": "krealid",
        "gallery": {
          "imageImageLink": "https://cdn.filestackcontent.com/cwS0yjzHRiCyEjgYVZU3"
        }
      },
      "_geoloc": [
        {
          "lat": 50.692705,
          "lng": 3.177847
        }
      ],
      "id": "-M9IKG-ONXrF6NUVAjl8"
    },
    {
      "companyId": "Qjh199EAUYc9eDlGdDbKNXdHv072",
      "createdAt": 1611738568495,
      "creatorId": "A5ujKnR4npVbLZcqCiwPpssiM0m2",
      "description": "Mission\nNous t’attendons **à Lille** pour un poste de **Développeur FullStack JS** sur lequel tu seras force de proposition et tu mettras à profit :\n\n* **Ton expertise technique** en accompagnant nos clients sur des projets de développement de web app from scratch ou sur des stratégies de migration vers Angular ou React.js par exemple;\n\n* **Ton envie de partager** tes connaissances en challengeant et en étant challengé par ton équipe. Tu es garant des bonnes pratiques de dev (intégration continue, tests, agilité...) et tu as également la possibilité de créer des modules de formation dans le cadre du Training  (coaching et formation au TDD, GraphQL...);\n\n* **Ta connaissance métier** acquise dans l’un des secteurs suivants: Médias, Retail, Travel/Mobility, Banque/Assurance… afin de penser et implémenter  des solutions innovantes. \n\n\n\nProfil recherché\n**Si tu as …**\n\n-Une expérience d’au moins trois ans autour des technos Javascript\n-Une appétence pour la veille technologique\n-Une sensibilité pour le travail d’équipe et la méthode Agile.\n\n**Que tu maîtrises l’écosystème JS que ce soit en termes de…**\n-Front : JS, React.js (Next.js), Vue (Nuxt.js), Angular\n-Back : Node (Express, Koa, Hapi...)\n-Et autres RxJS, Redux, Vuex, Graphql, Mocha...\n\n**Et que toi aussi tu exiges du code de qualité…**\n\n-Maîtrise des bonnes pratiques du développement et de conception\n-Cross-test, code review, TDD/BDD, clean code..\n\nAlors tu as ta place chez Linkvalue !",
      "descriptionPreview": "Mission\nNous t’attendons **à Lille** pour un poste de **Développeur FullStack JS** sur lequel tu seras force de proposition et tu mettras à profit :\n\n* **Ton expertise technique** en accompagnant nos ",
      "details": {
        "acceptRemote": "REGULARLY",
        "contract": "permanent",
        "currency": "€",
        "places": {
          "ChIJD7fiBh9u5kcRYJSMaMOCCwQ": {
            "position": 1,
            "updatedAt": 1614696858993
          },
          "ChIJEW4ls3nVwkcRYGNkgT7xCgQ": {
            "position": 0,
            "updatedAt": 1611738338334
          },
          "ChIJl4foalHq9EcR8CG75CqrCAQ": {
            "position": 2,
            "updatedAt": 1614696866782
          }
        },
        "requiredExperience": 3,
        "requiredExperiencePro": 3,
        "start": "asap"
      },
      "helmetImageLink": "https://cdn.filestackcontent.com/gfrXsJQ9QHub1IaA3lFo",
      "inSelections": {
        "latest_jobs": 1622790179670
      },
      "lastUpdate": 1622706585479,
      "publishDate": 1622706585479,
      "seoAlias": "developpeur-fullstack-js-confirme-hf-linkvalue",
      "skillsList": [
        {
          "categoryId": "frontend",
          "id": "-M5CNXKyRIMA4Xys7zuF",
          "name": "Javascript",
          "parentTechnoId": "-M5CNXL0m7wxrwoQiI0n",
          "tags": ["programming", "language"],
          "imageUrl": "https://cdn.filestackcontent.com/6ZrIEmWRgycFn9smUNzN",
          "value": 70
        },
        {
          "categoryId": "frontend",
          "id": "-M5CNXKzkSuZBbUdiuF0",
          "name": "React",
          "oldSVGUrl": "https://cdn.filestackcontent.com/nqg4oH2SlWw2g0gakzQg",
          "parentTechnoId": "-M5CNXL0m7wxrwoQiI0n",
          "tags": ["framework"],
          "imageUrl": "https://cdn.filestackcontent.com/KKn2Q218TaeF51faVayy",
          "value": 70
        },
        {
          "categoryId": "frontend",
          "id": "-M5CNXKzkSuZBbUdiuFG",
          "name": "vueJS",
          "oldSVGUrl": "https://cdn.filestackcontent.com/DnFx4tSuuLPLZ7irnuWA",
          "parentTechnoId": "-M5CNXKyRIMA4Xys7zuF",
          "tags": ["framework"],
          "imageUrl": "https://cdn.filestackcontent.com/qXCCT75xQk6lQXMic8zt",
          "value": 70
        },
        {
          "categoryId": "backend",
          "id": "-M5CNXKzkSuZBbUdiuFE",
          "name": "Typescript",
          "parentTechnoId": "-M5CNXKyRIMA4Xys7zuF",
          "tags": ["programming", "transpiler"],
          "imageUrl": "https://cdn.filestackcontent.com/VIF9M8ebQjukQ4oqAkdP",
          "value": 70
        },
        {
          "categoryId": "frontend",
          "id": "-M5CNXL0m7wxrwoQiI0w",
          "name": "Angular",
          "parentTechnoId": "-M5CNXKyRIMA4Xys7zuF",
          "tags": ["tag n°1", "tag n°2", "tag n°3"],
          "imageUrl": "https://cdn.filestackcontent.com/tBUZg8ViRQqokhDJwCHC",
          "value": 70
        },
        {
          "categoryId": "backend",
          "id": "-M5CNXKzkSuZBbUdiuEu",
          "name": "NodeJS",
          "oldSVGUrl": "https://cdn.filestackcontent.com/7MhNX9D9TnSlvNFxgGWD",
          "parentTechnoId": "-M5CNXKyRIMA4Xys7zuF",
          "tags": ["javascript", "language"],
          "imageUrl": "https://cdn.filestackcontent.com/onSEtBpQpmAtQP2N9fFL",
          "value": 70
        }
      ],
      "status": "JOB_PUBLISHED",
      "title": "Développeur Fullstack JS Confirmé (H/F)",
      "smallCompany": {
        "companyName": "linkvalue",
        "logoImageLink": "https://cdn.filestackcontent.com/B7rNNgwdTAe3JFWVLPis",
        "id": "Qjh199EAUYc9eDlGdDbKNXdHv072",
        "seoAlias": "linkvalue",
        "gallery": {
          "imageImageLink": "https://cdn.filestackcontent.com/ho6Y2ag1SqW5MNFTvwWW"
        }
      },
      "_geoloc": [
        {
          "lat": 48.856614,
          "lng": 2.352222
        },
        {
          "lat": 50.62925,
          "lng": 3.057256
        },
        {
          "lat": 45.764043,
          "lng": 4.835659
        }
      ],
      "id": "-MS24k3QJFDHifJEFnxU"
    },
    {
      "companyId": "Qjh199EAUYc9eDlGdDbKNXdHv072",
      "createdAt": 1614180623871,
      "creatorId": "boOqHXulMrYZr7pd08p6cBrKPwF2",
      "description": "Tech your chance !\nNous t'attendons à Lyon pour un poste de Développeur PHP/Symfony Confirmé(e) sur lequel tu seras force de proposition et tu mettras à profit :\n\n* ton expertise technique en accompagnant nos clients sur des problématiques allant de la gestion de cache à la mise en place d'architectures micro-services/événementielles ;\n\n* ton envie de partager tes connaissances en challengeant et en étant challengé par ton équipe. Tu seras garant des bonnes pratiques de dev (intégration continue, tests, agilité...) et tu auras également la possibilité de créer des modules de formation dans le cadre du Training (coaching et préparation de certification Symfony, initiation au TDD...) ;\n\n* ta connaissance métier acquise dans un environnement industrialisé, afin de penser et implémenter des solutions innovantes. \n\n---\nNotre Stack : PHP7, Symfony4, RabbitMQ, Redis, MemCache, Varnish, PHP FPM, Nginx, PHPUnit, Behat...\n---\n\nWe did it ! Nous avons participé au projet de modernisation d'un acteur du e-commerce français :\n\n* mise en place d'une architecture micro-services en Symfony4, et de nouvelles fonctionnalités de recherche avec ElasticSearch,\n* migration du code Symfony3 vers Symfony4, couplée à une refonte du front en ReactJS,\n* implantation d'une méthodologie de travail agile par Linkvalue,\n* mise en place des bonnes pratiques de TDD et BDD,\n* installation d'un environnement Docker et d'une base de données NoSQL, pour absorber les fortes charges.\n\nProfil recherché\nSi tu as :\n\n- Une solide expérience autour des technos PHP / Symfony\n- Une appétence pour la veille technologique\n- Une sensibilité pour le travail d’équipe et la méthode Agile. \n\nEt que tu exiges du code de qualité…\n- Maîtrise des bonnes pratiques du développement et de conception.\n- Cross-test, code review, TDD/BDD, clean code...\n\nAlors tu as ta place chez Linkvalue !\n\nEt si tu penses ne pas l'avoir pour une raison ou pour une autre, contactes-nous quand même, nous pourrons en discuter autour d'un ☕",
      "descriptionPreview": "Tech your chance ! Nous t'attendons à Lyon pour un poste de Développeur PHP/Symfony Confirmé(e) sur lequel tu seras force de proposition et tu mettras à profit :  * ton expertise technique en accompagnant nos clients sur des problématiques allant de la gestion de cache à la mise en place d'architectures micro-services/événementielles ;  * ton envie de partager tes connaissances en challengeant et ",
      "details": {
        "acceptRemote": "REGULARLY",
        "contract": "permanent",
        "currency": "€",
        "places": {
          "ChIJD7fiBh9u5kcRYJSMaMOCCwQ": {
            "position": 1,
            "updatedAt": 1614696920080
          },
          "ChIJEW4ls3nVwkcRYGNkgT7xCgQ": {
            "position": 2,
            "updatedAt": 1614696928808
          },
          "ChIJl4foalHq9EcR8CG75CqrCAQ": {
            "position": 0,
            "updatedAt": 1614180118289
          }
        },
        "requiredExperience": 3,
        "requiredExperiencePro": 3,
        "start": "asap"
      },
      "helmetImageLink": "https://cdn.filestackcontent.com/1G6MyYeuTAyJdvwFoLG1",
      "inSelections": {
        "latest_jobs": 1622790182599
      },
      "lastUpdate": 1622706584521,
      "publishDate": 1622706584521,
      "seoAlias": "developpeur-phpsymfony-confirme-hf-linkvalue",
      "skillsList": [
        {
          "categoryId": "backend",
          "id": "-M5CNXKzkSuZBbUdiuEv",
          "name": "PHP",
          "oldSVGUrl": "https://cdn.filestackcontent.com/eTxIlJh0RgGuszJ6VBA1",
          "parentTechnoId": "-M5CNXL-f1z-fEZ3rc-X",
          "tags": ["programming", "language"],
          "imageUrl": "https://cdn.filestackcontent.com/NjHy5aiASQCvAYNTZs1R",
          "value": 70
        },
        {
          "categoryId": "backend",
          "id": "-M5CNXKzkSuZBbUdiuFA",
          "name": "Symfony",
          "oldSVGUrl": "https://cdn.filestackcontent.com/fHohshazScuSz0JmddhG",
          "parentTechnoId": "-M5CNXKzkSuZBbUdiuEv",
          "tags": ["framework"],
          "imageUrl": "https://cdn.filestackcontent.com/e6SD3ndcQouZdZiAT3oX",
          "value": 70
        }
      ],
      "status": "JOB_PUBLISHED",
      "title": "Développeur PHP/Symfony Confirmé H/F",
      "smallCompany": {
        "companyName": "linkvalue",
        "logoImageLink": "https://cdn.filestackcontent.com/B7rNNgwdTAe3JFWVLPis",
        "id": "Qjh199EAUYc9eDlGdDbKNXdHv072",
        "seoAlias": "linkvalue",
        "gallery": {
          "imageImageLink": "https://cdn.filestackcontent.com/ho6Y2ag1SqW5MNFTvwWW"
        }
      },
      "_geoloc": [
        {
          "lat": 48.856614,
          "lng": 2.352222
        },
        {
          "lat": 50.62925,
          "lng": 3.057256
        },
        {
          "lat": 45.764043,
          "lng": 4.835659
        }
      ],
      "id": "-MUJcQx-04oUBUKiSvIR"
    },
    {
      "companyId": "Qjh199EAUYc9eDlGdDbKNXdHv072",
      "creatorId": "boOqHXulMrYZr7pd08p6cBrKPwF2",
      "description": "Missions\nNous t’attendons à Lille pour occuper un poste inédit chez Linkvalue : Partner Tech Java !\n\nTu seras force de proposition et tu mettras à profit :\n- Ta connaissance métier et ton âme d’entrepreneur , en contribuant à la co-construction de l’expertise Java de Linkvalue et à son développement commercial en soutien aux équipes Business.\n\n- Ton expertise technique en accompagnant nos clients sur des projets de développement from scratch ou sur des stratégies de migration, d’évolution… Tu participeras aussi au recrutement des futurs Partners Java en réalisant les entretiens d’évaluation technique.\n\n- Ton envie de partager tes connaissances en challengeant et en étant challengé par ton équipe. Tu es garant des bonnes pratiques de dev (intégration continue, tests, agilité…) et tu as également la possibilité de créer des modules de formation dans le cadre du Training.\n\n- Et si tu te sens l’âme d’un speaker, tu peux organiser des conférences, fédérer et animer la future communauté Java chez Linkvalue !\n\n\nProfil recherché\nSi tu as :\n\n- Une expérience d’au moins trois ans autour des technos Java\n- Une appétence pour la veille technologique\n- Une sensibilité pour le travail d’équipe et la méthode Agile.\n\nEt que tu as déjà pu côtoyer l'écosystème Java (version 8 minimum) côté :\n- Frameworks : spring, gwt, quarkus…\n- Serveurs : apache tomcat, azure devops, glassfish ou websphere par exemple\n- BDD : MySQL, Oracle...\n- Moteurs de recherche : Elastic search, Solar...\n- Outils : gradle, SVN, git, gitlab C/I, maven, nexus, jenkins, sonarqube…\n\nEt que toi aussi tu exiges du code de qualité…\n- Maîtrise des bonnes pratiques du développement et de conception.\n- Cross-test, code review, TDD/BDD, clean code...\n\nAlors tu as ta place chez Linkvalue !\n\nEt si tu penses ne pas l'avoir pour une raison ou pour une autre, contactes-nous quand même, nous pourrons en discuter autour d'un ☕",
      "descriptionPreview": "Missions Nous t’attendons à Lille pour occuper un poste inédit chez Linkvalue : Partner Tech Java !\n Tu seras force de proposition et tu mettras à profit : - Ta connaissance métier et ton âme d’entrepreneur , en contribuant à la co-construction de l’expertise Java de Linkvalue et à son développement commercial en soutien aux équipes Business.\n - Ton expertise technique en accompagnant nos clients ",
      "details": {
        "acceptRemote": "REGULARLY",
        "contract": "permanent",
        "currency": "€",
        "places": {
          "ChIJEW4ls3nVwkcRYGNkgT7xCgQ": {
            "position": 0,
            "updatedAt": 1610988858255
          }
        },
        "requiredExperience": 3,
        "requiredExperiencePro": 3,
        "start": "asap"
      },
      "helmetImageLink": "https://cdn.filestackcontent.com/mVU2oARrRC2zsqyMxP13",
      "inSelections": {
        "latest_jobs": 1622790181043
      },
      "lastUpdate": 1622706579784,
      "publishDate": 1622706579784,
      "seoAlias": "developpeur-java-confirme-hf-linkvalue",
      "skillsList": [
        {
          "categoryId": "backend",
          "id": "-M5CNXKyRIMA4Xys7zuD",
          "name": "Java",
          "oldSVGUrl": "https://cdn.filestackcontent.com/GmEvX5SSUKbXNZDjkLKa",
          "tags": ["programming", "language"],
          "imageUrl": "https://cdn.filestackcontent.com/LietCzaSTEmfZTdvgpjC",
          "value": 70
        },
        {
          "categoryId": "backend",
          "id": "-M5CNXL1Gm6J_sIkj1uy",
          "name": "Spring",
          "parentTechnoId": "-M5CNXKyRIMA4Xys7zuD",
          "imageUrl": "https://cdn.filestackcontent.com/s8R07DQnSKSuwzdP1JTO",
          "value": 70
        },
        {
          "categoryId": "backend",
          "id": "-M5CNXL1Gm6J_sIkj1uz",
          "name": "Spring Boot",
          "parentTechnoId": "-M5CNXKyRIMA4Xys7zuD",
          "tags": ["Spring Boot"],
          "imageUrl": "https://cdn.filestackcontent.com/4DSbQFonR1man5U9pHXj",
          "value": 70
        },
        {
          "categoryId": "utils",
          "id": "-M5CNXKyRIMA4Xys7zu5",
          "name": "Git",
          "oldSVGUrl": "https://cdn.filestackcontent.com/NV7nar6ZRrC5zrIGO85h",
          "tags": ["version-control"],
          "imageUrl": "https://cdn.filestackcontent.com/WjA6qId8QvWLa0iW00sL",
          "value": 70
        },
        {
          "categoryId": "utils",
          "id": "-M5CNXKyRIMA4Xys7zu7",
          "name": "Gitlab",
          "oldSVGUrl": "https://cdn.filestackcontent.com/sZj7U0GlQfOjfEhuah7d",
          "tags": ["version-control"],
          "imageUrl": "https://cdn.filestackcontent.com/g8GexytToiPahu9Q7vSA",
          "value": 70
        }
      ],
      "status": "JOB_PUBLISHED",
      "title": "Développeur Java Confirmé H/F",
      "smallCompany": {
        "companyName": "linkvalue",
        "logoImageLink": "https://cdn.filestackcontent.com/B7rNNgwdTAe3JFWVLPis",
        "id": "Qjh199EAUYc9eDlGdDbKNXdHv072",
        "seoAlias": "linkvalue",
        "gallery": {
          "imageImageLink": "https://cdn.filestackcontent.com/ho6Y2ag1SqW5MNFTvwWW"
        }
      },
      "_geoloc": [
        {
          "lat": 50.62925,
          "lng": 3.057256
        }
      ],
      "id": "-MRLPjyHeK1Er9QMmt1b"
    },
    {
      "companyId": "9hbdIhvYCga9H9owGkNss9R4Kj42",
      "createdAt": 1622639747233,
      "creatorId": "9hbdIhvYCga9H9owGkNss9R4Kj42",
      "description": "Mission\nVotre mission, si vous l'acceptez, sera de :\nVous travaillez sur les sites de nos clients e-commerçants.  Vos missions consisteront à :\nParticiper à l’accompagnement des clients dans la conception de leurs sites,\nEffectuer des développements spécifiques ou des modules sur Prestashop,\nCréer les thèmes et intégrer les maquettes,\nPrendre en charge le développement des outils jusqu’à la mise en ligne,\nGérer la maintenance évolutive des applications et l’intégration de modules supplémentaires,\nVous travaillez en équipe sous la responsabilité d’un·e chef·fe de projet. \nLes technologies et méthodes utilisées \nHTML/CSS (+responsive)\nJavaScript/Jquery\nPHP, modèle MVC\nSQL\nGIT\nSolutions E-commerce : Prestashop (dernières versions) \n\nProfil recherché\nVous pensez être apte à réaliser la mission ? Vous êtes la personne que l'on recherche !\nVous vous intéressez au e-commerce et à ses spécificités (gestion du catalogue et des stocks, logistique transporteurs, intégration marketplaces, configuration de produits, …).  Doté·e de bonnes capacités d’analyse et d’écoute, vous parvenez à comprendre rapidement les enjeux et besoins des e-commerçants. De plus, vous:\nMaîtrisez PHP, SQL\nAvez la connaissance de ,HTML/CSS, JavaScript et ses bibliothèques..\nAvez une connaissance de Prestashop ou d’outils e-commerce.\nConnaissez le principe du CRUD et le design pattern MVC.\nÊtes à l’aise avec l’utilisation d’APIs.\nÊtes familier·e des bonnes pratiques de développement et l’optimisation.\nÊtes méthodique, organisé·e, rigoureux·euse, et autonome, vous aimez travailler en équipe et partager vos expériences et acquis.\nLes plus :\nSymfony\nDocker\nEnvironnement Apache Mysql PHP\nLinux\nComposer\nNPM\nDesign patterns\nCréation d’API\nDevOps\nMaîtrise de l’anglais\nphpStorm\nMysql Workbench\nAdobe\nServices et produits Google ",
      "descriptionPreview": "Mission Votre mission, si vous l'acceptez, sera de : Vous travaillez sur les sites de nos clients e-commerçants.  Vos missions consisteront à : Participer à l’accompagnement des clients dans la conception de leurs sites, Effectuer des développements spécifiques ou des modules sur Prestashop, Créer les thèmes et intégrer les maquettes, Prendre en charge le développement des outils jusqu’à la mise e",
      "details": {
        "acceptRemote": "OCCASIONALLY",
        "contract": "permanent",
        "currency": "€",
        "places": {
          "ChIJCwNIbgwow0cRkGZkgT7xCgQ": {
            "position": 0,
            "updatedAt": 1622641241557
          }
        },
        "requiredExperience": 1,
        "requiredExperiencePro": 1,
        "salary": "26k ➡ 0k",
        "start": "asap"
      },
      "helmetImageLink": "https://cdn.filestackcontent.com/3ghyA73S8ybB3GOvvS9e",
      "inSelections": {
        "latest_jobs": 1622705588693
      },
      "lastUpdate": 1622641241558,
      "publishDate": 1622639757943,
      "seoAlias": "developpeur-back-end-prestashop-hf-it-room",
      "skillsList": [
        {
          "categoryId": "utils",
          "id": "-M5CNXKyRIMA4Xys7zu5",
          "name": "Git",
          "oldSVGUrl": "https://cdn.filestackcontent.com/NV7nar6ZRrC5zrIGO85h",
          "tags": ["version-control"],
          "imageUrl": "https://cdn.filestackcontent.com/WjA6qId8QvWLa0iW00sL",
          "value": 70
        },
        {
          "categoryId": "ops",
          "id": "-M5CNXKyRIMA4Xys7ztz",
          "name": "Docker",
          "oldSVGUrl": "https://cdn.filestackcontent.com/ilJ1ZdFuRoqWOPev7QCz",
          "tags": ["platform", "deploy"],
          "imageUrl": "https://cdn.filestackcontent.com/e1wA6stoRkqcCoLKHoog",
          "value": 70
        },
        {
          "categoryId": "backend",
          "id": "-M5CNXKzkSuZBbUdiuEv",
          "name": "PHP",
          "oldSVGUrl": "https://cdn.filestackcontent.com/eTxIlJh0RgGuszJ6VBA1",
          "parentTechnoId": "-M5CNXL-f1z-fEZ3rc-X",
          "tags": ["programming", "language"],
          "imageUrl": "https://cdn.filestackcontent.com/NjHy5aiASQCvAYNTZs1R",
          "value": 70
        },
        {
          "categoryId": "frontend",
          "id": "-M5CNXL-f1z-fEZ3rc-W",
          "name": "Prestashop",
          "parentTechnoId": "-M5CNXKzkSuZBbUdiuEv",
          "tags": ["store", "eshop"],
          "imageUrl": "https://cdn.filestackcontent.com/04YUjrdTT1yeqj8kOxO4",
          "value": 70
        },
        {
          "categoryId": "data",
          "id": "-M5CNXL-f1z-fEZ3rc-U",
          "name": "SQL",
          "tags": ["database", "php"],
          "imageUrl": "https://cdn.filestackcontent.com/01Vr9vuKTGqaswneE45A",
          "value": 70
        }
      ],
      "status": "JOB_PUBLISHED",
      "title": "Développeur Back-end Prestashop H/F",
      "smallCompany": {
        "companyName": "IT-Room",
        "logoImageLink": "https://cdn.filestackcontent.com/7cJPK4XmTRaXyIsrLaiM",
        "id": "9hbdIhvYCga9H9owGkNss9R4Kj42",
        "seoAlias": "it-room",
        "gallery": {
          "imageImageLink": "https://cdn.filestackcontent.com/TsbAEhvVTQm7OmMEPtgA"
        }
      },
      "_geoloc": [
        {
          "lat": 50.654867,
          "lng": 3.18881
        }
      ],
      "id": "-MbBpZtjBG7eSda2neJr"
    },
    {
      "companyId": "9hbdIhvYCga9H9owGkNss9R4Kj42",
      "creatorId": "9hbdIhvYCga9H9owGkNss9R4Kj42",
      "description": "Votre mission, si vous l'acceptez, sera de :\n\nDévelopper des sites internet par le biais du CMS WordPress :\n\n • Installation et modification de thèmes WordPress,\n • Configuration et développement de plugins sur mesure\n • Intégration de contenus\n • Gestion des bases de données,\n • Modification HTML, CSS, JS et PHP si nécessaire\n • Construire et requêter des API Rest\n • Maintenance des sites web créés, mise à jour logiciel du CMS\n • Type d'emploi : CDI\n\n\nVous pensez être apte à réaliser la mission ? Vous êtes la personne que l'on recherche !\n  Vous maîtrisez le CMS WordPress, PHP et MySQL, HTML, CSS et JavaScript.\n  Vous maîtrisez les API et interfaçages.\n  Vous avez déjà développé des plugins sur mesure.\n  Vous connaissez les logiciels de la suite Adobe nécessaires à l’optimisation du contenu visuel.\n  Vous disposez d’une sensibilité UX et connaissez les bonnes pratiques en matière de référencement naturel.\n  Vous êtes autonome, rigoureux(se), curieux(se) et force de proposition.\n  Vous aimez travailler en équipe et partager vos expériences et acquis.\nEnvie de rejoindre notre équipe dynamique et collaborative et de grandir avec nous ? Transmettez votre candidature à recrutement@itroom.fr.",
      "descriptionPreview": "Votre mission, si vous l'acceptez, sera de :  Développer des sites internet par le biais du CMS WordPress :   • Installation et modification de thèmes WordPress,  • Configuration et développement de plugins sur mesure  • Intégration de contenus  • Gestion des bases de données,  • Modification HTML, CSS, JS et PHP si nécessaire  • Construire et requêter des API Rest  • Maintenance des sites web cré",
      "details": {
        "acceptRemote": "NEVER",
        "contract": "permanent",
        "currency": "€",
        "places": {
          "ChIJCwNIbgwow0cRkGZkgT7xCgQ": {
            "position": 0,
            "updatedAt": 1551370841810
          }
        },
        "requiredExperience": 1,
        "requiredExperiencePro": 0,
        "salary": "26k ➡ 0k",
        "start": "asap"
      },
      "helmetImageLink": "https://cdn.filestackcontent.com/HyvAdc9AR9uJ0PJfApxr",
      "lastUpdate": 1622639862080,
      "publishDate": 1622638931862,
      "seoAlias": "undefined-it-room",
      "skillsList": [
        {
          "name": "Wordpress",
          "value": 90
        },
        {
          "name": "PHP",
          "value": 90
        },
        {
          "name": "HTML5",
          "value": 90
        },
        {
          "name": "CSS3",
          "value": 90
        },
        {
          "name": "Javascript",
          "value": 80
        },
        {
          "name": "SEO",
          "value": 80
        }
      ],
      "status": "JOB_PUBLISHED",
      "title": "Développeur WordPress (H/F)",
      "smallCompany": {
        "companyName": "IT-Room",
        "logoImageLink": "https://cdn.filestackcontent.com/7cJPK4XmTRaXyIsrLaiM",
        "id": "9hbdIhvYCga9H9owGkNss9R4Kj42",
        "seoAlias": "it-room",
        "gallery": {
          "imageImageLink": "https://cdn.filestackcontent.com/TsbAEhvVTQm7OmMEPtgA"
        }
      },
      "_geoloc": [
        {
          "lat": 50.654867,
          "lng": 3.18881
        }
      ],
      "id": "-LZACzARIUa5dYySlW3R"
    },
    {
      "companyId": "9hbdIhvYCga9H9owGkNss9R4Kj42",
      "createdAt": 1622629294164,
      "creatorId": "9hbdIhvYCga9H9owGkNss9R4Kj42",
      "description": "Votre mission, si vous l'acceptez, sera de :\nDévelopper des sites e-commerce ou sites internet sur la base d’un cahier des charges détaillé (ou de spécifications détaillées),\nConcevoir et développer des applications complètes (Intranet, extranet, système d’information complet, site internet, module  spécifique),\nPrendre en charge le développement des outils jusqu’à la mise en ligne,\nÊtre amené(e) à gérer la maintenance évolutive des applications (TMA) et l’intégration de modules supplémentaires.\nType d'emploi : CDI\n\nVous pensez être apte à réaliser la mission ? Vous êtes la personne que l'on recherche !\n\n • Vous maîtrisez le développement PHP7 et les dernières versions de Symfony , API Platform et MySQL.\n • Vous avez une bonne connaissance des échanges de flux de données (flux XML, EDI, Web Services).\n\nVous avez une connaissance de : \n • Gitlab et Gitlab CI\n • Docker\n • Elasticsearch\n\nSont un plus la connaissance de :\n • Apache\n • Varnish\n • Des certificats de sécurité HTTPS\n\n•Vous êtes autonome, rigoureux(se), curieux(se) et force de proposition.\n•Vous aimez travailler en équipe et partager vos expériences et acquis.\n\n\nEnvie de rejoindre notre équipe dynamique et collaborative et de grandir avec nous?\nN'hésitez plus, et rejoignez-nous et transmettez votre candidature à recrutement@itroom.fr\n",
      "descriptionPreview": "Votre mission, si vous l'acceptez, sera de : Développer des sites e-commerce ou sites internet sur la base d’un cahier des charges détaillé (ou de spécifications détaillées), Concevoir et développer des applications complètes (Intranet, extranet, système d’information complet, site internet, module  spécifique), Prendre en charge le développement des outils jusqu’à la mise en ligne, Être amené(e) ",
      "details": {
        "acceptRemote": "NEVER",
        "contract": "permanent",
        "places": {
          "ChIJCwNIbgwow0cRkGZkgT7xCgQ": {
            "position": 0,
            "updatedAt": 1551370841810
          }
        },
        "requiredExperience": 2,
        "requiredExperiencePro": 0,
        "salary": "Non renseigné",
        "start": "ASAP"
      },
      "helmetImageLink": "https://cdn.filestackcontent.com/79qdm2rSIejy0T5QPY8H",
      "lastUpdate": 1622638729879,
      "publishDate": 1622638527743,
      "seoAlias": "developpeur-web-symfony-hf-it-room",
      "skillsList": [
        {
          "name": "PHP",
          "value": 90
        },
        {
          "name": "Symfony",
          "value": 90
        },
        {
          "name": "API Platform",
          "value": 90
        },
        {
          "name": "Mysql",
          "value": 90
        },
        {
          "name": "Gitlab",
          "tags": ["version-control"],
          "url": "https://firebasestorage.googleapis.com/v0/b/jechercheundev.appspot.com/o/devicons%2Ficons%2Fgitlab.svg?alt=media&token=26719d5f-5443-46d7-a0fa-f692578c6953",
          "value": 70,
          "versions": {
            "font": ["plain", "plain-wordmark"],
            "svg": ["original", "original-wordmark", "plain", "plain-wordmark"]
          }
        },
        {
          "name": "Docker",
          "tags": ["platform", "deploy"],
          "url": "https://firebasestorage.googleapis.com/v0/b/jechercheundev.appspot.com/o/devicons%2Ficons%2Fdocker.svg?alt=media&token=7d2aff74-abd3-4d7d-bf1e-7e00cfeefd01",
          "value": 70,
          "versions": {
            "font": ["plain", "plain-wordmark"],
            "svg": ["original", "original-wordmark", "plain", "plain-wordmark"]
          }
        },
        {
          "name": "Elastic search",
          "tags": ["tag n°1", "tag n°2", "tag n°3"],
          "url": "https://firebasestorage.googleapis.com/v0/b/jechercheundev.appspot.com/o/devicons%2Ficons%2Felastic%20search.svg?alt=media&token=33f5b731-3a65-458d-9800-e753fe8af8e9",
          "value": 70
        },
        {
          "name": "Apache",
          "tags": ["php"],
          "url": "https://firebasestorage.googleapis.com/v0/b/jechercheundev.appspot.com/o/devicons%2Ficons%2Fapache.svg?alt=media&token=0d2dcea5-93cf-4de3-b9ea-137986857f54",
          "value": 70,
          "versions": {
            "font": ["plain", "plain-wordmark", "line", "line-wordmark"],
            "svg": [
              "original",
              "original-wordmark",
              "plain",
              "plain-wordmark",
              "line",
              "line-wordmark"
            ]
          }
        }
      ],
      "status": "JOB_PUBLISHED",
      "team": {
        "management": "Nos projets sont menés dans l'agilité avec les rituels associés.",
        "technical": "L'équipe est composée d'expert·e·s , d'expérimenté·e·s et de débutant·e·s.\nVous trouverez donc votre mentor et pourrez aussi transmettre votre savoir-faire."
      },
      "title": "Développeur web Symfony (H/F)",
      "smallCompany": {
        "companyName": "IT-Room",
        "logoImageLink": "https://cdn.filestackcontent.com/7cJPK4XmTRaXyIsrLaiM",
        "id": "9hbdIhvYCga9H9owGkNss9R4Kj42",
        "seoAlias": "it-room",
        "gallery": {
          "imageImageLink": "https://cdn.filestackcontent.com/TsbAEhvVTQm7OmMEPtgA"
        }
      },
      "_geoloc": [
        {
          "lat": 50.654867,
          "lng": 3.18881
        }
      ],
      "id": "-MbBEX35w4aYbqJ05-J2"
    },
    {
      "companyId": "cPQ5ULt4Ndaf3UymJ6xuzchjRj63",
      "createdAt": 1620217791423,
      "creatorId": "cPQ5ULt4Ndaf3UymJ6xuzchjRj63",
      "description": "Dans le cadre de la digitalisation du Groupe Projex, nous recherchons un(e) développeur(se) web en CDI pour étoffer et mener notre petite équipe. Nous travaillons aujourd'hui sur de nombreux projets internes, principalement web en reactjs/nodejs.  \n\nMissions \nAccompagner le conseil de digitalisation du groupe dans l'élaboration de la stratégie de transformation numérique.\nProposer des solutions de développements.\nOrganiser le processus de conception et participer au développement des solutions. \nAssurer la maintenance et la mise à jour des services développés.\nProfil recherché\nCompétences techniques : \nVous maîtrisez l’écosystème Javascript/Typescript et plus particulièrement React, Nodejs.\nVous avez des connaissances en sécurité, DevOps, Unix et les bases en réseaux.\nVous maîtrisez les bases de données SQL et NoSQL et les API REST, GraphQL n'ont plus de secrets pour vous.\nVous maîtrisez et utilisez Git au quotidien.\nAutres compétences :  \nVous êtes créatif/ve dans la recherche de solutions et vous aimez les challenges techniques.\nVous avez l’esprit d’équipe, de synthèse, et savez faire preuve de bon sens.\nVous effectuez une veille technologique régulière.\nVous maîtrisez l’anglais technique.\nPoints bonus : \nDes connaissances en C# et .Net\nDes connaissances dans d’autres frameworks.\nVous vous reconnaissez, ou presque, dans ce profil ? Vous êtes force de propositions, féru de challenges et passionné par le digital ? Rejoignez-nous !  ",
      "descriptionPreview": "Dans le cadre de la digitalisation du Groupe Projex, nous recherchons un(e) développeur(se) web en CDI pour étoffer et mener notre petite équipe. Nous travaillons aujourd'hui sur de nombreux projets internes, principalement web en reactjs/nodejs.   \nMissions  Accompagner le conseil de digitalisation du groupe dans l'élaboration de la stratégie de transformation numérique. Proposer des solutions de",
      "details": {
        "acceptRemote": "REGULARLY",
        "contract": "permanent",
        "currency": "€",
        "places": {
          "ChIJM-LSQcrXwkcRWYfWVM7rqO0": {
            "position": 0,
            "updatedAt": 1620208786033
          }
        },
        "requiredExperience": 3,
        "requiredExperiencePro": 5,
        "salary": "38k ➡ 52k",
        "start": "asap"
      },
      "helmetImageLink": "https://cdn.filestackcontent.com/GxpVmU8TjW7W9Guy6vJ3",
      "lastUpdate": 1622556788834,
      "publishDate": 1622556788834,
      "seoAlias": "developpeurse-web-full-stack-senior-groupe-projex",
      "skillsList": [
        {
          "categoryId": "backend",
          "id": "-M5CNXKzkSuZBbUdiuEu",
          "name": "NodeJS",
          "oldSVGUrl": "https://cdn.filestackcontent.com/7MhNX9D9TnSlvNFxgGWD",
          "parentTechnoId": "-M5CNXKyRIMA4Xys7zuF",
          "tags": ["javascript", "language"],
          "imageUrl": "https://cdn.filestackcontent.com/onSEtBpQpmAtQP2N9fFL",
          "value": 70
        },
        {
          "categoryId": "frontend",
          "id": "-M5CNXKzkSuZBbUdiuF0",
          "name": "React",
          "oldSVGUrl": "https://cdn.filestackcontent.com/nqg4oH2SlWw2g0gakzQg",
          "parentTechnoId": "-M5CNXL0m7wxrwoQiI0n",
          "tags": ["framework"],
          "imageUrl": "https://cdn.filestackcontent.com/KKn2Q218TaeF51faVayy",
          "value": 70
        },
        {
          "categoryId": "system",
          "id": "-MJCdI8fjj7cC-XmNoc-",
          "name": "Linux System",
          "tags": ["Linux"],
          "imageUrl": "https://cdn.filestackcontent.com/XzsVgd31RkXGr5bmm6TB",
          "value": 70
        },
        {
          "categoryId": "ops",
          "id": "-M5CNXKyRIMA4Xys7ztz",
          "name": "Docker",
          "oldSVGUrl": "https://cdn.filestackcontent.com/ilJ1ZdFuRoqWOPev7QCz",
          "tags": ["platform", "deploy"],
          "imageUrl": "https://cdn.filestackcontent.com/e1wA6stoRkqcCoLKHoog",
          "value": 70
        },
        {
          "categoryId": "data",
          "id": "-M5CNXKzkSuZBbUdiuEy",
          "name": "PostgreSQL",
          "tags": ["database"],
          "imageUrl": "https://cdn.filestackcontent.com/o0yFHIQyQTOVhoi6O1V7",
          "value": 70
        },
        {
          "categoryId": "backend",
          "id": "-M5CNXKxy9oNYmEz-cT9",
          "name": "C#",
          "oldSVGUrl": "https://cdn.filestackcontent.com/MsryqfXIQo6WRT7GlrPp",
          "parentTechnoId": "-M5CNXKyRIMA4Xys7zu0",
          "tags": ["language"],
          "imageUrl": "https://cdn.filestackcontent.com/d99TZI3yRCm9PwVmsikB",
          "value": 70
        }
      ],
      "status": "JOB_PUBLISHED",
      "title": "Développeur/se Web Full Stack",
      "smallCompany": {
        "companyName": "Groupe Projex",
        "logoImageLink": "https://cdn.filestackcontent.com/EIh3glJrTdKE7jKWv8GI",
        "id": "cPQ5ULt4Ndaf3UymJ6xuzchjRj63",
        "seoAlias": "groupe-projex",
        "gallery": {
          "imageImageLink": "https://cdn.filestackcontent.com/isowTmswQyyL4WnkZINP"
        }
      },
      "_geoloc": [
        {
          "lat": 50.623252,
          "lng": 3.144265
        }
      ],
      "id": "-MZvxbY7MIqSaTmrfi-Q"
    },
    {
      "companyId": "0oGeXMZ6AjY2tbzwRqxumrfv6TB3",
      "createdAt": 1618241068966,
      "creatorId": "0oGeXMZ6AjY2tbzwRqxumrfv6TB3",
      "description": "Ta mission si tu l'acceptes : \n* Tu intègres une communauté JAVA, en tant que Développeur JAVA/J2EE. \n* Rattaché à un chef de projet et entouré d'experts techniques, tu interviens sur différents périmètres : \nL'étude, le chiffrage, les spécifications fonctionnelles, techniques.\nLe développement Front et Back End.\nLes revues de codes et supports techniques.\nTel spiderman, tu tisses ta toile de compétences : \nJAVA, Spring Boot, Angular, VueJS, React, Hibernate, SQL, Docker/Kubernetes, CI/CD...\n\nSi tu as reconnu la mission de tes rêves dans ce descriptif, enfile ta cape et rejoins-nous ! \n\nTes super-pouvoirs : \n* 1er Pouvoir : Tu as suivi une formation supérieure en informatique.\n* 2ème Pouvoir : Tu as une réelle appétence pour des sujets techniques et innovants.\n* 3ème Pouvoir : Tu es doté d'un bon relationnel, d'une curiosité d'esprit et apprécie le travail d'équipe. \n\nNos super-avantages ? \n* Intégrer la communauté JAVA en tant que cadre en CDI avec un salaire en lien avec ton expérience.\n* Découvrir un management de proximité.\n* Evoluer grâce à notre plan d'accompagnement et de développement des compétences personnalisés.\n* Se déplacer principalement en métropole lilloise et au maximum dans un rayon de 40km pour tes missions.\n* Accéder à un processus de recrutement rapide.\n\nTout un package qui te sera présenté lors de ton entretien RH. \n\nAs-tu le super-profil recherché ?\nTu justifies idéalement d'une expérience d'au moins 3 à 5 ans sur un poste similaire. \n\nTu te reconnais ? Ne cherches plus et postule à cette offre ! ",
      "descriptionPreview": "Ta mission si tu l'acceptes :  * Tu intègres une communauté JAVA, en tant que Développeur JAVA/J2EE.  * Rattaché à un chef de projet et entouré d'experts techniques, tu interviens sur différents périmètres :  L'étude, le chiffrage, les spécifications fonctionnelles, techniques. Le développement Front et Back End. Les revues de codes et supports techniques. Tel spiderman, tu tisses ta toile de comp",
      "details": {
        "acceptRemote": "OCCASIONALLY",
        "contract": "permanent",
        "currency": "€",
        "places": {
          "ChIJM-LSQcrXwkcRWYfWVM7rqO0": {
            "position": 0,
            "updatedAt": 1618232227001
          }
        },
        "requiredExperience": 3,
        "requiredExperiencePro": 3,
        "start": "asap"
      },
      "helmetImageLink": "https://cdn.filestackcontent.com/JEtZuMsT46qY1PK6OUS5",
      "lastUpdate": 1622551995029,
      "publishDate": 1622551995029,
      "seoAlias": "developpeur-javaj2ee-ntico-technology",
      "skillsList": [
        {
          "categoryId": "data",
          "id": "-M5CNXL-f1z-fEZ3rc-U",
          "name": "SQL",
          "tags": ["database", "php"],
          "imageUrl": "https://cdn.filestackcontent.com/01Vr9vuKTGqaswneE45A",
          "value": 70
        },
        {
          "categoryId": "backend",
          "id": "-M5CNXL-f1z-fEZ3rc-c",
          "name": "Java JEE",
          "parentTechnoId": "-M5CNXKyRIMA4Xys7zuD",
          "tags": ["Java", "JEE", "Java EE"],
          "imageUrl": "https://cdn.filestackcontent.com/6P453fi7T5auYusJJVKt",
          "value": 70
        },
        {
          "categoryId": "frontend",
          "id": "-M5CNXL0m7wxrwoQiI0w",
          "name": "Angular",
          "parentTechnoId": "-M5CNXKyRIMA4Xys7zuF",
          "tags": ["tag n°1", "tag n°2", "tag n°3"],
          "imageUrl": "https://cdn.filestackcontent.com/tBUZg8ViRQqokhDJwCHC",
          "value": 70
        },
        {
          "categoryId": "backend",
          "id": "-M5CNXL1Gm6J_sIkj1uz",
          "name": "Spring Boot",
          "parentTechnoId": "-M5CNXKyRIMA4Xys7zuD",
          "tags": ["Spring Boot"],
          "imageUrl": "https://cdn.filestackcontent.com/4DSbQFonR1man5U9pHXj",
          "value": 70
        },
        {
          "categoryId": "cloud",
          "id": "-MF-zX85INr9X5I_nVd3",
          "name": "Google Cloud",
          "tags": ["information nuagique", "GCP", "Cloud", "google"],
          "imageUrl": "https://cdn.filestackcontent.com/vMzg102JTpCCm80t7ddk",
          "value": 70
        },
        {
          "categoryId": "data",
          "id": "-M5CNXL-f1z-fEZ3rc-b",
          "name": "NoSQL",
          "tags": ["NoSQL"],
          "imageUrl": "https://cdn.filestackcontent.com/KFLGryF7RiCv2w8k3ZOn",
          "value": 70
        }
      ],
      "status": "JOB_PUBLISHED",
      "title": "Développeur JAVA/J2EE",
      "smallCompany": {
        "companyName": "Ntico Technology",
        "logoImageLink": "https://cdn.filestackcontent.com/ZzTrSRtiRIaSl6ge3UUG",
        "id": "0oGeXMZ6AjY2tbzwRqxumrfv6TB3",
        "seoAlias": "ntico-technology",
        "gallery": {
          "imageImageLink": "https://cdn.filestackcontent.com/bfC8XVZSxGte2Tw5eUVg"
        }
      },
      "_geoloc": [
        {
          "lat": 50.623252,
          "lng": 3.144265
        }
      ],
      "id": "-MY58qbu3pfnxfOmmKEV"
    },
    {
      "companyId": "XekaPV2vd2ba81z7Js5tvDTAs2a2",
      "createdAt": 1620633652127,
      "creatorId": "XekaPV2vd2ba81z7Js5tvDTAs2a2",
      "description": "Karbon démocratise l'éco-conception auprès des industriels agroalimentaires. Nous développons un outil de visualisation et de réduction des impacts environnementaux pour chaque étape de leur production. \nMission\nVotre mission, si vous l'acceptez, sera de :\n\nDévelopper les fonctionnalités d'analyse d'impacts environnementaux\nContribuer à la qualité du produit\nEmbrasser la vision fonctionnelle de l'outil en participant à sa conception\nEffectuer une veille stratégique sur les méthodes d’analyse d’impact environnemental\nEffectuer une veille technologique  \nProfil recherché\nPrérequis : Maîtrise de Javascript et de Git.\nExpérience : minimum 3 ans en tant que développeur professionnel \n\nConvictions environnementales\nCuriosité envers les méthodes de calcul d'impacts environnementaux\nAisance et curiosité envers les technologies de Karbon\nSuper coéquipier \nEsprit pionnier  \nEntreprenant  \n\nIl faut pouvoir se rendre physiquement au bureau à Lille.\nTélétravail occasionnel ",
      "descriptionPreview": "Karbon démocratise l'éco-conception auprès des industriels agroalimentaires. Nous développons un outil de visualisation et de réduction des impacts environnementaux pour chaque étape de leur production.  Mission Votre mission, si vous l'acceptez, sera de :  Développer les fonctionnalités d'analyse d'impacts environnementaux Contribuer à la qualité du produit Embrasser la vision fonctionnelle de l'",
      "details": {
        "acceptRemote": "OCCASIONALLY",
        "contract": "permanent",
        "currency": "€",
        "places": {
          "ChIJEW4ls3nVwkcRYGNkgT7xCgQ": {
            "position": 0,
            "updatedAt": 1620633196171
          }
        },
        "requiredExperience": 3,
        "requiredExperiencePro": 3,
        "start": "asap"
      },
      "helmetImageLink": "https://cdn.filestackcontent.com/6zOnDFQUT8Wu1GUocf1g",
      "lastUpdate": 1622454446370,
      "publishDate": 1622454446370,
      "seoAlias": "developpeur-web-javascript-karbon",
      "skillsList": [
        {
          "categoryId": "frontend",
          "id": "-M5CNXKyRIMA4Xys7zuF",
          "name": "Javascript",
          "parentTechnoId": "-M5CNXL0m7wxrwoQiI0n",
          "tags": ["programming", "language"],
          "imageUrl": "https://cdn.filestackcontent.com/6ZrIEmWRgycFn9smUNzN",
          "value": 70
        },
        {
          "categoryId": "backend",
          "id": "-M5CNXKzkSuZBbUdiuEu",
          "name": "NodeJS",
          "oldSVGUrl": "https://cdn.filestackcontent.com/7MhNX9D9TnSlvNFxgGWD",
          "parentTechnoId": "-M5CNXKyRIMA4Xys7zuF",
          "tags": ["javascript", "language"],
          "imageUrl": "https://cdn.filestackcontent.com/onSEtBpQpmAtQP2N9fFL",
          "value": 70
        },
        {
          "categoryId": "frontend",
          "id": "-M5CNXKzkSuZBbUdiuF0",
          "name": "React",
          "oldSVGUrl": "https://cdn.filestackcontent.com/nqg4oH2SlWw2g0gakzQg",
          "parentTechnoId": "-M5CNXL0m7wxrwoQiI0n",
          "tags": ["framework"],
          "imageUrl": "https://cdn.filestackcontent.com/KKn2Q218TaeF51faVayy",
          "value": 70
        },
        {
          "categoryId": "backend",
          "id": "-M5CNXKzkSuZBbUdiuFE",
          "name": "Typescript",
          "parentTechnoId": "-M5CNXKyRIMA4Xys7zuF",
          "tags": ["programming", "transpiler"],
          "imageUrl": "https://cdn.filestackcontent.com/VIF9M8ebQjukQ4oqAkdP",
          "value": 70
        },
        {
          "categoryId": "backend",
          "id": "-MCuaoo8gcI4vBSZO92p",
          "name": "GraphQL",
          "oldSVGUrl": "https://cdn.filestackcontent.com/5ps84EgWR21KH4MSWATp",
          "tags": ["database", "rest", "api"],
          "imageUrl": "https://cdn.filestackcontent.com/adkU9PS06lEHMTwUhQIA",
          "value": 70
        }
      ],
      "status": "JOB_PUBLISHED",
      "title": "Développeur web JavaScript",
      "smallCompany": {
        "companyName": "Karbon",
        "logoImageLink": "https://cdn.filestackcontent.com/36S29bhSXWGWnyl8LVgO",
        "id": "XekaPV2vd2ba81z7Js5tvDTAs2a2",
        "seoAlias": "karbon",
        "gallery": {
          "imageImageLink": "https://cdn.filestackcontent.com/594IraGSvec4LlLKdR7I"
        }
      },
      "_geoloc": [
        {
          "lat": 50.62925,
          "lng": 3.057256
        }
      ],
      "id": "-M_KFtcTMfJvMdv6X8dt"
    }
  
  
 ]

jobs.forEach(function(obj) {
    db.collection("jobs").add(obj).then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
});