// Complete Bad Bunny Discography - 212 songs from user's CSV
const mockBadBunnySongs = [
  { id: 1, name: "NI BIEN NI MAL", artist: "Bad Bunny", album: "YHLQMDLG", albumCover: "" },
  { id: 2, name: "200 Mph", artist: "Bad Bunny", album: "YHLQMDLG", albumCover: "" },
  { id: 3, name: "Quien Tu Eres", artist: "Bad Bunny", album: "YHLQMDLG", albumCover: "" },
  { id: 4, name: "Caro", artist: "Bad Bunny", album: "YHLQMDLG", albumCover: "" },
  { id: 5, name: "Tenemos Que Hablar", artist: "Bad Bunny", album: "YHLQMDLG", albumCover: "" },
  { id: 6, name: "Otra Noche en Miami", artist: "Bad Bunny", album: "YHLQMDLG", albumCover: "" },
  { id: 7, name: "Ser Bichote", artist: "Bad Bunny", album: "YHLQMDLG", albumCover: "" },
  { id: 8, name: "Si Estuviesemos Juntos", artist: "Bad Bunny", album: "YHLQMDLG", albumCover: "" },
  { id: 9, name: "Solo de Mi", artist: "Bad Bunny", album: "YHLQMDLG", albumCover: "" },
  { id: 10, name: "Cuando Perriabas", artist: "Bad Bunny", album: "YHLQMDLG", albumCover: "" },
  { id: 11, name: "La Romana", artist: "Bad Bunny", album: "YHLQMDLG", albumCover: "" },
  { id: 12, name: "Como Antes", artist: "Bad Bunny", album: "YHLQMDLG", albumCover: "" },
  { id: 13, name: "RLNDT", artist: "Bad Bunny", album: "YHLQMDLG", albumCover: "" },
  { id: 14, name: "Estamos Bien", artist: "Bad Bunny", album: "YHLQMDLG", albumCover: "" },
  { id: 15, name: "MIA", artist: "Bad Bunny", album: "YHLQMDLG", albumCover: "" },
  { id: 16, name: "MOJAITA", artist: "Bad Bunny", album: "YHLQMDLG", albumCover: "" },
  { id: 17, name: "YO LE LLEGO", artist: "Bad Bunny", album: "YHLQMDLG", albumCover: "" },
  { id: 18, name: "CUIDADO POR AHI", artist: "Bad Bunny", album: "YHLQMDLG", albumCover: "" },
  { id: 19, name: "QUE PRETENDES", artist: "Bad Bunny", album: "YHLQMDLG", albumCover: "" },
  { id: 20, name: "LA CANCION", artist: "Bad Bunny", album: "YHLQMDLG", albumCover: "" },
  { id: 21, name: "UN PESO", artist: "Bad Bunny", album: "YHLQMDLG", albumCover: "" },
  { id: 22, name: "ODIO", artist: "Bad Bunny", album: "YHLQMDLG", albumCover: "" },
  { id: 23, name: "COMO UN BEBE", artist: "Bad Bunny", album: "YHLQMDLG", albumCover: "" },
  { id: 24, name: "Si Veo a Tu Mama", artist: "Bad Bunny", album: "YHLQMDLG", albumCover: "" },
  { id: 25, name: "La Dificil", artist: "Bad Bunny", album: "YHLQMDLG", albumCover: "" },
  { id: 26, name: "Pero Ya No", artist: "Bad Bunny", album: "YHLQMDLG", albumCover: "" },
  { id: 27, name: "La Santa", artist: "Bad Bunny", album: "YHLQMDLG", albumCover: "" },
  { id: 28, name: "Yo perreo Sola", artist: "Bad Bunny", album: "YHLQMDLG", albumCover: "" },
  { id: 29, name: "Bichiyal", artist: "Bad Bunny", album: "YHLQMDLG", albumCover: "" },
  { id: 30, name: "Solia", artist: "Bad Bunny", album: "YHLQMDLG", albumCover: "" },
  { id: 31, name: "La Zona", artist: "Bad Bunny", album: "YHLQMDLG", albumCover: "" },
  { id: 32, name: "Que Malo", artist: "Bad Bunny", album: "YHLQMDLG", albumCover: "" },
  { id: 33, name: "Vete", artist: "Bad Bunny", album: "YHLQMDLG", albumCover: "" },
  { id: 34, name: "Ignorantes", artist: "Bad Bunny", album: "YHLQMDLG", albumCover: "" },
  { id: 35, name: "A Tu Merced", artist: "Bad Bunny", album: "YHLQMDLG", albumCover: "" },
  { id: 36, name: "Una Vez", artist: "Bad Bunny", album: "YHLQMDLG", albumCover: "" },
  { id: 37, name: "Safaera", artist: "Bad Bunny", album: "YHLQMDLG", albumCover: "" },
  { id: 38, name: "25/8", artist: "Bad Bunny", album: "YHLQMDLG", albumCover: "" },
  { id: 39, name: "Esta Cabron Ser Yo", artist: "Bad Bunny", album: "YHLQMDLG", albumCover: "" },
  { id: 40, name: "Puesto Pa Guerrial", artist: "Bad Bunny", album: "YHLQMDLG", albumCover: "" },
  { id: 41, name: "P FKN R", artist: "Bad Bunny", album: "YHLQMDLG", albumCover: "" },
  { id: 42, name: "Hablamos Manana", artist: "Bad Bunny", album: "YHLQMDLG", albumCover: "" },
  { id: 43, name: "<3", artist: "Bad Bunny", album: "YHLQMDLG", albumCover: "" },
  { id: 44, name: "SI ELLA SALE", artist: "Bad Bunny", album: "YHLQMDLG", albumCover: "" },
  { id: 45, name: "MAS DE UNA CITA", artist: "Bad Bunny", album: "YHLQMDLG", albumCover: "" },
  { id: 46, name: "BYE ME FUI", artist: "Bad Bunny", album: "YHLQMDLG", albumCover: "" },
  { id: 47, name: "CANCION CON YANDEL", artist: "Bad Bunny", album: "YHLQMDLG", albumCover: "" },
  { id: 48, name: "PA ROMPERLA", artist: "Bad Bunny", album: "YHLQMDLG", albumCover: "" },
  { id: 49, name: "BAD CON NICKY", artist: "Bad Bunny", album: "YHLQMDLG", albumCover: "" },
  { id: 50, name: "BENDICIONES", artist: "Bad Bunny", album: "YHLQMDLG", albumCover: "" },
  { id: 51, name: "COMO SE SIENTE - Remix", artist: "Bad Bunny", album: "YHLQMDLG", albumCover: "" },
  { id: 52, name: "RONCA FREESTYLE", artist: "Bad Bunny", album: "YHLQMDLG", albumCover: "" },
  { id: 53, name: "EN CASITA", artist: "Bad Bunny", album: "YHLQMDLG", albumCover: "" },
  { id: 54, name: "EL MUNDO ES MIO", artist: "Bad Bunny", album: "YHLQMDLG", albumCover: "" },
  { id: 55, name: "TE MUDASTE", artist: "Bad Bunny", album: "YHLQMDLG", albumCover: "" },
  { id: 56, name: "HOY COBRE", artist: "Bad Bunny", album: "YHLQMDLG", albumCover: "" },
  { id: 57, name: "MALDITA POBREZA", artist: "Bad Bunny", album: "YHLQMDLG", albumCover: "" },
  { id: 58, name: "LA NOCHE DE ANOCHE", artist: "Bad Bunny", album: "YHLQMDLG", albumCover: "" },
  { id: 59, name: "TE DESEO LO MEJOR", artist: "Bad Bunny", album: "YHLQMDLG", albumCover: "" },
  { id: 60, name: "YO VISTO ASI", artist: "Bad Bunny", album: "YHLQMDLG", albumCover: "" },
  { id: 61, name: "HACIENDO QUE ME AMAS", artist: "Bad Bunny", album: "YHLQMDLG", albumCover: "" },
  { id: 62, name: "BOOKER T", artist: "Bad Bunny", album: "YHLQMDLG", albumCover: "" },
  { id: 63, name: "LA DROGA", artist: "Bad Bunny", album: "YHLQMDLG", albumCover: "" },
  { id: 64, name: "DAKITI", artist: "Bad Bunny", album: "YHLQMDLG", albumCover: "" },
  { id: 65, name: "TRELLAS", artist: "Bad Bunny", album: "YHLQMDLG", albumCover: "" },
  { id: 66, name: "SORRY PAPI", artist: "Bad Bunny", album: "YHLQMDLG", albumCover: "" },
  { id: 67, name: "120", artist: "Bad Bunny", album: "YHLQMDLG", albumCover: "" },
  { id: 68, name: "ANTES QUE SE ACABE", artist: "Bad Bunny", album: "YHLQMDLG", albumCover: "" },
  { id: 69, name: "CANTARES DE NAVIDAD", artist: "Bad Bunny", album: "YHLQMDLG", albumCover: "" },
  { id: 70, name: "Moscow Mukle", artist: "Bad Bunny", album: "YHLQMDLG", albumCover: "" },
  { id: 71, name: "Despues de la Playa", artist: "Bad Bunny", album: "YHLQMDLG", albumCover: "" },
  { id: 72, name: "Me Porto Bonito", artist: "Bad Bunny", album: "YHLQMDLG", albumCover: "" },
  { id: 73, name: "Titi Me Pregunto", artist: "Bad Bunny", album: "YHLQMDLG", albumCover: "" },
  { id: 74, name: "Un Ratito", artist: "Bad Bunny", album: "YHLQMDLG", albumCover: "" },
  { id: 75, name: "Yo No Soy Celoso", artist: "Bad Bunny", album: "YHLQMDLG", albumCover: "" },
  { id: 76, name: "Tarot", artist: "Bad Bunny", album: "YHLQMDLG", albumCover: "" },
  { id: 77, name: "Neverita", artist: "Bad Bunny", album: "YHLQMDLG", albumCover: "" },
  { id: 78, name: "La Corriente", artist: "Bad Bunny", album: "YHLQMDLG", albumCover: "" },
  { id: 79, name: "Efecto", artist: "Bad Bunny", album: "YHLQMDLG", albumCover: "" },
  { id: 80, name: "Party", artist: "Bad Bunny", album: "YHLQMDLG", albumCover: "" },
  { id: 81, name: "Aguacero", artist: "Bad Bunny", album: "YHLQMDLG", albumCover: "" },
  { id: 82, name: "Ensename a Bailar", artist: "Bad Bunny", album: "YHLQMDLG", albumCover: "" },
  { id: 83, name: "Ojitos Lindos", artist: "Bad Bunny", album: "YHLQMDLG", albumCover: "" },
  { id: 84, name: "Dos Mil 16", artist: "Bad Bunny", album: "YHLQMDLG", albumCover: "" },
  { id: 85, name: "El Apagon", artist: "Bad Bunny", album: "YHLQMDLG", albumCover: "" },
  { id: 86, name: "Otro Atardecer", artist: "Bad Bunny", album: "YHLQMDLG", albumCover: "" },
  { id: 87, name: "Un Coco", artist: "Bad Bunny", album: "YHLQMDLG", albumCover: "" },
  { id: 88, name: "Andrea", artist: "Bad Bunny", album: "YHLQMDLG", albumCover: "" },
  { id: 89, name: "Me Fui de Vacaciones", artist: "Bad Bunny", album: "YHLQMDLG", albumCover: "" },
  { id: 90, name: "Un Verano Sin Ti", artist: "Bad Bunny", album: "YHLQMDLG", albumCover: "" },
  { id: 91, name: "Agosto", artist: "Bad Bunny", album: "YHLQMDLG", albumCover: "" },
  { id: 92, name: "Callaita", artist: "Bad Bunny", album: "YHLQMDLG", albumCover: "" },
  { id: 93, name: "NADIE SABE", artist: "Bad Bunny", album: "YHLQMDLG", albumCover: "" },
  { id: 94, name: "MONACO", artist: "Bad Bunny", album: "YHLQMDLG", albumCover: "" },
  { id: 95, name: "FINA", artist: "Bad Bunny", album: "YHLQMDLG", albumCover: "" },
  { id: 96, name: "HIBIKI", artist: "Bad Bunny", album: "YHLQMDLG", albumCover: "" },
  { id: 97, name: "MR. OCTOBER", artist: "Bad Bunny", album: "YHLQMDLG", albumCover: "" },
  { id: 98, name: "CYBERTRUCK", artist: "Bad Bunny", album: "YHLQMDLG", albumCover: "" },
  { id: 99, name: "VOU 787", artist: "Bad Bunny", album: "YHLQMDLG", albumCover: "" },
  { id: 100, name: "SEDA", artist: "Bad Bunny", album: "YHLQMDLG", albumCover: "" },
  { id: 101, name: "GRACIAS POR NADA", artist: "Bad Bunny", album: "YHLQMDLG", albumCover: "" },
  { id: 102, name: "TELEFONO NUEVO", artist: "Bad Bunny", album: "YHLQMDLG", albumCover: "" },
  { id: 103, name: "BABY NUEVA", artist: "Bad Bunny", album: "YHLQMDLG", albumCover: "" },
  { id: 104, name: "MERCEDES CAROTA", artist: "Bad Bunny", album: "YHLQMDLG", albumCover: "" },
  { id: 105, name: "LOS PITS", artist: "Bad Bunny", album: "YHLQMDLG", albumCover: "" },
  { id: 106, name: "VUELVE CANDY B", artist: "Bad Bunny", album: "YHLQMDLG", albumCover: "" },
  { id: 107, name: "BATICANO", artist: "Bad Bunny", album: "YHLQMDLG", albumCover: "" },
  { id: 108, name: "NO ME QUIERO CASAR", artist: "Bad Bunny", album: "YHLQMDLG", albumCover: "" },
  { id: 109, name: "WHERE SHE GOES", artist: "Bad Bunny", album: "YHLQMDLG", albumCover: "" },
  { id: 110, name: "THUNDER LIGHTNING", artist: "Bad Bunny", album: "YHLQMDLG", albumCover: "" },
  { id: 111, name: "PERRO NEGRO", artist: "Bad Bunny", album: "YHLQMDLG", albumCover: "" },
  { id: 112, name: "EUROPA", artist: "Bad Bunny", album: "YHLQMDLG", albumCover: "" },
  { id: 113, name: "ACHO PR", artist: "Bad Bunny", album: "YHLQMDLG", albumCover: "" },
  { id: 114, name: "UN PREVIEW", artist: "Bad Bunny", album: "YHLQMDLG", albumCover: "" },
  { id: 115, name: "NUEVAYoL", artist: "Bad Bunny", album: "YHLQMDLG", albumCover: "" },
  { id: 116, name: "VOY A LLeVARTE PA PR", artist: "Bad Bunny", album: "YHLQMDLG", albumCover: "" },
  { id: 117, name: "BAILE INoLVIDABLE", artist: "Bad Bunny", album: "YHLQMDLG", albumCover: "" },
  { id: 118, name: "PERFuMITO NUEVO", artist: "Bad Bunny", album: "YHLQMDLG", albumCover: "" },
  { id: 119, name: "WELTiTA", artist: "Bad Bunny", album: "YHLQMDLG", albumCover: "" },
  { id: 120, name: "VeLDA", artist: "Bad Bunny", album: "YHLQMDLG", albumCover: "" },
  { id: 121, name: "EL CLuB", artist: "Bad Bunny", album: "YHLQMDLG", albumCover: "" },
  { id: 122, name: "KETU TeCRE", artist: "Bad Bunny", album: "YHLQMDLG", albumCover: "" },
  { id: 123, name: "BOKeTE", artist: "Bad Bunny", album: "YHLQMDLG", albumCover: "" },
  { id: 124, name: "KLOuFRENS", artist: "Bad Bunny", album: "YHLQMDLG", albumCover: "" },
  { id: 125, name: "TURiSTA", artist: "Bad Bunny", album: "YHLQMDLG", albumCover: "" },
  { id: 126, name: "CAFe CON RON", artist: "Bad Bunny", album: "YHLQMDLG", albumCover: "" },
  { id: 127, name: "PIToRRO DE COCO", artist: "Bad Bunny", album: "YHLQMDLG", albumCover: "" },
  { id: 128, name: "LO QUE LE PASO A HAWAii", artist: "Bad Bunny", album: "YHLQMDLG", albumCover: "" },
  { id: 129, name: "EoO", artist: "Bad Bunny", album: "YHLQMDLG", albumCover: "" },
  { id: 130, name: "DtMF", artist: "Bad Bunny", album: "YHLQMDLG", albumCover: "" },
  { id: 131, name: "LA MuDANZA", artist: "Bad Bunny", album: "YHLQMDLG", albumCover: "" },
  { id: 132, name: "Otra Vez", artist: "Bad Bunny", album: "YHLQMDLG", albumCover: "" },
  { id: 133, name: "Diles", artist: "Bad Bunny", album: "YHLQMDLG", albumCover: "" },
  { id: 134, name: "Tu No Vive Asi", artist: "Bad Bunny", album: "YHLQMDLG", albumCover: "" },
  { id: 135, name: "Soy Peor", artist: "Bad Bunny", album: "YHLQMDLG", albumCover: "" },
  { id: 136, name: "Caile", artist: "Bad Bunny", album: "YHLQMDLG", albumCover: "" },
  { id: 137, name: "Pa Ti", artist: "Bad Bunny", album: "YHLQMDLG", albumCover: "" },
  { id: 138, name: "Crecia", artist: "Bad Bunny", album: "YHLQMDLG", albumCover: "" },
  { id: 139, name: "Amigos y Enemigos Remix", artist: "Bad Bunny", album: "YHLQMDLG", albumCover: "" },
  { id: 140, name: "Me Llueven 2", artist: "Bad Bunny", album: "YHLQMDLG", albumCover: "" },
  { id: 141, name: "Me Llueven 3.o", artist: "Bad Bunny", album: "YHLQMDLG", albumCover: "" },
  { id: 142, name: "No Te Hagas", artist: "Bad Bunny", album: "YHLQMDLG", albumCover: "" },
  { id: 143, name: "Tranquilo", artist: "Bad Bunny", album: "YHLQMDLG", albumCover: "" },
  { id: 144, name: "Trepate", artist: "Bad Bunny", album: "YHLQMDLG", albumCover: "" },
  { id: 145, name: "Me Mata", artist: "Bad Bunny", album: "YHLQMDLG", albumCover: "" },
  { id: 146, name: "Blockia", artist: "Bad Bunny", album: "YHLQMDLG", albumCover: "" },
  { id: 147, name: "Ahora Me Llama", artist: "Bad Bunny", album: "YHLQMDLG", albumCover: "" },
  { id: 148, name: "Un Ratito Mas", artist: "Bad Bunny", album: "YHLQMDLG", albumCover: "" },
  { id: 149, name: "Soy Peor Remix", artist: "Bad Bunny", album: "YHLQMDLG", albumCover: "" },
  { id: 150, name: "Demonia Baila", artist: "Bad Bunny", album: "YHLQMDLG", albumCover: "" },
  { id: 151, name: "Give It Up", artist: "Bad Bunny", album: "YHLQMDLG", albumCover: "" },
  { id: 152, name: "Netflixxx", artist: "Bad Bunny", album: "YHLQMDLG", albumCover: "" },
  { id: 153, name: "Tu No Metes Cabra", artist: "Bad Bunny", album: "YHLQMDLG", albumCover: "" },
  { id: 154, name: "Mayores", artist: "Bad Bunny", album: "YHLQMDLG", albumCover: "" },
  { id: 155, name: "Me Llueven Extenden Version", artist: "Bad Bunny", album: "YHLQMDLG", albumCover: "" },
  { id: 156, name: "Panamera Remix", artist: "Bad Bunny", album: "YHLQMDLG", albumCover: "" },
  { id: 157, name: "Bailame Remix", artist: "Bad Bunny", album: "YHLQMDLG", albumCover: "" },
  { id: 158, name: "Lean", artist: "Bad Bunny", album: "YHLQMDLG", albumCover: "" },
  { id: 159, name: "Mayores Urban Tropical", artist: "Bad Bunny", album: "YHLQMDLG", albumCover: "" },
  { id: 160, name: "Vuelve", artist: "Bad Bunny", album: "YHLQMDLG", albumCover: "" },
  { id: 161, name: "Ahora Me Llama Remix", artist: "Bad Bunny", album: "YHLQMDLG", albumCover: "" },
  { id: 162, name: "Tu No Metes Cabra Remix", artist: "Bad Bunny", album: "YHLQMDLG", albumCover: "" },
  { id: 163, name: "Krippy Kush", artist: "Bad Bunny", album: "YHLQMDLG", albumCover: "" },
  { id: 164, name: "Chambea", artist: "Bad Bunny", album: "YHLQMDLG", albumCover: "" },
  { id: 165, name: "Favorito De Los Capo Remix", artist: "Bad Bunny", album: "YHLQMDLG", albumCover: "" },
  { id: 166, name: "Amantes de una Noche", artist: "Bad Bunny", album: "YHLQMDLG", albumCover: "" },
  { id: 167, name: "El Combo Me Llama 2", artist: "Bad Bunny", album: "YHLQMDLG", albumCover: "" },
  { id: 168, name: "Fantasia", artist: "Bad Bunny", album: "YHLQMDLG", albumCover: "" },
  { id: 169, name: "Amorfoda", artist: "Bad Bunny", album: "YHLQMDLG", albumCover: "" },
  { id: 170, name: "Dime Si Te Acuerdas", artist: "Bad Bunny", album: "YHLQMDLG", albumCover: "" },
  { id: 171, name: "Loca Remix", artist: "Bad Bunny", album: "YHLQMDLG", albumCover: "" },
  { id: 172, name: "Deime", artist: "Bad Bunny", album: "YHLQMDLG", albumCover: "" },
  { id: 173, name: "Explicale", artist: "Bad Bunny", album: "YHLQMDLG", albumCover: "" },
  { id: 174, name: "Te Bote", artist: "Bad Bunny", album: "YHLQMDLG", albumCover: "" },
  { id: 175, name: "Te Descuido", artist: "Bad Bunny", album: "YHLQMDLG", albumCover: "" },
  { id: 176, name: "I Like It", artist: "Bad Bunny", album: "YHLQMDLG", albumCover: "" },
  { id: 177, name: "Original", artist: "Bad Bunny", album: "YHLQMDLG", albumCover: "" },
  { id: 178, name: "Satisfaccion", artist: "Bad Bunny", album: "YHLQMDLG", albumCover: "" },
  { id: 179, name: "Cual Es Tu Plan", artist: "Bad Bunny", album: "YHLQMDLG", albumCover: "" },
  { id: 180, name: "Vamos Pa la Calle", artist: "Bad Bunny", album: "YHLQMDLG", albumCover: "" },
  { id: 181, name: "Como Soy", artist: "Bad Bunny", album: "YHLQMDLG", albumCover: "" },
  { id: 182, name: "Esta Rico", artist: "Bad Bunny", album: "YHLQMDLG", albumCover: "" },
  { id: 183, name: "MIA feat Drake", artist: "Bad Bunny", album: "YHLQMDLG", albumCover: "" },
  { id: 184, name: "Te Guste", artist: "Bad Bunny", album: "YHLQMDLG", albumCover: "" },
  { id: 185, name: "LOYAL", artist: "Bad Bunny", album: "YHLQMDLG", albumCover: "" },
  { id: 186, name: "COMO SE SIENTE", artist: "Bad Bunny", album: "YHLQMDLG", albumCover: "" },
  { id: 187, name: "UN DIA ONE DAY", artist: "Bad Bunny", album: "YHLQMDLG", albumCover: "" },
  { id: 188, name: "Yo Perreo Sola Remix", artist: "Bad Bunny", album: "YHLQMDLG", albumCover: "" },
  { id: 189, name: "100 MILLONES", artist: "Bad Bunny", album: "YHLQMDLG", albumCover: "" },
  { id: 190, name: "Yonaguni", artist: "Bad Bunny", album: "YHLQMDLG", albumCover: "" },
  { id: 191, name: "AM Remix", artist: "Bad Bunny", album: "YHLQMDLG", albumCover: "" },
  { id: 192, name: "De Museo", artist: "Bad Bunny", album: "YHLQMDLG", albumCover: "" },
  { id: 193, name: "Volando Remix", artist: "Bad Bunny", album: "YHLQMDLG", albumCover: "" },
  { id: 194, name: "Volvi", artist: "Bad Bunny", album: "YHLQMDLG", albumCover: "" },
  { id: 195, name: "Lo Siento BB", artist: "Bad Bunny", album: "YHLQMDLG", albumCover: "" },
  { id: 196, name: "La Jumpa", artist: "Bad Bunny", album: "YHLQMDLG", albumCover: "" },
  { id: 197, name: "Gato de Noche", artist: "Bad Bunny", album: "YHLQMDLG", albumCover: "" },
  { id: 198, name: "un x100to", artist: "Bad Bunny", album: "YHLQMDLG", albumCover: "" },
  { id: 199, name: "K-POP", artist: "Bad Bunny", album: "YHLQMDLG", albumCover: "" },
  { id: 200, name: "ADIVINO", artist: "Bad Bunny", album: "YHLQMDLG", albumCover: "" },
  { id: 201, name: "Una Velita", artist: "Bad Bunny", album: "YHLQMDLG", albumCover: "" },
  { id: 202, name: "Que Pasaria", artist: "Bad Bunny", album: "YHLQMDLG", albumCover: "" },
  { id: 203, name: "ALAMBRE PuA", artist: "Bad Bunny", album: "YHLQMDLG", albumCover: "" },
  { id: 204, name: "Soltera Remix", artist: "Bad Bunny", album: "YHLQMDLG", albumCover: "" },
  { id: 205, name: "No Me Conoce Remix", artist: "Bad Bunny", album: "YHLQMDLG", albumCover: "" },
  { id: 206, name: "Estamos Arriba", artist: "Bad Bunny", album: "YHLQMDLG", albumCover: "" },
  { id: 207, name: "Bellacoso", artist: "Bad Bunny", album: "YHLQMDLG", albumCover: "" },
  { id: 208, name: "Kemba Walker", artist: "Bad Bunny", album: "YHLQMDLG", albumCover: "" },
  { id: 209, name: "Subimos de Rango", artist: "Bad Bunny", album: "YHLQMDLG", albumCover: "" },
  { id: 210, name: "Soy El Diablo Remix", artist: "Bad Bunny", album: "YHLQMDLG", albumCover: "" },
  { id: 211, name: "Cantalo", artist: "Bad Bunny", album: "YHLQMDLG", albumCover: "" },
  { id: 212, name: "MOJABI GHOST", artist: "Bad Bunny", album: "YHLQMDLG", albumCover: "" }
];

