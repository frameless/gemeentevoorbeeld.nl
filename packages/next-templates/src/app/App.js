/**
 * @license EUPL-1.2
 * Copyright (c) 2024 Frameless B.V.
 */

const submitForm = (data) => {
    const formData = saveData(data);

    return fetch("/api/aanwijzingsbesluit-ekpdg/create", {
        method: "POST",
        body: formData,
    }).then((response) => {
        if (response.ok) {
            // Handle successful upload
        } else {
            // Handle error
        }
    });
};

const saveData = (data) => {
    const formData = new FormData();

    for (let i = 1; i + 1 < data.domains.length; i++) formData.append(`domain${i == 1 ? '' : i}`, data.domains[i]);
    data = { ...data, picture: data.picture[0].name };
    formData.append("", JSON.stringify(data));
};

const getData = () => {
    const
};