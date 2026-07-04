/**
 * Calculate years of experience from a start date.
 * Accounts for whether the anniversary has passed this year.
 */
export function calcYearsExp(startDate: Date, now: Date = new Date()): number {
  let years = now.getFullYear() - startDate.getFullYear();
  const notYet =
    now.getMonth() < startDate.getMonth() ||
    (now.getMonth() === startDate.getMonth() &&
      now.getDate() < startDate.getDate());
  if (notYet) years -= 1;
  return years;
}

/**
 * Returns a CSS class from an array based on index (cycles via modulo).
 */
export function getSkillClass(i: number, classes: string[]): string {
  return classes[i % classes.length];
}

/**
 * Returns a random CSS class from an array.
 */
export function getRandomClass(classes: string[]): string {
  return classes[Math.floor(Math.random() * classes.length)];
}
