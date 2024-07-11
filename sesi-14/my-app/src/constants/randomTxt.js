export const randomText = Array.from({ length: 30 }, (_, index) => ({
  title: `Title ${index + 1}`,
  description: `Description ${index + 1}`,
}));