class App {
    constructor() {
        this.currentUser = null;
        this.currentPage = 'auth';
        this.songs = [];
        this.userPredictions = [];
        this.leaderboard = [];
        this.correctSetlist = [];
        this.timerId = null;

        this.init();
    }

    async init() {
        await this.checkAuth();
        this.startAutoRefresh();
    }

    async checkAuth() {
        try {
            const res = await fetch('/api/users/current');
            if (res.ok) {
                this.currentUser = await res.json();
                this.renderMainPage();
                this.loadUserPredictions();
                this.loadBadBunnySongs();
            } else {
                this.renderSignup();
            }
        } catch (err) {
            console.error('Auth check error:', err);
            this.renderSignup();
        }
    }

    setupEventListeners() {
        // Auth
        const signupBtn = document.getElementById('signupBtn');
        const signinBtn = document.getElementById('signinBtn');
        const toggleAuthBtn = document.getElementById('toggleAuthBtn');

        if (signupBtn) {
            signupBtn.addEventListener('click', () => this.signup());
        }
        if (signinBtn) {
            signinBtn.addEventListener('click', () => this.signin());
        }
        if (toggleAuthBtn) {
            toggleAuthBtn.addEventListener('click', () => this.toggleAuth());
        }

        // Main app
        const logoutBtn = document.getElementById('logoutBtn');
        const leaderboardBtn = document.getElementById('leaderboardBtn');
        const adminBtn = document.getElementById('adminBtn');
        const searchInput = document.getElementById('songSearch');

        if (logoutBtn) {
            logoutBtn.addEventListener('click', () => this.logout());
        }
        if (leaderboardBtn) {
            leaderboardBtn.addEventListener('click', () => this.showPage('leaderboard'));
        }
        if (adminBtn) {
            adminBtn.addEventListener('click', () => this.showPage('admin'));
        }
        if (searchInput) {
            searchInput.addEventListener('input', (e) => this.searchSongs(e.target.value));
        }
    }

