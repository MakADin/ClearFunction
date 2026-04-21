import { getHealthStatus } from '../js/health';

test.each([
  { name: 'Маг', health: 90, expected: 'healthy' },
  { name: 'Варвар', health: 50, expected: 'wounded' },
  { name: 'Лучник', health: 35, expected: 'wounded' },
  { name: 'P.E.K.K.A', health: 14, expected: 'critical' },
])("Должен вернуться корректный статус $expected со значение здоровья $health", ({name, health, expected}) => {
  const result = getHealthStatus({name, health});

  expect(result).toBe(expected);
});
