export type FetchPokemon = {
  // name: string;
  types: {
    slot: number;
    type: {
      name: string;
      url: string;
    };
  }[];
  species: {
    name: string;
    url: string;
  };
};

export type FetchPokemonType = {
  names: { name: string }[];
};

export type FetchSpeciesPokemon = {
  names: {
    language: {
      name: string;
      url: string;
    };
    name: string;
  }[];
};
