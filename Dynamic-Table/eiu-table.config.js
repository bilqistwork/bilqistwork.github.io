const config = {
  controlName: "Table",
  description: "Editable Table for NAC",
  groupName: "Elistec Form Controls",
  fallbackDisableSubmit: true,
  iconUrl: "repeating-section",
  searchTerms: ["list", "table", "repeat", "section", "repeating section", "elistec", "eiu"],
  pluginAuthor: "Nintex, Zulfikar",
  standardProperties: {
    readOnly: true,
    required: false,
    description: true,
    visibility: true,
  },
  version: "2.0",
  properties: {
    collection: {
      type: "string",
      title: "JSON Source",
    },
    value: {
      type: "string",
      title: "Updated JSON",
      isValueField: true,
    },
    pageSize: {
      type: "integer",
      title: "Page Size",
    },
    searchable: {
      type: "boolean",
      title: "Searchable",
      defaultValue: true,
    },
    rowNumber: {
      type: "boolean",
      title: "Row Number",
    },
    lookupLabels: {
      type: "string",
      title: "Lookup Labels",
      defaultValue: JSON.stringify([
        ["satu", "dua", "tiga"],
        ["empat", "lima", "enam"],
      ]),
    },
    lookupValues: {
      type: "string",
      title: "Lookup Values",
      defaultValue: JSON.stringify([
        [1, 2, 3],
        [4, 5, 6],
      ]),
    },
    lookupMapping: {
      type: "string",
      title: "Lookup Mapping",
      defaultValue: JSON.stringify(["Event", "Options"]),
    },
    computedFieldsMapping: {
      type: "string",
      title: "Computed Fields Mapping",
      defaultValue: JSON.stringify(["TotalPrice", "Options"]),
    },
    computedFieldsFormula: {
      type: "string",
      title: "Computed Fields Formula",
      defaultValue: JSON.stringify(["QTY * UnitPrice", "Options"]),
    }

  },
};

export { config };
