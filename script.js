const questions = [
    { question: "1. « Je suis une force immobile, invisible mais inébranlable dans l'esprit des voyageurs. Je ne suis ni soleil ni étoile, mais je guide ceux qui lèvent les yeux vers le ciel. Je suis la clé des cartes, et sans moi, l'ordre cède à la confusion. Qui suis-je ? »", answer: "Nord" },
    { question: "2. « On me surnomme l’étoile du berger, car je brille dans le ciel du matin ou du soir. Je ne suis pas une étoile, mais une planète, et mon nom est celui de la déesse de l’amour. Qui suis-je ? »", answer: "Vénus" },
    { question: "3. « Je suis une énigme infinie, sans début ni fin, je tourne en rond. Je relie le cercle à sa frontière, et les mathématiciens me vénèrent depuis l'Antiquité. Mon nom tient en deux lettres, mais ma valeur est sans limite. Qui suis-je ? »", answer: "PI" },
    { question: "4. « Je suis à la fois mère et foyer, abritant tout ce qui vit et respire. Je tourne sans cesse, mais tu ne le sens pas, et je voyage autour d’un astre plus grand que moi. Bleue vue de loin, je suis pourtant de mille couleurs. Sans moi, il n’y aurait ni toi, ni demain. Qui suis-je ? »", answer: "TERRE" },
    { question: "5. « Je suis une créature ancienne, fière gardienne des trésors oubliés. Mon corps est un mélange improbable, entre le roi des airs et le roi des bêtes. Majestueux et redoutable, je veille sur les mystères des légendes. Qui suis-je ? »", answer: "Griffon" },
    { question: "6. « Je voyage plus vite que tout, invisible, mais je rends tout visible. Je suis à la fois une onde et une particule, sans moi, tout serait ombre et silence. On me capte, on me reflète, on me divise, mais jamais on ne peut m’arrêter. Qui suis-je ? »", answer: "Lumière" },
    { question: "7. « Je ne suis ni main, ni outil, pourtant, je saisis avec habileté. Je porte parfois des couleurs subtiles, et sans moi, chanter serait oublié. Que suis-je ? »", answer: "Bec" },
    { question: "8. « Je suis un jour de la semaine, situé entre deux autres, sans être le début ni la fin. Dans certaines traditions, on me dit propice à l'action, et dans d'autres, on me consacre au dieu de la guerre. Si tu commences par moi, tu as encore un long chemin à parcourir. Qui suis-je ? »", answer: "Mardi" },
    { question: "9. « Je suis né au cœur des étoiles, rares sont ceux qui me trouvent sans chercher. Je suis doux au toucher, mais plus fort que le temps. Ni feu ni acidité ne m’atteignent, et pourtant, ma lumière séduit les âmes depuis des millénaires. On me forge, on me façonne, mais jamais on ne me détruit. Qui suis-je ? »", answer: "Or" },
    { question: "10. « Je suis une clé, mais je n'ouvre pas de porte. Je suis un symbole ancien, vénéré dans une civilisation connue pour ses pharaons et ses pyramides. Je représente la vie éternelle, et ma forme évoque une croix coiffée d’une boucle. Qui suis-je ? »", answer: "Ankh" },
    { question: "11. « Je suis un mot court mais puissant. On me trouve dans les légendes et les mythes, où je façonne le monde avec mes mains. Je représente souvent l’humanité dans son ensemble, et pourtant je désigne un seul individu. Trois lettres suffisent pour me nommer, mais sans moi,il n’y aurait ni histoire, ni civilisation. Qui suis-je ? »", answer: "Man" },
    { question: "12. « Toujours là, pourtant insaisissable, je suis l'ombre de ton regard. Je ne fais que refléter ce que tu veux bien me montrer, et pourtant, certains me craignent, d'autres m'adorent. Je peux briller dans la lumière ou disparaître dans l'obscurité. Si tu veux voir le monde, je ne te servirai à rien, mais si tu veux te voir toi-même, tu ne peux te passer de moi. Qui suis-je ? »", answer: "Miroir"},
    { question: "13. « J'abrite le siège de tes pensées, invisible sous ta chair, mais vital pour ta survie. je suis un rempart contre les coups du destin, et pourtant, je ne ressens ni douleur, ni émotion. Mon apparence peut effrayer, mais sans moi, il n'y aurait ni vie, ni mémoire. Qui suis-je ? »", answer: "Crâne"},
    { question: "14. « Je suis le point de départ de ton histoire, un univers en moi-même, à la fois fragile et puissant. Je suis la source qui nourrit sans demander en retour, et le pilier sur lequel tout repose. Je suis souvent chantée dans les poèmes, mais parfois ignorée dans le tumulte de la vie. Sans moi, il n'y aurait ni début, ni avenir. Qui suis-je ? »", answer: "Mère"},
    { question: "15. « Je suis un son dans une famille de sept, toujours entre le début et la fin. Si tu veux chanter, tu passeras par moi, et si tu veux jouer, je suis l’accord parfait du milieu. Mon nom se cache dans un pronom, mais je suis une note dans la musique. Qui suis-je ? »", answer: "Mi"},
    { question: "16. « Je suis une lettre et bien plus encore, parfois une inconnue, parfois un trésor. On me cherche dans des équations, et je marque l’endroit dans les explorations. Symbole de mystère et d’inconnu. Qui suis-je ? »", answer: "X"},
    { question: "17. « Je suis un métal fort et ancien, capable de forger des outils ou des chaînes. Rouille et temps me changent en poussière, mais dans ton sang, je cours pour te donner vie. Je suis attiré par un pouvoir invisible, et sans moi, la révolution industrielle n’aurait jamais vu le jour. Qui suis-je ? »", answer: "Fer"},
    { question: "18. « Je suis à la fois mère et matière, source de vie et champ de bataille. Je porte les empreintes du passé, et tout ce qui naît en moi finit par y retourner. Je suis bleu dans l’infini, et brun sous les pieds des vivants. Sans moi, l’existence ne serait qu’un rêve. Qui suis-je ? »", answer: "Terre"},
    { question: "19. « Je suis un compagnon mystérieux, silencieux mais jamais loin. Je marche sans bruit, comme si je dansais, et mes yeux percent la nuit. Parfois je dors, parfois je chasse, mais toujours, je veille sur mon royaume. Qui suis-je ? »", answer: "Chat"},
    { question: "20. « On dit que je tiens la clé du temps, car je m'efface à chaque instant sans jamais revenir. Je suis le pont entre l'ombre et la clarté, fragile face à la vie, fidèle face à la nuit. Ma force réside dans ma lente agonie, et mon cœur noirci signe la fin de mon rôle. Qui suis-je ? »", answer: "Bougie"},
    { question: "21. « Je suis un symbole de paix, portant des messages sans jamais parler. Mon vol est gracieux, ma présence apaisante, blanche comme un nuage, légère comme le vent. Dans les légendes et les récits anciens, je suis l’espoir qui renaît après la tempête. Qui suis-je ? »", answer: "Colombe"},
    { question: "22. « Je suis à la fois une solution et un problème, je peux lier ou séparer, selon ta volonté. Parfois je suis simple, parfois je suis complexe, et mes formes sont infinies, mais mon rôle est clair. Les marins me maîtrisent, et les cœurs me redoutent. Qui suis-je ? »", answer: "Noeud"},
    { question: "23. « Je commence dans l'obscurité, et je m'étends jusqu'à la lumière. Je suis un cycle sans fin, divisé en heures, pourtant toujours unique. Sans moi, le temps serait invisible, et la vie ne pourrait avancer. Qui suis-je ? »", answer: "Jour"},
    { question: "24. « Je suis la couleur de la vie, on me trouve dans les forêts et les prairies. Je symbolise l'espoir et le renouveau, mais aussi l'attente, lorsque le feu s’arrête. Je suis un mélange de deux autres, l’une fraîche, l’autre chaude. Qui suis-je ? »", answer: "Vert"},
    { question: "25. « Je suis un roi célèbre dans les légendes, tout ce que je touche devient or. Ce don, si précieux, est vite devenu un fardeau, quand j’ai réalisé qu’on ne peut pas manger l’or. Qui suis-je ? »", answer: "Midas"},
    { question: "26. « Un miroir montre un mot à l’envers : AMAR.", answer: "Rama"},
    { question: "27. « Je n'ai ni début ni fin, et nul ne peut m'arrêter. Je suis un concept sans limite, mais je suis le rêve de ceux qui craignent le temps. On me cherche dans l'amour et dans l'infini, et pourtant, je reste insaisissable. Qui suis-je ? »", answer: "éternité"},
    { question: "28. « Je viens des feuilles, mais je ne suis pas un arbre, on me trouve chaud ou glacé, selon ton envie. Je suis un compagnon des matins calmes, et dans certaines cultures, je suis une tradition sacrée. On me savoure lentement, et je réchauffe autant le corps que l'esprit. Qui suis-je ? »", answer: "Thé"},
    { question: "29. « Je ne suis ni un savoir, ni une richesse, mais je guide les âmes et éclaire les esprits. Je suis silencieuse, mais je parle à ceux qui écoutent. Je ne vieillis pas, mais je grandis avec le temps. Rares sont ceux qui me possèdent pleinement, car je ne viens qu’avec l’expérience et la réflexion. Qui suis-je ? »", answer: "Sagesse"},
    { question: "30. « Sur ton chemin vers un trésor oublié, les éléments se conjuguent pour te guider. Le Nord te donne une direction, mais le secret n'est pas dans une simple orientation. Dans les cieux brille l'étoile de Vénus, et sur la Terre, la force du fer te pousse. Cherche dans le chant du pi infini, et dénoue les mystères d’un ancien nœud sacré. Un miroir peut révéler une vérité cachée, mais prends garde au regard du crâne abandonné. La légende murmure l’histoire d’un griffon ancien, et d’un midas dont l’avidité a causé sa perte. L’or et la terre marquent ton  chemin, sous un ciel de vert où vole une colombe. Le feu d’une bougie éclaire l’éternité, mais seul un esprit empli de sagesse pourra avancer. Enfin, un man courageux, armé de l’ankh, découvrira la clé cachée au fond des ténèbres. Trouve ce que tout cela unit, et nomme-le pour percer le mystère. »", answer: "Lumière"},
];