    async signup() {
        const firstName = document.getElementById('signupFirstName').value.trim();
        const lastName = document.getElementById('signupLastName').value.trim();
        const password = document.getElementById('signupPassword').value;

        if (!firstName || !lastName) {
            this.showError('Please enter first and last name');
            return;
        }

        try {
            const res = await fetch('/api/users/signup', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ firstName, lastName, password: password || null })
            });

            const data = await res.json();
            if (res.ok) {
                this.currentUser = { id: data.userId, firstName, lastName };
                this.renderMainPage();
                this.loadUserPredictions();
                this.loadBadBunnySongs();
                this.showSuccess('Account created! Welcome ' + firstName + '!');
            } else {
                this.showError(data.error || 'Signup failed');
            }
        } catch (err) {
            this.showError('Network error: ' + err.message);
        }
    }

    async signin() {
        const firstName = document.getElementById('signinFirstName').value.trim();
        const lastName = document.getElementById('signinLastName').value.trim();
        const password = document.getElementById('signinPassword').value;

        if (!firstName || !lastName) {
            this.showError('Please enter first and last name');
            return;
        }

        try {
            const res = await fetch('/api/users/signin', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ firstName, lastName, password: password || null })
            });

            const data = await res.json();
            if (res.ok) {
                this.currentUser = { id: data.userId, firstName, lastName };
                this.renderMainPage();
                this.loadUserPredictions();
                this.loadBadBunnySongs();
                this.showSuccess('Welcome back, ' + firstName + '!');
            } else {
                this.showError(data.error || 'Invalid credentials');
            }
        } catch (err) {
            this.showError('Network error: ' + err.message);
        }
    }

    async logout() {
        try {
            await fetch('/api/users/signout', { method: 'POST' });
            this.currentUser = null;
            this.userPredictions = [];
            this.renderSignup();
        } catch (err) {
            this.showError('Logout failed');
        }
    }

    toggleAuth() {
        const authContainer = document.querySelector('.auth-container');
        const isSignup = authContainer.querySelector('#signupBtn') != null;
        
        if (isSignup) {
            this.renderSignin();
        } else {
            this.renderSignup();
        }
    }

    clearAuthForms() {
        document.getElementById('signupFirstName').value = '';
        document.getElementById('signupLastName').value = '';
        document.getElementById('signupPassword').value = '';
        document.getElementById('signinFirstName').value = '';
        document.getElementById('signinLastName').value = '';
        document.getElementById('signinPassword').value = '';
    }

    async loadBadBunnySongs() {
        try {
            const res = await fetch('/api/spotify/bad-bunny-songs');
            const data = await res.json();
            this.songs = data.songs || [];
            this.renderSongList(this.songs);
        } catch (err) {
            console.error('Error loading songs:', err);
            this.showError('Failed to load songs. Please check Spotify API credentials in .env');
        }
    }

    searchSongs(query) {
        if (!query.trim()) {
            this.renderSongList(mockBadBunnySongs);
            return;
        }

        const searchQuery = query.toLowerCase();
        const matches = mockBadBunnySongs.filter(song => 
            song.name.toLowerCase().includes(searchQuery)
        );
        this.renderSongList(matches);
    }

    async loadUserPredictions() {
        try {
            const res = await fetch('/api/predictions/my-predictions');
            const data = await res.json();
            this.userPredictions = data.predictions || [];
            this.renderSetlist();
        } catch (err) {
            console.error('Error loading predictions:', err);
        }
    }

    async addSongToSetlist(song) {
        if (this.userPredictions.length >= 15) {
            this.showError('Maximum 15 songs allowed');
            return;
        }

        try {
            const res = await fetch('/api/predictions/add', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    songId: song.id,
                    songName: song.name,
                    artist: song.artist,
                    albumCover: song.albumCover
                })
            });

            const data = await res.json();
            if (res.ok) {
                this.loadUserPredictions();
                this.showSuccess(song.name + ' added to setlist!');
            } else {
                this.showError(data.error || 'Failed to add song');
            }
        } catch (err) {
            this.showError('Error adding song: ' + err.message);
        }
    }

    async removeSongFromSetlist(predictionId) {
        try {
            const res = await fetch(`/api/predictions/remove/${predictionId}`, {
                method: 'DELETE'
            });

            if (res.ok) {
                this.loadUserPredictions();
                this.showSuccess('Song removed from setlist');
            } else {
                this.showError('Failed to remove song');
            }
        } catch (err) {
            this.showError('Error removing song');
        }
    }

    renderSongList(songs) {
        const container = document.getElementById('songList');
        if (!container) return;

        if (!songs || songs.length === 0) {
            container.innerHTML = '<div class="loading">No songs found</div>';
            return;
        }

        const existingIds = new Set(this.userPredictions.map(p => p.songId));

        container.innerHTML = songs.map(song => `
            <div class="song-item" onclick="app.addSongToSetlist({
                id: '${song.id}',
                name: '${song.name.replace(/'/g, "\\'")}',
                artist: '${song.artist.replace(/'/g, "\\'")}',
                albumCover: '${song.albumCover}'
            })">
                <div class="song-info">
                    <div class="song-name">${song.name}</div>
                    <div class="song-artist">${song.artist}</div>
                </div>
                ${existingIds.has(song.id) ? '<div style="color: var(--primary); font-weight: 600;">✓</div>' : ''}
            </div>
        `).join('');
    }

    renderSetlist() {
        const container = document.getElementById('setlist');
        const countEl = document.getElementById('setlistCount');

        if (!container) return;

        countEl.innerHTML = `Songs: <span>${this.userPredictions.length}</span> (max 15 — you don't have to add 15)`;

        if (this.userPredictions.length === 0) {
            container.innerHTML = '<li style="padding: 20px; text-align: center; color: #aaa;">Search and add songs to create your setlist</li>';
            return;
        }

        container.innerHTML = this.userPredictions
            .sort((a, b) => a.position - b.position)
            .map(pred => `
                <li class="setlist-item" draggable="true" data-id="${pred.id}">
                    <div class="setlist-number">${pred.position}</div>
                    <div class="setlist-item-info">
                        <div class="setlist-item-name">${pred.songName}</div>
                        <div class="setlist-item-artist">${pred.artist}</div>
                    </div>
                    <button class="remove-btn" onclick="app.removeSongFromSetlist(${pred.id})">×</button>
                </li>
            `).join('');

        this.setupDragAndDrop();
    }

    setupDragAndDrop() {
        const setlist = document.getElementById('setlist');
        if (!setlist) return;

        let draggedElement = null;

        setlist.addEventListener('dragstart', (e) => {
            draggedElement = e.target.closest('.setlist-item');
            draggedElement.classList.add('dragging');
        });

        setlist.addEventListener('dragend', (e) => {
            draggedElement.classList.remove('dragging');
        });

        setlist.addEventListener('dragover', (e) => {
            e.preventDefault();
            const afterElement = this.getDragAfterElement(setlist, e.clientY);
            if (afterElement == null) {
                setlist.appendChild(draggedElement);
            } else {
                setlist.insertBefore(draggedElement, afterElement);
            }
        });

        setlist.addEventListener('drop', () => {
            const items = Array.from(setlist.querySelectorAll('.setlist-item'));
            const orderedIds = items.map(item => parseInt(item.dataset.id));
            this.reorderSetlist(orderedIds);
        });
    }

    getDragAfterElement(container, y) {
        const draggableElements = [...container.querySelectorAll('.setlist-item:not(.dragging)')];
        return draggableElements.reduce((closest, child) => {
            const box = child.getBoundingClientRect();
            const offset = y - box.top - box.height / 2;

            if (offset < 0 && offset > closest.offset) {
                return { offset: offset, element: child };
            } else {
                return closest;
            }
        }, { offset: Number.NEGATIVE_INFINITY }).element;
    }

    async reorderSetlist(orderedIds) {
        try {
            await fetch('/api/predictions/reorder', {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ orderedIds })
            });
            this.loadUserPredictions();
        } catch (err) {
            console.error('Reorder error:', err);
        }
    }

    async loadLeaderboard() {
        try {
            const res = await fetch('/api/leaderboard');
            const data = await res.json();
            this.leaderboard = data.leaderboard || [];
            this.renderLeaderboard();
        } catch (err) {
            console.error('Leaderboard error:', err);
        }
    }

    renderLeaderboard() {
        const container = document.getElementById('leaderboardTable');
        if (!container) return;

        if (this.leaderboard.length === 0) {
            container.innerHTML = '<tr><td colspan="3" style="text-align: center; padding: 20px;">No predictions yet</td></tr>';
            return;
        }

        container.innerHTML = this.leaderboard.map((entry, index) => {
            let rankClass = '';
            if (index === 0) rankClass = 'rank-1';
            else if (index === 1) rankClass = 'rank-2';
            else if (index === 2) rankClass = 'rank-3';

            return `
                <tr>
                    <td class="rank ${rankClass}">#${index + 1}</td>
                    <td>${entry.firstName} ${entry.lastName}</td>
                    <td style="font-weight: 700; color: var(--primary);">${entry.score} points</td>
                </tr>
            `;
        }).join('');
    }

    async loadCorrectSetlist() {
        try {
            const res = await fetch('/api/admin/correct-setlist');
            const data = await res.json();
            this.correctSetlist = data.songs || [];
            this.renderCorrectSetlist();
        } catch (err) {
            console.error('Error loading correct setlist:', err);
        }
    }

    renderCorrectSetlist() {
        const adminContainer = document.getElementById('correctSetlistContainer');
        const publicContainer = document.getElementById('publicCorrectSetlist');

        const emptyHTML = '<li style="padding: 20px; text-align: center; color: #aaa;">No songs marked as correct yet</li>';

        if (this.correctSetlist.length === 0) {
            if (adminContainer) adminContainer.innerHTML = emptyHTML;
            if (publicContainer) publicContainer.innerHTML = emptyHTML;
            return;
        }

        const html = this.correctSetlist.map((song, index) => {
            // determine if current signed-in user had this song in their predictions
            let matched = false;
            if (this.currentUser && Array.isArray(this.userPredictions)) {
                matched = this.userPredictions.some(p => String(p.songId) === String(song.songId));
            }

            return `
            <li class="correct-item ${matched ? 'matched' : ''}">
                <span style="color: var(--primary); font-weight: 700; min-width: 30px;">${index + 1}.</span>
                <div class="correct-item-info">
                    <div class="correct-item-name">${song.songName}</div>
                    <div class="correct-item-artist">${song.artist}</div>
                </div>
                ${adminContainer ? `<button class="danger-btn" onclick="app.removeCorrectSong('${song.songId}')">Remove</button>` : ''}
            </li>
        `}).join('');

        if (adminContainer) adminContainer.innerHTML = html;
        if (publicContainer) publicContainer.innerHTML = html;
    }

    async markCorrectSong() {
        const ownerPassword = document.getElementById('ownerPassword').value;
        const selectedValue = document.getElementById('correctSongSelect').value;
        const freeName = document.getElementById('freeSongName').value.trim();
        const freeArtist = document.getElementById('freeSongArtist').value.trim();

        if (!ownerPassword) {
            this.showError('Owner password required');
            return;
        }

        let payload = { ownerPassword };

        if (freeName) {
            // freewrite mode - create a unique free id
            const id = 'free-' + Date.now();
            payload.songId = id;
            payload.songName = freeName;
            payload.artist = freeArtist || 'Unknown';
            payload.albumCover = '';
        } else {
            if (!selectedValue) {
                this.showError('Select a song or enter one manually');
                return;
            }
            const song = JSON.parse(selectedValue);
            payload.songId = song.id;
            payload.songName = song.name;
            payload.artist = song.artist || 'Bad Bunny';
            payload.albumCover = song.albumCover || '';
        }

        try {
            const res = await fetch('/api/admin/add-correct-song', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });

            const data = await res.json();
            if (res.ok) {
                this.loadCorrectSetlist();
                document.getElementById('correctSongSearch').value = '';
                document.getElementById('correctSongSelect').value = '';
                document.getElementById('correctSongDropdown').style.display = 'none';
                document.getElementById('freeSongName').value = '';
                document.getElementById('freeSongArtist').value = '';
                this.showSuccess('Song marked as correct and leaderboard updated!');
            } else {
                this.showError(data.error || 'Failed to mark song');
            }
        } catch (err) {
            this.showError('Error: ' + err.message);
        }
    }

    searchAdminSongs(query) {
        const dropdown = document.getElementById('correctSongDropdown');
        if (!query.trim()) {
            dropdown.style.display = 'none';
            return;
        }

        const searchQuery = query.toLowerCase();
        const matches = mockBadBunnySongs.filter(song =>
            song.name.toLowerCase().includes(searchQuery)
        ).slice(0, 10);

        if (matches.length === 0) {
            dropdown.innerHTML = '<div class="dropdown-item" style="padding: 10px; color: #999;">No songs found</div>';
            dropdown.style.display = 'block';
            return;
        }

        dropdown.innerHTML = matches.map(song => `
            <div class="dropdown-item" onclick="app.selectAdminSong('${song.id}', '${song.name.replace(/'/g, "\\'")}')">
                <div style="font-weight: 600; color: #fff;">${song.name}</div>
            </div>
        `).join('');
        dropdown.style.display = 'block';
    }

    selectAdminSong(id, name) {
        document.getElementById('correctSongSelect').value = JSON.stringify({ id, name });
        document.getElementById('correctSongSearch').value = name;
        document.getElementById('correctSongDropdown').style.display = 'none';
    }

    async removeCorrectSong(songId) {
        const ownerPassword = prompt('Enter owner password to remove this song:');
        if (!ownerPassword) return;

        try {
            const res = await fetch(`/api/admin/remove-correct-song/${songId}`, {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ ownerPassword })
            });

            if (res.ok) {
                this.loadCorrectSetlist();
                this.loadLeaderboard();
                this.showSuccess('Song removed');
            } else {
                this.showError('Failed to remove song');
            }
        } catch (err) {
            this.showError('Error: ' + err.message);
        }
    }

    async loadUsers() {
        const ownerPassword = document.getElementById('deleteUserPassword').value;

        if (!ownerPassword) {
            this.showError('Owner password required');
            return;
        }

        try {
            const res = await fetch('/api/admin/get-users', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ ownerPassword })
            });

            const data = await res.json();
            if (res.ok) {
                const select = document.getElementById('userSelect');
                select.innerHTML = '<option value="">-- Select a user --</option>';
                
                data.users.forEach(user => {
                    const option = document.createElement('option');
                    option.value = user.id;
                    option.textContent = `${user.firstName} ${user.lastName} (ID: ${user.id})`;
                    select.appendChild(option);
                });

                this.showSuccess(`Loaded ${data.users.length} users`);
            } else {
                this.showError(data.error || 'Failed to load users');
            }
        } catch (err) {
            this.showError('Error: ' + err.message);
        }
    }

    async deleteUser() {
        const ownerPassword = document.getElementById('deleteUserPassword').value;
        const userId = document.getElementById('userSelect').value;

        if (!ownerPassword) {
            this.showError('Owner password required');
            return;
        }

        if (!userId) {
            this.showError('Select a user to delete');
            return;
        }

        // Get user name from select
        const userName = document.getElementById('userSelect').options[document.getElementById('userSelect').selectedIndex].text;

        if (!confirm(`Are you sure you want to delete ${userName}? This cannot be undone.`)) {
            return;
        }

        try {
            const res = await fetch('/api/admin/delete-user', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    ownerPassword,
                    userId: parseInt(userId)
                })
            });

            const data = await res.json();
            if (res.ok) {
                this.loadUsers(); // Reload user list
                this.loadLeaderboard(); // Update leaderboard
                document.getElementById('userSelect').value = '';
                this.showSuccess('User deleted successfully');
            } else {
                this.showError(data.error || 'Failed to delete user');
            }
        } catch (err) {
            this.showError('Error: ' + err.message);
        }
    }

    showPage(pageName) {
        this.currentPage = pageName;

        document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
        const page = document.getElementById(pageName + 'Page');
        if (page) {
            page.classList.add('active');
        }

        if (pageName === 'leaderboard') {
            this.loadLeaderboard();
            this.loadCorrectSetlist();
        } else if (pageName === 'admin') {
            this.loadCorrectSetlist();
            this.loadLeaderboard();
        } else if (pageName === 'main') {
            this.renderSetlist();
        }
    }

    startAutoRefresh() {
        // Refresh leaderboard and correct setlist every 10 seconds when on those pages
        setInterval(() => {
            if (this.currentPage === 'leaderboard') {
                this.loadLeaderboard();
            } else if (this.currentPage === 'admin') {
                this.loadCorrectSetlist();
                this.loadLeaderboard();
            } else if (this.currentPage === 'main') {
                this.renderSetlist();
            }
        }, 10000);
    }

    showError(message) {
        const app = document.getElementById('app');
        const msg = document.createElement('div');
        msg.className = 'error-message';
        msg.textContent = message;
        app.insertBefore(msg, app.firstChild);
        setTimeout(() => msg.remove(), 5000);
    }

    showSuccess(message) {
        const app = document.getElementById('app');
        const msg = document.createElement('div');
        msg.className = 'success-message';
        msg.textContent = message;
        app.insertBefore(msg, app.firstChild);
        setTimeout(() => msg.remove(), 5000);
    }

    renderSignup() {
        document.getElementById('app').innerHTML = `
            <div class="container">
                <header>
                    <h1>🎤 Bad Bunny Setlist Predictor 🎤</h1>
                    <p>Predict what Bad Bunny will play at Super Bowl LX</p>
                </header>
                
                <div class="auth-container">
                    <h2>Create Account</h2>
                    <div id="errorContainer"></div>
                    <div class="form-group">
                        <label>First Name</label>
                        <input type="text" id="signupFirstName" placeholder="Enter your first name">
                    </div>
                    <div class="form-group">
                        <label>Last Name</label>
                        <input type="text" id="signupLastName" placeholder="Enter your last name">
                    </div>
                    <div class="form-group">
                        <label>Password (Optional)</label>
                        <input type="password" id="signupPassword" placeholder="Optional - to edit predictions later">
                    </div>
                    <button id="signupBtn">Create Account</button>
                    <div class="auth-toggle">
                        Already have an account? <a id="toggleAuthBtn">Sign In</a>
                    </div>
                </div>
            </div>
        `;
        this.setupEventListeners();
    }

    renderSignin() {
        document.getElementById('app').innerHTML = `
            <div class="container">
                <header>
                    <h1>🎤 Bad Bunny Setlist Predictor 🎤</h1>
                    <p>Predict what Bad Bunny will play at Super Bowl LX</p>
                </header>
                
                <div class="auth-container">
                    <h2>Sign In</h2>
                    <div id="errorContainer"></div>
                    <div class="form-group">
                        <label>First Name</label>
                        <input type="text" id="signinFirstName" placeholder="Enter your first name">
                    </div>
                    <div class="form-group">
                        <label>Last Name</label>
                        <input type="text" id="signinLastName" placeholder="Enter your last name">
                    </div>
                    <div class="form-group">
                        <label>Password (if you set one)</label>
                        <input type="password" id="signinPassword" placeholder="Leave empty if no password set">
                    </div>
                    <button id="signinBtn">Sign In</button>
                    <div class="auth-toggle">
                        Don't have an account? <a id="toggleAuthBtn">Create One</a>
                    </div>
                </div>
            </div>
        `;
        this.setupEventListeners();
    }

    renderMainPage() {
        const now = new Date();
        const deadline = new Date();
        deadline.setHours(19, 30, 0, 0);
        const timeUntilDeadline = deadline - now;
        const isOpen = timeUntilDeadline > 0;

        document.getElementById('app').innerHTML = `
            <div class="container">
                <header>
                    <h1>🎤 Bad Bunny Setlist Predictor 🎤</h1>
                    <p>Super Bowl LX • Predict the Setlist</p>
                    <div class="nav-buttons">
                        <button id="mainPageBtn" class="secondary-btn">My Setlist</button>
                        <button id="leaderboardBtn" class="secondary-btn">🏆 Leaderboard</button>
                        <button id="adminBtn" class="secondary-btn">⚙️ Admin</button>
                        <button id="logoutBtn" class="secondary-btn">Log Out (${this.currentUser.firstName})</button>
                    </div>
                </header>

                <div id="authPage" class="page">
                </div>

                <div id="mainPage" class="page">
                    ${!isOpen ? '<div class="deadline-warning">Predictions are closed! Voting ended at 7:30 PM</div>' : '<div class="success-message">Predictions open until 7:30 PM tonight!</div>'}
                    
                    <div class="main-content">
                        <div class="search-section">
                            <h2>Search Songs</h2>
                            <div class="search-box">
                                <input type="text" id="songSearch" placeholder="Search Bad Bunny songs...">
                            </div>
                            <div id="songList" class="song-list">
                                <div class="loading">
                                    <div class="spinner"></div>
                                    Loading Bad Bunny's songs...
                                </div>
                            </div>
                        </div>

                        <div class="setlist-section">
                            <h2>Your Setlist</h2>
                            <div class="setlist-count">
                                <span id="setlistCount">Songs: <span>0</span> (max 15 — you don't have to add 15)</span>
                            </div>
                            <ul id="setlist" class="setlist"></ul>
                        </div>
                    </div>
                </div>

                <div id="leaderboardPage" class="page">
                    <div class="leaderboard-split">
                        <div class="leaderboard-container left">
                            <h2>🏆 Leaderboard</h2>
                            <table class="leaderboard-table">
                                <thead>
                                    <tr>
                                        <th>Rank</th>
                                        <th>Player</th>
                                        <th>Score</th>
                                    </tr>
                                </thead>
                                <tbody id="leaderboardTable">
                                    <tr><td colspan="3" style="text-align: center; padding: 20px;">Loading...</td></tr>
                                </tbody>
                            </table>
                        </div>

                        <div class="corrects-container right">
                            <h2>Actual Songs Performed</h2>
                            <ul id="publicCorrectSetlist" class="correct-setlist">
                                <li style="padding: 20px; text-align: center; color: #aaa;">Loading...</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div id="adminPage" class="page">
                    <div class="admin-header">
                        <h2>⚙️ Admin Panel</h2>
                        <p>Mark songs as played and view the leaderboard</p>
                    </div>

                    <div class="admin-grid">
                        <div class="admin-section">
                            <h3>Mark Song as Correct</h3>
                            <div class="form-group">
                                <label>Owner Password</label>
                                <input type="password" id="ownerPassword" placeholder="Enter owner password">
                            </div>
                            <div class="form-group" style="position: relative;">
                                <label>Search Song</label>
                                <input type="text" id="correctSongSearch" placeholder="Type song name..." oninput="app.searchAdminSongs(this.value)" autocomplete="off">
                                <input type="hidden" id="correctSongSelect">
                                <div id="correctSongDropdown" class="dropdown" style="display: none; position: absolute; top: 100%; left: 0; right: 0; background: rgba(0,0,0,0.9); border: 2px solid var(--primary); border-radius: 8px; max-height: 300px; overflow-y: auto; z-index: 1000;"></div>
                            </div>
                            <div class="form-group">
                                <label>Or enter song name (freewrite)</label>
                                <input type="text" id="freeSongName" placeholder="Enter song name manually (optional)">
                            </div>
                            <div class="form-group">
                                <label>Artist (optional)</label>
                                <input type="text" id="freeSongArtist" placeholder="Artist name (optional)">
                            </div>
                            <button onclick="app.markCorrectSong()">Mark as Correct</button>
                        </div>

                        <div class="admin-section">
                            <h3>Songs Marked Correct (${this.correctSetlist.length})</h3>
                            <ul id="correctSetlistContainer" class="correct-setlist">
                                <li style="padding: 20px; text-align: center; color: #aaa;">Loading...</li>
                            </ul>
                        </div>

                        <div class="admin-section">
                            <h3>Delete User</h3>
                            <div class="form-group">
                                <label>Owner Password</label>
                                <input type="password" id="deleteUserPassword" placeholder="Enter owner password">
                            </div>
                            <button onclick="app.loadUsers()" style="margin-bottom: 15px;">Load Users</button>
                            <div class="form-group">
                                <label>Select User</label>
                                <select id="userSelect" style="width: 100%; padding: 8px; border: 2px solid var(--primary); border-radius: 8px; background: rgba(0,0,0,0.3); color: white;">
                                    <option value="">-- Select a user --</option>
                                </select>
                            </div>
                            <button onclick="app.deleteUser()" style="background: #d32f2f; border-color: #d32f2f;">Delete User</button>
                        </div>
                    </div>

                    <div style="margin-top: 30px;">
                        <div class="leaderboard-container">
                            <h2>📊 Live Leaderboard</h2>
                            <table class="leaderboard-table">
                                <thead>
                                    <tr>
                                        <th>Rank</th>
                                        <th>Player</th>
                                        <th>Score</th>
                                    </tr>
                                </thead>
                                <tbody id="adminLeaderboardTable">
                                    <tr><td colspan="3" style="text-align: center; padding: 20px;">Loading...</td></tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        `;

        // Set up event listeners
        document.getElementById('mainPageBtn').addEventListener('click', () => this.showPage('main'));
        document.getElementById('leaderboardBtn').addEventListener('click', () => this.showPage('leaderboard'));
        document.getElementById('adminBtn').addEventListener('click', () => this.showPage('admin'));
        document.getElementById('logoutBtn').addEventListener('click', () => this.logout());
        document.getElementById('songSearch').addEventListener('input', (e) => this.searchSongs(e.target.value));

        this.showPage('main');
    }

    showPage(pageName) {
        this.currentPage = pageName;

        if (pageName === 'main') {
            document.getElementById('mainPage').classList.add('active');
            document.getElementById('leaderboardPage').classList.remove('active');
            document.getElementById('adminPage').classList.remove('active');
            this.renderSetlist();
        } else if (pageName === 'leaderboard') {
            document.getElementById('mainPage').classList.remove('active');
            document.getElementById('leaderboardPage').classList.add('active');
            document.getElementById('adminPage').classList.remove('active');
            this.loadLeaderboard();
        } else if (pageName === 'admin') {
            document.getElementById('mainPage').classList.remove('active');
            document.getElementById('leaderboardPage').classList.remove('active');
            document.getElementById('adminPage').classList.add('active');
            this.loadCorrectSetlist();
            this.loadLeaderboard();
            this.renderAdminLeaderboard();
        }
    }

    renderAdminLeaderboard() {
        const container = document.getElementById('adminLeaderboardTable');
        if (!container) return;

        if (this.leaderboard.length === 0) {
            container.innerHTML = '<tr><td colspan="3" style="text-align: center; padding: 20px;">No data yet</td></tr>';
            return;
        }

        container.innerHTML = this.leaderboard.map((entry, index) => {
            let rankClass = '';
            if (index === 0) rankClass = 'rank-1';
            else if (index === 1) rankClass = 'rank-2';
            else if (index === 2) rankClass = 'rank-3';

            return `
                <tr>
                    <td class="rank ${rankClass}">#${index + 1}</td>
                    <td>${entry.firstName} ${entry.lastName}</td>
                    <td style="font-weight: 700; color: var(--primary);">${entry.score}</td>
                </tr>
            `;
        }).join('');
    }
}

// Initialize app
let app;
document.addEventListener('DOMContentLoaded', () => {
    app = new App();
});
