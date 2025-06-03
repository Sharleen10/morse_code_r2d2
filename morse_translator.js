   /**
         *  MorseCodeData - Singleton class to manage morse code mappings
         */
        class MorseCodeData {
            constructor() {
                if (MorseCodeData.instance) {
                    return MorseCodeData.instance;
                }

                this.MORSE_CODE_MAP = {
                    'A': '.-',    'B': '-...',  'C': '-.-.',  'D': '-..',   'E': '.',
                    'F': '..-.',  'G': '--.',   'H': '....',  'I': '..',    'J': '.---',
                    'K': '-.-',   'L': '.-..',  'M': '--',    'N': '-.',    'O': '---',
                    'P': '.--.',  'Q': '--.-',  'R': '.-.',   'S': '...',   'T': '-',
                    'U': '..-',   'V': '...-',  'W': '.--',   'X': '-..-',  'Y': '-.--',
                    'Z': '--..',
                    '0': '-----', '1': '.----', '2': '..---', '3': '...--', '4': '....-',
                    '5': '.....', '6': '-....', '7': '--...', '8': '---..', '9': '----.',
                    '.': '.-.-.-', ',': '--..--', '?': '..--..', "'": '.----.', '!': '-.-.--',
                    '/': '-..-.', '(': '-.--.', ')': '-.--.-', '&': '.-...', ':': '---...',
                    ';': '-.-.-.', '=': '-...-', '+': '.-.-.', '-': '-....-', '_': '..--.-',
                    '"': '.-..-.', '$': '...-..-', '@': '.--.-.'
                };

                this.REVERSE_MORSE_MAP = Object.fromEntries(
                    Object.entries(this.MORSE_CODE_MAP).map(([key, value]) => [value, key])
                );

                MorseCodeData.instance = this;
            }

            getMorseCode(char) {
                return this.MORSE_CODE_MAP[char.toUpperCase()];
            }

            getCharacter(morse) {
                return this.REVERSE_MORSE_MAP[morse];
            }

            getAllMappings() {
                return { ...this.MORSE_CODE_MAP };
            }
        }

         /**
         * MorseEncoder - Handles text to morse conversion
         */
        class MorseEncoder {
            constructor(morseData) {
                this.morseData = morseData;
            }

            encode(text) {
                if (!text || typeof text !== 'string') {
                    return '';
                }

                return text
                    .toUpperCase()
                    .split('')
                    .map(char => {
                        if (char === ' ') {
                            return '/';  
                        }
                        return this.morseData.getMorseCode(char) || char;  
                    })
                    .join(' ')
                    .replace(/\s+/g, ' ') 
                    .trim();
            }

            validateInput(text) {
                return text && typeof text === 'string' && text.trim().length > 0;
            }
        }