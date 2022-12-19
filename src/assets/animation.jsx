export const ModelAnimate1 = {
  initial: {
    x: -20,
  },
  first: {
    x: 0,
    transition: {
      duration: .6,
    },
  },
  hidden: {
    x: "-50vw",
  },
  fullyHidden: {
    x: "-100vw",
  }
};

export const ModelAnimate2 = {
  initial: {
    x: 20,
  },
  first: {
    x: 0,
    transition: {
      duration: .6,
    },
  },
  hidden: {
    x: "-50vw",
  },
  fullyHidden: {
    x: "-100vw",
  }
};

export const ModelAnimate3 = {
  initial: {
    x: "70vw",
    transition: {
        duration: .6,
      },
  },
  first: {
    x: "30vw",
    transition: {
      duration: .3,
    },
  },
  hidden: {
    x: "-50vw",
  },
};

export const ModelAnimate4 = {
  initial: {
    x: "100vw",
  },
  first: {
    x: "30vw",
    transition: {
      duration: .3,
    },
  },
  hidden: {
    x: "-50vw",
  },
};
