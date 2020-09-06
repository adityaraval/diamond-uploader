// sample test inputs

export const validData = [{
  input: {
    color: "G",
    cut: "D",
    clarity: "SI1",
    caratWeight: 1
  },
  output: 'f5d3371a8aae3719a939534879186c75ee8c9beac5f59a1a135a4de0d3ea194e'
}, {
  input: {
    color: "G",
    cut: "GD",
    clarity: "VS1",
    caratWeight: 0.8
  },
  output: 'e06fc79cbaa86c9243e7aa3cd172325b86b3cf0ffc0b6976902d6128b5514962'
}];


export const invalidData = [
  //inputs where required field is not present
  {
    input: {
      cut: "D",
      clarity: "SI1",
      caratWeight: 1
    },
  }, {
    input: {
      color: "G",
      clarity: "VS1",
      caratWeight: 0.8
    }
  }, {
    input: {
      color: "G",
      cut: "GD",
      caratWeight: 0.8
    },
  }, {
    input: {
      color: "G",
      cut: "GD",
      clarity: "VS1",
    }
  },
  //inputs where required field is present but empty
  {
    input: {
      color: "",
      cut: "D",
      clarity: "SI1",
      caratWeight: 1
    },
  }, {
    input: {
      color: "G",
      cut: "",
      clarity: "VS1",
      caratWeight: 0.8
    }
  }, {
    input: {
      color: "G",
      cut: "GD",
      clarity: "",
      caratWeight: 0.8
    },
  },
  //fields with invalid max length
  {
    input: {
      color: "SS", //max length must be 1, as defined in dto file for diamond
      cut: "GD",
      clarity: "SI1",
      caratWeight: 1
    },
  }, {
    input: {
      color: "G",
      cut: "SDSDS", //max length must be 3, as defined in dto file for diamond
      clarity: "VSS1",
      caratWeight: 0.8
    }
  }, {
    input: {
      color: "G",
      cut: "GD",
      clarity: "SDFD", //max length must be 3, as defined in dto file for diamond
      caratWeight: 0.8
    },
  },
  //inputs with invalid data types
  {
    input: {
      color: 1,
      cut: "D",
      clarity: "SI1",
      caratWeight: 1
    },
  }, {
    input: {
      color: "G",
      cut: 1,
      clarity: "VS1",
      caratWeight: 0.8
    }
  }, {
    input: {
      color: "G",
      cut: "GD",
      clarity: 1,
      caratWeight: 0.8
    },
  }, {
    input: {
      color: "G",
      cut: "GD",
      clarity: "VS1",
      caratWeight: "A"
    },
  }
];