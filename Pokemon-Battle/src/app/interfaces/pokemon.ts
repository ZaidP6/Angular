export interface PokemonResponse {
    id: number
    name: string
    accuracy: number
    effect_chance: any
    pp: number
    priority: number
    power: number
    contest_combos: ContestCombos
  }
  
  export interface ContestCombos {
    normal: Normal
    super: Super
  }
  
  export interface Normal {
    use_before: UseBefore[]
    use_after: any
  }
  
  export interface UseBefore {
    name: string
    url: string
  }
  
  export interface Super {
    use_before: any
    use_after: any
  }
  
  
  
  
  