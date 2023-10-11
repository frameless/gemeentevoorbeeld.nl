import React, { useState } from 'react';

export default function FormValidation() {
  const [formData, setFormData] = useState({
    naam: '',
    straat: '',
    huisnummer: '',
    postcode: '',
    woonplaats: '',
    telefoonnummer: '',
    mailadress: '',
  });

  const [errors, setErrors] = useState({
    naam: '',
    straat: '',
    huisnummer: '',
    postcode: '',
    woonplaats: '',
    telefoonnummer: '',
    mailadress: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = { ...errors };

    if (formData.naam.trim() === '') {
      newErrors.naam = 'Vul een valide naam in';
    } else {
      newErrors.naam = '';
    }

    if (formData.straat.trim() === '') {
      newErrors.straat = 'Vul geldige straat in';
    } else {
      newErrors.straat = '';
    }

    if (formData.huisnummer.trim() === '') {
      newErrors.huisnummer = 'Kies een huisnummer';
    } else {
      newErrors.huisnummer = '';
    }

    if (formData.postcode.trim() === '') {
      newErrors.postcode = 'Invalid';
    } else {
      newErrors.postcode = '';
    }

    if (formData.woonplaats.trim() === '') {
      newErrors.woonplaats = 'Invoer klopt niet! Pas aan!';
    } else {
      newErrors.woonplaats = '';
    }

    if (formData.telefoonnummer.trim() === '') {
      newErrors.telefoonnummer = 'Error code 112';
    } else {
      newErrors.telefoonnummer = '';
    }

    if (formData.mailadress.trim() === '') {
      newErrors.mailadress = 'Ongeldig';
    } else {
      newErrors.mailadress = '';
    }

    if (!Object.values(newErrors).some((error) => error !== '')) {
      setErrors(newErrors);
    }

    return (
      <form onSubmit={handleSubmit}>
        <label>
          Naam:
          <input type="text" name="naam" value={formData.naam} onChange={handleInputChange} />
          <div className="error">{errors.naam}</div>
        </label>

        <button type="submit">Versturen</button>
      </form>
    );
  };
}
