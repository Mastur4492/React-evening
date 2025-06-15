export const saveForm = (id, data) => {

    localStorage.setItem(id, JSON.stringify(data));
};

export const getForm = (id) => {
    const storedData = localStorage.getItem(id);

    return storedData ? JSON.parse(storedData) : null;
};
