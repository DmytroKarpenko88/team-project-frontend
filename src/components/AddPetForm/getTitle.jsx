const getTitle = data => {
  let title = 'Add';
  switch (data.category) {
    case 'sell':
      title = `${title} pet for sell`;
      break;
    case 'lost-found':
      title = `${title} lost or found pet`;
      break;
    case 'in-good-hands':
      title = `${title} pet for 'in good hands'`;
      break;
    default:
      title = 'Add pet';
  }
  return title;
};

export default getTitle;
