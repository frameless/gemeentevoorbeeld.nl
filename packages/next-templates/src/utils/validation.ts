export const teletexMultiline =
  '[\n\r -\\[\\]_a-z|\xA1-\xA5\xA7\xAA\xAB\xB0-\xB3\xB5-\xB7\xBA-\xCF\xD1-\xF7\xF9-\u0113\u0116-\u012B\u012E-\u0131\u0134-\u014D\u0150-\u017E\u2126]+';

export const teletex =
  '[ -\\[\\]_a-z|\xA1-\xA5\xA7\xAA\xAB\xB0-\xB3\xB5-\xB7\xBA-\xCF\xD1-\xF7\xF9-\u0113\u0116-\u012B\u012E-\u0131\u0134-\u014D\u0150-\u017E\u2126]+';

export const messageValidation = { required: 'Vul uw vraag in.' };

export const nameValidation = {
  required: 'Vul een naam in.',
  pattern: {
    value: new RegExp(`^${teletex}$`),
    message: 'De ingevulde naam is niet toegestaan. Gebruik geen speciale karakters.',
  },
  maxLength: { value: 200, message: 'De ingevulde naam is niet toegestaan. Gebruik niet meer dan 200 tekens.' },
};

export const streetValidation = {
  required: 'Vul een straat in.',
  pattern: {
    value: new RegExp(`^${teletex}$`),
    message: 'De ingevulde straat is niet toegestaan. Gebruik geen speciale karakters.',
  },
  maxLength: { value: 200, message: 'De ingevulde straat is niet toegestaan. Gebruik niet meer dan 200 tekens.' },
};

export const houseNumberValidation = {
  required: 'Vul een huisnummer in.',
  pattern: {
    value: /^[0-9]+$/,
    message:
      'Het ingevulde huisnummer is niet toegestaan. Gebruik alleen nummers. Tip: Vul letters in onder toevoeging.',
  },
  maxLength: { value: 5, message: 'Het ingevulde huisnummer is niet toegestaan. Gebruik niet meer dan 5 tekens.' },
};

export const houseNumberSuffixValidation = {
  required: false,
  pattern: {
    value: new RegExp(`^${teletex}$`),
    message: 'De ingevulde toevoeging is niet toegestaan. Gebruik geen speciale karakters.',
  },
  maxLength: { value: 4, message: 'De ingevulde toevoeging is niet toegestaan. Gebruik niet meer dan 4 tekens.' },
};

export const postalCodeValidation = {
  required: 'Vul een postcode in.',
  pattern: {
    value: /^[0-9]{4}\s*[A-Za-z]{2}$/,
    message: 'De ingevulde postcode is niet toegestaan. Vul een nederlandse postcode in, zoals bijvoorbeeld 1234AB.',
  },
  maxLength: { value: 7, message: 'De ingevulde postcode is niet toegestaan. Gebruik niet meer dan 7 tekens.' },
  minLength: { value: 6, message: 'De ingevulde postcode is niet toegestaan. Gebruik 6 tekens.' },
};

export const homeTownValidation = {
  required: 'Vul een woonplaats in.',
  pattern: {
    value: new RegExp(`^${teletex}$`),
    message: 'De ingevulde woonplaats is niet toegestaan. Gebruik geen speciale karakters.',
  },
  maxLength: { value: 80, message: 'De ingevulde woonplaats is niet toegestaan. Gebruik niet meer dan 80 tekens.' },
};

export const emailValidation = {
  required: 'Vul een e-mailadres in.',
  pattern: {
    value:
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message:
      'Het ingevulde e-mailadres is niet toegestaan. Vul een e-mailadres in, zoals bijvoorbeeld hallo@example.com.',
  },
  maxLength: { value: 200, message: 'Het ingevulde e-mailadres is niet toegestaan. Gebruik niet meer dan 200 tekens.' },
};

export const phoneValidation = {
  required: false,
  pattern: {
    value: /^\+?[0-9]+$/,
    message:
      'Het ingevulde telefoonnummer is niet toegestaan. Vul een telefoonnummer in, zoals bijvoorbeeld 06123456789 of +316123456789.',
  },
  maxLength: {
    value: 15,
    message: 'Het ingevulde telefoonnummer is niet toegestaan. Gebruik niet meer dan 15 tekens.',
  },
};
