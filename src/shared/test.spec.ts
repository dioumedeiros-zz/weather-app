import { IsValidCache, kelvinToCelsius } from '.';

describe('Util functions', () => {
  it('should be able to convert Kelvin in Celsius', () => {
    const result = kelvinToCelsius(287.92);

    expect(result).toBe(15);
  });

  it('should be able to verify is a valid cache', () => {
    const oldDate = new Date();
    oldDate.setMinutes(2);

    const result = IsValidCache(oldDate.getTime());

    expect(result).toBe(false);
  });
});
