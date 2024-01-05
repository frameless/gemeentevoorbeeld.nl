/**
 * @license EUPL-1.2
 * Copyright (c) 2024 Frameless B.V.
 */

const submitForm = (data) => {
  saveData(data);
};

const saveData = (data) => {
  const formData = new FormData();

  for (const key in formData) {
    if (key === 'field') {
      formData.append(key, formData[key][1]);
    } else {
      formData.append(key, formData[key]);
    }
  }
  return fetch('/api/aanwijzingsbesluit-ekpdg/create', {
    method: 'POST',
    body: formData,
  }).then((response) => {
    if (response.ok) {
      // Handle successful upload
    } else {
      // Handle error
    }
  });
};

const getData = () => {
  // Storing response
  return fetch('/api/aanwijzingsbesluit-ekpdg/', {
    method: 'GET',
  }).then((data) => {
    return data;
  });
};