let currentQuestion = 0;

function loadQuestion() {
    // Cacher le message de fin et afficher la boîte de question
    document.getElementById('end-message').style.display = 'none'; // Masquer le message de fin
    document.getElementById('question-box').classList.remove('hidden');
    document.getElementById('answer-box').classList.add('hidden');
    document.getElementById('submit-btn').classList.remove('hidden');
    document.getElementById('next-btn').classList.add('hidden');
    document.getElementById('next-btn').disabled = true; // Désactiver le bouton Suivant par défaut

    // Réinitialiser le champ de saisie
    const questionElement = document.getElementById('question');
    const answerInput = document.getElementById('answer-input');
    answerInput.value = ''; // Réinitialiser le champ de saisie
    
    // Afficher la question actuelle
    questionElement.textContent = questions[currentQuestion].question;
}

function checkAnswer() {
    const answerInput = document.getElementById('answer-input');
    const answerValue = answerInput.value.trim().toLowerCase();
    const correctAnswer = questions[currentQuestion].answer.toLowerCase();
    const answerDisplay = document.getElementById('answer-display');
    const nextButton = document.getElementById('next-btn');
    const submitButton = document.getElementById('submit-btn');

    // Cache le bouton "Vérifier" et affiche la boîte de réponse
    submitButton.classList.add('hidden');
    document.getElementById('answer-box').classList.remove('hidden');

    // Si la réponse est correcte
    if (answerValue === correctAnswer) {
        answerDisplay.textContent = "Bonne réponse !";
        nextButton.disabled = false; // Activer le bouton Suivant
        nextButton.classList.remove('hidden'); // Afficher le bouton Suivant
    } else {
        answerDisplay.textContent = "Mauvaise réponse, essayez encore.";
        nextButton.classList.add('hidden'); // Cacher le bouton Suivant
        submitButton.classList.remove('hidden'); // Réafficher le bouton "Vérifier"
        
        // Vider le champ de saisie pour permettre une nouvelle tentative
        answerInput.value = ''; 
    }
}

function nextQuestion() {
    currentQuestion++;

    // Si toutes les questions ont été répondues
    if (currentQuestion < questions.length) {
        loadQuestion(); // Charger la question suivante
    } else {
        // Afficher le message de fin lorsque toutes les questions sont répondues
        document.getElementById('end-message').style.display = 'block';
        document.getElementById('question-box').classList.add('hidden');
    }
}

// Initialiser le jeu
loadQuestion();
