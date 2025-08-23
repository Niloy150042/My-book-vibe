const getReadListFromStorage = () => {
  const storedList = localStorage.getItem("Read-list");
  if (storedList) {
    const myReadList = JSON.parse(storedList);
    return myReadList;
  } else {
    return [];
  }
};
const addToReadList = (id) => {
  const storedLists = getReadListFromStorage();

  if (storedLists.includes(id)) {
    alert("this id is already in store");
  } else {
    storedLists.push(id);
    const storedListr = JSON.stringify(storedLists);
    localStorage.setItem("Read-list", storedListr);
  }
};

export { addToReadList , getReadListFromStorage };
