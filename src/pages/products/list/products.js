const products = [
  {
    id: 1,
    title: 'Las que no duermen',
    author: 'Dolores Redondo',
    image: 'https://imagessl4.casadellibro.com/a/l/t7/84/9788423366484.jpg',
    price: 23.90,
    discount: 10,
    category: 'Literatura',
    subcategory: 'Novela',
    description: 'En "Las que no duermen", Dolores Redondo crea una atmósfera inquietante que mezcla lo cotidiano con lo sobrenatural. La trama sigue a personajes que enfrentan sus miedos más profundos mientras descubren secretos ocultos en su entorno. La novela explora temas de identidad, trauma y el impacto de los secretos familiares, mientras que la autora emplea una narrativa rica en suspenso y emociones.',
    reviews: [
      {
        comment: 'Un libro fascinante, lleno de misterio y suspenso. Me enganchó desde el principio.',
        rating: 5,
        likes: 150,
        dislikes: 5,
      },
      {
        comment: 'La trama es interesante, pero esperaba algo más. No logró sorprenderme al final.',
        rating: 3,
        likes: 80,
        dislikes: 25,
      }
    ]
  },
  {
    id: 2,
    title: 'Viento y verdad (El Archivo de las Tormentas 5)',
    author: 'Brandon Sanderson',
    image: 'https://imagessl1.casadellibro.com/a/l/t7/43/9788419260543.jpg',
    price: 34.90,
    discount: 15,
    category: 'Literatura',
    subcategory: 'Novela',
    description: 'El quinto libro de la exitosa serie "El Archivo de las Tormentas" de Brandon Sanderson lleva a los lectores a nuevas alturas épicas. En esta entrega, los personajes luchan por comprender sus propios poderes mientras enfrentan amenazas tanto internas como externas. Con una construcción de mundo detallada y una trama llena de giros, "Viento y verdad" es un viaje de aventuras, magia y política que cautivará tanto a los seguidores de la saga como a nuevos lectores.',
    reviews: [
      {
        comment: 'Una obra maestra, Sanderson nunca decepciona. Cada libro es mejor que el anterior.',
        rating: 5,
        likes: 200,
        dislikes: 15,
      },
      {
        comment: 'Me gustan los giros en la trama, pero algunas partes se sienten lentas.',
        rating: 4,
        likes: 120,
        dislikes: 30,
      }
    ]
  },
  {
    id: 3,
    title: 'Victoria',
    author: 'Han Kang',
    image: 'https://imagessl3.casadellibro.com/a/l/t7/97/9788439743897.jpg',
    price: 20.90,
    discount: 5,
    category: 'Literatura',
    subcategory: 'Poesía',
    description: '"Victoria" es una obra poética profundamente introspectiva que explora la lucha interna de una mujer que busca comprender su lugar en el mundo. Han Kang, conocida por su estilo literario único y su capacidad para abordar temas complejos como la soledad y la identidad, ofrece una obra que invita a la reflexión sobre las tensiones entre el deseo y la razón, entre la libertad y las expectativas sociales. Un libro que desafía las convenciones del género y toca los corazones de los lectores más exigentes.',
    reviews: [
      {
        comment: 'Una reflexión profunda sobre la vida. Me tocó el corazón.',
        rating: 5,
        likes: 130,
        dislikes: 10,
      },
      {
        comment: 'Es un libro pesado y lento, no fue para mí.',
        rating: 2,
        likes: 50,
        dislikes: 70,
      }
    ]
  },
  {
    id: 4,
    title: 'El niño que perdió la guerra',
    author: 'Karlos Arguiñano',
    image: 'https://imagessl0.casadellibro.com/a/l/t7/67/9788408294467.jpg',
    price: 25.90,
    discount: 10,
    category: 'Historia',
    subcategory: 'Historia Moderna',
    description: 'En "El niño que perdió la guerra", Karlos Arguiñano aborda un capítulo oscuro de la historia moderna, centrado en la tragedia y las repercusiones de los conflictos bélicos. La obra examina las vivencias de los jóvenes soldados atrapados en un conflicto que, aunque lejano, sigue marcando la memoria colectiva de una generación. A través de historias conmovedoras y llenas de emoción, el autor da voz a aquellos cuyas vidas fueron irreversiblemente cambiadas por la guerra, invitando a una reflexión profunda sobre la paz y la reconciliación.',
    reviews: [
      {
        comment: 'Un libro conmovedor y triste, perfecto para reflexionar sobre la guerra.',
        rating: 5,
        likes: 100,
        dislikes: 10,
      },
      {
        comment: 'El tema es importante, pero la narrativa no me atrapó del todo.',
        rating: 3,
        likes: 60,
        dislikes: 20,
      }
    ]
  },
  {
    id: 5,
    title: '1984',
    author: 'George Orwell',
    image: 'https://images-na.ssl-images-amazon.com/images/I/71kxa1-0mfL.jpg',
    price: 9.99,
    discount: 20,
    category: 'Literatura',
    subcategory: 'Novela',
    description: '"1984" es una de las obras más influyentes de la literatura del siglo XX. George Orwell nos transporta a un futuro distópico gobernado por un régimen totalitario que controla absolutamente todos los aspectos de la vida de sus ciudadanos. A través del protagonista, Winston Smith, se exploran temas como la vigilancia masiva, la manipulación de la verdad y la lucha por la libertad en un mundo donde el pensamiento independiente es un crimen. La obra es un grito de advertencia contra los peligros de los regímenes autoritarios y la pérdida de la privacidad.',
    reviews: [
      {
        comment: 'Una novela imprescindible, sigue siendo muy relevante hoy en día.',
        rating: 5,
        likes: 250,
        dislikes: 10,
      },
      {
        comment: 'Es una lectura pesada, pero el mensaje es muy importante.',
        rating: 4,
        likes: 180,
        dislikes: 30,
      }
    ]
  },
  {
    id: 6,
    title: 'The Catcher in the Rye',
    author: 'J.D. Salinger',
    image: 'https://images-na.ssl-images-amazon.com/images/I/81OthjkJBuL.jpg',
    price: 9.49,
    discount: 20,
    category: 'Literatura',
    subcategory: 'Novela',
    description: 'Un clásico de la literatura estadounidense, "The Catcher in the Rye" es la historia de Holden Caulfield, un adolescente rebelde y desilusionado que busca respuestas sobre su vida mientras navega por las complejidades del crecimiento. La novela es una reflexión sobre la angustia adolescente, la búsqueda de identidad y el conflicto con las normas sociales. Salinger crea una obra única que resuena con generaciones de lectores debido a su retrato honesto y a menudo doloroso de la vida en su etapa más vulnerable.',
    reviews: [
      {
        comment: 'Un libro reflexivo que todo adolescente debería leer.',
        rating: 4,
        likes: 140,
        dislikes: 15,
      },
      {
        comment: 'No me conecté con el protagonista, pero la temática es relevante.',
        rating: 3,
        likes: 100,
        dislikes: 35,
      }
    ]
  },
  {
    id: 7,
    title: 'The Hobbit',
    author: 'J.R.R. Tolkien',
    image: 'https://images-na.ssl-images-amazon.com/images/I/91b0C2YNSrL.jpg',
    price: 12.99,
    discount: 20,
    category: 'Literatura',
    subcategory: 'Fantasía',
    description: 'Publicado por primera vez en 1937, "The Hobbit" es la obra que dio inicio al vasto mundo de la Tierra Media, creado por J.R.R. Tolkien. Sigue las aventuras de Bilbo Bolsón, un hobbit que se ve arrastrado a una peligrosa misión para recuperar un tesoro robado de un dragón. A través de su viaje, Bilbo crece y cambia, enfrentándose a desafíos que lo transforman. "The Hobbit" es una obra llena de magia, criaturas fantásticas y heroísmo, y es una puerta de entrada a una de las sagas más queridas de la literatura fantástica.',
    reviews: [
      {
        comment: 'Un clásico de la fantasía, me encantó cada momento de la aventura.',
        rating: 5,
        likes: 220,
        dislikes: 10,
      },
      {
        comment: 'Aunque es una obra divertida, a veces me parece algo lenta.',
        rating: 4,
        likes: 150,
        dislikes: 25,
      }
    ]
  },
  {
    id: 8,
    title: 'Harry Potter and the Sorcerer\'s Stone',
    author: 'J.K. Rowling',
    image: 'https://images-na.ssl-images-amazon.com/images/I/81YOuOGFCJL.jpg',
    price: 14.99,
    discount: 10,
    category: 'Literatura',
    subcategory: 'Fantasía',
    description: 'El primer libro de la famosa saga de Harry Potter lleva a los lectores a un mundo mágico donde los hechizos, las criaturas y los secretos oscuros están en cada rincón. En "Harry Potter and the Sorcerer\'s Stone", Harry descubre que es un mago y comienza su educación en la Escuela de Magia y Hechicería de Hogwarts. J.K. Rowling crea un mundo lleno de maravillas, amistades y desafíos, mientras que Harry enfrenta los primeros indicios de una amenaza mucho mayor que pondrá en riesgo todo lo que ama.',
    reviews: [
      {
        comment: 'Una historia mágica que sigue siendo tan buena como la primera vez que la leí.',
        rating: 5,
        likes: 300,
        dislikes: 20,
      },
      {
        comment: 'Muy entretenido, aunque en algunos momentos se siente demasiado largo.',
        rating: 4,
        likes: 250,
        dislikes: 30,
      }
    ]
  },
  {
    id: 9,
    title: 'The Alchemist',
    author: 'Paulo Coelho',
    image: 'https://images-na.ssl-images-amazon.com/images/I/71aFt4+OTOL.jpg',
    price: 10.49,
    discount: 15,
    category: 'Literatura',
    subcategory: 'Novela',
    description: 'Un relato místico y filosófico sobre la búsqueda de los sueños, "The Alchemist" sigue la historia de Santiago, un joven pastor que decide seguir su corazón y emprender un largo viaje en busca de un tesoro personal. A lo largo de su camino, Santiago aprende lecciones de vida que le enseñan sobre la importancia de la fe, la perseverancia y el autoconocimiento. Con su estilo poético y profundo, Paulo Coelho crea una obra que inspira a los lectores a seguir sus sueños sin importar los obstáculos.',
    reviews: [
      {
        comment: 'Una historia profundamente inspiradora que me motivó a seguir mis sueños.',
        rating: 5,
        likes: 180,
        dislikes: 5,
      },
      {
        comment: 'Es una lectura ligera, pero el mensaje es poderoso.',
        rating: 4,
        likes: 150,
        dislikes: 15,
      }
    ]
  },
  {
    id: 10,
    title: 'The Lord of the Rings',
    author: 'J.R.R. Tolkien',
    image: 'https://images-na.ssl-images-amazon.com/images/I/91SZSW8qSsL.jpg',
    price: 19.99,
    discount: 25,
    category: 'Literatura',
    subcategory: 'Fantasía',
    description: 'Una de las obras más emblemáticas del siglo XX, "The Lord of the Rings" es una trilogía épica que narra la lucha entre el bien y el mal en la Tierra Media. En el centro de la historia se encuentra el Anillo Único, una poderosa reliquia que debe ser destruida antes de que caiga en las manos equivocadas. A través de sus personajes, como Frodo Baggins, Aragorn y Gandalf, Tolkien crea un mundo lleno de historia, magia y batallas épicas, que se ha convertido en un referente de la literatura fantástica.',
    reviews: [
      {
        comment: 'Una de las mejores sagas de fantasía, una lectura obligada para todos.',
        rating: 5,
        likes: 320,
        dislikes: 10,
      },
      {
        comment: 'Un libro épico, aunque algunas partes pueden ser demasiado detalladas.',
        rating: 4,
        likes: 260,
        dislikes: 20,
      }
    ]
  },
  {
    id: 11,
    title: 'El Gen: Una historia íntima',
    author: 'Siddhartha Mukherjee',
    image: 'https://imagessl0.casadellibro.com/a/l/s7/50/9788416863150.webp',
    price: 24.99,
    discount: 20,
    category: 'Salud',
    subcategory: 'Genética',
    description: 'Una exploración profunda de la historia de la genética, desde sus orígenes hasta los avances más modernos en biotecnología. Siddhartha Mukherjee nos lleva a un viaje a través de descubrimientos que han transformado nuestra comprensión de la vida misma, incluyendo debates éticos y el impacto de la manipulación genética en la humanidad.',
    reviews: [
      {
        comment: 'Una obra maestra que combina ciencia, historia y narrativa.',
        rating: 5,
        likes: 150,
        dislikes: 5,
      },
      {
        comment: 'Un libro fascinante, aunque puede ser un poco denso para principiantes.',
        rating: 4,
        likes: 120,
        dislikes: 10,
      },
    ],
  },
  {
    id: 12,
    title: 'Clean Code',
    author: 'Robert C. Martin',
    image: 'https://images-na.ssl-images-amazon.com/images/I/51b7XbfMIIL._SX376_BO1,204,203,200_.jpg',
    price: 34.99,
    discount: 15,
    category: 'Tecnología',
    subcategory: 'Programación',
    description: 'Un clásico imprescindible para los desarrolladores de software, "Clean Code" ofrece principios y prácticas para escribir código limpio y mantenible. Robert C. Martin comparte ejemplos claros y consejos prácticos que ayudan a mejorar la calidad del código en cualquier lenguaje de programación.',
    reviews: [
      {
        comment: 'Un libro esencial para cualquier desarrollador que aspire a mejorar su código.',
        rating: 5,
        likes: 500,
        dislikes: 15,
      },
      {
        comment: 'Recomendado para programadores, pero los ejemplos están un poco desactualizados.',
        rating: 4,
        likes: 300,
        dislikes: 20,
      },
    ],
  },
  {
    id: 13,
    title: 'Superintelligence: Paths, Dangers, Strategies',
    author: 'Nick Bostrom',
    image: 'https://m.media-amazon.com/images/I/91IM+9uzq7L._UF1000,1000_QL80_.jpg',
    price: 29.99,
    discount: 10,
    category: 'Tecnología',
    subcategory: 'Inteligencia Artificial',
    description: 'Nick Bostrom analiza los posibles escenarios de la evolución de la inteligencia artificial y los desafíos éticos que plantea. Este libro es una reflexión profunda sobre el impacto de una superinteligencia en la humanidad y cómo podemos prepararnos para coexistir con ella.',
    reviews: [
      {
        comment: 'Un análisis profundo y escalofriante sobre el futuro de la IA.',
        rating: 5,
        likes: 420,
        dislikes: 18,
      },
      {
        comment: 'Interesante, pero a veces especulativo.',
        rating: 4,
        likes: 310,
        dislikes: 25,
      },
    ],
  },
  {
    id: 14,
    title: 'El cuerpo humano: Manual del usuario',
    author: 'Bill Bryson',
    image: 'https://m.media-amazon.com/images/I/81XFf9nwviL.jpg',
    price: 21.99,
    discount: 25,
    category: 'Salud',
    subcategory: 'Ciencias Biomédicas',
    description: 'Bill Bryson nos guía a través de un fascinante recorrido por el cuerpo humano. Con su característico sentido del humor y capacidad para simplificar conceptos complejos, este libro es una oda a la máquina más sorprendente: el cuerpo humano.',
    reviews: [
      {
        comment: 'Un libro educativo y entretenido a partes iguales.',
        rating: 5,
        likes: 190,
        dislikes: 8,
      },
      {
        comment: 'Divertido, aunque se enfoca más en anécdotas que en detalles científicos.',
        rating: 4,
        likes: 140,
        dislikes: 15,
      },
    ],
  },
  {
    'id': 15,
    'title': 'Life 3.0: Being Human in the Age of Artificial Intelligence',
    'author': 'Max Tegmark',
    'image': 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1499718864i/34272565.jpg',
    'price': 27.99,
    'discount': 18,
    'category': 'Tecnología',
    'subcategory': 'Tecnología y Sociedad',
    'description': 'Max Tegmark explora cómo la inteligencia artificial podría transformar nuestras vidas, desde la forma en que trabajamos hasta cómo nos relacionamos como sociedad. Con un enfoque optimista pero realista, \'Life 3.0\' plantea preguntas fundamentales sobre el futuro de la humanidad.',
    'reviews': [
      {
        'comment': 'Inspirador y provocador, perfecto para reflexionar sobre el impacto de la IA.',
        'rating': 5,
        'likes': 300,
        'dislikes': 10
      },
      {
        'comment': 'Buen análisis, aunque un poco técnico en algunos capítulos.',
        'rating': 4,
        'likes': 200,
        'dislikes': 12
      }
    ]
  },
  {
    'id': 16,
    'title': 'La evolución de la medicina',
    'author': 'Andrew Weil',
    'image': 'https://m.media-amazon.com/images/I/61FRYk0oW2L.jpg',
    'price': 18.99,
    'discount': 20,
    'category': 'Salud',
    'subcategory': 'Historia de la Medicina',
    'description': 'Un análisis de cómo la medicina ha evolucionado a lo largo de los siglos y hacia dónde se dirige en el futuro. Andrew Weil destaca la importancia de una medicina integrativa que combine lo mejor de la medicina moderna con prácticas tradicionales.',
    'reviews': [
      {
        'comment': 'Interesante perspectiva sobre el futuro de la medicina.',
        'rating': 4,
        'likes': 80,
        'dislikes': 5
      },
      {
        'comment': 'Un libro que invita a reflexionar sobre cómo tratamos nuestra salud.',
        'rating': 5,
        'likes': 100,
        'dislikes': 3
      }
    ]
  },
  {
    'id': 17,
    'title': 'Innovación tecnológica en el siglo XXI',
    'author': 'Peter Thiel',
    'image': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ5BylwDR64ZGqEgjp7VHNlcZ_4aezxZ_tHg&s',
    'price': 25.99,
    'discount': 15,
    'category': 'Tecnología',
    'subcategory': 'Innovación',
    'description': 'Un libro sobre cómo las grandes ideas tecnológicas están transformando industrias y cambiando nuestra forma de vivir. Peter Thiel nos lleva a un viaje por las mentes de los innovadores más influyentes del mundo.',
    'reviews': [
      {
        'comment': 'Inspirador para cualquier persona interesada en la tecnología.',
        'rating': 5,
        'likes': 220,
        'dislikes': 15
      },
      {
        'comment': 'Muy informativo, aunque algo técnico en algunas partes.',
        'rating': 4,
        'likes': 180,
        'dislikes': 10
      }
    ]
  },
  {
    'id': 18,
    'title': 'El impacto de la inteligencia artificial en la sociedad',
    'author': 'Kate Crawford',
    'image': 'https://www.ex-ante.cl/wp-content/uploads/2024/01/atras-of-ia-book.jpg',
    'price': 19.99,
    'discount': 10,
    'category': 'Tecnología',
    'subcategory': 'Inteligencia Artificial',
    'description': 'Kate Crawford analiza las implicaciones éticas y sociales de la inteligencia artificial, abordando temas como el sesgo algorítmico, la privacidad y el impacto en el empleo.',
    'reviews': [
      {
        'comment': 'Un libro crucial para entender los desafíos éticos de la IA.',
        'rating': 5,
        'likes': 300,
        'dislikes': 20
      },
      {
        'comment': 'Complejo pero esencial para los interesados en el futuro de la tecnología.',
        'rating': 4,
        'likes': 250,
        'dislikes': 18
      }
    ]
  },
  {
    'id': 19,
    'title': 'Medicina en la era digital',
    'author': 'Eric Topol',
    'image': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ5BylwDR64ZGqEgjp7VHNlcZ_4aezxZ_tHg&s',
    'price': 29.99,
    'discount': 25,
    'category': 'Salud',
    'subcategory': 'Tecnología Médica',
    'description': 'Eric Topol explora cómo la tecnología digital, como la inteligencia artificial y la big data, está revolucionando la medicina, desde el diagnóstico hasta el tratamiento.',
    'reviews': [
      {
        'comment': 'Una lectura imprescindible para entender el futuro de la medicina.',
        'rating': 5,
        'likes': 400,
        'dislikes': 10
      },
      {
        'comment': 'Interesante, pero requiere conocimientos previos sobre tecnología médica.',
        'rating': 4,
        'likes': 300,
        'dislikes': 25
      }
    ]
  },
  {
    'id': 20,
    'title': 'El futuro del trabajo en la era de la IA',
    'author': 'Martin Ford',
    'image': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ5BylwDR64ZGqEgjp7VHNlcZ_4aezxZ_tHg&s',
    'price': 24.99,
    'discount': 18,
    'category': 'Tecnología',
    'subcategory': 'Inteligencia Artificial',
    'description': 'Un análisis de cómo la inteligencia artificial está transformando el mundo laboral y lo que podemos hacer para adaptarnos a estos cambios. Martin Ford propone ideas para abordar los desafíos de un futuro donde los robots y las máquinas desempeñan un papel central.',
    'reviews': [
      {
        'comment': 'Esencial para comprender el impacto de la automatización en nuestras vidas.',
        'rating': 5,
        'likes': 320,
        'dislikes': 15
      },
      {
        'comment': 'Una visión completa, aunque algo repetitiva en algunos capítulos.',
        'rating': 4,
        'likes': 260,
        'dislikes': 12
      }
    ]
  },
  {
    "id": 21,
    "title": "Delirious New York",
    "author": "Rem Koolhaas",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ5BylwDR64ZGqEgjp7VHNlcZ_4aezxZ_tHg&s",
    "price": 35.99,
    "discount": 20,
    "category": "Artes",
    "subcategory": "Arquitectura",
    "description": "Un ensayo visionario sobre la evolución de Nueva York y su arquitectura, 'Delirious New York' combina historia, diseño urbano y cultura para explorar cómo esta ciudad se convirtió en un laboratorio de innovación arquitectónica.",
    "reviews": [
      {
        "comment": "Un libro fascinante para cualquier amante de la arquitectura.",
        "rating": 5,
        "likes": 250,
        "dislikes": 8
      },
      {
        "comment": "Inspirador, pero con un lenguaje algo técnico.",
        "rating": 4,
        "likes": 200,
        "dislikes": 15
      }
    ]
  },
  {
    "id": 22,
    "title": "Thinking with Type",
    "author": "Ellen Lupton",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ5BylwDR64ZGqEgjp7VHNlcZ_4aezxZ_tHg&s",
    "price": 29.99,
    "discount": 15,
    "category": "Artes",
    "subcategory": "Diseño Gráfico",
    "description": "Ellen Lupton ofrece una guía esencial sobre la tipografía para diseñadores gráficos, desde los fundamentos del diseño tipográfico hasta su aplicación en medios impresos y digitales. Este libro combina teoría y práctica con ejemplos inspiradores.",
    "reviews": [
      {
        "comment": "Un recurso indispensable para cualquier diseñador gráfico.",
        "rating": 5,
        "likes": 300,
        "dislikes": 5
      },
      {
        "comment": "Excelente introducción a la tipografía, aunque algo básico para expertos.",
        "rating": 4,
        "likes": 220,
        "dislikes": 10
      }
    ]
  },
  {
    "id": 23,
    "title": "La práctica reflexiva en la enseñanza",
    "author": "Donald A. Schön",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ5BylwDR64ZGqEgjp7VHNlcZ_4aezxZ_tHg&s",
    "price": 24.50,
    "discount": 10,
    "category": "Educación",
    "subcategory": "Pedagogía",
    "description": "En esta obra, Donald A. Schön profundiza en el concepto de la práctica reflexiva como una herramienta esencial para los educadores. El libro ofrece estrategias y ejemplos para que los docentes reflexionen sobre su propia práctica pedagógica, permitiéndoles adaptarse y mejorar continuamente en entornos educativos cambiantes.",
    "reviews": [
      {
        "comment": "Una guía invaluable para cualquier docente que busque mejorar su enseñanza.",
        "rating": 5,
        "likes": 180,
        "dislikes": 3
      },
      {
        "comment": "Interesante y práctico, pero algunos conceptos podrían ser más detallados.",
        "rating": 4,
        "likes": 120,
        "dislikes": 8
      }
    ]
  },
  {
    "id": 24,
    "title": "Educar en el asombro",
    "author": "Catherine L'Ecuyer",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ5BylwDR64ZGqEgjp7VHNlcZ_4aezxZ_tHg&s",
    "price": 19.95,
    "discount": 10,
    "category": "Educación",
    "subcategory": "Educación Infantil",
    "description": "En 'Educar en el asombro', Catherine L'Ecuyer explora la importancia de preservar la capacidad de asombro en los niños como base para un aprendizaje significativo. La autora combina teoría y práctica para ofrecer a padres y docentes herramientas que promuevan la curiosidad y el entusiasmo por descubrir el mundo, respetando el ritmo y las necesidades de los más pequeños.",
    "reviews": [
      {
        "comment": "Un libro maravilloso que redefine cómo deberíamos acercarnos a la educación de los niños.",
        "rating": 5,
        "likes": 250,
        "dislikes": 5
      },
      {
        "comment": "Inspirador, aunque esperaba más ejemplos prácticos.",
        "rating": 4,
        "likes": 180,
        "dislikes": 10
      }
    ]
  },
  {
    "id": 25,
    "title": "Los 7 hábitos de la gente altamente efectiva",
    "author": "Stephen R. Covey",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ5BylwDR64ZGqEgjp7VHNlcZ_4aezxZ_tHg&s",
    "price": 22.99,
    "discount": 15,
    "category": "Negocios",
    "subcategory": "Liderazgo",
    "description": "Este libro icónico de Stephen R. Covey presenta un enfoque integral para desarrollar liderazgo personal y organizacional a través de hábitos que transforman la efectividad. Covey combina principios de ética, responsabilidad y productividad, ayudando a los lectores a alinear sus valores con sus metas profesionales y personales.",
    "reviews": [
      {
        "comment": "Una obra fundamental para cualquiera que desee liderar con propósito y efectividad.",
        "rating": 5,
        "likes": 400,
        "dislikes": 10
      },
      {
        "comment": "Muy útil, aunque algunas ideas pueden parecer básicas para lectores avanzados.",
        "rating": 4,
        "likes": 300,
        "dislikes": 15
      }
    ]
  }
]

export default products
