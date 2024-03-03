import { getString } from '../../helpers/i18n'

//TODO - Add bio into the translations file
const members = [
    {
        name: getString("PEPA_NAME"),
        surname: getString("PEPA_SURNAME"),
        role1: getString("PEPA_ROLE1"),
        role2: getString("PEPA_ROLE2"),
        tagline: getString("PEPA_TAGLINE"),
        bio: `Investigadora, sefardóloga  y consultora de formación, profesora, conferenciante e intérprete musical, especializada  en el estudio, investigación y difusión de la historia de los Hispanojudíos y Sefardíes en la Diáspora. Ha trabajado en la recuperación, y restitución de su memoria. 
        Profesora en la Universidad Texas Tech, (USA), sede Sevilla sobre el Legado Judeoespañol. Historia y música sefardí. Ha dirigido varias ediciones de cursos especializados en la materia en la Universidad Pablo de Olavide de Sevilla.
        Promotora cultural, ha realizado múltiples actividades culturales y educativas a nivel nacional e internacional sobre esta temática. 
        Ex- ejecutiva.
        Ex-emprendedora.
        Reside entre Sevilla y Granada. España. Sefarad.`,
        img: '/images/koki.webp'
    },
    {
        name: getString("MILTON_NAME"),
        surname: getString("MILTON_SURNAME"),
        role1: getString("MILTON_ROLE1"),
        role2: getString("MILTON_ROLE2"),
        tagline: getString("MILTON_TAGLINE"),
        bio: `Sefardí de origen en Sevilla,  Panamá, y Curaçao.
        Experto en Historia, en especial la de Sefarad.
        Escritor
        Abogado 
        Consultor
        Emprendedor
        Ex-Embajador
        Ex-Ministro
        Ex-Directivo
        Reside en la actualidad en Panamá.`,
        img: '/images/milton.webp'
    },
    {
        name: getString("MARGALIT_NAME"),
        surname: getString("MARGALIT_SURNAME"),
        role1: getString("MARGALIT_ROLE1"),
        role2: getString("MARGALIT_ROLE2"),
        tagline: getString("MARGALIT_TAGLINE"),
        bio: `Sefardí, de familia de origen en León y Salónica e Israel.
        Nacida y residente  en Tel Aviv, Israel. 
        Estudió Literatura Hebrea y Filosofía en la Universidad Bar Ilan.  
        "Excelente poeta en judeoespañol o ladino.
        Escritora e investigadora.
        Sus poemas se estudian en la Universidad de Bar Ilan y son parte del programa de estudios del ministerio de educación.  
        Traductora de poesía de español al hebreo.  Experta en las comunidades sefardíes del Oriente Mediterráneo, Salónica en especial. 
        Trabajó como Secretaria General de la "Federación Israelí de Escritores" durante 1986-2008  
        Premios: 
        "FERNANDO JENO" 1994 del Comité Central de la Comunidad Judía de MEXICO.  
         "ATENEO DE JAEN"  1996, JAEN, ESPAÑA. 
         "PREMIO DEL PRIMER MINISTRO" 1999  ISRAEL . 
         "Oriente-Occidente en Curtea de Arges, Rumanía, 2003. 
        Ha recibido múltiples homenajes por su labor literaria y como defensora del Legado Sefardí.`,
        img: '/images/margalit.webp'
    },
    {
        name: getString("ITZJAK_NAME"),
        surname: getString("ITZJAK_SURNAME"),
        role1: getString("ITZJAK_ROLE1"),
        role2: getString("ITZJAK_ROLE2"),
        tagline: getString("ITZJAK_TAGLINE"),
        bio: `Director del Centro de documentación  Moisés de León.
        Gran experto y conocedor de la historia y cultura de los hispanojudíos sefardíes.
        
        Ha trabajado durante más de 20 años creando uno de los fondos documentales más completos sobre la temática judía sefardí: "Sefardíes.es".
        Gran especialista e investigador sobre los apellidos sefardíes, ha realizado más de 4.000 informes sobre familias de origen judío sefardí para la adquisición de la Nacionalidad española para sefardíes, según Ley de Junio de 2015.
        Reside en Madrid. España. Sefarad.`,
        img: '/images/itzjak.webp'
    },
    {
        name: getString("CARLOS_NAME"),
        surname: getString("CARLOS_SURNAME"),
        role1: getString("CARLOS_ROLE1"),
        role2: getString("CARLOS_ROLE2"),
        tagline: getString("CARLOS_TAGLINE"),
        bio: `Doctor en Lengua y Literatura Española y Portuguesa por la Universidad de Nueva York, donde es profesor.
        Director ejecutivo de Ladino 21, proyecto creado para la difusión y continuidad del judeoespañol o ladino como lengua hablada y por tanto su preservación y enseñanza.`,
        img: '/images/carlos.webp'
    },
    {
        name: getString("URIEL_NAME"),
        surname: getString("URIEL_SURNAME"),
        role1: getString("URIEL_ROLE1"),
        role2: getString("URIEL_ROLE2"),
        tagline: getString("URIEL_TAGLINE"),
        bio: `Prolífico escritor, editor y bibliógrafo, con una de las mayores bibliotecas privadas sobre libros de todo tipo en relación con el  judaísmo, la historia, cultura, en general y de forma especial sobre los judíos de Sefarad.
        Reside en Madrid. España. Sefarad.`,
        img: '/images/uriel.webp'
    },
]

export default members;