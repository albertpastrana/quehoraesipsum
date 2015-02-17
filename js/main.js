ZeroClipboard.config( { swfPath: "//cdnjs.cloudflare.com/ajax/libs/zeroclipboard/2.2.0/ZeroClipboard.swf" } );

var client = new ZeroClipboard(document.getElementById('copy-to-cb'));

client.on('ready', function(event) {
    client.on( 'copy', function(event) {
        event.clipboardData.setData('text/plain', document.getElementById("paragraphs").value);
    });
});

client.on('error', function(event) {
    console.log( 'ZeroClipboard error of type "' + event.name + '": ' + event.message );
    ZeroClipboard.destroy();
});

function paragraphs(input) {
    var i = 0,
        paragraphCount = 1,
        howMany = Math.min(parseInt(input.value), 100),
        result = '';
    for (; paragraphCount <= howMany; i++) {
        result += sentences[i % sentences.length] + ' ';
        if (result.length > paragraphCount * 210) {
            result += '\n\n';
            paragraphCount++;
        }
    }
    document.getElementById("paragraphs").value = result;
}

function rnd(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

var sentences = ['¿Qué hora es?', 'Ocho.', '¿Dónde está la biblioteca?', 'Yo no sé, yo no sé.',
                 'Lunes.', 'Martes.', 'Miércoles.', 'Jueves.', 'Feliz Navidad.', '¿Qué hora es?',
                 'Telemundo.', 'Me llamo Derek, dos coca colas por favor.', 'Una cerveza para mí.',
                 'Yeeee, Macarena.', 'Señores, hay muchos tacos en México.', 'Número uno.',
                 'El pollo loco es muy delicioso.', 'Número dos.', 'Tres, cuatro, cinco, séis.',
                 'Ya no tiens que buscar por tu amor, porque siempre estaré al lado tuyo.',
                 'Soy una parte de tí y nunca más te abandonaré.', 'Sin tí, ¡ya no quiero vivir más!',
                 'Hey hey, como se dice "chill" en español.', 'Hace frío.', 'Frío partner, ¿qué hora es?',
                 'Creo, ¿cómo se llama?', 'Cinco de mayo, baby.', 'Hey, ustedes no hablan español.',
                 'Sí, sí, sí.', '¿Qué hora es?', '¿Qué hora es?', 'Ocho.', 'Señorita Becky, ¿cómo está usted?',
                 'Muy bien, gracias. ¿Y tu?', 'Señor Todd. ¿Dónde está el aeropuerto?', 'Vaya con Dios. Menudo.',
                 '¿Qué hora es?', 'La Bamba.', 'Dos Equis.', 'No, Rico Suave.', 'Roberto Duran.',
                 '¡No más!', 'Mi casa es su casa.', 'Señores, Elian González es en Cuba.', '¿Qué hora es?',
                 'El chihuahua... de Todd.', 'No, no, el chihuahua... de negro es grande.', '¿Qué hora es?',
                 'Numero uno.', 'Santa Bárbara, Santa María, Santa Claus.', '¡Paren la boda!',
                 'Este día no puede terminar con mi amor.',
                 'Tenemos que dar gracias a dios que podemos vivir sin miedo, pero si te casas con él, me rompes el corazón.',
                 '"Sorry", no comprendo el "heartbreak".', 'Poquito, "weirdo".', 'Chips and salsa, baby.', '¿Qué hora es?'];