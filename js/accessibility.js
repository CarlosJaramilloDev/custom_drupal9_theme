window.addEventListener('load', function () {
    const options = {
      labels: {
        resetTitle: 'Resetear valores',
        closeTitle: 'Cerrar',
        menuTitle: 'Accesibilidad',
        increaseText: 'Aumentar tamaño del texto',
        decreaseText: 'Reducir tamaño del texto',
        increaseTextSpacing: 'Aumentar espaceado del texto',
        decreaseTextSpacing: 'Reducir espaceado del texto',
        increaseLineHeight: 'Aumentar interlineado',
        decreaseLineHeight: 'Reducir interlineado',
        invertColors: 'Invertir colores (Alto contraste)',
        grayHues: 'Escala de grises',
        underlineLinks: 'Destacar hipervínculos',
        bigCursor: 'Cursor grande',
        readingGuide: 'Guía de lectura',
        textToSpeech: 'Texto a voz',
        speechToText: 'Voz a texto',
        disableAnimations: 'Deshabilitar animaciones'
      },
      customFunctions: [
        {
          method: (cf, state) => {
            window.localStorage.clear();
            window.location.reload();
          },
          buttonText: 'Valores por defecto',
          id: 1,
          toggle: false,
          icon: 'restore_alt',
          emoji: '❓'
        },
        {
          method: (cf, state) => {
            window.location.reload();
          },
          buttonText: 'Cerrar menú',
          id: 1,
          toggle: false,
          icon: 'close',
          emoji: '❓'
        }
      ]
    };
    new Accessibility(options);
  }, false);