export const insuranceFieldType = {
  elementary: 1,
  financial: 2,
  risksLife: 4,
}

export const insuranceField = {
  [insuranceFieldType.elementary]: {
    name: 'אלמנטרי',
    nameEn: 'Elementary',
  },
  [insuranceFieldType.financial]: {
    name: 'פיננסי',
    nameEn: 'Financial',
  },
  [insuranceFieldType.risksLife]: {
    name: 'סיכונים וחיים',
    nameEn: 'Risks & Life',
  },
}
