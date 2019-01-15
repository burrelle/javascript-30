import strip from '.';

describe('Sort without articles', () => {
  test('Articles are removed', () => {
    const bandName = 'The Devil Wears Prada';
    const stripped = strip(bandName);
    expect(stripped).not.toContain('The');
  });
});
