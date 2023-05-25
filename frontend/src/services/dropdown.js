export const convertListToOptions = (list, contentsKey) => {
  return list.map((element) => {
    const option = {};
    if (element.profile) {
      option.profile = element.profile;
    }

    option.contents = element[contentsKey];

    if (element.index === parseInt(-1)) {
      option.index = element.index;
    }

    option.index = element.index;
    return option;
  });
};
